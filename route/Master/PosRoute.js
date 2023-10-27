const {
  getPos,
  PostPos,
  putPos,
  deletePos,
  getPosByField,
  deleteImage,
  getPolicyByFilter,
  ValidateLoginForPos,
  PosLogin,
  singlePos,
} = require("../../controller/PosController");
const { uploadMany } = require("../../util/uploadManyImages");
const { UserVerifyToken, PosVerifyToken } = require("../../util/verifyToken");

const router = require("express").Router();
// const { protectRequests } = require("../../middleware/protectRequests");
const { protectUniquePOS, protectUniquePost } = require("../../middleware/PolicyValidation");
router.get("/", getPos);
router.post("/getPosByField", getPosByField);
router.post("/login", PosLogin);
router.post("/", uploadMany, protectUniquePost,PostPos);
router.post("/getPolicyByFilter", getPolicyByFilter);
router.post("/ValidateLoginForPos", ValidateLoginForPos);
router.put("/:id", uploadMany,protectUniquePOS, putPos);
router.delete("/:id", deletePos);
router.put("/delete/Image", deleteImage);
router.get("/singlePos", PosVerifyToken, singlePos);
module.exports = router;
