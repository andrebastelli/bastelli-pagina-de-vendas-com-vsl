import {
  PackageCheck,
  Truck,
  MonitorSmartphone,
  BadgePercent,
  CalendarDays,
  BarChart3,
  Headphones,
  Settings2,
  AlertTriangle,
} from 'lucide-react'

export function BlocoOproblemareal() {
  const travas = [
    {
      icon: PackageCheck,
      title: 'Pode estar no cadastro dos produtos.',
    },
    {
      icon: BadgePercent,
      title: 'Na oferta.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Nas fotos.',
    },
    {
      icon: Truck,
      title: 'No frete.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Na experiência mobile.',
    },
    {
      icon: Headphones,
      title: 'No atendimento.',
    },
    {
      icon: Settings2,
      title: 'No estoque.',
    },
    {
      icon: CalendarDays,
      title: 'Na falta de calendário comercial.',
    },
    {
      icon: BarChart3,
      title: 'Na ausência de metas claras.',
    },
    {
      icon: BarChart3,
      title: 'Ou na dificuldade de analisar os dados certos.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            <AlertTriangle className="h-4 w-4 text-[#D57241]" />
            O problema real
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-6xl">
            Você tenta resolver uma parte, mas o problema pode estar em{' '}
            <span className="relative inline-block text-[#D57241]">
              outra
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
            </span>
            .
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg lg:text-xl">
            Muitos lojistas passam meses tentando corrigir o sintoma errado.
          </p>
        </div>

        {/* Sintomas */}
<div className="mx-auto mb-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
  {[
    'Aumentam o tráfego, mas a loja não converte.',
    'Trocam a campanha, mas o resultado não melhora.',
    'Postam mais no Instagram, mas continuam sem previsibilidade.',
    'Fazem promoção, mas vendem com margem apertada.',
    'Mudam a plataforma, mas seguem sem entender o que realmente travava a operação.',
  ].map((item, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-[2rem] border border-[#D57241]/20 bg-[#FFF8F3] p-5 text-left shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:border-[#D57241]/40 hover:bg-white hover:shadow-2xl"
    >
      <div className="absolute -right-5 -top-6 text-7xl font-black leading-none text-[#D57241]/10 transition-all duration-300 group-hover:scale-110 group-hover:text-[#D57241]/15">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D57241]/12 text-[#D57241] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D57241] group-hover:text-[#F5F1EC]">
        <AlertTriangle className="h-5 w-5" />
      </div>

      <p className="relative text-sm font-black leading-relaxed text-[#1F2937] sm:text-base">
        {item}
      </p>

      <div className="relative mt-5 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#D57241]" />
        <span className="h-1 w-10 rounded-full bg-[#D57241]/25 transition-all duration-300 group-hover:w-16 group-hover:bg-[#D57241]/60" />
      </div>
    </div>
  ))}
</div>

        {/* Pergunta central */}
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <p className="text-xl font-black leading-tight text-[#1F2937] sm:text-2xl lg:text-4xl">
            E, no fim, a pergunta continua a mesma:
          </p>

          <p className="mt-4 text-2xl font-black leading-tight text-[#D57241] sm:text-3xl lg:text-5xl">
            “Por que minha loja não vende como deveria?”
          </p>
        </div>

        {/* Resposta */}
        <div className="mx-auto mb-10 max-w-5xl overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/85 p-5 text-center shadow-xl shadow-black/5 backdrop-blur-sm sm:p-7">
          <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
            A resposta quase nunca está em um único lugar.
          </p>
        </div>

        {/* Cards */}
<div className="mx-auto max-w-6xl">
  <div className="mb-7 text-center">
    <p className="text-sm font-black uppercase tracking-[0.18em] text-[#D57241]">
      Diagnóstico da operação
    </p>

    <p className="mx-auto mt-3 max-w-3xl text-base font-medium leading-relaxed text-[#1F2937]/70 sm:text-lg">
      O problema pode estar escondido em pontos diferentes da jornada. Olhar só
      para um deles é como tentar consertar a loja no escuro.
    </p>
  </div>

  <div className="relative overflow-hidden rounded-[2.6rem] border border-[#284A78]/10 bg-[#1F2937] p-4 shadow-2xl shadow-black/10 sm:p-6 lg:p-7">
    {/* Fundo decorativo */}
    <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#F5F1EC_1px,transparent_1px),linear-gradient(to_bottom,#F5F1EC_1px,transparent_1px)] bg-[size:34px_34px]" />
    </div>

    <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#D57241]/25 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#284A78]/35 blur-3xl" />

    {/* Barra superior */}
    <div className="relative mb-6 flex flex-col gap-4 rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#F5F1EC]/50">
          Análise em andamento
        </p>

        <h3 className="mt-1 text-xl font-black text-[#F5F1EC] sm:text-2xl">
          Onde sua loja pode estar travando?
        </h3>
      </div>

      <div className="inline-flex items-center gap-2 rounded-full border border-[#D57241]/30 bg-[#D57241]/15 px-4 py-2 text-sm font-bold text-[#F5F1EC]">
        <span className="h-2 w-2 rounded-full bg-[#D57241]" />
        10 pontos críticos
      </div>
    </div>

    <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {travas.map((item, index) => (
        <div
          key={index}
          className="group relative min-h-[190px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.08] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D57241]/50 hover:bg-white/[0.13]"
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
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-[#284A78]/10 bg-white/85 px-5 py-5 text-center shadow-sm backdrop-blur-sm sm:mt-12 sm:px-8 sm:py-7">
          <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
            Quando você não entende a operação como um todo, qualquer decisão
            vira tentativa.
          </p>

          <p className="mt-3 text-base font-black leading-relaxed text-[#D57241] sm:text-lg lg:text-xl">
            E tentativa, no e-commerce, custa tempo, dinheiro e energia.
          </p>
        </div>
      </div>
    </section>
  )
}