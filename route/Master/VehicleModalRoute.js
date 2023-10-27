const router = require("express").Router();
const {
  getVehicleModal,
  postVehicleModal,
  putVehicleModal,
  deleteVehicleModal,

} = require("../../controller/VehicleModalController");
router.post("/getVehicleModal", getVehicleModal);
router.put("/create", postVehicleModal);
router.put("/:id", putVehicleModal);
router.delete("/delete", deleteVehicleModal);
module.exports = router;
