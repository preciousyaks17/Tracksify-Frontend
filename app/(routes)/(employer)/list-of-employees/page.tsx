"use client";
// Importing necessary components and utilities
import { Icon } from "@/components/icon";
import { useRouter } from "next/navigation";
import Modal from "@/components/modal";
import React, { useState, Fragment } from "react";
import { handleClientScriptLoad } from "next/script";
import Dropdown from "@/components/drop-down-menu";
import MultiSelectDropdown from "@/components/drop-down-menu";
import useUser from "@/hooks/useUser";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Defining the validation schema for the form
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  role: z.string().min(2, {
    message: "Role must be at least 2 characters.",
  }),
});

// React component for managing employee-related functionality
const Employee = () => {
  // Initializing form state using react-hook-form and zodResolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
    },
  });

  // State for controlling the visibility of the modal
  const [showModal, setShowModal] = React.useState(false);
  // Next.js router instance
  const router = useRouter();
  // Custom hook for handling user-related functionality
  const { getUserQuery, createUserMutation } = useUser();
  // Extracting user data from the query resul
  const users = getUserQuery?.data;
   
  console.log(users);

  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    /// Perform actions with the form values
    createUserMutation.mutate(values);
    setShowModal(false);
  }

  // Close modal handler
  const handleCloseModal = () => {
    form.reset(); // Reset form values
    setShowModal(false);
  };
  // JSX structure for the Employee component
  return (
    <Fragment>
      <div className="bg-background_foreground min-h-screen ">
        <div>
          <div className="flex justify-end md:pr-8 lg:pr-16  ">
            {/* <button
              className="bg-text_secondary text-white hover:text-text_secondary hover:bg-color_hover rounded px-4 py-2 mt-4"
              onClick={(e) => {
                e.preventDefault();
                router.push("/list-of-employees/add-employees");
              }}
            >
              Employees
            </button> */}
            <button
              className="bg-text_secondary text-white hover:text-text_secondary hover:bg-color_hover rounded px-4 py-2 mt-9 "
              onClick={() => setShowModal(true)}
            >
              Add Employee
            </button>
          </div>
          {/* Modal for adding employees */}
          <div className="flex items-center justify-center">
            <div className=" w-3/4 h-full">
              <h1 className="w-full md:w-3/4 lg:w-1/2"></h1>
              {/* <div className="flex justify-center">
                <Icon />
              </div> */}
              <div>
                {/* <p className="text-center text-text_tertiary">
                  No employee has been added yet
                </p> */}
                {/* <div className="flex justify-center pb-20 pt-10">
                  <button
                    className="border rounded-md hover:text-text_tertiary text-center text-text_secondary bg-gray-200 px-4 py-2"
                    onClick={() => setShowModal(true)}
                  >
                    Add Employee
                  </button>
                </div> */}
                {/* Modal content */}
                <Modal isVisible={showModal} onClose={handleCloseModal}>
                  {/* Form for adding employees */}
                  <div className="p-6  w-full max-w-md mx-auto">
                    <h1 className="text-xl font-semibold mb-5 ">
                      Add Employee
                    </h1>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full "
                      >
                        {/* Form fields for employee details */}
                        <div className="flex flex-col md:flex-row md:gap-4">
                          <div className="w-full ">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>First Name</FormLabel>
                                  <FormControl>
                                    <input
                                      className="border outline-none rounded-md w-full p-2 m-2"
                                      placeholder="Enter First name"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="w-full">
                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Last Name</FormLabel>
                                  <FormControl>
                                    <input
                                      className="border outline-none rounded-md w-full p-2 m-2"
                                      placeholder="Enter Last Name"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        <div className="w-full">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <input
                                    className="border outline-none rounded-md w-full p-2 m-2"
                                    placeholder="Enter Last Name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="w-full">
                          <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                  <input
                                    className="border outline-none rounded-md w-full p-2 m-2"
                                    placeholder="Enter Password"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="w-full">
                          <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Role</FormLabel>
                                <FormControl>
                                  <input
                                    className="border outline-none rounded-md w-full p-2 m-2"
                                    placeholder="Enter Role"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        {/* Submit and cancel buttons */}
                        <div className="flex justify-center items-center mt-5">
                          <button
                            type="submit"
                            className="bg-text_secondary text-white hover:text-text_tertiary hover:bg-color_hover rounded-md px-4 py-2 mt-4 w-full"
                          >
                            Add Employee
                          </button>
                        </div>
                        <div className="flex justify-center items-center mt-5">
                          <button
                            className="border  outline-none rounded hover:text-text_tertiary  text-text_secondary bg-gray-200 px-4 py-2 mt-4 w-full"
                            onClick={handleCloseModal}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </Form>
                  </div>
                </Modal>
              </div>
            </div>
          </div>

          {/* Employee list section */}
          <div className=" h-screen flex justify-center mt-[-1]">
            <div className="bg-white mt-10 w-full md:w-3/4 lg:w-1/2 overflow-y-auto ">
              {/* Title */}
              <h1 className=" font-bold pl-5 mt-5">Employees</h1>

              {/* Table header */}
              <div className="grid grid-cols-3 gap-4 p-2 sticky top-0">
                {showModal ? null : (
                  <>
                    <div className="flex-1">
                      <h3 className=" text-text_tertiary font-bold text-sm p-5">
                        Name
                      </h3>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-text_tertiary font-bold text-sm  p-5">
                        Email Address
                      </h3>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-text_tertiary font-bold text-sm  p-5">
                        Role
                      </h3>
                    </div>
                  </>
                )}
              </div>

              {/* Displaying user data in a table */}
              {users?.map((user) => (
                <div key={user.userId} className="grid grid-cols-3 gap-4 p-2">
                  <div className="flex-1">
                    <Link
                      // href={"/hello"}
                      href={`/employer-dashboard/employer-project/${user.userId}/list-of-projects`}
                    >
                      <p className="p-5">{`${user.firstName} ${user.lastName}`}</p>
                    </Link>
                  </div>
                  <div className="flex-1 overflow-auto">
                    <p className="p-5">{user.email}</p>
                  </div>
                  <div className="flex-1">
                    <p className="p-5">{user.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// Exporting the Employee component as the default export
export default Employee;
