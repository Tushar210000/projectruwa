import React from 'react';

const KeyDocuments = () => {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-2">Key Documents &amp; Forms</h2>
        <p className="text-center text-muted mb-4">
          Familiarize yourself with the core documents that govern our partnership. Here you can review the MOU, Application Form, LOI, and the complete document checklist.
        </p>

        {/* Tab Buttons */}
        <ul className="nav nav-tabs justify-content-center" id="docTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="checklist-tab" data-bs-toggle="tab" data-bs-target="#checklist" type="button" role="tab">
              Document Checklist
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="form-tab" data-bs-toggle="tab" data-bs-target="#form" type="button" role="tab">
              Application Form
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="mou-tab" data-bs-toggle="tab" data-bs-target="#mou" type="button" role="tab">
              MOU
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="loi-tab" data-bs-toggle="tab" data-bs-target="#loi" type="button" role="tab">
              Letter of Intent
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content" id="docTabsContent">
          {/* Document Checklist */}
          <div className="tab-pane fade show active" id="checklist" role="tabpanel">
            <div className="bg-white rounded p-4 mt-4 shadow-sm">
              <h5 className="fw-bold">Document Checklist</h5>
              <p>This checklist outlines all the documents required during the application process.</p>

              <h6 className="fw-bold text-primary">A. For All Applicants</h6>
              <ul>
                <li>Completed Application Form</li>
                <li>Proof of Identity (PAN, Aadhaar, etc.)</li>
                <li>Proof of Address (Utility Bill, etc.)</li>
                <li>Financial Documents (Bank Statements, ITRs)</li>
                <li>Applicant’s Profile / Resume</li>
                <li>Proposed Premises Details (Photos, Layout, Ownership/Lease proof)</li>
              </ul>

              <h6 className="fw-bold text-primary">B. For Entities (Firms, Companies, Trusts)</h6>
              <ul>
                <li>Registration Certificates (Partnership Deed, Certificate of Incorporation, etc.)</li>
                <li>Entity PAN Card</li>
                <li>Authorizing Documents (Board Resolution, Consent Letter)</li>
                <li>Identity proofs of all Directors/Partners/Trustees</li>
              </ul>

              <h6 className="fw-bold text-primary">C. Upon Provisional Approval (Category Specific)</h6>
              <ul>
                <li>Drug License, Clinical Establishment Reg., Fire Safety NOC, etc.</li>
                <li>Qualification Certificates for medical & technical staff</li>
                <li>Ambulance Registration & Fitness Certificate (for S3)</li>
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <div className="tab-pane fade" id="form" role="tabpanel">
            <div className="bg-white rounded p-4 mt-4 shadow-sm">
              <h5 className="fw-bold">Franchise Application Form (Overview)</h5>
              <p>This form collects essential details for your application. Ensure all information is accurate.</p>
              <h6 className="fw-bold">Key Sections:</h6>
              <ol>
                <li><strong>Applicant Details:</strong> Contact and professional background</li>
                <li><strong>Franchise Location:</strong> City, locality, premises details</li>
                <li><strong>Franchise Interest:</strong> Preferred category (S1/S2/S3) and motivation</li>
                <li><strong>Financial Info:</strong> Investment capacity and source of funds</li>
                <li><strong>Declaration:</strong> Confirmation of information accuracy</li>
              </ol>
            </div>
          </div>

          {/* MOU */}
          <div className="tab-pane fade" id="mou" role="tabpanel">
            <div className="bg-white rounded p-4 mt-4 shadow-sm">
              <h5 className="fw-bold">Memorandum of Understanding (MOU) Summary</h5>
              <p className="text-muted">The MOU is a non-binding document outlining the initial understanding between you and RUWA INDIA.</p>
              <h6 className="fw-bold">Key Clauses:</h6>
              <ul>
                <li><strong>Purpose:</strong> Explore franchise partnership</li>
                <li><strong>Due Diligence:</strong> Agree to cooperate in good faith</li>
                <li><strong>Confidentiality:</strong> Protect shared information</li>
                <li><strong>Non-Binding:</strong> Not the final agreement</li>
                <li><strong>Term:</strong> Valid typically for 3 months</li>
              </ul>
            </div>
          </div>

          {/* LOI */}
          <div className="tab-pane fade" id="loi" role="tabpanel">
            <div className="bg-white rounded p-4 mt-4 shadow-sm">
              <h5 className="fw-bold">Letter of Intent (LOI) Summary</h5>
              <p className="text-muted">The LOI is your formal expression of interest in joining the franchise program.</p>
              <h6 className="fw-bold">What to Include:</h6>
              <ul>
                <li>Your name/company name and address</li>
                <li>Statement of franchise interest</li>
                <li>Preferred category and location</li>
                <li>Acknowledgement of non-binding nature</li>
                <li>Commitment to due diligence</li>
                <li>Your contact details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      {/* <div className="container text-center py-5">
        <h2 className="fw-bold mb-3">Ready to Take the Next Step?</h2>
        <p className="text-muted mx-auto mb-4" style={{ maxWidth: '700px' }}>
          If you're passionate about making a difference in healthcare, begin your application.
          Download the forms, prepare your documents, and join us on this journey.
        </p>
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-4">
          <a href="mailto:franchise@ruwaindia.com" className="btn btn-primary fw-semibold px-4 py-2">
            Email Your LOI
          </a>
          <a href="#documents" className="btn btn-outline-secondary fw-semibold px-4 py-2">
            Review Documents
          </a>
        </div>
        <div className="text-muted small">
          <p>&copy; 2025 RUWA INDIA. All Rights Reserved.</p>
          <p>Website: <a href="https://www.ruwaindia.com" target="_blank" rel="noreferrer" className="text-decoration-underline">www.ruwaindia.com</a></p>
          <p className="mt-3">
            This page is informational only and does not constitute a franchise offer.
            A franchise is only offered via a Franchise Disclosure Document (FDD).
          </p>
        </div>
      </div> */}
      <div className="container py-5">
  <div className="row align-items-center text-center text-md-start">
    {/* Image on Left */}
    <div className="col-md-6 mb-4 mb-md-0">
      <img
        src="/assets/images/arogaykendrathi.png"
        alt="Join RUWA INDIA"
        className="img-fluid rounded-4 shadow"
      />
    </div>

    {/* Text and Actions on Right */}
    <div className="col-md-6">
      <h2 className="fw-bold mb-3">Ready to Take the Next Step?</h2>
      <p className="text-muted mx-auto mx-md-0 mb-4" style={{ maxWidth: '700px' }}>
        If you're passionate about making a difference in healthcare, begin your application.
        Download the forms, prepare your documents, and join us on this journey.
      </p>

      <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3 mb-4">
        <a href="mailto:franchise@ruwaindia.com" className="btn btn-primary fw-semibold px-4 py-2">
          Email Your LOI
        </a>
        <a href="#documents" className="btn btn-outline-secondary fw-semibold px-4 py-2">
          Review Documents
        </a>
      </div>

      <div className="text-muted small">
        <p>&copy; 2025 RUWA INDIA. All Rights Reserved.</p>
        <p>
          Website:{" "}
          <a
            href="https://www.ruwaindia.com"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-underline"
          >
            www.ruwaindia.com
          </a>
        </p>
        <p className="mt-3">
          This page is informational only and does not constitute a franchise offer.
          A franchise is only offered via a Franchise Disclosure Document (FDD).
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default KeyDocuments;
