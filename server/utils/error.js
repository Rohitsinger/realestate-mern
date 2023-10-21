 const errorHandler = (statusCode,error) => {
    const errors = new Error(message);
    error.statusCode = statusCode;
    error.message = message;
    return errors;
}

module.exports = errorHandler