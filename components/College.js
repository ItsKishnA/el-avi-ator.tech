import Image from "next/image";

const College = () => {
  return (
    <div className="p-4 h-full flex flex-1 flex-col sm:flex-row content-center justify-center boxed gap-4">
      <div className="flex flex-[2] justify-center items-center">
        <img
          src="/images/medicaps.jpg"
          alt="School"
          width={150}
          height={100}
          // layout="responsive"
          className="rounded-2xl opacity-100"
        />
      </div>
      <div className="flex flex-col gap-1 flex-[3] justify-center">
        <h3 className="font-bold text-lg flex flex-wrap ">
          Medi-Caps University
        </h3>
        <div className="flex flex-row justify-between">
          <p className="font-mono tracking-tighter">B.Tech CSE</p>
          <h6 className="text-gray-600 font-mono">2021-2025</h6>
        </div>
        <p className="font-mono font-bold">CGPA: 7.97</p>
      </div>
    </div>
  );
};

export default College;
