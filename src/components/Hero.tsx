import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return <section className="border-b border-[var(--line)] bg-[var(--surface-muted)]">
    <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_.95fr] lg:py-32">
      <div>
        <p className="mb-5 text-sm font-semibold tracking-wide text-[var(--primary)]">InnoExpo GL</p>
        <h1 className="max-w-3xl font-[var(--font-heading)] text-5xl leading-[1.03] tracking-tight text-[var(--text)] sm:text-7xl">Build ideas that can move forward.</h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">A pupil-led innovation platform helping students turn curiosity into practical STEM projects through mentorship, collaboration, and opportunities to share their work.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Link href="/register" className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0d3c4e]">Register <ArrowUpRight className="h-4 w-4" /></Link><Link href="#what-we-do" className="rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] hover:border-[var(--primary)]">See how it works</Link></div>
      </div>
      <div className="relative min-h-[300px] overflow-hidden rounded-[var(--radius)] border border-[var(--line)] bg-[var(--primary)] p-8 text-white sm:min-h-[380px] sm:p-10"><div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[24px] border-[var(--accent)]/80" /><div className="absolute bottom-8 left-8 h-20 w-20 rounded-full border border-white/30" /><div className="relative flex h-full min-h-[244px] flex-col justify-between"><p className="max-w-xs text-sm leading-6 text-white/75">A place for young builders, mentors, schools, and clubs to start a useful conversation.</p><p className="font-[var(--font-heading)] text-4xl leading-tight sm:text-5xl">Make room for the next idea.</p></div></div>
    </div>
  </section>;
}
