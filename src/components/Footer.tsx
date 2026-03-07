const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© 2026 Kapil Kumawat. Built with passion & code.</p>
      <div className="flex gap-6">
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
