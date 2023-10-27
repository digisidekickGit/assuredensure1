const router = require("express").Router();
const {
  getEmployee,
  postEmployee,
  putEmployee,
  deleteEmployee,
  GetPopulate,
  singleEmployee,
  EmployeeLogin,
  deleteImage,
  selectBoxDropdown,
  ValidateLogin,
  Logout,
} = require("../../controller/EmployeeController");
const { protectRequests } = require("../../middleware/protectRequests");
const { uploadMany } = require("../../util/uploadManyImages");
const { EmployeeVerifyToken } = require("../../util/verifyToken");
router.get("/", getEmployee);
router.get("/selectBoxDropdown", selectBoxDropdown);
router.get("/singleEmployee", EmployeeVerifyToken, singleEmployee);
router.get("/GetPopulate", GetPopulate);
router.post("/", protectRequests, uploadMany, postEmployee);
router.put("/:id", protectRequests, uploadMany, putEmployee);
router.delete("/:id", protectRequests, deleteEmployee);
router.post("/EmployeeLogin", EmployeeLogin);
router.post("/ValidateLogin", ValidateLogin);
router.put("/delete/Image", deleteImage);
router.get("/Logout", Logout);
module.exports = router;
