import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import HowItWorks from '@/components/HowItWorks'
import Calculator from '@/components/Calculator'
import Testimonials from '@/components/Testimonials'
import FaqSection from '@/components/FaqSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <Calculator />
        <Testimonials />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
