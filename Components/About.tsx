import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="AboutMe" className = "bg-[#121121] pb-[3rem] pt[4rem] md:pt-[8rem]">
        <div className="grid grid-cols-1 w-[80%] mx-auto gap-[3rem] md:grid-cols-2 items-center">
            <div>
                <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
                    About Me
                </h1>
                <h2 className= "text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
                  Dreams to <span className="text-[#55e6a5]">Reality</span>
                </h2>
                <div className="mb-[3rem] flex items-center md:space-x-10">
                    <span className="w-[100px] hidden md:block h-[5px] bg-[#55e6a5] rounded-r-lg"></span>
                    <p className="text-20px text-white w-80%">
                    I&apos;ve been passionately helping others find, seek, and chase their dreams for the last 10 years as a teacher, mentor, and community leader. I&apos;ve lived to hype others and be their cheerleader preparing foundations, 
                    connecting between networks, and celebrating their success. Now, I want to follow my own advice and pursue my own dreams solving problems with software.
                    </p>
                </div>
            </div>
  
                <div  className="lg:w-[350px] mx-auto md:x-0 mt-[2rem] lg:mt-0 lg:h-[350px] w-[300px] h-[300px] relative">
                <Image
                src="/images/grp.jpg"
                alt="Joshua Gagnier"
                layout="fill"
                className="relative z-[11] w-[100%] h-[100%] object-cover rounded-xl"
                />
                <div className="absolute w-[105%] h-[102%] z-[10]    rounded-xl">
                </div>
      
            </div>
        </div>
            
    </div>
  );
};

export default About;