const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require('bcryptjs');
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const {PORT, MONGODB_URI} = require('./config/config')
require("dotenv").config();

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json()); // This parses JSON bodies

// Test server running
app.use("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running...",
  });
});
// Other middleware and route configurations
app.use(express.json());

// Import Routes
const enquiryRoutes = require("./routes/enquiriesRoute");
const connectDB = require("./config/db");
app.use("/api/enquiries", enquiryRoutes);

// MongoDB Connection
connectDB(MONGODB_URI);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "A server error occurred!" });
});

// Start the server

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
