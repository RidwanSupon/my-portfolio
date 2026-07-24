import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Blog } from '@/components/sections/blog';
import { Certifications } from '@/components/sections/certifications';
import { Contact } from '@/components/sections/contact';
import { Experience } from '@/components/sections/experience';
import { Hero } from '@/components/sections/hero';
import { Process } from '@/components/sections/process';
import { Projects } from '@/components/sections/projects';
import { Services } from '@/components/sections/services';
import { Testimonials } from '@/components/sections/testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Process />
      <Testimonials />
      <Certifications />
      <Blog />
      <Contact />
    </>
  );
}
