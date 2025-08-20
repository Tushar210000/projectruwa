const express = require("express");
const router = express.Router();
const { submitPopup ,getAllPopups,deletePopup} = require("../controllers/PopupController");
const { authorizeRole,auth } = require("../middlewares/auth");

router.get("/admin/popup/getAll",auth,authorizeRole("ADMIN"), getAllPopups);
router.post("/submit", submitPopup);
router.delete("/admin/delete/:_id",auth,authorizeRole("ADMIN"),deletePopup)
module.exports = router;