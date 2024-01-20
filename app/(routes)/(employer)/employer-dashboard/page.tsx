"use client";
import Logo from "@/components/logo";
import Link from "next/link";
import Modal from "@/components/modal";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { DatePicker } from "@/components/datepicker";
import MultiSelectDropdown from "@/components/drop-down-menu";

import React from "react";
import router from "next/router";
import axios from "axios";
import axiosConfig from "@/config/axios";

export interface ProjectDetailsDataDTo {
  projectId: string;
  projectName: string;
  projectDescription: string;
  startDate: string;
  dueDate: string;
  status: string;
  projectAssignees: string[];
}

interface Status {
  progress: string;
  done: string;
  pending: string;
}

const ProjectDetailsData = [
  {
    projectId: "",
    projectName: "My name",
    projectDescription: "My name",
    startDate: "23-05-2024",
    dueDate: "23-05-2024",
    status: "",
    projectAssignees: [],
  },
];

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [projectAssignees, setProjectAssignees] = useState<string[]>([]);
  const [projectDescription, setProjectDescription] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [allProjects, setAllProjects] = useState<ProjectDetailsDataDTo[]>([]);

  useEffect(() => {
    // Function to make the API call
    const fetchData = async () => {
      try {
        // Make your API call here
        const response = await axiosConfig.get(
          "user"
        );

        const getAllProjects = await axiosConfig.get(
          "project"
        );

        console.log(response.data)

        setAllProjects(getAllProjects.data);
        setAllUsers(response.data);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    // Call the fetchData function when the component is mounted
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  // Function to handle project creation
  const createProject = async () => {
    try {
      // Make a POST request to your backend endpoint with the project name
      const response = await axios.post(
        "https://tracksify.azurewebsites.net/tracksify/project",
        {
          projectName: projectName,
          startDate: startDate,
          dueDate: dueDate,
          projectDescription: projectDescription,
          projectAssignees: projectAssignees,
          // Add other data you want to send to the server
        }
      );

      // Handle the response from the server (you can log it or show a success message)
      console.log("Project created successfully:", response.data);

      // Optionally, close the modal or reset the form
      setShowModal(false);
      setProjectName("");
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Error creating project:", error);
    }
  };

  return (
    <div className="">
      <main className="">
        <div className="bg-color_hover h-screen ">
          <div className="p-4 pl-20">
            <h1 className="text-2xl text-text_tertiary pt-8 pl-40 font-bold">
              Good Morning ,
            </h1>
            <Fragment>
              <div className="flex justify-end pr-44 pb-4">
                <button
                  className="bg-text_secondary text-white hover:text-text_tertiary hover:bg-color_hover rounded px-4 py-2 mt-4"
                  onClick={() => setShowModal(true)}
                >
                  Create Project
                </button>
              </div>
              <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <div className="flex flex-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-text_tertiary font-bold text-gray-900 dark:text-white">
                    Create Project
                  </h3>
                </div>
                <input
                  type="text"
                  className="border p-2 mb-6  my-8  rounded-md focus:outline-none focus:border-blue-500 w-full"
                  placeholder="Project Name"
                  onChange={(e) => setProjectName(e.target.value)}
                />

                {/* <input
                  type="text"
                  className="border p-2 mb-6  my-2  rounded-md focus:outline-none focus:border-blue-500 w-full"
                  placeholder="Email Address, Separated by comma"
  /> */}
                <div className="flex space-x-5">
                  {" "}
                  <div className="w-full">
                    <DatePicker
                      label={"Start Time"}
                      setDate={() => setDueDate}
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className=" w-5 h-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                          />
                        </svg>
                      }
                    />
                  </div>{" "}
                  <div className="w-full">
                    <DatePicker
                      label={"End Time"}
                      setDate={() => setDueDate}
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className=" w-5 h-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                          />
                        </svg>
                      }
                    />
                  </div>{" "}
                </div>
                <div className="">
                  <MultiSelectDropdown
                    formFieldName={"employee"}
                    options={allUsers.map(
                      (x: any) => x.firstName + " " + x.lastName
                    )}
                    onChange={(selectedEmployerProjectDetails) => {
                      console.debug(
                        "selectedEmployee",
                        selectedEmployerProjectDetails
                      );
                      const selected = selectedEmployerProjectDetails.map((x) =>
                        x.split(" ")
                      );
                      console.log("Selected  USER", selected);
                      const currentUserDetails = selected.map((x) =>
                        allUsers.filter(
                          (y: any) => x[0] == y.firstName && y.lastName == x[1]
                        )
                      );
                      console.log("Current  USER", currentUserDetails);
                      const allSelectedUserId = currentUserDetails.map((x) =>
                        x.map((y: any) => y.userId)
                      );

                      console.log("All User  USER", allSelectedUserId);
                      setProjectAssignees([
                        ...projectAssignees,
                        ...allSelectedUserId[0],
                      ]);
                    }}
                    prompt="Select Employee "
                  />
                </div>

                <div className="mb-6 mt-0">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Project Description
                  </label>
                  <textarea
                    id="message"
                    className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 block w-full"
                    placeholder="Project Details........"
                    onChange={(e) => setProjectDescription(e.target.value)}
                  />
                </div>
                <div className="flex justify-center items-center mt-5">
                  <button
                    onClick={() => createProject()}
                    className="bg-text_secondary text-white hover:text-text_tertiary hover:bg-color_hover rounded px-4 py-2 mt-4 w-full"
                  >
                    Create Project
                  </button>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <button className="border rounded hover:text-text_tertiary  text-text_secondary bg-gray-200 px-4 py-2 mt-4 w-full">
                    Cancel
                  </button>
                </div>
              </Modal>
            </Fragment>
            <div className="bg-white h-half w-3/4 mx-auto ">
            <div className="bg-white h-half ">
              <h1 className="text-text_tertiary font-bold pt-5 pl-10  pb-5 ">Project LineUp</h1>
  <table className="table-auto w-full border-none pt-10">
    <thead>
      <tr>
        <th className=" px-4 py-2  border-none">Project Name</th>
        <th className=" px-4  py-2">Start Date</th>
        <th className=" px-4  py-2">Due Date</th>
        <th className=" px-4  py-2">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className=" px-4 py-2 text-center  "></td>
        <td className=" px-4 py-2 text-center"></td>
        <td className=" px-4 py-2 text-center"></td>
        <td className=" px-4 py-2 text-center"></td>
      </tr>
      {/* Add more <tr> elements here for more rows */}
    </tbody>
  </table>
</div>

              {/*<div className="grid grid-cols-4 gap-2 p-2">
                <div className="col-span-1">
                  <h3 className="text-text_tertiary font-bold text-sm p-5">
                    Project 
                  </h3>
                </div>
                <div className="col-span-1">
                  <h1 className="text-text_tertiary font-bold text-lg pt-4 pl-6 mt-4">
                    Due Project
                  </h1>
                </div>
                <div className="col-span-1">
                  <h3 className="text-text_tertiary font-bold text-sm p-5">
                    Start Date
                  </h3>
                </div>
                <div className="col-span-1">
                  <h3 className="text-text_tertiary font-bold text-sm p-5">
                    Due Date
                  </h3>
                </div>
                <div className="col-span-1">
                  <h3 className="text-text_tertiary font-bold text-sm p-5">
                    Status
                  </h3>
                </div>
                  </div>*/}

              {allProjects.map(
                (projectDetail: ProjectDetailsDataDTo, index) => (
                  <div key={index} className="grid grid-cols-4 gap-2 p-2">
                    <div className="col-span-1">
                      <Link
                        href={`/employer-dashboard/employer-project/1/project-update`}
                      >
                        <p className="hover:bg-color_hover p-5 cursor-pointer">
                          {projectDetail.projectName}
                        </p>
                      </Link>
                    </div>
                    <div className="col-span-1">
                      <p className="hover:bg-color_hover p-5">
                        {projectDetail.startDate}
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="hover:bg-color_hover p-5">
                        {projectDetail.dueDate}
                      </p>
                    </div>
                    <div className="col-span-1">
                      {/*
                    <select
                     
                      className="p-5"
                      onChange={(e) => console.log(e.target.value)}
                    >
                      {Object.entries(projectDetail.status).map(
                        ([key, value]) => (
                          <option
                            key={key}
                            value={key}
                            className={`${
                              projectDetail.status === "Pending"
                                ? "text-red-500"
                                : projectDetail.status === "In progress"
                                ? "text-blue-500"
                                : projectDetail.status === "Complete"
                                ? "text-green-500"
                                : ""
                            }`}
                          >
                            {projectDetail.status}
                          </option>
                        )
                      )}
                          </select>  */}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
