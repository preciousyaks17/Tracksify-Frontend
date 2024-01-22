'use client';
import axiosConfig from "@/config/axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProjectUpdateData = [
  {
    assignee: "hhhhhhh",
    date: "3333333",
    workStartTime: "3333333",
    workEndTime: "4444444",
    workDoneMessage: "loooeeiejhdfjfjfjgjfj",
    role: "employer",
  },
  {
    assignee: "hhhhhhh",
    date: "3333333",
    workStartTime: "3333333",
    workEndTime: "4444444",
    workDoneMessage: "loooeeiejhdfjfjfjgjfj",
    role: "employer",
  },
];

interface ProjectDataProps {
  id?: string;
  dateCreated: string;
  checkIn: string;
  checkOut: string;
  workDone: string;
  role?: string;
}

type projectIdProps = {
  params: {projectId: string}
}

const ProjectUpdate = ({params}: projectIdProps) => {
  const projectId = params?.projectId
   const [allProjectUpdates, setAllProjectUpdates] = useState([]);

  // async function fetchProjectUpdated(projId: string) {
  //   console.log(projectId)


  //  }
   
useEffect(() => {
  // Make axios call here with the endpooint

  axiosConfig.get(`projectUpdate/employee-projectUpdate/project/${projectId}`)
  .then(res => {
    if(res.data?.length > 0){
      setAllProjectUpdates(res.data);
      console.log(res.data)
    }
  }).catch(err => {
    console.log(err);
  })

}, [])    

  return (
    <div className="px-8 py-2 space-y-6">
      <h1 className=" font-bold">Project 1</h1>
      <div className="grid grid-cols-2 gap-10">
        {allProjectUpdates.map((project: ProjectDataProps) => (
          <div key={project.id}>
            <ProjectMessage
              dateCreated={project.dateCreated}
              workDone={project.workDone}
              checkOut={project.checkOut}
              checkIn={project.checkIn}
            />
          </div>
        ))}
      </div>
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
    <div className=" border border-black py-3 px-5 space-y-3">
      <div className="border border-gray-200 px-4 py-2 space-y-2">
        <p className=" text-sm font-semibold">Date</p>
        <h1 className="">{dateCreated}</h1>
      </div>
      <div className="border border-gray-200 px-4 py-2 space-y-2">
        <p className=" text-sm font-semibold">Work Start Time</p>
        <h1>{checkIn}</h1>
      </div>
      <div className="border border-gray-200 px-4 py-2 space-y-2">
        <p className=" text-sm font-semibold">Work End Time</p>
        <h1>{checkOut}</h1>
      </div>
      <div className="border border-gray-200 px-4 py-2 space-y-2">
        <h1 className="font-semibold text-lg">Work Done</h1>
        <p className="">{workDone}</p>
      </div>
    </div>
  );
};

export default ProjectUpdate;
