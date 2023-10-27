const router = require("express").Router();
const {
  setMakeModalData,
  getDataByField,
  getFuelType,
  getVariant,
  getDropDownData,
  getAllFuelType,
  db,
  CreateNewJsonFile,
  getMakeModel,
  getDataById,
  create,
  edit,
  getMakeModelSelectBox,
  deleteMakeModal
} = require("../../controller/MakeModalController");

router.get("/getMakeModel", getMakeModel);
router.get("/getMakeModelSelectBox", getMakeModelSelectBox);
router.get("/setMakeModalData", setMakeModalData);
router.get("/getAllFuelType", getAllFuelType);
router.post("/getDataByField", getDataByField);
router.post("/getFuelType", getFuelType);
router.post("/getVariant", getVariant);
router.get("/db", db);
router.get("/CreateNewJsonFile", CreateNewJsonFile);
router.post("/getDropDownData", getDropDownData);
router.get("/getDataById/:id", getDataById);
router.post("/create", create);
router.delete("/deleteMakeModal/:id", deleteMakeModal);
router.put("/edit/:id", edit);

module.exports = router;
