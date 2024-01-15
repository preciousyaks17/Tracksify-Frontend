"use client";
import React from "react";
import Link from "next/link";
import Logo from "@/components/logo";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { DatePicker } from "@/components/datepicker";
import Modal from "@/components/modal";

const Projects = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="">
      <main className="">
        <div className="bg-color_hover h-screen ">
          <div className="p-4 pl-20">
            <div className="bg-white h-half w-3/4 mx-auto pb-10">
              <h1 className="text-text_tertiary font-bold  text-lg  pt-4 pl-6 mt-4">
                All Projects
              </h1>
              <div className="flex space-x-5 justify-between px-5">
                <div></div>
                <div className=" w-[200px] ">
                  <DatePicker
                    label={"Search by dates"}
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                    }
                  />
                </div>
              </div>
              <div className=" h-20 grid grid-cols-2 gap-2 p-1 border-2 border-#D5E2EE rounded-md m-2 mt-11 items-center">
                <Link href="/employer-project/12345/project-update">
                  <p className="  text-text_tertiary text-sm hover:bg-color_hover p-5 cursor-pointer">
                    Project Name
                  </p>
                </Link>
                <p className="text-text_tertiary font-bold text-sm  p-5">
                  <select
                    className="p-3  focus:outline-none"
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
                </p>
              </div>

              <div className=" h-20 grid grid-cols-2 gap-2 p-1 border-2 border-#D5E2EE rounded-md m-2 mt-5 items-center">
                <p className=" text-text_tertiary text-sm p-5">Project Name</p>
                <p className="text-text_tertiary font-bold text-sm  p-5">
                  <select
                    className="p-3  focus:outline-none"
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
                </p>
              </div>

              <div className=" h-20 grid grid-cols-2 gap-2 p-1 border-2 border-#D5E2EE rounded-md m-2 mt-5 items-center">
                <p className=" text-text_tertiary text-sm p-5">Project Name</p>
                <p className="text-text_tertiary font-bold text-sm  p-5">
                  <select
                    className="p-3  focus:outline-none"
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
                </p>
              </div>

              <div className=" h-20 grid grid-cols-2 gap-2 p-1 border-2 border-#D5E2EE rounded-md m-2 mt-5 items-center">
                <p className=" text-text_tertiary text-sm p-5">Project Name</p>
                <p className="text-text_tertiary font-bold text-sm  p-5">
                  <select
                    className="p-3  focus:outline-none"
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
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
