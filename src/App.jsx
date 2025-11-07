import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Team from './components/Team';
import CTA from './components/CTA';

function App() {
  // lock body background to white for blue/white theme
  useEffect(() => {
    document.body.classList.add('bg-white');
    return () => document.body.classList.remove('bg-white');
  }, []);

  return (
    <div className="text-[#0a0a0a] min-h-screen">
      {/* Intro section shows only 3D logo with scroll cue */}
      <Intro />

      {/* Navbar fades in after scrolling; content starts after the fold */}
      <Navbar />
      <main>
        <Hero />
        <Achievements />
        <Team />
        <CTA />
      </main>
      <footer className="border-t border-black/10 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black/60">© {new Date().getFullYear()} Nova Tech Club. All rights reserved.</p>
          <div className="text-xs text-black/50">Designed in blue & white, minimalist and futuristic.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
