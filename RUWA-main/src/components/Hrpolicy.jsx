
// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { CheckCircle, Shield, AlertTriangle, Users } from 'lucide-react';
// import { Pie } from 'react-chartjs-2';
// import 'chart.js/auto';

// export default function WelcomeHR() {
//   const pieData = {
//     labels: ['Casual Leave', 'Sick Leave', 'Earned Leave'],
//     datasets: [
//       {
//         data: [5, 8, 12],
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const coreValues = [
//     {
//       icon: '🔓',
//       title: 'Integrity',
//       desc: 'Upholding honesty and strong moral principles in all our actions.',
//     },
//     {
//       icon: '🤝',
//       title: 'Respect',
//       desc: 'Treating everyone with dignity, fairness, and courtesy.',
//     },
//     {
//       icon: '🏅',
//       title: 'Excellence',
//       desc: 'Striving for the highest quality in our services and operations.',
//     },
//     {
//       icon: '💪',
//       title: 'Accountability',
//       desc: 'Taking responsibility for our actions and commitments.',
//     },
//     {
//       icon: '👥',
//       title: 'Collaboration',
//       desc: 'Working together towards our shared goals for a healthier India.',
//     },
//     {
//       icon: '🌎',
//       title: 'Social Responsibility',
//       desc: 'Positively impacting the health and well-being of our community.',
//     },
//   ];

//   return (
//     <Container className="py-5">
//       {/* Welcome Message */}
//       <div className="text-center mb-5">
//         <h2 className="fw-bold text-primary">Welcome to the Team!</h2>
//         <p className="text-muted">
//           This guide highlights the core principles and policies that make RUWA INDIA a great place to work.
//           We’re dedicated to transforming healthcare in India, and you are a vital part of that mission.
//         </p>
//       </div>

//       {/* Core Values Section */}
//       <Card className="p-4 shadow-lg border-0 mb-5">
//         <h4 className="fw-bold text-center mb-4">Our Core Values</h4>
//         <p className="text-muted text-center mb-4">These principles guide every decision we make.</p>
//         <Row className="g-4">
//           {coreValues.map((value, idx) => (
//             <Col key={idx} xs={12} md={4}>
//               <Card className="p-4 h-100 text-center shadow border-0 rounded-4">
//                 <div className="fs-1 mb-2">{value.icon}</div>
//                 <h6 className="fw-bold">{value.title}</h6>
//                 <p className="text-muted small">{value.desc}</p>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Card>

//       {/* Key HR Policies */}
//       <div className="text-center mb-4">
//         <h4 className="fw-bold">Key HR Policies at a Glance</h4>
//         <p className="text-muted">A quick overview of our commitment to your well-being and growth.</p>
//       </div>

//       <Row className="g-4">
//         <Col md={6}>
//           <Card className="p-4 shadow-lg border-0 text-center h-100 rounded-4">
//             <h5 className="fw-bold mb-3">Annual Leave Distribution</h5>
//             <Pie data={pieData} />
//             <div className="mt-3 text-muted small">
//               This chart shows a typical breakdown of leave types available. Details vary by role and tenure.
//             </div>
//           </Card>
//         </Col>

//         <Col md={6}>
//           <Card className="p-4 shadow-lg border-0 h-100 rounded-4">
//             <h5 className="fw-bold mb-3 text-center">Our Annual Performance Cycle</h5>
//             <ul className="list-group list-group-flush">
//               {[
//                 {
//                   icon: '✅',
//                   title: 'Goal Setting',
//                   desc: 'Align your individual goals with company objectives.',
//                 },
//                 {
//                   icon: '📈',
//                   title: 'Mid-Year Review',
//                   desc: 'Check-in on progress and receive support if needed.',
//                 },
//                 {
//                   icon: '🏆',
//                   title: 'Annual Appraisal',
//                   desc: 'Evaluation of achievements and areas for improvement.',
//                 },
//                 {
//                   icon: '🎉',
//                   title: 'Recognition & Growth',
//                   desc: 'Rewards and new opportunities based on performance.',
//                 },
//               ].map((item, idx) => (
//                 <li className="list-group-item d-flex align-items-start gap-3" key={idx}>
//                   <span className="fs-4">{item.icon}</span>
//                   <div>
//                     <strong>{item.title}</strong><br />
//                     <small className="text-muted">{item.desc}</small>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </Card>
//         </Col>
//       </Row>

//        <div className="text-center mb-5">
//         <h2 className="fw-bold">Resolving Concerns Together</h2>
//         <p className="text-muted">
//           We are committed to a fair and transparent workplace. If you have a concern, here is the process to ensure it’s heard.
//         </p>
//       </div>

//       <Row className="mb-5 g-3 justify-content-center text-center">
//         {[
//           {
//             step: 'Step 1: Speak Up',
//             icon: '🗣️',
//             desc: 'Discuss your concern with your immediate supervisor. Many issues can be resolved quickly at this stage.'
//           },
//           {
//             step: 'Step 2: Escalate to HR',
//             icon: '📩',
//             desc: 'If the issue isn’t resolved or is inappropriate for supervisor-level resolution, you can contact HR.'
//           },
//           {
//             step: 'Step 3: Formal Review',
//             icon: '📋',
//             desc: 'HR or the Grievance Committee will conduct a confidential and impartial review of the matter.'
//           },
//           {
//             step: 'Step 4: Resolution',
//             icon: '✅',
//             desc: 'A fair resolution will be documented and shared, based on investigation of the grievance.'
//           },
//         ].map((item, idx) => (
//           <Col key={idx} xs={12} md={6} lg={3}>
//             <Card className="h-100 text-center p-3 border-0 shadow-sm">
//               <div className="fs-2">{item.icon}</div>
//               <h6 className="fw-bold mt-3">{item.step}</h6>
//               <p className="small text-muted">{item.desc}</p>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* --- Your Role in Success Section --- */}
//       <div className="text-center mb-4 ">
//         <h4 className="fw-bold">Your Role in Our Success</h4>
//         <p className="text-muted">
//           As a key member of the RUWA INDIA team, your commitment to these principles is crucial.
//         </p>
//       </div>

//       <Card className="shadow-sm border-0">
//         <ul className="list-group list-group-flush">
//           <li className="list-group-item d-flex align-items-start">
//             <CheckCircle className="text-success me-3 mt-1" />
//             <div>
//               <strong>Uphold the Code of Conduct</strong><br />
//               Always act with integrity, respect, and professionalism.
//             </div>
//           </li>
//           <li className="list-group-item d-flex align-items-start">
//             <Shield className="text-warning me-3 mt-1" />
//             <div>
//               <strong>Protect Confidential Information</strong><br />
//               Safeguard all personal and sensitive data related to our company, patients, and partners.
//             </div>
//           </li>
//           <li className="list-group-item d-flex align-items-start">
//             <AlertTriangle className="text-danger me-3 mt-1" />
//             <div>
//               <strong>Ensure a Safe Workplace</strong><br />
//               Adhere to health and safety procedures and promptly report hazards.
//             </div>
//           </li>
//           <li className="list-group-item d-flex align-items-start">
//             <Users className="text-primary me-3 mt-1" />
//             <div>
//               <strong>Foster an Inclusive Environment</strong><br />
//               Contribute to a workplace free from discrimination and harassment.
//             </div>
//           </li>
//         </ul>
//       </Card>
//     </Container>
//   );
// }
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { CheckCircle, Shield, AlertTriangle, Users } from 'lucide-react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

export default function WelcomeHR() {
  const pieData = {
    labels: ['Casual Leave', 'Sick Leave', 'Earned Leave'],
    datasets: [
      {
        data: [5, 8, 12],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 1,
      },
    ],
  };

  const coreValues = [
    { icon: '🔓', title: 'Integrity', desc: 'Upholding honesty and strong moral principles in all our actions.' },
    { icon: '🤝', title: 'Respect', desc: 'Treating everyone with dignity, fairness, and courtesy.' },
    { icon: '🏅', title: 'Excellence', desc: 'Striving for the highest quality in our services and operations.' },
    { icon: '💪', title: 'Accountability', desc: 'Taking responsibility for our actions and commitments.' },
    { icon: '👥', title: 'Collaboration', desc: 'Working together towards our shared goals for a healthier India.' },
    { icon: '🌎', title: 'Social Responsibility', desc: 'Positively impacting the health and well-being of our community.' },
  ];

  const performanceCycle = [
    { icon: '✅', title: 'Goal Setting', desc: 'Align your individual goals with company objectives.' },
    { icon: '📈', title: 'Mid-Year Review', desc: 'Check-in on progress and receive support if needed.' },
    { icon: '🏆', title: 'Annual Appraisal', desc: 'Evaluation of achievements and areas for improvement.' },
    { icon: '🎉', title: 'Recognition & Growth', desc: 'Rewards and new opportunities based on performance.' },
  ];

  const grievanceSteps = [
    {
      step: 'Step 1: Speak Up',
      icon: '🗣️',
      desc: 'Discuss your concern with your immediate supervisor. Many issues can be resolved quickly at this stage.',
    },
    {
      step: 'Step 2: Escalate to HR',
      icon: '📩',
      desc: 'If the issue isn’t resolved or is inappropriate for supervisor-level resolution, you can contact HR.',
    },
    {
      step: 'Step 3: Formal Review',
      icon: '📋',
      desc: 'HR or the Grievance Committee will conduct a confidential and impartial review of the matter.',
    },
    {
      step: 'Step 4: Resolution',
      icon: '✅',
      desc: 'A fair resolution will be documented and shared, based on investigation of the grievance.',
    },
  ];

  return (
    <Container className="py-5">

      {/* Welcome Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary">Welcome to the Team!</h2>
        <p className="text-muted">
          This guide highlights the core principles and policies that make RUWA INDIA a great place to work.
          We’re dedicated to transforming healthcare in India, and you are a vital part of that mission.
        </p>
      </div>

      {/* Core Values */}
      <Card className="p-4 shadow-lg border-0 mb-5">
        <h4 className="fw-bold text-center mb-4">Our Core Values</h4>
        <p className="text-muted text-center mb-4">These principles guide every decision we make.</p>
        <Row className="g-4">
          {coreValues.map((value, idx) => (
            <Col key={idx} xs={12} md={4}>
              <Card className="p-4 h-100 text-center shadow border-0 rounded-4">
                <div className="fs-1 mb-2">{value.icon}</div>
                <h6 className="fw-bold">{value.title}</h6>
                <p className="text-muted small">{value.desc}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>

      {/* Key HR Policies */}
      <div className="text-center mb-4">
        <h4 className="fw-bold">Key HR Policies at a Glance</h4>
        <p className="text-muted">A quick overview of our commitment to your well-being and growth.</p>
      </div>

      <Row className="g-4 mb-5">
        <Col md={6}>
          <Card className="p-4 shadow-lg border-0 text-center h-100 rounded-4">
            <h5 className="fw-bold mb-3">Annual Leave Distribution</h5>
            <Pie data={pieData} />
            <div className="mt-3 text-muted small">
              This chart shows a typical breakdown of leave types available. Details vary by role and tenure.
            </div>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="p-4 shadow-lg border-0 h-100 rounded-4">
            <h5 className="fw-bold mb-3 text-center">Our Annual Performance Cycle</h5>
            <ul className="list-group list-group-flush">
              {performanceCycle.map((item, idx) => (
                <li className="list-group-item d-flex align-items-start gap-3" key={idx}>
                  <span className="fs-4">{item.icon}</span>
                  <div>
                    <strong>{item.title}</strong><br />
                    <small className="text-muted">{item.desc}</small>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </Col>
      </Row>

      {/* Resolving Concerns */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Resolving Concerns Together</h2>
        <p className="text-muted">
          We are committed to a fair and transparent workplace. If you have a concern, here is the process to ensure it’s heard.
        </p>
      </div>

      <Row className="mb-5 g-3 justify-content-center text-center">
        {grievanceSteps.map((item, idx) => (
          <Col key={idx} xs={12} md={6} lg={3}>
            <Card className="h-100 text-center p-3 border-0 shadow-sm">
              <div className="fs-2">{item.icon}</div>
              <h6 className="fw-bold mt-3">{item.step}</h6>
              <p className="small text-muted">{item.desc}</p>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Your Role in Success */}
      <div className="text-center mb-4">
        <h4 className="fw-bold">Your Role in Our Success</h4>
        <p className="text-muted">
          As a key member of the RUWA INDIA team, your commitment to these principles is crucial.
        </p>
      </div>

      <Card className="shadow-sm border-0">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex align-items-start">
            <CheckCircle className="text-success me-3 mt-1" />
            <div>
              <strong>Uphold the Code of Conduct</strong><br />
              Always act with integrity, respect, and professionalism.
            </div>
          </li>
          <li className="list-group-item d-flex align-items-start">
            <Shield className="text-warning me-3 mt-1" />
            <div>
              <strong>Protect Confidential Information</strong><br />
              Safeguard all personal and sensitive data related to our company, patients, and partners.
            </div>
          </li>
          <li className="list-group-item d-flex align-items-start">
            <AlertTriangle className="text-danger me-3 mt-1" />
            <div>
              <strong>Ensure a Safe Workplace</strong><br />
              Adhere to health and safety procedures and promptly report hazards.
            </div>
          </li>
          <li className="list-group-item d-flex align-items-start">
            <Users className="text-primary me-3 mt-1" />
            <div>
              <strong>Foster an Inclusive Environment</strong><br />
              Contribute to a workplace free from discrimination and harassment.
            </div>
          </li>
        </ul>
      </Card>
    </Container>
  );
}
