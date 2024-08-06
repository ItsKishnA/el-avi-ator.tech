import Image from "next/image";

const Description = () => {
  return (
    <div className="flex pr-5">
      <p className="text-white leading-relaxed">
        I am a dedicated lifelong learner on a quest to master cloud computing
        and explore the latest tech trends. Embracing the dynamic world of
        coding, I continuously expand my expertise in cloud technology and other
        cutting-edge innovations, forging a unique path towards a tech-savvy
        future. <br />
        <br />
        In addition to my passion for cloud computing, I thrive as a React
        developer, utilizing its powerful capabilities to craft engaging user
        interfaces and seamless experiences. My proficiency extends to Node.js,
        empowering me to build robust backend systems that complement my
        frontend endeavors. Currently, I'm immersed in a thrilling project: the
        development of a mobile game entirely crafted using JavaScript. This
        project not only showcases my technical prowess but also exemplifies my
        dedication to pushing the boundaries of innovation in the tech realm. As
        I navigate through the intricacies of cloud computing and delve into the
        depths of coding, I remain steadfast in my pursuit of excellence, eager
        to uncover new horizons and embrace the ever-evolving landscape of
        technology.
      </p>
    </div>
  );
};

const DownloadButton = () => {
  return (
    <div style={{ backgroundColor: "red" }}>
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
          <h1 className="text-3xl font-bold leading-loose">About Mehhh...</h1>
          <Description />
        </div>

        <div className="flex-[1] content-center md:flex[2]">
          <Image
            src="/images/avatar.jpg"
            width={200}
            height={200}
            alt="Picture of the author"
            className="rounded-full transform-gpu w-full ml-4"
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
