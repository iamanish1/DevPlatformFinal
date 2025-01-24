import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes


const ProtectedRoute = ({ component: Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated by sending a request to a protected route
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:8000/api/authLoginUser", {
          withCredentials: true,
        });
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
