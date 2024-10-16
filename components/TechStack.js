import Image from "next/image";

// import CVDownloadButton from "./CVDownloadButton";

const loadedData = [
  {
    id: 1,
    name: "HTML",
    src: "https://skillicons.dev/icons?i=html&theme=dark",
  },
  {
    id: 2,
    name: "CSS",
    src: "https://skillicons.dev/icons?i=css&theme=dark",
  },
  {
    id: 3,
    name: "JavaScript",
    src: "https://skillicons.dev/icons?i=javascript&theme=dark",
  },
  {
    id: 4,
    name: "React Native",
    src: "https://skillicons.dev/icons?i=react&theme=dark",
  },
  {
    id: 5,
    name: "Next.js",
    src: "https://skillicons.dev/icons?i=nextjs&theme=dark",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    src: "https://skillicons.dev/icons?i=tailwindcss&theme=dark",
  },
  {
    id: 7,
    name: "Node.js",
    src: "https://skillicons.dev/icons?i=nodejs&theme=dark",
  },
];

const About = () => {
  return (
    <div className="flex flex-col h-full items-center boxed p-4">
      <div className="flex flex-col md:flex-[1] items-start content-start gap-2">
        <h1 className="text-xl font-bold leading-tight">Tech Stack</h1>
        <div className=" flex flex-row flex-wrap gap-[8px] justify-center">
          {loadedData.map((tech, id) => (
            <Image
              src={tech.src}
              key={id}
              alt={tech.name}
              width={50}
              height={50}
              className="transform-gpu"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
