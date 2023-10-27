const jwt = require("jsonwebtoken");
const ErrorHandler = require("../util/handleError");
// const protectRequests = async (req, res, next) => {
//   if (String(req.method) === "GET") {
//     next();
//   }
//   const { token } = req.cookies;

//   if (!token) {
//     const options = {
//       expires: new Date(Date.now()),
//       httpOnly: true,
//     };
//     return res.status(401).cookie(`token`, null, options).json({
//       success: true,
//       message: "Please Login first",
//     });
//   }
//   const {
//     id,
//     Read,
//     Create,
//     Edit,
//     Delete,
//     isAdmin = false,
//   } = await jwt.verify(token, process.env.JWT_SECRET_KEY);
//   if (isAdmin) {
//     next();
//   }

//   switch (String(req.method)) {
//     // case "GET":
//     //   Read
//     //     ? next()
//     //     : next(
//     //         new ErrorHandler(`You are not allowed to access this page`, 401)
//     //       );
//     //   break;
//     case "POST":
//       Create ? next() : next(new ErrorHandler(`Permission Denied`, 401));
//       break;
//     case "PUT":
//       Edit ? next() : next(new ErrorHandler(`Permission Denied`, 401));
//       break;
//     case "DELETE":
//       Delete ? next() : next(new ErrorHandler(`Permission Denied`, 401));
//       break;
//   }
// };

const protectRequests  = (req, res,next) => {
  try {
    next();
  } catch (error) {
    
  }
}


const protectFileToDownload = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    res.status(401).json({
      success: true,
      message: "Please Login first",
    });
  }
  const {
    id,
    Download,
    isAdmin = false,
    isEmployee = false,
  } = await jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (isAdmin) {
    next();
  }
  if (Download) {
    next();
  }

  next(
    new ErrorHandler(
      `Data used in another Policy table so you can not delete`,
      400
    )
  );
};

module.exports = { protectRequests };
