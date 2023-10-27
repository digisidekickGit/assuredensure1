const router = require("express").Router();
const {
  getRTO,
  postRTO,
  putRTO,
  deleteRTO,
  getRTODuplicate,
  SelectBoxDropdown,
  addState,
} = require("../../controller/RtoController");
const { protectRequests } = require("../../middleware/protectRequests");

router.get("/", getRTO);
router.get("/SelectBoxDropdown", SelectBoxDropdown);
router.post("/", protectRequests, postRTO);
router.post("/ADDSTATE", addState);
router.put("/:id", protectRequests, putRTO);
router.delete("/:id", protectRequests, deleteRTO);
router.get("/getRTODuplicate", getRTODuplicate);
module.exports = router;
