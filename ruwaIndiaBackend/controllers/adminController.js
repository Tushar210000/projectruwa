const User = require("../model/user");

// Get Profile
exports.getProfile = async (req, res) => {
  try {
    const admin = await User.findById(req.user._id).select("-password");
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    res.json(admin);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Update Profile
exports.updateProfile = async (req, res) => {
  try {
    const { full_name, email, phone, address, language, time_zone, nationality, merchant_id } = req.body;

    const updateFields = { full_name, email, phone, address, language, time_zone, nationality, merchant_id };

    if (req.file) {
      updateFields.profile_pic = `/uploads/${req.file.filename}`;
    }

    const updatedAdmin = await User.findByIdAndUpdate(
      req.user._id,
      { $set: updateFields },
      { new: true }
    ).select("-password");

    res.json({ message: "Profile updated successfully", user: updatedAdmin });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};
