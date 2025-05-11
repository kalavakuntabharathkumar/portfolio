import { motion, useReducedMotion } from 'framer-motion';

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="space-y-8" aria-labelledby="experience-heading">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 id="experience-heading" className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl mr-2">04.</span>
            Where I've Worked
          </h2>
          <div className="h-[1px] bg-border flex-1 max-w-xs ml-4" />
        </div>

        <div className="relative pl-6 md:pl-8 border-l border-border space-y-12">
          <div className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary" />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
              <h3 className="text-xl font-bold text-foreground">
                Frontend Developer Intern <span className="text-primary font-medium text-lg">@ INTERNXPRO</span>
              </h3>
              <span className="text-sm font-mono text-muted-foreground mt-1 sm:mt-0">July – November 2024</span>
            </div>
            
            <p className="text-sm text-secondary font-mono mb-4">Full-Stack Support</p>
            
            <ul className="space-y-3">
              {[
                'Shipped 10+ responsive UI components (HTML/CSS/JS), owned majority of frontend sprint tasks with light backend/MySQL support',
                'Optimized API response handling, improving performance by ~20%',
                'Leveraged GitHub Copilot to accelerate implementation by ~30%',
                'Resolved 15+ cross-stack defects, reducing deployment defects by ~30%',
                'Maintained async written documentation for specs and sprint updates'
              ].map((bullet, i) => (
                <li key={i} className="text-muted-foreground flex items-start gap-3">
                  <span className="text-primary mt-1.5 text-xs flex-shrink-0">▹</span>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
