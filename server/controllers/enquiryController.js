// server/controllers/enquiryController.js

const Enquiry = require('../models/enquiryModel');
const nodemailer = require('nodemailer');
const { EMAIL_USER, EMAIL_PASS } = require('../config/config');

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

exports.createEnquiry = async (req, res) => {
  const { fname, email, phone, services } = req.body;

  try {
    // Create a new enquiry instance
    const newEnquiry = new Enquiry({ fname, email, phone, services });

    // Save the enquiry to the database
    await newEnquiry.save();

    // Send email notification
    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_USER,
      subject: 'New Enquiry Submitted',
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
                <p><strong>Name:</strong> ${fname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Services:</strong> ${services}</p>
            </div>
        </body>
        </html>
      `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
      } else {
        console.log('Email sent:', info.response);
        res.status(201).json(newEnquiry); // Respond with the saved enquiry object
      }
    });
  } catch (err) {
    console.error('Error saving enquiry:', err);
    res.status(500).json({ error: 'Failed to save enquiry' });
  }
};
