import { Typography } from "./Typography";

const Jee = () => {
  return (
    <div className="flex flex-1 flex-row w-full justify-between boxed content-center align-middle px-4 gap-4">
      <h2 className="font-mono responsive-text-h2 flex items-center">
        Jee Mains 2021
      </h2>
      <img
        src="./images/nta.jpg"
        alt="Jee"
        className="rounded-full h-[80px] w-[80px] -translate-y-[0px] border-[10px] border-white"
      />
      <div className="flex flex-col justify-center items-end">
        <p className="font-mono text-gray-400 leading-tight">
          <strong className="text-white font-mono mr-1">85.128</strong>
          <span className="max-[350px]:hidden">Percentile</span>
        </p>
        <p className="font-mono text-gray-400 leading-tight">
          <strong className="text-white font-mono mr-1">Qualified</strong>
          <span className="max-[350px]:hidden">for JEE Adv.</span>
        </p>
      </div>
    </div>
  );
};

export default Jee;
