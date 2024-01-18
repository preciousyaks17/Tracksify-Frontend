"use client";
import React from "react";
import Logo from "@/components/logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeft } from "lucide-react";

import { toast } from "sonner";

const ResetPasswordPage = () => {
  return (
    <main className="md:flex   ">
      <div className="md:w-1/2  ">
        <div className="bg-background_foreground h-screen">
          <div className="p-4">
            <Logo />
            <div className="flex items-center justify-center py-40">
              <h1 className=" text-text_tertiary font-bold text-5xl font-work-sans mb-3 leading-tight">
                Elevate your
                <br /> Productivity with
                <br />{" "}
                <span className=" font-bold text-text_secondary">
                  Tracksify
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link
          href="/login"
          className="flex items-center font-semibold pt-10 pl-4"
        >
          <ChevronLeft size={20} className="" />
          Back
        </Link>

        <div className=" mt-48  pl-32">
          <h1 className="font-bold">Reset Password</h1>
          <p className=" mt-4 text-gray-400  ">
            Kindly input the email address associated with your account on{" "}
            <br></br>{" "}
            <span className="text-text_secondary font-bold">Tracksify</span> and
            we will send you a link to reset your password.
          </p>
          <div>
            <form className="font-product-sans font-sm">
              <div className=" mb-4 mt-8">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="email address"
                ></label>
                <input
                  className="  border rounded py-4 px-5 w-full   leading-tight outline-none "
                  id="email"
                  type="text"
                  placeholder="Email Address"
                />
              </div>

              <div className="flex justify-center mt-10">
                <button className="bg-text_secondary text-white hover:text-text_tertiary hover:bg-color_hover rounded px-4 py-2 mt-4">
                  Send Link
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResetPasswordPage;
