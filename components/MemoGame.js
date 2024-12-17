// import React from "react";
import { Typography } from "./Typography";

import Bullets from "@/constants/bullets";

const MemoGame = () => {
  return (
    <div className="flex flex-1 relative boxed flex-col p-4">
      <div className="flex flex-row gap-2 items-center">
        <div className="flex flex-[2] items-center justify-center">
          <img
            // src="https://via.placeholder.com/90x160"
            src="./images/SS_MemoGame.png"
            alt="Memory Game"
            className=" rounded-xl"
            height={213}
            width={120}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-[1] justify-center items-center">
          <img
            // src="https://via.placeholder.com/90x160"
            src="./images/SS_Nav.png"
            alt="Memory Game"
            className="rounded-xl bg-slate-500 flex flex-1 h-[142px] w-[80px]"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-[2] items-center justify-center">
          <img
            // src="https://via.placeholder.com/90x160"
            src="./images/SS_Simon.png"
            alt="Memory Game"
            className=" rounded-xl"
            height={213}
            width={120}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <div className="flex flex-row items-center justify-between">
          <Typography variant="h4" className="text-sky-300 font-bold">
            Memory Game
          </Typography>
          <a href="https://github.com/ItsKishnA/Memo-Game" target="_blank">
            <Typography
              variant="h5"
              className="text-gray-100 underline font-mono"
            >
              Code
            </Typography>
          </a>
        </div>

        <Typography
          variant="body"
          className="text-gray-400 font-mono flex-wrap flex-shrink"
        >
          A simple memory game built using React Native.
        </Typography>

        <Bullets
          title={["React Native", "Expo"]}
          bgColor={["#AE862580"]}
          textColor={["#F7EF8ACC"]}
          borderColor={["#FAF39855"]}
        />
      </div>
    </div>
  );
};

export default MemoGame;
