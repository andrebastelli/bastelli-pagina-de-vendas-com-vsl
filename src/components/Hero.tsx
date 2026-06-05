import { ArrowRight, AlertTriangle, Eye, Sparkles } from 'lucide-react'
import { siteData } from '@/data/data'
import { events } from '@/utils/analytics'

export function Hero() {
  const ctaLabel = 'Quero entender o que trava minha loja'

  const handleCtaClick = () => {
    events.ctaClick(ctaLabel)
    events.checkoutClick() 
  }

  return (
    <section className="relative overflow-hidden bg-grid px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="relative mx-auto max-w-5xl text-center">
        
        {/* Headline */}
        <h1 className="mx-auto max-w-5xl text-[2.45rem] font-black leading-[1.03] tracking-[-0.045em] text-[#1F2937] text-balance sm:text-5xl lg:text-7xl">
          Sua loja virtual recebe visitas, mas{' '}
          <span className="relative inline-block text-[#D57241]">
            não vende
            <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
          </span>{' '}
          como deveria?
        </h1>

        {/* Subheadline principal */}
        <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-relaxed text-[#1F2937]/75 text-pretty sm:text-lg lg:text-xl">
          Você já escolheu plataforma, cadastrou produtos, postou no Instagram,
          rodou anúncios… e as vendas continuam travadas?
        </p>

        {/* Card de destaque */}
        <div className="mx-auto mt-7 max-w-4xl overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/85 p-5 text-left shadow-xl shadow-black/5 backdrop-blur-sm sm:p-7">
          <div className="grid gap-5 lg:grid-cols-[auto_1fr] lg:items-start">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#284A78] text-[#F5F1EC] shadow-lg lg:mx-0">
              <Eye className="h-7 w-7" />
            </div>

            <div>
              <p className="text-base font-medium leading-relaxed text-[#1F2937]/75 sm:text-lg">
                Talvez o problema não seja você. É a falta de visão sobre o que
                realmente sustenta um e-commerce.
              </p>

              <p className="mt-4 text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg">
                O{' '}
                <span className="text-[#D57241]">
                  Introdução ao E-commerce Bastelli
                </span>{' '}
                foi criado para quem está cansado de tentar vender no escuro e
                quer enxergar, de verdade, por que uma loja vende ou não vende.
              </p>
            </div>
          </div>
        </div>

        {/* Frase de autoridade */}
        <div className="mx-auto mt-6 max-w-3xl rounded-3xl border border-[#D57241]/20 bg-[#FFF8F3] px-5 py-5 shadow-sm">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:text-left">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#D57241]/12 text-[#D57241]">
              <Sparkles className="h-5 w-5" />
            </div>

            <p className="text-sm font-bold leading-relaxed text-[#1F2937]/80 sm:text-base">
              Sem promessa milagrosa. Sem fórmula para enriquecer em sete dias.
              É o primeiro passo para destravar seu negócio e começar a crescer
              com consciência.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href={siteData.checkoutUrl}
            onClick={handleCtaClick}
            target="_blank"
            className="group inline-flex w-full max-w-md items-center justify-center gap-2 rounded-2xl bg-[#D57241] px-6 py-4 text-center text-base font-black text-[#F5F1EC] shadow-xl shadow-[#D57241]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c56337] hover:shadow-2xl hover:shadow-[#D57241]/35 sm:w-auto sm:max-w-none sm:px-9 sm:py-5 sm:text-lg"
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}