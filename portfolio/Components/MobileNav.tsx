import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props{
    nav:boolean;
    closeNav:()=> void;
}

const MobileNav = ({nav,closeNav}:Props) => {

    const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div 
    className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}
    >
        <div className ="w-[100w] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile text-white">HOME</div>
        <div className="nav-link-mobile text-white">CURRENTLY</div>
        <div className="nav-link-mobile text-white">ABOUT</div>
        <div className="nav-link-mobile text-white">PROJECTS</div>
        <div className="nav-link-mobile text-white">SOCIALS</div>
        <div className="nav-link-mobile text-white">CONTACT</div>
        </div>
        <div 
        onClick={closeNav} 
        className="absolute cursor-pointer top-[10rem] right-[2rem] w-[3rem] h-[3rem] text-green-400">
            <XMarkIcon/>
        </div>
    </div>
  );
};

export default MobileNav