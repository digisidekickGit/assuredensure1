class ErrorHandler extends Error {
  constructor(message, status) {
    super(message);
  
    this.statusCode = status || 500;
  }
}

module.exports = ErrorHandler;
