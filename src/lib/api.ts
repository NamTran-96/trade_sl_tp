import axios from 'axios'
import { type CalculationResult, SUPPORTED_SYMBOLS } from './calculations'

const apiClient = axios.create({
  baseURL: 'https://api.bfund.us',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export interface ApiCalculateRequest {
  sl: number
  tp: number
  lot: number
  symbol: string
  side: string
  price: number
  balance: number
}

export interface ApiCalculateResponse {
  status: 'success' | 'error'
  data: {
    TP: number
    SL: number
    ask: number
    bid: number
    lot: number
    tp: number
    sl: number
    balance: number
  }
  error_message: string
  error_code: string
}

export interface ApiCalculateResult {
  result: CalculationResult
  balance: number
  ask: number
  bid: number
}

export async function calculateSLTPFromApi(
  params: ApiCalculateRequest
): Promise<ApiCalculateResult> {
  const { data: response } = await apiClient.post<ApiCalculateResponse>(
    '/calculate-price',
    params
  )

  if (response.status !== 'success') {
    throw new Error(response.error_message || 'Calculation failed')
  }

  const { data } = response
  const symbolConfig = SUPPORTED_SYMBOLS[params.symbol]
  const decimals = symbolConfig?.decimals ?? 5
  const pipSize = decimals >= 4 ? 0.0001 : 0.01

  const slDelta = Math.abs(data.SL - params.price)
  const tpDelta = Math.abs(data.TP - params.price)
  const slPips = slDelta / pipSize
  const tpPips = tpDelta / pipSize

  const potentialLoss = data.balance * (data.sl / 100)
  const potentialProfit = data.balance * (data.tp / 100)

  return {
    result: {
      slPrice: data.SL,
      tpPrice: data.TP,
      slPips: parseFloat(slPips.toFixed(1)),
      tpPips: parseFloat(tpPips.toFixed(1)),
      slDelta: parseFloat(slDelta.toFixed(decimals)),
      tpDelta: parseFloat(tpDelta.toFixed(decimals)),
      potentialLoss: parseFloat(potentialLoss.toFixed(2)),
      potentialProfit: parseFloat(potentialProfit.toFixed(2)),
    },
    balance: data.balance,
    ask: data.ask,
    bid: data.bid,
  }
}
