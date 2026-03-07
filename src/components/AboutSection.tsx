import { motion } from "framer-motion";
import { GraduationCap, Brain, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl"
        >
          I'm currently pursuing a B.Tech in Computer Science (AI) at JK Lakshmipat University, Jaipur (2024–2028), with a CGPA of 7.0. I have a strong foundation in Algorithms, Object-Oriented Programming, DBMS, Python, and Web Development. I'm actively exploring AI/ML and building projects that solve real-world problems — from automating data pipelines to crafting interactive applications. I'm looking for internships, open-source opportunities, and tech collaborations where I can contribute, learn, and grow.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: "Strong Foundations",
              desc: "Deep understanding of Algorithms, Object-Oriented Programming, and Database Management Systems — the pillars of scalable software.",
            },
            {
              icon: Code,
              title: "Builder Mindset",
              desc: "I don't just study concepts — I ship projects. From games to web scrapers to productivity apps, I learn by creating.",
            },
            {
              icon: GraduationCap,
              title: "Growth-Oriented",
              desc: "Actively pursuing AI/ML and Software Development internships to translate academic knowledge into industry-ready skills.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-card-gradient rounded-xl p-6 border border-border shadow-card hover:shadow-glow transition-shadow duration-300"
            >
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
