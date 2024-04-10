import Image from "next/image";


const DataScience = () => {
    return (
      

        <div className="bg-black p-3 justify-center relative overflow-hidden bg-center bg-cover" 
        style={{ backgroundImage: `url('/images/space_bckg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'  }}>

        
        
            <div>
                <h1 className="text-4xl text-center text-white mb-8">Galatic Research </h1>
               
            </div>


        <div className="grid grid-cols-2 gap-4">

        <div className="p-4 text-white">
                    <p>Your text here</p>
        </div>
        <div className="p-4">
                    <Image src="/images/plots4.gif" alt="Your Image" width={500} height={300} />
                </div>
                <div className="p-4">
                    <Image src="/images/plots2.gif" alt="Your Image" width={500} height={300} />
                </div>
                <div className="p-4 text-white">
                    <p>Your text here</p>
                </div>
                <div className="p-4 text-white">
                    <p>Your text here</p>
                </div>
                <div className="p-4">
                    <Image src="/images/plots3.gif" alt="Your Image" width={500} height={300} />
                </div>
            </div>


            
        </div>

    );
};

export default DataScience;


