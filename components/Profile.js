const Description = () => {
  return (
    <div className="flex px-3">
      <p className="text-gray-300 leading-relaxed">
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

const Profile = () => {
  return (
    <div className="p-5  w-full">
      {/* <h2 className="text-3xl font-bold leading-loose">Profile</h2> */}
      <div className="flex flex-row items-start">
        {/* <div className="max-h-full"> */}
        <img
          src="/images/Myself.jpeg"
          height={300}
          width={300}
          alt="Picture of the author"
          className="rounded-full transform-gpu m-2 border-[#31353b] border-2"
        />
        {/* </div> */}
        <div className="flex-1">
          <p className="px-5 py-3 text-5xl text-white font-pixel font-extralight">
            <b className="text-[#e50914]">A</b>
            vi <strong className="text-[#e50914]">M</strong>
            ahajan
          </p>
          <p className="px-5 font-mono text-2xl">B.Tech CSE MU'25</p>
          <div className="p-4 m-5 rounded-md border-2 border-[#31353b]">
            <Description />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  firstLetter: {
    // color: "#38bdf8",
    color: "white",
    fontSize: "1.25rem",
    // lineHeight: "2rem",
    fontWeight: "900",
  },
};

export default Profile;
