import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Send, FileText, Loader2, Twitter, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const RedditIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.508 1.183-.849 2.863-1.418 4.684-1.492l.886-4.154a.469.469 0 0 1 .55-.352l3.14.664c.204-.396.619-.67 1.096-.67zm-5.01 11.452c-1.66 0-3.224-.508-4.414-1.432l.334-.442c1.08.832 2.492 1.29 4.08 1.29 1.588 0 3-.458 4.08-1.29l.334.442c-1.19.924-2.754 1.432-4.414 1.432zm-2.822-2.812c-.81 0-1.466-.656-1.466-1.466 0-.81.656-1.466 1.466-1.466.81 0 1.466.656 1.466 1.466 0 .81-.656 1.466-1.466 1.466zm5.644 0c-.81 0-1.466-.656-1.466-1.466 0-.81.656-1.466 1.466-1.466.81 0 1.466.656 1.466 1.466 0 .81-.656 1.466-1.466 1.466z" />
  </svg>
);

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

            <div className="flex flex-col gap-8">
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
                  href="https://x.com/miguel_kn07" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-white/10 hover:bg-white/5 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://www.reddit.com/user/Migui4ever/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-white/10 hover:bg-white/5 transition-colors"
                  aria-label="Reddit"
                >
                  <RedditIcon size={20} />
                </a>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                  Check my resume
                </p>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex p-3 border border-white/10 hover:bg-white/5 transition-colors"
                  aria-label="Resume"
                >
                  <FileText size={20} />
                </a>
              </div>
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
