const router = require("express").Router();
const {
  getPayoutGrid,
  postPayoutGrid,
  putPayoutGrid,
  deletePayoutGrid,
  GetPopulate,
  getPayoutGridDataById,
  getPayoutGridByFilter,
  getPayoutGridTableData,
} = require("../../controller/PayoutGridController");
const { protectRequests } = require("../../middleware/protectRequests");

router.get("/", getPayoutGrid);
router.get("/singleGrid/:id",getPayoutGridDataById);
router.get("/GetPopulate", GetPopulate);
router.get("/getPayoutGridTableData", getPayoutGridTableData);
router.post("/",protectRequests, postPayoutGrid);
router.put("/:id", protectRequests,putPayoutGrid);
router.delete("/:id",protectRequests, deletePayoutGrid);
router.post("/getPayoutGridByFilter", getPayoutGridByFilter);
module.exports = router;
