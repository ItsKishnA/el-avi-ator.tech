import Image from "next/image";

const Certificates = () => {
  return (
    <div className="boxed p-2">
      <Image
        src="/certificates/pm_pmmi.jpg"
        alt="Certificates"
        height={400}
        width={400}
        className="rounded-xl"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default Certificates;
