import { BadgeX, Megaphone, MousePointerClick, Puzzle, EyeOff } from 'lucide-react'

export function BlocoQuebradecrenca() {
  const truths = [
    {
      icon: Puzzle,
      title: 'Não é só plataforma.',
      description:
        'A plataforma é apenas uma peça. Sem planejamento, operação e estratégia, ela não sustenta o crescimento.',
    },
    {
      icon: BadgeX,
      title: 'Não é segunda renda automática.',
      description:
        'E-commerce exige gestão, constância e tomada de decisão. Não funciona no piloto automático.',
    },
    {
      icon: Megaphone,
      title: 'Não é só anúncio.',
      description:
        'Tráfego ajuda, mas não resolve uma oferta fraca, uma loja confusa ou uma operação mal estruturada.',
    },
    {
      icon: MousePointerClick,
      title: 'Não é só postagem.',
      description:
        'Postar no Instagram não substitui uma estrutura comercial preparada para vender com consistência.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14">
          <span className="inline-flex items-center rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            O que quase ninguém explica sobre e-commerce
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-6xl">
            E-commerce{' '}
            <span className="relative inline-block text-[#D57241]">
              não vende sozinho
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
            </span>
            .
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg lg:text-xl">
            O mercado ensina o lojista a procurar atalhos: a “estratégia
            secreta”, o anúncio milagroso, a plataforma mágica. Pouca gente fala
            sobre o básico bem feito.
          </p>
        </div>

        {/* Bloco principal */}
        <div className="mx-auto mb-10 max-w-5xl overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/90 shadow-xl shadow-black/5 backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex items-center justify-center bg-[#1F2937] px-6 py-8 text-center sm:px-8 lg:text-left">
              <div>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D57241] text-[#F5F1EC] shadow-lg shadow-[#D57241]/20 lg:mx-0">
                  <EyeOff className="h-7 w-7" />
                </div>

                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#D57241]">
                  O erro invisível
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight text-[#F5F1EC] text-balance sm:text-3xl">
                  Quando você olha apenas para uma peça, ignora o resto da
                  operação.
                </h3>
              </div>
            </div>

            <div className="px-6 py-8 sm:px-8">
              <p className="text-base font-medium leading-relaxed text-[#1F2937]/75 sm:text-lg">
                Planejamento, estrutura da loja, operação, marketing e dados são
                partes do mesmo sistema. Quando uma dessas áreas falha, a loja
                pode até receber visitas — mas continuar sem vender como deveria.
              </p>

              <p className="mt-4 rounded-2xl border border-[#D57241]/20 bg-[#FFF8F3] px-5 py-4 text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg">
                É por isso que tanta gente se frustra: tenta resolver tudo com
                uma ação isolada, mas o problema está na visão completa do
                negócio.
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {truths.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/90 p-6 shadow-lg shadow-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D57241]/30 hover:shadow-2xl hover:shadow-[#284A78]/10"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#284A78] via-[#D57241] to-[#284A78] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute -right-6 -top-8 text-8xl font-black leading-none text-[#284A78]/5 transition-all duration-300 group-hover:scale-110 group-hover:text-[#D57241]/10">
                0{index + 1}
              </div>

              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#284A78]/10 bg-[#F5F1EC] text-[#284A78] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#284A78] group-hover:text-[#F5F1EC] group-hover:shadow-lg">
                <item.icon className="h-7 w-7" />
              </div>

              <h3 className="relative text-lg font-black leading-snug text-[#1F2937] text-balance sm:text-xl">
                {item.title}
              </h3>

              <p className="relative mt-3 text-sm font-medium leading-relaxed text-[#1F2937]/65">
                {item.description}
              </p>

              <div className="relative mt-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D57241]" />
                <span className="h-1 w-10 rounded-full bg-[#284A78]/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#D57241]/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Fechamento */}
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-[#284A78]/10 bg-white/85 px-5 py-5 text-center shadow-sm backdrop-blur-sm sm:mt-12 sm:px-8 sm:py-6">
          <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
            Um e-commerce é uma operação completa. Quando você entende isso,
            para de tomar decisões no escuro e começa a enxergar onde sua loja
            realmente precisa evoluir.
          </p>
        </div>
      </div>
    </section>
  )
}