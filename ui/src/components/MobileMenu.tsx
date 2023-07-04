
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"


interface MobileMenuProps {
    visible: boolean;
    setVisible: (boolean: boolean) => void;
}


const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: "-100%" },
    exit: { opacity: 0, x: "-100%" }
}


export default function MobileMenu({ visible, setVisible }: MobileMenuProps) {

    return (
        <motion.div className="w-screen h-screen bg-main backdrop-blur-3xl bg-opacity-80 absolute left-0 top-0 z-40"
            variants={variants}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            exit="hidden"
            transition={{ duration: 0.2 }}
        >
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center p-5">
                    <h1 className="text-5xl font-bold text-center">Menu</h1>

                    <div className="flex justify-between w-full gap-10 flex-col py-10">

                        <NavLink
                            className={({ isActive }) => `btn  rounded-none ${isActive ? 'btn-primary bg-opacity-50 backdrop-blur-md btn-disabled' : 'btn-ghost'}`}
                            to={"/"}
                            onClick={() => setVisible(false)}>
                            Home
                        </NavLink>
                        <hr className="border-2 border-gray-600" />
                        <NavLink
                            className={({ isActive }) => `btn  rounded-none ${isActive ? 'btn-primary bg-opacity-50 backdrop-blur-md btn-disabled' : 'btn-ghost'}`}
                            to={"/search"}
                            onClick={() => setVisible(false)}>
                            Search
                        </NavLink>
                        <hr className="border-2 border-gray-600" />
                        <NavLink
                            className={({ isActive }) => `btn  rounded-none ${isActive ? 'btn-primary bg-opacity-50 backdrop-blur-md btn-disabled' : 'btn-ghost'}`}
                            to={"/about"}
                            onClick={() => setVisible(false)}>
                            About
                        </NavLink>
                        <hr className="border-2 border-gray-600" />
                    </div>
                    <div className="flex flex-col w-full gap-8">
                    <a href="/register" className="btn btn-secondary rounded-none w-full">Register</a>
                    <a href="/login" className="btn btn-ghost rounded-none w-full">Login</a>
                    </div>

                </div>
            </div>
        </motion.div>
    )




}
