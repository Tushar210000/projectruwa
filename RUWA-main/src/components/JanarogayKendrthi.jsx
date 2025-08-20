
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
// import "bootstrap/dist/css/bootstrap.min.css";

const eligibilityData = [
  { name: "< 10 Lakhs", value: 25 },
  { name: "10 - 25 Lakhs", value: 30 },
  { name: "25 - 50 Lakhs", value: 30 },
  { name: "> 50 Lakhs", value: 15 },
];

const recommendationData = [
  { name: "Kiosk", value: 30 },
  { name: "Mini", value: 40 },
  { name: "Standard", value: 20 },
  { name: "Mega", value: 10 },
];

const COLORS = ["#009ef7", "#74c0fc", "#ffc107", "#dc3545"];

export default function AdvisorEligibilitySection() {
  return (
    <div className="bg-light py-5 px-3">
      <div className="container-fluid bg-white rounded-3 p-4 shadow-sm mb-5">
        <div className="row g-5">
          {/* Left: Eligibility Section */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-2">Are You Eligible?</h2>
            <p className="text-muted mb-4">
              We welcome applications from passionate individuals and organizations. Here's a summary of the key requirements. Detailed criteria are available in the documents section.
            </p>
            <div style={{ width: "100%", height: 250 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={eligibilityData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={4}
                  >
                    {eligibilityData.map((entry, index) => (
                      <Cell key={`cell-elig-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-muted small mt-2">
              Investment capacity as indicated by applicants (Illustrative Data).
            </p>

            <h5 className="fw-semibold border-bottom pb-2 mt-4">General Requirements (All Applicants)</h5>
            <ul className="list-unstyled ps-3 small">
              <li className="mb-1">• Commitment to providing affordable healthcare.</li>
              <li className="mb-1">• Financial stability for investment and operations.</li>
              <li className="mb-1">• Suitable premises: Min. 200 sq. ft. (S1), 400 sq. ft. (S2), 600 sq. ft. (S3).</li>
              <li className="mb-1">• Willingness to obtain all necessary licenses and comply with regulations.</li>
              <li>• Clean legal and financial record.</li>
            </ul>

            <h5 className="fw-semibold mt-4">Applicant Types</h5>
            <p className="mb-2 small">We accept applications from:</p>
            <div className="d-flex flex-wrap gap-2 mb-3">
              <span className="badge bg-light text-dark border">Individuals</span>
              <span className="badge bg-light text-dark border">Partnership Firms</span>
              <span className="badge bg-light text-dark border">Private Ltd. Companies</span>
              <span className="badge bg-light text-dark border">Trusts / Societies / NGOs</span>
            </div>

            <h5 className="fw-semibold">Key Personnel & Licensing (Category Specific)</h5>
            <ul className="list-unstyled ps-3 small">
              <li className="mb-1">• <strong>S1:</strong> Lab Technician (DMLT/B.Sc. MLT) + Pharmacist (D.Pharma/B.Pharma)</li>
              <li className="mb-1">• <strong>S2:</strong> S1 + possible MD Pathologist</li>
              <li className="mb-1">• <strong>S3:</strong> S2 + MBBS Doctor, EMT, Ambulance driver</li>
              <li>• Mandatory licenses: Drug License, Clinical Establishment Registration, etc.</li>
            </ul>
          </div>

          {/* Right: Franchise Recommendation Section */}
          <div className="col-lg-6">
            <div className="bg-light p-4 rounded shadow-sm h-100 d-flex flex-column">
              <h4 className="fw-bold text-center mb-2">Franchise Suitability Advisor ✨</h4>
              <p className="text-muted text-center mb-4">
                Unsure which Jan Arogya Kendra category is right for you? Provide some details, and our AI-powered advisor will offer a personalized recommendation based on our franchise models.
              </p>

              <form className="flex-grow-1">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Background/Experience:</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="e.g., 'I am a pharmacist with 5 years of experience managing a small clinic.'"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Available Investment (in Lakhs INR):</label>
                  <input type="text" className="form-control" placeholder="e.g., 20" />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Preferred City/Region:</label>
                  <input type="text" className="form-control" placeholder="e.g., 'Tier 2 city in Maharashtra'" />
                </div>
                <div className="d-grid mb-4">
                  <button type="submit" className="btn btn-primary fw-bold">
                    Get Recommendation ✨
                  </button>
                </div>
              </form>

              <div style={{ width: "100%", height: 220 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={recommendationData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={70}
                      label
                    >
                      {recommendationData.map((entry, index) => (
                        <Cell key={`cell-rec-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-center text-muted small mt-2">
                Suggested Franchise Model Based on Inputs (Demo).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
