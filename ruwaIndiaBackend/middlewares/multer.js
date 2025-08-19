// const multer = require("multer");
// const path = require("path");

// // Storage config
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/janarogya");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   }
// });

// const upload = multer({ storage: storage });

// module.exports = upload.fields([
//   { name: "idProof", maxCount: 1 },
//   { name: "qualificationCertificate", maxCount: 1 },
//   { name: "financialStatement", maxCount: 1 }
// ]);
