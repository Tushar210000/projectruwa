
// // import React from 'react';
// // import { Container, Row, Col, Card } from 'react-bootstrap';

// // const journeySteps = [
// //   {
// //     step: 1,
// //     title: 'Initial Application',
// //     description:
// //       'Begin by submitting your Letter of Intent (LOI) and the completed Franchise Application Form, along with the required initial documents.',
// //     keyActions: [
// //       'Submit Application Form & LOI',
// //       'Provide initial identity & financial proofs',
// //     ],
// //   },
// //   {
// //     step: 2,
// //     title: 'Due Diligence & MOU',
// //     description:
// //       "Our team will review your application. If shortlisted, we'll proceed with due diligence and sign a Memorandum of Understanding (MOU) to formalize our mutual interest.",
// //     keyActions: [
// //       'Cooperate with information verification',
// //       'Sign the non-binding MOU',
// //     ],
// //   },
// //   {
// //     step: 3,
// //     title: 'Provisional Approval & Setup',
// //     description:
// //       "Upon successful due diligence, you'll receive provisional approval. This is the phase to secure all necessary licenses and prepare your premises as per our standards.",
// //     keyActions: [
// //       'Obtain Drug License, Clinical Establishment Reg., etc.',
// //       'Finalize site setup and infrastructure',
// //     ],
// //   },
// //   {
// //     step: 4,
// //     title: 'Final Agreement & Launch',
// //     description:
// //       "Once all legal and operational requirements are met, we will sign the definitive Franchise Agreement. You'll receive final training and support for your grand opening!",
// //     keyActions: [
// //       'Sign the binding Franchise Agreement',
// //       'Complete final training',
// //       'Launch your Jan Arogya Kendra',
// //     ],
// //   },
// // ];

// // const TimelineStep = ({ data, index }) => {
// //   const { step, title, description, keyActions } = data;
// //   const isLeft = index % 2 === 0;

// //   return (
// //     <Row className="align-items-center mb-5">
// //       <Col xs={12} md={5} className={`mb-3 mb-md-0 ${isLeft ? 'text-end' : 'text-start'}`}>
// //         <h4 className="mb-2">Step {step}: {title}</h4>
// //         <p>{description}</p>
// //       </Col>

// //       <Col xs={12} md={2} className="text-center mb-3 mb-md-0">
// //         <div style={{
// //           width: '60px',
// //           height: '60px',
// //           borderRadius: '50%',
// //           backgroundColor: '#0d6efd',
// //           color: 'white',
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           fontSize: '20px',
// //           margin: '0 auto'
// //         }}>
// //           {step}
// //         </div>
// //       </Col>

// //       <Col xs={12} md={5}>
// //         <Card>
// //           <Card.Body>
// //             <Card.Title><strong>Key Actions:</strong></Card.Title>
// //             <ul className="list-unstyled">
// //               {keyActions.map((action, i) => (
// //                 <li key={i} className="mb-1">
// //                   <span className="me-2">✔</span>{action}
// //                 </li>
// //               ))}
// //             </ul>
// //           </Card.Body>
// //         </Card>
// //       </Col>
// //     </Row>
// //   );
// // };

// // export default function FranchiseJourney() {
// //   return (
// //     <section className="py-5 bg-light">
// //       <Container>
// //         <Row className="text-center mb-5">
// //           <Col>
// //             <h2>Your Journey to Becoming a Franchisee</h2>
// //             <p className="text-muted">
// //               We've streamlined the process into four clear steps. Follow the path below to launch your Jan Arogya Kendra.
// //             </p>
// //           </Col>
// //         </Row>

// //         {journeySteps.map((item, index) => (
// //           <TimelineStep key={item.step} data={item} index={index} />
// //         ))}
// //       </Container>
// //     </section>
// //   );
// // }
// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// // import './FranchiseJourney.css'; // Optional for extra styling

// const journeySteps = [
//   {
//     step: 1,
//     title: 'Initial Application',
//     description:
//       'Begin by submitting your Letter of Intent (LOI) and the completed Franchise Application Form, along with the required initial documents.',
//     keyActions: [
//       'Submit Application Form & LOI',
//       'Provide initial identity & financial proofs',
//     ],
//   },
//   {
//     step: 2,
//     title: 'Due Diligence & MOU',
//     description:
//       "Our team will review your application. If shortlisted, we'll proceed with due diligence and sign a Memorandum of Understanding (MOU) to formalize our mutual interest.",
//     keyActions: [
//       'Cooperate with information verification',
//       'Sign the non-binding MOU',
//     ],
//   },
//   {
//     step: 3,
//     title: 'Provisional Approval & Setup',
//     description:
//       "Upon successful due diligence, you'll receive provisional approval. This is the phase to secure all necessary licenses and prepare your premises as per our standards.",
//     keyActions: [
//       'Obtain Drug License, Clinical Establishment Reg., etc.',
//       'Finalize site setup and infrastructure',
//     ],
//   },
//   {
//     step: 4,
//     title: 'Final Agreement & Launch',
//     description:
//       "Once all legal and operational requirements are met, we will sign the definitive Franchise Agreement. You'll receive final training and support for your grand opening!",
//     keyActions: [
//       'Sign the binding Franchise Agreement',
//       'Complete final training',
//       'Launch your Jan Arogya Kendra',
//     ],
//   },
// ];

