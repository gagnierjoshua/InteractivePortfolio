import React from "react";


const Hero = () => {
  return (
  <div>       
    <video src={require("../public/videos/test.mp4")} 
    autoPlay muted loop  />
  </div>
  );
};

export default Hero;

{/*>className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center" */}