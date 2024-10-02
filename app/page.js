"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Project from "@/components/Project";
import Profile from "@/components/Profile";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
// import { motion } from "framer-motion";

export default function main() {
  const UnderDevStrip = () => {
    return (
      <div id="stripContainer">
        <div id="strip">
          This website is under development. Stay tuned for updates!
        </div>
      </div>
    );
  };

  return (
    <main className="w-screen h-screen bg-[#0d1117] flex flex-col items-center content-center p-2 xl:rounded-lg xl:h-[98dvh] xl:w-[98dvw]">
      <section className="flex flex-col items-center content-center rounded-xl overflow-y-scroll no-scrollbar p-2">
        {/* for monitoring  */}
        <SpeedInsights />
        <Analytics />

        {/* Content of website */}
        <UnderDevStrip />
        <Profile />
        <About />
        {/* <Project /> */}
        <Contact />
      </section>
      <footer
        className=" text-center text-gray-400 w-[90vw]"
        style={{
          borderTopWidth: "1px",
          borderTopColor: "#444",
          borderTopStyle: "solid",
        }}
      >
        <p>
          © 2024 @el-<strong className="font-pixel text-xl">avi</strong>-ator
        </p>
      </footer>
    </main>
  );
}

// ROBOTS.TXT
// User-agent: *
// Crawl-delay: 10
// Disallow: /resume/
