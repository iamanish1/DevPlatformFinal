import devhub from "../assets/devhub3.png";
import { GoSearch } from "react-icons/go";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";

const NavBar2 = ({ currentPage }) => {
  // Define text for different pages
  const { setIsAuthenticated } = useAuth(); 
  const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);

  // Profile options
  const profileOptions = [
    { name: "My Profile", route: "/Profile" },
    { name: "Events", route: "/Events" },
    { name: "Community", route: "/Community" },
    { name: "Logout", route: "/" },
  ];
  const handleLogout = async () => {
    try {
      // Send logout request to the backend
      const response = await axios.post(
        "http://localhost:8000/api/logout",
        {},
        {
          withCredentials: true, // Ensures cookies are sent with the request
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Include the token
          },
        }
      );
  
      // Clear token from localStorage
      localStorage.removeItem("authToken");
      localStorage.removeItem("authToken");
      localStorage.removeItem("isAuthenticated");
      sessionStorage.clear();

      setIsAuthenticated(false);
      console.log("User Logged Out Successfully:", response.data.message);
      document.cookie = "authToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC;";

  
      // Redirect user to login or home page (if needed)
      window.location.href = "/"; // Adjust the redirect path based on your app's route
    } catch (error) {
      console.error("Error during logout:", error.response?.data?.message || error.message);
      // Optionally show an error message to the user
      alert("Failed to logout. Please try again.");
    }
  };
  

  // Toggle the profile dropdown visibility
  const toggleDropdown = () => {
    setIsProfileDropDownOpen(!isProfileDropDownOpen);
  };

  // Handle click on profile option
  const handleOptionClick = (option) => {
    if(option.name === "Logout"){
      handleLogout();

    }
    else {
      console.log(option); // Handle profile option click (you can add navigation or other functionality here)
      setIsProfileDropDownOpen(false); // Close dropdown after option is clicked
    }
   
  };
  const buttonText =
      currentPage === "community"
      ? "Create Community"
      : currentPage === "carrier"
      ? "Host Mentorship"
      : currentPage === "problem"
      ? "Host Problems"
      : currentPage === "event"
      ? "List Your Event"
      : "List Your Event";

  const placeholderText =
      currentPage === "community"
      ? "Search in Community"
      : currentPage === "DeveloperMarket"
      ? "Search your product "
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
              <Link to="/">
                <img
                  src={devhub}
                  alt="DevHubs Logo"
                  className="h-full w-auto object-contain border rounded-full"
                />
              </Link>
            </div>
            <Link to="/">
              <h1 className="text-[#4C1A76] text-[3.5vmin] md:text-[4vmin] font-sans font-bold">
                <span className="text-[#F76C21] text-[5vmin]">D</span>ev
                <span className="text-[#4C1A76] text-[5vmin]">H</span>ubs
              </h1>
            </Link>
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
            <button
              className="bg-[#4C1A76] text-white h-[8vmin] w-[8vmin] border rounded-full hover:bg-[#F76C21]
            "
              onClick={toggleDropdown}
            ></button>

            {/* Profile Dropdown Menu */}
            {isProfileDropDownOpen && (
              <div className="absolute top-[11.5vmin] right-[16.5vmin] bg-white border rounded-md shadow-lg w-[15rem] z-10">
                <ul>
                  {profileOptions.map((option, index) => (
                    <Link to={option.route} key={index}>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}

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
  currentPage: PropTypes.oneOf([
    "coding-room",
    "community",
    "event",
    "DeveloperMarket"
  ]).isRequired,
};

NavBar2.defaultProps = {
  currentPage: "event",
};

export default NavBar2;
