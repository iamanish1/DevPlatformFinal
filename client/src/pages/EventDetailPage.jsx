import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const EventDetail = () => {
  const { refrenceId } = useParams(); // Extract ID from URL
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("🔹 URL ID:", refrenceId); // Debugging ID
    if (!refrenceId) {
      console.error("❌ Event ID is missing from URL!");
      setLoading(false);
      return;
    }

    const fetchEvent = async () => {
      try {
        console.log("🔄 Fetching event...");
        const response = await axios.get(
          `http://localhost:8000/api/getEvent/general/specific/${refrenceId}`
        );

        console.log("✅ Event Data Fetched:", response.data);
        if (response.data.event) {
          setEvent(response.data.event);
        } else {
          console.error("❌ No event found in response!");
        }
      } catch (error) {
        console.error(
          "❌ Error fetching event:",
          error.response?.data || error.message
        );
      } finally {
        console.log("⏹ Setting loading to false...");
        setLoading(false); // Make sure this runs
      }
    };

    fetchEvent();
  }, [refrenceId]);

  if (loading) {
    console.log("⏳ Loading event...");
    return <p>Loading...</p>;
  }

  if (!event) {
    console.log("❌ Event not found!");
    return <p>Event not found!</p>;
  }

  return (
    <div className="flex flex-col min-h-screen w-full items-center bg-white">
      {/* Event Cover Image */}
      <div className="w-full h-[40vmin] bg-gray-300 flex justify-center items-center text-2xl font-bold">
        <img
          src={event.coverImage || "/default-event.jpg"}
          alt="Event Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Event Title & Details */}
      <div className="w-[80%] mt-6 text-center">
        <h1 className="text-[5vmin] font-bold text-[#4C1A76] uppercase">
          {event.eventTitle}
        </h1>
        <p className="text-[2.5vmin] text-gray-600 font-semibold mt-2">
          Hosted by {event.hostedByName || "Unknown Host"}
        </p>
        <p className="text-[2.2vmin] text-gray-500 mt-1">
          Ends in: {event.endDate || "TBD"}
        </p>
      </div>
      <Link to="/participate">
        <button className="mt-6 px-[10vmin] py-[2vmin] bg-[#4C1A76] text-white font-semibold text-[2.5vmin] rounded-[4vmin] shadow-md hover:bg-[#3A125D] transition duration-300">
          Register Now
        </button>
      </Link>

      {/* Category Tags */}
      <div className="flex gap-4 mt-4">
        {event.categories?.map((category, index) => (
          <div
            key={index}
            className="h-[7vmin] px-6 py-2 rounded-full border border-[#4C1A76] text-[2.3vmin] uppercase font-semibold flex items-center justify-center bg-[#F9F4FC] text-[#4C1A76]"
          >
            {category}
          </div>
        ))}
      </div>

      {/* Navigation Menu */}
      <div className="w-full flex justify-center border-b-2 mt-6 sticky top-0 bg-white py-3 z-10 shadow-sm">
        {["Details", "Process", "Rules", "Prizes"].map((item, index) => (
          <div
            key={index}
            className="mx-4 cursor-pointer py-2 px-4 text-gray-700 hover:text-[#4C1A76] font-medium transition duration-300"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Event Sections */}
      <div className="w-[80%] mt-8 space-y-8">
        {/* Details Section */}
        <div className="text-left">
          <h2 className="text-[3.5vmin] font-semibold text-[#4C1A76] mb-2">
            Details
          </h2>
          <p className="text-[2.5vmin] text-gray-600">
            {event.eventDescription}
          </p>
        </div>

        {/* Process Section */}
        <div className="text-left">
          <h2 className="text-[3.5vmin] font-semibold text-[#4C1A76] mb-2">
            Process
          </h2>
          <p className="text-[2.5vmin] text-gray-600">
            {event.eventProcess}
          </p>
        </div>

        {/* Rules Section */}
        <div className="text-left">
          <h2 className="text-[3.5vmin] font-semibold text-[#4C1A76] mb-2">
            Rules
          </h2>
          <div className="mt-4">
            {event.eventRules?.map((rule, index) => (
              <div
                key={rule._id}
                className="flex justify-between py-2 border-b"
              >
                <span className="text-[2.5vmin] font-medium text-gray-700">
                  {index + 1}. {rule.rules}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Prizes Section */}
        <div className="text-left">
          <h2 className="text-[3.5vmin] font-semibold text-[#4C1A76] mb-2">
            Prizes
          </h2>
          <div className="mt-4">
            {event.eventPrize?.map((prize, index) => (
              <div key={index} className="flex justify-between py-2 border-b">
                <span className="text-[2.5vmin] font-medium text-gray-700">
                  {prize.position} Position
                </span>
                <span className="text-[2.5vmin] text-[#4C1A76] font-semibold">
                  {prize.reward}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
