"use client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import React from "react";
import { useState } from "react";

import Image from "next/image";
import TechStack from "@/components/TechStack";
import Profile from "@/components/Profile";
import PublicProfile from "@/components/PublicProfile";
import School from "@/components/School";
import Map from "@/components/Map";
import College from "@/components/College";
import MemoGame from "@/components/MemoGame";
import ChatApp from "@/components/ChatApp";
import Certificates from "@/components/Certificates";
import Jee from "@/components/Jee";
import CVDownloadButton from "@/components/CVDownloadButton";
import Release from "@/components/Release";
import useMousePosition from "@/backend/useMousePosition";
// import Contact from "@/components/Contact";

const main = () => {
  // const UnderDevStrip = () => {
  //   return (
  //     <div id="stripContainer">
  //       <div id="strip">
  //         This website is under development. Stay tuned for updates!
  //       </div>
  //     </div>
  //   );
  // };
  const [debugging, setDebugging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDebugger = () => {
    console.log("Debugging is ", !debugging);
    setDebugging((prev) => !prev);
  };

  const { x, y } = useMousePosition();

  return (
    <main
      className=" bg-[#0d1117d0] flex flex-1 h-full w-full items-center content-center justify-center p-2"
      style={{
        cursor: debugging
          ? `url('data:image/svg+xml;utf8,<svg width="16" height="16"><circle cx="8" cy="8" r="8" fill="red"/></svg>') 8 8,auto`
          : "default",
      }}
    >
      {/* <div
        id="noiseCanvas"
        className="fixed top-0 left-0 overflow-hidden w-full h-full pointer-events-none opacity-15 "
        style={{ zIndex: 10 }}
        objectFit="contain"
      >
        <svg viewBox="0 0 400 400">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="5.9"
              numOctaves="5"
              stitchTiles="stitch"
            />
          </filter>

          <rect width="100%" height="100dvh" filter="url(#noiseFilter)" />
        </svg>
      </div> */}

      <div className="flex flex-col items-center content-center rounded-xl overflow-y-scroll no-scrollbar p-2 gap-2 pt-8 pb-4">
        {/* for monitoring  */}
        <SpeedInsights />
        <Analytics />

        {/* <div className="fixed" style={{ zIndex: -5 }}>
          <div className="flex overflow-hidden">
            <img
              src="/images/BG.png"
              className="mx-auto aspect-square w-auto h-auto"
            />
          </div>
        </div> */}

        {/* Content of website */}
        {/* <UnderDevStrip /> */}

        <div>
          <img
            src="./cursor-circle.svg"
            style={{
              position: "absolute",
              zIndex: 1000,
              pointerEvents: "none",
              mixBlendMode: "difference",
              width: isHovered ? "32px" : "16px",
              height: isHovered ? "32px" : "16px",
              // top: `${y - 8}px`,
              top: isHovered ? `${y - 16}px` : `${y - 8}px`,
              // left: `${x - 8}px`,
              left: isHovered ? `${x - 16}px` : `${x - 8}px`,
              transition: "all 0.1s ease",
              cursor: "none",
              cursor: "./icons/cursor.png",
            }}
            className="custom-cursor"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-2">
          <Profile />

          {/* My Contacts */}
          <div className="flex flex-col flex-1 gap-2 justify-center items-center">
            <div className="flex flex-col gap-2 ">
              <CVDownloadButton
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
              <div className="flex flex-row justify-center gap-2">
                <PublicProfile icon="github" />
                <PublicProfile icon="linkedin" />
              </div>
            </div>

            <Map size={250} />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center content-center">
          {/* EDUCATION */}
          <div className="flex flex-[1] flex-col gap-2">
            <div>
              <College />
            </div>
            <div className="flex items-center">
              <Jee />
            </div>
            <div>
              <School />
            </div>
          </div>

          {/* CERTIFICATES*/}
          <div className="flex flex-[1]  items-center justify-center">
            <Certificates />
          </div>
        </div>

        {/* PROJECTS */}
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex-[1] flex">
            <MemoGame />
          </div>
          <div className="flex-[1] flex">
            <ChatApp />
          </div>
        </div>

        {/* Contact */}
        {/* <div>
          <Contact />
        </div> */}

        {/* FOOTER */}
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
          <Release
            debugging={debugging}
            setDebugging={setDebugging}
            handler={handleDebugger}
          />
        </footer>
      </div>
    </main>
  );
};

export default React.memo(main);

// ROBOTS.TXT
// User-agent: *
// Crawl-delay: 10
// Disallow: /resume/
