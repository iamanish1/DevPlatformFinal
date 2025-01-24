import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

const ProtectedRoute = ({ component: Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated by sending a request to a protected route
    const checkAuth = async () => {
      const token = localStorage.getItem("authToken"); // Get token from localStorage
      console.log("Checking", token);
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        await axios.post(
          "http://localhost:8000/api/authLoginUser",
          {}, // Empty body
          {
            headers: {
              Authorization: `Bearer ${token}`, // Token included in headers
            },
            withCredentials: true, // Allow cookies if required
          }
        );
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
        console.log(error);
      }
    };
    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/LoginAccount" />; // Redirect to login if not authenticated
  }

  return <Component />; // If authenticated, render the protected component
};

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired, // Validate that component is a valid React component
};

export default ProtectedRoute;
