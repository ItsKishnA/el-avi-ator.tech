("use strict");

import loadedData from "../public/data/blockContent.json";

import ReactCurvedText from "react-curved-text";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import CVDownloadButton from "../components/CVDownloadButton";

import { motion } from "framer-motion";

import Description from "./ABCD_Description";

const Tag = ({
  title = "Bullet_content",
  color = "white",
  textColor = "white",
}) => {
  return (
    <div className="flex flex-row mr-1 ">
      <div
        style={{
          backgroundColor: color,
          border: `1px solid ${color}`,
          color: textColor,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
        className="m-2 px-4 rounded-full text-sm font-normal"
      >
        {title}
      </div>

      <span className="relative flex h-3 w-3 translate-y-1 -translate-x-4">
        <span
          style={{ backgroundColor: textColor }}
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
        ></span>
        <span
          style={{ backgroundColor: textColor }}
          className="relative inline-flex rounded-full h-3 w-3"
        ></span>
      </span>
    </div>
  );
};

const Bullets = () => {
  return (
    <div
      style={{
        display: "flex",
        whiteSpace: "nowrap",
        position: "relative",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <Tag
        title="Open to Work"
        color="rgba(244, 114, 182, 0.25)"
        textColor="rgba(244, 114, 182, 1)"
      />
      <Tag
        title="Internship"
        color="rgba(34, 197, 94, 0.25)"
        textColor="rgba(34, 197, 94, 1)"
      />
      <Tag
        title="Online"
        color="rgba(14, 165, 233, 0.25)"
        textColor="rgba(14, 165, 233, 1)"
      />
    </div>
  );
};

const ProfilePic = ({ size = 250 }) => {
  return (
    <img
      src="/images/edited.png"
      alt="Avi's Profile Picture"
      quality={75}
      // width={size}
      // height={size}
      // height={0}
      // width={500}
      className="h-100% aspect-square rounded-full"
    />
  );
};

const Name = () => {
  return (
    <p className="text-4xl text-white font-pixel font-extralight selection:bg-slate-500 select-all pl-1">
      <strong className="text-6xl text-[#e50914]">A</strong>vi{" "}
      <strong className="text-6xl text-[#e50914]">M</strong>
      ahajan
    </p>
  );
};

const Bio = ({ text }) => {
  return <p className="pl-2 font-mono text-2xl">{text}</p>;
};

const Profile = () => {
  return (
    <div className="flex flex-wrap w-full h-full flex-row items-center justify-center p-2 border-[1px] border-neutral-500 border-opacity-80 rounded-xl">
      <div className="w-[50%] max-w-[300px]">
        <ProfilePic />
      </div>
      <div className="flex-1 flex-wrap p-4">
        <Name />
        <Bio text={loadedData.data.profile.bio} />
        <Bullets />
        <p className="leading-relaxed m-1 font-mono text-slate-400">
          {loadedData.data.profile.intro}
        </p>
      </div>
    </div>
  );
};

export default Profile;
