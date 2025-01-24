import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  // If the user is not authenticated, redirect to the login page
  return isAuthenticated ? children : <Navigate to="/LoginAccount" />;
};

// Prop validation
ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired, // Ensure `isAuthenticated` is a boolean and required
  children: PropTypes.node.isRequired, // Ensure children are provided
};

export default ProtectedRoute;
