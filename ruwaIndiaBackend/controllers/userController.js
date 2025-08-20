const User = require("../model/user");

// Get all employees

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await User.find({ role: "EMPLOYEE" });

    if (!employees || employees.length === 0) {
      return res.status(404).json({ message: "No employees found" });
    }

    res.status(200).json({
      success: true,
      count: employees.length,
      employees,
    });
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
