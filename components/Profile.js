("use strict");

import { Typography } from "./Typography";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import CVDownloadButton from "../components/CVDownloadButton";

import Description from "./ABCD_Description";

import Bullets from "@/constants/bullets";

const profile = {
  bio: "B.Tech CSE MU'25",
  intro:
    "I am a React Native Mobile App Developer with strong command over JavaScript.",
};

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
  // return <p className="pl-2 font-mono text-2xl">{text}</p>;
  return (
    <Typography variant="p" className="pl-2 font-mono text-2xl">
      {text}
    </Typography>
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
        <Bullets
          title={["Open to Work", "Internship", "Online"]}
          bgColor={[
            "rgba(244, 114, 182, 0.25)",
            "rgba(34, 197, 94, 0.25)",
            "rgba(14, 165, 233, 0.25)",
          ]}
          textColor={[
            "rgba(244, 114, 182, 1)",
            "rgba(34, 197, 94, 1)",
            "rgba(14, 165, 233, 1)",
          ]}
          highlighted={["true", "true", "true"]}
          borderColor={[
            "rgba(244, 114, 182, 0.25)",
            "rgba(34, 197, 94, 0.25)",
            "rgba(14, 165, 233, 0.25)",
          ]}
        />
        <p className="leading-relaxed m-1 font-mono text-slate-400">
          {profile.intro}
        </p>
      </div>
    </div>
  );
};

export default Profile;
