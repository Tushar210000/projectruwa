import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'; // Install: npm install react-google-recaptcha

export default function Forgot() {
  const [step, setStep] = useState(1); // 1 = input, 2 = verify OTP
  const [contact, setContact] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptcha = (value) => {
    setCaptchaVerified(true);
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert('Please verify CAPTCHA.');
      return;
    }

    // 👉 Send OTP to backend
    console.log('Sending OTP to', contact);
    // You'd call: POST /api/send-otp with contact

    setStep(2);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // 👉 Send OTP and newPassword to backend for verification
    console.log('Verifying OTP and resetting password');

    // Show popup or toast
    alert('✅ Password changed successfully!');
    // Reset form
    setStep(1);
    setContact('');
    setOtp('');
    setNewPassword('');
    setCaptchaVerified(false);
  };

  return (
    <div className="modal fade" id="forgotModal" tabIndex="-1" aria-labelledby="forgotModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="forgotModalLabel">Forgot Password</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>

          <div className="modal-body">
            {step === 1 ? (
              <form onSubmit={handleSendOtp}>
                <div className="mb-3">
                  <label className="form-label">Enter your Email or Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email or phone number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 text-center">
                  <ReCAPTCHA
                    sitekey="YOUR_RECAPTCHA_SITE_KEY" // 🔒 Use your actual reCAPTCHA v2 site key here
                    onChange={handleCaptcha}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Send OTP</button>
              </form>
            ) : (
              <form onSubmit={handleResetPassword}>
                <div className="mb-3">
                  <label className="form-label">Enter OTP</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">Reset Password</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
