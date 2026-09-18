const express = require('express');
const router = express.Router();

const enquiryController = require('../controller/enquiryController');

router.post('/enquiry', enquiryController);

module.exports = router;