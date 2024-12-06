import express from "express";
import { signup, login } from "../Controller/user.controller.js";

const router = express.Router();

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

export default router;