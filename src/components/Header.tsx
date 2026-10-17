"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  ["About", "#about"], ["What we do", "#what-we-do"], ["Competitions", "#competitions"], ["Events", "#events"], ["FAQ", "#faq"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--surface)]/95 backdrop-blur">
    <div className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-4 sm:px-8">
      <Link href="/" aria-label="InnoExpo GL home"><Image src="/34f688d1-e284-4351-b20f-540fa95d61fc-nobg.png" alt="InnoExpo GL logo" width={184} height={48} priority className="h-8 w-auto" /></Link>
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
        {links.map(([label, href]) => <Link key={href} href={href} className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--primary)]">{label}</Link>)}
      </nav>
      <div className="hidden items-center gap-4 sm:flex"><Link href="/contact" className="text-sm text-[var(--muted)] hover:text-[var(--primary)]">Contact</Link><Link href="/register" className="rounded-[var(--radius)] bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0d3c4e]">Register</Link></div>
      <button type="button" className="rounded-md p-2 lg:hidden" aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t border-[var(--line)] px-5 py-4 lg:hidden" aria-label="Mobile navigation">{[...links, ["Contact", "/contact"]].map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-[var(--line)] py-3 text-sm text-[var(--text)]">{label}</Link>)}<Link href="/register" onClick={() => setOpen(false)} className="mt-4 block rounded-[var(--radius)] bg-[var(--primary)] px-4 py-3 text-center text-sm font-semibold text-white">Register</Link></nav>}
  </header>;
}
