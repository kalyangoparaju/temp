const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// MongoDB connection
connectDB();

// Create an Express app
const app = express();

// Middleware
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

// Routes
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

// Define the port to listen on
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${process.env.DEV_MODE} mode`);
});
