import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Send, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "13fa78a9-dfe0-4347-9c73-ee89f8afab3b",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</label>
              <input 
                id="name"
                name="name"
                type="text" 
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-transparent border border-white/10 p-4 font-mono text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-muted-foreground/50"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
              <input 
                id="email"
                name="email"
                type="email" 
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-transparent border border-white/10 p-4 font-mono text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-muted-foreground/50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea 
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={5}
                className="w-full bg-transparent border border-white/10 p-4 font-mono text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-muted-foreground/50 resize-none"
              />
            </div>

            <Button 
              type="submit"
              variant="outline"
              disabled={isSubmitting}
              className="w-full md:w-auto border-white/10 hover:bg-white/5 font-mono text-xs uppercase tracking-widest py-6 px-8"
            >
              {isSubmitting ? (
                <>Sending... <Loader2 size={14} className="ml-2 animate-spin" /></>
              ) : (
                <>Send Message <Send size={14} className="ml-2" /></>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;