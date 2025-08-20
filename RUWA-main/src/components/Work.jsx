// import React from 'react'

// export default function Work() {
//   return (
//     <>
//      <section className="section howitworks__v1" id="how-it-works">
//           <div className="container">
//             <div className="row mb-5">
//               <div className="col-md-6 text-center mx-auto"><span className="subtitle text-uppercase mb-3" data-aos="fade-up" data-aos-delay="0">How it works</span>
//                 <h2 data-aos="fade-up" data-aos-delay="100">How It Works</h2>
//                 <p data-aos="fade-up" data-aos-delay="200">Our platform is designed to make managing your finances simple and efficient. Follow these easy steps to get started: </p>
//               </div>
//             </div>
//             <div className="row g-md-5">
//               <div className="col-md-6 col-lg-3">
//                 <div className="step-card text-center h-100 d-flex flex-column justify-content-start position-relative" data-aos="fade-up" data-aos-delay="0">
//                   <div data-aos="fade-right" data-aos-delay="500"><img className="arch-line" src="assets/images/arch-line.svg" alt="FreeBootstrap.net image placeholder"/></div><span className="step-number rounded-circle text-center fw-bold mb-5 mx-auto">1</span>
//                   <div>
//                     <h3 className="fs-5 mb-4">Sign Up</h3>
//                     <p>Enroll in our Health Card Services online or at participating hospitals.</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="600">
//                 <div className="step-card reverse text-center h-100 d-flex flex-column justify-content-start position-relative">
//                   <div data-aos="fade-right" data-aos-delay="1100"><img className="arch-line reverse" src="assets/images/arch-line-reverse.svg" alt="FreeBootstrap.net image placeholder"/></div><span className="step-number rounded-circle text-center fw-bold mb-5 mx-auto">2</span>
//                   <h3 className="fs-5 mb-4">Access Services</h3>
//                  <p>Use your health card at any of our partner hospitals for treatment.</p>
//                 </div>
//               </div>
//               <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="1200">
//                 <div className="step-card text-center h-100 d-flex flex-column justify-content-start position-relative">
//                   <div data-aos="fade-right" data-aos-delay="1700"><img className="arch-line" src="assets/images/arch-line.svg" alt="FreeBootstrap.net image placeholder"/></div><span className="step-number rounded-circle text-center fw-bold mb-5 mx-auto">3</span>
//                   <h3 className="fs-5 mb-4">Cashless Treatment</h3>
//                   <p>Present your card during admission or treatment for cashless transactions.</p>
//                 </div>
//               </div>
//               <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="1800">
//                 <div className="step-card last text-center h-100 d-flex flex-column justify-content-start position-relative"><span className="step-number rounded-circle text-center fw-bold mb-5 mx-auto">4</span>
//                   <div>
//                     <h3 className="fs-5 mb-4">Insurance Claims</h3>
//                     <p>Allow us to handle the insurance claims process on your behalf, ensuring you get the coverage you deserve.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//     </>
//   )
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Work() {
   const navigate = useNavigate();

      const goToContact = () => {
        navigate('/contact');
      }
  return (
    <>
      <section className="section howitworks__v1" id="how-it-works">
        <div className="container">
          {/* Section Heading */}
          <div className="row mb-5">
            <div className="col-md-6 text-center mx-auto">
              <span className="subtitle text-uppercase mb-3" data-aos="fade-up" data-aos-delay="0">
                How it works
              </span>
              <h2 data-aos="fade-up" data-aos-delay="100">How It Works</h2>
              <p data-aos="fade-up" data-aos-delay="200">
                Our platform is designed to make managing your finances simple and efficient.
                Follow these easy steps to get started:
              </p>
            </div>
          </div>

          {/* Step Cards */}
          <div className="row g-md-5">
            {/* Step 1 */}
            <div className="col-md-6 col-lg-3">
              <div
                className="step-card text-center h-100 d-flex flex-column justify-content-start position-relative"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <div data-aos="fade-right" data-aos-delay="500">
                  <img className="arch-line" src="assets/images/arch-line.svg" alt="step-img-1" />
                </div>
                <span className="step-number rounded-circle text-center fw-bold mb-5 mx-auto">1</span>
                <div>
                  <h3 className="fs-5 mb-4">Sign Up</h3>
                  <p>Enroll in our Health Card Services online or at participating hospitals.</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="600">
              <div className="step-card reverse text-center h-100 d-flex flex-column justify-content-start position-relative">
                <div data-aos="fade-right" data-aos-delay="1100">
                  <img className="arch-line reverse" src="assets/images/arch-line-reverse.svg" alt="step-img-2" />
                </div>
                <span className="step-number rounded-circle text-center fw-bold mb-5 mx-auto">2</span>
                <h3 className="fs-5 mb-4">Access Services</h3>
                <p>Use your health card at any of our partner hospitals for treatment.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="1200">
              <div className="step-card text-center h-100 d-flex flex-column justify-content-start position-relative">
                <div data-aos="fade-right" data-aos-delay="1700">
                  <img className="arch-line" src="assets/images/arch-line.svg" alt="step-img-3" />
                </div>
                <span className="step-number rounded-circle text-center fw-bold mb-5 mx-auto">3</span>
                <h3 className="fs-5 mb-4">Cashless Treatment</h3>
                <p>Present your card during admission or treatment for cashless transactions.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="1800">
              <div className="step-card last text-center h-100 d-flex flex-column justify-content-start position-relative">
                <span className="step-number rounded-circle text-center fw-bold mb-5 mx-auto">4</span>
                <div>
                  <h3 className="fs-5 mb-4">Insurance Claims</h3>
                  <p>Allow us to handle the insurance claims process on your behalf, ensuring you get the coverage you deserve.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Extra Card Section */}
          <div className="row mt-5">
            <div className="col-md-8 mx-auto">
              <div className="card shadow-sm text-center p-4">
                <h4 className="mb-3">Ready to Take the Next Step?</h4>
                <p>Join our growing community of users achieving their financial goals effortlessly.</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="row mt-4 text-center">
            <div className="col-md-12">
              {/* <button className="btn btn-primary me-3">Join Us</button> */}
              <button
              type="Button"
              className="btn btn-primary me-3"
              data-bs-dismiss="modal"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Join Us
            </button>
              <button className="btn btn-outline-dark" onClick={goToContact}>Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
