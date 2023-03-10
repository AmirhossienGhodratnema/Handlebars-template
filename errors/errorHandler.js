const notFoundPage = (req, res, next) => {
  return res.status(404).json({
    statusCode: 404,
    message: `url '${req.url}' is not found.`,
    success: false,
  });
};

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Interval server error.";

  return res.json({
    statusCode,
    message,
    success: false,
  });
};

module.exports = {
  notFoundPage,
  errorHandler,
};
