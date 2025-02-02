import { useState } from "react";
import NavBar2 from "../components/NavBar2";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const EventSection = () => {
  const currentPage = "event";
  // State for Dropdowns
  const [selectedEvent, setSelectedEvent] = useState("Event Type");
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState("Choose Location");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [selectHeading , setSelectheading] = useState("Events")
  const eventOptions = [
    "Tech Event",
    "Hackathon",
    "Ideathon",
    "Networking Event",
    "College Fest",
    "Webinar",
  ];

  const locationOptions = [
    "Delhi",
    "Greater Noida",
    "Haryana",
    "Gurugram",
    "Other",
  ];

  // Dropdown Handlers
  const toggleDropdown = (type) => {
    if (type === "event") {
      setIsEventDropdownOpen(!isEventDropdownOpen);
      setIsLocationDropdownOpen(false); // Close the other dropdown
    } else if (type === "location") {
      setIsLocationDropdownOpen(!isLocationDropdownOpen);
      setIsEventDropdownOpen(false); // Close the other dropdown
    }
  };

  const handleOptionClick = (type, option) => {
    if (type === "event") {
      setSelectedEvent(option);
      setIsEventDropdownOpen(false);
    } else if (type === "location") {
      setSelectedLocation(option);
      setIsLocationDropdownOpen(false);
    }

  };

  const handelMenueItemClick = (heading) => { 
    setSelectheading(heading)
  }

  return (
    <>
      {/* NavBar2 */}
      <NavBar2 currentPage={currentPage} />
      {/* Sub-menue bar for Event section  */}
      <div className="w-full h-[10vmin] bg-[#4C1A76]  flex justify-evenly items-center shadow-md">
        <div
          className="bg-white h-[5.5vmin] w-[25vmin] flex items-center justify-center rounded-[4vmin]
        shadow-md  hover:bg-[#F76C21]"
         onClick={()=> handelMenueItemClick("Bug Hunt Arena")}
        >
          <Link to="" className="text-[2vmin] font-poppins uppercase">
            Bug Hunt Arena
          </Link>
        </div>
        <div
          className="bg-white h-[5.5vmin] w-[25vmin] flex items-center justify-center rounded-[4vmin]
          shadow-md   hover:bg-[#F76C21]"
          onClick={()=> handelMenueItemClick("Hackathon")}
        >
          <Link to="" className="text-[2vmin] font-poppins uppercase">
            Hackathon
          </Link>
        </div>
        <div
          className="bg-white h-[5.5vmin] w-[25vmin] flex items-center justify-center rounded-[4vmin]
          shadow-md   hover:bg-[#F76C21]"
          onClick={()=> handelMenueItemClick("Debugging Duel")}
        >
          <Link to="" className="text-[2vmin] font-poppins uppercase">
            Debugging Duel
          </Link>
        </div>
        <div
          className="bg-white h-[5.5vmin] w-[25vmin] flex items-center justify-center rounded-[4vmin]
          shadow-md   hover:bg-[#F76C21]"
          onClick={()=> handelMenueItemClick("Code-battel")}
        >
          <Link to="" className="text-[2vmin] font-poppins uppercase">
            Code-battel
          </Link>
        </div>
        <div
          className="bg-white h-[5.5vmin] w-[25vmin] flex items-center justify-center rounded-[4vmin]
           shadow-md   hover:bg-[#F76C21]"
           onClick={()=> handelMenueItemClick("speed-Guidance")}
        >
          <Link to="" className="text-[2vmin] font-poppins uppercase">
            speed-Guidance
          </Link>
        </div>
        <div
          className="bg-white h-[5.5vmin] w-[25vmin] flex items-center justify-center rounded-[4vmin]
           shadow-md   hover:bg-[#F76C21]"
           onClick={()=> handelMenueItemClick("Quiz")}
           
        >
          <Link to="" className="text-[2vmin] font-poppins uppercase">
            Quiz
          </Link>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex justify-between mt-[8vmin] gap-x-[10vmin]">
        {/* Filter Section */}
        <div className="h-[100%] w-[75vmin] bg-white ml-[2vmin]">
          <h1 className="text-center text-[3vmin] font-bold mt-[3vmin]">
            <span className="text-[#4C1A76]">Event</span>{" "}
            <span className="text-[#F76C21]">Filter</span>
          </h1>

          {/* Date Picker */}
          <div>
            <label
              htmlFor="date"
              className="block text-[2.5vmin] font-medium text-gray-700 ml-[2vmin] mt-[3vmin]"
            >
              Select a date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="block px-2 py-2 w-[48vmin] text-gray-700 border border-gray-300 rounded-md mt-[1.5vmin] ml-[2vmin]
              focus : outline-none"
            />
          </div>

          {/* Event Type Dropdown */}
          <div className="relative mt-[3vmin]">
            <h1 className="text-[2.5vmin] font-medium text-gray-700 ml-[2vmin]">
              Event:
            </h1>
            <div
              onClick={() => toggleDropdown("event")}
              className="cursor-pointer bg-white border border-gray-300 w-[48vmin] h-[6.5vmin] mt-[2vmin] ml-[2vmin] text-gray-700 rounded-md px-[1vmin] py-[1.2vmin]"
            >
              {selectedEvent}
            </div>
            {isEventDropdownOpen && (
              <ul className=" bg-white border border-gray-200 mt-2 w-[48vmin] rounded-lg shadow-lg">
                {eventOptions.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClick("event", option)}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Location Dropdown */}
          <div className="relative mt-[3vmin]">
            <h1 className="text-[2.5vmin] font-medium text-gray-700 ml-[2vmin]">
              Location:
            </h1>
            <div
              onClick={() => toggleDropdown("location")}
              className="cursor-pointer bg-white border border-gray-300 w-[48vmin] h-[6.5vmin] mt-[2vmin] ml-[2vmin] text-gray-700 rounded-md px-[1vmin] py-[1.2vmin]"
            >
              {selectedLocation}
            </div>
            {isLocationDropdownOpen && (
              <ul className=" bg-white border border-gray-200 mt-2 w-[48vmin] rounded-lg shadow-lg">
                {locationOptions.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClick("location", option)}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <button
              className="bg-[#4C1A76] text-white py-2 px-4 border rounded-full
             hover:bg-[#F76C21] w-[48vmin] mt-[6vmin] ml-[2vmin] mb-[3vmin]"
            >
              Apply Filters
            </button>
          </div>
        </div>

        {/* Event Sections */}
        <div className="w-full">
          <div>
            <h1 className="text-[3vmin] font-bold mt-[3vmin] uppercase font ">
              {selectHeading}
            </h1>
            {/* Event Cards */}
            <div className="flex flex-wrap justify-start gap-4 mt-4">
              <div className="flex-shrink-0 w-[45vmin] h-[60vmin] bg-white rounded-lg shadow-md">
                {/* Card Content */}
              </div>
              <div className="flex-shrink-0 w-[45vmin] h-[60vmin] bg-white rounded-lg shadow-md">
                {/* Card Content */}
              </div>
              <div className="flex-shrink-0 w-[45vmin] h-[60vmin] bg-white rounded-lg shadow-md">
                {/* Card Content */}
              </div>
              <div className="flex-shrink-0 w-[45vmin] h-[60vmin] bg-white rounded-lg shadow-md">
                {/* Card Content */}
              </div>
              <div className="flex-shrink-0 w-[45vmin] h-[60vmin] bg-white rounded-lg shadow-md">
                {/* Card Content */}
              </div>
              <div className="flex-shrink-0 w-[45vmin] h-[60vmin] bg-white rounded-lg shadow-md">
                {/* Card Content */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventSection;
