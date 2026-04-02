'use client'

import { useTransition } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { locales, type Locale } from '@/i18n/routing'

const localeNames: Record<Locale, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
  lo: 'ພາສາລາວ',
  ja: '日本語',
  zh: '中文',
  th: 'ไทย',
  hi: 'हिन्दी'
}

export function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleChange = (newLocale: string) => {
    startTransition(() => {
      const segments = pathname.split('/')
      segments[1] = newLocale
      router.replace(segments.join('/'))
    })
  }

  return (
    <Select value={locale} onValueChange={handleChange} disabled={isPending}>
      <SelectTrigger className="w-[140px] bg-white/10 border-white/20 text-gray-700">
        <Globe className="w-4 h-4 mr-2" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {locales.map((loc) => (
          <SelectItem key={loc} value={loc}>
            {localeNames[loc]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
