
import { Hero } from '@/components/Hero'
import { ProblemStrip } from '@/components/ProblemStrip'
import { HowItWorks } from '@/components/HowItWorks'
import { Features } from '@/components/Features'
import { CustomerView } from '@/components/CustomerView'
import { Testimonials} from '@/components/Testimonials'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { FinalCTA } from '@/components/FinalCTA'

export default function Home() {
  return (
    <>
    <Hero />
    {/* <ProblemStrip /> */}
    <HowItWorks />
    <Features />
    <CustomerView />
    <Pricing />
    <Testimonials />
    <FAQ />
    <FinalCTA />
    </>
  )
}
