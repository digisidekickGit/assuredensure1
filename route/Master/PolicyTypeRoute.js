const router = require("express").Router();
const {
  getPolicyType,
  postPolicyType,
  putPolicyType,
  deletePolicyType,
} = require("../../controller/PolicyTypeController");
const { protectRequests } = require("../../middleware/protectRequests");

router.get("/", getPolicyType);
router.post("/", protectRequests,postPolicyType);
router.put("/:id", protectRequests,putPolicyType);
router.delete("/:id", protectRequests,deletePolicyType);
module.exports = router;
