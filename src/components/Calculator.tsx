'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Copy, Check, TrendingUp, TrendingDown, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { getSymbolOptions, type Side, type CalculationResult, SUPPORTED_SYMBOLS } from '@/lib/calculations'
import { calculateSLTPFromApi } from '@/lib/api'
import { useToast } from '@/hooks/use-toast'

export function Calculator() {
  const t = useTranslations('calculator')
  const tResults = useTranslations('results')
  const { toast } = useToast()

  // Form state
  const [balance, setBalance] = useState('')
  const [side, setSide] = useState<Side | ''>('')
  const [slPercent, setSlPercent] = useState('')
  const [tpPercent, setTpPercent] = useState('')
  const [lot, setLot] = useState('')
  const [symbol, setSymbol] = useState('')
  const [entryPrice, setEntryPrice] = useState('')
  
  // Result state
  const [result, setResult] = useState<CalculationResult | null>(null)
  const [apiBalance, setApiBalance] = useState<number | null>(null)
  const [askBid, setAskBid] = useState<{ ask: number; bid: number } | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const symbolOptions = getSymbolOptions()

  const handleCalculate = async () => {
    // Validation
    const sl = parseFloat(slPercent)
    const tp = parseFloat(tpPercent)
    const lotSize = parseFloat(lot)
    const entry = parseFloat(entryPrice)
    const balanceValue = parseFloat(balance)

    if (!balanceValue || balanceValue <= 0) return
    if (!side) return
    if (!sl || sl < 0.1 || sl > 100) return
    if (!tp || tp < 0.1 || tp > 100) return
    if (!lotSize || lotSize <= 0) return
    if (!symbol) return
    if (!entry || entry <= 0) return

    setIsCalculating(true)

    try {
      const { result: calcResult, balance: responseBalance, ask, bid } = await calculateSLTPFromApi({
        sl,
        tp,
        lot: lotSize,
        symbol,
        side: side.toLowerCase(),
        price: entry,
        balance: balanceValue,
      })

      setResult(calcResult)
      setApiBalance(responseBalance)
      setAskBid({ ask, bid })
    } catch (err) {
      toast({
        title: 'Calculation Error',
        description: err instanceof Error ? err.message : 'Failed to connect to API',
        variant: 'destructive',
        duration: 4000,
      })
    } finally {
      setIsCalculating(false)
    }
  }

  const handleCopy = async (value: string, field: string) => {
    await navigator.clipboard.writeText(value)
    setCopiedField(field)
    toast({
      title: tResults('copied'),
      variant: 'success',
      duration: 2000
    })
    setTimeout(() => setCopiedField(null), 2000)
  }

  const handleReset = () => {
    setBalance('')
    setSide('')
    setSlPercent('')
    setTpPercent('')
    setLot('')
    setSymbol('')
    setEntryPrice('')
    setResult(null)
    setApiBalance(null)
    setAskBid(null)
  }

  const decimals = symbol ? SUPPORTED_SYMBOLS[symbol]?.decimals || 5 : 5

  return (
    <section id="calculator" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl bg-white shadow-xl shadow-purple-100/50 border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
              <h2 className="text-xl font-bold text-white">{t('title')}</h2>
            </div>

            {/* Form */}
            <div className="p-6 space-y-5">
              {/* Account Balance */}
              <div className="space-y-2">
                <Label htmlFor="balance">{t('accountBalance')}</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">$</span>
                  <Input
                    id="balance"
                    type="number"
                    step="1"
                    min="1"
                    placeholder={t('accountBalancePlaceholder')}
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                    className="pl-7"
                  />
                </div>
              </div>

              {/* Side & Symbol Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>{t('side')}</Label>
                  <Select value={side} onValueChange={(v) => setSide(v as Side)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('selectSide')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BUY">
                        <span className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-green-600" />
                          {t('buy')}
                        </span>
                      </SelectItem>
                      <SelectItem value="SELL">
                        <span className="flex items-center gap-2">
                          <TrendingDown className="h-4 w-4 text-red-600" />
                          {t('sell')}
                        </span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>{t('symbol')}</Label>
                  <Select value={symbol} onValueChange={setSymbol}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('selectSymbol')} />
                    </SelectTrigger>
                    <SelectContent>
                      {symbolOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* SL & TP Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="slPercent">{t('slPercent')}</Label>
                  <div className="relative">
                    <Input
                      id="slPercent"
                      type="number"
                      step="0.1"
                      min="0.1"
                      max="100"
                      placeholder={t('slPercentPlaceholder')}
                      value={slPercent}
                      onChange={(e) => setSlPercent(e.target.value)}
                      className="pr-8"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tpPercent">{t('tpPercent')}</Label>
                  <div className="relative">
                    <Input
                      id="tpPercent"
                      type="number"
                      step="0.1"
                      min="0.1"
                      max="100"
                      placeholder={t('tpPercentPlaceholder')}
                      value={tpPercent}
                      onChange={(e) => setTpPercent(e.target.value)}
                      className="pr-8"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
              </div>

              {/* Lot & Entry Price Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="lot">{t('lot')}</Label>
                  <Input
                    id="lot"
                    type="number"
                    step="0.01"
                    min="0.01"
                    placeholder={t('lotPlaceholder')}
                    value={lot}
                    onChange={(e) => setLot(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="entryPrice">{t('entryPrice')}</Label>
                  <Input
                    id="entryPrice"
                    type="number"
                    step="0.00001"
                    min="0"
                    placeholder={t('entryPricePlaceholder')}
                    value={entryPrice}
                    onChange={(e) => setEntryPrice(e.target.value)}
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <Button 
                  onClick={handleCalculate} 
                  className="flex-1"
                  disabled={isCalculating}
                >
                  {isCalculating ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      {t('calculating')}
                    </>
                  ) : (
                    t('calculate')
                  )}
                </Button>
                <Button variant="outline" onClick={handleReset}>
                  {t('reset')}
                </Button>
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="border-t border-gray-100 bg-gradient-to-b from-gray-50 to-white p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-600" />
                  {tResults('title')}
                </h3>

                <div className="grid gap-4">
                  {/* SL Price */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-red-50 border border-red-100">
                    <div>
                      <p className="text-sm text-red-600 font-medium">{tResults('slPrice')}</p>
                      <p className="text-2xl font-bold text-red-700">{result.slPrice.toFixed(decimals)}</p>
                      <p className="text-xs text-red-500 mt-1">
                        -{result.slPips} pips | -${result.potentialLoss.toLocaleString()}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant={copiedField === 'sl' ? 'success' : 'outline'}
                      onClick={() => handleCopy(result.slPrice.toFixed(decimals), 'sl')}
                      className="shrink-0"
                    >
                      {copiedField === 'sl' ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      <span className="ml-1">{copiedField === 'sl' ? tResults('copied') : tResults('copy')}</span>
                    </Button>
                  </div>

                  {/* TP Price */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-green-50 border border-green-100">
                    <div>
                      <p className="text-sm text-green-600 font-medium">{tResults('tpPrice')}</p>
                      <p className="text-2xl font-bold text-green-700">{result.tpPrice.toFixed(decimals)}</p>
                      <p className="text-xs text-green-500 mt-1">
                        +{result.tpPips} pips | +${result.potentialProfit.toLocaleString()}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant={copiedField === 'tp' ? 'success' : 'outline'}
                      onClick={() => handleCopy(result.tpPrice.toFixed(decimals), 'tp')}
                      className="shrink-0"
                    >
                      {copiedField === 'tp' ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      <span className="ml-1">{copiedField === 'tp' ? tResults('copied') : tResults('copy')}</span>
                    </Button>
                  </div>

                  {/* Risk/Reward */}
                  <div className="p-3 rounded-lg bg-purple-50 border border-purple-100 text-center">
                    <p className="text-sm text-purple-600">{tResults('riskRewardRatio')}</p>
                    <p className="text-xl font-bold text-purple-700">
                      1 : {result.potentialLoss > 0 ? (result.potentialProfit / result.potentialLoss).toFixed(2) : '∞'}
                    </p>
                  </div>

                  {/* Account Balance & Market Price from API */}
                  {(apiBalance || askBid) && (
                    <div className="grid grid-cols-3 gap-2">
                      {apiBalance && (
                        <div className="p-3 rounded-lg bg-gray-50 border border-gray-100 text-center">
                          <p className="text-xs text-gray-500">{t('accountBalance')}</p>
                          <p className="text-sm font-bold text-gray-700">${apiBalance.toLocaleString()}</p>
                        </div>
                      )}
                      {askBid && (
                        <>
                          <div className="p-3 rounded-lg bg-green-50 border border-green-100 text-center">
                            <p className="text-xs text-green-600">Ask</p>
                            <p className="text-sm font-bold text-green-700">{askBid.ask.toFixed(decimals)}</p>
                          </div>
                          <div className="p-3 rounded-lg bg-red-50 border border-red-100 text-center">
                            <p className="text-xs text-red-600">Bid</p>
                            <p className="text-sm font-bold text-red-700">{askBid.bid.toFixed(decimals)}</p>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
