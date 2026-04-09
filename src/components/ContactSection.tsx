import { motion, useInView } from "framer-motion";
import { ChangeEvent, useRef, useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    Name: "",
    _replyto: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="px-6 md:px-16 lg:px-24 py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Connect</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Get in Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-5"
            onSubmit={async (e) => {
              e.preventDefault();
              setSubmitError(null);
              setSubmitState("submitting");

              const formEl = e.currentTarget;
              const endpoint = "https://formspree.io/f/mqegzoyj";
              const formDataToSend = new FormData(formEl);

              try {
                const res = await fetch(endpoint, {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                  },
                  body: formDataToSend,
                });

                if (!res.ok) {
                  const text = await res.text().catch(() => "");
                  throw new Error(text || `Formspree request failed (${res.status})`);
                }

                setSubmitState("success");
                setFormData({ Name: "", _replyto: "", message: "" });
              } catch (err) {
                setSubmitState("error");
                setSubmitError(err instanceof Error ? err.message : "Something went wrong");
              }
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="Name"
                placeholder="Name"
                value={formData.Name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                name="_replyto"
                placeholder="Email"
                value={formData._replyto}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={submitState === "submitting"}
              className="px-8 py-3 bg-primary text-primary-foreground font-heading text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitState === "submitting"
                ? "Sending..."
                : submitState === "success"
                  ? "Sent!"
                  : "Send Message"}
            </button>

            {submitState === "success" ? (
              <p className="text-xs text-foreground/60 leading-relaxed">
                Thanks! Your message has been sent.
              </p>
            ) : submitState === "error" ? (
              <p className="text-xs text-destructive leading-relaxed">
                {submitError || "Failed to send. Please try again."}
              </p>
            ) : null}
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              <a href="mailto:devibollam221@gmail.com" className="flex items-center gap-3 group">
                <div className="p-2 bg-secondary rounded-md group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-foreground/80 group-hover:text-primary transition-colors">
                  devibollam221@gmail.com
                </span>
              </a>
            </div>

            <div className="section-divider" />

            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/devibollam" },
                { icon: Linkedin, href: "https://linkedin.com/in/devibollam" },
                { icon: () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13.54 12a6.8 6.8 0 01-6.77 7.04 6.8 6.8 0 01-6.77-7.04 6.8 6.8 0 016.77-7.04 6.8 6.8 0 016.77 7.04zm3.73 0a4.23 4.23 0 01-3.38 4.37 4.23 4.23 0 01-3.39-4.37A4.23 4.23 0 0113.89 7.63a4.23 4.23 0 013.38 4.37zm1.95-.62c0 1.97-.42 3.57-.94 3.57s-.94-1.6-.94-3.57.42-3.57.94-3.57.94 1.6.94 3.57z" /></svg>, href: "https://medium.com/@devibollam221" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-md border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors"
                >
                  <Icon className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-6xl mx-auto mt-24 pt-8 border-t border-border"
      >
        <div className="flex flex-col items-center space-y-4">
          {/* Creative Animated Signature */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center"
                >
                  <div className="w-3 h-3 bg-white/90 rounded-full"></div>
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-1 -right-1 w-2 h-2 bg-teal-400 rounded-full"
                ></motion.div>
              </div>
              <div className="text-sm font-heading text-muted-foreground">
                <span className="text-teal-400">{"<"}</span>
                <span className="text-foreground">developer</span>
                <span className="text-teal-400">{"/>"}</span>
              </div>
            </div>
          </motion.div>
          
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()}. Built with conviction.
          </p>
          
          {/* Creative Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-xs text-teal-400 text-center font-mono"
          >
            {"// Crafting AI solutions that inspire"}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
