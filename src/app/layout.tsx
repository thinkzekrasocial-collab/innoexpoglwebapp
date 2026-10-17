import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/ui/smooth-scroll-provider";
import { defaultDescription, siteName, siteUrl } from "@/lib/seo";

const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const heading = DM_Serif_Display({ subsets: ["latin"], variable: "--font-heading", weight: "400", display: "swap" });

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f7f8fa" };
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "InnoExpo GL | Student Robotics & STEM in Bangladesh", template: "%s | InnoExpo GL" },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  keywords: ["Bangladesh robotics competition", "student robotics competition", "STEM education Bangladesh", "youth robotics", "robotics mentorship", "student innovation projects"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: siteUrl, siteName, title: "InnoExpo GL | Student Robotics & STEM in Bangladesh", description: defaultDescription, images: [{ url: "/34f688d1-e284-4351-b20f-540fa95d61fc-nobg.png", alt: "InnoExpo GL logo" }] },
  twitter: { card: "summary", title: "InnoExpo GL | Student Robotics & STEM in Bangladesh", description: defaultDescription, images: ["/34f688d1-e284-4351-b20f-540fa95d61fc-nobg.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${body.variable} ${heading.variable}`}><body><SmoothScrollProvider>{children}</SmoothScrollProvider></body></html>;
}
