const logoutUser = (req, res) => {
    try {
      // Clear the token cookie
      res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Secure for HTTPS only
        sameSite: "strict", // Prevent CSRF attacks
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
  