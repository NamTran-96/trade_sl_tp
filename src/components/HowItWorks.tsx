'use client'

import { useTranslations } from 'next-intl'
import { ClipboardList, MousePointerClick, BadgeCheck } from 'lucide-react'

const icons = [ClipboardList, MousePointerClick, BadgeCheck]

export function HowItWorks() {
  const t = useTranslations('howItWorks')

  const steps = [
    { key: 'step1', icon: icons[0] },
    { key: 'step2', icon: icons[1] },
    { key: 'step3', icon: icons[2] },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-purple-200 via-purple-400 to-purple-600 hidden md:block" />

            <div className="space-y-12">
              {steps.map(({ key, icon: Icon }, index) => (
                <div key={key} className="relative flex gap-6 items-start group">
                  {/* Step number circle */}
                  <div className="relative flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform z-10">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-5 w-5 text-purple-600" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {t(`${key}.title`)}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed pl-8">
                      {t(`${key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
