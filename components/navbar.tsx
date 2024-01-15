import Link from "next/link";
import Logo from "./logo";
import React from "react";

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
      link: "/employer-project",
    },
  ],
  employee: [
    {
      name: "Home",
      link: "/employee-dashboard",
    },
    {
      name: "Project",
      link: "/employee-project",
    },
  ],
};

let userRole = "employee";
const navLinks =
  userRole === "employer" ? NavLinks.employer : NavLinks.employee;
const Navbar = () => {
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
            className=" hover:bg-navbar_color    rounded-full px-3 py-3 m-2 hover:text-text_secondary  font-semi-bold  text-text_tertiary hover:text_secondary"
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
            <option value="option1" className=" ">
              Log out{" "}
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
