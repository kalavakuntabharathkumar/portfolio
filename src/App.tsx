import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-background selection:bg-primary/20">
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-24 space-y-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
