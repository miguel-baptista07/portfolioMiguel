import { motion } from "framer-motion";

interface LandingScreenProps {
  onEnter: () => void;
}

const LandingScreen = ({ onEnter }: LandingScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-background"
      onClick={onEnter}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.button
        className="relative font-serif text-xl tracking-[0.4em] text-foreground transition-all duration-500 hover:tracking-[0.5em] md:text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        onClick={onEnter}
      >
        START
        <motion.span
          className="absolute -bottom-2 left-0 h-px w-full bg-foreground/30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        />
      </motion.button>
    </motion.div>
  );
};

export default LandingScreen;
