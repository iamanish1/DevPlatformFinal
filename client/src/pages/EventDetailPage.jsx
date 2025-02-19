import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
        const response = await axios.get(`http://localhost:8000/api/getEvent/general/specific/${refrenceId}`);
        
        console.log("✅ Event Data Fetched:", response.data);
        if (response.data.event) {
          setEvent(response.data.event);
        } else {
          console.error("❌ No event found in response!");
        }
      } catch (error) {
        console.error("❌ Error fetching event:", error.response?.data || error.message);
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
    <div>
      <h1>{event.eventTitle}</h1>
      <p>{event.eventDescription}</p>
      <p><strong>Theme:</strong> {event.projectTheme}</p>
      <p><strong>Tech Stack:</strong> {event.techstack?.join(", ")}</p>
      <img src={event.photo?.[0]} alt={event.eventTitle} width="200px" />
      {event.video?.[0] && (
        <video width="400" controls>
          <source src={event.video[0]} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default EventDetail;
