const router = require("express").Router();
const { getPincode, postPincode, putPincode, deletePincode } = require("../../controller/PincodeController");
const { protectRequests } = require("../../middleware/protectRequests");


router.get("/", getPincode);
router.post("/", protectRequests,postPincode);
router.put("/:id",protectRequests, putPincode);
router.delete("/:id", protectRequests,deletePincode);
module.exports = router;
