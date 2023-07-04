import { Swiper,SwiperSlide } from "swiper/react";
// @ts-ignore
import { Navigation } from "swiper";
import "swiper/css/navigation"
interface HeroCarouselProps {
    children: React.ReactNode[];
    className?: string;
}




export default function HeroCarousel({ children, className }: HeroCarouselProps) {
    return (<div
        >
        <Swiper
        modules={[Navigation]}
        autoplay
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
        >
            {
                children.map((child) => {
                    return <SwiperSlide>
                        {child}
                    </SwiperSlide>
                })
            }


        </Swiper>
    </div>)
}