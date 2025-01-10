import { GraduationCap, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const Education = () => {
  const education = [
    {
      degree: "Graduação em Sistemas de Informação",
      institution: "Pontifícia Universidade Católica",
      period: "Julho/2020",
      description: "Base sólida em desenvolvimento de software e análise de sistemas",
    },
    {
      degree: "MBA em Indústria 4.0",
      institution: "Pontifícia Universidade Católica",
      period: "Novembro/2021",
      description: "Estudo das tecnologias e processos da quarta revolução industrial",
    },
    {
      degree: "Especialização em Inteligência Artificial e Aprendizado de Máquina",
      institution: "Pontifícia Universidade Católica",
      period: "Conclusão prevista: Novembro/2025",
      description: "Foco em técnicas avançadas de machine learning e desenvolvimento de modelos de IA",
    },
  ];

  return (
    <section className="py-24 px-4 animate-in relative bg-gradient-to-b from-[#1A1F2C] via-background to-[#1A1F2C]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background/80 backdrop-blur-[1px]" />

      <div className="max-w-[90%] mx-auto relative">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] to-[#FFA99F] inline-block">
            Formação Acadêmica
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Investindo no conhecimento e na especialização
          </p>
        </div>

        <div className="grid gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect card-hover overflow-hidden border-[#F97316]/10 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[1fr,2fr] gap-6">
                    {/* Institution Info Section */}
                    <div className="bg-gradient-to-br from-[#F97316]/10 via-[#FFA99F]/5 to-transparent p-6 flex flex-col justify-between">
                      <div>
                        <div className="h-12 w-12 rounded-full bg-[#F97316]/20 flex items-center justify-center mb-4">
                          <GraduationCap className="h-6 w-6 text-[#F97316]" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground/90 mb-2">{edu.institution}</h3>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                      </div>
                    </div>

                    {/* Degree Details Section */}
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-foreground/90 mb-4">{edu.degree}</h4>
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <BookOpen className="h-5 w-5 text-[#F97316] mt-0.5 flex-shrink-0" />
                        <p>{edu.description}</p>
                      </div>
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