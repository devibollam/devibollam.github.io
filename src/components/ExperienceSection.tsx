import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "Dec 2023 — Present",
    role: "AI/ML Engineer",
    company: "Capgemini",
    description:
      "Developing and deploying AI/ML solutions to automate processes, enhance decision-making, and drive innovation. Skilled in machine learning, deep learning, and large language models (LLMs) to deliver impactful, data-driven applications for business needs.",
  },
];

const education = [
  {
    period: "2019 — 2023",
    degree: "B.Tech in Computer Science",
    school: "Malineni Lakshmaiah Women's Engineering College",
  },
  {
    period: "2017 — 2019",
    degree: "Intermediate",
    school: "Sri Chaitanya",
  },
  {
    period: "2015 — 2017",
    degree: "SSC",
    school: "Sri Chaitanya",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="px-6 md:px-16 lg:px-24 py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Work */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Career</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">Work Experience</h2>
            </motion.div>

            <div className="relative">
              {/* timeline rail */}
              <div className="absolute left-1 top-0 bottom-0 w-px bg-border/60" />
              <motion.div
                aria-hidden="true"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.25 }}
                className="absolute left-1 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent origin-top"
              />

              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.12 }}
                  className="relative pl-10 pb-10 last:pb-0"
                >
                  <div className="absolute left-1 top-1 -translate-x-1/2">
                    <span className="block h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_6px_rgba(59,130,246,0.12)]" />
                  </div>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase mb-1">
                    {exp.period}
                  </p>
                  <h3 className="font-heading text-lg font-semibold">{exp.role}</h3>
                  <p className="text-primary text-sm mb-3">{exp.company}</p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Academics</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">Education</h2>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="p-5 bg-secondary/50 rounded-lg border border-border/50 hover:border-primary/20 transition-colors"
                >
                  <p className="text-xs text-muted-foreground tracking-wider uppercase mb-1">{edu.period}</p>
                  <h3 className="font-heading text-sm font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{edu.school}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
