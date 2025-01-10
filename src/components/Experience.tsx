import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Stellantis",
      role: "Analista de Dados",
      period: "Julho/2023 - Atual",
      highlights: [
        "Desenvolvimento de dashboards em Power BI",
        "Análise de dados com Python",
        "Construção de modelos preditivos",
        "Desenvolvimento de aplicações em JavaScript",
      ],
    },
    {
      company: "Stellantis",
      role: "Assistente Administrativo",
      period: "Dezembro/2019 – Julho/2023",
      highlights: [
        "Análise de custos e eficiência operacional",
        "Criação de relatórios com Excel e Power BI",
        "Automação de processos",
      ],
    },
    {
      company: "Fiat Chrysler Automobiles",
      role: "Estagiária Desenvolvedor Full Stack",
      period: "Abril/2018 a Dezembro/2019",
      highlights: [
        "Desenvolvimento web com diversas tecnologias",
        "Criação de dashboards",
        "Desenvolvimento de jogos para treinamento",
      ],
    },
  ];

  return (
    <section className="py-24 px-4 animate-in relative bg-gradient-to-b from-[#1A1F2C] via-background to-[#1A1F2C]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background/80 backdrop-blur-[1px]" />

      <div className="max-w-[90%] mx-auto relative">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D946EF] to-[#9b87f5] inline-block">
            Experiência Profissional
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Minha jornada profissional e conquistas
          </p>
        </div>

        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect card-hover overflow-hidden border-[#D946EF]/10 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[1fr,2fr] gap-6">
                    {/* Company Info Section */}
                    <div className="bg-gradient-to-br from-[#D946EF]/10 via-[#9b87f5]/5 to-transparent p-6 flex flex-col justify-between">
                      <div>
                        <div className="h-12 w-12 rounded-full bg-[#D946EF]/20 flex items-center justify-center mb-4">
                          <Briefcase className="h-6 w-6 text-[#D946EF]" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground/90 mb-2">{exp.company}</h3>
                        <Badge variant="secondary" className="bg-[#D946EF]/20 text-primary-foreground">
                          {exp.period}
                        </Badge>
                      </div>
                    </div>

                    {/* Role Details Section */}
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-foreground/90 mb-4">{exp.role}</h4>
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <ArrowRight className="h-5 w-5 text-[#D946EF] mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};