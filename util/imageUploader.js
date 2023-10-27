const multer = require("multer");
const storage = multer.diskStorage({
  destination(req, file, cb) {
    console.log("check this one");
    if (file.fieldname == "profilePic") {
      cb(null, "images/profilePic");
    }
    if (file.fieldname == "CompanyLogo") {
      cb(null, "images/CompanyLogo");
    }
    if (file.fieldname == "panCard") {
      cb(null, "images/panCard");
    }
    if (
      file.fieldname == "adharcardFrontImage" ||
      file.fieldname == "adharcardBackImage"
    ) {
      cb(null, "images/adharcard");
    }
    if (file.fieldname == "Cheque") {
      cb(null, "images/Cheque");
    }
    if (file.fieldname == "MarkSheet") {
      cb(null, "images/MarkSheet");
    }
  },
  filename(req, file, cb) {
    cb(null, `${new Date().getTime()}_${file.originalname}`);
  },
});
const uploadSingle = multer({
  storage: storage,
  limits: {
    fileSize: 150000000, // max file size 1MB = 1000000 bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|JPEG|jpg|JPG|png|PNG|WEBP|webp)$/)) {
      // if (!file.originalname.match(/\.(jpeg|jpg|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          "only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format."
        )
      );
    }
    cb(undefined, true); // continue with upload
  },
});
module.exports = { uploadSingle };
