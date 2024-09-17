"use client";
import axiosConfig from "@/config/axios";
import useProject from "@/hooks/useProjects";
// import { formatDate, formatTime } from "@/utils/formatDate"; // Corrected import
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Import useRouter

interface ProjectDataProps {
  id?: string;
  dateCreated: string;
  checkIn: string;
  checkOut: string;
  workDone: string;
  role?: string;
}

type projectIdProps = {
  params: { projectId: string };
};

const ProjectUpdate = ({ params }: projectIdProps) => {
  const router = useRouter(); // Use useRouter hook
  const projectId = params?.projectId;
  const { getProjectByProjectIdQuery } = useProject();
  const projectResponse = getProjectByProjectIdQuery(projectId)?.data;

  const [allProjectUpdates, setAllProjectUpdates] = useState([]);

  useEffect(() => {
    if (!router.isReady) return; // Ensure router is ready

    axiosConfig
      .get(`projectUpdate/employee-projectUpdate/project/${projectId}`)
      .then((res) => {
        if (res.data?.length > 0) {
          setAllProjectUpdates(res.data);
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [projectId, router.isReady]); // Added router.isReady to the dependency array

  return (
    <div className="px-8 py-2 space-y-6">
      <h1 className="font-bold capitalize">{projectResponse?.projectName}</h1>
      {/* <div className="grid grid-cols-2 gap-10">
        {allProjectUpdates.map((project: ProjectDataProps) => (
          <div key={project.id}>
            <ProjectMessage
              dateCreated={formatDate(project.dateCreated)} // Corrected function name
              workDone={project.workDone}
              checkOut={formatTime(project.checkOut)}
              checkIn={formatTime(project.checkIn)}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

const ProjectMessage = ({
  dateCreated,
  checkIn,
  checkOut,
  workDone,
  role,
}: ProjectDataProps) => {
  return (
    <div className="border border-black py-3 px-5 space-y-3">
      <div className="border border-gray-200 px-4 py-2 space-y-2">
        <p className="text-sm font-semibold">Date</p>
        <h1>{dateCreated}</h1>
      </div>
      <div className="border border-gray-200 px-4 py-2 space-y-2">
        <p className="text-sm font-semibold">Work Start Time</p>
        <h1>{checkIn}</h1>
      </div>
      <div className="border border-gray-200 px-4 py-2 space-y-2">
        <p className="text-sm font-semibold">Work End Time</p>
        <h1>{checkOut}</h1>
      </div>
      <div className="border border-gray-200 px-4 py-2 space-y-2">
        <h1 className="font-semibold text-lg">Work Done</h1>
        <p>{workDone}</p>
      </div>
    </div>
  );
};

export default ProjectUpdate;
