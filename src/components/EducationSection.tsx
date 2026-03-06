import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const education = [
  {
    degree: "Computer Engineering",
    institution: "Universidade Lusófona",
    institutionUrl: "https://www.ulusofona.pt/",
    period: "2024 — Present",
  },
  {
    degree: "High School",
    institution: "Agrupamento de Escolas Frei Gonçalo de Azevedo",
    institutionUrl: "https://esfga.pt/expsitenovo/",
    period: "2021 — 2024",
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding min-h-[50vh] flex flex-col justify-center bg-zinc-900/30">
      <div className="max-w-6xl">
        <motion.h2 
          className="font-serif text-5xl md:text-6xl mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className="group border-b border-white/10 pb-12 last:border-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-serif text-white mb-2">{edu.degree}</h3>
                  <a 
                    href={edu.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-white transition-colors text-sm font-mono flex items-center gap-2"
                  >
                    {edu.institution} <ExternalLink size={12} />
                  </a>
                </div>
                <span className="text-muted-foreground font-mono text-sm md:text-right whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
