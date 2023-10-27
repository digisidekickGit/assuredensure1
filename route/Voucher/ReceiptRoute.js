const router = require("express").Router();
const {
  getReceipt,
  postReceipt,
  putReceipt,
  deleteReceipt,
  getLedger,
} = require("../../controller/ReceiptController");

router.get("/", getReceipt);
router.post("/", postReceipt);
router.put("/:id", putReceipt);
router.delete("/:id", deleteReceipt);
router.get("/getLedger", getLedger);
module.exports = router;
