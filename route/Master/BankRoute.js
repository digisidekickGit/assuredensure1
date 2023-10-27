const router = require("express").Router();
const {
  getBank,
  getBankByUs,
  postBank,
  putBank,
  deleteBank,
} = require("../../controller/BankController");
const { protectRequests } = require("../../middleware/protectRequests");
router.get("/", getBank);
router.get("/getBankByUs", getBankByUs);
router.post("/",protectRequests, postBank);
router.put("/:id", protectRequests,putBank);
router.delete("/:id",protectRequests, deleteBank);
module.exports = router;
