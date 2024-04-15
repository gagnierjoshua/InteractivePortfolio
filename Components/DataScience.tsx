import Image from "next/image";


const DataScience = () => {
    return (
      

        <div className="bg-black p-3 justify-center relative overflow-hidden bg-center bg-cover" 
        style={{ backgroundImage: `url('/images/space_bckg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'  }}>

        
        
            <div>
                <h1 className="text-4xl text-center text-white mb-8">Galatic Research </h1>
               
            </div>


        <div className="grid grid-cols-2 gap-4">

        <div className="p-4 text-white  items-center text-center align-middle flex flex-col justify-center">
                    <p>In partnership with Caltech University, I taught, mentored, and supported high students in astronomy research.</p>
                    <br />
                    <p>
                        These graphs utilized Python, Pandas, Numpy, Astropy and Matplotlib to analyze data in Jupyter Notebooks.
                    </p>
                    <br />
                 
        </div>
        <div className="p-4 items-center text-center align-middle flex flex-col justify-center">
                    <Image src="/images/plots4.gif" alt="Your Image" width={500} height={300} />
                </div>
                <div className="p-4 items-center text-center align-middle flex flex-col justify-center">
                    <Image src="/images/plots2.gif" alt="Your Image" width={500} height={300} />
                </div>
                <div className="p-4 text-white  items-center text-center align-middle flex flex-col justify-center">
                    <p> 
                        Some of the data being directly compared and contrasted graphically was: <br /><br />
                    
                        <ul>
                        <li>• Redshift Amount</li>
                        <li>• Signal to Noise</li>
                        <li>• Brightness</li>
                        <li>• Specific Wavelengths</li>
                        <li>• Location in Sky</li>
                        </ul>

                        


                    </p>
                </div>
                <div className="p-4 text-white  items-center text-center align-middle flex flex-col justify-center">
                    <p>
                        

                   
                        The majority of students engaging in this project had no research or python experience prior. <br /><br />
                        

                 
                    </p>
                </div>
                <div className="p-4 items-center text-center align-middle flex flex-col justify-center"   >
                    <Image src="/images/plots3.gif" alt="Your Image" width={500} height={300} />
                </div>
            </div>


            
        </div>

    );
};

export default DataScience;


