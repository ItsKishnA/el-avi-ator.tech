const Description = () => {
  const StyledLetter = ({ children }) => (
    <b
      // STYLES OF THE FIRST LETTER
      style={{
        color: "white",
        fontSize: "1.25rem",
        fontWeight: "900",
        fontFamily: "monospace",
      }}
      className="word-spacing-[1em]"
    >
      {children}
    </b>
  );

  return (
    <div className="px-3 rounded-md xl:w-[70%] lg:w-[80%] border-2 border-[#31353b]">
      <p
        className="text-slate-400 font-mono leading-normal select-none py-4 px-1 "
        style={{ wordSpacing: "0.25em" }}
      >
        <StyledLetter>A</StyledLetter>s a <StyledLetter>B</StyledLetter>rilliant{" "}
        <StyledLetter>C</StyledLetter>omputer science{" "}
        <StyledLetter>D</StyledLetter>evotee, <StyledLetter>E</StyledLetter>
        xuding <StyledLetter>F</StyledLetter>ervor for learning, I find joy in{" "}
        <StyledLetter>G</StyledLetter>rasping concepts with ease.{" "}
        <StyledLetter>H</StyledLetter>aving an <StyledLetter>I</StyledLetter>
        nquisitive and <StyledLetter>J</StyledLetter>ovial spirit, I seek{" "}
        <StyledLetter>K</StyledLetter>nowledge relentlessly.{" "}
        <StyledLetter>L</StyledLetter>ifelong learning fuels my{" "}
        <StyledLetter>M</StyledLetter>otivated journey.{" "}
        <StyledLetter>N</StyledLetter>urturing an <StyledLetter>O</StyledLetter>
        ptimistic, <StyledLetter>P</StyledLetter>ositive, and{" "}
        <StyledLetter>Q</StyledLetter>uick-to-adapt mindset, I stand as a{" "}
        <StyledLetter>R</StyledLetter>emarkable <StyledLetter>S</StyledLetter>
        tudent. <StyledLetter>T</StyledLetter>ireless,{" "}
        <StyledLetter>U</StyledLetter>nwavering, and{" "}
        <StyledLetter>V</StyledLetter>ersatile, I <StyledLetter>X</StyledLetter>
        cel in creativity. <StyledLetter>W</StyledLetter>ith a{" "}
        <StyledLetter>Y</StyledLetter>earning for growth, I remain a{" "}
        <StyledLetter>Z</StyledLetter>ealous explorer of knowledge.
      </p>
    </div>
  );
};

export default Description;
