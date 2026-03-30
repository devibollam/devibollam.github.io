import { motion } from "framer-motion";
const profileImg = "/devibollam.github.io/profile.jpg";
const microsoftBadge = "/devibollam.github.io/microsoft-azure-ai-900.png";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const navItems = ["About", "Experience", "Projects", "Contact"];

const HeroSection = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = useMemo(
    () => [
      { type: 'command', text: ">>> devibollam.profile()" },
      { type: 'output', text: "Loading AI/ML Engineer profile..." },
      { type: 'output', text: "Initializing ML models and architectures..." },
      { type: 'output', text: "Configuring GenAI and agent systems..." },
      { type: 'output', text: "Setting up development environment..." },
      { type: 'success', text: "✓ Profile loaded successfully" },
      { type: 'data', text: "Role: Senior AI/ML Engineer" },
      { type: 'data', text: "Focus: Machine Learning • GenAI • Multi-Agent Systems • RAG" }
    ],
    [],
  );

  const currentLine = terminalLines[currentLineIndex];
  const displayText = currentLine ? currentLine.text.slice(0, currentCharIndex) : "";

  useEffect(() => {
    if (!isTyping || !currentLine) return;

    const typeInterval = setInterval(() => {
      if (currentCharIndex < currentLine.text.length) {
        setCurrentCharIndex((prev) => prev + 1);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          if (currentLineIndex < terminalLines.length - 1) {
            setCurrentLineIndex((prev) => prev + 1);
            setCurrentCharIndex(0);
            setIsTyping(true);
          }
        }, 800);
      }
    }, 24);

    return () => clearInterval(typeInterval);
  }, [currentLine, currentCharIndex, isTyping, currentLineIndex, terminalLines]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/devibollam" },
    { icon: Linkedin, href: "https://linkedin.com/in/devibollam" },
    { icon: () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13.54 12a6.8 6.8 0 01-6.77 7.04 6.8 6.8 0 01-6.77-7.04 6.8 6.8 0 016.77-7.04 6.8 6.8 0 016.77 7.04zm3.73 0a4.23 4.23 0 01-3.38 4.37 4.23 4.23 0 01-3.39-4.37A4.23 4.23 0 0113.89 7.63a4.23 4.23 0 013.38 4.37zm1.95-.62c0 1.97-.42 3.57-.94 3.57s-.94-1.6-.94-3.57.42-3.57.94-3.57.94 1.6.94 3.57z" /></svg>, href: "https://medium.com/@devibollam221" },
  ];

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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 space-y-6"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Building Intelligent</span>
              <br />
              <span className="text-primary">AI Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              AI/ML Engineer specializing in machine learning, deep learning, and large language models.
              Passionate about creating intelligent systems that solve real-world problems.
            </p>

            {/* Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-lg rounded-xl border border-border/30 bg-card/60 backdrop-blur-sm px-5 py-4 shadow-lg"
            >
              <div className="font-mono text-xs space-y-2">
                {terminalLines.map((line, index) => (
                  <div
                    key={index}
                    className={`${
                      line.type === "command"
                        ? "text-primary"
                        : line.type === "success"
                        ? "text-green-400"
                        : line.type === "data"
                        ? "text-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {line.type === "command" && (
                      <span className="text-primary mr-2">❯</span>
                    )}
                    {index === currentLineIndex ? (
                      <span>
                        {displayText}
                        {showCursor && (
                          <span className="inline-block w-[8px] translate-y-[1px] animate-pulse">
                            ▋
                          </span>
                        )}
                      </span>
                    ) : (
                      <span>{line.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

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
                className="flex items-center gap-2 px-3 py-2 bg-card/80 border border-border/50 rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-colors"
              >
                <img
                  src={microsoftBadge}
                  alt="Microsoft Azure AI Fundamentals"
                  className="w-6 h-6"
                />
                <span className="text-xs text-muted-foreground">Azure AI Fundamentals</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex gap-4"
            >
              {socialLinks.map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-border/50 rounded-md hover:border-primary/30 hover:bg-primary/5 transition-colors"
                >
                  <Icon className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-border glow-accent bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Lakshmidevi Bollam"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    console.error('Image failed to load:', profileImg);
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoad={(e) => {
                    console.log('Image loaded successfully:', profileImg);
                    const target = e.currentTarget;
                    console.log('Image dimensions:', target.naturalWidth, 'x', target.naturalHeight);
                  }}
                  style={{
                    display: 'block',
                    minWidth: '100%',
                    minHeight: '100%'
                  }}
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="flex justify-center"
      >
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-heading tracking-wider uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
