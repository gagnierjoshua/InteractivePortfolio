const Gametwo = () => {
    return (
      

        <div className=" bg-black flex p-3 justify-center relative overflow-hidden ">
    <div className="mx-auto">
        
        <div className="group cursor-pointer">
            <div
                className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            </div>
            <div
                className="relative px-5 py-6  bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
               
                <div className="space-y-2 ">
                <h1 className="text-4xl text-center "> Quick-Switch RPG</h1>
              

                    <p className="text-slate-800 text-center">
                        My second and much more expansive game developed in C++ utilizing Raylib.
                        </p>
                        <p className="text-slate-800">
                        This is a top-down RPG that features a unique combat system where the player must switch between
                         different classes quickly to defeat enemies.
                        </p>
                        <p className="text-slate-800">
                        The npcs are equipped with programming logic to make them more challenging. 
                        </p>
                </div>
            </div>
        </div>
    </div>
</div>

    );
};

export default Gametwo;