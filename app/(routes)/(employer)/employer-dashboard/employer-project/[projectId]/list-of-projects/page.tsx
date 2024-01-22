"use client";
 import React from "react";
import useProject from "@/hooks/useProject";
import Link from "next/link";



const Projects = ({ userId }: { userId: string }) => {
  // Custom hook for handling user-related functionality
  const { getProjectQuery } = useProject(userId);
  // Extracting project data from the query resul
  const projects = getProjectQuery?.data;

  return (
    <div className="flex flex-row flex-wrap">
      {projects?.map((project) => (
        <Link
          href={`/employer-dashboard/employer-project/${project.projectId}/project-update`}
          key={project.projectId}
        >
          <div className="m-2 p-4 border-2 border-gray-200 rounded-md hover:bg-blue-100">
            <p className="text-gray-700 cursor-pointer">
              {project.projectName}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;

