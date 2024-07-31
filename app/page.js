"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Image from "next/image";
import Link from "next/link";
import React, { useState, StyleSheet } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <SpeedInsights />
      {/* <About /> */}
      {/* <Projects /> */}
      <Contact />
      <div className="p-1 mb-4">Made by @el-avi-ator</div>
    </main>
  );
}
