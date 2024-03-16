import React from "react";

const Projects = () => {
  return (
    <div id="Projects" className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
        <div  className="grid grid-cols-1 w-[95%] mx-auto gap-[1rem]  md:grid-cols-5 items-center  " >

    {/* Webdev Highlight */}    
    
            <div className="bg-gradient-to-b  from-slate-800 to-teal-700 rounded-lg flex flex-col justify-center items-center hover:opacity-90  min-h-[350px] "  title="Click here for more">
                
                <h1 className="text-[20px]  font-bold uppercase text-green-400 md-[1rem]">
                    Web <span className="text-white">Dev </span>
                </h1>
            

                <div className="mb-[3rem] flex items-center md:space-x-10">
                    
                    <p className="text-20px text-white w-80%">
                    ex1
                    </p>
                    
                </div>     
            </div>
    {/* Embedded Highlight */}    
    <div className="bg-gradient-to-b  from-slate-800 to-green-700 rounded-lg flex flex-col justify-center items-center  hover:opacity-90  min-h-[350px]">
                <h2 className="text-[20px] font-bold uppercase text-green-400 md-[1rem]">
                    Embedded<span className="text-white"> Eng</span>
                </h2>
    
                <div className="mb-[3rem] flex items-center md:space-x-10">
                
                    <p className="text-20px text-white w-80%">
                    ex1
                    </p>
                </div>     
            </div>
    {/* Game Dev Highlight */}    
    <div className="bg-gradient-to-b  from-slate-800 to-cyan-700 rounded-lg flex flex-col justify-center hover:opacity-90  items-center min-h-[350px]">
                <h1 className="text-[20px] font-bold uppercase text-green-400 md-[1rem]">
                    Game <span className="text-white"> Dev </span>
                </h1>

                <div className="mb-[3rem] flex items-center md:space-x-10">
                    
                    <p className="text-20px text-white w-80%">
                    ex1
                    </p>
                </div>     
            </div>
    {/* Data Science/ML Highlight */}    
    <div className="bg-gradient-to-b  from-slate-800 to-green-700 rounded-lg flex flex-col justify-center  hover:opacity-90 items-center min-h-[350px]">   
                <h1 className="text-[20px] font-bold uppercase text-green-400 md-[1rem]">
                    Data / <span className="text-white">ML</span> / AI
                </h1>
         
                <div className="mb-[3rem] flex items-center md:space-x-10">
                    
                    <p className="text-20px text-white w-80%">
                    ex1
                    </p>
                </div>     
            </div>
    {/* Teaching Highlight */}    
    <div className="bg-gradient-to-b  from-slate-800 to-lime-700 rounded-lg flex flex-col justify-center  hover:opacity-90 items-center min-h-[350px]">
                <h1 className="text-[20px] font-bold uppercase text-green-400 md-[1rem]  flex flex-col justify-center items-center">
                    Leadership &<span className="text-white"> Teaching </span> 
                </h1>
 
                <div className="mb-[3rem] flex items-center md:space-x-10">
                   
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