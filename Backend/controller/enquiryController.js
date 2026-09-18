const isNameValid = require('../utils/nameValidator');
const isEmailValid = require('../utils/emailValidator');
const isMessageValid = require('../utils/messageValidator');

const Enquiry = require('../model/enquiry');

// Create Enquiry

const createEnquiry = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!isNameValid(name)) {
            return res.status(400).json({
                message: 'Please enter a valid name.'
            });
        };

        if (!isEmailValid(email)) {
            return res.status(400).json({
                message: 'Please enter a valid email.'
            });
        };

        if (!isMessageValid(message)) {
            return res.status(400).json({
                message: 'Message must be more than 10 words.'
            });
        };

        // Duplicate

        const duplicateData = await Enquiry.findOne({ email });

        if (duplicateData) {
            return res.status(400).json({
                message: 'You have already sent an enquiry, please wait for a response. Thank you. You can also contact me through my WhatsApp link or Contact my number.'
            });
        };

        await Enquiry.create({
            name,
            email,
            message
        });

        res.status(200).json({
            message: 'Enquiry sent successfully, I will get back to you as soon as possible.',
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Server Error.'
        });
    };
};

module.exports = createEnquiry;