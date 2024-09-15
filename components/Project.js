import React from "react";
import projectData from "../public/data/projectData.json";

import { motion } from "framer-motion";

const Project = () => {
  const project = projectData.projects;

  return (
    <div id="PROJECTS" className="p-5 flex-1 w-[100dvh] h-[100dvh]">
      <h2 className="text-3xl font-bold leading-loose">Projects</h2>
      {/* {project.map((project, index) => (
        <div key={index} className="p-2 m-1 bg-gray-700">
          <div className="flex flex-row">
            <div>
              <h3 className="text-xl font-bold">{project.name}</h3>

              <div>
                <p className="text-gray-500 font-mono tracking-tighter">
                  {project.description}
                </p>
                <a href={project.github} target="_blank">
                  {project.github}
                </a>
              </div>
            </div>
            <div className="flex flex-row space-x-2 m-2">
              <div className="items-center flex">
                <img
                  src={project.image[0]}
                  alt={project.name}
                  className="rounded-md"
                />
              </div>
              <div className="space-y-2">
                <img
                  src={project.image[1]}
                  alt={project.name}
                  className="rounded-md"
                />
                <img
                  src={project.image[2]}
                  alt={project.name}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      ))} */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 h-[100dvh] bg-gray-700"
      >
        <h3>Memo Game</h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Chat App (Ongoing)</h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3>This Portfolio</h3>
      </motion.div>
    </div>
  );
};

export default Project;
