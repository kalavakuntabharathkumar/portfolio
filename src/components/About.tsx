import { motion, useReducedMotion } from 'framer-motion';

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="space-y-6" aria-labelledby="about-heading">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 id="about-heading" className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-[1px] bg-border flex-1 max-w-xs ml-4" />
        </div>
        
        <div className="text-muted-foreground text-lg leading-relaxed max-w-3xl space-y-4">
          <p>
            Frontend-focused full-stack developer graduating May 2026 with a B.Tech CSE in AI & Data Science. I specialize in translating complex Figma designs into pixel-perfect, production-ready React components that work flawlessly across all devices.
          </p>
          <p>
            I care deeply about the intersection of design and engineering—believing that great UI isn't just about matching a mockup, but about crafting accessible, responsive, and performant experiences. I ship fast, flag edge-cases early, and build with maintainability in mind.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
