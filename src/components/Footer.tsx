'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Calculator } from 'lucide-react'

export function Footer() {
  const t = useTranslations('footer')
  const tHeader = useTranslations('header')

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600">
              <Calculator className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">
              {tHeader('title')}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="hover:text-white transition-colors">
              {t('terms')}
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              {t('privacy')}
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">
            {t('disclaimer')}
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-500">
          {t('copyright')}
        </div>
      </div>
    </footer>
  )
}
