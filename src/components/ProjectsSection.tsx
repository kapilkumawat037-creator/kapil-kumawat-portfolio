import { motion } from "framer-motion";
import { Gamepad2, Database, Bell } from "lucide-react";

const projects = [
  {
    icon: Gamepad2,
    title: "Snake Game",
    tech: "Python · Pygame · OOP",
    date: "Oct 2025",
    desc: "A classic reimagined — built a fully interactive Snake game leveraging Pygame for rendering and OOP principles for clean, maintainable game logic. Features smooth controls, score tracking, and escalating difficulty that keeps players hooked.",
    status: "completed" as const,
  },
  {
    icon: Database,
    title: "IMDb Web Scraper",
    tech: "Python · BeautifulSoup · Pandas · Requests",
    date: "Oct – Nov 2025",
    desc: "Engineered a data pipeline that scrapes IMDb for movie metadata — ratings, genres, cast — and transforms raw HTML into structured, analysis-ready datasets using Pandas. A hands-on dive into web scraping, data cleaning, and automation.",
    status: "completed" as const,
  },
  {
    icon: Bell,
    title: "Reminder App",
    tech: "In Progress",
    date: "Feb 2026 – Present",
    desc: "Currently building a notification-based reminder application that lets users set time-based alerts with custom name, date/time, and message fields. Focused on clean UX and reliable push notifications to help users stay on track.",
    status: "in-progress" as const,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-12" />
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-card-gradient rounded-xl p-6 md:p-8 border border-border shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display font-bold text-xl">{project.title}</h3>
                    {project.status === "in-progress" && (
                      <span className="px-3 py-0.5 text-xs font-medium rounded-full bg-accent/15 text-accent border border-accent/30">
                        In Progress
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs text-primary font-medium">{project.tech}</span>
                    <span className="text-xs text-muted-foreground">• {project.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
