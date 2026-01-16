import { ThemeProvider } from '@/app/components/ThemeProvider';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Skills } from '@/app/components/Skills';
import { Projects } from '@/app/components/Projects';
import { Achievements } from '@/app/components/Achievements';
import { Contact } from '@/app/components/Contact';
import { ScrollToTop } from '@/app/components/ScrollToTop';

export default function App() {
  return (
    <ThemeProvider>
      <div className="size-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}