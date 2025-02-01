import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(()=>{
    return localStorage.getItem("isAuthenticated") === "true";
  });


  useEffect(() => {
    // Check if there's a valid token in localStorage to persist login state
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", isAuthenticated);
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children are rendered inside AuthProvider
};

export {AuthProvider, useAuth, AuthContext }; 
