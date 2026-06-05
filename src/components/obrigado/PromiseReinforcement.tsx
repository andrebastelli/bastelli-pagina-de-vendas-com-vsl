import { Quote } from 'lucide-react';

const promises = [
  'E-commerce não vende sozinho.',
  'Uma loja virtual é uma empresa.',
  'Não é sobre promessa fácil. É sobre fundamento.',
];

export function PromiseReinforcement() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <Quote className="w-8 h-8 text-primary/40 mx-auto mb-4" />
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Lembre-se sempre
          </h2>
        </div>

        <div className="space-y-4">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="p-5 bg-background rounded-xl border border-border text-center"
            >
              <p className="text-lg md:text-xl font-medium text-foreground">
                {promise}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm max-w-lg mx-auto">
          Antes de tentar vender mais, o lojista precisa entender o que sustenta 
          uma operação de e-commerce de verdade.
        </p>
      </div>
    </section>
  );
}
