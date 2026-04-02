import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number, decimals: number = 5): string {
  return num.toFixed(decimals)
}

export function formatBalance(value: string): string {
  const num = parseFloat(value.replace(/,/g, ''))
  if (isNaN(num)) return value
  return num.toLocaleString('en-US')
}

export function parseBalance(value: string): number {
  return parseFloat(value.replace(/,/g, '')) || 0
}
