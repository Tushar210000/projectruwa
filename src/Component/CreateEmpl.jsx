// // import React, { useState } from "react";
// // import axios from "axios";

// // export default function CreateEmployee() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     employeeId: "",
// //     email: "",
// //     phone: "",
// //     password: ""
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     await axios.post("http://localhost:5000/api/employees/create", formData);
// //     alert("Employee Created!");
// //   };

// //   return (
// //     <div className="container">
// //       <h2>Create Employee</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input name="name" placeholder="Name" onChange={handleChange} />
// //         <input name="employeeId" placeholder="Employee ID" onChange={handleChange} />
// //         <input name="email" placeholder="Email" onChange={handleChange} />
// //         <input name="phone" placeholder="Phone" onChange={handleChange} />
// //         <input type="password" name="password" placeholder="Password" onChange={handleChange} />
// //         <button type="submit">Create</button>
// //       </form>
// //     </div>
// //   );
// // }
// import React, { useState } from "react";
// import axios from "axios";
// import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

// export default function CreateEmployee() {
//   const [formData, setFormData] = useState({
//     name: "",
//     employeeId: "",
//     email: "",
//     phone: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("https://last-2-ltig.onrender.com/api/employees/create", formData);
//       alert("✅ Employee Created Successfully!");
//       setFormData({ name: "", employeeId: "", email: "", phone: "", password: "" });
//     } catch (err) {
//       alert("❌ Error creating employee: " + err.response?.data?.error || err.message);
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center mt-5">
//       <Row className="w-100">
//         <Col md={{ span: 6, offset: 3 }}>
//           <Card className="shadow-lg border-0 rounded-4">
//             <Card.Body className="p-4">
//               <h2 className="text-center mb-4 text-primary fw-bold">Create Employee</h2>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Full Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="name"
//                     placeholder="Enter full name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Employee ID</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="employeeId"
//                     placeholder="Enter unique Employee ID"
//                     value={formData.employeeId}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     placeholder="Enter email address"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Phone</Form.Label>
//                   <Form.Control
//                     type="tel"
//                     name="phone"
//                     placeholder="Enter phone number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     name="password"
//                     placeholder="Enter password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 <div className="d-grid">
//                   <Button variant="primary" size="lg" type="submit" className="rounded-3">
//                     Create Employee
//                   </Button>
//                 </div>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col, Card, Alert } from "react-bootstrap";

export default function CreateEmployee() {
  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    email: "",
    phone: "",
    password: ""
  });
 const token = localStorage.getItem("token"); // 👈 Admin token stored at login
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccess("");
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
    }

    // Employee ID must have letters, numbers and special char
    const idRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if (!idRegex.test(formData.employeeId)) {
      newErrors.employeeId =
        "Employee ID must contain alphabets, numbers, and at least one special character";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  try {
    

    await axios.post(
      "https://last-2-ltig.onrender.com/api/employee/create",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`, // 👈 send token in request
        },
      }
    );

    setSuccess("✅ Employee Created Successfully!");
    setFormData({ name: "", employeeId: "", email: "", phone: "", password: "" });
  } catch (err) {
    setSuccess("");
    setErrors({ api: err.response?.data?.message || err.message });
  }
};


  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4 text-primary fw-bold">Create Employee</h2>

              {success && <Alert variant="success">{success}</Alert>}
              {errors.api && <Alert variant="danger">{errors.api}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Employee ID</Form.Label>
                  <Form.Control
                    type="text"
                    name="employeeId"
                    placeholder="Enter unique Employee ID"
                    value={formData.employeeId}
                    onChange={handleChange}
                    isInvalid={!!errors.employeeId}
                  />
                  <Form.Control.Feedback type="invalid">{errors.employeeId}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    isInvalid={!!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" size="lg" type="submit" className="rounded-3">
                    Create Employee
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
