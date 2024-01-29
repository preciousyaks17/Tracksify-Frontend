// Assuming `Icon2` is a custom component
"use client";
import Modal from "@/components/modal";
import axios from "axios";
import formatDate, { formatDatte } from "@/utils/formatDate";
import { Fragment, useEffect, useState } from "react";
import { Icon2 } from "@/components/icon2";
import axiosConfig from "@/config/axios";
import Link from "next/link";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [workStartTime, setWorkStartTime] = useState("");
  const [workEndTime, setWorkEndTime] = useState("");
  const [workDone, setWorkDone] = useState("");
  const [projectId, setProjectId] = useState("");
  const [projects, setProjects] = useState<any>([]);
  let [user, setUser] = useState<any>();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user")!);
    setUser(user);
  }, []);

  interface IFormDate {
    dateString: string;
  }
  function formatDate({ dateString }: IFormDate) {
    const options = { year: "numeric", month: "long", day: "numeric" };

    try {
      // Attempt to parse the date string
      const parsedDate = new Date(dateString);

      // Check if the parsed date is valid
      if (!isNaN(parsedDate.getTime())) {
        const formattedDate = parsedDate.toLocaleDateString("en-US");
        return formattedDate;
      }
    } catch (error) {
      console.error("Error parsing date:", error);
    }

    return "Invalid Date";
  }

  // Function to fetch projects from the backend
  const fetchProjects = async () => {
    try {
      const response = await axiosConfig.get("/project/loggedIn-user-project");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    // Fetch projects when the component mounts
    fetchProjects();
  }, []);

  const postUpdate = async () => {
    try {
      const response = await axiosConfig.post(
        `projectUpdate/employee/${projectId}`,
        {
          checkIn: workStartTime,
          checkOut: workEndTime,
          workDone: workDone,
          projectId: projectId,
          // Add other data you want to send to the server
        }
      );

      // Handle the response from the server (you can log it or show a success message)
      console.log("Check in success:", response.data);
      setShowModal(false);
    } catch (error) {
      console.log(projectId);
      // Handle errors (e.g., show an error message)
      console.error("Error checking in work done:", error);
    }
  };

  return (
    <div className="">
      <main className="">
        <div className="bg-color_hover h-screen ">
          <div className="p-10 pl-20">
            <h1 className="text-2xl text-text_tertiary pt-8 pl-40 font-bold">
              Good Morning, {user?.firstName || ""}
            </h1>
            <table className="shadow-2xl w-full">
              <thead className="text-white bg-gray-400 mt-4">
                <tr>
                  <th className="py-3">Project Name</th>
                  <th className="py-3">Start Date</th>
                  <th className="py-3">Due Date</th>
                  <th className="py-3">Status</th>
                  <th className="py-3">Information</th>
                  <th className="py-3">Action</th>
                </tr>
              </thead>

              {projects.map((project: any, index: number) => (
                <tbody className="text-black-300 text-center" key={index}>
                  <tr className="bg-#ffffff cursor-pointer duration-300">
                    <td className="py-3 px-6">
                      <Link href={`/employee-projects/${project.projectId}`}>
                        {project.projectName}
                      </Link>
                    </td>

                    <td className="py-3 px-6">
                      {formatDatte(project.startDate)}
                    </td>
                    <td className="py-3 px-6">
                      {formatDatte(project.dueDate)}
                    </td>

                    <select
                      className=""
                      onChange={(e) => console.log(e.target.value)}
                    >
                      <option value="In Progress" className="text-yellow-500">
                        In Progress
                      </option>
                      <option value="2" className="text-green-500 border-none">
                        Submitted
                      </option>
                    </select>
                    <td className="py-3 px-6">
                      <Icon2 />
                    </td>
                    <td>
                      <Fragment>
                        <div>
                          <button
                            className="bg-text_secondary text-white hover:text-text_tertiary hover:bg-color_hover rounded px-4 py-2 mt-4"
                            onClick={() => {
                              setProjectId(project.projectId);
                              setShowModal(true);
                            }}
                          >
                            Check in
                          </button>
                        </div>
                        <Modal
                          isVisible={showModal}
                          onClose={() => setShowModal(false)}
                        >
                          <div className="flex flex-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-text_tertiary font-bold text-gray-900 dark:text-white">
                              Check In
                            </h3>
                          </div>
                          <h1 className=" font-normal flex flex-center justify-between p-4  ">
                            Kindly enter your work information
                          </h1>
                          <div>
                            <label
                              htmlFor="Start-Time inputfield"
                              className="flex flex-center justify-between p-4 md:p-5 text-sm font-medium text-gray-700"
                            >
                              Work Start Time
                            </label>
                            <input
                              type="text"
                              className="border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full"
                              placeholder="-- : --"
                              onChange={(e) => setWorkStartTime(e.target.value)}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="Start-Time inputfield"
                              className="flex flex-center justify-between p-4 md:p-5 text-sm font-medium text-gray-700"
                            >
                              Work End Time
                            </label>
                            <input
                              type="text"
                              className="border p-2 rounded-md focus:outline-none focus:border-blue-500 w-full"
                              placeholder="-- : --"
                              onChange={(e) => setWorkEndTime(e.target.value)}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="message"
                              className="flex flex-center justify-between p-4 md:p-5 text-sm font-medium text-gray-700"
                            >
                              Work Done
                            </label>
                            <textarea
                              id="message"
                              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 block w-full"
                              placeholder="Enter work done for today."
                              onChange={(e) => setWorkDone(e.target.value)}
                            />
                          </div>
                          <div className="flex justify-center items-center mt-1">
                            <button
                              onClick={() => postUpdate()}
                              className="bg-text_secondary text-white hover:text-text_tertiary hover:bg-color_hover rounded px-4 py-2 mt-2 w-full"
                            >
                              Submit
                            </button>
                          </div>
                          <div className="flex justify-center items-center mt-1">
                            <button className="border rounded hover:text-text_tertiary  text-text_secondary bg-gray-200 px-4 py-2 mt-2 w-full">
                              Cancel
                            </button>
                          </div>
                        </Modal>
                      </Fragment>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
