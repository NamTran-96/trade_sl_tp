import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware({
  ...routing,
  defaultLocale: 'en',
  localePrefix: 'as-needed'
})

export const config = {
  matcher: ['/', '/(en|vi|lo|ja|zh|th|hi)/:path*']
}
