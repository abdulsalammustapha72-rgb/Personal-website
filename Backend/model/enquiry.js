const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    message: {
        type: String,
        require: true
    }
}, { timestamps: true });

module.exports = mongoose.model('enquiry', enquirySchema);