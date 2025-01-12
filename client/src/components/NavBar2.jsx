import devhub from "../assets/devhub3.png";
import { GoSearch } from "react-icons/go";
import PropTypes from "prop-types";


const NavBar2 = ({ currentPage }) => {
  // Define text for different pages
  const buttonText =
  currentPage === "coding-room"
    ? "Create Coding Room"
    : currentPage === "community"
    ? "Create Community"
    : currentPage === "carrier"
    ? "Host Mentorship"
    : currentPage === "problem"
    ? "Host Problems"
    : currentPage === "event"
    ? "List Your Event"
    : "List Your Event";

  const placeholderText =
    currentPage === "coding-room"
      ? "Search for a coding Room"
      : currentPage === "community"
      ? "Search in Community"
      : currentPage === "carrier"
      ? "Search Mentorship for you "
      : currentPage === "problem"
      ? "Search Trending Problems"
      : "Search Your Event";

  return (
    <>
      {/* Header Section */}
      <div className="container bg-[#F5F5F5] shadow-xl max-w-full h-[12vh]">
        <div className="flex justify-between items-center h-full px-4 md:px-8">
          <div className="flex items-center justify-center gap-2">
            <div className="h-[8.2vh] w-[8.2vh] flex justify-center items-center">
              <img
                src={devhub}
                alt="DevHubs Logo"
                className="h-full w-auto object-contain border rounded-full"
              />
            </div>
            <h1 className="text-[#4C1A76] text-[3.5vmin] md:text-[4vmin] font-sans font-bold">
              <span className="text-[#F76C21] text-[5vmin]">D</span>ev
              <span className="text-[#4C1A76] text-[5vmin]">H</span>ubs
            </h1>
          </div>
          <div className="flex items-center">
            {/* Search Bar */}
            <input
              type="text"
              placeholder={placeholderText}
              className="text-[2.4vmin] font-poppins w-[75vmin] h-[8vmin] rounded-bl-[2vmin]
              rounded-tl-[2vmin] px-2 border border-gray-300 focus:outline-none focus:ring-0"
            />
            <button
              className="h-[8vmin] w-[13vmin] bg-[#4C1A76]
            rounded-br-[2vmin] rounded-tr-[2vmin] flex justify-center items-center"
            >
              <GoSearch className="text-white font-bold text-[3.5vmin]" />
            </button>
          </div>
          <div className="flex">
            <button className="bg-[#4C1A76] text-white h-[8vmin] w-[8vmin] border rounded-full hover:bg-[#F76C21]"></button>
            <div className="w-[0.5vmin] bg-gray-300 h-[7vmin] mr-[1vmin] ml-[1vmin]"></div>
            <div className="flex items-center">
              <button
                className="h-[6.5vmin] w-[28vmin] bg-[#4C1A76] text-white 
          font-poppins uppercase font-bold text-[2vmin] rounded-[2.8vmin] ml-[1.5vmin]"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};

  // PropTypes validation for the currentPage prop to ensure it's one of the allowed values
NavBar2.propTypes = {
    currentPage: PropTypes.oneOf(["coding-room", "community", "event", "carrier", "problem"]).isRequired,
  };
  
  NavBar2.defaultProps = {
    currentPage: "event",
  };
  

export default NavBar2;
