
import React, { useState } from 'react';
import { Form, Button, Col, Row, Container, Image } from 'react-bootstrap';

const Kendraform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    businessType: '',
    investmentCapacity: '',
    proposedLocation: '',
    category: '',
    experience: '',
    documents: null,
    idProof: null,
    qualificationCert: null,
    financialStatement: null
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full Name is required';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = '10-digit phone number required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.businessType) newErrors.businessType = 'Business type is required';
    if (!formData.investmentCapacity) newErrors.investmentCapacity = 'Investment capacity is required';
    if (!formData.proposedLocation) newErrors.proposedLocation = 'Location is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.experience) newErrors.experience = 'Experience is required';
    if (!formData.idProof) newErrors.idProof = 'ID Proof is required';
    if (!formData.qualificationCert) newErrors.qualificationCert = 'Qualification Certificate is required';
    if (!formData.financialStatement) newErrors.financialStatement = 'Financial Statement is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (validate()) {
    try {
      const token = localStorage.getItem("token"); // user auth token

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("businessType", formData.businessType);
      formDataToSend.append("investmentCapacity", formData.investmentCapacity);
      formDataToSend.append("proposedLocation", formData.proposedLocation);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("franchiseCategory", formData.category); // maps to backend schema
      formDataToSend.append("relevantExperience", formData.experience);

      if (formData.idProof) formDataToSend.append("idProof", formData.idProof);
      if (formData.qualificationCert) formDataToSend.append("qualificationCertificate", formData.qualificationCert);
      if (formData.financialStatement) formDataToSend.append("financialStatement", formData.financialStatement);

      const res = await fetch("http://localhost:8000/api/services/apply-kendra/apply", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formDataToSend
      });

      const data = await res.json();

      if (res.ok) {
        alert("Application submitted successfully!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          businessType: '',
          investmentCapacity: '',
          proposedLocation: '',
          category: '',
          experience: '',
          idProof: null,
          qualificationCert: null,
          financialStatement: null
        });
        setErrors({});
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }
  }
};


  return (
    <Container className="py-5">
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <Image src="/assets/images/kendrathi.png" fluid rounded />
        </Col>
        <Col md={6}>
          <h2 className="mb-3">Partner with Jan Arogya Kendra</h2>
          <p>
            Become a vital part of India's healthcare mission with Jan Arogya Kendra by RUWA INDIA. This form will guide you through the franchise application process, helping you contribute to quality, affordable care in your community.
          </p>
        </Col>
      </Row>

      <h3 className="text-center mb-4">Franchise Application Form</h3>
      <Form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} isInvalid={!!errors.name} />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} isInvalid={!!errors.phone} />
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} isInvalid={!!errors.address} />
              <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Business Type</Form.Label>
              <Form.Control type="text" name="businessType" value={formData.businessType} onChange={handleChange} isInvalid={!!errors.businessType} />
              <Form.Control.Feedback type="invalid">{errors.businessType}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Investment Capacity</Form.Label>
              <Form.Control type="text" name="investmentCapacity" value={formData.investmentCapacity} onChange={handleChange} isInvalid={!!errors.investmentCapacity} />
              <Form.Control.Feedback type="invalid">{errors.investmentCapacity}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Proposed Location</Form.Label>
              <Form.Control type="text" name="proposedLocation" value={formData.proposedLocation} onChange={handleChange} isInvalid={!!errors.proposedLocation} />
              <Form.Control.Feedback type="invalid">{errors.proposedLocation}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Franchise Category (S1/S2/S3)</Form.Label>
              <Form.Select name="category" value={formData.category} onChange={handleChange} isInvalid={!!errors.category}>
                <option value="">Select Category</option>
                <option value="S1">S1 (200 sq. ft)</option>
                <option value="S2">S2 (400 sq. ft)</option>
                <option value="S3">S3 (600 sq. ft)</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Relevant Experience</Form.Label>
              <Form.Control as="textarea" rows={2} name="experience" value={formData.experience} onChange={handleChange} isInvalid={!!errors.experience} />
              <Form.Control.Feedback type="invalid">{errors.experience}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Upload ID Proof</Form.Label>
              <Form.Control type="file" name="idProof" onChange={handleChange} isInvalid={!!errors.idProof} />
              <Form.Control.Feedback type="invalid">{errors.idProof}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Qualification Certificate</Form.Label>
              <Form.Control type="file" name="qualificationCert" onChange={handleChange} isInvalid={!!errors.qualificationCert} />
              <Form.Control.Feedback type="invalid">{errors.qualificationCert}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-4">
              <Form.Label>Financial Statement</Form.Label>
              <Form.Control type="file" name="financialStatement" onChange={handleChange} isInvalid={!!errors.financialStatement} />
              <Form.Control.Feedback type="invalid">{errors.financialStatement}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center">
          <Button variant="primary" type="submit">Submit Application</Button>
        </div>
      </Form>
    </Container>
  );
};

export default Kendraform;
