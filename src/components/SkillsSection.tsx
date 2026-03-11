import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { category: "AI / ML", items: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Generative AI", "Agentic AI"] },
  { category: "Frameworks", items: ["TensorFlow", "PyTorch", "LangChain", "Streamlit", "Hugging Face"] },
  { category: "Languages", items: ["Python", "HTML", "CSS", "JavaScript", "SQL"] },
  { category: "Tools", items: ["Git", "Docker", "YOLO", "PyAutoGUI", "Jupyter"] },
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
              className="space-y-4"
            >
              <h3 className="font-heading text-sm tracking-[0.2em] uppercase text-primary">
                {group.category}
              </h3>
              <div className="section-divider" />
              <ul className="space-y-2">
                {group.items.map((skill) => (
                  <li key={skill} className="text-foreground/80 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
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
