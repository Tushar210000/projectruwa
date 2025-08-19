// import React, { useState } from 'react';

// export default function Insurance() {
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const services = [
//     {
//       icon: '📄',
//       title: 'Comprehensive Insurance Plans',
//       description: [
//         'Covers hospitalization, surgeries, and critical illness.',
//         'Includes outpatient consultations and diagnostics.',
//         'Customizable premium and sum insured options.',
//       ],
//       bgClass: 'bg-white',
//     },
//     {
//       icon: '👨‍👩‍👧‍👦',
//       title: 'Family Floater Plans',
//       description: [
//         'One policy for entire family.',
//         'Affordable premium with wider coverage.',
//         'Covers parents, spouse, and children.',
//       ],
//       bgClass: 'bg-light',
//     },
//     {
//       icon: '💸',
//       title: 'Cashless Claims',
//       description: [
//         'Cashless treatment at partner hospitals.',
//         'No upfront payments required.',
//         'Transparent and quick claim process.',
//       ],
//       bgClass: 'bg-white',
//     },
//     {
//       icon: '📞',
//       title: '24x7 Claim Support',
//       description: [
//         'Dedicated helpline for queries.',
//         'Assistance during emergencies and hospital admissions.',
//         'Multilingual support for wider reach.',
//       ],
//       bgClass: 'bg-light',
//     }
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormSubmitted(true);

//     setTimeout(() => {
//       setFormSubmitted(false);
//     }, 4000);

//     // Backend API integration can be added here
//   };

//   return (
//     <section className="section services__v3 py-5" id="insurance">
//       <div className="container">
//         <div className="row g-4">
//           <div className="col-12" data-aos="fade-up">
//             <div className="service-card p-4 rounded-4 h-100 d-flex flex-column text-center gap-3 shadow-sm">
//               <span className="subtitle text-uppercase mb-2 text-muted fs-6">
//                 Choose your Insurance Plan
//               </span>
//             </div>
//           </div>

//           {services.map((service, index) => (
//             <div className=" col-12 col-md-6" data-aos="fade-up" data-aos-delay={index * 200} key={index}>
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
//         <h2 className="mb-4 text-center">Book Insurance Appointment</h2>

//         {formSubmitted && (
//           <div className="alert alert-success text-center fw-semibold" role="alert">
//             ✅ Insurance appointment booked successfully!
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <div className="row g-3">
//             <div className="col-md-6">
//               <label className="form-label">Full Name</label>
//               <input type="text" className="form-control" placeholder="Enter your full name" required />
//             </div>
//             <div className="col-md-6">
//               <label className="form-label">Phone Number</label>
//               <input type="tel" className="form-control" placeholder="e.g. 9876543210" required />
//             </div>
//             <div className="col-md-6">
//               <label className="form-label">Email</label>
//               <input type="email" className="form-control" placeholder="your@email.com" required />
//             </div>
//             <div className="col-md-6">
//               <label className="form-label">Insurance Type</label>
//               <input type="text" className="form-control" placeholder="e.g. Family, Health, Critical" />
//             </div>
//             <div className="col-md-6">
//               <label className="form-label">Preferred Date</label>
//               <input type="date" className="form-control" required />
//             </div>
//             <div className="col-md-6">
//               <label className="form-label">Preferred Time</label>
//               <input type="time" className="form-control" required />
//             </div>
//             <div className="col-12">
//               <label className="form-label">Additional Information</label>
//               <textarea className="form-control" rows="4" placeholder="Any specific needs or queries..." />
//             </div>
//           </div>
//           <div className="text-center mt-4">
//             <button type="submit" className="btn btn-primary px-5">Submit</button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }
import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';

export default function Insurance() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [captchaCode, setCaptchaCode] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    aadhar: '',
    address: '',
    state: '',
    district: '',
    pincode: '',
    insuranceType: '',
    captcha: '',
    idProof: null,
    photo: null,
    medicalDoc: null,
    incomeCert: null
  });
  const [errors, setErrors] = useState({});

  const services = [
    {
      icon: '📄',
      title: 'Comprehensive Insurance Plans',
      description: [
        'Covers hospitalization, surgeries, and critical illness.',
        'Includes outpatient consultations and diagnostics.',
        'Customizable premium and sum insured options.',
      ],
      bgClass: 'bg-white',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Floater Plans',
      description: [
        'One policy for entire family.',
        'Affordable premium with wider coverage.',
        'Covers parents, spouse, and children.',
      ],
      bgClass: 'bg-light',
    },
    {
      icon: '💸',
      title: 'Cashless Claims',
      description: [
        'Cashless treatment at partner hospitals.',
        'No upfront payments required.',
        'Transparent and quick claim process.',
      ],
      bgClass: 'bg-white',
    },
    {
      icon: '📞',
      title: '24x7 Claim Support',
      description: [
        'Dedicated helpline for queries.',
        'Assistance during emergencies and hospital admissions.',
        'Multilingual support for wider reach.',
      ],
      bgClass: 'bg-light',
    }
  ];

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptchaCode(code);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.fullName) errs.fullName = 'Full name is required';
    if (!formData.dob) errs.dob = 'Date of birth is required';
    if (!formData.gender) errs.gender = 'Gender is required';
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) errs.email = 'Valid email required';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) errs.phone = 'Valid 10-digit mobile number required';
    if (!formData.aadhar || !/^\d{12}$/.test(formData.aadhar)) errs.aadhar = 'Aadhaar must be 12 digits';
    if (!formData.address) errs.address = 'Address is required';
    if (!formData.state) errs.state = 'State is required';
    if (!formData.district) errs.district = 'District is required';
    if (!formData.pincode || !/^\d{6}$/.test(formData.pincode)) errs.pincode = '6-digit PIN required';
    if (!formData.insuranceType) errs.insuranceType = 'Select insurance type';
    if (!formData.captcha || formData.captcha !== captchaCode) errs.captcha = 'Captcha does not match';
    if (!formData.idProof) errs.idProof = 'Upload ID proof';
    if (!formData.photo) errs.photo = 'Upload passport-size photo';
    if (!formData.medicalDoc) errs.medicalDoc = 'Upload medical documents';
    if (!formData.incomeCert) errs.incomeCert = 'Upload income certificate';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length === 0) {
    try {
      const token = localStorage.getItem("token"); // adjust if you store elsewhere
      if (!token) {
        alert("You must be logged in to apply for insurance.");
        return;
      }

      const fd = new FormData();
      fd.append("fullName", formData.fullName);
      fd.append("dob", formData.dob);
      fd.append("gender", formData.gender);
      fd.append("email", formData.email);
      fd.append("phone", formData.phone);
      fd.append("aadhar", formData.aadhar);
      fd.append("address", formData.address);
      fd.append("state", formData.state);
      fd.append("district", formData.district);
      fd.append("pincode", formData.pincode);
      fd.append("insuranceType", formData.insuranceType);
      fd.append("id_proof", formData.idProof);
      fd.append("passport_photo", formData.photo);
      fd.append("medical_documents", formData.medicalDoc);
      fd.append("income_certificate", formData.incomeCert);

      const res = await fetch("http://localhost:8000/api/services/apply-insurance/user/apply", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: fd
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to submit insurance application");
      }

      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 4000);
      generateCaptcha();
      setFormData({
        fullName: '',
        dob: '',
        gender: '',
        email: '',
        phone: '',
        aadhar: '',
        address: '',
        state: '',
        district: '',
        pincode: '',
        insuranceType: '',
        captcha: '',
        idProof: null,
        photo: null,
        medicalDoc: null,
        incomeCert: null
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      alert(err.message || "Something went wrong");
    }
  } else {
    setErrors(validationErrors);
  }
};


  return (
    <section className="section services__v3 py-5" id="insurance">
      <Container>
        <div className="row g-4">
          <div className="col-12" data-aos="fade-up">
            <div className="service-card p-4 rounded-4 h-100 d-flex flex-column text-center gap-3 shadow-sm">
              <span className="subtitle text-uppercase mb-2 text-muted fs-6">
                Choose your Insurance Plan
              </span>
            </div>
          </div>

          {services.map((service, index) => (
            <div className=" col-12 col-md-6" data-aos="fade-up" data-aos-delay={index * 200} key={index}>
              <div className={`service-card p-4 rounded-4 h-100 d-flex flex-column gap-3 shadow-sm ${service.bgClass}`}>
                <div className="text-center fs-2">{service.icon}</div>
                <h3 className="text-center fs-5 mb-2">{service.title}</h3>
                <ul className="ps-3 mb-0">
                  {service.description.map((point, i) => (
                    <li key={i} className="mb-2" style={{ lineHeight: '1.6' }}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container className="py-5">
        <h2 className="mb-4 text-center">Apply for Insurance</h2>

        {formSubmitted && (
          <div className="alert alert-success text-center fw-semibold" role="alert">
            ✅ Insurance application submitted successfully!
          </div>
        )}

        {/* <Form onSubmit={handleSubmit} noValidate>
          <Row className="g-3">
            {/* Form fields reused from updated form */}
            {/* ...same structure from previous finalized form... */}
          {/* </Row> */}
        {/* </Form> */} 
          <Form onSubmit={handleSubmit} noValidate>
          <Row className="g-3">
            <Col md={6}>
              <Form.Label>Full Name</Form.Label>
              <Form.Control name="fullName" value={formData.fullName} onChange={handleChange} isInvalid={!!errors.fullName} placeholder="Enter your full name" required />
              <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
            </Col>
            <Col md={6}>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} isInvalid={!!errors.dob} required />
              <Form.Control.Feedback type="invalid">{errors.dob}</Form.Control.Feedback>
            </Col>
            <Col md={6}>
              <Form.Label>Gender</Form.Label>
              <Form.Select name="gender" value={formData.gender} onChange={handleChange} isInvalid={!!errors.gender} required>
                <option value="">-- Select Gender --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
            </Col>
            <Col md={6}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} placeholder="you@example.com" required />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Col>
            <Col md={6}>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control name="phone" value={formData.phone} onChange={handleChange} isInvalid={!!errors.phone} placeholder="10-digit number" required />
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
            </Col>
            <Col md={6}>
              <Form.Label>Aadhaar Number</Form.Label>
              <Form.Control name="aadhar" value={formData.aadhar} onChange={handleChange} isInvalid={!!errors.aadhar} placeholder="12-digit Aadhaar" required />
              <Form.Control.Feedback type="invalid">{errors.aadhar}</Form.Control.Feedback>
            </Col>
            <Col md={12}>
              <Form.Label>Full Address</Form.Label>
              <Form.Control name="address" value={formData.address} onChange={handleChange} isInvalid={!!errors.address} placeholder="Street, Area, Landmark" required />
              <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
            </Col>
            <Col md={4}>
              <Form.Label>State</Form.Label>
              <Form.Control name="state" value={formData.state} onChange={handleChange} isInvalid={!!errors.state} required />
              <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
            </Col>
            <Col md={4}>
              <Form.Label>District</Form.Label>
              <Form.Control name="district" value={formData.district} onChange={handleChange} isInvalid={!!errors.district} required />
              <Form.Control.Feedback type="invalid">{errors.district}</Form.Control.Feedback>
            </Col>
            <Col md={4}>
              <Form.Label>Pincode</Form.Label>
              <Form.Control name="pincode" value={formData.pincode} onChange={handleChange} isInvalid={!!errors.pincode} required />
              <Form.Control.Feedback type="invalid">{errors.pincode}</Form.Control.Feedback>
            </Col>
            <Col md={6}>
              <Form.Label>Insurance Type</Form.Label>
              <Form.Select name="insuranceType" value={formData.insuranceType} onChange={handleChange} isInvalid={!!errors.insuranceType} required>
                <option value="">-- Select --</option>
                <option value="Health">Health</option>
                <option value="Accident">Accident</option>
                <option value="Life">Life</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.insuranceType}</Form.Control.Feedback>
            </Col>
            <Col md={6}>
              <Form.Label>Captcha</Form.Label>
              <div className="d-flex align-items-center mb-2">
                <div className="bg-light border rounded px-3 py-2 me-2 fw-bold fs-5" style={{ letterSpacing: '3px' }}>{captchaCode}</div>
                <Button variant="outline-secondary" size="sm" onClick={generateCaptcha}>⟳</Button>
              </div>
              <Form.Control name="captcha" value={formData.captcha} onChange={handleChange} isInvalid={!!errors.captcha} placeholder="Enter captcha" required />
              <Form.Control.Feedback type="invalid">{errors.captcha}</Form.Control.Feedback>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={3}>
              <Form.Label>Upload ID Proof</Form.Label>
              <Form.Control type="file" name="idProof" onChange={handleChange} isInvalid={!!errors.idProof} required />
              <Form.Control.Feedback type="invalid">{errors.idProof}</Form.Control.Feedback>
            </Col>
            <Col md={3}>
              <Form.Label>Passport Size Photo</Form.Label>
              <Form.Control type="file" name="photo" onChange={handleChange} isInvalid={!!errors.photo} required />
              <Form.Control.Feedback type="invalid">{errors.photo}</Form.Control.Feedback>
            </Col>
            <Col md={3}>
              <Form.Label>Medical Documents</Form.Label>
              <Form.Control type="file" name="medicalDoc" onChange={handleChange} isInvalid={!!errors.medicalDoc} required />
              <Form.Control.Feedback type="invalid">{errors.medicalDoc}</Form.Control.Feedback>
            </Col>
            <Col md={3}>
              <Form.Label>Income Certificate</Form.Label>
              <Form.Control type="file" name="incomeCert" onChange={handleChange} isInvalid={!!errors.incomeCert} required />
              <Form.Control.Feedback type="invalid">{errors.incomeCert}</Form.Control.Feedback>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <Button type="submit" className="btn btn-success px-5">Submit Insurance Application</Button>
          </div>
        </Form>
      </Container>
    </section>
  );
}
