
import arrow from '../../assets/icons/arrow-grow.svg';
import { motion } from 'framer-motion';


export interface StatisticCardProps {
    title: string;
    value: string;
    icon: string;
    pic?: string;
    description?: string;
    color?: string;
    iconColor?: string;
    percentage?: string;
    className?: string;
    duration?: number;
}



export default function StatsCard({ title, iconColor, value, icon, className, percentage, duration }: StatisticCardProps) {
    return (
        <>


            <motion.div
                initial={{opacity:0, scale:0.9, y:100}}
                animate={{opacity:1, scale:1, y:0}}
                transition={{duration:duration || 0.2}}
                className={`flex flex-col p-5 justify-around gap-2 ${className}`}>

                <div className="flex  justify-between w-full">
                    <div className="flex flex-col gap-2">
                        <h2 className="lg:text-5xl font-bold">{title}</h2>
                    </div>
                    <div className={`bg-${iconColor ? iconColor : "success"} bg-opacity-50 backdrop-blur-xl p-3 rounded-full`}>
                        <img src={icon} className="w-8 h-8" />
                    </div>



                </div>

                <h1 className='text-6xl font-bold text-center '> + {value}</h1>
                <div className='flex flex-row justify-start items-end gap-5'>
                    <img src={arrow} className="w-10 h-10" />
                    <h2 className="text-3xl text-green-500 font-bold">{percentage + "%" || "100%"}</h2>
                    <h2 className="text-md opacity-70 text-gray-200">Since last 30 days.</h2>
                </div>


            </motion.div>


        </>
    )
}