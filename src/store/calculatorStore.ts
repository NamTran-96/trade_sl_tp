import { create } from 'zustand'
import { z } from 'zod'
import type { CalculationResult } from '@/lib/calculations'

// ---------------------------------------------------------------------------
// Zod schema – only entryPrice is optional
// ---------------------------------------------------------------------------
export const calculatorSchema = z.object({
  balance: z
    .string()
    .min(1, 'required')
    .refine((v) => !isNaN(parseFloat(v)) && parseFloat(v) > 0, 'positiveNumber'),
  side: z
    .string()
    .min(1, 'required')
    .refine((v) => v === 'BUY' || v === 'SELL', 'required'),
  slPercent: z
    .string()
    .min(1, 'required')
    .refine(
      (v) => { const n = parseFloat(v); return !isNaN(n) && n >= 0.1 && n <= 100 },
      'percentRange',
    ),
  tpPercent: z
    .string()
    .min(1, 'required')
    .refine(
      (v) => { const n = parseFloat(v); return !isNaN(n) && n >= 0.1 && n <= 100 },
      'percentRange',
    ),
  lot: z
    .string()
    .min(1, 'required')
    .refine((v) => !isNaN(parseFloat(v)) && parseFloat(v) > 0, 'positiveNumber'),
  symbol: z.string().min(1, 'required'),
  entryPrice: z.string().optional(), // ← the only optional field
})

// Use a looser shape for the live form (fields start as empty strings)
export type CalculatorFormValues = {
  balance: string
  side: string
  slPercent: string
  tpPercent: string
  lot: string
  symbol: string
  entryPrice?: string
}
export type FormErrors = Partial<Record<keyof CalculatorFormValues, string>>

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------
interface CalculatorState {
  // form
  form: CalculatorFormValues
  errors: FormErrors

  // results
  result: CalculationResult | null
  apiBalance: number | null
  askBid: { ask: number; bid: number } | null
  isCalculating: boolean
  copiedField: string | null

  // actions
  setField: <K extends keyof CalculatorFormValues>(key: K, value: string) => void
  validate: () => boolean
  setResult: (r: CalculationResult | null, balance: number | null, ab: { ask: number; bid: number } | null) => void
  setIsCalculating: (v: boolean) => void
  setCopiedField: (v: string | null) => void
  reset: () => void
}

const emptyForm: CalculatorFormValues = {
  balance: '',
  side: '',
  slPercent: '',
  tpPercent: '',
  lot: '',
  symbol: '',
  entryPrice: '',
}

export const useCalculatorStore = create<CalculatorState>((set, get) => ({
  form: { ...emptyForm },
  errors: {},
  result: null,
  apiBalance: null,
  askBid: null,
  isCalculating: false,
  copiedField: null,

  setField: (key, value) =>
    set((s) => ({
      form: { ...s.form, [key]: value },
      errors: { ...s.errors, [key]: undefined }, // clear error on change
    })),

  validate: () => {
    const parsed = calculatorSchema.safeParse(get().form)
    if (parsed.success) {
      set({ errors: {} })
      return true
    }
    const errs: FormErrors = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof FormErrors
      if (!errs[key]) errs[key] = issue.message // first error per field
    }
    set({ errors: errs })
    return false
  },

  setResult: (result, apiBalance, askBid) => set({ result, apiBalance, askBid }),
  setIsCalculating: (isCalculating) => set({ isCalculating }),
  setCopiedField: (copiedField) => set({ copiedField }),

  reset: () =>
    set({
      form: { ...emptyForm },
      errors: {},
      result: null,
      apiBalance: null,
      askBid: null,
    }),
}))
