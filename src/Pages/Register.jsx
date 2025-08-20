import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!isValidEmail(formData.email)) newErrors.email = 'Enter a valid email';

    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm your password';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Registered:', formData);
      // Submit to backend here
    }
  };

  return (
    <div className='vh' style={{ background: 'linear-gradient(135deg, #d6f8e5, #d9e9ff)', padding: '1rem' }}>
      {/* Logo & Brand */}
      <div className="d-flex justify-content-between align-items-start mb-4 w-100">
        <img src="img/marketinglogo.png" alt="Logo" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
        <h4 className="mb-0 mt-10 fw-bold text-dark">
          Marketing Mantra <sup className="text-muted">TM</sup>
        </h4>
      </div>

      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="bg-white p-4 p-md-5 rounded shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold">Register</h3>
            <Link to="/login" className="text-primary text-decoration-none">Already have an account?</Link>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                </button>
              </div>
              {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">Register</button>

            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="mx-2 text-muted">Sign Up With</span>
              <hr className="flex-grow-1" />
            </div>

            <div className="d-flex justify-content-between gap-2">
              <button type="button" className="btn btn-light border w-100 d-flex align-items-center justify-content-center">
                <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" width="20" className="me-2" />
                Google
              </button>
              <button type="button" className="btn btn-light border w-100 d-flex align-items-center justify-content-center">
                <i className="bi bi-twitter text-primary me-2"></i>
                Twitter
              </button>
              <button type="button" className="btn btn-light border w-100 d-flex align-items-center justify-content-center">
                <i className="bi bi-facebook text-primary me-2"></i>
                Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
