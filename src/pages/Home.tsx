import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';

export function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Contact />
    </main>
  );
}