import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // Example: Validate token
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setLoading(false); // Stop loading after validation
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <RouterProvider router={router(isAuthenticated)} />;
}

export default App;
