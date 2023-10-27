const router = require("express").Router();
const {
  getState,
  postState,
  putState,
  deleteState,
} = require("../../controller/StateController");
const { protectRequests } = require("../../middleware/protectRequests");

router.get("/", getState);
router.post("/",protectRequests, postState);
router.put("/:id", protectRequests,putState);
router.delete("/:id", protectRequests,deleteState);
module.exports = router;
