// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const { submitContact, getAllEnquiry, deleteEnquiry } = require("../controllers/contactController");
const { authorizeRole,auth } = require("../middlewares/auth");

router.post("/submit", submitContact);
router.get("/getAll",auth,authorizeRole("ADMIN"), getAllEnquiry);
router.delete("/delete/:_id",auth,authorizeRole("ADMIN"), deleteEnquiry);
module.exports = router;
