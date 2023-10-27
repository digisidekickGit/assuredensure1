const { putRBAC, deleteRBAC, getRBAC, postRBAC } = require("../../controller/AccessControl/RBAC-Controller");
const router = require("express").Router();
router.get("/", getRBAC);
router.post("/", postRBAC);
router.put("/:id", putRBAC);
router.delete("/:id", deleteRBAC);
module.exports = router;
