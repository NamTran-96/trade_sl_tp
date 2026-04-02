import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Calculator } from '@/components/Calculator'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Calculator />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
