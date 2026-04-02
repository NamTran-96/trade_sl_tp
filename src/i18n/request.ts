import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'

export const locales = ['en', 'vi', 'lo', 'ja', 'zh', 'th', 'hi'] as const
export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
  lo: 'ພາສາລາວ',
  ja: '日本語',
  zh: '中文',
  th: 'ไทย',
  hi: 'हिन्दी'
}

const messageImports = {
  en: () => import('../../messages/en.json'),
  vi: () => import('../../messages/vi.json'),
  lo: () => import('../../messages/lo.json'),
  ja: () => import('../../messages/ja.json'),
  zh: () => import('../../messages/zh.json'),
  th: () => import('../../messages/th.json'),
  hi: () => import('../../messages/hi.json'),
} as const

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(locales, requested) ? requested : 'en'
  
  const messages = (await messageImports[locale as Locale]()).default
  
  return {
    locale,
    messages
  }
})
