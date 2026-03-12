import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import { ArrowDown, Github, Linkedin, Star } from "lucide-react";

const navItems = ["About", "Experience", "Projects", "Contact"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-16 lg:px-24 py-8">
      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap items-center justify-between gap-4"
      >
        <span className="font-heading text-sm tracking-widest uppercase text-muted-foreground">
          Portfolio
        </span>
        <div className="flex gap-6 md:gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-heading text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Main hero content */}
      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full max-w-6xl mx-auto">
          {/* Text */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-4">
                AI / ML Engineer
              </p>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                Lakshmi
                <br />
                <span className="text-gradient">devi</span>
                <br />
                Bollam
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-muted-foreground max-w-md text-base leading-relaxed"
            >
              Building intelligent, data-driven solutions with machine learning,
              deep learning, and large language models.
            </motion.p>

            {/* Microsoft Badge inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center gap-3"
            >
              <a
                href="https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-secondary/80 border border-border/50 rounded-full hover:border-primary/30 transition-colors group"
              >
                <img
                  src="https://images.credly.com/size/340x340/images/4136ced8-75d5-4afb-8677-571f3d4e4c3a/image.png"
                  alt="Microsoft AI-900 Badge"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xs font-heading tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                  Microsoft Certified · AI-900
                </span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="https://devibollam.github.io/Devi_AIML_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground font-heading text-sm tracking-wide hover:opacity-90 transition-opacity rounded-md"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border text-foreground font-heading text-sm tracking-wide hover:border-primary hover:text-primary transition-colors rounded-md"
              >
                Get in Touch
              </a>
              <div className="flex gap-2 ml-2">
                <a
                  href="https://github.com/devibollam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-border/50 rounded-md hover:border-primary/30 hover:bg-primary/5 transition-colors"
                >
                  <Github className="w-4 h-4 text-muted-foreground" />
                </a>
                <a
                  href="https://linkedin.com/in/devibollam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-border/50 rounded-md hover:border-primary/30 hover:bg-primary/5 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-muted-foreground" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-border glow-accent">
                <img
                  src={profileImg}
                  alt="Lakshmidevi Bollam"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20 rounded-full" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-primary/10 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="flex justify-center pb-4"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-10 h-10 border border-muted-foreground/30 rounded-full flex items-center justify-center hover:border-primary/50 transition-colors"
        >
          <ArrowDown className="w-4 h-4 text-primary/60" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
