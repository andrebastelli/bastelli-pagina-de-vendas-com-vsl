export function FooterObrigado() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">B</span>
            </div>
            <span className="font-semibold text-foreground">Bastelli Consultoria</span>
          </div>

          {/* Links */}
          <div className="flex items-center justify-center gap-4 mb-4 text-sm">
            <a
              href="/politica-de-privacidade"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </a>
            <span className="text-border">|</span>
            <a
              href="/termos-de-uso"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos de Uso
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Bastelli Consultoria. Todos os direitos reservados.
          </p>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground/70 mt-4 max-w-lg mx-auto">
            Este conteúdo é informativo e não garante resultados financeiros específicos. 
            Resultados dependem de dedicação, conhecimento e execução individual.
          </p>
        </div>
      </div>
    </footer>
  );
}
