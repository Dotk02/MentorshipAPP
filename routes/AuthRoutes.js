import { get} from "mongoose";
import {register, login, Logout, getUserData} from "../controller/Auth.js";
import express from "express";


//const AuthRoutes = express.Router();
const AuthRoutes = express.Router();

//user registration route
AuthRoutes.post("/register",register);
AuthRoutes.post("/login",login);
AuthRoutes.post("/logout",Logout);
AuthRoutes.get("/getUserData/:id",getUserData);

//user data route

export default AuthRoutes;


// export default router;
