import NavBar2 from "../components/NavBar2"
import { useState } from "react";
import Footer from "../components/Footer";

const DeveloperMarketPlace = ()=>{
const currentPage = "DeveloperMarket"; 
  // State for Dropdowns
  const [selectedEvent, setSelectedEvent] = useState("Problem Type");
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState(" choose Language");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  const [ selectedPrice , setSelectedPrice] = useState("Domain") ; 
  const [isPriceDropdownOpen, setIsPricedropDownOpen] = useState(false)
  const eventOptions = [
    "DSA Problems",
    "Coding Problems",
    "Open Source Problems",
     "Project Problems"
  ];

  const locationOptions = [
    "Python",
    "Java",
    "C++",
    "Javascript",
  ];
  const priceOptions = [
    "AI/ML",
    "Web Developement",
    "Android Development",
    "other",
  ] ;
  // Dropdown Handlers
  const toggleDropdown = (type) => {
    if (type === "event") {
      setIsEventDropdownOpen(!isEventDropdownOpen);
      setIsLocationDropdownOpen(false); // Close the other dropdown
    } else if (type === "location") {
      setIsLocationDropdownOpen(!isLocationDropdownOpen);
      setIsEventDropdownOpen(false); // Close the other dropdown
    } else if (type === "price") {
      setIsPricedropDownOpen(!isPriceDropdownOpen);
      setIsLocationDropdownOpen(false); // Close the other dropdown
    }
  };
  
  const handleOptionClick = (type, option) => {
    if (type === "event") {
      setSelectedEvent(option);
      setIsEventDropdownOpen(false);
    } else if (type === "location") {
      setSelectedLocation(option);
      setIsLocationDropdownOpen(false);
    } else if (type === "price") {
      setSelectedPrice(option);
      setIsPricedropDownOpen(false);
    }
  };
  

  return (
    <>
      {/* NavBar2 */}
      <NavBar2 currentPage={currentPage} />

      {/* Main Section */}
      <div className="flex justify-between mt-[8vmin] gap-x-[10vmin]">
        {/* Filter Section */}
        <div className="h-[100%] w-[75vmin] bg-white ml-[2vmin]">
          <h1 className="text-center text-[3vmin] font-bold mt-[3vmin]">
            <span className="text-[#4C1A76]">Problem</span> 
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
                focus:outline-none"
            />
          </div>

          {/* Event Type Dropdown */}
          <div className="relative mt-[3vmin]">
            <h1 className="text-[2.5vmin] font-medium text-gray-700 ml-[2vmin]">
              Type : 
            </h1>
            <div
              onClick={() => toggleDropdown("event")}
              className="cursor-pointer bg-white border border-gray-300 w-[48vmin] h-[6.5vmin] mt-[2vmin] ml-[2vmin] text-gray-700 rounded-md px-[1vmin] py-[1.2vmin]"
            >
              {selectedEvent}
            </div>
            {isEventDropdownOpen && (
              <ul className="bg-white border border-gray-200 mt-2 w-[48vmin] rounded-lg shadow-lg">
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
                Coding Language : 
            </h1>
            <div
              onClick={() => toggleDropdown("location")}
              className="cursor-pointer bg-white border border-gray-300 w-[48vmin] h-[6.5vmin] mt-[2vmin] ml-[2vmin] text-gray-700 rounded-md px-[1vmin] py-[1.2vmin]"
            >
              {selectedLocation}
            </div>
            {isLocationDropdownOpen && (
              <ul className="bg-white border border-gray-200 mt-2 w-[48vmin] rounded-lg shadow-lg">
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
          {/* Price Dropdown */}
          <div className="relative mt-[3vmin]">
  <h1 className="text-[2.5vmin] font-medium text-gray-700 ml-[2vmin]">
    Domain : 
  </h1>
  <div
    onClick={() => toggleDropdown("price")}
    className="cursor-pointer bg-white border border-gray-300 w-[48vmin] h-[6.5vmin] mt-[2vmin] ml-[2vmin] text-gray-700 rounded-md px-[1vmin] py-[1.2vmin]"
  >
    {selectedPrice}
  </div>
  {isPriceDropdownOpen && (
    <ul className="bg-white border border-gray-200 mt-2 w-[48vmin] rounded-lg shadow-lg">
      {priceOptions.map((option, index) => (
        <li
          key={index}
          onClick={() => handleOptionClick("price", option)}
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
            <h1 className="text-[3vmin] font-bold mt-[3vmin] uppercase">
              Welcome to Developer Market 
            </h1>
            {/* Event Cards */}
            <div className="flex flex-wrap justify-start gap-4 mt-4">
              <div className="flex-shrink-0 w-full h-[50vmin] bg-white rounded-lg shadow-md">
                {/* Card Content */}
              </div>
              <div className="flex-shrink-0 w-full h-[50vmin] bg-white rounded-lg shadow-md">
                {/* Card Content */}
              </div>
              <div className="flex-shrink-0 w-full h-[50vmin] bg-white rounded-lg shadow-md">
                {/* Card Content */}
              </div>
              <div className="flex-shrink-0 w-full h-[50vmin] bg-white rounded-lg shadow-md">
                {/* Card Content */}
              </div>
              <div className="flex-shrink-0 w-full h-[50vmin] bg-white rounded-lg shadow-md">
                {/* Card Content */}
              </div>
              <div className="flex-shrink-0 w-full h-[50vmin] bg-white rounded-lg shadow-md">
                {/* Card Content */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
    
)}
export default DeveloperMarketPlace  ; 