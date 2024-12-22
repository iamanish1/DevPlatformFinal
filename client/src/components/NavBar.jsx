import devhub from '../assets/devhub3.png';

const NavBar = () => {
  return (
    <div className="container bg-[#F5F5F5] shadow-xl max-w-full h-[12vh]">
      <div className="flex justify-between items-center h-full px-4 md:px-8">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="h-[8.2vh] w-[8.2vh] flex justify-center items-center ">
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
          <a href="#" className="text-sm md:text-base hover:text-[#4C1A76]">Events</a>
          <a href="#" className="text-sm md:text-base hover:text-[#4C1A76]">Coding-room</a>
          <a href="#" className="text-sm md:text-base hover:text-[#4C1A76]">Problems</a>
          <a href="#" className="text-sm md:text-base hover:text-[#4C1A76]">Career-guidance</a>
          <a href="#" className="text-sm md:text-base hover:text-[#4C1A76]">Community</a>
        </div>

        {/* Login Button */}
        <div>
          <button className="bg-[#4C1A76] text-white py-2 px-4 rounded hover:bg-[#F76C21]">
            Login
          </button>
        </div>
      </div>
</div>
  );
};

export default NavBar;