import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HeroSection from './components/HeroSection'
import ContactSection from './components/ContactSection'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <section id="about" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">About</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              I'm a Senior AI/ML Engineer at Capgemini with a passion for building intelligent systems that solve real-world problems. 
              My expertise spans machine learning, deep learning, natural language processing, and large language models.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in developing end-to-end AI solutions, from data preprocessing and model development to deployment and monitoring. 
              My work involves creating innovative applications of AI technologies to drive business value and improve user experiences.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Experience</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">Professional Journey</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-primary/20 pl-8">
              <h3 className="text-xl font-semibold mb-2">Senior AI/ML Engineer</h3>
              <p className="text-primary mb-2">Capgemini</p>
              <p className="text-muted-foreground">
                Leading development of AI and machine learning solutions for enterprise clients. 
                Specializing in natural language processing, computer vision, and predictive analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">Projects</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
              <h3 className="text-lg font-semibold mb-2">AI-Powered Analytics Platform</h3>
              <p className="text-muted-foreground text-sm">
                Developed an end-to-end machine learning platform for predictive analytics and data visualization.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
              <h3 className="text-lg font-semibold mb-2">NLP Chatbot System</h3>
              <p className="text-muted-foreground text-sm">
                Built an intelligent chatbot using advanced natural language processing techniques for customer service.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
              <h3 className="text-lg font-semibold mb-2">Computer Vision Solution</h3>
              <p className="text-muted-foreground text-sm">
                Created a computer vision system for automated quality inspection in manufacturing processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
