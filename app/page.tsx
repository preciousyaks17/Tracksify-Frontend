"use client";
import Logo from "@/components/logo";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col md:flex-row h-screen bg-white">
      {/* Left side with logo and text */}
      <div className="md:w-1/2 w-full bg-background_foreground flex flex-col justify-between h-full md:h-auto">
        <div className="p-4">
          <Logo />
        </div>
        <div className="flex flex-col items-center justify-center py-20 md:py-40 text-center">
          <h1 className="text-text_tertiary font-bold text-4xl md:text-5xl font-work-sans mb-6 leading-tight">
            Elevate your <br /> Productivity with <br />
            <span className="font-bold text-text_secondary">Tracksify</span>
          </h1>
        </div>
        <div className="flex justify-center pb-10 md:hidden">
          <button
            onClick={() => router.push("/login")}
            className="border text-text_secondary px-16 py-4 hover:text-white hover:bg-blue-400 rounded"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Right side with button */}
      <div className="hidden md:flex w-full md:w-1/2 justify-center items-center bg-white">
        <button
          onClick={() => router.push("/login")}
          className="bg-text_secondary text-white hover:text-text_tertiary hover:bg-color_hover rounded px-16 py-4"
        >
          Get Started
        </button>
      </div>
    </main>
  );
}
