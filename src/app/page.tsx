import { Header, Footer } from '@/components/layout';
import { Hero, PlaygroundGrid, About, Contact } from '@/components/sections';
import { DualityToggle } from '@/components/duality';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] transition-colors">
      <main className="mx-auto max-w-[var(--max-width)] px-6 py-16">
        <Header />
        <Hero />
        <PlaygroundGrid />
        <About />
        <Contact />
        <Footer />
      </main>
      <DualityToggle />
    </div>
  );
}
