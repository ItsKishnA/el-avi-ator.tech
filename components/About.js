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
    <div className="bg-red-600 p-2 rounded-full px-5 items-center justify-center">
      <a href={"/resume/avi_resume.pdf"} target="_blank" download>
        <button type="button">Download Resume</button>
      </a>
    </div>
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
