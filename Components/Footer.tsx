import React from "react";
import { MapIcon } from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles


const Footer = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
        <div data-aos="zoom-in" className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-4 md:grid-cols-2
        w-[80%] mx-auto gap-[3rem]">


        {/* Address*/}
            <div className="flex items-center space-x-6">
                <div className="md:w-[6.5rem] md;h-[6.5rem] w-[5rem] flex items-center justify-center
                    rounded-full bg-black">
                    <MapIcon className="md:w-[5rem] md:h-[rem] w-[3rem] h-[3em] text-green-400"/>
                </div>
                <div >
                    <h1 className="text-[20px] font-bold text-white" >
                        Location
                    </h1>
                    <p className="text-[15px] text-white">
                        Garden Grove <br/> California, US
                    </p>
                </div>
            </div>
        {/* LinkedIn */}
        <div className="flex items-center space-x-6">
                <div className="md:w-[6.5rem] md;h-[6.5rem] w-[5rem] flex items-center justify-center
                    rounded-full bg-black">
                        {/* LI SVG */}   
                        <a
                href="https://www.linkedin.com/in/gagnierjoshua/">   
                    <svg className="md:w-[5rem] md:h-[rem] w-[3rem] h-[3em] text-green-400"  viewBox="0 0 24 24"  fill="green-400"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  
                            <rect x="2" y="9" width="4" height="12" />  
                            <circle cx="4" cy="4" r="2" />
                    </svg>
                    </a>
                </div>
                <div >
                <a
                href="https://www.linkedin.com/in/gagnierjoshua/">   
                    <h1 className="text-[20px] font-bold text-white" >
                        LinkedIn
                    </h1>
                    <p className="text-[15px] text-white">
                    linkedin.com/in/
                    gagnierjoshua
                    </p>
                    </a>
                </div>
            </div>        
        {/* GitHub */}
        <div className="flex items-center space-x-6">
                <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] flex items-center justify-center
                    rounded-full bg-black">
                        {/* GH SVG */}      
                        <a
                href="https://github.com/gagnierjoshua">      
                 <svg className="md:w-[rem] md:h-[rem] w-[3rem] h-[3em] text-green-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                    <path stroke="none" d="M0 0h24v24H0z"/>  
                    <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
                </svg>
                </a>
                </div>
                <div >
                <a
                href="https://github.com/gagnierjoshua"> 
                    <h1 className="text-[20px] font-bold text-white" >
                        GitHub
                    </h1>
                    <p className="text-[15px] text-white">
                        gagnierjoshua
                    </p>
                    </a>
                </div>
            </div>        
         {/* Twitter */}
         <div className="flex items-center space-x-6">
                <div className="md:w-[6.5rem] md;h-[6.5rem] w-[5rem] flex items-center justify-center
                    rounded-full bg-black">
                       {/* Twitter SVG */}       
                       <a
                href="https://twitter.com/GagnierJoshua">   
                <svg className="md:w-[5rem] md:h-[rem] w-[3rem] h-[3em] text-green-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"> 
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
                </a>
                </div>
                <div >
                
               
                <a
                href="https://twitter.com/GagnierJoshua">
                    <h1 className="text-[20px] font-bold text-white" >
                        Twitter
                    </h1>
                    <p className="text-[15px] text-white">
                        @GagnierJoshua 
                    </p>
                    </a>
                </div>
            </div>       
         </div>
            <div  className="text-center mt-[3rem] text-[15px] text-white">
                <p>
                &copy; 2024 Joshua Gagnier. All rights reserved.
                </p>    


        </div>

        </div>



  );
}

export default Footer;