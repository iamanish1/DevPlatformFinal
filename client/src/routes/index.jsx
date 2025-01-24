import { createBrowserRouter } from "react-router-dom";
import CodingRoomSection from "../pages/CodingRooms.jsx";
import EventSection from "../pages/Event.jsx";
import CarrierSection from "../pages/Carrier.jsx";
import CommunitySection from "../pages/Community.jsx";
import ProblemSection from "../pages/Problem.jsx";
import HomePage from "../pages/Home.jsx";
import App from "./app.jsx";
import ProfilePage from "../pages/Profile.jsx";
import CreateAccount from "../pages/CreateAccount.jsx";
import AlreadyAccount from "../pages/AlreadyAccout.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />, // HomePage is public
      },
      {
        path: "codingRoom",
        element: (
          <ProtectedRoute component={CodingRoomSection} /> // Protected route
        ),
      },
      {
        path: "Events",
        element: (
          <ProtectedRoute component={EventSection} /> // Protected route
        ),
      },
      {
        path: "Carrier",
        element: (
          <ProtectedRoute component={CarrierSection} /> // Protected route
        ),
      },
      {
        path: "Community",
        element: (
          <ProtectedRoute component={CommunitySection} /> // Protected route
        ),
      },
      {
        path: "Practice",
        element: (
          <ProtectedRoute component={ProblemSection} /> // Protected route
        ),
      },
      {
        path: "Profile",
        element: (
          <ProtectedRoute component={ProfilePage} /> // Protected route
        ),
      },
      {
        path: "createAccount",
        element: <CreateAccount />, // Public route
      },
      {
        path: "LoginAccount",
        element: <AlreadyAccount />, // Public route
      },
    ],
  },
]);

export default router;
