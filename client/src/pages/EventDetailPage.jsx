import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access URL parameters
import axios from "axios";

const EventDetailPage = () => {
  // Step 1: Get the event ID from the URL
  const { eventId } = useParams(); // Access eventId from the URL parameters
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Step 2: Fetch event data only if eventId is valid
  useEffect(() => {
    const url = `http://localhost:8000/api/getEvent/general/specific/${eventId}`;
    console.log( "this is my api url" , url);
    if (!eventId) {
      console.error("Event ID is undefined!");
      setLoading(false);
      return; // Exit early if eventId is not available
    }

    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/getEvent/general/specific/${eventId}`
        );
        console.log("Event this is  Data:", response.data);

        // Ensure the data you get has _id and use it
        setEventData(response.data); // Store event data in state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event data:", error);
        setLoading(false);
      }
    };

    fetchEventData();
  }, [eventId]); // Only re-run the effect when eventId changes

  // Step 3: Display loading or event data
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!eventData) {
    return <div>No event data found</div>;
  }

  // Display the event details
  return (
    <div>
      <h1>{eventData.eventTitle}</h1>
      <p>{eventData.eventDescription}</p>
      <h3>Hackathon Details</h3>
      <p>
        <strong>Type:</strong> {eventData.HackthonType}
      </p>
      <p>
        <strong>Location:</strong> {eventData.hackthonlocation}
      </p>
      <p>
        <strong>College Name:</strong> {eventData.hackthoncollegeName}
      </p>
      <p>
        <strong>Prize:</strong> {eventData.hackthonprize}
      </p>
      <p>
        <strong>Rules:</strong> {eventData.hackthonrules}
      </p>
      <p>
        <strong>Theme:</strong> {eventData.hackthontheme}
      </p>
      <h4>Banner:</h4>
      <img src={eventData.hackthonbanner} alt="Hackathon Banner" />
    </div>
  );
};

export default EventDetailPage;
