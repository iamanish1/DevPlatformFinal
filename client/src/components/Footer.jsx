const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-8">
      <div className="container mx-auto px-6 md:flex md:justify-between md:items-center">
        {/* Logo Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-3xl font-bold text-[#F76C21]">Dev Hub</h2>
          <p className="text-sm text-gray-400 mt-2">Empowering Developers, Connecting Ideas</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <ul>
              <li><a href="mailto:contact@devhub.com" className="text-gray-400 hover:text-white">contact@devhub.com</a></li>
              <li><a href="tel:+123456789" className="text-gray-400 hover:text-white">+1 (234) 567-89</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center mt-6 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white mx-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-4">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-4">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-800 text-center py-4 mt-6">
        <p className="text-sm text-gray-400">© 2025 Dev Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;