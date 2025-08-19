const User = require("../model/user");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwt");

// REGISTER
exports.register = async (req, res) => {
  const { name, phone, password, aadhar } = req.body;
  if (!name || !phone || !password  || !aadhar) {
    return res.status(400).json({ message: "All fields are required" });
  }

  let user = await User.findOne({ phone,aadhar });
  if (user) return res.status(400).json({ message: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);
  user = new User({ name, phone, password: hashed, role:"USER",aadhar });
  await user.save();

  const token = generateToken(user);
  res.json({ message: "Registered", token, role: user.role });
};
 exports.adminRegister = async (req, res) => {
  const { name, phone, password } = req.body;
  if (!name || !phone || !password  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  let user = await User.findOne({ phone});
  if (user) return res.status(400).json({ message: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);
  user = new User({ name, phone, password: hashed, role:"ADMIN" });
  await user.save();

  const token = generateToken(user);
  res.json({ message: "Registered", token, role: user.role });
 }
// LOGIN via password
exports.login = async (req, res) => {
  const { phone, password } = req.body;
  const user = await User.findOne({ phone });
  if (!user) return res.status(404).json({ message: "User not found" });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ message: "Incorrect password" });

  const token = generateToken(user);
  console.log(user.role)
  res.json({ message: "Logged in", token,role:user.role });
};

// RESET password (with phone verification logic assumed)
exports.resetPassword = async (req, res) => {
  const { phone, newPassword } = req.body;
  const user = await User.findOne({ phone });
  if (!user) return res.status(404).json({ message: "User not found" });

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();

  res.json({ message: "Password reset successful" });
};
exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.id; // set in middleware
    console.log(userId)
    const user = await User.findById(userId).select("-password"); // exclude password
    console.log(user)
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Profile fetch error:", error);
    res.status(500).json({ message: "Server error" });
  }
};