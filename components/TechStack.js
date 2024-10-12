import Image from "next/image";

import loadedData from "../public/data/blockContent.json";

// import CVDownloadButton from "./CVDownloadButton";

const About = () => {
  return (
    <div className="flex flex-col h-full w-80 items-center boxed p-4">
      <div className="flex flex-col md:flex-[1] items-start content-start gap-2 overflow-hidden animatedSlider">
        <h1 className="text-xl font-bold leading-tight">Tech Stack</h1>
        <div className=" flex flex-row animatedSliderContent gap-[8px]">
          {loadedData.data.techStack.map((tech, id) => (
            <img
              src={tech.src}
              key={id}
              alt={tech.name}
              className="transform-gpu w-[50px] h-[50px]"
            />
          ))}
          {loadedData.data.techStack.map((tech, id) => (
            <img
              src={tech.src}
              key={id}
              alt={tech.name}
              className="transform-gpu w-[50px] h-[50px]"
            />
          ))}
        </div>
      </div>
      {/* <div className="p-2 m-1 mr-0 flex justify-center flex-col md:flex-row ">
        <CVDownloadButton />
      </div> */}
    </div>
  );
};

export default About;
