import AuthUser from "../Models/UserModel.js";

// Example function to get user profile
const getUserProfile = async (req, res) => {
  try {
    const user = await AuthUser.findById(req.user.email);
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export default  getUserProfile ;
