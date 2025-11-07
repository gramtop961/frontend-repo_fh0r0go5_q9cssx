import { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.6; // show after passing intro
      setVisible(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border-b border-white/10`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#004aad]/10 border border-[#004aad]/30 text-[#004aad]">
              <Rocket size={18} />
            </span>
            <span className="font-semibold tracking-tight">Nova Tech Club</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#achievements" className="hover:text-white transition">Achievements</a>
            <a href="#team" className="hover:text-white transition">Executive Team</a>
            <a href="#join" className="hover:text-white transition">Join</a>
          </nav>

          <a
            href="#join"
            className="ml-4 inline-flex items-center rounded-md bg-[#004aad] text-white px-3 py-1.5 text-sm font-medium hover:bg-[#004aad]/90 transition"
          >
            Join Us
          </a>
        </div>
      </div>
    </header>
  );
}
