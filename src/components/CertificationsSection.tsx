import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.code}
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="group relative p-8 bg-secondary/50 rounded-lg border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 glow-accent"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-24 h-24 rounded-xl overflow-hidden bg-secondary/80 flex items-center justify-center border border-border/50 group-hover:border-primary/30 transition-colors p-2">
                  <img
                    src={cert.badgeUrl}
                    alt={cert.title}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-sm font-heading tracking-wider uppercase text-primary font-medium">
                        {cert.code}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-heading text-base font-semibold leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary/80 font-medium">{cert.issuer}</p>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
