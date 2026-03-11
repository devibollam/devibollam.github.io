import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Briefcase } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="px-6 md:px-16 lg:px-24 py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">About</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Who I Am</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-5"
          >
            <p className="text-foreground/80 leading-relaxed">
              Hello! I'm Lakshmidevi, an <span className="text-primary font-medium">AI/ML Engineer</span> passionate
              about building intelligent, data-driven solutions. I have a strong foundation in machine learning and
              deep learning frameworks such as TensorFlow and PyTorch, along with expertise in Python and data
              processing tools.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I've been focused on large language models (LLMs), using them to build smart applications in text
              generation, chatbots, and content creation. I'm excited about the possibilities LLMs bring for
              creating innovative, real-world solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="space-y-4">
              {[
                { icon: Briefcase, label: "Role", value: "AI/ML Engineer at Capgemini" },
                { icon: Mail, label: "Email", value: "devibollam221@gmail.com" },
                { icon: MapPin, label: "Location", value: "Bengaluru, India" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 group">
                  <div className="p-2 bg-secondary rounded-md group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-foreground text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
