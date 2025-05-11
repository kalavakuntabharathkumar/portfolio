import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border mt-24 py-12 text-center flex flex-col items-center gap-6">
      <div className="flex justify-center gap-6 text-muted-foreground">
        <a 
          href="mailto:bharathkumarkalavakunta@gmail.com" 
          className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a 
          href="https://github.com/kalavakuntabharathkumar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a 
          href="https://linkedin.com/in/bharathkumarkalavakunta" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
          aria-label="Download Resume"
        >
          <FileText className="w-5 h-5" />
        </a>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground font-mono">
          Designed & Built by Bharath Kumar Kalavakunta
        </p>
        <p className="text-xs text-muted-foreground/60">
          React · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
