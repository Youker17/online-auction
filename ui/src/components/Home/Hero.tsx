import { motion } from "framer-motion";
import { useState } from "react";



interface HeroProps {
    image: string;
    title: string;
    catchphrase?: string;
    description: string;
}




export default function Hero({ image, title, catchphrase, description }: HeroProps) {
    const [top, setTop] = useState("10px");
    const [left, setLeft] = useState("10px");


    return (

        <motion.div
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hero container bg-gray-950 bg-opacity-60 backdrop-blur-xl min-h-[50vh] mx-auto my-5 text-gray-100 rounded-3xl shadow-2xl transform ease-in-out hover:shadow-2xl">
            <div className="flex flex-col justify-between  p-5 gap-5 lg:flex-row">
                <div className=" p-5 flex justify-around gap-5 flex-col">
                    <h1 className="text-5xl font-bold flex items-end flex-row gap-2">{title}
                    <h2 className="text-6xl font-extrabold bg-gradient-to-tr from-violet-500 via-violet-800 to-violet-950 bg-clip-text text-transparent">{catchphrase}</h2>
                    </h1>
                    
                    <p className="py-6">{description}</p>
                    <div className="relative w-full h-[12%]">
                        <motion.div className="bg-primary h-full w-1/3 top-2 left-2 rounded-full"
                            initial={{ position:"absolute",top: "2rem", left: "2rem" }}
                            animate={{ top: top, left: left }}
                            ></motion.div>
                        <motion.button 
                        onHoverEnd={()=>{
                            setTop("10px");
                            setLeft("10px");
                        }}
                        onHoverStart={()=>{
                            setTop("0");
                            setLeft("0");
                        }}

                        className=" absolute text-white font-bold bg-transparent rounded-full z-40 border-[3px] border-white h-full lg:w-1/3">Get Started</motion.button>
                    </div>
                </div>
                <img src={image} className="md:max-w-screen-sm w-full h-full  rounded-lg " />
            </div>

        </motion.div>


    )
}





// <div className="hero min-h-full p-5 text-paragraph bg-main backdrop-blur-3xl bg-opacity-30 shadow-2xl w-full mx-auto">
        //     <div className={`flex flex-col justify-between  p-5 gap-5   ${orientation?"lg:flex-row-reverse":"lg:flex-row"}`}>
        //         <img src={image} className="md:max-w-screen-sm w-full h-full  rounded-lg shadow-2xl" />
        //         <div className=" p-5 flex justify-center gap-5 flex-col">
        //             <h1 className="text-5xl font-bold">{title}</h1>
        //             <p className="py-6">{description}</p>
        //             <button className="btn btn-primary w-1/3">Get Started</button>
        //         </div>
        //     </div>
        // </div>