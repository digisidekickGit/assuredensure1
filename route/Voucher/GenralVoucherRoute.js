const router = require("express").Router();
const {
  getGeneralVoucher,
  postGeneralVoucher,
  putGeneralVoucher,
  deleteGeneralVoucher,
  getLedger,
} = require("../../controller/GeneralVoucherController")

router.get("/", getGeneralVoucher);
router.post("/", postGeneralVoucher);
router.put("/:id", putGeneralVoucher);
router.delete("/:id", deleteGeneralVoucher);
router.get("/getLedger", getLedger);
module.exports = router;
