import { User, Linkedin, Mail } from 'lucide-react';

const team = [
  { name: 'Ava Chen', role: 'President', linkedin: '#', email: 'ava@uniclub.edu' },
  { name: 'Leo Patel', role: 'Vice President', linkedin: '#', email: 'leo@uniclub.edu' },
  { name: 'Mina Hassan', role: 'Head of Engineering', linkedin: '#', email: 'mina@uniclub.edu' },
  { name: 'Jon Park', role: 'Head of Design', linkedin: '#', email: 'jon@uniclub.edu' },
];

export default function Team() {
  return (
    <section id="team" className="relative bg-white text-[#0a0a0a] py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Executive Team</h2>
            <p className="mt-2 text-black/60 max-w-2xl">A small team with a big bias for action.</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article key={m.name} className="group relative overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02] p-6 transition hover:border-[#004aad]/40 hover:bg-black/[0.03]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#004aad]/10 text-[#004aad] border border-[#004aad]/30">
                  <User size={22} />
                </div>
                <div>
                  <h3 className="font-medium">{m.name}</h3>
                  <p className="text-sm text-black/60">{m.role}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-black/70">
                <a href={m.linkedin} className="inline-flex items-center gap-1 hover:text-black transition" aria-label="LinkedIn">
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a href={`mailto:${m.email}`} className="inline-flex items-center gap-1 hover:text-black transition" aria-label="Email">
                  <Mail size={16} />
                  Email
                </a>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#004aad]/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
