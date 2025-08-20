import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    aadhar:"",
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch('http://192.168.1.6:5000/api/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Registered successfully!");
        navigate('/login'); // Redirect to login page
      } else {
        alert(`❌ ${data.message || 'Registration failed'}`);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="container py-5">
      <div className="mx-auto shadow p-4 rounded" style={{ maxWidth: 500 }}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleRegisterSubmit}>
          <input
            type="text"
            name="name"
            className="form-control mb-3"
            placeholder="Full Name"
            value={registerData.name}
            onChange={handleRegisterChange}
            required
          />

          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Email"
            value={registerData.email}
            onChange={handleRegisterChange}
            required
          />

          <input
            type="tel"
            name="phone"
            className="form-control mb-3"
            placeholder="Phone Number"
            value={registerData.phone}
            onChange={handleRegisterChange}
            required
          />
 <input
            type="number"
            name="aadhar"
            className="form-control mb-3"
            placeholder="Aadhar Number"
            value={registerData.aadhar}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="number"
            name="age"
            className="form-control mb-3"
            placeholder="Age"
            value={registerData.age}
            onChange={handleRegisterChange}
            required
          />

          <div className="mb-3 position-relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              className="form-control"
              placeholder="Password"
              value={registerData.password}
              onChange={handleRegisterChange}
              required
            />
            <i
              className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} position-absolute top-50 end-0 translate-middle-y me-3`}
              style={{ cursor: 'pointer' }}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          <div className="mb-3 position-relative">
            <input
              type={showConfirm ? 'text' : 'password'}
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm Password"
              value={registerData.confirmPassword}
              onChange={handleRegisterChange}
              required
            />
            <i
              className={`bi ${showConfirm ? 'bi-eye-slash' : 'bi-eye'} position-absolute top-50 end-0 translate-middle-y me-3`}
              style={{ cursor: 'pointer' }}
              onClick={() => setShowConfirm(!showConfirm)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Register</button>

          <div className="d-flex justify-content-between mt-3">
            <Link to="/forgot">Forgot Password?</Link>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
