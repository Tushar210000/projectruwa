

// Create Employee (Admin Only)
const User = require("../model/user");
const bcrypt = require("bcrypt");


// Create Employee (Admin Only)
exports.createEmployee = async (req, res) => {
  try {
    // Ensure only Admin can create employees
   

    const { name, phone, password, employeeId, email } = req.body;

    if (!name || !phone || !password || !employeeId || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if employeeId already exists
    const existingEmployeeId = await User.findOne({ employeeId });
    if (existingEmployeeId) {
      return res.status(400).json({ message: "Employee ID already exists" });
    }

    // Check if phone already exists
    const existingPhone = await User.findOne({ phone });
    if (existingPhone) {
      return res.status(400).json({ message: "Phone number already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create employee with role EMPLOYEE
    const newEmployee = new User({
      name,
      phone,
      password: hashedPassword,
      role: "EMPLOYEE",
      employeeId,
      email,
      verified: true // Add an approval flag
    });

    await newEmployee.save();

    res.status(201).json({
      message: "Employee created successfully. Pending admin approval.",
      employee: newEmployee
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
