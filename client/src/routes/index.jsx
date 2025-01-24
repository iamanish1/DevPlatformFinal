import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import CodingRoomSection from "../pages/CodingRooms";
import EventSection from "../pages/Event";
import CarrierSection from "../pages/Carrier";
import CommunitySection from "../pages/Community";
import ProblemSection from "../pages/Problem";
import HomePage from "../pages/Home";
import ProfilePage from "../pages/Profile";
import CreateAccount from "../pages/CreateAccount";
import AlreadyAccount from "../pages/AlreadyAccout";

const createRouter = (isAuthenticated) =>

  createBrowserRouter([
    {
      path: "/",
      element: <HomePage />, // Public route for the home page
    },
    {
      path: "/createAccount",
      element: <CreateAccount />, // Public route for account creation
    },
    {
      path: "/LoginAccount",
      element: <AlreadyAccount />, // Public route for login
    },
    {
      path: "/profile",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <ProfilePage />
        </ProtectedRoute>
      ), // Protected route for the profile page
    },
    {
      path: "/codingRoom",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <CodingRoomSection />
        </ProtectedRoute>
      ), // Protected route
    },
    {
      path: "/events",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <EventSection />
        </ProtectedRoute>
      ), // Protected route
    },
    {
      path: "/carrier",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <CarrierSection />
        </ProtectedRoute>
      ), // Protected route
    },
    {
      path: "/community",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <CommunitySection />
        </ProtectedRoute>
      ), // Protected route
    },
    {
      path: "/practice",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <ProblemSection />
        </ProtectedRoute>
      ), // Protected route
    },
  ]);

export default createRouter;
