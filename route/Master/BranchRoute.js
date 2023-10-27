const router = require("express").Router();
const {
  getBranch,
  postBranch,
  putBranch,
  deleteBranch,
} = require("../../controller/BranchController");
const { protectRequests } = require("../../middleware/protectRequests");
router.get("/", getBranch);
router.post("/",protectRequests, postBranch);
router.put("/:id",protectRequests, putBranch);
router.delete("/:id",protectRequests, deleteBranch);
module.exports = router;
