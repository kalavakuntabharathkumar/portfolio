import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Download, Github, Linkedin, Monitor, Smartphone, Tablet } from 'lucide-react';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [deviceSize, setDeviceSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const sizes: ('mobile' | 'tablet' | 'desktop')[] = ['desktop', 'tablet', 'mobile'];
    let currentIndex = 0;
    
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % sizes.length;
      setDeviceSize(sizes[currentIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const deviceDimensions = {
    mobile: { width: 180, height: 360, radius: 24, padding: 8, innerRadius: 18 },
    tablet: { width: 320, height: 420, radius: 16, padding: 12, innerRadius: 8 },
    desktop: { width: 480, height: 320, radius: 12, padding: 12, innerRadius: 4 }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative w-full flex flex-col md:flex-row items-center gap-12 pt-12 md:pt-24" aria-label="Introduction">
      <motion.div 
        className="flex-1 space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="space-y-4">
          <motion.div variants={itemVariants}>
            <p className="text-primary font-mono text-sm tracking-wider uppercase">Hi, my name is</p>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-foreground">
            Bharath Kumar <br className="hidden md:block" />
            <span className="text-muted-foreground text-4xl md:text-6xl">Kalavakunta.</span>
          </motion.h1>
        </div>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
          Frontend developer who ships pixel-perfect, production-ready UIs from Figma to code.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
          <a 
            href="/resume.pdf" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
          <a 
            href="https://github.com/kalavakuntabharathkumar" 
            className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-6 py-3 rounded font-medium hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only md:not-sr-only md:inline-block">GitHub</span>
          </a>
          <a 
            href="https://linkedin.com/in/bharathkumarkalavakunta" 
            className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-6 py-3 rounded font-medium hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only md:not-sr-only md:inline-block">LinkedIn</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="flex-1 w-full flex justify-center md:justify-end items-center min-h-[420px] relative hidden sm:flex"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        aria-hidden="true"
      >
        <div className="absolute top-0 right-0 flex gap-4 text-muted-foreground/50 mb-8">
          <Smartphone className={`w-5 h-5 transition-colors ${deviceSize === 'mobile' ? 'text-primary' : ''}`} />
          <Tablet className={`w-5 h-5 transition-colors ${deviceSize === 'tablet' ? 'text-primary' : ''}`} />
          <Monitor className={`w-5 h-5 transition-colors ${deviceSize === 'desktop' ? 'text-primary' : ''}`} />
        </div>
        
        <motion.div
          layout
          initial={false}
          animate={{
            width: deviceDimensions[deviceSize].width,
            height: deviceDimensions[deviceSize].height,
            borderRadius: deviceDimensions[deviceSize].radius,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="bg-card border-2 border-border shadow-2xl relative overflow-hidden flex flex-col mt-8"
        >
          {/* Header Bar */}
          <div className="w-full h-8 border-b border-border bg-muted/30 flex items-center px-4 gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-secondary/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
          </div>
          
          {/* Content Area */}
          <div className="flex-1 p-4 flex flex-col gap-3">
            <div className="w-1/3 h-4 bg-muted rounded" />
            
            <div className="flex gap-3 mt-2 h-full">
              {deviceSize !== 'mobile' && (
                <div className="w-1/4 h-full bg-muted/50 rounded flex-shrink-0" />
              )}
              <div className="flex-1 flex flex-col gap-3">
                <div className="w-full h-24 bg-primary/10 border border-primary/20 rounded" />
                <div className="flex gap-2 w-full">
                  <div className="w-1/2 h-16 bg-muted/40 rounded" />
                  <div className="w-1/2 h-16 bg-muted/40 rounded" />
                </div>
                <div className="w-2/3 h-4 bg-muted/60 rounded mt-auto" />
              </div>
            </div>
          </div>
          
          {/* Animated scanning line overlay */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"
            animate={{
              y: ["-100%", "200%"]
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
