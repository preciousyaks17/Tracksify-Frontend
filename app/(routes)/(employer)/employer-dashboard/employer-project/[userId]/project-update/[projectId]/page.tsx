"use client";

import useProject from "@/hooks/useProject";
import useUser from "@/hooks/useUser";
import { useParams } from "next/navigation";
import React from "react";

interface ProjectDataProps {
  assignee?: string;
  date: string;
  workStartTime: string;
  workEndTime: string;
  workDoneMessage: string;
  role?: string;
}
const ProjectUpdate = () => {
  const { userId, projectId } = useParams<{
    userId: string;
    projectId: string;
  }>();

  const { GetProjectUpdateForAUserForAProject } = useProject();

  const projectUpdatesQuery = GetProjectUpdateForAUserForAProject(
    userId,
    projectId
  );
  console.log(userId, projectId);

  const { getUserByUserId } = useUser();
  const getUserByUserIdQuery = getUserByUserId(userId);

  return (
    <div className="px-8 py-2 space-y-6">
      {/* <h1 className=" font-bold">{projectUpdatesQuery.data?.}</h1> */}
      <h1 className=" font-bold">{getUserByUserIdQuery.data?.firstName}</h1>

      <div className="grid grid-cols-2 gap-10">
        {projectUpdatesQuery.data?.map((project) => (
          <div key={project.projectId}>
            <ProjectMessage
              // assignee={getUserByUserIdQuery.data?.firstName}
              date={new Date(project.dateCreated).toDateString()}
              workDoneMessage={project.workDone}
              workEndTime={new Date(project.checkOut).toTimeString()}
              workStartTime={new Date(project.checkIn).toTimeString()}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectMessage = ({
  assignee,
  date,
  workStartTime,
  workEndTime,
  workDoneMessage,
  role,
}: ProjectDataProps) => {
  return (
    <div className=" border border-black py-3 px-5 space-y-3">
      {assignee && (
        <div
          className={`border border-gray-200 px-4 py-2 space-y-2 ${
            role === "employer" && "hidden"
          }`}
        >
          <p className=" text-sm font-semibold">Assignee</p>
          <h1 className="">{assignee}</h1>
        </div>
      )}
      <div className="border border-gray-200 px-4 py-2 space-y-2">
        <p className=" text-sm font-semibold">Date</p>
        <h1 className="">{date}</h1>
      </div>
      <div className="border border-gray-200 px-4 py-2 space-y-2">
        <p className=" text-sm font-semibold">Work Start Time</p>
        <h1>{workStartTime}</h1>
      </div>
      <div className="border border-gray-200 px-4 py-2 space-y-2">
        <p className=" text-sm font-semibold">Work End Time</p>
        <h1>{workEndTime}</h1>
      </div>
      <div className="border border-gray-200 px-4 py-2 space-y-2">
        <h1 className="font-semibold text-lg">Work Done</h1>
        <p className="">{workDoneMessage}</p>
      </div>
    </div>
  );
};

export default ProjectUpdate;
