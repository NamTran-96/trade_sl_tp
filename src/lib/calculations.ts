// Symbol configuration with pip values and decimals
export interface SymbolConfig {
  name: string
  displayName: string
  pipValue: number // Value per pip per lot
  decimals: number // Price decimal places
  contractSize: number
}

export const SUPPORTED_SYMBOLS: Record<string, SymbolConfig> = {
  audusd_symbol: {
    name: 'audusd_symbol',
    displayName: 'AUD/USD',
    pipValue: 10,
    decimals: 5,
    contractSize: 100000
  },
  eurgbp_symbol: {
    name: 'eurgbp_symbol',
    displayName: 'EUR/GBP',
    pipValue: 10,
    decimals: 5,
    contractSize: 100000
  },
  eurjpy_symbol: {
    name: 'eurjpy_symbol',
    displayName: 'EUR/JPY',
    pipValue: 1000 / 100, // Approximately, varies with JPY rate
    decimals: 3,
    contractSize: 100000
  },
  eurusd_symbol: {
    name: 'eurusd_symbol',
    displayName: 'EUR/USD',
    pipValue: 10,
    decimals: 5,
    contractSize: 100000
  },
  gbpaud_symbol: {
    name: 'gbpaud_symbol',
    displayName: 'GBP/AUD',
    pipValue: 10,
    decimals: 5,
    contractSize: 100000
  },
  gbpjpy_symbol: {
    name: 'gbpjpy_symbol',
    displayName: 'GBP/JPY',
    pipValue: 1000 / 100,
    decimals: 3,
    contractSize: 100000
  },
  gbpusd_symbol: {
    name: 'gbpusd_symbol',
    displayName: 'GBP/USD',
    pipValue: 10,
    decimals: 5,
    contractSize: 100000
  },
  nzdusd_symbol: {
    name: 'nzdusd_symbol',
    displayName: 'NZD/USD',
    pipValue: 10,
    decimals: 5,
    contractSize: 100000
  },
  usdchf_symbol: {
    name: 'usdchf_symbol',
    displayName: 'USD/CHF',
    pipValue: 10,
    decimals: 5,
    contractSize: 100000
  },
  usdjpy_symbol: {
    name: 'usdjpy_symbol',
    displayName: 'USD/JPY',
    pipValue: 1000 / 100,
    decimals: 3,
    contractSize: 100000
  },
  xauusd_symbol: {
    name: 'xauusd_symbol',
    displayName: 'XAU/USD (Gold)',
    pipValue: 10,
    decimals: 2,
    contractSize: 100
  }
}

export type Side = 'BUY' | 'SELL'

export interface CalculationInput {
  accountBalance: number
  side: Side
  slPercent: number
  tpPercent: number
  lot: number
  symbol: string
  entryPrice: number
}

export interface CalculationResult {
  slPrice: number
  tpPrice: number
  slPips: number
  tpPips: number
  slDelta: number
  tpDelta: number
  potentialLoss: number
  potentialProfit: number
}

/**
 * Calculate SL and TP prices based on account balance percentage risk
 * 
 * Formula:
 * Risk Amount = Account Balance × (SL% / 100)
 * Pips = Risk Amount / (Pip Value × Lot)
 * SL Price = Entry Price ± (Pips × Pip Size)
 */
export function calculateSLTP(input: CalculationInput): CalculationResult {
  const symbolConfig = SUPPORTED_SYMBOLS[input.symbol]
  
  if (!symbolConfig) {
    throw new Error(`Unsupported symbol: ${input.symbol}`)
  }
  
  const { pipValue, decimals } = symbolConfig
  
  // Calculate pip size based on decimals
  const pipSize = decimals >= 4 ? 0.0001 : (decimals === 3 ? 0.01 : 0.01)
  
  // Risk/Reward amounts
  const riskAmount = input.accountBalance * (input.slPercent / 100)
  const rewardAmount = input.accountBalance * (input.tpPercent / 100)
  
  // Calculate pips needed
  const slPips = riskAmount / (pipValue * input.lot)
  const tpPips = rewardAmount / (pipValue * input.lot)
  
  // Calculate price deltas
  const slDelta = slPips * pipSize
  const tpDelta = tpPips * pipSize
  
  let slPrice: number
  let tpPrice: number
  
  if (input.side === 'BUY') {
    // For BUY: SL is below entry, TP is above entry
    slPrice = input.entryPrice - slDelta
    tpPrice = input.entryPrice + tpDelta
  } else {
    // For SELL: SL is above entry, TP is below entry
    slPrice = input.entryPrice + slDelta
    tpPrice = input.entryPrice - tpDelta
  }
  
  return {
    slPrice: parseFloat(slPrice.toFixed(decimals)),
    tpPrice: parseFloat(tpPrice.toFixed(decimals)),
    slPips: parseFloat(slPips.toFixed(1)),
    tpPips: parseFloat(tpPips.toFixed(1)),
    slDelta: parseFloat(slDelta.toFixed(decimals)),
    tpDelta: parseFloat(tpDelta.toFixed(decimals)),
    potentialLoss: parseFloat(riskAmount.toFixed(2)),
    potentialProfit: parseFloat(rewardAmount.toFixed(2))
  }
}

// Get symbol display names for dropdown
export function getSymbolOptions() {
  return Object.entries(SUPPORTED_SYMBOLS).map(([key, config]) => ({
    value: key,
    label: config.displayName
  }))
}
