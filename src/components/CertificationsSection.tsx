import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  { name: "Complete Python Bootcamp", period: "Jun 2025" },
  { name: "Database Management Systems (DBMS)", period: "Aug 2025" },
  { name: "Mac OS X Command Line", period: "Sep 2025" },
  { name: "Python 3 from Scratch", period: "Oct 2025" },
  { name: "Data Visualization", period: "Dec 2025" },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3 bg-card-gradient rounded-xl p-5 border border-border shadow-card"
            >
              <Award className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-display font-semibold text-sm">{cert.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
