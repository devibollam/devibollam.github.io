import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "3+", label: "Projects Completed" },
  { value: "1", label: "Certification" },
  { value: "6+", label: "AI/ML Domains" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-6 md:px-16 lg:px-24 py-16" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 border border-border/30 rounded-lg hover:border-primary/20 transition-colors"
            >
              <p className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground tracking-wider uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
