const nameValidator = (name) => {
    const nameRegex = /^[A-Za-z\s'-]{2,50}$/;
    
    return nameRegex.test(name);
};

module.exports = nameValidator;