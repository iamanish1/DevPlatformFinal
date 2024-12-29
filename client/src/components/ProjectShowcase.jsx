import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const ProjectShowcase = () => {
  return (
    <div className="mt-[5vmin] px-[3vmin]">
      {/* Heading */}
      <div className="mb-[4vmin]">
        <h1 className="font-poppins text-[6vmin] uppercase font-extrabold text-[#4C1A76]">
          <span className="text-[#F76C21]">Best</span> Build
        </h1>
      </div>

      {/* Swiper Component */}
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          slidesPerView={3} // Show 3 cards at a time
          spaceBetween={30} // Space between cards
          loop={true}
          className="w-full"
        >
          {[...Array(6)].map((_, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-[40vmin] w-full bg-[#F5F5F5]
                flex items-center justify-center rounded-xl shadow-lg hover:scale-105 transform 
                transition-transform duration-300"
              >
                <p className="text-white font-bold text-[3vmin]">
                  Event {index + 1}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectShowcase;
