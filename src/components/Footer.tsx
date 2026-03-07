import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© 2026 Kapil Kumawat. Built with passion & code.</p>
      <div className="flex gap-4">
        <a href="https://github.com/kapilkumawat037-creator" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
          <Github className="w-4 h-4" />
        </a>
        <a href="https://linkedin.com/in/kapil-kumawat-622a8233a" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="mailto:kapilkumawat037@gmail.com" className="hover:text-foreground transition-colors">
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
