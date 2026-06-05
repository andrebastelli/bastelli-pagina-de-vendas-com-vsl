import { Hero } from '@/components/Hero'
import { Blocodeidentificacao } from '@/components/Blocodeidentificacao'
import { BlocoQuebradecrenca } from '@/components/BlocoQuebradecrenca'
import { BlocoOproblemareal } from '@/components/BlocoOproblemareal'
import { BlocoApresentacaodasolucao } from '@/components/BlocoApresentacaodasolucao'
import { RodadoEcommerce } from '@/components/RodadoEcommerce'
import { Aprendizado } from '@/components/Aprendizado'
import { Bonus } from '@/components/Bonus'
import { BlocoParaQuemENaoE } from '@/components/BlocoParaQuemENaoE'
import { BrunoBastelli } from '@/components/BrunoBastelli'
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
      <Blocodeidentificacao />
      <BlocoQuebradecrenca />
      
      <BlocoApresentacaodasolucao />
      <RodadoEcommerce />
      <Aprendizado />
      <Bonus />
      <BlocoParaQuemENaoE />
      <BrunoBastelli />
      <Oferta />
      <FAQ />
      <CTAFinal />
    </main>

    <Footer />
  </div>
</>
  )
}
