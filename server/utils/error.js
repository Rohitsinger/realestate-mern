export const errorHandler = (statusCode,error) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    error.message = message;
    return error;
}