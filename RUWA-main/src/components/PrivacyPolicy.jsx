import React from 'react';
// import './PrivacyPolicy.css'; // Use same styling pattern as TermsConditions

const PrivacyPolicy = () => (
  <div className="container py-4">
    <div className="card shadow-lg rounded-4 privacy-card">
      <div className="card-bod">
        <h1 className="card-title text-primary text-center mb-4">Privacy Policy</h1>

        <section className="mb-4">
          <h2>1. Introduction</h2>
          <p>
            We value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information when you use our services related to health insurance, Jan Arogya Card, ambulance support, and Jan Seva Kendra.
          </p>
        </section>

        <section className="mb-4">
          <h2>2. Information We Collect</h2>
          <ul>
            <li>Personal Identification (Name, Aadhaar, Ration Card, Phone, Email)</li>
            <li>Health-related data required for scheme eligibility (for Jan Arogya)</li>
            <li>Service interaction details (ambulance request, appointment logs, etc.)</li>
            <li>Location and device information (for mobile users)</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To verify eligibility for government welfare schemes</li>
            <li>To facilitate medical and ambulance services</li>
            <li>To generate PM-JAY / Jan Arogya health cards</li>
            <li>To provide customer support and scheme updates</li>
            <li>To maintain legal, regulatory, and internal records</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2>4. Data Sharing</h2>
          <ul>
            <li>We do not sell your data to any third party.</li>
            <li>We may share data only with authorized government departments, hospitals, or scheme partners strictly for service delivery.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2>5. Data Security</h2>
          <p>
            We implement strong security protocols including encrypted storage, access controls, and limited data access policies to protect your information from unauthorized access or misuse.
          </p>
        </section>

        <section className="mb-4">
          <h2>6. Your Rights</h2>
          <ul>
            <li>You have the right to request access to your data.</li>
            <li>You can request correction or deletion of your information.</li>
            <li>You can contact us anytime to withdraw consent or stop communication.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2>7. Cookies & Tracking</h2>
          <p>
            Our website may use cookies to improve your browsing experience. You can disable cookies through your browser settings if you prefer not to share such data.
          </p>
        </section>

        <section className="mb-4">
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time based on legal or operational requirements. Any changes will be posted on this page with a revised date.
          </p>
        </section>

        <section className="mb-4">
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding your privacy or data protection, please contact us at: <br />
            <strong>Email:</strong> support@yourdomain.com <br />
            <strong>Phone:</strong> +91-XXXX-XXX-XXX
          </p>
        </section>

        <p className="text-muted text-end">Last updated: July 25, 2025</p>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;

// import React from 'react';

// const PrivacyPolicy = () => (
//   <div className="container py-4">
//     <div className="card shadow-lg rounded-4 privacy-card">
//       <div className="card-bod">
//         <h1 className="card-title text-center mb-4">Privacy Policy</h1>

//         <div className="row g-4">
//           {/* Section 1 & 2 */}
//           <div className="col-md-6 cla">
//             <section>
//               <h2>1. Introduction</h2>
//               <p>
//                 We value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information when you use our services related to health insurance, Jan Arogya Card, ambulance support, and Jan Seva Kendra.
//               </p>
//             </section>
//           </div>
//           <div className="col-md-6">
//             <section>
//               <h2>2. Information We Collect</h2>
//               <ul>
//                 <li>Personal Identification (Name, Aadhaar, Ration Card, Phone, Email)</li>
//                 <li>Health-related data required for scheme eligibility (for Jan Arogya)</li>
//                 <li>Service interaction details (ambulance request, appointment logs, etc.)</li>
//                 <li>Location and device information (for mobile users)</li>
//               </ul>
//             </section>
//           </div>

//           {/* Section 3 & 4 */}
//           <div className="col-md-6">
//             <section>
//               <h2>3. How We Use Your Information</h2>
//               <ul>
//                 <li>To verify eligibility for government welfare schemes</li>
//                 <li>To facilitate medical and ambulance services</li>
//                 <li>To generate PM-JAY / Jan Arogya health cards</li>
//                 <li>To provide customer support and scheme updates</li>
//                 <li>To maintain legal, regulatory, and internal records</li>
//               </ul>
//             </section>
//           </div>
//           <div className="col-md-6">
//             <section>
//               <h2>4. Data Sharing</h2>
//               <ul>
//                 <li>We do not sell your data to any third party.</li>
//                 <li>We may share data only with authorized government departments, hospitals, or scheme partners strictly for service delivery.</li>
//               </ul>
//             </section>
//           </div>

//           {/* Section 5 & 6 */}
//           <div className="col-md-6">
//             <section>
//               <h2>5. Data Security</h2>
//               <p>
//                 We implement strong security protocols including encrypted storage, access controls, and limited data access policies to protect your information from unauthorized access or misuse.
//               </p>
//             </section>
//           </div>
//           <div className="col-md-6">
//             <section>
//               <h2>6. Your Rights</h2>
//               <ul>
//                 <li>You have the right to request access to your data.</li>
//                 <li>You can request correction or deletion of your information.</li>
//                 <li>You can contact us anytime to withdraw consent or stop communication.</li>
//               </ul>
//             </section>
//           </div>

//           {/* Section 7 & 8 */}
//           <div className="col-md-6">
//             <section>
//               <h2>7. Cookies & Tracking</h2>
//               <p>
//                 Our website may use cookies to improve your browsing experience. You can disable cookies through your browser settings if you prefer not to share such data.
//               </p>
//             </section>
//           </div>
//           <div className="col-md-6">
//             <section>
//               <h2>8. Changes to This Policy</h2>
//               <p>
//                 We may update this policy from time to time based on legal or operational requirements. Any changes will be posted on this page with a revised date.
//               </p>
//             </section>
//           </div>

//           {/* Section 9 Full width */}
//           <div className="col-12">
//             <section>
//               <h2>9. Contact Us</h2>
//               <p>
//                 If you have any questions or concerns regarding your privacy or data protection, please contact us at: <br />
//                 <strong>Email:</strong> support@yourdomain.com <br />
//                 <strong>Phone:</strong> +91-XXXX-XXX-XXX
//               </p>
//             </section>
//           </div>
//         </div>

//         <p className="text-muted text-end mt-4">Last updated: July 25, 2025</p>
//       </div>
//     </div>
//   </div>
// );

// export default PrivacyPolicy;
