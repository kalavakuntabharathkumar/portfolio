import { motion, useReducedMotion } from 'framer-motion';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    skills: ['React 19', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Radix UI', 'Responsive/Mobile-First Design', 'Figma-to-Code', 'HTML5', 'CSS3', 'Framer Motion', 'CSS Transitions', 'Core Web Vitals (LCP, CLS)']
  },
  {
    title: 'Backend & Full-Stack',
    skills: ['Node.js (Express)', 'FastAPI', 'SQLAlchemy', 'MySQL', 'MongoDB', 'JWT', 'REST API Design']
  },
  {
    title: 'AI Tools',
    skills: ['OpenAI API', 'Prompt Engineering', 'GitHub Copilot']
  },
  {
    title: 'DevOps & Process',
    skills: ['Git', 'GitHub', 'Vercel', 'Render', 'Agile (Scrum)', 'Async Written Documentation']
  }
];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="space-y-6" aria-labelledby="skills-heading">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 id="skills-heading" className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl mr-2">02.</span>
            Technical Arsenal
          </h2>
          <div className="h-[1px] bg-border flex-1 max-w-xs ml-4" />
        </div>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div key={category.title} variants={itemVariants} className="space-y-3">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-card border border-border rounded text-sm font-mono text-secondary hover:border-secondary hover:bg-secondary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
