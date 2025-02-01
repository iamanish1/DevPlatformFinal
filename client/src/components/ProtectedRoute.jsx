import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../Context/AuthContext";




const ProtectedRoute = ({ redirectPath = "/LoginAccount", children }) => {
  const {isAuthenticated} =  useAuth() ; 
  
  console.log("isAuthenticated:", isAuthenticated);
  if (!isAuthenticated) {
    console.log("user is not authenticated")
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,// `isAuthenticated` is required and must be a boolean
  redirectPath: PropTypes.string, // `redirectPath` is optional and must be a string
  children: PropTypes.node, // `children` is optional and can be any renderable React node
};


export default ProtectedRoute;