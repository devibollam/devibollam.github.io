import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";

type Project = {
  title: string;
  description: string;
  domain: "Computer Vision" | "GenAI" | "RAG";
};

const projects: Project[] = [
  {
    title: "MS Applications Automation",
    description:
      "Automation framework for Microsoft Teams using computer vision + UI automation to streamline repetitive application actions.",
    domain: "Computer Vision",
  },
  {
    title: "CAN BUS Data Analysis using GenAI",
    description:
      "GenAI pipeline to analyze CAN bus signals and generate insights for better decision-making.",
    domain: "GenAI",
  },
  {
    title: "End-to-End RAG Pipeline with LLaMA",
    description:
      "Document-query system using a LLaMA-based RAG architecture for grounded chatbot responses over a shared knowledge base.",
    domain: "RAG",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeDomain, setActiveDomain] = useState<
    Project["domain"] | "All"
  >("All");

  const domains = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.domain)));
    return ["All" as const, ...unique];
  }, []);

  const visibleProjects = useMemo(() => {
    if (activeDomain === "All") return projects;
    return projects.filter((p) => p.domain === activeDomain);
  }, [activeDomain]);

  return (
    <section
      id="projects"
      className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-secondary/30"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">
            Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Selected AI / ML Projects
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/70 text-sm md:text-base leading-relaxed">
            Built to solve real problems with modern AI—spanning computer vision automation,
            GenAI signal intelligence, and end-to-end RAG systems that produce grounded answers.
          </p>

          {/* Explore by domain */}
          <div className="mt-8 flex flex-wrap gap-2">
            {domains.map((d) => {
              const isActive = d === activeDomain;
              return (
                <button
                  key={d}
                  type="button"
                  onClick={() => setActiveDomain(d)}
                  className={[
                    "text-xs md:text-sm px-4 py-2 rounded-full font-heading tracking-wide border transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary/30"
                      : "bg-secondary/50 text-muted-foreground border-border/60 hover:border-primary/30 hover:text-foreground",
                  ].join(" ")}
                >
                  {d}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="space-y-6 md:space-y-10">
          {visibleProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.05 * index }}
      className="relative overflow-hidden rounded-xl border border-border/50 bg-secondary/10 p-6 transition-colors hover:border-primary/30 hover:bg-primary/5"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-70" />

      <h3 className="font-heading text-xl md:text-2xl font-bold">
        {project.title}
      </h3>
      <p className="relative text-foreground/70 text-sm md:text-base leading-relaxed mt-2">
        {project.description}
      </p>
    </motion.div>
  );
};

export default ProjectsSection;
