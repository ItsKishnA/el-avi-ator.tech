import Image from "next/image";

const Map = ({ size }) => {
  return (
    <Image
      src="/images/map.png"
      alt="Map"
      width={size}
      height={size}
      className="rounded-2xl boxed"
    />
  );
};

export default Map;
