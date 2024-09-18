"use client";
import axios from "axios";
import Logo from "@/components/logo";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { toast } from "sonner";
import * as z from "zod";
import axiosConfig from "@/config/axios";

const loginFornSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Email must be valid",
  }),
  password: z.string().min(3, { message: "Password is required!" }),
});

type ValidationSchema = z.infer<typeof loginFornSchema>;

const LoginPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(loginFornSchema),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    try {
      setLoading(true);
      const userDetails = await axiosConfig
        .post("Auth/Login", {
          email: data.email,
          password: data.password,
        })
        .then((res) => res.data);

      console.log({ userDetails });

      localStorage.setItem("token", userDetails.token);
      localStorage.setItem("user", JSON.stringify(userDetails.user));

      if (userDetails.user.userType === 0) {
        toast.success("Login Successfully");
        router.push("/employer-dashboard");
      } else if (userDetails.user.userType === 1) {
        toast.success("Login Successfully");
        router.push("/employee-dashboard");
      } else {
        setError("Invalid User");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 w-full bg-background_foreground flex flex-col justify-between h-full">
        <div className="p-4">
          <Logo />
        </div>
        <div className="flex flex-col items-center justify-center py-20 md:py-40 text-center">
          <h1 className="text-text_tertiary font-bold text-4xl md:text-5xl font-work-sans mb-6 leading-tight">
            Elevate your <br /> Productivity with <br />
            <span className="font-bold text-text_secondary">Tracksify</span>
          </h1>
        </div>
        {/* <div className="flex justify-center pb-10 md:hidden">
          <button
            onClick={() => router.push("/login")}
            className="border text-text_secondary px-16 py-4 hover:text-white hover:bg-blue-400 rounded"
          >
            Get Started
          </button>
        </div> */}
      </div>

      <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-white px-6 py-10 md:px-20 md:py-40">
        <div className="w-full max-w-md">
          <h1 className="font-bold text-2xl mb-6">Get Started</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="font-product-sans font-sm"
          >
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="email address"
              >
                Email Address
              </label>
              <input
                className={`border rounded py-4 px-5 w-full leading-tight outline-none ${
                  errors.email && "border-red-500"
                }`}
                id="email"
                type="text"
                placeholder="Email Address"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs italic text-red-500 mt-2">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={`border rounded py-4 px-5 w-full leading-tight outline-none ${
                  errors.password && "border-red-500"
                }`}
                id="password"
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-xs italic text-red-500 mt-2">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="text-right mb-4">
              <p
                className="text-text_secondary font-md font-product-sans cursor-pointer"
                onClick={() => router.push("/reset-password")}
              >
                Forgot Password?
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="bg-text_secondary text-white hover:text-text_tertiary hover:bg-color_hover w-full font-bold py-4 px-5 rounded mt-5"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
