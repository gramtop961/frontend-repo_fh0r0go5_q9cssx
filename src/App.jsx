import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Team from './components/Team';
import CTA from './components/CTA';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Achievements />
        <Team />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Nova Tech Club. All rights reserved.</p>
          <div className="text-xs text-white/50">Designed with a minimalist, futuristic vibe.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
