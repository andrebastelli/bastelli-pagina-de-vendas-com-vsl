import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { BlocoOproblemareal } from '@/components/BlocoOproblemareal'
import { ViradadeChave } from '@/components/ViradadeChave'
import { BlocoQuebradecrenca } from '@/components/BlocoQuebradecrenca'
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
      <Header />
      <main>
        <Hero />
        <BlocoOproblemareal />
        <ViradadeChave />
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
    </>
  )
}
