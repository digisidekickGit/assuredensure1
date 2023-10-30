const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname == "profilePic") {
      cb(null, path.join(__dirname, "../images/profilePic"));
    }
    if (file.fieldname == "Contract") {
      cb(null, path.join(__dirname, "../images/Contract"));
    }
    if (file.fieldname == "panCard") {
      cb(null, path.join(__dirname, "../images/panCard"));
    }
    if (
      file.fieldname == "adharcardFrontImage" ||
      file.fieldname == "adharcardBackImage"
    ) {
      cb(null, path.join(__dirname, "../images/adharcard"));
    }
    if (file.fieldname == "Cheque") {
      cb(null, path.join(__dirname, "../images/Cheque"));
    }
    if (file.fieldname == "MarkSheet") {
      cb(null, path.join(__dirname, "../images/MarkSheet"));
    }
    if (file.fieldname == "RC1" || file.fieldname == "RC2") {
      cb(null, path.join(__dirname, "../images/RC"));
    }
    if (
      file.fieldname == "PreviousPolicy1" ||
      file.fieldname == "PreviousPolicy2"
    ) {
      cb(null, path.join(__dirname, "../images/PreviousPolicy"));
    }
    if (file.fieldname == "NewPolicyCopy") {
      cb(null, path.join(__dirname, "../images/NewPolicyCopy"));
    }
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    !file.originalname.match(/\.(jpeg|JPEG|jpg|JPG|png|PNG|webp|WEBP|pdf|PDF)$/)
  ) {
    return cb(
      new Error(
        "only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls,webp,WEBP format."
      )
    );
  }
  cb(undefined, true); // continue with upload
};

const uploadMany = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 100000000 // max file size 1MB = 1000000 bytes
},
}).fields([
  { name: "profilePic", maxCount: 1 },
  { name: "panCard", maxCount: 1 },
  { name: "Contract", maxCount: 1 },
  { name: "adharcardFrontImage", maxCount: 1 },
  { name: "adharcardBackImage", maxCount: 1 },
  { name: "Cheque", maxCount: 1 },
  { name: "MarkSheet", maxCount: 1 },
  { name: "RC1", maxCount: 1 },
  { name: "RC2", maxCount: 1 },
  { name: "PreviousPolicy1", maxCount: 1 },
  { name: "PreviousPolicy2", maxCount: 1 },
  { name: "NewPolicyCopy", maxCount: 1 },
]);

module.exports = { uploadMany };
