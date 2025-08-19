import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      if (formData.countryCode === '+91' && !/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Indian number must be 10 digits';
      }
      if (formData.countryCode === '+1' && !/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'US number must be 10 digits';
      }
      if (formData.countryCode === '+44' && !/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'UK number must be 10 digits';
      }
    }

    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSuccess('');
    setErrors({});

    try {
      const fullPhone = `${formData.countryCode}${formData.phone}`;

      const res = await fetch(`http://localhost:8000/api/contact/submit`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: fullPhone,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message || "Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          countryCode: '+91',
          phone: '',
          message: '',
        });
      } else {
        setErrors({ api: data.message || "Failed to send message" });
      }
    } catch (error) {
      setErrors({ api: "Something went wrong, please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section contact__v2" id="contact">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 col-lg-7 mx-auto text-center">
            <span className="subtitle text-uppercase mb-3">Contact</span>
            <h2 className="h2 fw-bold mb-3">Contact Us</h2>
            <p>We're here to guide you toward better health and secure insurance. For help with the Jan Arogya Card, Jan Swabhiman Seva, or our services, contact us via phone, email, or visit a nearby center. Your well-being is our top priority.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            {/* Static contact info */}
            <div className="d-flex gap-5 flex-column">
              <div className="d-flex align-items-start gap-3">
                <div className="icon d-block"><i className="bi bi-telephone"></i></div>
                <span><span className="d-block">Phone</span><strong>+(01 000 000 0000)</strong></span>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="icon d-block"><i className="bi bi-send"></i></div>
                <span><span className="d-block">Email</span><strong>{process.env.REACT_APP_EMAIL}</strong></span>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="icon d-block"><i className="bi bi-geo-alt"></i></div>
                <span>
                  <span className="d-block">Address</span>
                  <address className="fw-bold">123 Main Street , <br />Nashik Maharashtra</address>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            {/* Form */}
            <div className="form-wrapper">
              <form id="contactForm" onSubmit={handleSubmit} noValidate>
                {/* Error/Success */}
                {errors.api && <p className="text-danger">{errors.api}</p>}
                {success && <p className="text-success">{success}</p>}

                {/* Name */}
                <div className="mb-3">
                  <label className="mb-2" htmlFor="name">Name</label>
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="text-danger small">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="mb-2" htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-danger small">{errors.email}</p>}
                </div>

                {/* Phone with Country Code */}
                <div className="mb-3">
                  <label className="mb-2" htmlFor="phone">Phone Number</label>
                  <div className="d-flex">
                    <select
                      className="form-select me-2"
                      style={{ maxWidth: '100px' }}
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                    >
                      <option value="+91">+91 (IN)</option>
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (UK)</option>
                    </select>
                    <input
                      className="form-control"
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.phone && <p className="text-danger small">{errors.phone}</p>}
                </div>

                {/* Message */}
                <div className="mb-3">
                  <label className="mb-2" htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <p className="text-danger small">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button className="btn btn-primary fw-semibold" type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
