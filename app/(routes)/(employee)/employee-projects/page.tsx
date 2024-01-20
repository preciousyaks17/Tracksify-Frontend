import { useRouter } from "next/router";
import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [projects, setProjects] = useState<any>([]);
  useEffect(() => {
    fetch("/api/project")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="">
      <div className="bg-background_foreground h-screen">
        <div className="bg-white">
          <h1 className="text-text_tertiary font-bold pt-5 pl-10 pb-5">
            My projects
          </h1>
          <table className="table-auto w-full border-none pt-10">
            <thead>
              <tr>
                <th className="px-2 py-1 border-none">Project Name</th>
                <th className="px-2 py-1">Start Date</th>
                <th className="px-2 py-1">Due Date</th>
                <th className="px-2 py-1">Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-center">
                    {projectUpdate.name}
                  </td>
                  <td className="px-4 py-2 text-center">
                    {projectUpdate.startDate}
                  </td>
                  <td className="px-4 py-2 text-center">
                    {projectUpdate.dueDate}
                  </td>
                  <td className="px-4 py-2 text-center">
                    {projectUpdate.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
