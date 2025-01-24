
import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  // Get the token from the cookie or Authorization header
  const cookieToken = req.cookies?.authToken; // Token from cookies
  const headerToken = req.headers.authorization?.split(" ")[1]; // Token from Authorization header

  const token = cookieToken || headerToken; // Prioritize cookie token

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  // Verify the token
  jwt.verify(token, "your_jwt_secret_key", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user; // Store user info in request object
    next();
  });
};

export default verifyToken;
