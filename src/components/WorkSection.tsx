import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Image as ImageIcon, ChevronLeft, ChevronRight, X, Lock, LockOpen, Wifi, ScanLine } from "lucide-react";

import javaGameImg from "../assets/img/java-game.png";
import frontendLabs1 from "../assets/img/frontend-labs-1.png";
import frontendLabs2 from "../assets/img/frontend-labs-2.png";
import frontendLabs3 from "../assets/img/frontend-labs-3.png";
import reactNextjs1 from "../assets/img/react-nextjs-1.png";
import reactNextjs2 from "../assets/img/react-nextjs-2.png";
import reactNextjs3 from "../assets/img/react-nextjs-3.png";
import reactNextjs4 from "../assets/img/react-nextjs-4.png";
import reactNextjs5 from "../assets/img/react-nextjs-5.png";
import pythonPacketSniffer1 from "../assets/img/pythonpacketsniffer1.png";
import pythonPacketSniffer2 from "../assets/img/pythonpacketsniffer2.png";
import pythonPacketSniffer3 from "../assets/img/pythonpacketsniffer3.png";
import pythonPacketSniffer4 from "../assets/img/pythonpacketsniffer4.png";
import portScanner1 from "../assets/img/portscanner1.png";
import passwordCracker from "../assets/img/passwordcraker.png";

// ─── Animated card icons ──────────────────────────────────────────────────────

type Particle = { id: number; dx: number; dy: number; size: number };

