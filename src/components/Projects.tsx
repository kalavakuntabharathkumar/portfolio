import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github, Figma } from 'lucide-react';

const PROJECTS = [
  {
    title: 'EMP Pro',
    subtitle: 'Enterprise Employee Management System',
    description: 'A comprehensive management platform designed for enterprise scalability.',
    tech: ['React 19', 'TypeScript', 'FastAPI', 'Tailwind CSS 4', 'Radix UI', 'TanStack Query', 'JWT'],
    bullets: [
      'Fully responsive dark-mode UI with design-token theme system',
      'Zod-validated typed API client with robust error boundaries',
      '9 domain routers wired with loading skeletons and error states'
    ],
    github: '#',
    figma: '#'
  },
  {
    title: 'Enterprise OS Dashboard',
    subtitle: 'AI-Powered Business Intelligence',
    description: 'Centralized dashboard for tracking KPIs and gaining actionable AI insights.',
    tech: ['React 19', 'TypeScript', 'FastAPI', 'SQLAlchemy', 'OpenAI API'],
    bullets: [
      '12 modules across 19 routed pages with role-based access control',
      'AI Insights chat assistant powered by OpenAI API',
      'Recharts KPI dashboard with real-time data visualization'
    ],
    github: '#',
    figma: '#'
  }
];

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="space-y-8" aria-labelledby="projects-heading">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 id="projects-heading" className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl mr-2">03.</span>
            Featured Projects
          </h2>
          <div className="h-[1px] bg-border flex-1 max-w-xs ml-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.article 
              key={project.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border p-6 rounded-lg flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:border-primary/50 transition-all duration-150 ease-out"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>
                </div>
                <div className="flex gap-3 text-muted-foreground">
                  <a href={project.github} className="hover:text-primary transition-colors" aria-label={`GitHub repo for ${project.title}`}>
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.figma} className="hover:text-primary transition-colors" aria-label={`Figma design for ${project.title}`}>
                    <Figma className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <ul className="space-y-2 mb-6 mt-4 flex-1">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1 flex-shrink-0">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-mono text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
