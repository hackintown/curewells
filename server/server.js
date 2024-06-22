const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/config");
const enquiryRoutes = require("./routes/enquiriesRoute");
const connectDB = require("./config/db");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

//Middleware
app.use(cors());
app.use(express.json()); // Parses JSON bodies
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded bodies

// Test server running
app.use("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running...",
  });
});

//Routes
app.use("/api/enquiries", enquiryRoutes);

// MongoDB Connection
connectDB();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "A server error occurred!" });
});

// Start the server

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
