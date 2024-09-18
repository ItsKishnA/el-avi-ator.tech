"use strict";

import Image from "next/image";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

const Description = () => {
  const StyledLetter = ({ children }) => (
    <b
      // STYLES OF THE FIRST LETTER
      style={{
        color: "white",
        fontSize: "1.25rem",
        fontWeight: "900",
        fontFamily: "monospace",
      }}
      className="word-spacing-[1em]"
    >
      {children}
    </b>
  );

  return (
    <div className="px-3 rounded-md xl:w-[70%] lg:w-[80%] border-2 border-[#31353b]">
      <p
        className="text-slate-400 font-mono leading-normal select-none py-4 px-1 "
        style={{ wordSpacing: "0.25em" }}
      >
        <StyledLetter>A</StyledLetter>s a <StyledLetter>B</StyledLetter>rilliant{" "}
        <StyledLetter>C</StyledLetter>omputer science{" "}
        <StyledLetter>D</StyledLetter>evotee, <StyledLetter>E</StyledLetter>
        xuding <StyledLetter>F</StyledLetter>ervor for learning, I find joy in{" "}
        <StyledLetter>G</StyledLetter>rasping concepts with ease.{" "}
        <StyledLetter>H</StyledLetter>aving an <StyledLetter>I</StyledLetter>
        nquisitive and <StyledLetter>J</StyledLetter>ovial spirit, I seek{" "}
        <StyledLetter>K</StyledLetter>nowledge relentlessly.{" "}
        <StyledLetter>L</StyledLetter>ifelong learning fuels my{" "}
        <StyledLetter>M</StyledLetter>otivated journey.{" "}
        <StyledLetter>N</StyledLetter>urturing an <StyledLetter>O</StyledLetter>
        ptimistic, <StyledLetter>P</StyledLetter>ositive, and{" "}
        <StyledLetter>Q</StyledLetter>uick-to-adapt mindset, I stand as a{" "}
        <StyledLetter>R</StyledLetter>emarkable <StyledLetter>S</StyledLetter>
        tudent. <StyledLetter>T</StyledLetter>ireless,{" "}
        <StyledLetter>U</StyledLetter>nwavering, and{" "}
        <StyledLetter>V</StyledLetter>ersatile, I <StyledLetter>X</StyledLetter>
        cel in creativity. <StyledLetter>W</StyledLetter>ith a{" "}
        <StyledLetter>Y</StyledLetter>earning for growth, I remain a{" "}
        <StyledLetter>Z</StyledLetter>ealous explorer of knowledge.
      </p>
    </div>
  );
};

const Tag = ({ title, color, size = 3, textColor = "white" }) => {
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
    <div style={styles.strip}>
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

const Profile = () => {
  const size = 250;

  const ProfilePic = () => {
    return (
      <img
        // src="/images/Myself.jpeg"
        src="/images/edited.png"
        alt="Picture of the author"
        quality={75}
        // width={size}
        // height={size}
        // height={0}
        // width={500}
        className="h-[80%] aspect-square rounded-full transform-cpu hover:scale-110 transition-transform duration-500 ease-in-out"
      />
    );
  };

  const Name = () => {
    return (
      <p className="px-5 pt-3 pb-1 text-4xl text-white font-pixel font-extralight selection:bg-slate-500 select-all">
        <strong className="text-6xl text-[#e50914]">A</strong>vi{" "}
        <strong className="text-6xl text-[#e50914]">M</strong>
        ahajan
      </p>
    );
  };

  const Bio = () => {
    return <p className="px-6 font-mono text-2xl">B.Tech CSE MU'25</p>;
  };

  return (
    <div className="items-start">
      {/* my pic and headings */}
      <div className="flex flex-wrap flex-row items-center content-center justify-center">
        <motion.div
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 1 }}
          className="sm:w-[50%] flex justify-center lg:max-w-[25vw]"
        >
          <ProfilePic />
        </motion.div>
        <motion.div
          className="sm:flex-1"
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 1 }}
        >
          <Name />
          <Bio />
          <div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 1 }}
            className="px-4 py-2"
          >
            <Bullets />
          </div>
        </motion.div>
      </div>

      {/* abcd... bio */}
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 1 }}
        className="p-2 m-1 flex justify-center"
      >
        <Description />
      </motion.div>
    </div>
  );
};

const styles = {
  strip: {
    display: "flex",
    whiteSpace: "nowrap",
    position: "relative",
    flexDirection: "row",
    flexWrap: "wrap",
  },
};

export default Profile;
