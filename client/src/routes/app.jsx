import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import createRouter from "./router"; // Import the router creation function

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // Example: Validate token (you can implement a token validation API call here)
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setLoading(false); // Stop loading after validation
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  
  const router = createRouter(isAuthenticated); // Dynamically create the router
  console.log("Router instance:", router);
  
  return <RouterProvider router={router} />;
}

export default App;
