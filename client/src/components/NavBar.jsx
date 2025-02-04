import devhub from "../assets/devhub3.png";
import { MdBusinessCenter } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
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
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="Events"
            className="text-sm font-poppins md:text-base hover:text-[#4C1A76]"
          >
            Events
          </Link>
          <Link
            to="/mentorship"
            className="text-sm font-poppins md:text-base hover:text-[#4C1A76]"
          >
            Mentorship
          </Link>
          <Link
            to="/DeveloperMarket"
            className="text-sm font-poppins md:text-base hover:text-[#4C1A76]"
          >
            Developer-Market
          </Link>
          <Link
            to="Community"
            className="text-sm font-poppins md:text-base hover:text-[#4C1A76]"
          >
            Community
          </Link>
        </div>

        {/* Login Button */}
        <div className="flex items-center gap-4">
          <div>
            <button className="bg-[#4C1A76] text-white py-2 px-4 border rounded-full hover:bg-[#F76C21]">
             <Link to="/createAccount"> Sign in </Link>
            </button>
          </div>
          <div className="h-12 border-l border-gray-400"></div>
          <div>
            <button className="bg-[#4C1A76] text-white py-2 px-5 border rounded-full hover:bg-[#F76C21] flex items-center gap-2">
              For business
              <div className="text-2xl">
                <MdBusinessCenter />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