const LockAnimated = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [particles, setParticles] = useState<Particle[]>([]);
  const isOpenRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      setScale(1.15);
      setTimeout(() => {
        const closing = isOpenRef.current === true;
        isOpenRef.current = !isOpenRef.current;
        setIsOpen(isOpenRef.current);
        setScale(1);

        if (closing) {
          const count = 12;
          const spread = 160;
          const burst: Particle[] = Array.from({ length: count }, (_, i) => {
            const baseOffset = -spread / 2 + (spread / (count - 1)) * i;
            const jitter = (Math.random() - 0.5) * 20;
            const angleDeg = baseOffset + jitter;
            const angleRad = (angleDeg * Math.PI) / 180;
            const distance = 35 + Math.random() * 15;
            return {
              id: Date.now() + i,
              dx: distance * Math.sin(angleRad),
              dy: -distance * Math.cos(angleRad),
              size: 6 + Math.floor(Math.random() * 3),
            };
          });
          setParticles(burst);
          setTimeout(() => setParticles([]), 900);
        }
      }, 250);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const Icon = isOpen ? LockOpen : Lock;
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ transform: `scale(${scale})`, transition: "transform 0.5s ease" }}>
        <Icon className="w-16 h-16 text-white/70" />
      </div>
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            backgroundColor: "#1dc8a0",
            pointerEvents: "none",
            animation: "particleBurst 0.8s ease-out forwards",
            "--dx": `${p.dx}px`,
            "--dy": `${p.dy}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

const WifiAnimated = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="32" cy="52" r="3.5" fill="rgba(255,255,255,0.7)" style={{ animation: "wifiPulse 3s ease infinite", animationDelay: "0s" }} />
    <path d="M22 43 Q32 35 42 43" stroke="rgba(255,255,255,0.7)" strokeWidth="3.5" style={{ animation: "wifiPulse 3s ease infinite", animationDelay: "0.35s" }} />
    <path d="M13 34 Q32 21 51 34" stroke="rgba(255,255,255,0.7)" strokeWidth="3.5" style={{ animation: "wifiPulse 3s ease infinite", animationDelay: "0.7s" }} />
    <path d="M4 25 Q32 7 60 25" stroke="rgba(255,255,255,0.7)" strokeWidth="3.5" style={{ animation: "wifiPulse 3s ease infinite", animationDelay: "1.05s" }} />
  </svg>
);

const ScanLineAnimated = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3" strokeLinecap="round">
    <path d="M8 22 L8 8 L22 8" />
    <path d="M42 8 L56 8 L56 22" />
    <path d="M56 42 L56 56 L42 56" />
    <path d="M22 56 L8 56 L8 42" />
    <line x1="14" y1="32" x2="50" y2="32" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" style={{ animation: "scanMove 2.5s ease-in-out infinite alternate" }} />
  </svg>
);

// ─── Data ────────────────────────────────────────────────────────────────────

const featuredProjects = [
  {
    title: "Password Hash Cracker",
    description: "MD5/SHA1 hash cracking tool with dictionary attack using customizable wordlists",
    tags: ["Python", "Hashlib", "Wordlist Attack"],
    bannerStyle: {
      background: "linear-gradient(135deg, #4a1270, #7b3fb5, #2d1a6e, #4a1270)",
      backgroundSize: "200% 200%",
      animation: "gradientPurple 6s ease infinite alternate",
    } as React.CSSProperties,
    githubUrl: "https://github.com/miguel-baptista07/Password-Hash-Cracker",
    images: [passwordCracker],
    icon: LockAnimated,
  },
  {
    title: "Python Packet Sniffer",
    description: "Real-time network packet capture and analysis with protocol filtering",
    tags: ["Python", "Scapy", "TCP/IP"],
    bannerStyle: {
      background: "linear-gradient(135deg, #0f3060, #1a5490, #0f5272, #0f3060)",
      backgroundSize: "200% 200%",
      animation: "gradientBlue 6s ease infinite alternate",
    } as React.CSSProperties,
    githubUrl: "https://github.com/miguel-baptista07/Python-Packet-Sniffer",
    images: [pythonPacketSniffer1, pythonPacketSniffer2, pythonPacketSniffer3, pythonPacketSniffer4],
    icon: WifiAnimated,
  },
  {
    title: "Python Port Scanner",
    description: "Multi-threaded TCP port scanner with service detection and banner grabbing",
    tags: ["Python", "Socket", "Threading"],
    bannerStyle: {
      background: "linear-gradient(135deg, #0f5030, #1a7a48, #0f4060, #0f5030)",
      backgroundSize: "200% 200%",
      animation: "gradientGreen 6s ease infinite alternate",
    } as React.CSSProperties,
    githubUrl: "https://github.com/miguel-baptista07/Python-Port-Scanner",
    images: [portScanner1],
    icon: ScanLineAnimated,
  },
];

const otherProjects = [
  {
    title: "React & Next.js — E-Commerce Platform",
    description: "Modern web application built with React and Next.js, focused on component architecture, state management, and real-world frontend patterns.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/miguel-baptista07/diw-lab8",
    liveUrl: "https://lab11part1.vercel.app/",
    images: [reactNextjs5, reactNextjs4, reactNextjs3, reactNextjs2, reactNextjs1],
  },
  {
    title: "The Great Programming Journey",
    description: "Educational board game engine developed in Java, focused on object-oriented design and game logic using pure polymorphism.",
    tags: ["Java 17", "OOP", "Game Logic"],
    githubUrl: "https://github.com/miguel-baptista07/LP2-22405192-22408651",
    images: [javaGameImg],
  },
  {
    title: "Frontend Labs Collection",
    description: "Collection of frontend labs developed incrementally using HTML, CSS, and JavaScript, evolving towards modern frontend practices.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/miguel-baptista07/miguelbaptista1.github.io",
    images: [frontendLabs3, frontendLabs2, frontendLabs1],
  },
];

// ─── Image Modal ─────────────────────────────────────────────────────────────

const ImageModal = ({
  images,
  isOpen,
  onClose,
}: {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setCurrentIndex(0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((p) => (p + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((p) => (p - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, nextImage, prevImage]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors z-50"
          aria-label="Close gallery"
        >
          <X size={30} />
        </button>

        <div
          className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {images.length > 1 && (
            <>
              <button onClick={prevImage} className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white transition-colors z-50" aria-label="Previous">
                <ChevronLeft size={40} />
              </button>
              <button onClick={nextImage} className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white transition-colors z-50" aria-label="Next">
                <ChevronRight size={40} />
              </button>
            </>
          )}

          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          />

          {images.length > 1 && (
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === currentIndex ? "bg-white" : "bg-white/30"}`}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// ─── Featured Card ────────────────────────────────────────────────────────────

