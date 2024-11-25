const sizes = (variant) => {
  console.log(variant);
  switch (variant) {
    case "nameRed":
      return "text-6xl";
    case "h1":
      return "text-4xl";
    case "h2":
      return "text-3xl";
    case "h3":
      return "text-2xl";
    case "h4":
      return "text-xl";
    case "h5":
      return "text-lg";
    case "h6":
      return "text-md";
    case "p":
      return "text-sm";
    case "small":
      return "text-";
    case "strong":
      return ""; // Add size classes for strong if needed
    default:
      return null;
  }
};

const tags = {
  nameRed: "span",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
  // "body-small": "p",
  small: "span",
  strong: "strong",
};

export const Typography = ({ children, className = "", variant }) => {
  const Tag = tags[variant];
  const sizeClasses = sizes(variant);

  return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};
