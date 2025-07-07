import express from "express";
import { getUserData, editProfile } from "../controller/profile.js";
import { authMiddleware } from "../middelware/authMiddleWare.js";
const profileRoutes = express.Router();

profileRoutes.get("/getUserData/:id",authMiddleware, getUserData);
profileRoutes.put("/editprofile/:id",authMiddleware, editProfile);  

export default profileRoutes;