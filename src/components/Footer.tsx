const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-background">
      <div className="content-width px-6 md:px-12 flex flex-col items-center gap-2 font-mono text-muted-foreground">
        <p className="text-xs">© 2026 Miguel Baptista</p>
        <p className="text-[10px] text-muted-foreground/40 tracking-wide">Built with React · TypeScript · Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
