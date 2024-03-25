import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="Projects" className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
        <div  className="grid grid-cols-1 w-[92%] mx-auto gap-[1rem]  md:grid-cols-5 items-center  " >

    {/* Webdev Highlight */}    
    
            <div className=" bg-gradient-to-b gap-y-4  from-slate-800 to-teal-700 rounded-lg flex flex-col justify-center items-center hover:opacity-90  min-h-[350px] "  title="Click here for more">
                
                <h1 className="text-[20px]  font-bold uppercase text-green-400 md-[1rem]">
                    Web <span className="text-white">Dev </span>
                </h1>
            

                <div className=" grid grid-rows-2 justify-center  items-center">
                    
                <div  className=" w-[100%] p-5 h-[100%] min-h-[250px] justify-center  items-center relative">

              <Image
                src="/images/scraping.png"
                alt="Joshua Gagnier"
                layout="fill"
                className="relative z-[11] p-2 w-[95%] h-[95%] object-cover rounded-xl"
                />
                </div>

                <div className="row-start-2 flex items-center gap-x-2 justify-center relative p-1.5">
                <p className="text-20px text-white min-w-[100px] gap-x-2 w-90% justify-center relative items-center max-h-[150px] text-center overflow-auto">
                    Web scraping google chrome extension that utilizes APIs to scrape data from websites and outputs csv files of text cleaned to the check-box specifications. 
                    </p>
                    </div>

                    
                </div>    

            </div>
    {/* Embedded Highlight */}    
    <div className="bg-gradient-to-b  gap-y-4  from-slate-800 to-green-700 rounded-lg flex flex-col justify-center items-center  hover:opacity-90  min-h-[350px]">
                <h1 className="text-[20px] font-bold uppercase text-green-400 md-[1rem]">
                    Embedded<span className="text-white"> Eng</span>
                </h1>
      

                <div className=" grid grid-rows-2 justify-center  items-center">
                    
                <div  className=" w-[100%] p-5 h-[100%] min-h-[250px] justify-center  items-center relative">

              <Image
                src="/images/embed.jpg"
                alt="Joshua Gagnier"
                layout="fill"
                className="relative z-[11] p-2 w-[95%] h-[95%] object-cover rounded-xl"
                />
                </div>
                <div className="row-start-2 flex items-center gap-x-2 justify-center relative p-1.5">
                <p className="text-20px text-white min-w-[100px] gap-x-2 w-90% justify-center relative items-center max-h-[150px] text-center overflow-auto">
                    I have made guides and developed of hundreds of prototype devices utilizing a far range of embedded devices interfacing with ARM, ESP, Raspberry Pi, and Arduino microcontrollers.

                    </p>
                    </div>

                    
                </div>    

            </div>
            
    {/* Game Dev Highlight */}    
    <div className="bg-gradient-to-b gap-y-4   from-slate-800 to-cyan-700 rounded-lg flex flex-col justify-center hover:opacity-90  items-center min-h-[350px]">
                <h1 className="text-[20px] font-bold uppercase text-green-400 md-[1rem]">
                    Game <span className="text-white"> Dev </span>
                </h1>

          

                <div className=" grid grid-rows-2 justify-center  items-center">
                    
                <div  className=" w-[100%] p-5 h-[100%] min-h-[250px] justify-center  items-center relative">

              <Image
                src="/images/wipeit.png"
                alt="Joshua Gagnier"
                layout="fill"
                className="relative z-[11] p-2 w-[95%] h-[95%] object-cover rounded-xl"
                />
                </div>

                <div className="row-start-2 flex items-center gap-x-2 justify-center relative p-1.5">
                <p className="text-20px text-white min-w-[100px] gap-x-2 w-90% justify-center relative items-center max-h-[150px] text-center overflow-auto">
                    In hobby and for educuation, I have developed several games in C++ utilizing low-level libraries and engines such as Raylib.
                    </p>
                    </div>

                    
                </div>    

            </div>
    {/* Data Science/ML Highlight */}    
    <div className="bg-gradient-to-b gap-y-4   from-slate-800 to-green-700 rounded-lg flex flex-col justify-center  hover:opacity-90 items-center min-h-[350px]">   
                <h1 className="text-[20px] font-bold uppercase text-green-400 md-[1rem]">
                    Data / <span className="text-white">ML</span> / AI
                </h1>
         
               

                <div className=" grid grid-rows-2 justify-center  items-center">
                    
                <div  className=" w-[100%] p-5 h-[100%] min-h-[250px] justify-center  items-center relative">

              <Image
                src="/images/data.png"
                alt="Joshua Gagnier"
                layout="fill"
                className="relative z-[11] p-2 w-[95%] h-[95%] object-cover rounded-xl"
                />
                </div>
                <div className="row-start-2 flex items-center gap-x-2 justify-center relative p-1.5">
                <p className="text-20px text-white min-w-[100px] gap-x-2 w-90% justify-center relative items-center max-h-[150px] text-center overflow-auto">
        As employed as a mentor teacher for university research programs I have coached students in Astronomy and Physics data analysis. 
    </p>
                    </div>

                    
                </div>    

            </div>
    {/* Teaching Highlight */}    
    <div className="bg-gradient-to-b gap-y-4   from-slate-800 to-lime-700 rounded-lg flex flex-col justify-center  hover:opacity-90 items-center min-h-[350px]">   
                <h1 className="text-[20px] font-bold uppercase text-green-400 md-[1rem]">
                    Edu<span className="text-white"> Leadership </span> 
                </h1>
          
   

                <div className=" grid grid-rows-2 justify-center  items-center">
                    
                <div  className=" w-[100%] p-5 h-[100%] min-h-[250px] justify-center  items-center relative">

              <Image
                src="/images/present.jpg"
                alt="Joshua Gagnier"
                layout="fill"
                className="relative z-[11] p-2 w-[95%] h-[95%] object-cover rounded-xl"
                />
                </div>
                <div className="row-start-2 flex items-center gap-x-2 justify-center relative p-1.5">
                <p className="text-20px text-white min-w-[100px] gap-x-2 w-90% justify-center relative items-center max-h-[150px] text-center overflow-auto">
                    Progressively taken on increasing responsibility leadership roles as a master teacher, mentor teacher, state standards trainer, county curriculum specialist, and presenter over the last 10 years. 
                    </p>
                    </div>

                    
                </div>    

            </div>

       </div>

        </div>



  );
}

export default Projects;