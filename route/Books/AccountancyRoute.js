const router = require("express").Router();
const { LedgerPdf } = require("../../LedgerPdf");
const {
  getAccountancy,
  getAccountancyCheckAllModal,
  generatePdf,
  reportOfTdsSheet,
} = require("../../controller/AccountancyController");

router.get("/", getAccountancy);
router.get("/getAccountancyCheckAllModal", getAccountancyCheckAllModal);
router.get("/download/pdf", LedgerPdf);
router.get("/reportOfTdsSheet", reportOfTdsSheet);
router.get("/generatePdf", generatePdf, LedgerPdf);

module.exports = router;
