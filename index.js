// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import bodyParser from "body-parser";
// import connectDB from "./config/mongodb.js";
// import AuthRoutes from "./routes/AuthRoutes.js";
// import profileRoutes from "./routes/profileRoute.js";
// dotenv.config();

// const port = process.env.PORT || 8000;
// const app = express();


// //middleware
// app.use(express.json());
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// //Routes
// app.use("/api/auth", AuthRoutes);
// app.use("/api/auth/profile", profileRoutes)

// //connecting to DB
// connectDB();

// //start server

// app.listen(8000, () => {
//         console.log("server is running on port 8000")
// });


//copy from chtgpt

import express from "express"; 
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/mongodb.js";
import AuthRoutes from "./routes/AuthRoutes.js";
import profileRoutes from "./routes/profileRoute.js";
import cookieParser from "cookie-parser";

dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", AuthRoutes);
app.use("/api/auth/profile", profileRoutes);

// DB Connection

// app.get("/" , (req, res) =>{
//     res.json({message: "Welcome to backend "})
// })

app.get("/", (req, res) => {
  res.send("Welcome to the Mentorship API!");
});
connectDB();

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

