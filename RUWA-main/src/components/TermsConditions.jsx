import React from 'react';
// import './TermsConditions.css'; // Make sure to create this CSS file

const TermsConditions = () => (
  <div className="container py-4">
    <div className="card shadow-lg rounded-4 terms-card">
      <div className="card-bod">
        <h1 className=" text-center mb-4">
                      <span className="subtitle text-uppercase mb-2 text-muted fs-6">Terms & Conditions</span>
</h1>
        <section className="mb-4">
          <h2>1. Scope of Services</h2>
          <ul>
            <li>Assistance with enrolment and issuance of Jan Arogya (PM‑JAY) health insurance cards.</li>
            <li>Cashless ambulance and secondary/tertiary inpatient care support under PM‑JAY cover (up to ₹5 lakh per family per year).</li>
            <li>On‑site Jan Seva Centers to support eligibility checks, documentation, and grievance support.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2>2. Eligibility & Coverage</h2>
          <ul>
            <li>Beneficiaries must be part of SECC‑2011 identified families, including state-expanded categories.</li>
            <li>₹5 lakh annual family floater for inpatient care; no cap on family size or waiting period.</li>
            <li>Includes pre/post-hospitalization, diagnostics, medicines, food, and more.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2>3. Limitations & Exclusions</h2>
          <ul>
            <li>No coverage for OPD, cosmetic/fertility treatments, drug rehab, etc.</li>
            <li>Costs exceeding ₹5 lakh must be borne by the beneficiary.</li>
            <li>Experimental/unapproved or non-empanelled hospital services are excluded.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2>4. Obligations of Hospitals & Service Providers</h2>
          <ul>
            <li>Empanelled hospitals must not deny services to eligible patients.</li>
            <li>Denials can be reported via helplines or grievance portals.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2>5. Grievance Redressal</h2>
          <ul>
            <li>3-tier support: district, state, national via CGRMS, email, or phone.</li>
            <li>Jan Seva Center support available for filing grievances.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2>6. Data Privacy & Confidentiality</h2>
          <ul>
            <li>Only required data (Aadhaar, Ration Card, etc.) is collected for verification.</li>
            <li>We strictly follow data protection policies.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2>7. Disclaimers</h2>
          <ul>
            <li>We facilitate schemes but don't guarantee claim outcomes.</li>
            <li>Not liable for delays due to user-side documentation issues.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2>8. Amendments to Terms</h2>
          <p>
            Terms are subject to updates as per government scheme rules. Latest versions will be published on our website or at Jan Seva Centers.
          </p>
        </section>

        <p className="text-muted text-end">Last updated: July 25, 2025</p>
      </div>
    </div>
  </div>
);

export default TermsConditions;
