import jwt from "jsonwebtoken";
import User from "../models/user.js"

export const ProtectedMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      res
        .status(400)
        .json({ success: false, message: "Unauthorized: No token provided" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      const user = await User.findById(decoded.id).select("-password");

      if (!user) return res.status(404).json({ message: "User not found" });

      req.user = user;
    } catch (error) {}

    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid Token" });
  }
};
