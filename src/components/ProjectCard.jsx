import React from "react";

import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ challenge, index }) => {
  return (
    <div className="bg-slate-100 p-5 shadow-lg rounded-md">
      <h2 className="text-indigo-500">
        <span className="text-indigo-300 mr-2">{index}</span>
        {challenge.name}
      </h2>
      <div>
        <img
          src={challenge.image}
          className="rounded-md my-4 md:h-52 w-full"
          alt=""
        />

        <div className="flex justify-between items-center">
          <a className="text-lg flex items-center" href="#">
            <FaGithub className="mr-1" />
            View Challenge
          </a>
          <a
            href="http://github.com/username/repo"
            className="flex items-center text-lg"
          >
            <FaGithub className="mr-1" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
