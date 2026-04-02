'use client'

import { useTranslations } from 'next-intl'
import { ChevronDown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const t = useTranslations('hero')

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white py-20 lg:py-32">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-700 mb-6">
            <Sparkles className="h-4 w-4" />
            {t('badge')}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            <span className="block">{t('title')}</span>
            <span className="block bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              {t('subtitle')}
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
            {t('description')}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={scrollToCalculator}
              className="min-w-[200px] text-base"
            >
              {t('cta')}
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="min-w-[200px] text-base"
            >
              {t('secondaryCta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
