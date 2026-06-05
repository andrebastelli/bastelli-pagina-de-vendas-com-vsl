import { Hero } from '@/components/Hero'
import { BlocoOproblemareal } from '@/components/BlocoOproblemareal'
import { ViradadeChave } from '@/components/ViradadeChave'
import { RodadoEcommerce } from '@/components/RodadoEcommerce'
import { BlocoApresentacaodasolucao } from '@/components/BlocoApresentacaodasolucao'
import { Aprendizado } from '@/components/Aprendizado'
import { Bonus } from '@/components/Bonus'
import { BrunoBastelli } from '@/components/BrunoBastelli'
import { BlocoParaQuemENaoE } from '@/components/BlocoParaQuemENaoE'
import { Oferta } from '@/components/Oferta'
import { FAQ } from '@/components/FAQ'
import { CTAFinal } from '@/components/CTAFinal'
import { Footer } from '@/components/Footer' 

export function VendasPage() {
  return (
    <>
  <div className="min-h-screen bg-grid">
    <main>
      <Hero />
      <BlocoOproblemareal />
      <ViradadeChave />
      <RodadoEcommerce />
      <BlocoApresentacaodasolucao />
      <Aprendizado />
      <Bonus />
      <BrunoBastelli />
      <BlocoParaQuemENaoE />
      <Oferta />
      <FAQ />
      <CTAFinal />
    </main>

    <Footer />
  </div>
</>
  )
}
