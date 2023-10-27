const router = require("express").Router();

const {
  getInsuranceSubCategory,
  postInsuranceSubCategory,
  putInsuranceSubCategory,
  deleteInsuranceSubCategory,
} = require("../../controller/InsuranceSubCategoryController");
const { protectRequests } = require("../../middleware/protectRequests");

router.get("/", getInsuranceSubCategory);
router.post("/", protectRequests,postInsuranceSubCategory);
router.put("/:id", protectRequests,putInsuranceSubCategory);
router.delete("/:id", protectRequests,deleteInsuranceSubCategory);
module.exports = router;