const FeaturedCard = ({
  project,
  index,
}: {
  project: typeof featuredProjects[0];
  index: number;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Icon = project.icon;

  return (
    <>
      <motion.div
        className="border border-white/10 overflow-hidden hover:border-primary/50 hover:shadow-[0_0_20px_rgba(29,200,160,0.3)] transition-all duration-300 group"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.15 }}
      >
        {/* Gradient banner */}
        <div
          className="relative h-44 overflow-hidden cursor-pointer flex items-center justify-center"
          style={project.bannerStyle}
          onClick={() => project.images.length > 0 && setIsModalOpen(true)}
        >
          <div className="flex items-center justify-center w-full h-full">
            <Icon />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Gallery hint */}
          {project.images.length > 0 && (
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white/80 text-[10px] font-mono px-2.5 py-1.5 border border-white/10">
                <ImageIcon size={12} />
                {project.images.length > 1 ? `${project.images.length} photos` : "View"}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 bg-card/20 space-y-4">
          <h3 className="font-serif text-2xl text-white">{project.title}</h3>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] px-3 py-1 border border-white/10 text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs border border-white/10 px-4 py-2 hover:bg-white/5 hover:border-white/20 transition-all duration-200"
            >
              <Github size={13} /> GitHub
            </a>
          </div>
        </div>
      </motion.div>

      <ImageModal images={project.images} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

// ─── Small Card ───────────────────────────────────────────────────────────────

const SmallCard = ({
  project,
  index,
}: {
  project: typeof otherProjects[0];
  index: number;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="border border-white/10 bg-card/20 overflow-hidden hover:border-primary/50 hover:shadow-[0_0_20px_rgba(29,200,160,0.3)] transition-all duration-300 group flex flex-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {/* Thumbnail */}
        <div
          className="relative h-40 overflow-hidden bg-zinc-900 cursor-pointer"
          onClick={() => project.images.length > 0 && setIsModalOpen(true)}
        >
          {project.images[0] && (
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white/80 text-xs font-mono px-3 py-1.5 border border-white/10">
              <ImageIcon size={13} /> View Gallery
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1 space-y-3">
          <h3 className="font-serif text-lg text-white">{project.title}</h3>
          <p className="font-mono text-xs text-muted-foreground leading-relaxed flex-1">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-[9px] px-2 py-0.5 border border-white/10 text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3 pt-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] border border-white/10 px-3 py-1.5 hover:bg-white/5 transition-colors"
            >
              <Github size={11} /> GitHub
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] border border-white/10 px-3 py-1.5 hover:bg-white/5 transition-colors"
              >
                <ExternalLink size={11} /> Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <ImageModal images={project.images} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────

const WorkSection = () => {
  return (
    <section id="work" className="section-padding flex flex-col justify-center bg-zinc-900/30">
      <style>{`
        @keyframes gradientPurple {
          0%   { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        @keyframes gradientBlue {
          0%   { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        @keyframes gradientGreen {
          0%   { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        @keyframes wifiPulse {
          0%, 15%  { opacity: 0.1; }
          45%, 75% { opacity: 1; }
          100%     { opacity: 0.1; }
        }
        @keyframes scanMove {
          0%   { transform: translateY(-14px); }
          100% { transform: translateY(14px); }
        }
        @keyframes particleBurst {
          0%   { transform: translate(-50%, -50%) translate(0, 0) scale(1);   opacity: 1; }
          100% { transform: translate(-50%, -50%) translate(var(--dx), var(--dy)) scale(0.4); opacity: 0; }
        }
      `}</style>
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          className="font-serif text-4xl md:text-5xl lg:text-6xl mb-16 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Projects
        </motion.h2>

        {/* Featured grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1 h-px bg-white/10" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
            other projects
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {otherProjects.map((project, i) => (
            <SmallCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.p
          className="font-mono text-xs text-muted-foreground/40 text-left mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          // More projects will be added as my journey continues
        </motion.p>
      </div>
    </section>
  );
};

export default WorkSection;
