import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech Computer Science (AI)",
    school: "JK Lakshmipat University, Jaipur",
    period: "2024 – 2028",
    score: "CGPA: 7.0",
  },
  {
    degree: "12th Standard",
    school: "Talent Public Sr. Sec. School",
    period: "2023 – 2024",
    score: "85.8%",
  },
  {
    degree: "10th Standard",
    school: "Talent Public Sr. Sec. School",
    period: "2021 – 2022",
    score: "86.5%",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-12" />
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 bg-card-gradient rounded-xl p-6 border border-border shadow-card hover:shadow-glow transition-shadow duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-lg">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm mt-1">{edu.school}</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <span className="text-xs text-primary font-medium">{edu.period}</span>
                  <span className="text-xs text-accent font-semibold">{edu.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
