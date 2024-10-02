import Image from "next/image";
import description from "../public/data/description.json";

import stack from "../public/data/techStack.json";

import CVDownloadButton from "./CVDownloadButton";
const Description = () => {
  const paragraphs = description.paragraphs;

  return (
    <div className="flex pr-5 flex-col">
      {paragraphs.map((paragraphs, index) => (
        <p key={index} className="leading-relaxed m-1 font-mono text-slate-400">
          {paragraphs.para}
        </p>
      ))}
    </div>
  );
};

const About = () => {
  const techs = stack.techStack;
  return (
    <div
      id="ABOUT"
      style={{ width: "90%" }}
      className="p-4 flex flex-col flex-1 items-center"
    >
      <div
        // style={{ width: "80%" }}
        className="p-4 flex flex-col-reverse flex-1 md:flex-row items-center"
      >
        <div className=" flex-[2] md:flex-[3]">
          <h1 className="text-2xl font-bold leading-loose">About Mehhh...</h1>
          <Description />
        </div>

        {/* <div className="flex-[1] content-center md:flex[2]">
          <Image
            src="/images/avatar.jpg"
            width={200}
            height={200}
            alt="Picture of the author"
            className="rounded-full transform-gpu w-full ml-0 md:ml-4"
          />
        </div> */}
      </div>

      {/* tech stack i k */}
      <div className="flex flex-col md:flex-[1] items-start content-start">
        <h1 className="text-2xl font-bold leading-loose">Tech Stack</h1>
        <div className=" flex flex-wrap gap-3 p-2">
          {techs.map((tech, id) => (
            <>
              <Image
                src={tech.src}
                key={tech.id}
                width={50}
                height={50}
                alt={tech.name}
                // className="transform-gpu w-full ml-0 md:ml-4"
              />
              {/* <h4>{tech.name}</h4> */}
            </>
          ))}
        </div>
      </div>
      <div className="p-2 m-1 mr-0 flex justify-center flex-col md:flex-row ">
        <CVDownloadButton />
      </div>
    </div>
  );
};

export default About;
