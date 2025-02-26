import express from "express";
// import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
dotenv.config();
const app = express();

// Middleware
app.use(cors(
  {
    origin: "https://clockify-app.netlify.app/", // Allow requests from frontend
    credentials: true, // Allow cookies & authorization headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow JWT tokens
  }
));
app.use(express.json());
// Test Route
app.get('/', (req, res) => {
  res.send('API is working!');
});
// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(" MongoDB Connected"))
  .catch((err) => console.error(" MongoDB Connection Error:", err));

// Routes
app.use("/api/auth", authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});