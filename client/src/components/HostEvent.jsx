import EventBaner from "../assets/EventBanner.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const HostEventSection = () => {
  return (
    <>
      <div
        className="w-full h-[100vmin] bg-[#4C1A76] mt-[14vmin] mb-[10vmin] border rounded-[5vmin] flex justify-between items-center
        gap-2"
      >
        <div className="w-full h-full flex flex-col justify-center">
          <div className="ml-[5vmin] mb-[10vmin]">
            <h1 className="text-[6vmin] uppercase text-white font-poppins font-bold">
              Host Your Event with Dev Hubs
            </h1>
            <h1 className="text-[6vmin] uppercase text-white font-poppins font-bold">
              Empower Your Vision
            </h1>
            <h1 className="text-[6vmin] uppercase text-white font-poppins font-bold">
              Expand Your Reach
            </h1>
            <h1 className="text-[6vmin] uppercase text-white font-poppins font-bold">
              Grow Your Community with Us
            </h1>
            <p className="text-[2.5vmin] font-sans text-white mt-[5vmin]">
              Unleash the power of our platform to grow your community, connect
              with like-minded innovators, and make every event unforgettable.
              Lets build together.....
            </p>
          </div>

          <button
            className="h-[10vmin] w-[80vmin] text-black bg-white
             border rounded-[3vmin] text-[2.5vmin] text-center ml-[15.2vmin] mb-[5vmin] shadow-md
            font-bold uppercase flex fkex-row justify-center items-center"
          >
            Register Your Event
            <FaLongArrowAltRight className="ml-[1.5vmin] text-[2.5vmin] font-bold" />
          </button>
        </div>
        <div className="w-full h-full bg-amber-500  rounded-[2vmin] ">
          <img
            src={EventBaner}
            alt=""
            className="h-full w-full object-cover border rounded-[2vmin] 
            shadow-md"
          />
        </div>
      </div>
    </>
  );
};

export default HostEventSection;
