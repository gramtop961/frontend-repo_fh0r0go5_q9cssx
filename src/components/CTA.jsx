export default function CTA() {
  return (
    <section id="join" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Build with us</h2>
        <p className="mt-3 text-white/70">We run weekly sprints, ship open-source, and mentor new builders. Everyone’s welcome.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90">Apply Now</a>
          <a href="#" className="inline-flex items-center rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">View Calendar</a>
        </div>
        <p className="mt-4 text-xs text-white/50">By applying you agree to our code of conduct.</p>
      </div>
    </section>
  );
}
