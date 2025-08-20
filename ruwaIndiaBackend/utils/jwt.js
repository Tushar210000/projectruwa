const jwt = require("jsonwebtoken");
require('dotenv').config();
const SECRET = process.env.SECRET_KEY;

function generateToken(user) {
  return jwt.sign({ id: user._id, phone: user.phone,role:user.role }, SECRET, { expiresIn: "7d" });
}

module.exports = { generateToken };
