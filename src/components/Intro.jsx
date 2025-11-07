import Spline from '@splinetool/react-spline';
import { ChevronsDown } from 'lucide-react';

export default function Intro() {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden bg-white text-[#0a0a0a]">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle radial glow that does not block interaction */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)] bg-[#004aad]/5" />

      {/* centered focus ring to frame the logo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[72vmin] max-w-[78vh] rounded-full border border-[#004aad]/20" />

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 text-[#004aad] flex flex-col items-center gap-2">
        <ChevronsDown className="animate-bounce" />
        <span className="text-xs tracking-wide">Scroll</span>
      </div>
    </section>
  );
}
