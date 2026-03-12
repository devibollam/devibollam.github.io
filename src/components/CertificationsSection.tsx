import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    code: "AI-900",
    issuer: "Microsoft",
    description:
      "Demonstrated foundational knowledge of machine learning and AI concepts, along with related Microsoft Azure services.",
    badgeUrl:
      "https://images.credly.com/size/340x340/images/4136ced8-75d5-4afb-8677-571f3d4e4c3a/image.png",
    verifyUrl:
      "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">
            Credentials
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.code}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group p-6 bg-secondary/50 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-secondary flex items-center justify-center border border-border/50 group-hover:border-primary/20 transition-colors">
                  <img
                    src={cert.badgeUrl}
                    alt={cert.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-xs font-heading tracking-wider uppercase text-primary">
                      {cert.code}
                    </span>
                  </div>
                  <h3 className="font-heading text-sm font-semibold leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-foreground/60 leading-relaxed">
                {cert.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
