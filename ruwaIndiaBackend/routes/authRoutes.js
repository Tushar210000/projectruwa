const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/authController");
const {auth, authorizeRole} = require("../middlewares/auth"); // Make sure this file exists and exports a function

// Public routes
router.post("/register", ctrl.register);
router.post("/admin/register" , ctrl.adminRegister);
router.post("/login", ctrl.login);

router.post("/reset", ctrl.resetPassword);
router.get("/profile", auth, ctrl.getProfile);
// Protected route example
// router.get("/profile", auth, (req, res) => {
//   res.json({ user: req.user });
// });

module.exports = router;
