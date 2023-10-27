const router = require("express").Router();

const { generatePDFForSale } = require("../../PDF/SalesPDF.JS");
const {
  getSale,
  postSale,
  putSale,
  deleteSale,
  getIsSale,
  getSingle,
  getGenerateReport,
  getExcel,
} = require("../../controller/SaleController");

router.get("/", getSale);
router.get("/single/:id", getSingle);
router.get("/single/Excel/:id", getExcel);
router.get("/getGenerateReport/:id", getGenerateReport, generatePDFForSale); // generatePDFForSale
router.post("/getIsSale", getIsSale);

router.post("/", postSale);
router.put("/:id", putSale);
router.delete("/:id", deleteSale);

module.exports = router;
