import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code2, Wrench, Library } from "lucide-react";

const skills = [
  {
    category: "AI / ML Domains",
    icon: Brain,
    items: ["Machine Learning", "Deep Learning", "Natural Language Processing (NLP)", "Computer Vision", "Generative AI", "Agentic AI"],
  },
  {
    category: "Frameworks & Libraries",
    icon: Library,
    items: ["TensorFlow", "PyTorch", "LangChain", "Streamlit", "Hugging Face Transformers", "YOLO", "PyAutoGUI"],
  },
  {
    category: "Programming Languages",
    icon: Code2,
    items: ["Python", "C", "C++", "HTML", "CSS", "SQL"],
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["Git", "Docker", "Jupyter Notebook"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Expertise</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Technical Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="p-6 bg-secondary/50 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                  <group.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-heading text-sm tracking-[0.15em] uppercase text-primary font-medium">
                  {group.category}
                </h3>
              </div>
              <div className="section-divider mb-4" />
              <ul className="space-y-2.5">
                {group.items.map((skill) => (
                  <li key={skill} className="text-foreground/80 text-sm flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary/60 rounded-full shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
