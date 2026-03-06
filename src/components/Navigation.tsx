import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "HOME", href: "#hero" },
  { label: "PROJECTS", href: "#work" },
  { label: "EDUCATION", href: "#education" },
  { label: "EXPERTISE", href: "#expertise" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md py-4" : "py-8 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="content-width px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, "#hero")}
          className="font-mono text-sm tracking-widest hover:text-primary transition-colors"
        >
          MB_
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="mono-sm text-[10px] tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary mr-1 text-[9px]">
                {index + 1}.
              </span>
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 md:hidden flex flex-col gap-4">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="mono-sm text-sm py-2"
              >
                <span className="text-primary mr-2">{index + 1}.</span>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
