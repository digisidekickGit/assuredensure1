const router = require("express").Router();
const {
  getInsuranceCompany,
  postInsuranceCompany,
  putInsuranceCompany,
  deleteInsuranceCompany,
} = require("../../controller/InsuranceCompanyController");
const { protectRequests } = require("../../middleware/protectRequests");
const { uploadSingle } = require("../../util/imageUploader");

router.get("/", getInsuranceCompany);
router.post(
  "/",
  protectRequests,
  uploadSingle.single("CompanyLogo"),
  postInsuranceCompany
);
router.put(
  "/:id",
  protectRequests,
  uploadSingle.single("CompanyLogo"),
  putInsuranceCompany
);
router.delete("/:id", protectRequests, deleteInsuranceCompany);
module.exports = router;
