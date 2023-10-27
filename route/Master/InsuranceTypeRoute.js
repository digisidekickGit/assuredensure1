const router = require("express").Router();
const {
  getInsuranceType,
  postInsuranceType,
  putInsuranceType,
  deleteInsuranceType,
  getDeepPopulate,
  getDataForEdit,
  getDataById,
  getDataByFilter,
} = require("../../controller/InsuranceTypeController");
const { protectRequests } = require("../../middleware/protectRequests");

router.get("/", getInsuranceType);
router.get("/getDataForEdit/:id", getDataForEdit);
router.get("/getDeepPopulate/:id", getDeepPopulate);
router.get("/getDataById/:id", getDataById);
router.post("/", protectRequests, postInsuranceType);
router.post("/getDataByFilter",  getDataByFilter);
router.put("/:id", protectRequests, putInsuranceType);
router.delete("/:id", protectRequests, deleteInsuranceType);
module.exports = router;
