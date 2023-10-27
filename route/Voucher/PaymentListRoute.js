const router = require("express").Router();
const {
  getPaymentList,
  postPaymentList,
  putPaymentList,
  deletePaymentList,
} = require("../../controller/PaymentListController");

router.get("/", getPaymentList);
router.post("/", postPaymentList);
router.put("/:id", putPaymentList);
router.delete("/:id", deletePaymentList);
module.exports = router;
