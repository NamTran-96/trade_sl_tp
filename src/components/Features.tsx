'use client'

import { useTranslations } from 'next-intl'
import { Zap, Shield, Globe2, Lock } from 'lucide-react'

const icons = [Zap, Shield, Globe2, Lock]

export function Features() {
  const t = useTranslations('features')

  const features = [
    { key: 'feature1', icon: icons[0] },
    { key: 'feature2', icon: icons[1] },
    { key: 'feature3', icon: icons[2] },
    { key: 'feature4', icon: icons[3] },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ key, icon: Icon }, index) => (
            <div 
              key={key}
              className="group relative p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/50 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {t(`${key}.title`)}
              </h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {t(`${key}.description`)}
              </p>
              
              {/* Decorative number */}
              <span className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-purple-100 transition-colors">
                {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
