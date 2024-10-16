import React from "react";

const MemoGame = () => {
  return (
    <div className="flex flex-1 relative boxed flex-col p-4">
      <div className="flex flex-row gap-2 items-center">
        <div className="flex flex-[2] items-center justify-center">
          <img
            src="https://via.placeholder.com/90x160"
            alt="Memory Game"
            className=" rounded-xl"
            height={213}
            width={120}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-[1] justify-center items-center">
          <img
            src="https://via.placeholder.com/90x160"
            alt="Memory Game"
            className="rounded-xl bg-slate-500 flex flex-1 h-[142px] w-[80px]"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-[2] items-center justify-center">
          <img
            src="https://via.placeholder.com/90x160"
            alt="Memory Game"
            className=" rounded-xl"
            height={213}
            width={120}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-lg">Memory Game</h1>
        <p className="text-gray-400 font-mono">
          A simple memory game built using ReactJS
        </p>
      </div>
    </div>
  );
};

export default MemoGame;