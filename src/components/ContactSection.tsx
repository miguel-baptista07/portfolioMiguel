import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Terminal, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "13fa78a9-dfe0-4347-9c73-ee89f8afab3b",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({ title: "Message sent!", description: "Thank you for reaching out. I'll reply soon." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({ title: "Error", description: result.message || "Something went wrong. Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Failed to send message. Please try later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding min-h-screen flex flex-col justify-center bg-zinc-900/30">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          className="font-serif text-4xl md:text-5xl lg:text-6xl mb-16 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let's Talk!
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Left column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-mono text-base leading-relaxed text-muted-foreground max-w-sm text-center mx-auto">
              Open to discussing opportunities, collaborations or simply talking about
              cybersecurity, software development and engineering.
            </p>

            <div className="space-y-3">
              {[
                {
                  icon: Terminal,
                  label: "Currently",
                  value: "Open to internships & junior roles in cybersecurity",
                },
                {
                  icon: Shield,
                  label: "Focus Areas",
                  value: "Penetration Testing · CTF · Red Team",
                },
                {
                  icon: Clock,
                  label: "Response Time",
                  value: "Usually within 24 hours",
                },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 bg-card/20 border border-white/8 border-l-2 border-l-primary px-4 py-3 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(29,200,160,0.3)] hover:-translate-y-1.5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
                      {label}
                    </p>
                    <p className="font-mono text-sm text-white/80">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.form
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-transparent border border-white/10 p-4 font-mono text-sm focus:outline-none focus:border-primary/40 transition-colors placeholder:text-muted-foreground/40"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-transparent border border-white/10 p-4 font-mono text-sm focus:outline-none focus:border-primary/40 transition-colors placeholder:text-muted-foreground/40"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={5}
                className="w-full bg-transparent border border-white/10 p-4 font-mono text-sm focus:outline-none focus:border-primary/40 transition-colors placeholder:text-muted-foreground/40 resize-none"
              />
            </div>

            <Button
              type="submit"
              variant="outline"
              disabled={isSubmitting}
              className="w-full md:w-auto border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60 font-mono text-xs uppercase tracking-widest py-6 px-8"
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
