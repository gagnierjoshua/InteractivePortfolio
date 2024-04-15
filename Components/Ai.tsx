import React from "react";
import Image from "next/image";
import { Carousel } from "flowbite-react";

const Ai = () => {
  return (
    <div id="AboutMe" className="bg-[#121121] text-white pb-[3rem] p-10 items-center text-center">
   
<div className="text-5xl">

    Artifical Intelligence 
</div>


<div className="text-4xl p-10">
    Deep Learning
</div>


<div className="grid grid-cols-2">


<div>
    
    info segment


</div>
<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>

    </div>

    <div className="text-4xl p-10">
    Large Language Model (LLM)  Integration 
</div>

<div className="grid grid-cols-2">

<div>
Info segment
</div>

    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
    </div>



    <div className="text-4xl p-10">
    Fine Tuning
</div>

<div className="grid grid-cols-2">

<div>
Info segment
</div>


    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
    </div>



    </div>
  );
};

export default Ai;
