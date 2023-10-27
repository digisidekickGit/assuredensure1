const router = require("express").Router();
const {
  getDebitNotes,
  postDebitNotes,
  putDebitNotes,
  deleteDebitNotes,
  getDebitNotesByPopulate,
} = require("../../controller/DebitNotesController");

router.get("/", getDebitNotes);
router.get("/getDebitNotesByPopulate", getDebitNotesByPopulate);
router.post("/", postDebitNotes);
router.put("/:id", putDebitNotes);
router.delete("/:id", deleteDebitNotes);
module.exports = router;
