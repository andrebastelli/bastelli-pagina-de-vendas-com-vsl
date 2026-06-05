import { BookOpen, Gift, FileText, ArrowRight } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';

export function CourseInvitation() {
  const checkoutUrl = import.meta.env.VITE_COURSE_CHECKOUT_URL || '#';

  const handleCourseClick = () => {
    trackEvent('offer_click', {
      button_location: 'course_invitation',
      offer_type: 'course'
    });
    trackEvent('checkout_initiated', {
      product: 'Introducao ao E-commerce Bastelli',
      price: 197
    });
    window.open(checkoutUrl, '_blank');
  };

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
          <div className="text-center mb-6">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Quer ir além?
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Introdução ao E-commerce Bastelli
            </h2>
            <p className="text-muted-foreground">
              O curso completo para quem quer entender e-commerce de verdade
            </p>
          </div>

          {/* O que está incluso */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-foreground">
              <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Curso Introdução ao E-commerce Bastelli</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <Gift className="w-5 h-5 text-primary flex-shrink-0" />
              <span>E-book Roda do E-commerce</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <FileText className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Manual de Boas Práticas para E-commerce</span>
            </div>
          </div>

          {/* Preço */}
          <div className="text-center mb-6 p-4 bg-background rounded-xl">
            <p className="text-sm text-muted-foreground mb-1">Preço de lançamento</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-muted-foreground line-through">R$ 397</span>
              <span className="text-3xl font-bold text-foreground">R$ 197</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              ou 12x de R$ 19,21
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={handleCourseClick}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg group"
          >
            Conhecer o curso completo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-center text-xs text-muted-foreground mt-4">
            Sem pressão. Explore quando estiver pronto.
          </p>
        </div>
      </div>
    </section>
  );
}
