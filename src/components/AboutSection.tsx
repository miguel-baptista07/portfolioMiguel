import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding min-h-[50vh] flex flex-col justify-center">
      <div className="max-w-6xl">
        <motion.h2 
          className="font-serif text-5xl md:text-6xl mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>

        <motion.div 
          className="max-w-3xl space-y-8 text-lg md:text-xl leading-relaxed text-muted-foreground font-mono"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white">
            I approach learning and work with the same discipline I developed 
            playing handball for years—understanding when to push forward and 
            when to support the team. As team captain, I've learned to stay 
            calm under pressure, make decisions in high-stress situations, and 
            transmit calm and confidence to my teammates.
          </p>
          <p>
            Currently building a strong foundation in software engineering, with a focus 
            on understanding systems deeply—from frontend interfaces to underlying 
            security protocols. I believe in writing code that is maintainable, 
            efficient, and secure.
          </p>
          <p>
            Based in Portugal, I'm committed to long-term growth in this field—taking 
            the time to learn properly, one concept at a time. Looking ahead, I aim to 
            specialize in cybersecurity while continuing to deepen my expertise in 
            frontend engineering and AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
