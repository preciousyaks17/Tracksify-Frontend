"use client";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import axios from "axios";
import axiosConfig from "@/config/axios";

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
    <div className=" ">
      <div className="bg-background_foreground min-h-screen mt-[-44] pt-20  ">
        <div className="    w-1/2 mx-auto ">
          <div className="bg-white mt-1 py-5  ">
            <h1 className="text-text_tertiary font-bold font-product-sans pt-3  pl-10 pb-5">
              My projects
            </h1>
            <table className="table-auto w-full border-none pt-10 px-4 py-2 m-4">
              <thead>
                <tr>
                  <th className="  ">Project Name</th>
                  <th className=" ">Start Date</th>
                  <th className="">Due Date</th>
                  <th className=" ">Status</th>
                </tr>
              </thead>
              <tbody>
                {allProjects.map((project: any, index: number) => (
                  <tr key={index} className="hover:bg-gray-200">
                    <td className="px-4 py-2 text-center p-2  m-10">
                      {project.projectName}
                    </td>
                    <td className="px-4 py-2 text-center p-2 m-10">
                      {formatDate(new Date(project.startDate))}
                    </td>
                    <td className="px-4 py-2 text-center p-2 m-10">
                      {formatDate(new Date(project.dueDate))}
                    </td>
                    <td className="px-4 py-2 text-center  p-2 m-10">
                      {getStatus(project.projectStatus)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
