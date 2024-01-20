"use client";
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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  role: z.string().min(2, {
    message: "Role must be at least 2 characters.",
  }),
});

const Employee = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
    },
  });
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter();
  const { getUserQuery, createUserMutation } = useUser();
  const users = getUserQuery?.data;

  console.log(users);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    createUserMutation.mutate(values);
  }

  return (
    <Fragment>
      <div className="bg-background_foreground h-screen">
        <div>
          <div className="flex justify-end pr-48 pb-4 pt-10 ">
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
              className="border rounded-md hover:text-text_tertiary text-center text-text_secondary px-4 py-2"
              onClick={() => setShowModal(true)}
            >
              Add Employee
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className=" w-3/4 h-full">
              <h1 className="font-bold pt-4 pl-5 pb-4"></h1>
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
                <Modal
                  isVisible={showModal}
                  onClose={() => setShowModal(false)}
                >
                  <div className="p-6  w-full">
                    <h1 className="text-xl font-semibold mb-5 ">
                      Add Employee
                    </h1>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full "
                      >
                        <div className="flex justify-between gap-4">
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
                                      placeholder="shadcn"
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
                                      placeholder="shadcn"
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
                                    placeholder="shadcn"
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
                                    placeholder="shadcn"
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
                                    placeholder="shadcn"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="flex justify-center items-center mt-5">
                          <button
                            type="submit"
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
                    </Form>
                  </div>
                </Modal>
              </div>
            </div>
          </div>

          <div className="bg-color_hover h-screen flex justify-center ">
            <div className="bg-white mt-20 w-full mb-0 md:w-3/4 overflow-y-auto">
              <h1 className=" font-bold pl-5 mt-5">Employees</h1>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-2">
                <h3 className=" text-text_tertiary font-bold  text-sm  overflow-auto p-5">
                  Name
                </h3>
                <h3 className="text-text_tertiary font-bold text-sm overflow-auto p-5">
                  Email Address
                </h3>
                {/* <h3 className=" text-text_tertiary font-bold text-sm overflow-auto p-5">
            Date Added
          </h3> */}

                <h3 className="text-text_tertiary font-bold text-sm overflow-auto p-5">
                  Role
                </h3>
              </div>
              {/* GRID 1 */}
              {users?.map((user) => (
                <div key={user.userId} className="grid grid-cols-4 gap-2 p-2">
                  {/* <p className="p-5">{users?.firstName}</p> */}
                  {/* <p className="p-5">ba@gmail.com</p>
          <p className="p-5">12/12/2021</p>
          <p className="p-5">Developer </p> */}

                  <p className="p-5">{`${user.firstName} ${user.lastName}`}</p>
                  <p className="p-5 truncate">{user.email}</p>
                  <p className="p-5">{user.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Employee;
