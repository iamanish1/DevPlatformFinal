/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar2 from "../components/NavBar2";
import Footer from "../components/Footer";

const EventSection = () => {
  const currentPage = "event";

  // State to store fetched events
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedHeading, setSelectedHeading] = useState("Events");

  // Submenu categories (ensure they match backend eventType)
  const menuItems = [
    "Bug Hunt Arena",
    "Hackathon",
    "Debugging Duel",
    "Code Battle",
    "Speed Guidance",
    "Quiz",
  ];

  // Function to convert menu item to API-friendly format
  const formatEventType = (heading) =>
    heading.toLowerCase().replace(/\s+/g, "_");

  // Fetch events whenever selectedHeading changes
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);

      // Build API URL dynamically
      const eventType = formatEventType(selectedHeading);
      const API_URL =
        selectedHeading === "Events"
          ? "http://localhost:8000/api/getEvent/general"
          : `http://localhost:8000/api/getEvent/general/${eventType}`;

      console.log("Fetching from:", API_URL);

      try {
        const response = await axios.get(API_URL);
        console.log("API RESPONSE DATA", response.data);

        if (Array.isArray(response.data)) {
          setEvents(response.data);
        } else if (response.data.events) {
          setEvents(response.data.events);
        } else {
          console.error("Unexpected API response format:", response.data);
          setError("Invalid data format received.");
        }
      } catch (err) {
        setError("Failed to fetch events. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [selectedHeading]); // Re-run fetch when category changes

  return (
    <>
      <NavBar2 currentPage={currentPage} />

      {/* Sub-menu bar */}
      <div className="w-full h-[10vmin] bg-[#4C1A76] flex justify-evenly items-center shadow-md">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`bg-white h-[5.5vmin] w-[25vmin] flex items-center justify-center rounded-[4vmin] shadow-md hover:bg-[#F76C21] cursor-pointer 
              ${selectedHeading === item ? "bg-[#F76C21] text-black" : ""}`}
            onClick={() => setSelectedHeading(item)}
          >
            <span className="text-[2vmin] font-poppins uppercase">{item}</span>
          </div>
        ))}
      </div>

      {/* Main Section */}
      <div className="flex justify-between mt-[3vmin] gap-x-[10vmin]">
        {/* Event Section */}
        <div className="w-full">
          <h1 className="text-[4.5vmin] font-bold mt-[1.5vmin] uppercase mb-[4vmin] ml-[3vmin]">
            {selectedHeading}
          </h1>

          {/* Loading and Error Handling */}
          {loading && (
            <p className="text-center text-gray-600">Loading events...</p>
          )}
          {error && <p className="text-center text-red-500">{error}</p>}

          <div className="flex flex-wrap justify-start gap-[4vmin] ml-[5vmin]">
            {/* Display Events */}
            {events.length > 0
              ? events.map((event) => (
                  <EventCard
                    key={event._id}
                    event={event}
                  />
                ))
              : !loading && (
                  <p className="text-gray-500 text-center">
                    No events available for {selectedHeading}
                  </p>
                )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Event Card Component
const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    console.log("Event Object:", event); // Debug log
    console.log("Navigating to ID:", event.refrenceId || event._id); // Ensure ID exists
  
    if (!event.refrenceId && !event._id) {
      console.error("Event does not have a valid reference ID!");
      return;
    }
  
    // Navigate with correct ID (change to _id if refrenceId is missing)
    navigate(`/Events/${event.refrenceId || event._id}`);
  };
  
 const maxWords = 10; // Set your desired word limit
  const truncatedDescription = event.eventDescription
    .split(" ")
    .slice(0, maxWords)
    .join(" ") + (event.eventDescription.split(" ").length > maxWords ? "..." : "");
  return (
    
    <div
     onClick={() => {
  console.log("Event object:", event); // Log the entire event object to check its structure
  handleClick(event);
}}
      className="flex-shrink-0 w-[45vmin] h-[60vmin] bg-white rounded-lg shadow-md cursor-pointer"
    >
      <div className="p-4">
        <h2 className="font-bold text-xl">{event.eventTitle}</h2>
        <p className="mt-2">{truncatedDescription}</p>
      </div>
    </div>
  );
};

export default EventSection;
