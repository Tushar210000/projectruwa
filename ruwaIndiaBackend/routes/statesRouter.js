// routes/stateRoutes.js
const express = require("express");
const router = express.Router();
const { getAllStates } = require("../controllers/statesController");

// Route to get all states
router.get("/get", getAllStates);

module.exports = router;
