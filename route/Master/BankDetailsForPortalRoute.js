const {
  PostPBD,
  putPBD,
  getPBDForPos,
  deletePBD,
  deleteImage,
  getPBDForPosbyName,
} = require("../../controller/BankDetailsForPortalController");
const { uploadMany } = require("../../util/uploadManyImages");

const 
router = require("express").Router();
// const { protectRequests } = require("../../middleware/protectRequests");
router.get("/getPBDForPos/:id", getPBDForPos);
router.get("/getPBDForPos/byName/:id", getPBDForPosbyName);
router.post("/", uploadMany, PostPBD);
router.put("/:id", uploadMany, putPBD);
router.delete("/:id", deletePBD);
router.put("/delete/Image", deleteImage);


module.exports = router;
