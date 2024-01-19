"use client";
import axios from "axios";
import Logo from "@/components/logo";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { apiClient } from "@/helpers/apiclient";

import { toast } from "sonner";
import * as z from "zod";


const loginFornSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Email must be valid",
  }),
  password: z.string().min(3, { message: "Password is required!" }),
});

type ValidationSchema = z.infer<typeof loginFornSchema>;

const LoginPage = () => {
  const router = useRouter();
  // const { getProjectQuery } = useProject();
  // console.log(getProjectQuery.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(loginFornSchema),
  });

  function LoginPage(){
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  }

  const [loading, setLoading] = useState(false)
const[error, setError]= useState("");
  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    try {
      setLoading(true)
      const userDetails = await apiClient.post('tracksify/Auth/Login', {
        email: data.email,
        password: data.password
      }).then(res => res.data);
      
//console.log( 'this is userType' , userDetails);
      localStorage.setItem('token', userDetails.token);
      localStorage.setItem('user', userDetails.user);

      if (userDetails.user.userType === 0) {
        router.push("/employer-dashboard");
      } else if (userDetails.user.userType === 1) {
        router.push("/employee-dashboard");
      } else {
       setError('Invalid User'); 
        
      }


      
    } 
    catch (err: any) {
      
      setError( err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
   // console.log(data);
    //router.push("/employee-dashboard");
    

  };

  // const handleLogin = () => {
  //   router.push("/dashboard");
  // };

  return (
    <div>
      <main className="flex">
        <div className="w-1/2">
          <div className="bg-background_foreground h-screen">
            <div className="p-4">
              <Logo />
            </div>
            <div className="flex items-center justify-center py-40">
              <h1 className="text-text_tertiary font-bold text-5xl font-work-sans mb-3 leading-tight">
                Elevate your
                <br /> Productivity with
                <br />
                <span className=" font-bold text-text_secondary">
                  Tracksify
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className=" w-1/2 flex flex-col px-20 py-40">
          <div>
            <h1 className="font-bold text-2xl">Get Started</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="font-product-sans font-sm "
            >
              <div className=" mb-4 ">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="email address"
                ></label>
                <input
                  className={` border rounded py-4 px-5 w-full  leading-tight outline-none
                  ${errors.email && "border-red-500"}
                  `}
                  id="email"
                  // name="email"
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
              <div className=" mb-4 ">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="password"
                ></label>
                <input
                  className={`border rounded py-4 px-5 w-full  leading-tight outline-none "
                  id="password ${errors.password && "border-red-500"}`}
                  // name="password"
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
              <div className="text-right">
                <p
                  className="text-text_secondary font-md font-product-sans cursor-pointer"
                  onClick={() => router.push("/reset-password")}
                >
                  Forgot Password?
                </p>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="bg-text_secondary text-white hover:text-text_tertiary hover:bg-color_hover w-full font-bold text-text_tertiary py-4 px-5 rounded mt-5"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
export default LoginPage;
