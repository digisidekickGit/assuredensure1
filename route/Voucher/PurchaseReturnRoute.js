const router = require("express").Router();

const {
  getPurchaseReturn,
  postPurchaseReturn,
  putPurchaseReturn,
  deletePurchaseReturn,
  getIsPurchaseReturn,
  getSingle,
} = require("../../controller/PurchaseReturnController");

router.get("/", getPurchaseReturn);
router.get("/single/:id", getSingle);
router.post("/getIsPurchaseReturn", getIsPurchaseReturn);
router.post("/", postPurchaseReturn);
router.put("/:id", putPurchaseReturn);
router.delete("/:id", deletePurchaseReturn);

module.exports = router;
