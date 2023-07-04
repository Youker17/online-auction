import Hero from "../components/Home/Hero";
import image from '../assets/hero.png'
import OnGoingSection from "../components/Home/OnGoingSection";
import users from '../assets/icons/users.svg'
import sales from '../assets/icons/percentage.svg'
import play from '../assets/icons/play.png'
import StatsCard from "../components/Home/StatsCard";
import VideoCard from "../components/Cards/VideoCard";
import {motion} from 'framer-motion'



export default function Landing() {
    return (
        <>
            <div className="h-[90vh]">

                <Hero description="Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam, sequi expedita alias nemo fuga? Aliquam maiores exercitationem adipisci! Laudantium quibusdam inventore cupiditate reprehenderit dolores harum, iure ullam optio quia?"
                    title="Make Selling"
                    catchphrase="More Alive"
                    image={image}
                    
                />
                <motion.div className="flex container flex-wrap flex-row mx-auto h-[35%] gap-6"
                
                >
                <StatsCard title="Users" icon={users} iconColor="success" value="100" percentage="100" color="white" className="bg-violet-300 rounded-3xl bg-opacity-40 backdrop-blur-lg shadow-2xl"
                />
                <StatsCard title="Users" icon={users} iconColor="success" value="100" percentage="100" color="white" className="bg-cyan-200 rounded-3xl  bg-opacity-40 backdrop-blur-lg shadow-2xl"
                />
                <VideoCard
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                    icon={play}
                    link="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                    live={false}
                    image={image}
                    className="bg-blue-900 rounded-3xl lg:w-[54.5%] w-full h-full bg-opacity-40 backdrop-blur-lg shadow-2xl"
                />
                </motion.div>
                <OnGoingSection />
            </div>
        </>
    )
}