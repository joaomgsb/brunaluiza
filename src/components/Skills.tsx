import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  SiGooglebigquery,
  SiMongodb,
  SiTableau,
  SiGooglecloud,
  SiPython,
  SiJavascript,
  SiPhp,
  SiGit
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandOffice, TbBrandCSharp, TbSql, TbPower } from "react-icons/tb";
import { FaAws } from "react-icons/fa";

export const Skills = () => {
  const skillIcons = {
    "Google BigQuery": <SiGooglebigquery />,
    "SQL Server": <TbSql />,
    MongoDB: <SiMongodb />,
    "Data Warehouse": <SiGooglecloud />,
    "AWS Athena": <FaAws />,
    "AWS S3": <FaAws />,
    "AWS Redshift": <FaAws />,
    DynamoDB: <FaAws />,
    "Power BI": <TbPower />,
    Tableau: <SiTableau />,
    "Data Studio": <SiGooglecloud />,
    Python: <SiPython />,
    JavaScript: <SiJavascript />,
    "C#": <TbBrandCSharp />,
    PHP: <SiPhp />,
    SQL: <TbSql />,
    Git: <SiGit />,
    "VS Code": <VscVscode />,
    "Power Apps": <TbBrandOffice />,
    "Office 365": <TbBrandOffice />,
  };

  const skills = {
    "Banco de Dados": ["Google BigQuery", "SQL Server", "MongoDB", "Data Warehouse"],
    Cloud: ["AWS Athena", "AWS S3", "AWS Redshift", "DynamoDB"],
    "Business Intelligence": ["Power BI", "Tableau", "Data Studio"],
    Linguagens: ["Python", "JavaScript", "C#", "PHP", "SQL"],
    Ferramentas: ["Git", "VS Code", "Power Apps", "Office 365"],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className="py-20 px-4 animate-in relative bg-gradient-to-b from-[#1A1F2C] via-background to-background"
      id="skills"
    >
      <div className="relative max-w-[90%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7E69AB] to-[#6E59A5] inline-block">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            Tecnologias e ferramentas que utilizo no dia a dia
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="h-full"
            >
              <Card className="glass-effect card-hover h-full border-[#7E69AB]/10">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground/90">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="flex items-center gap-2 bg-[#7E69AB]/20 text-primary-foreground hover:bg-[#6E59A5]/30 transition-all duration-300"
                      >
                        <span className="text-lg">{skillIcons[skill]}</span>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
