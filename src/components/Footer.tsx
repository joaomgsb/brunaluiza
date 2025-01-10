import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="w-full bg-secondary/30 mt-16">
      <div className="flex flex-col items-center justify-center py-12 px-4 w-full">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
          {/* Sobre */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h3 className="text-lg font-semibold">Sobre</h3>
            <p className="text-sm text-muted-foreground">
              Analista de Sistemas apaixonada por tecnologia, especializada em Business Intelligence e desenvolvimento web full stack. Transformando dados em soluções inovadoras.
            </p>
          </div>

          {/* Contato */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Betim, MG - Brasil</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+55 (31) 99517-0931</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>bruluiza97@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h3 className="text-lg font-semibold">Links Úteis</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Projetos
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Certificações
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 w-full max-w-7xl" />

        {/* Rodapé inferior */}
        <div className="flex flex-col items-center justify-center gap-4 w-full max-w-7xl">
          <p className="text-sm text-muted-foreground text-center">
            {new Date().getFullYear()} Bruna Luiza. Todos os direitos
            reservados.
          </p>

          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-primary/20"
            >
              <a
                href="https://github.com/brunaluizadev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-primary/20"
            >
              <a
                href="https://linkedin.com/in/brunaluizadev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-primary/20"
            >
              <a href="mailto:bruluiza97@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
