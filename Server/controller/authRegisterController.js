import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import AuthUser from "../Models/UserModel.js";

const authentication = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password } = req.body;
    console.log(username, email, password);

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the email is already registered
    const existingUser = await AuthUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Check if the username is already taken
    const existingUsername = await AuthUser.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already taken" });
    }

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new AuthUser({
      username,
      email,
      password: hashedPassword, // Save the hashed password
    });

    // Save the user to the database
    await newUser.save();

    // Create and sign a JWT token with the userId as payload
    const token = jwt.sign(
      { userId: newUser._id }, // Payload: include userId in the token
      process.env.JWT_SECRET || "your_jwt_secret", // Secret key to sign the token
      { expiresIn: "30d" } // Token expiration (optional)
    );

    // Set the token in an HTTP-only cookie
    res.cookie("authToken", token, {
      httpOnly: true, // Prevent JavaScript access
      secure:   false , // Use HTTPS in production
      sameSite: "strict", // Prevent CSRF
      maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie expiry (30 days)
    });

    // Return success response along with the token
    res.status(201).json({
      message: "User registered successfully",
      user: { username: newUser.username, email: newUser.email },
      token, // Send the generated token in the response
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default authentication;
