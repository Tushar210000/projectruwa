// // import React from 'react';

// // export default function Insurance() {
// //   return (
// //     <div className="container py-5" style={{ marginTop: '80px' }}>
// //       <h2 className="mb-4">Apply for Jan Arogya Card</h2>
// //       <form>
// //         <div className="mb-3">
// //           <label className="form-label">Full Name</label>
// //           <input type="text" className="form-control" required />
// //         </div>
// //         <div className="mb-3">
// //           <label className="form-label">Phone Number</label>
// //           <input type="tel" className="form-control" required />
// //         </div>
// //         <div className="mb-3">
// //           <label className="form-label">Hospital Preference</label>
// //           <input type="text" className="form-control" />
// //         </div>
// //         <button type="submit" className="btn btn-success">Submit</button>
// //       </form>
// //     </div>
// //   );
// // }

// // import React, { useState } from 'react';

// // export default function Janarogycard() {
// //   const [formSubmitted, setFormSubmitted] = useState(false);

// //   const cardServices = [
// //     {
// //       icon: '🪪',
// //       title: 'Jan Arogya Card',
// //       description: [
// //         'Covers major health treatments at partnered hospitals.',
// //         'Easy enrollment with minimal documentation.',
// //         'Covers expenses up to ₹5 Lakhs per family per year.'
// //       ],
// //       bgClass: 'bg-white'
// //     },
// //     {
// //       icon: '👨‍👩‍👧‍👦',
// //       title: 'Jan Swabhiman Seva Card',
// //       description: [
// //         'Access to a wide range of welfare benefits.',
// //         'Discounts on medical services and medicines.',
// //         'Priority access to free ambulance services.'
// //       ],
// //       bgClass: 'bg-light'
// //     },
// //     {
// //       icon: '📋',
// //       title: 'Instant Registration Process',
// //       description: [
// //         'Fill in basic details and upload ID proof.',
// //         'Real-time verification and card issuance.',
// //         'Digital and physical card options available.'
// //       ],
// //       bgClass: 'bg-white'
// //     },
// //     {
// //       icon: '🏥',
// //       title: 'Partnered Hospitals & Clinics',
// //       description: [
// //         'More than 200 hospitals under the scheme.',
// //         'Cashless treatments for covered procedures.',
// //         'Regular health camps and wellness checkups.'
// //       ],
// //       bgClass: 'bg-light'
// //     }
// //   ];

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setFormSubmitted(true);

// //     setTimeout(() => {
// //       setFormSubmitted(false);
// //     }, 4000);

// //     // Handle backend submission logic if needed
// //   };

// //   return (
// //     <section className="section services__v3 py-5" id="insurance">
// //       <div className="container">
// //         <div className="row g-4">
// //           <div className="col-12" data-aos="fade-up">
// //             <div className="service-card p-4 rounded-4 h-100 d-flex flex-column text-center gap-3 shadow-sm">
// //               <span className="subtitle text-uppercase mb-2 text-muted fs-6">
// //                 Get Your Health Card
// //               </span>
// //             </div>
// //           </div>

// //           {cardServices.map((service, index) => (
// //             <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay={index * 200} key={index}>
// //               <div className={`service-card p-4 rounded-4 h-100 d-flex flex-column gap-3 shadow-sm ${service.bgClass}`}>
// //                 <div className="text-center fs-2">{service.icon}</div>
// //                 <h3 className="text-center fs-5 mb-2">{service.title}</h3>
// //                 <ul className="ps-3 mb-0">
// //                   {service.description.map((point, i) => (
// //                     <li key={i} className="mb-2" style={{ lineHeight: '1.6' }}>{point}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="container py-5">
// //         <h2 className="mb-4 text-center">Apply for Health Card</h2>

// //         {formSubmitted && (
// //           <div className="alert alert-success text-center fw-semibold" role="alert">
// //             ✅ Insurance card application submitted successfully!
// //           </div>
// //         )}

