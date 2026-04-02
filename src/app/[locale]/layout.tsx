import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/routing'
import { Toaster } from '@/components/ui/toaster'
import { DevToolsProtection } from '@/components/DevToolsProtection'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  
  // Import messages for metadata
  const messages = await import(`../../../messages/${locale}.json`)
  const t = messages.default.metadata

  return {
    title: t.title,
    description: t.description,
    keywords: ['SL/TP Calculator', 'Stop Loss', 'Take Profit', 'Forex', 'Trading', 'Risk Management'],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: t.title,
      description: t.description,
      type: 'website',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  if (!hasLocale(locales, locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <DevToolsProtection />
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
