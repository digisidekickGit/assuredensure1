const ErrorHandler = require("../util/handleError");

const wrongUrl = (req, res, next) => {
  return next(new ErrorHandler(`URL Not found - ${req.originalUrl}`, 404));
};

const errorHandler = (err, req, res, next) => {
  //
  console.log(err, "errerrerr");
  res.statusCode = err?.statusCode ?? 500;
  err.message = err.message || "Internal Server Error";

  if (err.codeName === "DuplicateKey") {
    res.statusCode = 400;
    err.message = `${Object.keys(err.keyValue)[0]} is Duplicate`;
  } else if (err.name === "ValidationError") {
    // Extract validation errors and format them
    for (const field in err.errors) {
      console.log(field, "fieldfieldfieldfield");
      err.message = `${err.errors[field]}`;
    }
  }

  return res.status(res.statusCode).json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { wrongUrl, errorHandler };
