import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact InnoExpo GL",
  description: "Contact InnoExpo GL about student robotics, STEM mentorship, school partnerships, and member registration.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <><Header /><main className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 sm:py-28"><p className="text-sm font-semibold text-[var(--primary)]">Contact</p><h1 className="mt-4 max-w-2xl font-[var(--font-heading)] text-5xl leading-tight">Have a question? Start with email.</h1><p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)]">For registration help, mentoring, school partnerships, or volunteering, reach the InnoExpo GL team directly.</p><a className="mt-8 inline-block text-lg font-semibold text-[var(--primary)] underline" href="mailto:innoexpomember@gmail.com">innoexpomember@gmail.com</a></main><Footer /></>;
}
