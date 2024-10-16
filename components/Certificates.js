import Image from "next/image";

const Certificates = () => {
  return (
    <div className="boxed p-2 flex justify-center flex-col items-center">
      <Image
        src="/certificates/pm_pmmi.jpg"
        alt="Certificates"
        height={200}
        width={200}
        className="rounded-xl w-[100%] h-[100%] object-cover"
        style={{ objectFit: "contain" }}
        loading="lazy"
      />
      <div className="bg-black -translate-y-[16px] bg-opacity-50 rounded-b-lg px-5 w-[100%] pt-[20px]">
        <p className="font-mono flex-wrap font-bold">
          Project Management Foundations Certification
        </p>
        <p className="font-mono flex-wrap text-gray-600 font-normal">
          LinkedIn Learning
        </p>
      </div>
    </div>
  );
};

export default Certificates;
