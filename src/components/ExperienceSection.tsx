import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

type Tab = "academic" | "certifications";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>("academic");

  return (
    <section id="experience" className="section-padding min-h-screen flex flex-col justify-center bg-zinc-900/30">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Experience
        </motion.h2>
        <motion.p
          className="font-mono text-sm text-muted-foreground mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My academic background and certifications
        </motion.p>

        {/* Tab switcher */}
        <motion.div
          className="flex gap-2 mb-12 w-full md:w-auto md:justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {(["academic", "certifications"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 md:flex-none px-6 py-2 font-mono text-xs uppercase tracking-widest border transition-all duration-200 ${
                activeTab === tab
                  ? "border-primary text-primary bg-primary/10"
                  : "border-white/10 text-muted-foreground hover:border-white/30 hover:text-white"
              }`}
            >
              {tab === "academic" ? "Academic" : "Certifications"}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "academic" && (
              <div className="relative pl-8 border-l border-white/10 max-w-2xl mx-auto">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
                <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
                  2024 — present
                </p>
                <div className="border border-white/10 bg-card/30 p-6 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(29,200,160,0.3)] hover:-translate-y-1.5 transition-all duration-300 w-full max-w-2xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 border border-primary/20 bg-primary/5 shrink-0">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-white mb-1">
                        Computer Engineering
                      </h3>
                      <p className="font-mono text-sm text-muted-foreground">
                        Universidade Lusófona
                      </p>
                    </div>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                    Focused on cybersecurity, web development and software engineering
                  </p>
                </div>
                <p className="font-mono text-xs mt-6 opacity-50" style={{ color: '#1dc8a0' }}>
                  // More certifications and experience coming soon...
                </p>
              </div>
            )}

            {activeTab === "certifications" && (
              <div className="relative pl-8 border-l border-white/10 max-w-2xl mx-auto">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
                <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
                  2026
                </p>
                <div className="border border-white/10 bg-card/30 p-6 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(29,200,160,0.3)] hover:-translate-y-1.5 transition-all duration-300 w-full max-w-2xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 border border-primary/20 bg-primary/5 shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-xl text-white mb-1">
                        Pre Security Certificate
                      </h3>
                      <p className="font-mono text-sm text-muted-foreground">TryHackMe</p>
                    </div>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                    Hands-on training in networking, Linux, web security and cryptography, building the foundations for offensive and defensive security.
                  </p>
                </div>
                <p className="font-mono text-xs mt-6 opacity-50" style={{ color: '#1dc8a0' }}>
                  // More certifications and experience coming soon...
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExperienceSection;
