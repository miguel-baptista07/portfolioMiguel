import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Image as ImageIcon, ChevronLeft, ChevronRight, X } from "lucide-react";

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

const projects = [
  {
    title: "Python Packet Sniffer",
    description: "Network packet sniffer using raw sockets to capture and inspect live traffic at the IP/TCP layer. Structured across multiple modules with a malicious traffic simulator for testing.",
    bullets: [
      "Parses packet headers to extract source/destination IPs and protocol type",
      "Includes a malicious traffic simulator for anomaly detection testing",
      "Modular structure: sniffer.py, app.py, mal_app.py, ui.py"
    ],
    tags: ["Python", "Raw Sockets", "TCP/IP", "Network Security"],
    githubUrl: "https://github.com/miguel-baptista07/Python-Packet-Sniffer",
    images: [
      pythonPacketSniffer1,
      pythonPacketSniffer2,
      pythonPacketSniffer3,
      pythonPacketSniffer4
    ]
  },
  {
    title: "Python Port Scanner",
    description: "TCP port scanner that probes ports 1–1024 via socket connections, resolves hostnames to IPs, and measures execution time.",
    bullets: [
      "Detects open and closed ports across the full well-known port range",
      "Replicates the core logic of tools like nmap using Python's socket library"
    ],
    tags: ["Python", "TCP Sockets", "Networking", "Cybersecurity"],
    githubUrl: "https://github.com/miguel-baptista07/Python-Port-Scanner",
    images: [
      portScanner1
    ]
  },
  {
    title: "React & Next.js — Frontend Labs & E-Commerce Platform",
    description: "Modern web application built with React and Next.js, focused on component architecture, state management, and real-world frontend patterns.",
    bullets: [
      "Product listing with search and sorting functionality",
      "Dynamic routes for product details and navigation",
      "Shopping cart with persistent state using localStorage",
      "Favorites system synchronized across pages",
      "Countries explorer with filtering and ordering"
    ],
    tags: ["React", "Next.js", "TypeScript", "SWR", "Tailwind CSS", "LocalStorage"],
    liveUrl: "https://lab11part1.vercel.app/",
    githubUrl: "https://github.com/miguel-baptista07/diw-lab8",
    galleryUrl: "#",
    images: [
      reactNextjs5,
      reactNextjs4,
      reactNextjs3,
      reactNextjs2,
      reactNextjs1
    ]
  },
  {
    title: "Password Hash Cracker",
    description: "Dictionary attack tool that cracks SHA1 password hashes using a wordlist — demonstrates why unsalted hashes are insecure.",
    bullets: [
      "Hashes each wordlist entry and compares against the target SHA1 hash",
      "Highlights the need for password salting and stronger algorithms like bcrypt"
    ],
    tags: ["Python", "SHA1", "Cryptography", "Cybersecurity"],
    githubUrl: "https://github.com/miguel-baptista07/Password-Hash-Cracker",
    images: [
      passwordCracker
    ]
  },
  {
    title: "The Great Programming Journey",
    description: "Educational board game engine developed in Java, focused on object-oriented design and game logic.",
    bullets: [
      "Complex OOP architecture using inheritance and polymorphism",
      "Zero usage of instanceof (pure polymorphism)",
      "Turn-based game logic with obstacles, tools, and persistence"
    ],
    tags: ["Java 17", "Object-Oriented Programming", "Game Logic"],
    githubUrl: "https://github.com/miguel-baptista07/LP2-22405192-22408651",
    images: [
      javaGameImg
    ]
  },
  {
    title: "Frontend Labs Collection",
    description: "Collection of frontend labs developed incrementally using HTML, CSS, and JavaScript, evolving towards modern frontend practices.",
    bullets: [
      "Dynamic data rendering",
      "Filters, sorting, and user interaction",
      "Clear separation of structure, style, and logic"
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/miguel-baptista07/miguelbaptista1.github.io",
    galleryUrl: "#",
    images: [
      frontendLabs3,
      frontendLabs2,
      frontendLabs1
    ]
  }
];

const ImageModal = ({ images, isOpen, onClose }: { images: string[], isOpen: boolean, onClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, nextImage, prevImage]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-50"
          aria-label="Close gallery"
        >
          <X size={32} />
        </button>

        <div 
          className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-50"
                aria-label="Previous image"
              >
                <ChevronLeft size={40} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-50"
                aria-label="Next image"
              >
                <ChevronRight size={40} />
              </button>
            </>
          )}

          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            referrerPolicy="no-referrer"
          />
          
          {images.length > 1 && (
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    i === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="group grid gap-12 md:grid-cols-2 items-start"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
      >
        <div 
          className="relative overflow-hidden border border-white/10 bg-card aspect-[4/3] transition-colors duration-500 group cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="relative w-full h-full">
            <img 
              src={project.images[0]} 
              alt={project.title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-black/50 text-white px-4 py-2 rounded-full text-sm font-mono backdrop-blur-sm border border-white/10 flex items-center gap-2">
                <ImageIcon size={16} />
                View Gallery
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-3xl font-serif text-white leading-tight">{project.title}</h3>
          
          <p className="text-muted-foreground leading-relaxed font-mono text-sm">
            {project.description}
          </p>

          <ul className="space-y-2">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-mono">
                <span className="text-primary mt-1">•</span>
                {bullet}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-mono px-3 py-1 border border-white/10 rounded-full text-muted-foreground hover:text-white hover:border-white/30 transition-colors">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-6">
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-mono border border-white/10 px-4 py-2 hover:bg-white/5 transition-colors"
              >
                Live Demo <ExternalLink size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-mono border border-white/10 px-4 py-2 hover:bg-white/5 transition-colors"
              >
                GitHub <Github size={14} />
              </a>
            )}
            {project.galleryUrl && (
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 text-sm font-mono border border-white/10 px-4 py-2 hover:bg-white/5 transition-colors"
              >
                View Gallery <ImageIcon size={14} />
              </button>
            )}
          </div>
        </div>
      </motion.div>

      <ImageModal 
        images={project.images} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

const WorkSection = () => {
  return (
    <section id="work" className="section-padding min-h-screen flex flex-col justify-center bg-zinc-900/30">
      <div className="content-width">
        <motion.h2 
          className="font-serif text-5xl md:text-6xl mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;