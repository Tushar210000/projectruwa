const mongoose = require("mongoose");

const janArogyaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  aadhar: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },

  income_certificate: String,     // storing file as buffer
  caste_certificate: String,      // optional
  ration_id: String,               // ration card file

  appliedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  forUser: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  status: {
    type: String,
    enum: ["PENDING", "APPROVED", "REJECTED", "WITHDRAWN"],
    default: "PENDING"
  }
}, { timestamps: true });

module.exports = mongoose.model("JanArogyaApplication", janArogyaSchema);
