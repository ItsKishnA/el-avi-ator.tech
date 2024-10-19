import Image from "next/image";

const _size_Hire_Image = 150;

const CVDownloadButton = () => {
  return (
    <div className="flex boxed items-center justify-center rounded-full pl-12 py-12 flex-row w-full">
      <a href={"/resume/avi_resume.pdf"} target="_blank" download>
        <div className="relative flex ">
          <div className="rounded-full z-10 bg-red-600 animate-pulse-red p-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  opacity="0.5"
                  d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                  stroke="#212121"
                  strokeWidth="2.136"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                  stroke="#212121"
                  strokeWidth="2.136"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          {/* 4.405 x   y 2.20 */}
          <div className="absolute -mx-[4.405rem] -my-[2.2rem] opacity-40 translate-x-[1.98rem] -translate-y-1">
            <Image
              src="/images/HIRE_ME_CIRCLE.png"
              height={_size_Hire_Image}
              width={_size_Hire_Image}
              alt="Hire Me"
              loading="eager"
              quality={50}
              className="animate-[spin_15s_linear_infinite]"
            />
          </div>
        </div>
      </a>
      <a href={"/resume/avi_resume.pdf"} target="_blank">
        <div className="flex justify-center content-center items-center whitespace-nowrap flex-row bg-white p-2 pl-8 pr-4 -translate-x-6 gap-2 rounded-r-2xl">
          <h5 className="text-gray-600 text-sm sm:text-xs font-mono font-bold ">
            CV
          </h5>
          <span className="text-gray-600 text-sm sm:text-xs font-mono font-bold max-[350px]:hidden">
            / Resume
          </span>

          <svg
            fill="#000000"
            width="24px"
            height="24px"
            viewBox="0 0 576.00 576.00"
            transform="matrix(-1, 0, 0, 1, 0, 0)"
            className="pt-[2px] bg-slate-300 px-[4px] rounded-lg flex items-center justify-center"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default CVDownloadButton;
