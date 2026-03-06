import { motion } from "framer-motion";
import { Code, Layout, Cpu } from "lucide-react";

const expertise = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Programming Foundations",
    description: "Strong fundamentals in algorithms, data structures, and computational thinking. Building reliable solutions through disciplined problem-solving and clean code practices."
  },
  {
    icon: <Layout className="w-8 h-8 text-primary" />,
    title: "Frontend Engineering",
    description: "Creating responsive, accessible user interfaces with modern web technologies. Experience with React, Next.js, and component-based architecture patterns."
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: "Systems & Security",
    description: "Developing a foundational understanding of operating systems, networks, and secure software practices. Focused on writing code that is not just functional, but robust and secure."
  }
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="section-padding min-h-[50vh] flex flex-col justify-center">
      <div className="content-width">
        <motion.h2 
          className="font-serif text-5xl md:text-6xl mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Expertise
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {expertise.map((item, index) => (
            <motion.div 
              key={index}
              className="p-8 border border-white/10 bg-card/30 hover:bg-card/50 transition-colors duration-300 h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-serif text-white mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm font-mono flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
