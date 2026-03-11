import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="https://devibollam.github.io/Devi_AIML_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground font-heading text-sm tracking-wide hover:opacity-90 transition-opacity"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border text-foreground font-heading text-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
              >
                Get in Touch
              </a>
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
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 border border-muted-foreground/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-primary/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
