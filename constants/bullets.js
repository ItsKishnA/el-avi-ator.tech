const Tag = ({
  title = "Tag",
  bgColor = "#BBBBBB33",
  textColor = "white", // "#ccc",
  borderColor = "#CCC5",
  // highlighted = true,
}) => {
  return (
    <div className="flex flex-row mr-1 ">
      <div
        style={{
          backgroundColor: bgColor,
          border: `1px solid ${bgColor}`,
          color: textColor,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
        className="m-2 px-4 rounded-full text-sm font-normal"
      >
        {title}
      </div>
      <span className="relative flex h-3 w-3 translate-y-1 -translate-x-4">
        <span
          style={{ backgroundColor: textColor }}
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
        ></span>
        <span
          style={{ backgroundColor: textColor }}
          className="relative inline-flex rounded-full h-3 w-3"
        ></span>
      </span>
    </div>
  );
};

const Bullets = ({
  title = [],
  bgColor = [],
  textColor = [],
  borderColor = [],
  highlighted = [],
}) => {
  return (
    <div
      style={{
        display: "flex",
        whiteSpace: "nowrap",
        position: "relative",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {title.map((tag, index) => (
        <Tag
          title={tag}
          bgColor={bgColor[index]}
          textColor={textColor[index]}
          borderColor={borderColor[index]}
          // highlighted={
          //   highlighted[index] === "true" || highlighted[index] === true
          // } // Ensure boolean value
          key={index}
        />
      ))}
    </div>
  );
};

export default Bullets;
