import {
  CheckCircle2,
  XCircle,
  Store,
  Compass,
  MousePointerClick,
  BriefcaseBusiness,
  Brain,
  ZapOff,
  TimerOff,
  BarChart3,
  PackageX,
  ShieldCheck,
} from 'lucide-react'

export function BlocoParaQuemENaoE() {
  const paraQuem = [
    {
      icon: Compass,
      text: 'Quem quer começar uma loja virtual com mais clareza e menos improviso.',
    },
    {
      icon: Store,
      text: 'Quem já tem loja, mas sente que está tomando decisões no escuro.',
    },
    {
      icon: BriefcaseBusiness,
      text: 'Quem vende pelo Instagram, WhatsApp ou marketplace e quer profissionalizar sua operação.',
    },
    {
      icon: MousePointerClick,
      text: 'Quem investe em tráfego, mas não sabe se a estrutura está pronta para receber visitantes.',
    },
    {
      icon: Brain,
      text: 'Quem deseja parar de depender de achismo e começar a analisar dados, processos e resultados.',
    },
  ]

  const naoEParaQuem = [
    {
      icon: ZapOff,
      text: 'Para quem procura fórmula de enriquecimento rápido ou “loja vendendo no automático”.',
    },
    {
      icon: TimerOff,
      text: 'Para quem quer resultado sem processo, sem análise e sem esforço.',
    },
    {
      icon: PackageX,
      text: 'Para quem acredita que e-commerce é só “subir produto e anunciar”.',
    },
    {
      icon: BarChart3,
      text: 'Para quem está buscando soluções milagrosas e não quer olhar para estrutura, operação e dados.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <span className="inline-flex items-center rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            Para quem é este curso
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-6xl">
            Este treinamento é para quem quer levar o{' '}
            <span className="relative inline-block text-[#D57241]">
              e-commerce a sério
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
            </span>
            .
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg lg:text-xl">
            Antes de investir mais, é importante saber se você está no momento
            certo para olhar para a operação, os dados e a estratégia por trás
            de uma loja virtual.
          </p>
        </div>

        {/* Blocos principais */}
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Para quem é */}
          <div className="relative overflow-hidden rounded-[2rem] border border-[#D57241]/25 bg-white/95 p-6 shadow-xl shadow-black/5 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#D57241] via-[#284A78] to-[#D57241]" />

            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#D57241] text-[#F5F1EC] shadow-lg shadow-[#D57241]/20">
                <CheckCircle2 className="h-7 w-7" />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D57241]">
                  Perfil ideal
                </p>

                <h3 className="mt-1 text-2xl font-black leading-tight text-[#1F2937] sm:text-3xl">
                  Para quem é:
                </h3>

                <p className="mt-2 text-sm font-medium leading-relaxed text-[#1F2937]/60 sm:text-base">
                  Para quem quer construir, ajustar ou profissionalizar uma
                  operação digital com mais clareza, método e visão de negócio.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {paraQuem.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-2xl border border-[#D57241]/12 bg-[#FFF8F3] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D57241]/35 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#D57241] shadow-sm transition-all duration-300 group-hover:bg-[#D57241] group-hover:text-[#F5F1EC]">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <p className="pt-1 text-base font-bold leading-snug text-[#1F2937] sm:text-lg">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Para quem não é */}
          <div className="relative overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/80 p-6 shadow-lg shadow-black/5 sm:p-8">
            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1F2937]/10 text-[#1F2937]">
                <XCircle className="h-7 w-7" />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#284A78]/60">
                  Alinhamento necessário
                </p>

                <h3 className="mt-1 text-2xl font-black leading-tight text-[#1F2937] sm:text-3xl">
                  Para quem não é:
                </h3>

                <p className="mt-2 text-sm font-medium leading-relaxed text-[#1F2937]/55 sm:text-base">
                  Não é para quem procura promessa fácil. É para quem aceita
                  olhar para estrutura, operação, dados e estratégia.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {naoEParaQuem.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-2xl border border-[#284A78]/10 bg-white/75 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#284A78]/25 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F1EC] text-[#284A78] transition-all duration-300 group-hover:bg-[#284A78] group-hover:text-[#F5F1EC]">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <p className="pt-1 text-base font-semibold leading-snug text-[#1F2937]/75">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fechamento */}
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/90 shadow-xl shadow-black/5 backdrop-blur-sm sm:mt-12">
          <div className="grid gap-0 lg:grid-cols-[auto_1fr]">
            <div className="flex items-center justify-center bg-[#1F2937] px-6 py-7 text-[#F5F1EC]">
              <ShieldCheck className="h-8 w-8 text-[#D57241]" />
            </div>

            <div className="px-5 py-6 text-center sm:px-8 sm:py-7 lg:text-left">
              <p className="text-base font-black leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
                A Bastelli não promete resultados milagrosos.
              </p>

              <p className="mt-2 text-sm font-medium leading-relaxed text-[#1F2937]/65 sm:text-base">
                Nosso compromisso é com crescimento saudável, estratégia,
                execução e uma visão mais clara sobre o que realmente sustenta
                uma operação de e-commerce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}