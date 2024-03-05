import React from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";

const Nav = () => {
  return (<div className="w-[100%] top-0 h-[12vh] bg-[#141c27] shadow-md">
    <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25ptx] text-white font-bold">
            JOSH 
            <span className="text-[#50d71e]">GAGNIER</span>
        </h1>
        <div className="nav-link text-white">HOME</div>
        <div className="nav-link text-white">CURRENTLY</div>
        <div className="nav-link text-white">ABOUT</div>
        <div className="nav-link text-white">PROJECTS</div>
        <div className="nav-link text-white">SOCIALS</div>
        <div className="nav-link text-white">CONTACT</div>
        <div>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-green-700"/>
        </div>
    </div>
</div>
  );
};

export default Nav;