// const TimelineStep = ({ data, index }) => {
//   const { step, title, description, keyActions } = data;
//   const isEven = index % 2 === 0;

//   return (
//     <Row className="align-items-center mb-5 flex-column flex-md-row">
//       <Col xs={12} md={5} className={`mb-3 ${isEven ? 'order-md-1' : 'order-md-3'} text-md-end`}>
//         <h4 className="mb-2 fw-bold">Step {step}: {title}</h4>
//         <p className="text-muted">{description}</p>
//       </Col>

//       <Col xs={12} md={2} className="order-md-2 mb-3 d-flex justify-content-center">
//         <div className="step-circle">
//           {step}
//         </div>
//       </Col>

//       <Col xs={12} md={5} className={`mb-3 ${isEven ? 'order-md-3' : 'order-md-1'}`}>
//         <Card className="h-100 shadow-sm">
//           <Card.Body>
//             <Card.Title><strong>Key Actions:</strong></Card.Title>
//             <ul className="list-unstyled mb-0">
//               {keyActions.map((action, i) => (
//                 <li key={i} className="mb-1">
//                   <span className="me-2 text-success">✔</span>{action}
//                 </li>
//               ))}
//             </ul>
//           </Card.Body>
//         </Card>
//       </Col>
//     </Row>
//   );
// };

// export default function FranchiseJourney() {
//   return (
//     <section className="py-5 bg-light">
//       <Container>
//         <Row className="text-center mb-5">
//           <Col>
//             <h2 className="fw-bold">Your Journey to Becoming a Franchisee</h2>
//             <p className="text-muted px-2 px-md-5">
//               We've streamlined the process into four clear steps. Follow the path below to launch your Jan Arogya Kendra.
//             </p>
//           </Col>
//         </Row>

//         {journeySteps.map((item, index) => (
//           <TimelineStep key={item.step} data={item} index={index} />
//         ))}
//       </Container>
//     </section>
//   );
// }
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import './FranchiseJourney.css'; // Make sure this file exists

const journeySteps = [
  {
    step: 1,
    title: 'Initial Application',
    description:
      'Begin by submitting your Letter of Intent (LOI) and the completed Franchise Application Form, along with the required initial documents.',
    keyActions: [
      'Submit Application Form & LOI',
      'Provide initial identity & financial proofs',
    ],
  },
  {
    step: 2,
    title: 'Due Diligence & MOU',
    description:
      "Our team will review your application. If shortlisted, we'll proceed with due diligence and sign a Memorandum of Understanding (MOU) to formalize our mutual interest.",
    keyActions: [
      'Cooperate with information verification',
      'Sign the non-binding MOU',
    ],
  },
  {
    step: 3,
    title: 'Provisional Approval & Setup',
    description:
      "Upon successful due diligence, you'll receive provisional approval. This is the phase to secure all necessary licenses and prepare your premises as per our standards.",
    keyActions: [
      'Obtain Drug License, Clinical Establishment Reg., etc.',
      'Finalize site setup and infrastructure',
    ],
  },
  {
    step: 4,
    title: 'Final Agreement & Launch',
    description:
      "Once all legal and operational requirements are met, we will sign the definitive Franchise Agreement. You'll receive final training and support for your grand opening!",
    keyActions: [
      'Sign the binding Franchise Agreement',
      'Complete final training',
      'Launch your Jan Arogya Kendra',
    ],
  },
];

const TimelineStep = ({ data, index }) => {
  const { step, title, description, keyActions } = data;
  const isEven = index % 2 === 0;

  return (
    <Row className="timeline-step mb-5 position-relative">
      {/* Line connector */}
      <div className="timeline-line d-none d-md-block"></div>

      <Col xs={12} md={5} className={`mb-3 ${isEven ? 'order-md-1 text-md-end' : 'order-md-3 text-md-start'}`}>
        <h4 className="mb-2 fw-bold">Step {step}: {title}</h4>
        <p className="text-muted">{description}</p>
      </Col>

      <Col xs={12} md={2} className="d-flex justify-content-center align-items-center order-md-2 mb-3 z-1">
        <div className="step-circle">{step}</div>
      </Col>

      <Col xs={12} md={5} className={`mb-3 ${isEven ? 'order-md-3' : 'order-md-1'}`}>
        <Card className="key-card h-100 shadow-sm border-0">
          <Card.Body>
            <Card.Title className="fw-bold text-primary mb-3">Key Actions</Card.Title>
            <ul className="list-unstyled mb-0">
              {keyActions.map((action, i) => (
                <li key={i} className="mb-2">
                  <span className="me-2 text-success">✔</span>{action}
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default function FranchiseJourney() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold">Your Journey to Becoming a Franchisee</h2>
            <p className="text-muted px-2 px-md-5">
              We've streamlined the process into four clear steps. Follow the path below to launch your Jan Arogya Kendra.
            </p>
          </Col>
        </Row>

        {journeySteps.map((item, index) => (
          <TimelineStep key={item.step} data={item} index={index} />
        ))}
      </Container>
    </section>
  );
}
