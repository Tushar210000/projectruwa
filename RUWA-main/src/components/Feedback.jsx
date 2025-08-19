// import React, { useState } from 'react';
// import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

// export default function Feedback() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     rating: '',
//     message: ''
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // TODO: Send to backend API
//     console.log("Feedback Submitted:", formData);

//     setSubmitted(true);
//     setFormData({
//       name: '',
//       email: '',
//       rating: '',
//       message: ''
//     });

//     setTimeout(() => setSubmitted(false), 5000);
//   };

//   return (
//     <section className="py-5 bg-light">
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={8}>
//             <div className="bg-white p-4 shadow rounded">
//               <h3 className="text-center mb-4">We Value Your Feedback</h3>

//               {submitted && (
//                 <Alert variant="success">Thank you for your feedback!</Alert>
//               )}

//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Full Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Enter your name"
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Rating</Form.Label>
//                   <Form.Select
//                     name="rating"
//                     value={formData.rating}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select Rating</option>
//                     <option value="5">★★★★★ (Excellent)</option>
//                     <option value="4">★★★★☆ (Very Good)</option>
//                     <option value="3">★★★☆☆ (Good)</option>
//                     <option value="2">★★☆☆☆ (Fair)</option>
//                     <option value="1">★☆☆☆☆ (Poor)</option>
//                   </Form.Select>
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Your Message</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     rows={4}
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Write your feedback..."
//                     required
//                   />
//                 </Form.Group>

//                 <div className="text-center">
//                   <Button variant="primary" type="submit">
//                     Submit Feedback
//                   </Button>
//                 </div>
//               </Form>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    rating: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Send to backend API
    console.log("Feedback Submitted:", formData);

    setSubmitted(true);
    setFormData({
      name: '',
      message: '',
      rating: ''
    });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-center mb-4">Share Your Experience</h3>

              {submitted && (
                <Alert variant="success">Thanks for your testimonial!</Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Rating</Form.Label>
                  <Form.Select
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Rating</option>
                    <option value="5">★★★★★</option>
                    <option value="4">★★★★☆</option>
                    <option value="3">★★★☆☆</option>
                    <option value="2">★★☆☆☆</option>
                    <option value="1">★☆☆☆☆</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Your Feedback</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your testimonial here..."
                    required
                  />
                </Form.Group>

                <div className="text-center">
                  <Button variant="success" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
