import React from "react";
import ProjectCard from "./ProjectCard";

import data from "../data.json";
const ProjectsListing = () => {
  const { challenges } = data;
  return (
    <div className="max-w-6xl py-12 min-h-[88vh] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {challenges.map((challenge, i) => (
        <ProjectCard key={challenge.id} index={i+1} challenge={challenge} />
      ))}
    </div>
  );
};

export default ProjectsListing;