// //         <form onSubmit={handleSubmit}>
// //           <div className="row g-3">
// //             <div className="col-md-6">
// //               <label className="form-label">Full Name</label>
// //               <input type="text" className="form-control" placeholder="Enter your full name" required />
// //             </div>
// //             <div className="col-md-6">
// //               <label className="form-label">Phone Number</label>
// //               <input type="tel" className="form-control" placeholder="e.g. 9876543210" required />
// //             </div>
// //             <div className="col-md-6">
// //               <label className="form-label">Email</label>
// //               <input type="email" className="form-control" placeholder="your@email.com" required />
// //             </div>
// //             <div className="col-md-6">
// //               <label className="form-label">Select Card Type</label>
// //               <select className="form-select" required>
// //                 <option value="">-- Select Card --</option>
// //                 <option value="Jan Arogya Card">Jan Arogya Card</option>
// //                 <option value="Jan Swabhiman Card">Jan Swabhiman Card</option>
// //               </select>
// //             </div>
// //             <div className="col-12">
// //               <label className="form-label">Message / Additional Notes</label>
// //               <textarea className="form-control" rows="4" placeholder="Mention any documents or special request..." />
// //             </div>
// //           </div>
// //           <div className="text-center mt-4">
// //             <button type="submit" className="btn btn-primary px-5">Apply Now</button>
// //           </div>
// //         </form>
// //       </div>
// //     </section>
// //   );
// // }
// import React, { useState } from 'react';
// import { Form, Button, Col, Row, Container } from 'react-bootstrap';

// export default function Janarogycard() {
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     aadhar: '',
//     mobile: '',
//     state: '',
//     district: '',
//     captcha: '',
//     incomeCert: null,
//     casteCert: null,
//     rationCard: null
//   });
//   const [errors, setErrors] = useState({});

//   const cardServices = [
//     {
//       icon: '🪪',
//       title: 'Jan Arogya Card',
//       description: [
//         'Covers major health treatments at partnered hospitals.',
//         'Easy enrollment with minimal documentation.',
//         'Covers expenses up to ₹5 Lakhs per family per year.'
//       ],
//       bgClass: 'bg-white'
//     },
//     {
//       icon: '👨‍👩‍👧‍👦',
//       title: 'Jan Swabhiman Seva Card',
//       description: [
//         'Access to a wide range of welfare benefits.',
//         'Discounts on medical services and medicines.',
//         'Priority access to free ambulance services.'
//       ],
//       bgClass: 'bg-light'
//     },
//     {
//       icon: '📋',
//       title: 'Instant Registration Process',
//       description: [
//         'Fill in basic details and upload ID proof.',
//         'Real-time verification and card issuance.',
//         'Digital and physical card options available.'
//       ],
//       bgClass: 'bg-white'
//     },
//     {
//       icon: '🏥',
//       title: 'Partnered Hospitals & Clinics',
//       description: [
//         'More than 200 hospitals under the scheme.',
//         'Cashless treatments for covered procedures.',
//         'Regular health camps and wellness checkups.'
//       ],
//       bgClass: 'bg-light'
//     }
//   ];

