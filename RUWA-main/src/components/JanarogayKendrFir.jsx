
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import './FranchiseSection.css'; // Make sure to create this CSS file

export default function FranchiseSection() {
  const navigate = useNavigate();
  const cardData = [
    {
      step: "S1",
      title: "Essential Care",
      description:
        "The foundational model focused on essential diagnostic and pharmaceutical services.",
      features: ["Basic Pathology Lab", "Generic Medicine Centre"],
    },
    {
      step: "S2",
      title: "Enhanced Diagnostics",
      description:
        "An advanced model with expanded diagnostics for comprehensive health evaluations.",
      features: [
        "All S1 Services",
        "Advanced Pathology Lab",
        "Diagnosis Centre (ECG, etc.)",
      ],
      badge: "Popular",
    },
    {
      step: "S3",
      title: "Comprehensive Hub",
      description:
        "A complete healthcare solution offering full primary care and emergency response.",
      features: [
        "All S2 Services",
        "MBBS Doctor Availability",
        "Ambulance Service",
      ],
    },
  ];

  const handleDownloadForm = () => {
    // Path to your PDF file in the public folder
    const pdfUrl = "/assets/images/Franchise-Application-Form.pdf (2).pdf";
    window.open(pdfUrl, "_blank"); // Opens in a new tab for view/download
  };
  return (
    // <div className="bg-light py-5 text-center">
    //   <Container>
    //     <h2 className="mb-3 fw-bold fs-1">Join Us in Building a Healthier India</h2>
    //     <p className="mb-4 text-muted fs-6 px-3 px-md-5">
    //       Become a RUWA INDIA franchise partner and bring accessible, affordable healthcare to your community.
    //     </p>
    //     <Button variant="primary" className="mb-5 px-4 py-2 fs-6">
    //       Explore the Process
    //     </Button>

    //     <h4 className="mb-3 fw-semibold">Choose Your Franchise Model</h4>
    //     <p className="mb-4 text-muted px-2 px-md-4">
    //       We offer three distinct models to suit different investment levels and community needs.
    //     </p>

    //     <Row className="g-4">
    //       {cardData.map((card, idx) => (
    //         <Col xs={12} sm={12} md={6} lg={4} key={idx}>
    //           <div className="card h-100 shadow-sm text-start p-3 border-0 rounded-4 position-relative">
    //             {/* Ribbon for "Popular" */}
    //             {card.badge && (
    //               <div className="ribbon">
    //                 <span>{card.badge}</span>
    //               </div>
    //             )}

    //             <div className="card-body d-flex flex-column align-items-start">
    //               {/* Step circle */}
    //               <div
    //                 className={`step-circle ${
    //                   card.step === "S1"
    //                     ? "bg-step-1"
    //                     : card.step === "S2"
    //                     ? "bg-step-2"
    //                     : "bg-step-3"
    //                 }`}
    //               >
    //                 {card.step}
    //               </div>

    //               <h5 className="card-title mb-2">{card.title}</h5>
    //               <p className="card-text text-muted mb-3">{card.description}</p>
    //               <ul className="list-unstyled mt-auto">
    //                 {card.features.map((f, i) => (
    //                   <li key={i}>✔ {f}</li>
    //                 ))}
    //               </ul>
    //             </div>
    //           </div>
    //         </Col>
    //       ))}
    //     </Row>
    //   </Container>
    // </div>
    <div className="bg-light py-5 text-center text-md-start">
  <Container>
    <Row className="align-items-center mb-5">
  {/* Left half - Image */}
  <Col md={6} className="mb-4 mb-md-0">
    <img
      src="/assets/images/jansevakendra.jpg"
      alt="Healthy India"
      className="img-fluid rounded-4 shadow"
    />
  </Col>

  {/* Right half - Text + Buttons */}
  <Col md={6}>
    <h2 className="mb-3 fw-bold fs-1">
      Join Us in Building a Healthier India
    </h2>
    <p className="mb-4 text-muted fs-6 px-3 px-md-0">
      Become a RUWA INDIA franchise partner and bring accessible, affordable
      healthcare to your community.
    </p>

    {/* Buttons in flex row with gap */}
    <div className="d-flex flex-wrap gap-3">
      <Button
        variant="primary"
        className="px-4 py-2 fs-6 flex-grow-1 flex-md-grow-0"
        onClick={() => navigate("/apply-kendrform")}
      >
        Explore the Process
      </Button>
      <Button
        variant="outline-primary"
        className="px-4 py-2 fs-6 flex-grow-1 flex-md-grow-0"
        onClick={handleDownloadForm}
      >
        Download Form
      </Button>
    </div>
  </Col>
</Row>


    {/* Remaining Section: Franchise Models */}
    <h4 className="mb-3 fw-semibold text-center">Choose Your Franchise Model</h4>
    <p className="mb-4 text-muted px-2 px-md-4 text-center">
      We offer three distinct models to suit different investment levels and community needs.
    </p>

    <Row className="g-4">
      {cardData.map((card, idx) => (
        <Col xs={12} sm={12} md={6} lg={4} key={idx}>
          <div className="card h-100 shadow-sm text-start p-3 border-0 rounded-4 position-relative">
            {/* Ribbon for "Popular" */}
            {card.badge && (
              <div className="ribbon">
                <span>{card.badge}</span>
              </div>
            )}

            <div className="card-body d-flex flex-column align-items-start">
              <div
                className={`step-circle ${
                  card.step === "S1"
                    ? "bg-step-1"
                    : card.step === "S2"
                    ? "bg-step-2"
                    : "bg-step-3"
                }`}
              >
                {card.step}
              </div>

              <h5 className="card-title mb-2">{card.title}</h5>
              <p className="card-text text-muted mb-3">{card.description}</p>
              <ul className="list-unstyled mt-auto">
                {card.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</div>

  );
}
