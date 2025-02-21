import AuthUser from "../Models/UserModel.js";

const getauthUserDetail = async (req, res) => {
  try {
    const userId = req.AuthUser?.id; // Ensure `req.AuthUser` exists
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    console.log("User ID:", userId);

    const user = await AuthUser.findById(userId).select("-password"); // Exclude password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
      statusCode: 500,
    });
  }
};

export default getauthUserDetail;
