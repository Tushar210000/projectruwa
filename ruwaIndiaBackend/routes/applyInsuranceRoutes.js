const express = require("express");
const router = express.Router();
const insCtrl = require("../controllers/applyInsuranceController");
const { auth, authorizeRole } = require("../middlewares/auth");
const multer = require("multer");

// In-memory file storage (like JanArogya)
const upload = multer({ storage: multer.memoryStorage() });

/**
 * ================================
 * USER ROUTES
 * ================================
 */
router.post(
  "/user/apply",
  auth,
  authorizeRole("USER"),
  upload.fields([
    { name: "id_proof", maxCount: 1 },
    { name: "passport_photo", maxCount: 1 },
    { name: "medical_documents", maxCount: 1 },
    { name: "income_certificate", maxCount: 1 }
  ]),
  insCtrl.userApplyInsurance
);

router.get(
  "/user",
  auth,
  authorizeRole("USER"),
  insCtrl.getUserInsuranceApplications
);

/**
 * ================================
 * EMPLOYEE ROUTES
 * ================================
 */
router.post(
  "/employee/apply",
  auth,
  authorizeRole("EMPLOYEE"),
  upload.fields([
    { name: "id_proof", maxCount: 1 },
    { name: "passport_photo", maxCount: 1 },
    { name: "medical_documents", maxCount: 1 },
    { name: "income_certificate", maxCount: 1 }
  ]),
  insCtrl.applyInsurance
);

router.get(
  "/employee",
  auth,
  authorizeRole("EMPLOYEE"),
  insCtrl.getEmployeeInsuranceApplications
);

router.patch(
  "/employee/withdraw/:id",
  auth,
  authorizeRole("EMPLOYEE", "USER"),
  insCtrl.withdrawInsuranceApplication
);

/**
 * ================================
 * ADMIN ROUTES
 * ================================
 */
router.get(
  "/admin/all",
  auth,
  authorizeRole("ADMIN"),
  insCtrl.getAllInsuranceApplications
);

router.patch(
  "/admin/status/:id",
  auth,
  authorizeRole("ADMIN"),
  insCtrl.updateInsuranceApplicationStatus
);

module.exports = router;
