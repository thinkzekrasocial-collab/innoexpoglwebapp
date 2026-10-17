import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import AboutUs from "@/components/sections/AboutUs";
import WhatWeDo from "@/components/sections/WhatWeDo";
import GlobalCompetitions from "@/components/sections/GlobalCompetitions";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import GetInvolved from "@/components/sections/GetInvolved";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import { defaultDescription, siteName, siteUrl } from "@/lib/seo";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/34f688d1-e284-4351-b20f-540fa95d61fc-nobg.png`,
      email: "innoexpomember@gmail.com",
      sameAs: ["https://www.instagram.com/innoexpo.gl", "https://x.com/InnoExpoGL"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
      description: defaultDescription,
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      name: "InnoExpo GL | Student Robotics & STEM in Bangladesh",
      url: siteUrl,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      description: defaultDescription,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        ["What is World Robot Games (WRG 2026)?", "World Robot Games is an international robotics tournament for students and young builders. The 2026 theme is RoboBuild: Engineering Sustainable Cities, where teams build robots to solve games and environmental challenges."],
        ["How do I register my team?", "Register directly on the InnoExpo GL website by submitting the member registration form. The team will follow up by email."],
        ["When and where is the Japan International Round?", "The current event information is listed on the InnoExpo GL website and should be verified with the organizers before planning travel."],
        ["What game categories can I join?", "The current categories include Soccer Robot, Line Following Robot, Innovative Project, and Shoot the Ball."],
        ["Where can I find the official rulebooks?", "Official game rules and participation details should be confirmed with the InnoExpo GL team before joining."],
      ].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <Hero />
      <div className="mx-auto w-full max-w-[1120px] border-x border-[var(--line)] bg-[var(--surface)]">
        <AboutUs />
        <WhatWeDo />
        <GlobalCompetitions />
        <UpcomingEvents />
        <GetInvolved />
        <FAQ />
        <FinalCTA />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}
