import { motion } from "framer-motion";
import { Shield, GitBranch, Bug } from "lucide-react";

const services = [
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Cybersecurity",
    description: "Vulnerability analysis, ethical hacking and offensive and defensive security tools.",
  },
  {
    icon: <GitBranch className="w-6 h-6 text-primary" />,
    title: "Open Source Contribution",
    description: "Contributing to real-world open-source projects through professional Git workflows: pull requests, code reviews and issue tracking.",
  },
  {
    icon: <Bug className="w-6 h-6 text-primary" />,
    title: "CTF & Ethical Hacking",
    description: "Participation in CTF competitions, solving security challenges and controlled exploitation.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          className="font-serif text-4xl md:text-5xl lg:text-6xl mb-16 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          About Me
        </motion.h2>

        <div className="space-y-4 mb-16 max-w-2xl mx-auto">
          <motion.p
            className="text-base leading-relaxed text-muted-foreground font-mono text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a Computer Engineering student at Universidade Lusófona, with a focus on{" "}
            <span className="text-primary">Cybersecurity</span> and secure software development.
            I build security tools from scratch: packet sniffers, port scanners and hash crackers,
            and contribute to real-world open-source projects through professional Git workflows.
          </motion.p>
          <motion.p
            className="text-base leading-relaxed text-muted-foreground font-mono text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Active member of <span className="text-primary">NEDI</span>, the student tech association
            at Lusófona, and <span className="text-primary">CGI Campus Ambassador</span>, where I help
            bridge students and the tech industry through workshops and events.
          </motion.p>
          <motion.p
            className="text-base leading-relaxed text-muted-foreground font-mono text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Currently working through <span className="text-primary">TryHackMe</span> with a goal
            of becoming a penetration tester. I learn by building, breaking, and contributing.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="p-6 border border-white/10 bg-card/30 hover:bg-card/60 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(29,200,160,0.3)] transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-4 p-3 border border-primary/20 bg-primary/5 w-fit mx-auto group-hover:bg-primary/10 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl text-white mb-3 text-center">{service.title}</h3>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
