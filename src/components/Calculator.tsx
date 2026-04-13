'use client'

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
import { getSymbolOptions, type Side, SUPPORTED_SYMBOLS } from '@/lib/calculations'
import { calculateSLTPFromApi } from '@/lib/api'
import { useToast } from '@/hooks/use-toast'
import { useCalculatorStore } from '@/store/calculatorStore'

// Inline error message — translates the Zod key via the "validation" namespace
function FieldError({ msg }: { msg?: string }) {
  const tV = useTranslations('validation')
  if (!msg) return null
  const text = tV.has(msg as Parameters<typeof tV>[0])
    ? tV(msg as Parameters<typeof tV>[0])
    : msg
  return <p className="text-xs text-red-500 mt-1">{text}</p>
}

export function Calculator() {
  const t = useTranslations('calculator')
  const tResults = useTranslations('results')
  const { toast } = useToast()

  const {
    form, errors, result, apiBalance, askBid,
    isCalculating, copiedField,
    setField, validate, setResult, setIsCalculating, setCopiedField, reset,
  } = useCalculatorStore()

  const symbolOptions = getSymbolOptions()

  const handleCalculate = async () => {
    if (!validate()) return

    const sl = parseFloat(form.slPercent)
    const tp = parseFloat(form.tpPercent)
    const lotSize = parseFloat(form.lot)
    const balanceValue = parseFloat(form.balance)
    const entry = form.entryPrice ? parseFloat(form.entryPrice) : undefined

    setIsCalculating(true)
    try {
      const { result: calcResult, balance: responseBalance, ask, bid } =
        await calculateSLTPFromApi({
          sl,
          tp,
          lot: lotSize,
          symbol: form.symbol,
          side: (form.side as Side).toLowerCase(),
          ...(entry && entry > 0 ? { price: entry } : {}),
          balance: balanceValue,
        })

      setResult(calcResult, responseBalance, { ask, bid })
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
    toast({ title: tResults('copied'), variant: 'success', duration: 2000 })
    setTimeout(() => setCopiedField(null), 2000)
  }

  const decimals = form.symbol ? SUPPORTED_SYMBOLS[form.symbol]?.decimals || 5 : 5

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
                <Label htmlFor="balance">
                  {t('accountBalance')}
                  <span className="text-red-600 ml-0.5">*</span>
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">$</span>
                  <Input
                    id="balance"
                    type="number"
                    step="1"
                    min="1"
                    placeholder={t('accountBalancePlaceholder')}
                    value={form.balance}
                    onChange={(e) => setField('balance', e.target.value)}
                    error={errors.balance}
                    className="pl-7"
                  />
                </div>
                <FieldError msg={errors.balance} />
              </div>

              {/* Side & Symbol Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>
                    {t('side')}
                    <span className="text-red-600 ml-0.5">*</span>
                  </Label>
                  <Select value={form.side} onValueChange={(v) => setField('side', v)}>
                    <SelectTrigger className={errors.side ? 'border-red-400' : ''}>
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
                  <FieldError msg={errors.side} />
                </div>

                <div className="space-y-2">
                  <Label>
                    {t('symbol')}
                    <span className="text-red-600 ml-0.5">*</span>
                  </Label>
                  <Select value={form.symbol} onValueChange={(v) => setField('symbol', v)}>
                    <SelectTrigger className={errors.symbol ? 'border-red-400' : ''}>
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
                  <FieldError msg={errors.symbol} />
                </div>
              </div>

              {/* SL & TP Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="slPercent">
                    {t('slPercent')}
                    <span className="text-red-600 ml-0.5">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="slPercent"
                      type="number"
                      step="0.1"
                      min="0.1"
                      max="100"
                      placeholder={t('slPercentPlaceholder')}
                      value={form.slPercent}
                      onChange={(e) => setField('slPercent', e.target.value)}
                      error={errors.slPercent}
                      className="pr-8"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                  <FieldError msg={errors.slPercent} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tpPercent">
                    {t('tpPercent')}
                    <span className="text-red-600 ml-0.5">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="tpPercent"
                      type="number"
                      step="0.1"
                      min="0.1"
                      max="100"
                      placeholder={t('tpPercentPlaceholder')}
                      value={form.tpPercent}
                      onChange={(e) => setField('tpPercent', e.target.value)}
                      error={errors.tpPercent}
                      className="pr-8"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                  <FieldError msg={errors.tpPercent} />
                </div>
              </div>

              {/* Lot & Entry Price Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="lot">
                    {t('lot')}
                    <span className="text-red-600 ml-0.5">*</span>
                  </Label>
                  <Input
                    id="lot"
                    type="number"
                    step="0.01"
                    min="0.01"
                    placeholder={t('lotPlaceholder')}
                    value={form.lot}
                    onChange={(e) => setField('lot', e.target.value)}
                    error={errors.lot}
                  />
                  <FieldError msg={errors.lot} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="entryPrice">
                    {t('entryPrice')}
                  </Label>
                  <Input
                    id="entryPrice"
                    type="number"
                    step="0.00001"
                    min="0"
                    placeholder={t('entryPricePlaceholder')}
                    value={form.entryPrice ?? ''}
                    onChange={(e) => setField('entryPrice', e.target.value)}
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
                <Button variant="outline" onClick={reset}>
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
