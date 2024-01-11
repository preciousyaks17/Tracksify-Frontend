"use client";
import Logo from "@/components/logo";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

const ProjectDetails = () => {
  const router = useRouter();
  return (
    <main>
      <div className=" bg-background_foreground h-screen ">
        <div className="">
          <h1 className="text-2xl text-text_tertiary pb-10  pr-22 pt-8 pl-48 font-bold">
            Good Morning Mathilda,
          </h1>
        </div>
        <div className="bg-white m-4  w-3/4 mx-auto">
          <div className=" mx-auto p-4">
            <div
              className=" p-2 hover:bg-slate-300 cursor-pointer border rounded-lg mb-2 flex justify-between items-center"
              onClick={() => {
                router.push("/employer-dashboard/work-hours/1");
              }}
            >
              <span className="p-2 m-2">Task 1</span>
              <span className="status-label  text-green-500 px-2 py-1 rounded">
                Completed
              </span>
            </div>
            <div className=" p-2 border rounded mb-2 flex justify-between items-center">
              <span className="p-2 m-2">Task 2</span>
              <span className="status-label  text-red-500 px-2 py-1 rounded">
                Delay
              </span>
            </div>
            <div className=" p-2 border rounded mb-2 flex justify-between items-center">
              <span className="p-2 m-2">Task 3</span>
              <span className="status-label  text-yellow-500 px-2 py-1 rounded">
                In Progress
              </span>
            </div>
            <div className=" p-2 border rounded mb-2 flex justify-between items-center">
              <span className="p-2 m-2">Task 4</span>
              <span className="status-label  text-green-500 px-2 py-1 rounded">
                Completed
              </span>
            </div>
            <div className=" p-2 border rounded mb-2 flex justify-between items-center">
              <span className="p-2 m-2">Task 5</span>
              <span className="status-label  text-red-500 px-2 py-1 rounded">
                Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
