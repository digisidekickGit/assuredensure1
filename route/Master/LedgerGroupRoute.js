const router = require("express").Router();
const {
  getLedgerGroup,
  postLedgerGroup,
  putLedgerGroup,
  deleteLedgerGroup,
} = require("../../controller/LedgerGroupController");

router.get("/", getLedgerGroup);
router.post("/", postLedgerGroup);
router.put("/:id", putLedgerGroup);
router.delete("/:id", deleteLedgerGroup);
module.exports = router;
