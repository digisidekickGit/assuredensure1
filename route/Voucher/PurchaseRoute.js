const router = require("express").Router();

const { generatePDFForPurchase } = require("../../PDFKit");
const {
  getPurchase,
  postPurchase,
  putPurchase,
  deletePurchase,
  getIsPurchase,
  getSingle,
  getGenerateReport,
  getExcel,
} = require("../../controller/PurchaseController");

router.get("/", getPurchase);
router.get("/single/:id", getSingle);
router.get("/single/Excel/:id", getExcel);
router.get("/getGenerateReport/:id", getGenerateReport, generatePDFForPurchase); // generatePDFForPurchase
router.post("/getIsPurchase", getIsPurchase);

router.post("/", postPurchase);
router.put("/:id", putPurchase);
router.delete("/:id", deletePurchase);

module.exports = router;
