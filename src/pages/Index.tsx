import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LandingScreen from "@/components/LandingScreen";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import EducationSection from "@/components/EducationSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!hasEntered && (
          <LandingScreen onEnter={handleEnter} />
        )}
      </AnimatePresence>

      {hasEntered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navigation />
          <main>
            <HeroSection />
            <WorkSection />
            
            <motion.div 
              className="py-12 bg-zinc-900/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="content-width">
                <p className="font-mono text-sm text-muted-foreground/60 text-left">
                  // More projects will be added as my journey continues
                </p>
              </div>
            </motion.div>

            <EducationSection />
            <ExpertiseSection />
            <AboutSection />
            <ContactSection />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default Index;
