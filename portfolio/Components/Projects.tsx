import React from "react";

const Projects = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
        <div  className="grid grid-cols-1 w-[90%] mx-auto gap-[1rem]  md:grid-cols-5 items-center">

    {/* Webdev Highlight */}    
            <div>
                <h1 className="text-[20px] font-bold uppercase text-green-400 md-[1rem]">
                    Web <span className="text-white">Dev </span>
                </h1>

                <div className="mb-[3rem] flex items-center md:space-x-10">
                    <span className="w-[100px] hidden md:block h-[5px] bg-green-400 rounded-r-lg"></span>
                    <p className="text-20px text-white w-80%">
                    ex1
                    </p>
                </div>     
            </div>
    {/* Embedded Highlight */}    
    <div>
                <h2 className="text-[20px] font-bold uppercase text-green-400 md-[1rem]">
                    Embedded<span className="text-white"> Eng</span>
                </h2>
    
                <div className="mb-[3rem] flex items-center md:space-x-10">
                    <span className="w-[100px] hidden md:block h-[5px] bg-green-400 rounded-r-lg"></span>
                    <p className="text-20px text-white w-80%">
                    ex1
                    </p>
                </div>     
            </div>
    {/* Game Dev Highlight */}    
    <div>
                <h1 className="text-[20px] font-bold uppercase text-green-400 md-[1rem]">
                    Game <span className="text-white"> Dev </span>
                </h1>

                <div className="mb-[3rem] flex items-center md:space-x-10">
                    <span className="w-[100px] hidden md:block h-[5px] bg-green-400 rounded-r-lg"></span>
                    <p className="text-20px text-white w-80%">
                    ex1
                    </p>
                </div>     
            </div>
    {/* Data Science/ML Highlight */}    
    <div>   
                <h1 className="text-[20px] font-bold uppercase text-green-400 md-[1rem]">
                    Data / <span className="text-white">ML</span> / AI
                </h1>
         
                <div className="mb-[3rem] flex items-center md:space-x-10">
                    <span className="w-[100px] hidden md:block h-[5px] bg-green-400 rounded-r-lg"></span>
                    <p className="text-20px text-white w-80%">
                    ex1
                    </p>
                </div>     
            </div>
    {/* Teaching Highlight */}    
    <div>
                <h1 className="text-[20px] font-bold uppercase text-green-400 md-[1rem]">
                    Leadership &<span className="text-white"> Teaching </span> 
                </h1>
 
                <div className="mb-[3rem] flex items-center md:space-x-10">
                    <span className="w-[100px] hidden md:block h-[5px] bg-green-400 rounded-r-lg"></span>
                    <p className="text-20px text-white w-80%">
                    ex1
                    </p>
                </div>     
            </div>


       </div>

        </div>



  );
}

export default Projects;