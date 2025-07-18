// import express from "express"; 
// import cors from "cors";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import connectDB from "./config/mongodb.js";
// import AuthRoutes from "./routes/AuthRoutes.js";
// import profileRoutes from "./routes/profileRoute.js";

// dotenv.config();

// const port = process.env.PORT || 5000;
// const app = express();

// // Middleware
// app.use(cookieParser());
// app.use(express.json());

// // ✅ CORS Setup
// const allowedOrigins = ["https://mentorship-frt-end-05.vercel.app", "http://localhost:5173"];

// app.use(cors({
//   origin: (origin, callback) => {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));

// // Routes
// app.use("/api/auth", AuthRoutes);
// app.use("/api/auth/profile", profileRoutes);

// // Test Route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to backend" });
// });

// // Connect to DB
// connectDB();

// // Start Server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import AuthRoutes from "./routes/AuthRoutes.js";
import profileRoutes from "./routes/profileRoute.js";

// Load environment variables
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// ✅ CORS Setup
const allowedOrigins = [
  "https://mentorship-frt-end-05.vercel.app",
   "https://mentorship-fnd.netlify.app",
  "http://localhost:5173"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middlewares
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/auth", AuthRoutes);
app.use("/api/auth/profile", profileRoutes);

// Default Test Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to backend" });
});

// Connect to MongoDB
connectDB();

// Start Server
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
