const express = require("express");
const router = express.Router();
const {
  getSummary,
  getTodayLeads,
  getTodayArogya,
  getTodayMessages,
  getTodaysLeadsHourly
} = require("../controllers/dashBoardController");

const { auth, authorizeRole } = require("../middlewares/auth");

// Admin-only dashboard
router.get("/summary", auth, authorizeRole("ADMIN"), getSummary);
router.get("/leads/today", auth, authorizeRole("ADMIN"), getTodayLeads);
router.get("/arogya/today", auth, authorizeRole("ADMIN"), getTodayArogya);
router.get("/messages/today", auth, authorizeRole("ADMIN"), getTodayMessages);
router.get("/leads/todays-leads-hourly", auth, authorizeRole("ADMIN"), getTodaysLeadsHourly);

module.exports = router;
