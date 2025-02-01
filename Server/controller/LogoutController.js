const logoutUser = (req, res) => {
    try {
      // Clear the token cookie
      res.clearCookie("authToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Secure in production
        sameSite: "Lax", // Use "Lax" instead of "Strict" for better compatibility
        path: "/", // ✅ Ensure the cookie is cleared across the entire app
      });
      res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Secure in production
        sameSite: "Lax", // Use "Lax" instead of "Strict" for better compatibility
        path: "/", // ✅ Ensure the cookie is cleared across the entire app
      });
  
      res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
      });
    }
  };
  
  export default logoutUser;
  