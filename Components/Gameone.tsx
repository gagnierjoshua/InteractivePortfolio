const Gameone = () => {
    return (
      

        <div className=" bg-black flex p-3 justify-center relative overflow-hidden ">
    <div className="mx-auto">
        
        <div className="group cursor-pointer">
            <div
                className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            </div>
            <div
                className="relative px-5 py-6  bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
               
                <div className="space-y-2 ">
                <h1 className="text-4xl text-center "> 
                PAGE IN PROGRESS 
                <br /> <br /> Wipe it up!</h1>
              

                    <p className="text-slate-800 text-center">
                        My first  game developed in C++ utilizing a low-level library called Raylib.
                        </p>
                        <p className="text-slate-800">
                        The game is a simple sidescroller where the player must avoid obstacles and reach the end of the level. 
                        </p>
                        <p className="text-slate-800">
                        The game features a scoring system and a highscore board. 
                        </p>
                        <p className="text-slate-800">
                        The game was developed in a week and was a great learning experience for me.
                        </p>
                    


                </div>
            </div>
        </div>
    </div>
</div>

    );
};

export default Gameone;


/*


This page will be thick glowing borders with different themes

With a large centered title
The tools used beneath
with screenshots, explanations, and takeaways from the game
with a <play here>  link that will take the user to a standalone page in a seperate tab 
where they can play it on the browser through webasm 


*/