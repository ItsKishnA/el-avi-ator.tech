import Image from "next/image";

const Certificates = () => {
  return (
    <div className="boxed p-2 flex w-[80vw] max-w-[680px] justify-center flex-col items-center overflow-hidden">
      <Image
        src="/certificates/pm_pmmi.jpg"
        alt="Certificates"
        height={200}
        width={200}
        className="rounded-2xl"
        style={{ objectFit: "contain" }}
        loading="lazy"
        quality={75}
        layout="responsive"
        unoptimized
      />
      {/* <div className="absolute bottom-0 bg-black bg-opacity-80 w-[100%] p-5">
        <p className="font-mono flex-wrap font-bold">
          Project Management Foundations Certification
        </p>
        <p className="font-mono flex-wrap text-gray-300 font-normal">
          LinkedIn Learning
        </p>
      </div> */}
    </div>
  );
};

export default Certificates;
