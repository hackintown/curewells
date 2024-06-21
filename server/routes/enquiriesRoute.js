const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Enquiry = require("../models/enquirySchema");

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// @route   POST /api/enquiries
// @desc    Create an enquiry
router.post("/", async (req, res) => {
  const { fname, email, phone, services } = req.body;

  try {
    // Create a new enquiry instance
    const newEnquiry = new Enquiry({
      fname,
      email,
      phone,
      services,
    });

    // Save the enquiry to the database
    await newEnquiry.save();

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Change this to your email for testing
      subject: "New Enquiry Submitted",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Enquiry Details</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                    padding: 20px;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }
                h2 {
                    color: #333333;
                }
                p {
                    margin-bottom: 10px;
                }
                strong {
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>New Enquiry Details</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
            </div>
        </body>
        </html>
      `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    // Respond with the saved enquiry object
    res.status(201).json(newEnquiry);
  } catch (err) {
    console.error("Error saving enquiry:", err);
    res.status(500).json({ error: "Failed to save enquiry" });
  }
});

module.exports = router;
