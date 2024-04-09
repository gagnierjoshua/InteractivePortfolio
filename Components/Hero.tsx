import React from "react";
import TextEffect from "./TextEffects";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="pt-5">
      <video
        className="absolute z-10 w-full object-cover top-300 left-0 top-0 max-h-[800px] min-h-[500px]"
        src={require("../public/videos/test.mp4")}
        autoPlay
        muted
        loop
      />
      <div className="relative w-[80%] z-20 grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[30%] items-center">
        <div>
        <h1 className="text-[35px] sm:text-[3rem] md:text-[4rem] text-green-50 font-bold block 2xl:inline">
  Hello,&nbsp;
</h1>
<h1 className="text-[35px] sm:text-[3rem] md:text-[4rem] text-green-50 font-bold block md:inline">
  I&apos;m <span className="text-white">Josh Gagnier</span>
</h1>
<br />
          <TextEffect />
          <p className="mt-[1rem] text-[1rem] font-medium    text-white">
            Veteran STEM education leader with a passion for software
            architecture, web, embedded, and game development.
          </p>
          <div className="mt-[1rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <a
              href="/files/marresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="px-[2rem] hover:bg-green-700 transition-all duration-200 py-[0.5rem] 
              text-[16px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
              >
                <p>Resume</p>
                <ArrowDownTrayIcon className="w-[1.5rem] h-[1.5rem] text-black" />
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[350px] hidden bg-[#55e6a5] relative lg:flex justify-center items-center rounded-full h-[350px]">
            <Image
              src="/images/self.png"
              alt="Joshua Gagnier"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
