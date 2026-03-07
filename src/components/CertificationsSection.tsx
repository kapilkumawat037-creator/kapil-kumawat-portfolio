import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  { name: "Complete Python Bootcamp — Zero to Hero", period: "Dec 2025" },
  { name: "Database Management Systems", period: "Nov 2025" },
  { name: "Mac OS X Command Line", period: "Oct 2025" },
  { name: "Learn to Code from Scratch with Python 3", period: "Jul 2025" },
  { name: "Data Visualization and Processing", period: "Jun 2025" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 sm:pl-12 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-primary shadow-glow hidden sm:block" />
                <div className="flex items-start gap-3 bg-card-gradient rounded-xl p-5 border border-border shadow-card flex-1">
                  <Award className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-display font-semibold text-sm">{cert.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
