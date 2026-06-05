import {
  Instagram,
  Store,
  MousePointerClick,
  Brain,
  RefreshCcw,
  HelpCircle,
  Target,
  Layers3,
  Truck,
  Headphones,
  BarChart3,
  CalendarDays,
} from 'lucide-react'

export function ViradadeChave() {
  const parts = [
    {
      icon: Store,
      title: 'Planejamento',
    },
    {
      icon: Store,
      title: 'Loja',
    },
    {
      icon: MousePointerClick,
      title: 'Marketing',
    },
    {
      icon: Layers3,
      title: 'Processos',
    },
    {
      icon: BarChart3,
      title: 'Dados',
    },
    {
      icon: Headphones,
      title: 'Atendimento',
    },
    {
      icon: Truck,
      title: 'Logística',
    },
    {
      icon: CalendarDays,
      title: 'Consistência',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            <HelpCircle className="h-4 w-4 text-[#D57241]" />
            A virada de chave
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-5xl">
            O e-commerce não trava porque falta{' '}
            <span className="relative inline-block text-[#D57241]">
              uma única coisa
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
            </span>
            .
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg">
            Ele trava quando as partes da operação não conversam entre si.
          </p>
        </div>

        {/* Bloco principal */}
        <div className="mx-auto mb-10 max-w-5xl overflow-hidden rounded-[2rem] border border-[#D57241]/25 bg-[#FFF8F3] p-5 text-center shadow-xl shadow-black/5 sm:p-7">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D57241] text-[#F5F1EC] shadow-lg shadow-[#D57241]/20">
            <RefreshCcw className="h-7 w-7" />
          </div>

          <div className="space-y-3 text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
            <p>Uma loja virtual pode ter bons produtos e ainda assim não vender.</p>
            <p>Pode ter tráfego e ainda assim não converter.</p>
            <p>
              Pode ter uma plataforma conhecida e ainda assim gerar uma
              experiência ruim.
            </p>
            <p>Pode ter campanha rodando e ainda assim perder dinheiro.</p>
          </div>
        </div>

        {/* Não é só */}
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <p className="text-xl font-black leading-tight text-[#1F2937] sm:text-2xl lg:text-4xl">
            Porque e-commerce não é só plataforma.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {['Não é só tráfego.', 'Não é só Instagram.', 'Não é só produto.'].map(
              (item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[#284A78]/10 bg-white/85 px-5 py-4 text-center shadow-sm backdrop-blur-sm"
                >
                  <p className="text-base font-black leading-relaxed text-[#D57241] sm:text-lg">
                    {item}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Frase central */}
        <div className="mx-auto mb-10 max-w-5xl overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/85 p-5 text-center shadow-xl shadow-black/5 backdrop-blur-sm sm:p-7">
          <h3 className="text-2xl font-black leading-tight text-[#1F2937] text-balance sm:text-3xl lg:text-5xl">
            E-commerce é uma{' '}
            <span className="relative inline-block text-[#D57241]">
              operação
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
            </span>
            .
          </h3>
        </div>

        {/* Cards */}
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#D57241]">
              O que precisa funcionar junto
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2.6rem] border border-[#284A78]/10 bg-[#1F2937] p-4 shadow-2xl shadow-black/10 sm:p-6 lg:p-7">
            <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#F5F1EC_1px,transparent_1px),linear-gradient(to_bottom,#F5F1EC_1px,transparent_1px)] bg-[size:34px_34px]" />
            </div>

            <div className="relative mb-6 rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-4 text-center backdrop-blur-sm">
              <p className="text-base font-bold leading-relaxed text-[#F5F1EC] sm:text-lg lg:text-xl">
                E operação precisa de planejamento, loja, marketing, processos,
                dados, atendimento, logística e consistência funcionando juntos.
              </p>
            </div>

            <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {parts.map((item, index) => (
                <div
                  key={index}
                  className="group relative min-h-[170px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.08] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D57241]/50 hover:bg-white/[0.13]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#D57241] via-[#F5F1EC]/40 to-[#284A78] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute -right-4 -top-5 text-7xl font-black leading-none text-white/[0.04] transition-all duration-300 group-hover:scale-110 group-hover:text-[#D57241]/15">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#F5F1EC] text-[#284A78] shadow-lg shadow-black/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D57241] group-hover:text-[#F5F1EC]">
                    <item.icon className="h-6 w-6" />
                  </div>

                  <h3 className="relative text-base font-black leading-snug text-[#F5F1EC] text-balance sm:text-lg">
                    {item.title}
                  </h3>

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D57241]" />
                      <span className="h-1 w-10 rounded-full bg-[#F5F1EC]/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#D57241]/70" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fechamento */}
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-[#284A78]/10 bg-white/85 px-5 py-5 text-center shadow-sm backdrop-blur-sm sm:mt-12 sm:px-8 sm:py-6">
          <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
            É por isso que, antes de tentar vender mais, você precisa entender o
            que está sustentando ou travando a sua loja.
          </p>
        </div>
      </div>
    </section>
  )
}