//   const validate = () => {
//     const errs = {};
//     if (!formData.name) errs.name = 'Name is required';
//     if (!formData.aadhar || !/^\d{12}$/.test(formData.aadhar)) errs.aadhar = 'Aadhaar must be 12 digits';
//     if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) errs.mobile = 'Valid 10-digit mobile number required';
//     if (!formData.state) errs.state = 'State is required';
//     if (!formData.district) errs.district = 'District is required';
//     if (!formData.captcha) errs.captcha = 'Captcha required';
//     if (!formData.incomeCert) errs.incomeCert = 'Income Certificate is required';
//     return errs;
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length === 0) {
//       setFormSubmitted(true);
//       setTimeout(() => setFormSubmitted(false), 4000);
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   return (
//     <section className="section services__v3 py-5" id="insurance">
//       <div className="container">
//         <div className="row g-4">
//           <div className="col-12" data-aos="fade-up">
//             <div className="service-card p-4 rounded-4 h-100 d-flex flex-column text-center gap-3 shadow-sm">
//               <span className="subtitle text-uppercase mb-2 text-muted fs-6">
//                 Get Your Health Card
//               </span>
//             </div>
//           </div>

//           {cardServices.map((service, index) => (
//             <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay={index * 200} key={index}>
//               <div className={`service-card p-4 rounded-4 h-100 d-flex flex-column gap-3 shadow-sm ${service.bgClass}`}>
//                 <div className="text-center fs-2">{service.icon}</div>
//                 <h3 className="text-center fs-5 mb-2">{service.title}</h3>
//                 <ul className="ps-3 mb-0">
//                   {service.description.map((point, i) => (
//                     <li key={i} className="mb-2" style={{ lineHeight: '1.6' }}>{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="container py-5">
//         <h2 className="mb-4 text-center">Apply for Ayushman Health Card</h2>

//         {formSubmitted && (
//           <div className="alert alert-success text-center fw-semibold" role="alert">
//             ✅ Ayushman card application submitted successfully!
//           </div>
//         )}

//         <Form onSubmit={handleSubmit} noValidate>
//           <Row className="g-3">
//             <Col md={6}>
//               <Form.Label>Full Name</Form.Label>
//               <Form.Control name="name" value={formData.name} onChange={handleChange} isInvalid={!!errors.name} placeholder="Enter your name" required />
//               <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
//             </Col>
//             <Col md={6}>
//               <Form.Label>Aadhaar Number</Form.Label>
//               <Form.Control name="aadhar" value={formData.aadhar} onChange={handleChange} isInvalid={!!errors.aadhar} placeholder="12-digit Aadhaar" required />
//               <Form.Control.Feedback type="invalid">{errors.aadhar}</Form.Control.Feedback>
//             </Col>
//             <Col md={6}>
//               <Form.Label>Mobile Number</Form.Label>
//               <Form.Control name="mobile" value={formData.mobile} onChange={handleChange} isInvalid={!!errors.mobile} placeholder="e.g. 9876543210" required />
//               <Form.Control.Feedback type="invalid">{errors.mobile}</Form.Control.Feedback>
//             </Col>
//             <Col md={6}>
//               <Form.Label>State</Form.Label>
//               <Form.Control name="state" value={formData.state} onChange={handleChange} isInvalid={!!errors.state} placeholder="Your state" required />
//               <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
//             </Col>
//             <Col md={6}>
//               <Form.Label>District</Form.Label>
//               <Form.Control name="district" value={formData.district} onChange={handleChange} isInvalid={!!errors.district} placeholder="Your district" required />
//               <Form.Control.Feedback type="invalid">{errors.district}</Form.Control.Feedback>
//             </Col>
//             <Col md={6}>
//               <Form.Label>Captcha Code</Form.Label>
//               <Form.Control name="captcha" value={formData.captcha} onChange={handleChange} isInvalid={!!errors.captcha} placeholder="Enter captcha" required />
//               <Form.Control.Feedback type="invalid">{errors.captcha}</Form.Control.Feedback>
//             </Col>
//           </Row>

//           <Row className="mt-4">
//             <Col md={4}>
//               <Form.Label>Income Certificate</Form.Label>
//               <Form.Control type="file" name="incomeCert" onChange={handleChange} isInvalid={!!errors.incomeCert} required />
//               <Form.Control.Feedback type="invalid">{errors.incomeCert}</Form.Control.Feedback>
//             </Col>
//             <Col md={4}>
//               <Form.Label>Caste Certificate (Optional)</Form.Label>
//               <Form.Control type="file" name="casteCert" onChange={handleChange} />
//             </Col>
//             <Col md={4}>
//               <Form.Label>Ration Card / Family ID</Form.Label>
//               <Form.Control type="file" name="rationCard" onChange={handleChange} />
//             </Col>
//           </Row>

//           <div className="text-center mt-4">
//             <Button type="submit" className="btn btn-primary px-5">Apply Now</Button>
//           </div>
//         </Form>
//       </div>
//     </section>
//   );
// }
import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

export default function Janarogycard() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [captchaCode, setCaptchaCode] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    aadhar: "",
    mobile: "",
    state: "",
    district: "",
    captcha: "",
    incomeCert: null,
    casteCert: null,
    rationCard: null,
  });
  const [errors, setErrors] = useState({});
  const [exists, setExists] = useState(false);
  const [loading, setLoading] = useState(true);

 

  // Check if user already applied
  useEffect(() => {
    async function checkExists() {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          "https://last-2-ltig.onrender.com/api/services/janarogya/check",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        console.log("check response:", data);

        if (res.ok && data.msg?.toLowerCase().includes("exists")) {
          setExists(true);
        }
      } catch (e) {
        console.log(e.message);
      } finally {
        setLoading(false);
      }
    }

    checkExists();
  }, [exists]);

  // Generate captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptchaCode(code);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Prefill user info
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("https://last-2-ltig.onrender.com/api/auth/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        const user = data.user;
        setFormData((prev) => ({
          ...prev,
          name: user.name || "",
          mobile: user.phone || "",
          aadhar: user.aadhar || "",
        }));
      });
  }, []);

  const cardServices = [
    {
      icon: "🪪",
      title: "Jan Arogya Card",
      description: [
        "Covers major health treatments at partnered hospitals.",
        "Easy enrollment with minimal documentation.",
        "Covers expenses up to ₹5 Lakhs per family per year.",
      ],
      bgClass: "bg-white",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Jan Swabhiman Seva Card",
      description: [
        "Access to a wide range of welfare benefits.",
        "Discounts on medical services and medicines.",
        "Priority access to free ambulance services.",
      ],
      bgClass: "bg-light",
    },
    {
      icon: "📋",
      title: "Instant Registration Process",
      description: [
        "Fill in basic details and upload ID proof.",
        "Real-time verification and card issuance.",
        "Digital and physical card options available.",
      ],
      bgClass: "bg-white",
    },
    {
      icon: "🏥",
      title: "Partnered Hospitals & Clinics",
      description: [
        "More than 200 hospitals under the scheme.",
        "Cashless treatments for covered procedures.",
        "Regular health camps and wellness checkups.",
      ],
      bgClass: "bg-light",
    },
  ];

  // Validation
  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Name is required";
    if (!formData.aadhar || !/^\d{12}$/.test(formData.aadhar))
      errs.aadhar = "Aadhaar must be 12 digits";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
      errs.mobile = "Valid 10-digit mobile number required";
    if (!formData.state) errs.state = "State is required";
    if (!formData.district) errs.district = "District is required";
    if (!formData.captcha || formData.captcha !== captchaCode)
      errs.captcha = "Captcha does not match";
    if (!formData.incomeCert)
      errs.incomeCert = "Income Certificate is required";
    return errs;
  };

  // Handle input
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("aadhar", formData.aadhar);
      form.append("mobile", formData.mobile);
      form.append("state", formData.state);
      form.append("district", formData.district);
      form.append("captcha", formData.captcha);

      if (formData.incomeCert)
        form.append("income_certificate", formData.incomeCert);
      if (formData.casteCert)
        form.append("caste_certificate", formData.casteCert);
      if (formData.rationCard) form.append("ration_id", formData.rationCard);

      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          "https://last-2-ltig.onrender.com/api/services/janarogya/user/apply",
          {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: form,
          }
        );

        const data = await res.json();

        if (res.ok) {
          setFormSubmitted(true);
          setTimeout(() => setFormSubmitted(false), 4000);
          generateCaptcha();
          setFormData({
            name: "",
            aadhar: "",
            mobile: "",
            state: "",
            district: "",
            captcha: "",
            incomeCert: null,
            casteCert: null,
            rationCard: null,
          });
        } else {
          alert(data.message || "Something went wrong");
        }
      } catch (err) {
        alert("Network error. Please try again.");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  // Conditional Rendering
 

  // Render
  return (
    <section className="section services__v3 py-5" id="insurance">
      <div className="container">
        <div className="row g-4">
          {cardServices.map((service, index) => (
            <div
              className="col-12 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              key={index}
            >
              <div
                className={`service-card p-4 rounded-4 h-100 d-flex flex-column gap-3 shadow-sm ${service.bgClass}`}
              >
                <div className="text-center fs-2">{service.icon}</div>
                <h3 className="text-center fs-5 mb-2">{service.title}</h3>
                <ul className="ps-3 mb-0">
                  {service.description.map((point, i) => (
                    <li key={i} className="mb-2" style={{ lineHeight: "1.6" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container py-5">
        <h2 className="mb-4 text-center">Apply for Jan Arogya Card</h2>

        {formSubmitted && (
          <div
            className="alert alert-success text-center fw-semibold"
            role="alert"
          >
            ✅ Ayushman card application submitted successfully!
          </div>
        )}

        {/* ✅ Only this part is conditionally rendered */}
        {exists ? (
          <div className="alert alert-warning text-center fw-semibold">
            ⚠️ You have already applied for Jan Arogya Card.
          </div>
        ) : (
          <Form onSubmit={handleSubmit} noValidate>
            <Row className="g-3">
              <Col md={6}>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  readOnly
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Col>
              <Col md={6}>
                <Form.Label>Aadhaar Number</Form.Label>
                <Form.Control
                  name="aadhar"
                  readOnly
                  value={formData.aadhar}
                  onChange={handleChange}
                  isInvalid={!!errors.aadhar}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.aadhar}
                </Form.Control.Feedback>
              </Col>
              <Col md={6}>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  readOnly
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  isInvalid={!!errors.mobile}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.mobile}
                </Form.Control.Feedback>
              </Col>
              <Col md={6}>
                <Form.Label>State</Form.Label>
                <Form.Control
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  isInvalid={!!errors.state}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.state}
                </Form.Control.Feedback>
              </Col>
              <Col md={6}>
                <Form.Label>District</Form.Label>
                <Form.Control
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  isInvalid={!!errors.district}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.district}
                </Form.Control.Feedback>
              </Col>
              <Col md={6}>
                <Form.Label>Captcha Code</Form.Label>
                <div className="d-flex align-items-center mb-2">
                  <div
                    className="bg-light border rounded px-3 py-2 me-2 fw-bold fs-5"
                    style={{ letterSpacing: "3px" }}
                  >
                    {captchaCode}
                  </div>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={generateCaptcha}
                  >
                    ⟳
                  </Button>
                </div>
                <Form.Control
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleChange}
                  isInvalid={!!errors.captcha}
                  placeholder="Enter captcha"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.captcha}
                </Form.Control.Feedback>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col md={4}>
                <Form.Label>Income Certificate</Form.Label>
                <Form.Control
                  type="file"
                  name="incomeCert"
                  onChange={handleChange}
                  isInvalid={!!errors.incomeCert}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.incomeCert}
                </Form.Control.Feedback>
              </Col>
              <Col md={4}>
                <Form.Label>Caste Certificate (Optional)</Form.Label>
                <Form.Control
                  type="file"
                  name="casteCert"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <Form.Label>Ration Card / Family ID</Form.Label>
                <Form.Control
                  type="file"
                  name="rationCard"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <div className="text-center mt-4">
              <Button type="submit" className="btn btn-primary px-5">
                Apply Now
              </Button>
            </div>
          </Form>
        )}
      </div>
    </section>
  );
}

