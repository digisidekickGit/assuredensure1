const router = require("express").Router();
const {
  getBroker,
  postBroker,
  putBroker,
  deleteBroker,
  getBrokerOpt,
} = require("../../controller/BrokerController");
const { protectRequests } = require("../../middleware/protectRequests");
router.get("/", getBroker);
router.get("/getBrokerOpt", getBrokerOpt);
router.post("/",protectRequests, postBroker);
router.put("/:id",protectRequests, putBroker);
router.delete("/:id",protectRequests, deleteBroker);
module.exports = router;
