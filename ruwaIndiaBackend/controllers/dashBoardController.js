const User = require("../model/user");
const JanArogyaApply = require("../model/janArogyaApply");
const ContactMessage = require("../model/contactMessage");
const JanArogyaApplication = require("../model/janArogyaApplication");

// Dashboard summary
exports.getSummary = async (req, res) => {
  try {
    // Total Kendra (assuming role 'KENDRA')
    const totalKendra = await User.countDocuments({ role: "KENDRA" });

    // Total Employees
    const totalEmployees = await User.countDocuments({ role: "EMPLOYEE" });

    const today = new Date();
    today.setHours(0,0,0,0);

    // Today leads = JanArogyaApply submitted today
    const todayLeads = await JanArogyaApply.countDocuments({ createdAt: { $gte: today } });

    // Today Arogya cards = JanArogyaApplication submitted today
    const todayArogyaUploads = await JanArogyaApplication.countDocuments({ createdAt: { $gte: today } });

    // Today Contact messages
    const todayMessages = await ContactMessage.countDocuments({ submittedAt: { $gte: today } });

    res.json({
      totalKendra,
      totalEmployees,
      todayLeads,
      todayArogyaUploads,
      todayMessages
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Today’s leads (JanArogyaApply)
exports.getTodayLeads = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0,0,0,0);

    const leads = await JanArogyaApply.find({ createdAt: { $gte: today } })
      .populate("appliedBy", "full_name email phone")
      .sort({ createdAt: -1 });

    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Today’s Arogya applications (JanArogyaApplication)
exports.getTodayArogya = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0,0,0,0);

    const applications = await JanArogyaApplication.find({ createdAt: { $gte: today } })
      .populate("appliedBy", "full_name email phone")
      .sort({ createdAt: -1 });

    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Today Contact messages
exports.getTodayMessages = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0,0,0,0);

    const messages = await ContactMessage.find({ submittedAt: { $gte: today } })
      .sort({ submittedAt: -1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Hourly leads for charts
exports.getTodaysLeadsHourly = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0,0,0,0);

    const hourlyLeads = await JanArogyaApply.aggregate([
      { $match: { createdAt: { $gte: today } } },
      { $group: { _id: { $hour: "$createdAt" }, count: { $sum: 1 } } },
      { $sort: { "_id": 1 } },
      { $project: { hour: "$_id", count: 1, _id: 0 } }
    ]);

    res.json(hourlyLeads);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
