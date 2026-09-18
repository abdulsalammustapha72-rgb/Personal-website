const validator = require('validator');

const emailValidator = (email) => {
    return validator.isEmail(email);
};

module.exports = emailValidator;