import React from 'react'

export default function Stars() {
  return (
    <>
      <section className="stats__v3 section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex flex-wrap content rounded-4" data-aos="fade-up" data-aos-delay="0">
                  <div className="rounded-borders">
                    <div className="rounded-border-1"></div>
                    <div className="rounded-border-2"></div>
                    <div className="rounded-border-3"></div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0 text-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="stat-item">
                      <h3 className="fs-1 fw-bold"><span className="purecounter" data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="2">10</span><span>K+</span></h3>
                      <p className="mb-0">Customer Satisfaction</p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0 text-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="stat-item">
                      <h3 className="fs-1 fw-bold"> <span className="purecounter" data-purecounter-start="0" data-purecounter-end="200" data-purecounter-duration="2">200</span><span>%+</span></h3>
                      <p className="mb-0">Revenue Increase</p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0 text-center" data-aos="fade-up" data-aos-delay="300">
                    <div className="stat-item">
                      <h3 className="fs-1 fw-bold"><span className="purecounter" data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="2">20</span><span>x</span></h3>
                      <p className="mb-0">Business Growth</p>
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
