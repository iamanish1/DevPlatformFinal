// AuthContext.jsx
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();
 const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children} {/* Ensure children are rendered */}
    </AuthContext.Provider>
  );
};

  const useAuth = () => useContext(AuthContext);

export default AuthProvider; 

useAuth.propTypes = { // `children` is required and must be a React node
    isAuthenticated: PropTypes.bool.isRequired, // `isAuthenticated` is required and must be a boolean
    setIsAuthenticated: PropTypes.func.isRequired, // `setIsAuthenticated` is required and must be a function
  };
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired, // `children` is required and must be a React node
  
};

export { AuthContext, AuthProvider, useAuth };  // Export AuthContext, AuthProvider, and useAuth hooks.
