"use client";
import React from "react";
import useProject from "@/hooks/useProject";
import Link from "next/link";
import { useParams } from "next/navigation";

type ProjectIdProps = {
  params: { userId: string };
};

const Projects = () => {
  // Custom hook for handling user-related functionality
  const { userId } = useParams<{ userId: string | string[] }>();
  console.log("userid", userId);
  const { getProjectByUserIdQuery } = useProject();
  const projects = getProjectByUserIdQuery(userId as string).data;
  console.log(projects);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">PROJECTS</h1>
      <div className="flex flex-col flex-wrap">
        {projects?.map((project) => (
          <div
            key={project.projectId}
            className="flex justify-between m-2 p-4 border-2 border-gray-200 rounded-md hover:bg-blue-100"
          >
            <Link
              // href={`/employer-dashboard/employer-project/${project.projectId}/project-update`}
              href={`/employer-dashboard/employer-project/${userId}/project-update/${project.projectId}`}
            >
              <p className="text-gray-700 cursor-pointer">
                {project.projectName}
              </p>
            </Link>

            <select
              name="status"
              id="status"
              className="mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
              <option value="0">Pending</option>
              <option value="1">In Progress</option>
              <option value="2">Submitted</option>
              <option value="3">Completed</option>
              <option value="4">Overdue</option>
            </select>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
