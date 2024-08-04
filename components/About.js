import Image from "next/image";

const Description = () => {
  return (
    <div className="flex pr-10">
      <p className="text-white leading-relaxed">
        <b style={styles.firstLetter}>A</b>s a{" "}
        <b style={styles.firstLetter}>B</b>
        rilliant <b style={styles.firstLetter}>C</b>
        omputer science <b style={styles.firstLetter}>D</b>
        evotee, <b style={styles.firstLetter}>E</b>
        xuding <b style={styles.firstLetter}>F</b>ervor for learning, I find joy
        in <b style={styles.firstLetter}>G</b>
        rasping concepts with ease. <b style={styles.firstLetter}>H</b>aving an{" "}
        <b style={styles.firstLetter}>I</b>nquisitive and{" "}
        <b style={styles.firstLetter}>J</b>
        ovial spirit, I seek <b style={styles.firstLetter}>K</b>nowledge
        relentlessly. <b style={styles.firstLetter}>L</b>ifelong learning fuels
        my <b style={styles.firstLetter}>M</b>otivated journey.{" "}
        <b style={styles.firstLetter}>N</b>urturing an{" "}
        <b style={styles.firstLetter}>O</b>
        ptimistic, <b style={styles.firstLetter}>P</b>ositive, and{" "}
        <b style={styles.firstLetter}>Q</b>uick-to-adapt mindset, I stand as a{" "}
        <b style={styles.firstLetter}>R</b>emarkable{" "}
        <b style={styles.firstLetter}>S</b>
        tudent. <b style={styles.firstLetter}>T</b>ireless,{" "}
        <b style={styles.firstLetter}>U</b>
        nwavering, and <b style={styles.firstLetter}>V</b>ersatile, I{" "}
        <b style={styles.firstLetter}>X</b>cel in creativity.{" "}
        <b style={styles.firstLetter}>W</b>ith a{" "}
        <b style={styles.firstLetter}>Y</b>
        earning for growth, I remain a <b style={styles.firstLetter}>Z</b>
        ealous explorer of knowledge.
      </p>
    </div>
  );
};

const DownloadButton = () => {
  return (
    <a href={"/resume/resume.pdf"} target="_blank" download={"resume.pdf"}>
      <button type="button">Download Resume</button>
    </a>
  );
};

const About = () => {
  return (
    <div
      id="ABOUT"
      style={{ width: "75%" }}
      className="p-5 flex flex-col-reverse flex-1 md:flex-row items-center"
    >
      <div className=" flex-[2] md:flex-[3]">
        <h1 className="text-3xl font-bold leading-loose">About Mehhh...</h1>
        <Description />
        <DownloadButton />
      </div>

      <div className="flex-[1] content-center md:flex[2]">
        <Image
          src="/images/avatar.jpg"
          width={200}
          height={200}
          alt="Picture of the author"
          className="rounded-full transform-gpu w-full"
        />
      </div>
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
