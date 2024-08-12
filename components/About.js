import Image from "next/image";

const Description = () => {
  return (
    <div className="flex pr-5 flex-col">
      <p className="text-white leading-relaxed m-1">
        I am a dedicated lifelong learner on a mission to master cloud computing
        and explore the latest tech trends. With a deep passion for coding, I
        continually expand my expertise in cloud technology and cutting-edge
        innovations, forging a path towards a tech-savvy future. My journey is
        fueled by a relentless pursuit of knowledge and a commitment to staying
        at the forefront of technological advancements.
      </p>
      <p className="text-white leading-relaxed m-1">
        In addition to cloud computing, I excel as a React developer, crafting
        engaging user interfaces and seamless user experiences. My proficiency
        in Node.js enables me to build robust backend systems that complement my
        frontend projects. Currently, I'm immersed in developing a mobile game
        using JavaScript, a project that showcases my technical prowess and
        dedication to innovation. As I navigate the intricacies of coding and
        cloud computing, I remain steadfast in my quest for excellence, eager to
        embrace new challenges and explore the ever-evolving landscape of
        technology.
      </p>
    </div>
  );
};

const DownloadButton = () => {
  return (
    // <div className="bg-gray-400 p-2 rounded-full px-5 items-center justify-center">

    <div className="flex items-center justify-center rounded-full p-2 px-5">
      <div className="flex flex-row">
        <div className="flex justify-center items-center whitespace-nowrap">
          <a href={"/resume/avi_resume.pdf"} target="_blank" download>
            <h5 className="text-gray-600 bg-white text-xs font-mono font-bold p-2 px-4 pr-8 translate-x-6 rounded-l-2xl">
              Download Resume
            </h5>
          </a>
        </div>
        <a href={"/resume/avi_resume.pdf"} target="_blank" download>
          <div className="rounded-full bg-red-600 animate-pulse-red p-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
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
                  stroke-width="2.136"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                  stroke="#212121"
                  stroke-width="2.136"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </a>
      </div>
    </div>
    // </div>
  );
};

const About = () => {
  return (
    <div
      id="ABOUT"
      style={{ width: "80%" }}
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

        <div className="flex-[1] content-center md:flex[2]">
          <Image
            src="/images/avatar.jpg"
            width={200}
            height={200}
            alt="Picture of the author"
            className="rounded-full transform-gpu w-full ml-0 md:ml-4"
          />
        </div>
      </div>
      <DownloadButton />
    </div>
  );
};

const styles = {
  firstLetter: {
    color: "#e50914",
    fontSize: "1.5rem",
    // lineHeight: "2rem",
    fontWeight: "900",
  },
};

export default About;
