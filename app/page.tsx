import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Awards } from './components/Awards';
import { Contact } from './components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Awards />
      <Contact />
    </>
  );
}
