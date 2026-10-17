import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return <footer className="border-t border-[var(--line)] bg-[var(--surface-muted)]"><div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr]">
    <div><Image src="/34f688d1-e284-4351-b20f-540fa95d61fc-nobg.png" alt="InnoExpo GL logo" width={184} height={48} className="h-8 w-auto" /><p className="mt-5 max-w-sm text-sm leading-6 text-[var(--muted)]">A pupil-led innovation platform for students who want to build, learn, and connect.</p></div>
    <div><h2 className="text-sm font-semibold text-[var(--text)]">Explore</h2><div className="mt-4 grid gap-3 text-sm text-[var(--muted)]"><Link href="#about" className="hover:text-[var(--primary)]">About</Link><Link href="#what-we-do" className="hover:text-[var(--primary)]">What we do</Link><Link href="#events" className="hover:text-[var(--primary)]">Events</Link><Link href="/register" className="hover:text-[var(--primary)]">Register</Link></div></div>
    <div><h2 className="text-sm font-semibold text-[var(--text)]">Connect</h2><div className="mt-4 grid gap-3 text-sm text-[var(--muted)]"><a href="mailto:innoexpomember@gmail.com" className="hover:text-[var(--primary)]">innoexpomember@gmail.com</a><a href="https://www.instagram.com/innoexpo.gl" target="_blank" rel="noopener noreferrer" aria-label="InnoExpo GL on Instagram" className="hover:text-[var(--primary)]">Instagram</a><a href="https://x.com/InnoExpoGL" target="_blank" rel="noopener noreferrer" aria-label="InnoExpo GL on X" className="hover:text-[var(--primary)]">X</a></div></div>
  </div><div className="border-t border-[var(--line)] px-5 py-5 text-center text-xs text-[var(--muted)]">© {new Date().getFullYear()} InnoExpo GL</div></footer>;
}
