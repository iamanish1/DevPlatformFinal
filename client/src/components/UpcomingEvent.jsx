import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Event from "../assets/Event2.jpg";

const UpcomingEvent = () => {
  return (
    <div className="mt-[5vmin] px-[2vmin]">
      {/* Heading */}
      <div className="mb-[4vmin] mt-[5vmin]">
        <h1 className="font-poppins text-[6vmin] uppercase font-extrabold text-[#4C1A76]">
          <span className="text-[#F76C21]">Upcoming</span> Events
        </h1>
      </div>

      {/* Swiper Component */}
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          slidesPerView={4} // Show 3 cards at a time
          spaceBetween={30} // Space between cards
          loop={true}
          className="w-full"
        >
          {[...Array(10)].map((_, index) => (
            <SwiperSlide key={index}>
              <div
                className=" w-full  bg-white
                flex items-center justify-center flex-col rounded-xl shadow-lg 
                  "
              >
                <div className=" w-full bg-slate-300 rounded-xl">
                  <img src={Event} alt=""
                   className="h-full w-full object-cover 
                   border rounded-xl"
                   />
                </div>
                <div>
                  <h2 className="text-black font-bold text-[3vmin] mt-[3vmin] text-center">
                    Event {index + 1}
                  </h2>
                  <p className="text-[2.5vmin] mt-[2vmin] ml-[1vmin] mr-[1vmin]
                    font-sans text-black text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    pulvinar, arcu id consectetur lobortis, mauris est consectetur
                    velit, at ultricies felis ipsum ac nunc. 
                  </p>
                </div>
                <button className="bg-[#4C1A76] h-[8vmin] w-[30vmin]
                text-white font-poppins text-[3vmin] rounded-[5vmin] mt-[4vmin] mb-[5vmin]
                 hover:bg-[#F76C21]">
                  Get passes
                </button>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UpcomingEvent