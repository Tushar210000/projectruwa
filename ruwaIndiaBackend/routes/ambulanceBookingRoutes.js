const express = require("express");
const router = express.Router();
const ambulanceCtrl = require("../controllers/ambulanceBookingController");
const { auth, authorizeRole } = require("../middlewares/auth");

/**
 * ================================
 * USER ROUTES (Book for yourself)
 * ================================
 */
router.post(
  "/user/book",
  auth,
  authorizeRole("USER"),
  ambulanceCtrl.userBookAmbulance
);

router.get(
  "/user",
  auth,
  authorizeRole("USER"),
  ambulanceCtrl.getUserBookings
);

/**
 * ===================================
 * EMPLOYEE ROUTES (Book on behalf)
 * ===================================
 */
router.post(
  "/employee/book",
  auth,
  authorizeRole("EMPLOYEE"),
  ambulanceCtrl.bookAmbulanceForUser
);

router.get(
  "/employee",
  auth,
  authorizeRole("EMPLOYEE"),
  ambulanceCtrl.getEmployeeBookings
);

router.patch(
  "/employee/withdraw/:id",
  auth,
  authorizeRole("EMPLOYEE", "USER"),
  ambulanceCtrl.withdrawBooking
);

/**
 * ==================
 * ADMIN ROUTES
 * ==================
 */
router.get(
  "/admin/all",
  auth,
  authorizeRole("ADMIN"),
  ambulanceCtrl.getAllBookings
);

router.patch(
  "/admin/status/:id",
  auth,
  authorizeRole("ADMIN"),
  ambulanceCtrl.updateBookingStatus
);

router.delete("/admin/delete/:_id",auth,authorizeRole('ADMIN'),ambulanceCtrl.deleteBookingByAdmin)

module.exports = router;
