const express = require("express");
const router = express.Router();
const { submitPopup ,getAllPopups} = require("../controllers/PopupController");

router.get("/getAll", getAllPopups);
router.post("/submit", submitPopup);

module.exports = router;