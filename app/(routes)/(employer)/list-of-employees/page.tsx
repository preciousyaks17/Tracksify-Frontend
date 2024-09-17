"use client";
import { Icon } from "@/components/icon";
import { useRouter } from "next/navigation";
import Modal from "@/components/modal";
import React, { useState, Fragment } from "react";
import { handleClientScriptLoad } from "next/script";
import Dropdown from "@/components/drop-down-menu";
import MultiSelectDropdown from "@/components/drop-down-menu";
import useEmployees from "@/hooks/useEmployees";
import Loader from "@/components/loader";

const Employee = () => {
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter();
  const { getEmployeesQuery, createUser } = useEmployees();

  return (
    <Fragment>
      <div className="bg-background_foreground h-screen">
        <div className="flex justify-end pr-56 pb-4 pt-10">
          {/*<button
            className="bg-text_secondary text-white hover:text-text_secondary  hover:bg-color_hover rounded px-4 py-2 mt-4"
            onClick={() => setShowModal(true)}
          >
            Add Employee
  </button>*/}

          <div className="flex justify-end pr-56 pb-4 pt-10 ">
            <button
              className="bg-text_secondary text-white hover:text-text_secondary  hover:bg-color_hover rounded px-4 py-2 mt-4"
              onClick={(e) => {
                e.preventDefault();
                router.push("/list-of-employees/add-employees");
              }}
            >
              Add Employee
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div
              className={`${
                !getEmployeesQuery.isLoading ? "bg-white" : null
              } w-3/4 h-full`}
            >
              {getEmployeesQuery.isLoading ? (
                <Loader />
              ) : (getEmployeesQuery?.data?.length ?? 0) < 1 ? (
                <div>
                  <h1 className="font-bold pt-4 pl-5 pb-4"></h1>
                  <div className="flex justify-center">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-center text-text_tertiary">
                      No employee has been added yet
                    </p>
                    <div className="flex justify-center pb-20 pt-10">
                      <button
                        className="border rounded-md hover:text-text_tertiary text-center text-text_secondary bg-gray-200 px-4 py-2"
                        onClick={() => setShowModal(true)}
                      >
                        Add Employee
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Email Address</th>
                        <th className="py-3 px-6 text-left">Role</th>
                      </tr>
                    </thead>
                    {getEmployeesQuery.data?.map((user) => (
                      <tbody key={user.userId}>
                        <tr className="text-gray-700 text-lg font-light border-b border-gray-200 hover:bg-gray-100">
                          <td className="py-3 px-6 text-left">
                            {user.firstName + " " + user.lastName}{" "}
                          </td>
                          <td className="py-3 px-6 text-left">{user.email}</td>
                          <td className="py-3 px-6 text-left"> {user.role}</td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              )}
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
              <div className="p-6  w-full">
                <h1 className="text-xl font-semibold mb-5 ">Add Employee</h1>
                <form
                  className="w-full "
                  onSubmit={(ee) => {
                    ee.preventDefault();
                    console.log(ee);
                  }}
                >
                  <div className="flex justify-between gap-4">
                    <div className="w-full ">
                      <input
                        className="border outline-none rounded-md w-full p-2 m-2"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="w-full">
                      <input
                        className="border outline-none rounded-md w-full p-2 m-2"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      className="border outline-none rounded-md w-full p-2 m-2"
                      type="text"
                      placeholder="Email Address"
                    />
                  </div>

                  <div>
                    <input
                      className="border outline-none rounded-md w-full p-2 m-2"
                      type="text"
                      placeholder="Role"
                    />
                  </div>
                  <div>
                    <label className="text-text_tertiary"> </label>
                    <input
                      className="border outline-none rounded-md w-full p-2 m-2"
                      id="password"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex justify-center items-center mt-5">
                    <button
                      type={"submit"}
                      className="bg-text_secondary text-white hover:text-text_tertiary hover:bg-color_hover outline-none rounded px-4 py-2 mt-4 w-full"
                    >
                      Add Employee
                    </button>
                  </div>
                  <div className="flex justify-center items-center mt-5">
                    <button className="border  outline-none rounded hover:text-text_tertiary  text-text_secondary bg-gray-200 px-4 py-2 mt-4 w-full">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Employee;
