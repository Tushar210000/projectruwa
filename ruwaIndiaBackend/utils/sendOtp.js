const axios = require("axios");
require("dotenv").config();

const otpStore = new Map();

const sendOTP = async (phone) => {
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
  otpStore.set(phone, otp);

  const phoneNumber = phone.replace("+91", ""); // Remove +91 if included

  try {
    const response = await axios.post(
      "https://www.fast2sms.com/dev/bulkV2",
      {
        route: "q", // Quick route - does not require DLT
        sender_id: "FSTSMS", // Required for free plan
        message: `Your OTP is ${otp}. Do not share it with anyone.`,
        language: "english",
        flash: 0,
        numbers: phoneNumber
      },
      {
        headers: {
          authorization: process.env.FAST2SMS_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("SMS response:", response.data);
    return true;
  } catch (error) {
    console.error("SMS error:", error.response?.data || error.message);
    return false;
  }
};

const verifyOTP = (phone, userOtp) => {
  const validOtp = otpStore.get(phone);
  if (validOtp && validOtp == userOtp) {
    otpStore.delete(phone);
    return true;
  }
  return false;
};

module.exports = { sendOTP, verifyOTP };
