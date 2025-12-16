import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ items = [], renderItem, slidesPerView = 3 }) => {
    if (!items.length) return null;

    return (
        <div className="relative">
            <Swiper
                className="w-full"
                modules={[Navigation, Pagination]}
                navigation
                pagination={{
                    el: ".custom-pagination",
                    clickable: true,
                }}
                spaceBetween={24}
                slidesPerView={slidesPerView}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: slidesPerView },
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        {renderItem(item)}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* dots */}
            <div className="custom-pagination mt-6 flex justify-center" />
        </div>
    );
};

export default Carousel;
