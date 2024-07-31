"use client";

import About from "@/component/About";
import Contact from "@/component/Contact";
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
    <main className="min-h-screen flex flex-col flex-1 justify-center items-center">
      <SpeedInsights />
      {/* <About /> */}
      {/* <Projects /> */}
      <Contact />
      <>Made by el-avi-ator</>
    </main>
  );
}
