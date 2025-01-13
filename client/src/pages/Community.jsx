import NavBar2 from "../components/NavBar2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import the autoplay CSS
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import the Autoplay module
import Footer from "../components/Footer";

const CommunitySection = () => {
  const currentPage = "community";
  return (
    <>
      <div>
        <NavBar2 currentPage={currentPage} />
      </div>
      <div className="w-full h-[65vmin] mt-[5vmin]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000, // Delay in milliseconds (3 seconds)
            disableOnInteraction: false, // Keep autoplay running after user interaction
          }}
          className="h-full"
        >
          <SwiperSlide>
            <div className="h-full w-full bg-white flex items-center justify-center">
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full bg-white flex items-center justify-center">
              Slide 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full bg-white flex items-center justify-center">
              Slide 3
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* user Can see theri community in this section */}
      <div>
        <div>
          <h1 className="text-[4vmin] font-poppins uppercase mt-[4vmin] ml-[2vmin] font-bold">
            <span className="text-[#F76C21]"> Joined </span>
            <span className="text-[#4C1A76]">Communities</span>
          </h1>
        </div>
        <div className="flex gap-4 justify-center mt-[4vmin]">
          <div
            className="h-[40vmin] w-[70vmin] bg-white
          shadow-md rounded-[2vmin] "
          ></div>
          <div
            className="h-[40vmin] w-[70vmin] bg-white
          shadow-md rounded-[2vmin] "
          ></div>
          <div
            className="h-[40vmin] w-[70vmin] bg-white
          shadow-md rounded-[2vmin]"
          ></div>
        </div>
        {/* user can see the featured community Events here  */}
        <div>
          <div>
            <h1 className="text-[4vmin] font-poppins uppercase mt-[4vmin] ml-[2vmin] font-bold">
              <span className="text-[#F76C21]">Community</span>{" "}
              <span className="text-[#4C1A76]">Event</span>
            </h1>
          </div>
          <div className="flex gap-4 justify-center mt-[4vmin]">
            <div
              className="h-[40vmin] w-[70vmin] bg-white
          shadow-md rounded-[2vmin] "
            ></div>
            <div
              className="h-[40vmin] w-[70vmin] bg-white
          shadow-md rounded-[2vmin] "
            ></div>
            <div
              className="h-[40vmin] w-[70vmin] bg-white
          shadow-md rounded-[2vmin]"
            ></div>
          </div>
          {/* user can see the featured community discussions here  */}
          <div className="w-full h-[50vmin] mt-[5vmin]">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module
              navigation
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 4000, // Delay in milliseconds (3 seconds)
                disableOnInteraction: false, // Keep autoplay running after user interaction
              }}
              className="h-full"
            >
              <SwiperSlide>
                <div className="h-full w-full bg-white flex items-center justify-center">
                  Slide 1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full w-full bg-white flex items-center justify-center">
                  Slide 2
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full w-full bg-white flex items-center justify-center">
                  Slide 3
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* uuser can see the upcoming and trendy communites in diffrent domains   */}
        <div>
          <div>
            <h1 className="text-[4vmin] font-poppins uppercase mt-[4vmin] ml-[2vmin] font-bold">
              <span className="text-[#F76C21]">Trendy</span>{" "}
              <span className="text-[#4C1A76]">Community</span>
            </h1>
          </div>
          <div className="flex gap-4 justify-center mt-[4vmin]">
            <div
              className="h-[40vmin] w-[70vmin] bg-white
          shadow-md rounded-[2vmin] "
            ></div>
            <div
              className="h-[40vmin] w-[70vmin] bg-white
          shadow-md rounded-[2vmin] "
            ></div>
            <div
              className="h-[40vmin] w-[70vmin] bg-white
          shadow-md rounded-[2vmin]"
            ></div>
          </div>
          <div>
            <div>
              <h1 className="text-[4vmin] font-poppins uppercase mt-[4vmin] ml-[2vmin] font-bold">
                <span className="text-[#F76C21]">Upcoming</span>{" "}
                <span className="text-[#4C1A76]">Community</span>
              </h1>
            </div>
            <div className="flex gap-4 justify-center mt-[4vmin]">
              <div
                className="h-[40vmin] w-[70vmin] bg-white
          shadow-md rounded-[2vmin] "
              ></div>
              <div
                className="h-[40vmin] w-[70vmin] bg-white
          shadow-md rounded-[2vmin] "
              ></div>
              <div
                className="h-[40vmin] w-[70vmin] bg-white
          shadow-md rounded-[2vmin]"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CommunitySection;
