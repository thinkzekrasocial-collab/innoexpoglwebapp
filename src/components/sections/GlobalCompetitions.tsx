"use client";

import React, { useState } from "react";
import { Users, MapPin, Calendar, Building2 } from "lucide-react";
import AppleReveal from "@/components/ui/apple-reveal";

export const GlobalCompetitions = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const segments = [
    {
      id: "soccer-robot",
      name: "Soccer Robot 1x1",
      division: "Open",
      age: "Ages 8–99",
      teamSize: "1 player",
      tag: "Soccer",
      desc: "Play 1-on-1 robot football on a mini walled pitch. Control your robot or make it autonomous and score more goals than your rival.",
    },
    {
      id: "line-robot-junior",
      name: "Line Following Robot — Junior",
      division: "Junior",
      age: "Ages 8–14",
      teamSize: "1 player",
      tag: "Line Following",
      desc: "Build an autonomous robot that follows a black line track with sharp turns and finishes the race in the shortest time.",
    },
    {
      id: "line-robot-senior",
      name: "Line Following Robot — Senior",
      division: "Senior",
      age: "Ages 15–19",
      teamSize: "1 player",
      tag: "Line Following",
      desc: "Fast-speed line following challenge. Tune your light sensors and motor speed to race through difficult curves cleanly.",
    },
    {
      id: "innovative-robot-junior",
      name: "Innovative Project — Junior",
      division: "Junior",
      age: "Ages 8–14",
      teamSize: "1–2 members",
      tag: "RoboBuild",
      desc: "Build an original robot project that solves a city or environment problem. Present your working demo to the judges.",
    },
    {
      id: "innovative-robot-senior",
      name: "Innovative Project — Senior",
      division: "Senior",
      age: "Ages 15–19",
      teamSize: "1–2 members",
      tag: "RoboBuild",
      desc: "Design and build a smart robotics invention for sustainable and green cities. Show your project prototype and live demo.",
    },
    {
      id: "omg-shoot-ball",
      name: "OMG Shoot the Ball — Junior",
      division: "Junior",
      age: "Ages 8–14",
      teamSize: "1 player",
      tag: "Shoot the Ball",
      desc: "A fun one-minute challenge. Your robot must follow the track, pick up ping-pong balls, and shoot them into the goal.",
    },
  ];

  const filteredSegments =
    activeCategory === "All"
      ? segments
      : segments.filter((s) => s.division === activeCategory);

  return (
    <section id="competitions" className="relative z-10 w-full border-t border-zinc-200 bg-[#f0f7ff] text-zinc-900">
      
      {/* Top Header Grid Row */}
      <div className="py-20 sm:py-24 px-6 sm:px-12 max-w-4xl text-left">
        <AppleReveal>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-3">
            Featured Competition · WRG 2026
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif text-zinc-950 tracking-tight leading-[1.15]">
            World Robot Games <br />
            <span className="font-serif italic font-light text-blue-600">Bangladesh round &amp; Japan finals</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-normal mt-4 leading-relaxed">
            InnoExpo GL is part of the World Robot Games journey in Bangladesh, supporting the local round and connecting the event story to the Japan finals. Explore the competition pathway and the role our organization plays in it.
          </p>
        </AppleReveal>
      </div>

      {/* Filter Tabs (Light Theme) */}
      <div className="px-6 sm:px-12 pb-8 flex flex-wrap items-center gap-2">
        <AppleReveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-2">
            {["All", "Junior", "Senior", "Open"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-150 border ${
                  activeCategory === cat
                    ? "bg-zinc-950 text-white border-zinc-950 shadow-xs"
                    : "bg-zinc-100 text-zinc-600 border-zinc-200 hover:text-zinc-950 hover:bg-zinc-200/70"
                }`}
              >
                {cat} Category
              </button>
            ))}
          </div>
        </AppleReveal>
      </div>

      {/* Segments 2x3 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-zinc-200 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200">
        {filteredSegments.map((seg, i) => (
          <div
            key={seg.id}
            className="p-8 sm:p-10 transition-colors duration-200 hover:bg-zinc-50/70 flex flex-col justify-between text-left"
          >
            <AppleReveal delay={(i % 3) * 0.1}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700">
                    {seg.division} · {seg.age}
                  </span>
                  <span className="text-xs text-[var(--primary)] font-semibold">WRG event category</span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif text-zinc-950 mb-2.5">
                  {seg.name}
                </h3>
                <p className="text-xs text-zinc-600 font-normal leading-relaxed mb-6">
                  {seg.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-zinc-500 font-normal">
                  <Users className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{seg.teamSize}</span>
                </span>
                <span className="text-zinc-500 font-medium">Presented through InnoExpo GL</span>
              </div>
            </AppleReveal>
          </div>
        ))}
      </div>

      {/* Road to Japan 4-Stage Banner */}
      <div className="border-t border-zinc-200">
        <div className="p-8 sm:p-12 text-left bg-zinc-50/70">
          <AppleReveal>
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-medium mb-1">
              Road to Japan
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-zinc-950 mb-2">
              Your 4 steps to the world stage
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 font-normal max-w-2xl leading-relaxed mb-8">
              Win in Bangladesh, pack your bags, and take your robot to the World Finals at Chiba Port Arena in Japan (Nov 16–19, 2026).
            </p>
          </AppleReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "1", title: "Discover WRG", desc: "Learn how the Bangladesh round connects to the global event." },
              { num: "2", title: "Build & Test", desc: "Make a robot and prepare for the competition field." },
              { num: "3", title: "Bangladesh Round", desc: "Experience the local stage with the InnoExpo GL community." },
              { num: "4", title: "Japan Finals", desc: "Follow the journey to the World Finals in Japan." },
            ].map((step, sIdx) => (
              <div
                key={sIdx}
                className="rounded-xl border border-zinc-200 bg-white p-5 text-left shadow-xs hover:border-blue-300 transition-colors"
              >
                <AppleReveal delay={sIdx * 0.1}>
                  <div className="text-xs font-mono text-zinc-400 mb-1.5">Step 0{step.num}</div>
                  <div className="text-sm font-serif text-zinc-950 font-medium mb-1">{step.title}</div>
                  <div className="text-xs text-zinc-600 font-normal leading-relaxed">{step.desc}</div>
                </AppleReveal>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Japan Trip Details */}
      <div className="border-t border-zinc-200 grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 items-center bg-[#f0f7ff]">
        <div className="lg:col-span-8 p-8 sm:p-12 text-left">
          <AppleReveal>
            <div className="text-xs text-zinc-500 mb-1">Trip to Japan</div>
            <h4 className="text-xl font-serif text-zinc-950 mb-2">
              More than a tournament — an unforgettable experience.
            </h4>
            <p className="text-xs text-zinc-600 font-normal leading-relaxed">
              Explore Tokyo and Chiba, ride bullet trains, see Japanese robotics labs, and make friends with young builders from around the world.
            </p>
          </AppleReveal>
        </div>
        <div className="lg:col-span-4 p-8 sm:p-12 flex flex-col gap-3 text-xs text-zinc-700">
          <AppleReveal delay={0.15}>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
              <span><strong className="text-zinc-950 font-semibold">Place:</strong> Chiba Port Arena, Japan</span>
            </div>
            <div className="flex items-center gap-2.5 mt-2">
              <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
              <span><strong className="text-zinc-950 font-semibold">Dates:</strong> November 16–19, 2026</span>
            </div>
            <div className="flex items-center gap-2.5 mt-2">
              <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span><strong className="text-zinc-950 font-semibold">Partner:</strong> Tech Autocrats</span>
            </div>
          </AppleReveal>
        </div>
      </div>

    </section>
  );
};

export default GlobalCompetitions;
