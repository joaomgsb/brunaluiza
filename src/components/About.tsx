import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-24 px-4 animate-in relative bg-gradient-to-b from-background via-[#1A1F2C] to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background/80 backdrop-blur-[1px]" />

      <div className="max-w-[90%] mx-auto relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4 mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5E9] to-[#33C3F0] inline-block">
              Sobre mim
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Transformando dados em insights e código em soluções
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 px-4 md:px-0">
            {/* Profile Image Section */}
            <motion.div variants={itemVariants}>
              <Card className="relative group overflow-hidden border-0 bg-gradient-to-br from-[#0EA5E9]/10 via-[#33C3F0]/5 to-transparent backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/20 via-[#33C3F0]/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="relative p-1">
                  <div className="aspect-[3/4] overflow-hidden rounded-lg border-2 border-[#0EA5E9]/20">
                    <img
                      src="/lovable-uploads/804832f8-399d-4d78-9ab0-4bea5de7d1f8.png"
                      alt="Bruna Luiza"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Content Section */}
            <motion.div variants={itemVariants} className="space-y-8 flex flex-col justify-center">
              {/* Role Badges */}
              <div className="flex flex-wrap gap-3">
                <Badge className="px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base bg-[#0EA5E9]/20 hover:bg-[#0EA5E9]/30 transition-colors border-[#0EA5E9]/30">
                  Analista de Sistemas
                </Badge>
                <Badge className="px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base bg-[#33C3F0]/20 hover:bg-[#33C3F0]/30 transition-colors border-[#33C3F0]/30">
                  Full Stack Developer
                </Badge>
                <Badge className="px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base bg-[#0EA5E9]/20 hover:bg-[#0EA5E9]/30 transition-colors border-[#0EA5E9]/30">
                  Business Intelligence
                </Badge>
              </div>

              {/* Title and Description */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5E9] to-[#33C3F0]">
                  Excelência e Inovação em Tecnologia
                </h3>
                <div className="space-y-4">
                  <p className="text-xl leading-relaxed text-foreground/90">
                    Sou uma Analista de Sistemas apaixonada por tecnologia e inovação, com experiência em análise de dados e desenvolvimento web full stack. Atualmente, trabalho com Business Intelligence e desenvolvimento de soluções tecnológicas na Stellantis, onde aplico minha expertise em Power BI, Python e SQL para criar soluções que impactam positivamente os processos de negócio.
                  </p>
                  <p className="text-xl leading-relaxed text-foreground/90">
                    Minha jornada profissional é marcada pela busca constante por conhecimento e aperfeiçoamento, refletida nas minhas especializações em Inteligência Artificial e MBA em Indústria 4.0 pela PUC.
                  </p>
                </div>
              </div>

              {/* Education Card */}
              <Card className="p-6 bg-gradient-to-br from-[#33C3F0]/10 via-[#0EA5E9]/5 to-transparent backdrop-blur-sm border border-[#33C3F0]/10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-full bg-[#33C3F0]/20">
                    <ChevronRight className="w-5 h-5 text-[#33C3F0]" />
                  </div>
                  <p className="text-xl leading-relaxed text-foreground/90">
                    Minha jornada profissional é marcada pela busca constante por conhecimento e aperfeiçoamento, refletida nas minhas especializações em Inteligência Artificial e MBA em Indústria 4.0 pela PUC.
                  </p>
                </div>
              </Card>

              {/* Skills Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Power BI", color: "from-[#0EA5E9]" },
                  { name: "Python", color: "from-[#33C3F0]" },
                  { name: "SQL", color: "from-[#0EA5E9]" },
                  { name: "Web Development", color: "from-[#33C3F0]" },
                ].map((skill) => (
                  <Card 
                    key={skill.name}
                    className={`p-4 bg-gradient-to-br ${skill.color} to-transparent/5 hover:to-transparent/20 transition-colors border-0 backdrop-blur-sm group cursor-default`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white/90 group-hover:animate-pulse" />
                      <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};