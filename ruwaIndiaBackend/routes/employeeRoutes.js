const express = require("express");
const router = express.Router();
const { createEmployee } = require("../controllers/employeeController");
const { auth, authorizeRole } = require("../middlewares/auth");


// Admin creates employee
router.post("/create", auth,authorizeRole("ADMIN"), createEmployee);

module.exports = router;
