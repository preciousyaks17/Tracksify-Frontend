"use client";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import axios from "axios";
import axiosConfig from "@/config/axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import getStatus from "@/utils/getStatus";
import formatDate from "@/utils/formatDate";

const Projects = () => {
  const [allProjects, setAllProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await axiosConfig.get("project");
        setAllProjects(projects.data);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    fetchProjects();
  }, []);

  console.log(allProjects);

  return (
    <div className="bg-white   w-3/4 mx-auto p-5">
      <div>
        <h1 className="text-text_secondary font-bold text-lg   pl-2 mt-1">
          My Projects
        </h1>
      </div>

      <div className="grid grid-cols-4 text-center font-bold gap-2   p-2">
        <h1 className="col-span-1 ">Project Name</h1>
        <h1 className="col-span-1 ">Start Date</h1>
        <h1 className="col-span-1 ">Due Date</h1>
        <h1 className="col-span-1 ">Status</h1>
      </div>
      {allProjects.map((project: any, index: number) => (
        <div
          key={index}
          className="grid  hover:bg-gray-200  grid-cols-4 gap-2 p-2"
        >
          <div className="col-span-1 ">
            <Link
              href={`/employer-dashboard/employer-project/1/project-update`}
            >
              <p className=" text-center  cursor-pointer">
                {project.projectName}
              </p>
            </Link>
          </div>
          <div className="col-span-1">
            <Link
              href={`/employer-dashboard/employer-project/1/project-update`}
            >
              <p className="text-center p-2">
                {formatDate(new Date(project.startDate))}
              </p>
            </Link>
          </div>
          <div className=" text-center col-span-1">
            <Link
              href={`/employer-dashboard/employer-project/1/project-update`}
            >
              <p className=" p-2 ">{formatDate(new Date(project.dueDate))}</p>
            </Link>
          </div>
          <div className="col-span-1 text-center">
            <Link
              href={`/employer-dashboard/employer-project/1/project-update`}
            >
              <p className="p-2 ">{getStatus(project.projectStatus)}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
