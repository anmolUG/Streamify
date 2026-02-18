import { generateStreamToken } from "../lib/stream.js";

export async function getStreamToken(req, res) {
  try {
    const userId = req.user._id || req.user.id;
    if (!userId) {
      return res.status(400).json({ message: "User ID not found" });
    }

    const token = generateStreamToken(userId);
    
    if (!token) {
      return res.status(500).json({ message: "Failed to generate token" });
    }

    res.status(200).json({ token });
  } catch (error) {
    console.log("Error in getStreamToken controller:", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}
