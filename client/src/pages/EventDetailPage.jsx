import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom"; 


const EventDetail = () => {
const { refrenceId } = useParams(); // Fetch from URL
const [event, setEvent] = useState(null);
const [eventId, setEventId] = useState(null); // Store correct _id
const [loading, setLoading] = useState(true);
const [isEventLive, setIsEventLive] = useState(false);
const [isUserRegistered, setIsUserRegistered] = useState(false);

  useEffect(() => {
    if (!refrenceId) {
      console.error("❌ Event ID is missing from URL!");
      setLoading(false);
      return;
    }
  
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/getEvent/general/specific/${refrenceId}`
        );
  
        if (response.data.event) {
          const fetchedEvent = response.data.event;
          setEvent(fetchedEvent);
          setEventId(fetchedEvent._id); // Store the correct _id
        console.log("this is my event data after regiestration", response.data)
  
          // Check if the event is live
          const now = new Date();
          const eventStart = new Date(`${fetchedEvent.startDate}T${fetchedEvent.
            eventStartTime}`);
          const eventEnd = new Date(`${fetchedEvent.endDate}T${fetchedEvent.eventEndTime}`);
          setIsEventLive(now >= eventStart && now <= eventEnd);
        } else {
          console.error("❌ No event found!");
        }
      } catch (error) {
        console.error("❌ Error fetching event:", error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchEvent();
  }, [refrenceId]);
  
  useEffect(() => {
    if (!eventId) return; // Only run if we have a valid _id
     
    const checkUserRegistration = async () => {
      try {
        const authToken = localStorage.getItem("authToken"); // Fetch auth token
        if (!authToken) {
          console.warn("⚠ No authentication token found.");
          return;
        }
    
        // Step 1: Fetch authenticated user details
        const userResponse = await axios.get("http://localhost:8000/api/authuser", {
          headers: { Authorization: `Bearer ${authToken}` }, // Pass token in headers
        });
    
        const userId = userResponse.data.user._id; // Get logged-in user's ID
        console.log("✅ Authenticated User ID:", userId);
    
        // Step 2: Fetch event participants
        const response = await axios.get(
          `http://localhost:8000/api/registrationEvent/participants/${eventId}`
        );
    
        console.log("📌 Event Participants Response:", response);
    
        const registrations = response.data.registrations || []; // Get registrations array
        console.log("📌 Registered Users:", registrations);
    
        if (registrations.length === 0) {
          console.warn("⚠ No participants registered for this event.");
          return;
        }
    
        // Extract all user IDs from registrations
        const registeredUserIds = registrations.map((reg) => reg.userId);
    
        // Check if the logged-in user is registered
        setIsUserRegistered(registeredUserIds.includes(userId));
      } catch (error) {
        console.error("❌ Error checking registration status:", error.message);
      }
    };
    checkUserRegistration();
  
  }, [eventId]); // Run when `eventId` is set
  if (loading) return <p>Loading...</p>;
  if (!event) return <p>Event not found!</p>;
  
  const renderButton = () => {
    if (!isUserRegistered) {
      return <button>Register Now</button>;
    } else if (!isEventLive) {
      return <button disabled>You have registered!</button>;
    } else {
      return <button>Participate</button>;
    }
  };

  const formattedstartDate = new Date(event.startDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedendDate = new Date(event.endDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
        <p className="text-[2.2vmin] text-gray-500 mt-1 s">
          Starts at: {formattedstartDate || "TBD"}
        </p>
        <p className="text-[2.2vmin] text-gray-500 mt-1">
          Ends in: {formattedendDate|| "TBD"}
        </p>
      </div>
      <Link to={`/participate/${refrenceId}`}>
        <button className="mt-6 px-[10vmin] py-[2vmin] bg-[#4C1A76] text-white font-semibold text-[2.5vmin] rounded-[4vmin] shadow-md hover:bg-[#3A125D] transition duration-300">
        {renderButton()}
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
          <p className="text-[2.5vmin] text-gray-600">{event.eventProcess}</p>
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
        {event.eventType !== "speed_guidance" && (
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
        )}
        
         {/* Hackathon-Specific Section */}
         {event.eventType === "hackathon" && (
          <HackathonDetail eventId={event._id}  />
        )}
      </div>
    </div>
   
  );
};

const HackathonDetail = () => {
  const { refrenceId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    console.log("Fetching hackathon events...");

    axios
      .get(`http://localhost:8000/api/getEvent/general/hackathon`)
      .then((response) => {
        console.log("Full response data:", response.data); // Debugging

        // Ensure response.data.events is an array before using .find()
        if (response.data && Array.isArray(response.data.events)) {
          const selectedEvent = response.data.events.find(
            (event) => event._id === refrenceId
          );
          console.log("Filtered event:", selectedEvent); // Debugging

          setEvent(selectedEvent);
        } else {
          console.error("Unexpected data structure:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching event:", error));
  }, [refrenceId]);

  if (!event) return <p>Loading...</p>;

  return (
    <div className="w-[80%] mt-8 space-y-8 text-left">
    <h2 className="text-[3.5vmin] font-semibold text-[#4C1A76] mb-[6vmin]">
      Hackathon Details
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
      <div className="bg-gray-100 p-4 rounded-lg shadow mb-[4vmin]">
        <h3 className="text-lg font-semibold">Event Information</h3>
        <ul className="mt-2 space-y-2">
          <li><strong>Mode:</strong> {event.HackthonType}</li>
          <li><strong>Location:</strong> {event.hackthonlocation}</li>
          <li><strong>College:</strong> {event.hackthoncollegeName}</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow mb-[4vmin]">
        <h3 className="text-lg font-semibold">Judging Criteria</h3>
        <ul className="mt-2 space-y-2">
          {event.judgingCriteria.map((criteria, index) => (
            <li key={index} className="text-[2.5vmin]">{index + 1}. {criteria}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  
);
  
};

export default EventDetail;
