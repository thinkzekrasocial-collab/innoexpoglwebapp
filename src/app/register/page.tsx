import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register as an InnoExpo GL Member",
  description: "Register as a member of InnoExpo GL to join a student robotics and STEM innovation community in Bangladesh.",
  alternates: { canonical: "/register" },
};

export default function RegisterPage() {
  return <><Header /><main className="mx-auto grid max-w-[1120px] gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-sm font-semibold text-[var(--primary)]">Join InnoExpo GL</p><h1 className="mt-4 font-[var(--font-heading)] text-5xl leading-tight">Register as a member.</h1><p className="mt-5 text-base leading-7 text-[var(--muted)]">Tell us a little about yourself and how you would like to take part. Our team will follow up by email.</p></div><div className="rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8"><RegistrationForm /></div></main><Footer /></>;
}
