import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:devibollam221@gmail.com?subject=Hello from ${formData.name}&body=${formData.message}`;
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-border rounded-md text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
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
              className="px-8 py-3 bg-primary text-primary-foreground font-heading text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
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
              <a href="tel:7093928326" className="flex items-center gap-3 group">
                <div className="p-2 bg-secondary rounded-md group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-foreground/80 group-hover:text-primary transition-colors">
                  +91 7093928326
                </span>
              </a>
            </div>

            <div className="section-divider" />

            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/devibollam" },
                { icon: Linkedin, href: "https://linkedin.com/in/devibollam" },
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
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Lakshmidevi Bollam. Built with conviction.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
