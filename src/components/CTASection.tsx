import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

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
            Whether you're a recruiter scouting fresh talent, a fellow developer looking to
            collaborate, or a tech enthusiast who wants to chat — I'd love to hear from you.
            I'm especially excited about opportunities in{" "}
            <span className="text-primary font-medium">AI/ML</span> and{" "}
            <span className="text-primary font-medium">Software Development</span> internships.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:kapilkumawat@example.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-primary font-display font-semibold text-sm tracking-wide text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Send a Message
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border font-display font-semibold text-sm tracking-wide text-foreground hover:bg-secondary transition-colors"
            >
              LinkedIn
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
