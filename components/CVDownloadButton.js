import React, { useRef, useEffect } from "react";

const size = 150;

const CVDownloadButton = () => {
  return (
    <div className="flex items-center justify-center rounded-full p-2 flex-row m-10">
      <a href={"/resume/avi_resume.pdf"} target="_blank" download>
        <div className="relative flex ">
          <div className="rounded-full z-10 bg-red-600 animate-pulse-red p-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  opacity="0.5"
                  d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                  stroke="#212121"
                  strokeWidth="2.136"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                  stroke="#212121"
                  strokeWidth="2.136"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="absolute -z-9 -mx-[4.5rem] -my-[2.25rem] translate-x-[2rem] -translate-y-1">
            <img
              src="/images/HIRE_ME_CIRCLE.png"
              height={size}
              width={size}
              alt="Hire Me"
              //   style={{ transformOrigin: "125px 125px" }}
              className="animate-[spin_14s_linear_infinite] bg-red-200 bg-opacity-0"
            />
          </div>
        </div>
      </a>
      <a href={"/resume/avi_resume.pdf"} target="_blank" download>
        <div className="flex justify-center items-center whitespace-nowrap">
          <h5 className="text-gray-600 bg-white text-sm sm:text-xs font-mono font-bold p-2 pl-8 pr-4 -translate-x-6 rounded-r-2xl">
            Download Resume
          </h5>
        </div>
      </a>
    </div>
  );
};

export default CVDownloadButton;
