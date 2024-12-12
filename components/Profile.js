("use strict");

import { Typography } from "./Typography";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import CVDownloadButton from "../components/CVDownloadButton";

import Description from "./ABCD_Description";

import Bulletss from "@/constants/bullets";
// import Bullets from "@/constants/bullets";

const profile = {
  bio: "B.Tech CSE MU'25",
  intro:
    "I am a React Native Mobile App Developer with strong command over JavaScript.",
};

const _sizeTech = 50;

const _loadedData = [
  {
    id: 1,
    name: "HTML",
    src: "https://skillicons.dev/icons?i=html&theme=dark",
  },
  {
    id: 2,
    name: "CSS",
    src: "https://skillicons.dev/icons?i=css&theme=dark",
  },
  {
    id: 3,
    name: "JavaScript",
    src: "https://skillicons.dev/icons?i=javascript&theme=dark",
  },
  {
    id: 4,
    name: "React Native",
    src: "https://skillicons.dev/icons?i=react&theme=dark",
  },
  {
    id: 5,
    name: "Next.js",
    src: "https://skillicons.dev/icons?i=nextjs&theme=dark",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    src: "https://skillicons.dev/icons?i=tailwindcss&theme=dark",
  },
  // {
  //   id: 7,
  //   name: "Node.js",
  //   src: "https://skillicons.dev/icons?i=nodejs&theme=dark",
  // },
];

const ProfilePic = ({ size = 250 }) => {
  return (
    <Image
      src="/images/edited.png"
      alt="Avi's Profile Picture"
      quality={75}
      width={size}
      height={size}
      layout="responsive"
      loading="eager"
      className="h-100% aspect-square rounded-full hover:scale-105 transform transition-transform duration-300 ease-in-out"
      optimised
    />
  );
};

const Name = () => {
  return (
    <Typography
      variant="h1"
      className=" text-white font-pixel font-extralight selection:bg-slate-500 select-all pl-1"
    >
      <Typography variant="nameRed" className=" text-[#e50914]">
        A
      </Typography>
      vi{" "}
      <Typography variant="nameRed" className=" text-[#e50914]">
        M
      </Typography>
      ahajan
    </Typography>
  );
};

const Bio = ({ text }) => {
  return <p className="pl-2 font-mono text-2xl">{text}</p>;
};

const TechStack = () => {
  return (
    <article className="flex flex-col h-full items-center p-2">
      <div className="flex flex-col md:flex-[1] items-stretch content-start w-full gap-2">
        {/* <h1 className="text-xl font-bold leading-tight">Tech Stack</h1> */}
        <div className=" flex flex-row flex-wrap justify-start gap-3">
          {_loadedData.map((tech, id) => (
            <Image
              src={tech.src}
              key={id}
              alt={tech.name}
              width={_sizeTech}
              height={_sizeTech}
              // className="transform-cpu"
            />
          ))}
        </div>
      </div>
    </article>
  );
};

const Profile = () => {
  return (
    <div className="flex flex-wrap max-w-[85vw] flex-row items-center justify-center p-2 boxed">
      <div className="w-[50%] max-w-[400px] min-w-[250px] flex items-center justify-center">
        <ProfilePic />
      </div>
      <div className="flex-1 flex-wrap p-4">
        <Name />
        <Bio text={profile.bio} />
        <Bulletss
          title={["Open to Work", "Internship"]}
          bgColor={[
            "rgba(244, 114, 182, 0.25)",
            "rgba(34, 197, 94, 0.25)",
            // "rgba(14, 165, 233, 0.25)",
          ]}
          textColor={[
            "rgba(244, 114, 182, 1)",
            "rgba(34, 197, 94, 1)",
            // "rgba(14, 165, 233, 1)",
          ]}
          highlighted={["true", "true", "true"]}
          borderColor={[
            "rgba(244, 114, 182, 0.25)",
            "rgba(34, 197, 94, 0.25)",
            // "rgba(14, 165, 233, 0.25)",
          ]}
        />
        {/* <Bullets /> */}
        <p className="leading-relaxed m-1 font-mono text-slate-400">
          {profile.intro}
        </p>
        <TechStack />
      </div>
    </div>
  );
};

export default Profile;

// const Tag = ({ title = "Tag", color = "white", textColor = "white" }) => {
//   return (
//     <div className="flex flex-row mr-1">
//       <div
//         style={{
//           backgroundColor: color,
//           border: `1px solid ${color}`,
//           color: textColor,
//           overflow: "hidden",
//           textOverflow: "ellipsis",
//           whiteSpace: "nowrap",
//         }}
//         className="m-2 px-4 rounded-full text-sm font-normal"
//       >
//         {title}
//       </div>

//       <span className="relative flex h-3 w-3 translate-y-1 -translate-x-4">
//         <span
//           style={{ backgroundColor: textColor }}
//           className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
//         ></span>
//         <span
//           style={{ backgroundColor: textColor }}
//           className="relative inline-flex rounded-full h-3 w-3"
//         ></span>
//       </span>
//     </div>
//   );
// };

// const Bullets = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         whiteSpace: "nowrap",
//         position: "relative",
//         flexDirection: "row",
//         flexWrap: "wrap",
//       }}
//     >
//       <Tag
//         title="Open to Work"
//         color="rgba(244, 114, 182, 0.25)"
//         textColor="rgba(244, 114, 182, 1)"
//       />
//       <Tag
//         title="Internship"
//         color="rgba(34, 197, 94, 0.25)"
//         textColor="rgba(34, 197, 94, 1)"
//       />
//       <Tag
//         title="Online"
//         color="rgba(14, 165, 233, 0.25)"
//         textColor="rgba(14, 165, 233, 1)"
//       />
//     </div>
//   );
// };
