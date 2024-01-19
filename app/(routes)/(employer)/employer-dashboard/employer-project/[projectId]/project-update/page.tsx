import React from "react";

const ProjectData = [
  {
    assignee: "hhhhhhh",
    date: "3333333",
    workStartTime: "3333333",
    workEndTime: "4444444",
    workDoneMessage: "loooeeiejhdfjfjfjgjfj",
    role: "employee",
  },
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
  {
    assignee: "hhhhhhh",
    date: "3333333",
    workStartTime: "3333333",
    workEndTime: "4444444",
    workDoneMessage: "loooeeiejhdfjfjfjgjfj",
    role: "employee",
  },
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
  assignee: string;
  date: string;
  workStartTime: string;
  workEndTime: string;
  workDoneMessage: string;
  role?: string;
}

const ProjectUpdate = () => {
  return (
    <div className="px-8 py-2 space-y-6">
      <h1 className=" font-bold">Project 1</h1>
      <div className="grid grid-cols-2 gap-10">
        {ProjectData.map((project: ProjectDataProps) => (
          <div key={project.assignee}>
            <ProjectMessage
              assignee={project.assignee}
              date={project.date}
              workDoneMessage={project.workDoneMessage}
              workEndTime={project.workEndTime}
              workStartTime={project.workStartTime}
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
      <div
        className={`border border-gray-200 px-4 py-2 space-y-2 ${
          role === "employer" && "hidden"
        }`}
      >
        <p className=" text-sm font-semibold">Assignee</p>
        <h1 className="">{assignee}</h1>
      </div>
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
