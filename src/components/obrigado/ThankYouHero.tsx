import { Check } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';

export function ThankYouHero() {
  const lessonUrl = import.meta.env.VITE_LESSON_URL || '#';

  const handleAccessClick = () => {
    trackEvent('access_click', {
      button_location: 'hero',
      button_text: 'Acessar Minha Aula'
    });
    window.open(lessonUrl, '_blank');
  };

  return (
    <section className="relative bg-background pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container relative mx-auto px-4 max-w-3xl text-center">
        {/* Success Icon */}
        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500">
          <Check className="w-10 h-10 text-green-500" strokeWidth={3} />
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
          Cadastro confirmado. Agora siga o próximo passo.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Você está mais perto de entender por que e-commerce não vende sozinho 
          e como enxergar sua operação com mais clareza.
        </p>

        {/* CTA Principal */}
        <button
          onClick={handleAccessClick}
          className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Acessar Minha Aula
        </button>

        <p className="mt-4 text-sm text-muted-foreground">
          Acesso imediato ao conteúdo
        </p>
      </div>
    </section>
  );
}
