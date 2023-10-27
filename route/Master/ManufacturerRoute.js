const router = require("express").Router();
const {
  getManufacturer,
  postManufacturer,
  putManufacturer,
  deleteManufacturer,
} = require("../../controller/ManufacturerController");
const { protectRequests } = require("../../middleware/protectRequests");

router.get("/", getManufacturer);
router.post("/", protectRequests,postManufacturer);
router.put("/:id", protectRequests,putManufacturer);
router.delete("/:id", protectRequests,deleteManufacturer);
module.exports = router;
