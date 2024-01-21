"use client";
import Link from "next/link";
import Logo from "./logo";
import React, { useEffect, useState } from "react";

import { set } from "zod";

const NavLinks = {
  employer: [
    {
      name: "Home",
      link: "/employer-dashboard",
    },
    {
      name: "Employee",
      link: "/list-of-employees",
    },
    {
      name: "Project",
      link: "/employer-dashboard/employer-project",
    },
  ],
  employee: [
    {
      name: "Home",
      link: "/employee-dashboard",
    },
    {
      name: "Project",
      link: "/employee-projects",
    },
  ],
};

const Navbar = () => {
  let [navLinks, setNavlinks] = useState<{ name: string; link: string }[]>([]);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user")!);
    setNavlinks(user.userType === 0 ? NavLinks.employer : NavLinks.employee);
  }, []);

  return (
    <div className="flex items-center justify-between p-4 bg-white">
      <div className="p-4  ">
        <Logo />
      </div>
      <div>
        {navLinks.map((link) => (
          <Link
            href={link.link}
            key={link.name}
            className=" hover:bg-navbar_color border border-blue-200   rounded-full px-3 py-3 m-2 hover:text-text_secondary  font-semi-bold  text-text_tertiary "
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div>
        <div className="border-2  border-gray-200 ">
          <button className="bg-text_secondary p-2 m-2   text-white rounded-full">
            FO
          </button>
          <select className="ml-2 w-4 outline-none ">
            <option value="option1" className=" p-2">
              Log out{" "}
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
