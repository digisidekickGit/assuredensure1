const router = require("express").Router();
const {
  getContra,
  postContra,
  putContra,
  deleteContra,
} = require("../../controller/ContraController");

router.get("/", getContra);
router.post("/", postContra);
router.put("/:id", putContra);
router.delete("/:id", deleteContra);

module.exports = router;
