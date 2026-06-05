import { ArrowRight, AlertTriangle, Sparkles } from 'lucide-react'
import { siteData } from '@/data/data'
import { events } from '@/utils/analytics'

export function Hero() {
  const ctaLabel = 'Quero entender meu e-commerce de verdade'

  const handleCtaClick = () => {
    events.ctaClick(ctaLabel)
    events.checkoutClick()
  }

  return (
    <section className="relative overflow-hidden bg-grid px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      {/* Background decorativo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D57241]/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[#1F2937]/5 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">

        <h1 className="mx-auto max-w-5xl text-balance text-[2.35rem] font-black leading-[1.03] tracking-[-0.045em] text-[#1F2937] sm:text-5xl lg:text-7xl">
          Sua loja virtual recebe visitas, mas{' '}
          <span className="relative inline-block text-[#D57241]">
            não vende
            <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
          </span>{' '}
          como deveria?
        </h1>

        <p className="mx-auto mt-6 max-w-4xl text-pretty text-base font-semibold leading-relaxed text-[#1F2937]/75 sm:text-lg lg:text-xl">
          Você já fez tráfego pago, trocou criativo, postou mais no Instagram,
          fez promoção, ajustou produto, mudou ferramenta… e mesmo assim
          continua sem entender por que o seu e-commerce não vende como deveria?
        </p>

        <div className="mx-auto mt-7 max-w-4xl rounded-[1.7rem] border border-[#D57241]/20 bg-white/80 p-5 text-center shadow-xl shadow-black/5 backdrop-blur-sm sm:p-7">
          <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg">
            Antes de colocar mais dinheiro em anúncios, plataformas ou novas
            “soluções”, assista esse vídeo.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-relaxed text-[#1F2937]/70 sm:text-base">
            Nele, o Bruno, especialista em e-commerce, te mostra por que muitos
            lojistas continuam travados mesmo se esforçando todos os dias — e o
            que você precisa entender para parar de vender no escuro.
          </p>
        </div>

        {/* VSL */}
        <div className="relative mx-auto mt-9 max-w-4xl">
          <div className="absolute -inset-4 rounded-[2.4rem] bg-[#D57241]/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-2xl shadow-black/10">
            <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-[#1F2937]">
  <iframe
    className="h-full w-full"
    src="https://www.youtube.com/embed/8r-eyP_bdlU?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1"
    title="VSL Introdução ao E-commerce Bastelli"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
</div>

            <div className="mt-4 rounded-[1.4rem] bg-[#FFF8F3] p-4">
              <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 sm:flex-row sm:justify-center sm:text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D57241]/12 text-[#D57241]">
                  <Sparkles className="h-5 w-5" />
                </div>

                <p className="text-sm font-bold leading-snug text-[#1F2937]/80">
                  Assista antes de tomar qualquer nova decisão no seu
                  e-commerce.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-9 flex flex-col items-center gap-3">
          <a
            href={siteData.checkoutUrl}
            onClick={handleCtaClick}
            target="_blank"
            className="group relative inline-flex w-full max-w-sm items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#D57241] px-6 py-4 text-center text-base font-black text-[#F5F1EC] shadow-xl shadow-[#D57241]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c56337] hover:shadow-2xl hover:shadow-[#D57241]/40 sm:w-auto sm:max-w-none sm:px-8 sm:py-5 sm:text-lg"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">{ctaLabel}</span>
            <ArrowRight className="relative h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <p className="max-w-md text-center text-sm font-medium leading-relaxed text-[#1F2937]/60">
            Curso + materiais práticos para estudar, diagnosticar e aplicar no
            seu negócio.
          </p>
        </div>
      </div>
    </section>
  )
}