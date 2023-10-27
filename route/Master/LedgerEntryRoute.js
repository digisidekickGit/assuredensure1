const router = require("express").Router();
const {
  getLedgerEntry,
  postLedgerEntry,
  putLedgerEntry,
  deleteLedgerEntry,
  getDebitAccounts,
  getCashAccount,
} = require("../../controller/LedgerEntryController");

router.get("/", getLedgerEntry);
router.get("/getDebitAccounts", getDebitAccounts);
router.get("/getCashAccount", getCashAccount);
router.get("/getLedgerEntryData", getLedgerEntry);
router.post("/", postLedgerEntry);
router.put("/:id", putLedgerEntry);
router.delete("/:id", deleteLedgerEntry);
module.exports = router;
