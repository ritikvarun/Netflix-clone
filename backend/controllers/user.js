import user from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Login
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "Invalid data",
        success: true,
      });
    }
    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      return res.status(401).json({
        message: "Invalid Email or password",
        success: false,
      });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Email or password",
        success: false,
      });
    }
    const tokenData = {
      id: existingUser._id,
    };
    const token = jwt.sign(tokenData, "dsjhbgfjhabsjhb", { expiresIn: "1d" });
    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        message: `wellcome back ${existingUser.fullname}`,
        success: true,
        user: existingUser,
      });
  } catch (error) {
    console.log(error);
  }
};
// LogOut
export const LogOut = async (req, res) => {
  return res
    .status(200)
    .cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true })
    .json({
      message: "User logged out successfully",
      success: true,
    });
};

//Register
export const Register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(401).json({
        message: "Invalid Data",
        success: false,
      });
    }
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(401).json({
        message: "This email is already used",
        success: false,
      });
    }
    const hashPassword = await bcrypt.hash(password, 16);
    await user.create({
      fullname,
      email,
      password: hashPassword,
    });
    return res.status(201).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
