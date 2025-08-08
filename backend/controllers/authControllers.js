import User from "../models/User.js";
import { LoginToken } from "../utils/token.js";

/************************ Register controller ***************************/

export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const isExist = await User.findOne({ email });

    if (isExist) {
      res
        .status(200)
        .json({ success: false, message: "User already registered" });
    }

    const user = await User.create(req.body);
    const token = LoginToken(user);
    res.status(201).json({
      user,
      token,
      success: true,
      message: "User created successfully!",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Signup failed", error: error.message });
  }
};

/************************ Login controller ***************************/

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.comparePassword(password))) {
      res.status(401).json({ success: false, message: "Invalid credentials!" });
    }

    const token = LoginToken(user);

    res.status(201).json({
      user,
      token,
      success: true,
      message: "User logged in successfully!",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Signup failed", error: error.message });
  }
};