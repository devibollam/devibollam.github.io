import { motion, useInView } from "framer-motion";
import { ComponentType, useRef } from "react";
import { Database, Layers, Sparkles, Workflow } from "lucide-react";

import chatbotImg from "@/assets/chatbot.png";

type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights?: string[];
  image?: string;
  icon: ComponentType<{ className?: string }>;
};

const projects: Project[] = [
  {
    title: "RAG Knowledge Assistant",
    description:
      "A Retrieval-Augmented Generation assistant that answers questions over your documents with embeddings + vector search, returning grounded responses with citations.",
    highlights: [
      "Chunking + semantic retrieval pipeline",
      "Grounded answers with reference passages",
    ],
    tech: ["RAG", "LangChain", "Embeddings", "Vector DB", "Streamlit"],
    image: chatbotImg,
    icon: Database,
  },
  {
    title: "LLM Workflow Automation",
    description:
      "An end-to-end automation pipeline that routes tasks to the right prompts, validates outputs, and logs structured results for reliable iteration.",
    highlights: ["Prompt orchestration + output validation", "Structured results for reporting"],
    tech: ["LLM", "Prompting", "Evaluation", "Automation"],
    icon: Workflow,
  },
  {
    title: "AI Document Intelligence",
    description:
      "Document intelligence for extracting meaning from text: classification, entity extraction, and summary generation designed for quick decision-making.",
    highlights: ["NLP extraction + summarization", "Consistent formatting for reports"],
    tech: ["NLP", "Text Processing", "Summarization"],
    icon: Layers,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Projects
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            AI / ML Projects
          </h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, i) => (
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

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
        isEven ? "" : "lg:direction-rtl"
      }`}
    >
      {/* Preview */}
      <div className={`lg:col-span-7 ${!isEven ? "lg:order-2" : ""}`}>
        <div className="relative overflow-hidden rounded-lg border border-border/50 bg-secondary/10">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          ) : (
            <div className="w-full aspect-video flex flex-col items-center justify-center gap-4 p-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <project.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm text-foreground/70 text-center max-w-xs">
                AI/ML project preview
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-secondary/70 border border-border rounded-full text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Sheen */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-70" />
        </div>
      </div>

      {/* Details */}
      <div className={`lg:col-span-5 space-y-4 ${!isEven ? "lg:order-1" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <h3 className="font-heading text-2xl font-bold">
              {project.title}
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="shrink-0 w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <project.icon className="w-6 h-6 text-primary" />
          </div>
        </div>

        {project.highlights?.length ? (
          <motion.ul
            initial={{ opacity: 0, y: 6 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-2"
          >
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-sm text-foreground/75 leading-relaxed">
                  {h}
                </span>
              </li>
            ))}
          </motion.ul>
        ) : null}

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2"
        >
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 bg-secondary/70 border border-border rounded-full text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
