const jwt = require("jsonwebtoken");
const UserSchema = require("../modal/userSchema");
const ErrorHandler = require("../util/handleError");
const UserVerifyToken = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      success: true,
      message: "Please Login first",
      token,
    });
  }
  const { id, isAdmin } = await jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (isAdmin) {
    try {
      req.user = await UserSchema.findById(id);
      next();
    } catch (error) {}
  }
};
const EmployeeVerifyToken = async (req, res, next) => {
  const { token } = req.cookies;
  try {

    if (!token) {
      return next(new ErrorHandler("Please Login first", 401));
    }
    const { id } = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!id) {
      return next(new ErrorHandler("Unauthorized", 401));
    }
    req.user = id;
    next();
  } catch (error) {
    return next(error);
  }
};

const PosVerifyToken = async (req, res, next) => {
  const { posAuth } = req.cookies;

  try {
    if (!posAuth) {
      return next(new ErrorHandler("Please Login first", 401));
    }
    const { id } = await jwt.verify(posAuth, process.env.JWT_SECRET_KEY);
    if (!id) {
      return next(new ErrorHandler("Unauthorized", 401));
    }
    req.user = id;
    next();
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  UserVerifyToken,
  EmployeeVerifyToken,
  PosVerifyToken,
};
