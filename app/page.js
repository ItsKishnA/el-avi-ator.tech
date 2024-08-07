"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Profile from "@/components/Profile";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function main() {
  //TODO: Add projects
  const Project = ({ project }) => {
    return (
      <div className="p-5 bg-slate-900">
        <h3 className="text-2xl font-bold text-red-600">{project.name}</h3>
        <div className="flex flex-col ">A react native memo game</div>
      </div>
    );
  };
  const Projects = () => {
    return (
      <div id="PROJECTS" className="p-5">
        <h2 className="text-3xl font-bold leading-loose">Projects</h2>
        <Project project={projects.memo_game} />
      </div>
    );
  };

  // const UnderDevStrip = () => {
  //   return (
  //     <div id="stripContainer">
  //       <div id="strip">
  //         This website is under development. Stay tuned for updates!
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <main className="w-full bg-[#0d1117] flex flex-col items-center content-center rounded-xl">
      <div className="w-full flex flex-col items-center content-center rounded-xl">
        {/* for monitoring  */}
        <SpeedInsights />
        <Analytics />

        {/* Content of website */}
        {/* <UnderDevStrip /> */}
        <Profile />
        <About />
        {/* <Projects /> */}
        <Contact />
      </div>
      <footer className="p-2 text-center text-gray-400">
        <p>
          © 2024 @el-<strong className="font-pixel text-xl">avi</strong>-ator
        </p>
      </footer>
    </main>
  );
}
