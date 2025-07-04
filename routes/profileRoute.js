import express from "express";

import { getUserData, editProfile } from "../controller/profile.js";
const profileRoutes = express.Router();

profileRoutes.get("/getUserData/:id", getUserData);
profileRoutes.put("/editprofile/:id", editProfile);  

export default profileRoutes;