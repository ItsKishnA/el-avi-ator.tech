"use strict";

import React, { useState, useEffect } from "react";

const Description = () => {
  const StyledLetter = ({ children }) => (
    <b
      // STYLES OF THE FIRST LETTER
      style={{
        color: "white",
        fontSize: "1.25rem",
        fontWeight: "900",
      }}
    >
      {children}
    </b>
  );

  return (
    <div className="flex px-3">
      <p className="text-gray-300 leading-relaxed select-none">
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

const Bullets = () => {
  const Tag = ({ title, color, size = 3, textColor = "white" }) => {
    return (
      <div className="flex flex-row mr-1 ">
        <div
          style={{
            backgroundColor: color,
            border: `1px solid ${color}`,
            color: textColor,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
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
        src="/images/Myself.jpeg"
        // height={size}
        // width={}
        alt="Picture of the author"
        quality={75}
        className="aspect-square h-[80%] w-[80%] rounded-full transform-gpu m-1 border-[#31353b] border-2"
      />
    );
  };

  const Name = () => {
    return (
      <p className="px-5 pt-3 pb-1 text-5xl text-white font-pixel font-extralight selection:bg-slate-500 select-all">
        <b className="text-[#e50914]">A</b>vi{" "}
        <strong className="text-[#e50914]">M</strong>
        ahajan
      </p>
    );
  };

  const Bio = () => {
    return <p className="px-5 font-mono text-2xl">B.Tech CSE MU'25</p>;
  };

  return (
    <div className="p-4 w-full pt-8">
      <div className="flex-1 items-start">
        {/* my pic and headings */}
        <div className="flex flex-wrap flex-row items-center content-center justify-center">
          <div className="sm:w-[50%] flex justify-center lg:max-w-[25vw]">
            <ProfilePic />
          </div>
          <div className="sm:flex-1">
            <Name />
            <Bio />
            <div className="px-4 py-2">
              <Bullets />
            </div>
          </div>
        </div>

        {/* abcd... bio */}
        <div className="p-4 m-5 rounded-md border-2 border-[#31353b]">
          <Description />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

const styles = {
  strip: {
    // backgroundColor: "gray",
    display: "flex",
    // flex: 1,
    // overflow: "hidden",
    whiteSpace: "nowrap",
    // width: "100%",
    position: "relative",
    flexDirection: "row",
    flexWrap: "wrap",
  },
};

export default Profile;
