const {
  getPolicy,
  PostPolicy,
  putPolicy,
  deletePolicy,
  getPolicyByFilter,
  getPolicyReport,
  updatePolicy,
  getPolicyReportByFiledName,
  getCommission,
  getSingle,
  deleteImage,
  getActionPolicy,
  getApprovedPolicy,
  getSingleForPolicy,
  getPolicyByFilterForExcel,
  viewPolicy,
  findByPolicyNumber,
  getPolicyStatus,
  getPolicyPremium,
  // getPolicyCountByEmployee,
} = require("../controller/PolicyController");
const {
  getPolicyCountByEmployee,
  CompanyReportOfPolicy,
} = require("../controller/Reports/PolicyReport");
const { protectUniquePolicy } = require("../middleware/PolicyValidation");

const { uploadMany } = require("../util/uploadManyImages");
const router = require("express").Router();
router.get("/", getPolicy);
router.get("/Single/:id", getSingle);
router.get("/findByPolicyNumber", findByPolicyNumber);
router.get("/getSingleForPolicy/:id", getSingleForPolicy);
router.get("/viewPolicy/:id", viewPolicy);
router.post("/", uploadMany, PostPolicy);
router.put("/:id", uploadMany, protectUniquePolicy, putPolicy);
router.delete("/:id", deletePolicy);
router.get("/getPolicyReport", getPolicyReport);
router.get("/getPolicyReportByFiledName", getPolicyReportByFiledName);
router.post("/getCommission", getCommission);
router.post("/getPolicyByFilter", getPolicyByFilter);
router.post("/getPolicyStatus", getPolicyStatus);
router.post("/getPolicyPremium", getPolicyPremium);
router.post("/getPolicyByFilterForExcel", getPolicyByFilterForExcel);
router.post("/getActionPolicy", getActionPolicy);
router.put("/updatePolicy/:id", updatePolicy);
router.put("/delete/Image", deleteImage);
router.post("/getApprovedPolicy", getApprovedPolicy);

//  reports

router.get("/getPolicyCountByEmployee", getPolicyCountByEmployee);
router.get("/CompanyReportOfPolicy", CompanyReportOfPolicy);
module.exports = router;
