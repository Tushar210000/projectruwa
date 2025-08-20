// controllers/popupController.js
const PopupEntry = require("../model/popup");

exports.submitPopup = async (req, res) => {
  const { name, email, mobile, city, agree } = req.body;
  
  if (!name || !email || !mobile || !city  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if(!agree){
    return res.status(400).json({ message: "Please Agree Term And Conditions" });
  }
  try {
    const entry = new PopupEntry({ name, email, mobile, city, agree });
    await entry.save();
    res.status(201).json({ message: "Thank you for connecting!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



exports.getAllPopups = async (req, res) => {
  try {
    const entries = await PopupEntry.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
exports.deletePopup = async (req, res) => {
  try {
    const { _id } = req.params;
    const deleted = await PopupEntry.findByIdAndDelete(_id);

    if (!deleted) {
      return res.status(404).json({ message: "Lead not found" });
    }

    res.status(200).json({ message: "Lead deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
