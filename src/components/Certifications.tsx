import { motion, useReducedMotion } from 'framer-motion';
import { Award } from 'lucide-react';

const CERTIFICATIONS = [
  { name: 'ML with Python', issuer: 'IBM' },
  { name: 'Intro to AI', issuer: 'Infosys' },
  { name: 'Web Development', issuer: 'Simplilearn' },
  { name: 'SQL & Relational Databases', issuer: 'IBM' }
];

export default function Certifications() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="certifications" className="space-y-8" aria-labelledby="certifications-heading">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 id="certifications-heading" className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl mr-2">05.</span>
            Certifications
          </h2>
          <div className="h-[1px] bg-border flex-1 max-w-xs ml-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div 
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card/50 border border-border p-4 rounded-lg flex items-start gap-3 hover:border-primary/40 transition-colors"
            >
              <Award className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-foreground text-sm leading-snug mb-1">{cert.name}</h3>
                <p className="text-xs font-mono text-muted-foreground">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
