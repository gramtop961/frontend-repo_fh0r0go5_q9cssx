import { Trophy, Star, Award } from 'lucide-react';

const items = [
  {
    icon: Trophy,
    title: 'Hackathon Champions',
    desc: '1st place at Statewide HackFest 2025 with an AI‑driven safety platform.',
    badge: '2025',
  },
  {
    icon: Star,
    title: 'Open Source Contributors',
    desc: '50+ merged PRs across popular frameworks and developer tools.',
    badge: 'OSS',
  },
  {
    icon: Award,
    title: 'Startup Incubator Finalists',
    desc: 'Selected for the campus accelerator for our robotics control system.',
    badge: 'Top 8',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Achievements</h2>
            <p className="mt-2 text-white/70 max-w-2xl">Highlights from competitions, research, and community impact.</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc, badge }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-emerald-400/40 hover:bg-white/[0.06]">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300 border border-emerald-400/30">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-lg font-medium">{title}</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">{badge}</span>
              </div>
              <p className="mt-4 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
