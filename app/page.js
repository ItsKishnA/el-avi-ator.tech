"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Profile from "@/components/Profile";
import Image from "next/image";
import Link from "next/link";
import React, { useState, StyleSheet } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function main() {
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

  return (
    <main className="w-full h-[100dvh] bg-[#0d1117] flex flex-col items-center content-center">
      <SpeedInsights />
      <Analytics />
      <Profile />
      <About />
      {/* <Projects /> */}
      <Contact />
      <div className="p-1 mb-4">Made by @el-avi-ator</div>
    </main>
  );
}
