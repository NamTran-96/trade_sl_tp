'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Calculator } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const t = useTranslations('header')

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 shadow-lg group-hover:shadow-purple-300 transition-shadow">
            <Calculator className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            {t('title')}
          </span>
        </Link>
        
        <LanguageSwitcher />
      </div>
    </header>
  )
}
