const mongoose = require("mongoose");

const EnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure uniqueness of email addresses if needed
    lowercase: true, // Convert email to lowercase before saving
    trim: true, // Remove any leading or trailing whitespace
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Basic email format validation
  },
  phone: {
    type: String, // Consider storing phone numbers as strings
    trim: true, // Remove any leading or trailing whitespace
  },
});

module.exports = mongoose.model("Enquiry", EnquirySchema);
