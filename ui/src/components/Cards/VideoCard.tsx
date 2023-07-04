import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from 'react'
import ReactPlayer from "react-player";
import Modal from "../Modal";



interface VideoCardProps {
    image?: string;
    title: string;
    icon?: string;
    description?: string;
    live: boolean;
    link: string;
    className?: string;
}




export default function VideoCard({ image, title, icon, className, description, live, link }: VideoCardProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    return (<>

        <Modal
            open={modalOpen}
            onExit={() => { setModalOpen(false) }}
            className={"z-50 fixed top-0 w-full h-full bg-white backdrop-blur-3xl bg-opacity-50 p-10 "}
        >

            <ReactPlayer
                url={link}
                width="80%"
                height="80%"
                controls={true}
                style={{
                    borderRadius: "3rem",
                }}
                playing={modalOpen}

                className="container rounded-3xl"
            />
        </Modal>

        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className={`relative flex flex-col p-5 justify-around gap-2  text-gray-100 rounded-3xl shadow-2xl hover:shadow-gray-800 transform ease-in-out hover:shadow-2xl ${className}`}
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "repeat",
            }}
        >

            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-col gap-2">

                </div>
                <motion.button onClick={e => setModalOpen(true)}
                    initial={{ width: "5%" }}
                    whileHover={{ width: "10%" }}
                    onHoverStart={e => {
                        setIsActive(true)
                    }}
                    onHoverEnd={e => {
                        setIsActive(false)
                    }}


                    className={`bg-violet-600 flex flex-row gap-2 bg-opacity-50 absolute top-3 right-3 backdrop-blur-xl p-3  rounded-full`}>
                    <img src={icon} className="w-5 h-5" />
                    <motion.span initial={{ opacity: 0, x: 10, display: "none" }} animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 10, display: isActive ? "block" : "none" }} className="text-black">Play</motion.span>
                </motion.button>
            </div>
        </motion.div>

    </>
    )
}
