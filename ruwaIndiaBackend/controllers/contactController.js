// controllers/contactController.js
const ContactMessage = require('../model/contactMessage');

exports.submitContact = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newMessage = new ContactMessage({ name, email, phone, message });
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};
 exports.getAllEnquiry = async (req, res) => {
   try {
     const entries = await ContactMessage.find().sort({ createdAt: -1 }); // latest first
     res.status(200).json(entries);
   } catch (error) {
     res.status(500).json({ message: "Server error", error: error.message });
   }
 };
 // Delete enquiry by ID
exports.deleteEnquiry = async (req, res) => {
  try {
    const { _id } = req.params;
     console.log(_id)
    const deleted = await ContactMessage.findByIdAndDelete(_id);

    if (!deleted) {
      return res.status(404).json({ message: "Enquiry not found" });
    }

    res.status(200).json({ message: "Enquiry deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

