/* eslint-disable no-unused-vars */
import { useState } from "react";
import devhub from "../assets/devhub3.png";

const EventSection = () => {
  const [activeSecti, setActiveSection] = useState(""); // Track active section

  const handleScroll = (sectionId) => {
    setActiveSection(sectionId); // Update the active section state
    const section = document.getElementById(sectionId); // Get the section by its ID
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" }); // Scroll to the section smoothly
    }
  };

  return (
    <>
      <div className="container bg-[#F5F5F5] shadow-xl max-w-full h-[12vh]">
        <div className="flex justify-between items-center h-full px-4 md:px-8">
          {/* Logo and Brand Name */}
          <div className="flex items-center gap-2">
            {/* Logo */}
            <div className="h-[8.2vh] w-[8.2vh] flex justify-center items-center">
              <img
                src={devhub}
                alt="DevHubs Logo"
                className="h-full w-auto object-contain border rounded-full"
              />
            </div>
            {/* Brand Name */}
            <h1 className="text-[#4C1A76] text-[3.5vmin] md:text-[4vmin] font-sans font-bold">
              <span className="text-[#F76C21]">
                <span className="text-[#F76C21] text-[5vmin]">D</span>ev
              </span>
              <span className="text-[#4C1A76] text-[5vmin]">H</span>ubs
            </h1>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-6">
            <li onClick={() => handleScroll("fest")} className="cursor-pointer">
              Fest
            </li>
            <li onClick={() => handleScroll("workshop")} className="cursor-pointer">
              Workshop
            </li>
            <li onClick={() => handleScroll("network")} className="cursor-pointer">
              Networking
            </li>
            <li onClick={() => handleScroll("tech")} className="cursor-pointer">
              Tech
            </li>
            <li onClick={() => handleScroll("quiz")} className="cursor-pointer">
              Quiz
            </li>
            <li onClick={() => handleScroll("social")} className="cursor-pointer">
              Social
            </li>
          </ul>

          {/* Login Button */}
          <div className="flex items-center gap-4">
            <div>
              <button className="bg-[#4C1A76] text-white py-2 px-4 border rounded-full hover:bg-[#F76C21]">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-y-[15vmin] px-4 md:px-8">
        <div id="fest" className="py-10">
          <h1 className="text-xl font-bold">This is my Fest section</h1>
        </div>
        <div id="workshop" className="py-10">
          <h1 className="text-xl font-bold">This is my Workshop section</h1>
        </div>
        <div id="network" className="py-10">
          <h1 className="text-xl font-bold">This is my Networking section</h1>
        </div>
        <div id="tech" className="py-10">
          <h1 className="text-xl font-bold">This is my Tech section</h1>
        </div>
        <div id="quiz" className="py-10">
          <h1 className="text-xl font-bold">This is my Quiz section</h1>
        </div>
        <div id="social" className="py-10">
          <h1 className="text-xl font-bold">This is my Social section</h1>
        </div>
      </div>
    </>
  );
};

export default EventSection;
