import { useEffect } from 'react';
import { HeaderObrigado } from '@/components/obrigado/HeaderObrigado';
import { ThankYouHero } from '@/components/obrigado/ThankYouHero';
import { BrunoVideo } from '@/components/obrigado/BrunoVideo';
import { AccessButtons } from '@/components/obrigado/AccessButtons';
import { NextSteps } from '@/components/obrigado/NextSteps';
import { WhatsAppSupport } from '@/components/obrigado/WhatsAppSupport';
import { PromiseReinforcement } from '@/components/obrigado/PromiseReinforcement';
import { CourseInvitation } from '@/components/obrigado/CourseInvitation';
import { HelpSection } from '@/components/obrigado/HelpSection';
import { FooterObrigado } from '@/components/obrigado/FooterObrigado';
import { trackEvent } from '@/utils/analytics';

export function ObrigadoPage() {
  useEffect(() => {
    // Track page view
    trackEvent('thank_you_view', {
      page: 'obrigado'
    });
    trackEvent('lead_confirmed', {
      conversion_type: 'registration'
    });

    // Update document title
    document.title = 'Obrigado | Introdução ao E-commerce Bastelli';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Cadastro confirmado. Acesse sua aula ou material da Bastelli e siga o próximo passo para entender melhor sua operação de e-commerce.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeaderObrigado />
      <main>
        <ThankYouHero />
        <BrunoVideo />
        <AccessButtons />
        <NextSteps />
        <WhatsAppSupport />
        <PromiseReinforcement />
        <CourseInvitation />
        <HelpSection />
      </main>
      <FooterObrigado />
    </div>
  );
}
