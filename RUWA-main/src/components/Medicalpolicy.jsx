// import React from 'react';
// import { Card, Container, Row, Col } from 'react-bootstrap';

// const MedicalPolicy = () => {
//   return (
//     <Container className="py-4">
//       <h2 className="text-center mb-4">Medical Policy Overview</h2>

//       <Row className="mb-4">
//         <Col>
//           <Card className="shadow-sm rounded-3">
//             <Card.Body>
//               <Card.Title>📘 What We Cover</Card.Title>
//               <Card.Text>
//                 Our medical services include access to:
//               </Card.Text>
//               <ul>
//                 <li>Free health insurance up to ₹5 lakh under PM-JAY</li>
//                 <li>Emergency ambulance services</li>
//                 <li>Jan Arogya Card generation</li>
//                 <li>Hospital admission assistance at empanelled facilities</li>
//               </ul>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-4">
//         <Col md={6}>
//           <Card className="shadow-sm rounded-3">
//             <Card.Body>
//               <Card.Title>✅ Eligibility Criteria</Card.Title>
//               <ul>
//                 <li>SECC 2011 beneficiaries</li>
//                 <li>Families holding BPL/Ration Card</li>
//                 <li>Residents of registered rural/urban slums</li>
//               </ul>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6}>
//           <Card className="shadow-sm rounded-3">
//             <Card.Body>
//               <Card.Title>🗂️ Required Documents</Card.Title>
//               <ul>
//                 <li>Aadhaar Card</li>
//                 <li>Ration Card / BPL Card</li>
//                 <li>Mobile Number</li>
//                 <li>Passport-size photograph</li>
//               </ul>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="mb-4">
//         <Col md={6}>
//           <Card className="shadow-sm rounded-3">
//             <Card.Body>
//               <Card.Title>📋 Application Process</Card.Title>
//               <ol>
//                 <li>Visit nearest Jan Seva Kendra or partner center</li>
//                 <li>Submit required documents</li>
//                 <li>Verification and digital registration</li>
//                 <li>Receive Jan Arogya Card</li>
//               </ol>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6}>
//           <Card className="shadow-sm rounded-3">
//             <Card.Body>
//               <Card.Title>❌ What’s Not Covered</Card.Title>
//               <ul>
//                 <li>Cosmetic procedures</li>
//                 <li>Out-of-network hospital services</li>
//                 <li>Non-emergency transportation (unless specified)</li>
//               </ul>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row>
//         <Col>
//           <Card className="shadow-sm rounded-3">
//             <Card.Body>
//               <Card.Title>📞 Emergency & Support</Card.Title>
//               <Card.Text>
//                 Call our 24/7 emergency helpline to request an ambulance or urgent care.
//               </Card.Text>
//               <strong>Helpline:</strong> +91-XXXX-XXX-XXX <br />
//               <strong>Email:</strong> medicalsupport@yourdomain.com
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default MedicalPolicy;
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
// import './MedicalPolicy.css';

const cardStyle = {
  border: 'none',
  borderRadius: '1rem',
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  marginBottom: '1.5rem',
};

const MedicalPolicy = () => {
  return (
    <Container className="py-5 px-3 px-sm-4 px-md-5">
      <h2 className="text-center mb-5 fw-bold text-primary fs-2 fs-sm-3">📄 Medical Policy Overview</h2>

      <Row>
        <Col xs={12}>
          <Card style={cardStyle} className="p-3 hover-zoom">
            <Card.Body>
              <Card.Title className="fw-semibold fs-5 mb-3">📘 What We Cover</Card.Title>
              <ul className="ps-3">
                <li>Free health insurance up to ₹5 lakh </li>
                <li>Emergency ambulance services</li>
                <li>Jan Arogya Card generation</li>
                <li>Hospital admission assistance</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={12} md={6}>
          <Card style={cardStyle} className="p-3 hover-zoom">
            <Card.Body>
              <Card.Title className="fw-semibold fs-5 mb-3">✅ Eligibility Criteria</Card.Title>
              <ul className="ps-3">
                <li>SECC 2011 beneficiaries</li>
                <li>Families with BPL/Ration Card</li>
                <li>Residents of urban or rural slums</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={12} md={6}>
          <Card style={cardStyle} className="p-3 hover-zoom">
            <Card.Body>
              <Card.Title className="fw-semibold fs-5 mb-3">🗂️ Required Documents</Card.Title>
              <ul className="ps-3">
                <li>Aadhaar Card</li>
                <li>Ration Card or BPL Card</li>
                <li>Mobile Number</li>
                <li>Passport-size Photograph</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={12} md={6}>
          <Card style={cardStyle} className="p-3 hover-zoom">
            <Card.Body>
              <Card.Title className="fw-semibold fs-5 mb-3">📋 Application Process</Card.Title>
              <ol className="ps-3">
                <li>Visit Jan Seva Kendra</li>
                <li>Submit documents</li>
                <li>Get verified and registered</li>
                <li>Receive Jan Arogya Card</li>
              </ol>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={12} md={6}>
          <Card style={cardStyle} className="p-3 hover-zoom">
            <Card.Body>
              <Card.Title className="fw-semibold fs-5 mb-3">❌ What’s Not Covered</Card.Title>
              <ul className="ps-3">
                <li>Cosmetic surgeries</li>
                <li>Out-of-network hospitals</li>
                <li>Non-emergency transport</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
{/* 
        <Col xs={12}>
          <Card style={cardStyle} className="p-3 hover-zoom">
            <Card.Body>
              <Card.Title className="fw-semibold fs-5 mb-3 text-center">
                📞 Emergency & Support
              </Card.Title>
              <p className="mb-1 text-center">
                Call our 24/7 helpline for ambulance and urgent care assistance.
              </p>
              <p className="mb-1 text-center">
                <strong>Phone:</strong> +91-XXXX-XXX-XXX<br />
                <strong>Email:</strong> medicalsupport@yourdomain.com
              </p>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </Container>
  );
};

export default MedicalPolicy;
