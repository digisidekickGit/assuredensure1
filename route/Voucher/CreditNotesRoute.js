const router = require("express").Router();
const {
  getCreditNotes,
  postCreditNotes,
  putCreditNotes,
  deleteCreditNotes,
  getCreditNotesByPopulate,
} = require("../../controller/CreditNotesController");

router.get("/", getCreditNotes);
router.get("/getCreditNotesByPopulate", getCreditNotesByPopulate);
router.post("/", postCreditNotes);
router.put("/:id", putCreditNotes);
router.delete("/:id", deleteCreditNotes);
module.exports = router;
