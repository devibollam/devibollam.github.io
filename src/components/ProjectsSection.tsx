import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import foodImg from "@/assets/food-website.png";
import chatbotImg from "@/assets/chatbot.png";
import teamsImg from "@/assets/teams.png";

const projects = [
  {
    title: "Food Website",
    description:
      "Developed a dynamic and user-friendly food menu website showcasing vegetarian and non-vegetarian options with seamless navigation and responsiveness.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: foodImg,
  },
  {
    title: "RAG Knowledge Assistant",
    description:
      "Built a Retrieval-Augmented Generation (RAG) assistant that answers questions using your documents. The system chunks and embeds content into a vector index, retrieves relevant passages, and generates grounded responses with clear citations.",
    tech: ["RAG", "LangChain", "Vector DB", "Embeddings", "Streamlit"],
    image: chatbotImg,
  },
  {
    title: "Teams Automation",
    description:
      "Created a Python script leveraging YOLO object detection and PyAutoGUI to automate interactions within Microsoft Teams — opening, detecting, clicking, and entering text.",
    tech: ["Python", "YOLO", "PyAutoGUI"],
    image: teamsImg,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Selected Projects</h2>
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
  project: (typeof projects)[0];
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
      {/* Image */}
      <div className={`lg:col-span-7 ${!isEven ? "lg:order-2" : ""}`}>
        <div className="relative group overflow-hidden rounded-lg border border-border/50">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <ExternalLink className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className={`lg:col-span-5 space-y-4 ${!isEven ? "lg:order-1" : ""}`}>
        <h3 className="font-heading text-2xl font-bold">{project.title}</h3>
        <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2"
        >
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 bg-secondary border border-border rounded-full text-muted-foreground"
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
