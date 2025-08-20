const express = require("express");
const router = express.Router();
const { getAllEmployees } = require("../controllers/userController");

const { auth,authorizeRole } = require("../middlewares/auth");

// Route -> GET /api/users/employees
router.get("/employees",auth,authorizeRole("ADMIN") ,getAllEmployees);

module.exports = router;
