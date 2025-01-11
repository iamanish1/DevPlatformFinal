import { createBrowserRouter } from "react-router-dom";
import CodingRoomSection from "../pages/CodingRooms.jsx";
import EventSection from "../pages/Event.jsx";
import CarrierSection from "../pages/Carrier.jsx";
import CommunitySection from "../pages/Community.jsx";
import ProblemSection from "../pages/Problem.jsx";
import HomePage from "../pages/Home.jsx";
import App from "./app.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
          path : "",
          element: <HomePage />, // No "/" at the start, it will render HomePage when no path is provided in the URL.

        },
      {
        path: "codingRoom", // No "/" at the start
        element: <CodingRoomSection />,
      },
      {
        path: "Events",
        element: <EventSection />,
      },
      {
        path: "Carrier",
        element: <CarrierSection />,
      },
      {
        path: "Community",
        element: <CommunitySection />,
      },
      {
        path: "Practice",
        element: <ProblemSection />,
      },
    ],
  },
]);

export default router;
