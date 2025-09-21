import express from "express";
import { Register, Login, LogOut } from "../controllers/user.js";
const router = express.Router();
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(LogOut);
export default router;
