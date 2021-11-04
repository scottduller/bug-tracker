const errorTypes = {
  ValidationError: 422,
  UniqueViolationError: 409,
};

const errorMessages = {
  UniqueViolationError: 'Already exists.',
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const statusCode =
    res.statusCode === 200 ? errorTypes[error.name] || 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    status: statusCode,
    message: errorMessages[error.name] || error.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
    errors: error.errors || undefined,
  });
};

module.exports = errorHandler;
