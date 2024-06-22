// server/routes/enquiryRoutes.js

const express = require('express');
const router = express.Router();
const enquiryController = require('../controllers/enquiryController');

// @route   POST /api/enquiries
// @desc    Create a new enquiry
router.post('/', enquiryController.createEnquiry);

module.exports = router;
