import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";

const HeroSection = () => {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center section-padding pt-32">
      <div className="content-width">
        <motion.p
          className="mono-sm mb-6 text-muted-foreground tracking-widest text-xs uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Computer Engineering Student
        </motion.p>
        
        <motion.h1
          className="font-serif text-6xl md:text-7xl lg:text-8xl leading-none mb-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Miguel Baptista
        </motion.h1>
        
        <motion.p
          className="max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Focused on building strong technical foundations through disciplined 
          problem-solving and an engineering mindset. Developing expertise in{" "}
          <strong className="text-white font-medium">software development</strong> and{" "}
          <strong className="text-white font-medium">frontend systems</strong>, while building a solid understanding of{" "}
          <strong className="text-white font-medium">cybersecurity</strong> and{" "}
          <strong className="text-white font-medium">systems engineering</strong>.
        </motion.p>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
