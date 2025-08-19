// models/PopupEntry.js
const mongoose = require("mongoose");

const popupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  city: { type: String, required: true },
  agree: { type: Boolean, required: true },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Popup", popupSchema);
