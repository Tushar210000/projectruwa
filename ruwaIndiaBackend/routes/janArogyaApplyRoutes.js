const express = require("express");
const router = express.Router();
const { applyJanArogya, updateJanArogyaStatus } = require("../controllers/janArogyaApplyController");
const { auth,authorizeRole } = require("../middlewares/auth");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
router.post(
  "/apply",
  auth,
  authorizeRole("USER"),
  upload.fields([
    { name: "idProof", maxCount: 1 },
    { name: "qualificationCertificate", maxCount: 1 },
    { name: "financialStatement", maxCount: 1 }
  ]),
  applyJanArogya
);
router.put("/:id/status", auth, authorizeRole("ADMIN"), updateJanArogyaStatus);


module.exports = router;
