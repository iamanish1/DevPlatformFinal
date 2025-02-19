import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const EventDetailPage = () => {
  const { id } = useParams(); // Get event ID from URL
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8000/api/getEvent/general/specific/${id}`);
        console.log("✅ Fetched Event:", response.data.event);
        setEvent(response.data.event);
      } catch (err) {
        console.error("❌ Error fetching event:", err);
        setError(err.response?.data?.message || "Error fetching event");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  if (loading) return <p>Loading event...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{event?.eventTitle}</h1>
      <p><strong>Type:</strong> {event?.eventType}</p>
      <p><strong>Description:</strong> {event?.eventDescription}</p>
      <p><strong>Hosted By:</strong> {event?.hostedBy}</p>
      <p><strong>Start Date:</strong> {new Date(event?.startDate).toLocaleDateString()}</p>
      <p><strong>End Date:</strong> {new Date(event?.endDate).toLocaleDateString()}</p>
      <p><strong>Participants:</strong> {event?.numberofParticipant}</p>
    </div>
  );
};

export default EventDetailPage;
