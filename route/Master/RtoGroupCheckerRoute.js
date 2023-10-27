const router = require("express").Router();
const {
  getRtoGroupChecker,
  postRtoGroupChecker,
  putRtoGroupChecker,
  deleteRtoGroupChecker,
  getDataById,
  testApi,
  getRtoGroupSelectDrpDown,
  CheckIsRtoPresentOrNot,
} = require("../../controller/RtoGroupCheckerController");
const { protectRequests } = require("../../middleware/protectRequests");

router.get("/", getRtoGroupChecker);
router.get("/getRtoGroupSelectDrpDown", getRtoGroupSelectDrpDown);
router.get("/getDataById/:id", getDataById);
router.post("/", protectRequests, CheckIsRtoPresentOrNot, postRtoGroupChecker);
router.put("/:id", protectRequests, CheckIsRtoPresentOrNot, putRtoGroupChecker);
router.delete("/:id", protectRequests, deleteRtoGroupChecker);
router.get("/testApi", testApi);
module.exports = router;
