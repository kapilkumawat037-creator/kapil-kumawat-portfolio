import { motion } from "framer-motion";
import { Guitar, Sparkles, BookOpen } from "lucide-react";

const traits = [
  {
    icon: Guitar,
    title: "Guitar Enthusiast",
    desc: "Music fuels creativity. Playing guitar brings rhythm and discipline into my life — skills that translate directly into focused problem-solving.",
  },
  {
    icon: Sparkles,
    title: "Motivational Spirit",
    desc: "I believe in lifting others up. Whether it's a team project or a study group, my energy and optimism help drive collective success.",
  },
  {
    icon: BookOpen,
    title: "Lifelong Learner",
    desc: "Technology never stops evolving, and neither do I. From certifications to side projects, I'm always expanding my toolkit and horizons.",
  },
];

const TraitsSection = () => {
  return (
    <section id="traits" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Beyond <span className="text-gradient">Code</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {traits.map((trait, i) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-xl bg-card-gradient border border-border shadow-card hover:shadow-glow transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <trait.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">{trait.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{trait.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TraitsSection;
