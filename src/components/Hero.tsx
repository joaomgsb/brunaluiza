import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 animate-in relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">
          Bruna Luiza
        </h1>
      </div>
      
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground/90">
        Analista de Sistemas
      </h2>
      
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
        Especialista em análise de dados e desenvolvimento web full stack, com foco em Business Intelligence e soluções tecnológicas inovadoras.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <Button 
          variant="outline" 
          size="lg" 
          className="glass-effect hover:bg-primary/20 hover:border-primary/50"
          asChild
        >
          <a href="mailto:bruluiza97@gmail.com" className="flex items-center gap-2">
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
            href="https://github.com/brunaluizadev" 
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
            href="https://linkedin.com/in/brunaluizadev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </Button>
      </div>
    </section>
  );
};