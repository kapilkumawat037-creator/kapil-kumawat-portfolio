import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Languages",
    skills: ["Python", "C", "Node.js", "MySQL"],
  },
  {
    label: "Tools & Platforms",
    skills: ["VS Code", "Figma", "Microsoft Excel", "Xilinx-ISE (VHDL)"],
  },
  {
    label: "Design",
    skills: ["Architectural Design", "UI/UX Prototyping"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <h3 className="font-display font-semibold text-sm tracking-widest uppercase text-primary mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/40 hover:shadow-glow transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
