import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Github, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you're a recruiter hiring for{" "}
            <span className="text-primary font-medium">AI, ML, or Software Development</span>{" "}
            internships, a developer open to collaborating on meaningful projects, or a tech enthusiast who wants to exchange ideas — I'd love to hear from you.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="mailto:kapilkumawat037@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-primary font-display font-semibold text-sm tracking-wide text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Send a Message
            </a>
            <a
              href="https://linkedin.com/in/kapil-kumawat-622a8233a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border font-display font-semibold text-sm tracking-wide text-foreground hover:bg-secondary transition-colors"
            >
              LinkedIn
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/kapilkumawat037-creator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border font-display font-semibold text-sm tracking-wide text-foreground hover:bg-secondary transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
            <a href="mailto:kapilkumawat037@gmail.com" className="hover:text-foreground transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> kapilkumawat037@gmail.com
            </a>
            <a href="tel:+918005908961" className="hover:text-foreground transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> +91 8005908961
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
