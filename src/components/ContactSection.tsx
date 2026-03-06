import { motion } from "framer-motion";
import { Github, Linkedin, Send, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding min-h-screen flex flex-col justify-center bg-zinc-900/30">
      <div className="content-width">
        <motion.h2 
          className="font-serif text-5xl md:text-6xl mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-mono max-w-md">
              Open to discussing opportunities, collaborations, or just connecting about 
              cybersecurity, software development and engineering.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/miguel-baptista07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-white/10 hover:bg-white/5 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/miguel-baptista-170744355/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-white/10 hover:bg-white/5 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:bg-white/5 transition-colors text-sm font-mono uppercase tracking-widest text-white"
              >
                <FileText size={16} />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</label>
              <input 
                type="text" 
                placeholder="Your name"
                className="w-full bg-transparent border border-white/10 p-4 font-mono text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-muted-foreground/50"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
              <input 
                type="email" 
                placeholder="your@email.com"
                className="w-full bg-transparent border border-white/10 p-4 font-mono text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-muted-foreground/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea 
                placeholder="Your message..."
                rows={5}
                className="w-full bg-transparent border border-white/10 p-4 font-mono text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-muted-foreground/50 resize-none"
              />
            </div>

            <Button 
              type="submit"
              variant="outline"
              className="w-full md:w-auto border-white/10 hover:bg-white/5 font-mono text-xs uppercase tracking-widest py-6 px-8"
            >
              Send Message <Send size={14} className="ml-2" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
