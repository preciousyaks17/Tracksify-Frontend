"use client";
import Link from "next/link";
import Logo from "@/components/logo";

import React, { useState } from "react";

const page = () => {
  return (
    <div className="">
      <main className="">
        <div className="bg-color_hover h-screen ">
          <div className="p-4 pl-20">
            <h1 className="text-2xl text-text_tertiary pt-8 pl-40 font-bold">
              Good Morning ,
            </h1>
            <div className="flex justify-end pr-44 pb-4 ">
              <button className="bg-text_secondary text-white hover:text-text_tertiary hover:bg-color_hover rounded px-4 py-2 mt-4">
                Create Project
              </button>
            </div>
            <div className="bg-white h-half w-3/4 mx-auto  ">
              <h1 className="text-text_tertiary font-bold  text-lg  pt-4 pl-6 mt-4">
                Projects LineUp
              </h1>
              <div className="grid grid-cols-4 gap-2 p-2   ">
                <h3 className=" text-text_tertiary font-bold  text-sm p-5">
                  Project Name
                </h3>
                <h3 className="text-text_tertiary font-bold text-sm  p-5">
                  Start Date
                </h3>
                <h3 className=" text-text_tertiary font-bold text-sm p-5">
                  Due Date
                </h3>

                <h3 className="text-text_tertiary font-bold text-sm p-5">
                  Status
                </h3>

                {/* GRID 1 */}
                <Link
                  href="/employer-dashboard/project-details/1"
                  className=" hover:bg-color_hover p-5 cursor-pointer"
                >
                  Project 1
                </Link>

                <p className=" hover:bg-color_hover p-5">Dec 1, 2023</p>
                <p className=" hover:bg-color_hover p-5">Dec 31, 2023</p>
                <select
                  className="p-5"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option value="In Progress" className="text-yellow-500">
                    In Progress
                  </option>
                  <option value="Pending" className="text-red-500">
                    Pending
                  </option>
                  <option
                    value="Completed  "
                    className="text-green-500 border-none"
                  >
                    Completed
                  </option>
                </select>
                {/*GRID 2*/}
                <p className=" p-5">Project 2</p>
                <p className=" p-5">Dec 1, 2023</p>
                <p className=" p-5">Dec 31, 2023</p>
                <select
                  className="p-5"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option value="In Progress" className="text-yellow-500">
                    In Progress
                  </option>
                  <option value="Pending" className="text-red-500">
                    Pending
                  </option>
                  <option
                    value="Completed "
                    className="text-green-500 border-none"
                  >
                    Completed
                  </option>
                </select>
                {/*GRID 2*/}
                <p className=" p-5">Project 3</p>
                <p className=" p-5">Dec 1, 2023</p>
                <p className=" p-5">Dec 31, 2023</p>
                <select
                  className="p-5 text-yellow-500"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option value="In Progress" className="text-yellow-500">
                    In Progress
                  </option>
                  <option value="Pending" className="text-red-500">
                    Pending
                  </option>
                  <option
                    value="Completed "
                    className="text-green-500 border-none"
                  >
                    Completed
                  </option>
                </select>
                {/*GRID 2*/}
                <p className="p-5">Project 4</p>
                <p className=" p-5">Dec 1, 2023</p>
                <p className=" p-5">Dec 31, 2023</p>
                <select
                  className="p-5"
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option value="In Progress" className="text-yellow-500">
                    In Progress
                  </option>
                  <option value="Pending" className="text-red-500">
                    Pending
                  </option>
                  <option
                    value="Completed "
                    className="text-green-500 border-none"
                  >
                    Completed
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
