import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const FinalRegistrationPage = () => {
  const { refrenceId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

//  Api Call for fteching heading  dynamically 
  useEffect(() => {
    console.log("Received reference ID:", refrenceId);

    if (!refrenceId || event) {
      console.error("❌ Event ID is missing from URL or already fetched!");
      setLoading(false);
      return;
    }

    const fetchEventHeading = async () => {
      try {
        console.log("🚀 Fetching event details...");
        const response = await axios.get(
          `http://localhost:8000/api/getEvent/general/specific/${refrenceId}`
        );
        console.log(
          "✅ Event details fetched on registration page:",
          response.data.event.eventTitle
        );

        if (response.data.event.eventTitle) {
          setEvent(response.data.event.eventTitle);
        } else {
          console.error("⚠️ No event found in response!");
        }
      } catch (error) {
        console.error(
          "❌ Error fetching event:",
          error.response?.data || error.message
        );
      } finally {
        console.log("⏹ Setting loading to false...");
        setLoading(false);
      }
    };

    fetchEventHeading();
  }, [refrenceId, event]);

  if(loading) {
    console.log("Loading Heading") ; 
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* Player Regitsration Page  */}

      <div className="h-[100vh] w-full flex items-center justify-center">
        <div
          className="h-[90vmin] w-full bg-white
            flex justify-center shadow-md"
        >
          <div className="h-[90vmin] w-[180vmin] bg-orange-300 "></div>
          <div className="h-[90vmin] w-full">
            <div
              className="text-[5vmin] uppercase font-semibold font-poppins flex justify-center items-center
               mt-[3vmin]"
            >
              <h1>
                Participae in <span>{event}</span>
              </h1>
            </div>
            <div className="mt-[3vmin] ml-[8vmin]">
              <form action="" className="flex flex-col">
                <div className="flex flex-col gap-[2vmin]">
                  <label htmlFor="" className="font-poppins">
                    Enter your Name :{" "}
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Name"
                    className="h-[6.5vmin] w-[100vmin] rounded-[1vmin]  bg-[#F5F5F5]
                        focus:outline-none focus:ring-0 px-[2vmin] text-[2.5vmin] font-sans border border-gray-100"
                  />
                </div>
                <div className="flex flex-col mt-[4vmin] gap-[2vmin]">
                  <label htmlFor="" className="font-poppins">
                    Enter your Email :{" "}
                  </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                    className="h-[6.5vmin] w-[100vmin] rounded-[1vmin]  bg-[#F5F5F5]
                        focus:outline-none focus:ring-0 px-[2vmin] text-[2.5vmin] font-sans border border-gray-100"
                  />
                </div>
                <div className="flex flex-col gap-[2vmin] mt-[4vmin]">
                  <label htmlFor="" className="font-poppins">
                    Enter your Phone Number :{" "}
                  </label>
                  <input
                    type="tel"
                    name=""
                    id=""
                    placeholder="Phone Number"
                    className="h-[6.5vmin] w-[100vmin] rounded-[1vmin]  bg-[#F5F5F5]
                        focus:outline-none focus:ring-0 px-[2vmin] text-[2.5vmin] font-sans border border-gray-100"
                  />
                </div>
                <div className="flex flex-col gap-[2vmin] mt-[4vmin]">
                  <label htmlFor="" className="font-poppins">
                    Enter your College Name :{" "}
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="college Name"
                    className="h-[6.5vmin] w-[100vmin] rounded-[1vmin]  bg-[#F5F5F5]
                        focus:outline-none focus:ring-0 px-[2vmin] text-[2.5vmin] font-sans border border-gray-100"
                  />
                </div>
                <div className="flex justify-center items-center mr-[16vmin]">
                  <div
                    className="w-[100vmin] h-[6vmin] bg-[#4C1A76] flex justify-center items-center text-white
                        font-poppins rounded-[3vmin] mt-[5vmin]"
                  >
                    <button>Register for Event</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalRegistrationPage;
