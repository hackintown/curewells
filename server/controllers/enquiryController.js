// server/controllers/enquiryController.js

const Enquiry = require('../models/enquirySchema');
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
            <div class="container">
                <h2>New Enquiry Details</h2>
                <p><strong>Name:</strong> ${fname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Services:</strong> ${services}</p>
            </div>
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
