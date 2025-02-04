import Footer from "../components/Footer";
import NavBar2 from "../components/NavBar2";
import { FaCalendar } from "react-icons/fa";

const BugHuntArena = () => {
  return (
    <>
      {/* Nav Bar */}
      <NavBar2 />

      {/* Banner - Event Registration Page */}
      <div className="h-[60vmin] w-full bg-white mt-[5vmin]">hii</div>

      {/* Main Content Section (Fixed Page Height) */}
      <div className="h-screen w-full bg-[#F5F5F5] flex justify-between gap-[3vmin] px-[6vmin] overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-[3vmin]">
          <div className="bg-white h-[90vmin] mt-[4vmin] rounded-[3vmin]">
            {/* FOr Event title and For the Banner Image ; */}
            <div className="flex gap-[5vmin]">
              <div className="bg-orange-200 h-[25vmin] w-[25vmin] ml-[4vmin] mt-[4vmin] mb-[4vmin] rounded-[2vmin]">
                cover Image of the event
              </div>
              <div className="flex flex-col mt-[3.5vmin]">
                <div className="text-[6vmin] uppercase font-poppins font-bold">
                  Code King Bug Hunt Arena
                </div>
                <div className="text-[2.5vmin] font-sans">
                  <p>Hosted-by-Devhubs Platfrom </p>
                </div>
                <div className="flex mt-[3vmin] gap-[3vmin]">
                  <div
                    className="h-[7vmin] w-[20vmin] rounded-[5vmin] flex justify-center items-center
                    border border-[#4C1A76] font-sans text-[2.3vmin] uppercase font-semibold"
                  >
                    MERN Stack
                  </div>
                  <div
                    className="h-[7vmin] w-[20vmin] rounded-[5vmin] flex justify-center items-center
                    border border-[#4C1A76] font-sans text-[2.3vmin] uppercase font-semibold"
                  >
                    Bug Hunting
                  </div>
                  <div
                    className="h-[7vmin] w-[20vmin] rounded-[5vmin] flex justify-center items-center
                    border border-[#4C1A76] font-sans text-[2.3vmin] uppercase font-semibold"
                  >
                    Coding Skill
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Submenu (Does not move while scrolling) */}
          <div className="bg-white h-[30vmin] sticky top-0 z-10 flex 
          gap-[4vmin] justify-evenly items-center rounded-[3vmin]">
            <div
              className="h-[7vmin] w-[20vmin] rounded-[5vmin] flex justify-center items-center
                    font-sans text-[2.3vmin] uppercase font-semibold"
            >
             Details
            </div>
            <div
              className="h-[7vmin] w-[20vmin] rounded-[5vmin] flex justify-center items-center
                   font-sans text-[2.3vmin] uppercase font-semibold"
            >
             Proccess
            </div>
            <div
              className="h-[7vmin] w-[20vmin] rounded-[5vmin] flex justify-center items-center
                   font-sans text-[2.3vmin] uppercase font-semibold"
            >
             Rules
            </div>
            <div
              className="h-[7vmin] w-[20vmin] rounded-[5vmin] flex justify-center items-center
                   font-sans text-[2.3vmin] uppercase font-semibold"
            >
             Prize
            </div>
            <div
              className="h-[7vmin] w-[20vmin] flex justify-center items-center
              font-sans text-[2.3vmin] uppercase font-semibold"
            >
              Criteria
            </div>
            <div
              className="h-[7vmin] w-[20vmin] flex justify-center items-center
              font-sans text-[2.3vmin] uppercase font-semibold"
            >
               Reviews
            </div>
          </div>

          {/* Scrollable Detail Section (Auto-scrolls when user scrolls the page) */}
          <div
            className="bg-white h-[120vmin] overflow-y-auto p-[2vmin] no-scrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            {/* This part is scrollable */}
            <div>
              <div>
                 <h1>What is <span>Bug Hunt Arena </span>?</h1>
              </div>
            </div>
          
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-[4vmin]">
          <div className="h-[40vmin] w-[50vmin] bg-white mt-[4vmin] ml-[0.5vmin]">
            Event Register Section
          </div>
          <div className="h-[30vmin] w-[50vmin] bg-white mrl-[0.5vmin]">
            hii
          </div>
        </div>
      </div>

      {/* Footer (Always Visible) */}
      <Footer />

      {/* Hide Scrollbar CSS */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </>
  );
};

export default BugHuntArena;
