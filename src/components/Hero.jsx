import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative h-[92vh] min-h-[560px] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Futuristic • Minimal • Interactive
          </div>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
            Uni Tech Club
          </h1>
          <p className="mt-4 text-lg text-white/80">
            We build, ship, and showcase cutting‑edge projects. Explore our achievements and meet the executive team behind the momentum.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#achievements" className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90">See Achievements</a>
            <a href="#join" className="inline-flex items-center rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">Join the Club</a>
          </div>
        </div>
      </div>
    </section>
  );
}
