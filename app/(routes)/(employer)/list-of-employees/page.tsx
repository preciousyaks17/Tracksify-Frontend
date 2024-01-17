"use client";
import { Icon } from "@/components/icon";
import { useRouter } from "next/navigation";
import Modal from "@/components/modal";
import React, { useState, Fragment } from "react";
import { handleClientScriptLoad } from "next/script";
import Dropdown from "@/components/drop-down-menu";
import MultiSelectDropdown from "@/components/drop-down-menu";

const Employee = () => {
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter();
  return (
    <Fragment>
      <div className="bg-background_foreground h-screen">
        <div>
          <div className="flex justify-end pr-48 pb-4 pt-10 ">
            <button
              className="bg-text_secondary text-white hover:text-text_secondary hover:bg-color_hover rounded px-4 py-2 mt-4"
              onClick={(e) => {
                e.preventDefault();
                router.push("/list-of-employees/add-employees");
              }}
            >
              Employees
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-white w-3/4 h-full">
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
                <Modal
                  isVisible={showModal}
                  onClose={() => setShowModal(false)}
                >
                  <div className="p-6  w-full">
                    <h1 className="text-xl font-semibold mb-5 ">
                      Add Employee
                    </h1>
                    <form className="w-full ">
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
                        <button className="bg-text_secondary text-white hover:text-text_tertiary hover:bg-color_hover outline-none rounded px-4 py-2 mt-4 w-full">
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
        </div>
      </div>
    </Fragment>
  );
};

export default Employee;
