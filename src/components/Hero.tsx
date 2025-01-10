import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = 'bruluiza97@gmail.com';
    navigator.clipboard.writeText(email);
    alert('Email copiado!');
  };

  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row justify-center items-center px-4 animate-in relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative flex-1 max-w-2xl">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
            Bruna Boaventura
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground/90">
            Analista de Sistemas
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Especialista em análise de dados e desenvolvimento web full stack, com foco em Business Intelligence e soluções tecnológicas inovadoras.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-effect hover:bg-primary/20 hover:border-primary/50"
              asChild
            >
              <a 
                href="#" 
                onClick={handleContactClick}
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contato
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-effect hover:bg-primary/20 hover:border-primary/50"
              asChild
            >
              <a 
                href="https://github.com/bruboaventuraaa97" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-effect hover:bg-primary/20 hover:border-primary/50"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/bruna-luiza-moreira-boaventura-9313a714a/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative flex-1 mt-8 md:mt-0 max-w-md">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          <div className="relative">
            <img
              src="/images/brunaboaventura.png"
              alt="Bruna Boaventura"
              className="w-full h-auto rounded-lg shadow-xl animate-fade-in-right
                transition-transform duration-300 ease-in-out group-hover:scale-[1.02]
                ring-1 ring-white/10 backdrop-blur-sm"
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};