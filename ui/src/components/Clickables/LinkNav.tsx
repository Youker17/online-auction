import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"
import { useState, useEffect } from "react"


interface LinkNavProps {
    to: string;
    label: string;
    className?: string;
}




export default function LinkNav({ to, label, className }: LinkNavProps) {
    const [isActivee, setIsActivee] = useState(false);


    useEffect(() => {
        console.log(isActivee)
        setIsActivee(false)
    }, [])

    return (
        <NavLink
            to={to}

            className={({ isActive }) => { isActive ? setIsActivee(true) : setIsActivee(false); return `btn border-0 flex flex-col gap-0 hover:bg-transparent text-paragraph hover:text-violet-600 ${isActive ? " bg-transparent" : "bg-transparent"}` }}
            onMouseEnter={() => setIsActivee(true)}
            onMouseLeave={() => setIsActivee(false)}
        >
            <div className={className || "text-white"}>
                {label}
            </div>


            <motion.div
                initial={{ width: "10%", opacity: 0 }}
                animate={isActivee ? { width: "100%", opacity: 1 } : { width: "10%", opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-1 mt-1 w-full bg-violet-500 bg-opacity-50 backdrop-blur-lg rounded-lg"
            ></motion.div>
        </NavLink>
    )
}
