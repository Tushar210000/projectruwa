// import React from 'react'

// export default function Faq() {
//   return (
//     <section className="section faq__v2" id="faq">
//           <div className="container">
//             <div className="row mb-4">
//               <div className="col-md-6 col-lg-7 mx-auto text-center"><span className="subtitle text-uppercase mb-3" data-aos="fade-up" data-aos-delay="0">FAQ</span>
//                 <h2 className="h2 fw-bold mb-3" data-aos="fade-up" data-aos-delay="0">Frequently Asked Questions</h2>
//                 <p data-aos="fade-up" data-aos-delay="100">Utilize our tools to develop your concepts and bring your vision to life. Once complete, effortlessly share your creations.</p>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-md-8 mx-auto" data-aos="fade-up" data-aos-delay="200">
//                 <div className="faq-content">
//                   <div className="accordion custom-accordion" id="accordionPanelsStayOpenExample">
//                     <div className="accordion-item">
//                       <h2 className="accordion-header">
//                         <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne"> What services does your web agency offer? </button>
//                       </h2>
//                       <div className="accordion-collapse collapse show" id="panelsStayOpen-collapseOne">
//                         <div className="accordion-body">Our web agency offers a comprehensive range of services including web design and development, e-commerce solutions, SEO optimization, content creation, website maintenance, and digital marketing strategies. We tailor our services to meet the unique needs of each client, ensuring a customized approach to every project.</div>
//                       </div>
//                     </div>
//                     <div className="accordion-item">
//                       <h2 className="accordion-header">
//                         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo"> How much does it cost to build a website? </button>
//                       </h2>
//                       <div className="accordion-collapse collapse" id="panelsStayOpen-collapseTwo">
//                         <div className="accordion-body">The cost of building a website can vary widely depending on the complexity, features, and specific requirements of your project. We offer several pricing packages to accommodate different budgets and needs. After an initial consultation, we can provide a detailed quote based on your specific goals and objectives.</div>
//                       </div>
//                     </div>
//                     <div className="accordion-item">
//                       <h2 className="accordion-header">
//                         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree"> How long does it take to design and develop a website? </button>
//                       </h2>
//                       <div className="accordion-collapse collapse" id="panelsStayOpen-collapseThree">
//                         <div className="accordion-body">The timeline for designing and developing a website depends on the project&apos;s complexity and scope. Typically, a standard business website takes about 4-6 weeks to complete, while more complex projects like e-commerce sites or custom applications may take longer. We work closely with our clients to establish a realistic timeline and keep you informed throughout the process.</div>
//                       </div>
//                     </div>
//                     <div className="accordion-item">
//                       <h2 className="accordion-header">
//                         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour"> Will my website be mobile-friendly? </button>
//                       </h2>
//                       <div className="accordion-collapse collapse" id="panelsStayOpen-collapseFour">
//                         <div className="accordion-body">Absolutely! All the websites we design and develop are fully responsive, meaning they are optimized to work seamlessly across all devices, including desktops, tablets, and smartphones. Ensuring a great user experience on mobile devices is a top priority in our development process.</div>
//                       </div>
//                     </div>
//                     <div className="accordion-item">
//                       <h2 className="accordion-header">
//                         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive"> Do you provide ongoing support and maintenance for websites? </button>
//                       </h2>
//                       <div className="accordion-collapse collapse" id="panelsStayOpen-collapseFive">
//                         <div className="accordion-body">Yes, we offer ongoing support and maintenance services to ensure your website remains up-to-date, secure, and functioning smoothly. Our maintenance packages can include regular updates, security monitoring, backups, and technical support to address any issues that may arise. We&apos;re here to help you keep your website running efficiently long after it&apos;s launched.</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//         </section>
        
//   )
// }
import React from 'react';

export default function Faq() {
  return (
    <section className="section faq__v2" id="faq" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6 col-lg-7 mx-auto text-center">
            <span className="subtitle text-uppercase mb-3" data-aos="fade-up" data-aos-delay="0">FAQ</span>
            <h2 className="h2 fw-bold mb-3" data-aos="fade-up" data-aos-delay="0">Frequently Asked Questions</h2>
            <p data-aos="fade-up" data-aos-delay="100">We aim to make quality healthcare accessible and affordable through Jan Arogya Card, Jan Swabhiman Seva, and other health initiatives. Here are some common questions.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="faq-content">
              <div className="accordion custom-accordion" id="accordionPanelsStayOpenExample">
                
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                      What is the Jan Arogya Card and who can apply for it?
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse show" id="faq1">
                    <div className="accordion-body">
                      The Jan Arogya Card provides access to cashless medical treatment under Ayushman Bharat Yojana. Families listed in the SECC database or holding a ration card are eligible. It covers up to ₹5 lakh per year per family at empanelled hospitals.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                      What is Jan Swabhiman Seva and how does it help?
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse" id="faq2">
                    <div className="accordion-body">
                      Jan Swabhiman Seva is a welfare initiative that provides affordable health checkups, insurance enrollment, and digital health card support for low-income individuals. It also promotes awareness and access to government schemes.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                      How can I apply for the Jan Arogya Card?
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse" id="faq3">
                    <div className="accordion-body">
                      You can apply online through the Ayushman Bharat official website or visit a nearby Jan Swabhiman Seva Kendra. You’ll need your Aadhaar card, ration card, and other basic documents to complete registration.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                      Is cashless treatment available under these services?
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse" id="faq4">
                    <div className="accordion-body">
                      Yes, under the Jan Arogya Card and Jan Swabhiman Seva, cashless treatment is available in empanelled hospitals for covered medical procedures, subject to policy limits and approval.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                      What documents are required for health insurance under these schemes?
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse" id="faq5">
                    <div className="accordion-body">
                      Basic documents such as Aadhaar card, ration card, income certificate, and a passport-size photo are usually required. For specific schemes, additional documents may be needed based on your category.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                      Where can I check the list of empanelled hospitals?
                    </button>
                  </h2>
                  <div className="accordion-collapse collapse" id="faq6">
                    <div className="accordion-body">
                      You can visit the Ayushman Bharat or Jan Swabhiman Seva website to view the list of empanelled hospitals in your district. You can also ask at your nearest help center.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
