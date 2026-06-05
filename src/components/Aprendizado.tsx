import {
  Target,
  Store,
  SearchCheck,
  CreditCard,
  BarChart3,
  Headphones,
} from 'lucide-react'

export function Aprendizado() {
  const modules = [
    {
      number: '01',
      icon: Target,
      title: 'Planejamento e metas',
      description:
        'Como pensar o e-commerce como negócio, definir objetivos mais claros e acompanhar os indicadores certos.',
    },
    {
      number: '02',
      icon: Store,
      title: 'Plataforma e estrutura da loja',
      description:
        'O que observar antes de escolher, trocar ou ajustar uma plataforma, pensando em gestão, experiência e crescimento.',
    },
    {
      number: '03',
      icon: SearchCheck,
      title: 'Produtos, fotos, descrições e experiência de compra',
      description:
        'Como cadastro, imagem, texto, navegação e página de produto influenciam a percepção de valor e a conversão.',
    },
    {
      number: '04',
      icon: CreditCard,
      title: 'Pagamentos, frete, logística e operação',
      description:
        'Como meios de pagamento, envio, ERP, estoque e rotina impactam diretamente a experiência do cliente.',
    },
    {
      number: '05',
      icon: BarChart3,
      title: 'Marketing, tráfego e dados',
      description:
        'Como enxergar tráfego pago, conteúdo, campanhas e tracking como partes de uma estratégia maior — e não como soluções isoladas.',
    },
    {
      number: '06',
      icon: Headphones,
      title: 'Atendimento, retenção e crescimento',
      description:
        'Como pensar relacionamento, recompra, suporte e melhoria contínua para construir uma operação mais saudável.',
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
            Conteúdo do treinamento
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-6xl">
            Uma visão clara sobre os principais pontos que sustentam uma{' '}
            <span className="relative inline-block text-[#D57241]">
              loja virtual
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
            </span>
            .
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg lg:text-xl">
            Dentro do treinamento, você vai passar pelos temas que todo lojista
            deveria entender antes de abrir, ajustar ou tentar crescer um
            e-commerce.
          </p>
        </div>

        {/* Destaque superior */}
        <div className="mx-auto mb-10 grid max-w-4xl gap-3 sm:grid-cols-3">
          {[
            'Não é só assistir aulas',
            'É entender conexões',
            'É aplicar no seu negócio',
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#284A78]/10 bg-white/85 px-4 py-4 text-center text-sm font-black text-[#1F2937] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D57241]/30 hover:bg-white/95"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Módulos */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.number}
              className="group relative overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/90 p-6 text-[#1F2937] shadow-lg shadow-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D57241]/30 hover:shadow-2xl hover:shadow-[#284A78]/10"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#284A78] via-[#D57241] to-[#284A78] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute -right-6 -top-8 text-8xl font-black leading-none text-[#284A78]/5 transition-all duration-300 group-hover:scale-110 group-hover:text-[#D57241]/10">
                {module.number}
              </div>

              <div className="relative mb-5 flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#284A78]/10 bg-[#F5F1EC] text-[#284A78] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#284A78] group-hover:text-[#F5F1EC] group-hover:shadow-lg">
                  <module.icon className="h-7 w-7" />
                </div>

                <span className="rounded-full border border-[#284A78]/10 bg-[#F5F1EC] px-3 py-1 text-xs font-black text-[#284A78]/75">
                  Tema {module.number}
                </span>
              </div>

              <h3 className="relative text-lg font-black leading-snug text-[#1F2937] text-balance sm:text-xl">
                {module.title}
              </h3>

              <p className="relative mt-3 text-sm font-medium leading-relaxed text-[#1F2937]/65 sm:text-base">
                {module.description}
              </p>

              <div className="relative mt-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D57241]" />
                <span className="h-1 w-10 rounded-full bg-[#284A78]/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#D57241]/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Fechamento */}
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-[#D57241]/20 bg-[#FFF8F3] px-5 py-5 text-center shadow-sm backdrop-blur-sm sm:mt-12 sm:px-8 sm:py-7">
          <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
            Você não vai apenas “assistir aulas”. Vai entender como esses temas
            se conectam e o que fazer com eles no seu negócio.
          </p>
        </div>
      </div>
    </section>
  )
}