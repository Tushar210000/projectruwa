import React from 'react'

export default function Priceing() {
  return (
    <>
     <section className="section pricing__v2" id="pricing">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-5 mx-auto text-center"><span className="subtitle text-uppercase mb-3" data-aos="fade-up" data-aos-delay="0">Pricing</span>
                <h2 className="mb-3" data-aos="fade-up" data-aos-delay="100">Plan for every budget</h2>
                <p data-aos="fade-up" data-aos-delay="200">Experience the future of finance with our secure, efficient, and user-friendly financial services</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="300">
                <div className="p-5 rounded-4 price-table h-100">
                  <h3>Personal</h3>
                  <p>Choose a plan that fits your personal financial needs and start managing your finances more effectively.</p>
                  <div className="price mb-4"><strong>$7</strong><span>/ month</span></div>
                  <div><a className="btn" href="#">Get Started</a></div>
                </div>
              </div>
              <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
                <div className="p-5 rounded-4 price-table popular h-100">
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="mb-3">Business</h3>
                      <p>Optimize your business financial operations with our tailored business plans.</p>
                      <div className="price mb-4"><strong className="me-1">$29</strong><span>/ month</span></div>
                      <div><a className="btn btn-white hover-outline" href="#">Get Started</a></div>
                    </div>
                    <div className="col-md-6 pricing-features">
                      <h4 className="text-uppercase fw-bold mb-3">Features</h4>
                      <ul className="list-unstyled d-flex flex-column gap-3">
                        <li className="d-flex gap-2 align-items-start mb-0"><span className="icon rounded-circle position-relative mt-1"><i className="bi bi-check"></i></span><span>Personalized financial insights and reports</span></li>
                        <li className="d-flex gap-2 align-items-start mb-0"><span className="icon rounded-circle position-relative mt-1"><i className="bi bi-check"></i></span><span>Priority customer support</span></li>
                        <li className="d-flex gap-2 align-items-start mb-0"><span className="icon rounded-circle position-relative mt-1"><i className="bi bi-check"></i></span><span>Access to exclusive investment opportunities</span></li>
                        <li className="d-flex gap-2 align-items-start mb-0"><span className="icon rounded-circle position-relative mt-1"><i className="bi bi-check"></i></span><span>AI-driven financial recommendations</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
