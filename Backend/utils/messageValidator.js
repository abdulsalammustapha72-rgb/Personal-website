const messageValidator = (message) => {
    const trimMessage = message.trim();

    return (trimMessage.length >= 10 || trimMessage.length <= 500);
};

module.exports = messageValidator;