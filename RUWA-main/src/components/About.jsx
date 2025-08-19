








// final code 
import React from 'react';
import Featuers from './Featuers';
import { useNavigate } from 'react-router-dom';
export default function About() {
     const navigate = useNavigate();
      const goToContact = () => {
        navigate('/contact');
      }
  return (
    <>
      <section className="about__v4 section py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Content */}
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <div className="p-3 p-md-0">
                <span className="subtitle text-uppercase mb-2 d-block" data-aos="fade-up">About us</span>
                <h2 className="mb-3" data-aos="fade-up" data-aos-delay="100">
                  Welcome to {process.env.REACT_APP_SITE_NAME} </h2> 
                  <p> your one-stop solution for comprehensive healthcare services and insurance.
               </p>
                <div data-aos="fade-up" data-aos-delay="200">
                  <p>
                    We understand that navigating the health system can be challenging, and we are here to simplify the process, ensuring that our patients receive the care they need without any hassles.
                  </p>
                  <p>
                    At {process.env.REACT_APP_SITE_NAME}, we are dedicated to providing a complete range of healthcare services under one roof. Our offerings include:
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="col-lg-6">
              <div className="img-wrap text-center" data-aos="fade-up">
                <img
                  className="img-fluid rounded-4 w-100"
                  src="/assets/images/doctor.jpg"
                  alt="Healthcare"
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="row mt-5">
            {[
              {
                title: 'Your Trusted Health Partner',
                icon: 'bi-hospital text-succes',
              
                text:
                  'At RUWA India, we are proud to be your one-stop solution for all healthcare services, combining comprehensive health insurance coverage with innovative treatments for life-threatening diseases. Our mission is to provide seamless access to a range of health services that cater to every individual’s needs, ensuring patient-focused care at every step.'
              },
              {
                title: 'Mission Statement',
                icon: 'bi-lightbulb text-warning',
                text:
                  'Our vision is to create a healthier India where everyone has access to essential healthcare services and the peace of mind that comes with adequate health insurance coverage. We combine our medical expertise with exceptional customer service to provide a seamless experience for our patients.'
              },
              {
                title: 'Extensive Health Insurance Options',
                icon: 'bi-file-earmark-medical text-danger',
                text:
                  'We partner with multiple reputable insurance providers, offering a variety of health insurance plans tailored to fit your needs and budget. This extensive network simplifies the process of selecting the right coverage, allowing you to focus on what matters most—your health.'
              },
              {
                title: 'Comprehensive Healthcare Services',
                icon: 'bi-clipboard2-pulse text-info',
                text:
                  'From preventative care and routine check-ups to advanced diagnostics and progressive treatments for critical illnesses, our experienced medical professionals are dedicated to delivering high-quality care.'
              },
              {
                title: 'Holistic Approach to Health',
                icon: 'bi-heart-pulse text-danger',
                text:
                  'We believe in addressing the complete health of our patients. Our holistic approach includes personalized care plans, wellness programs, and health education—tools that empower you to make informed decisions about your health and well-being.'
              },
              {
                title: 'Customer-Centric Philosophy',
                icon: 'bi-chat-dots',
                text:
                  'We value the trust you place in us. Our dedicated team prioritizes your needs, ensuring clear communication and support throughout your healthcare journey.'
              },
              {
                title: 'Join Us on Your Health Journey',
                icon: 'bi-flag',
                text:
                  'As your partner in health, RUWA India is here to navigate the complexities of healthcare and insurance with you. Together, we can achieve a healthier future.'
              }
            ].map((item, index) => (
              <div key={index} className="col-md-6 mb-4 d-flex">
                <div className="mission-statement p-4 rounded-4 d-flex gap-4 align-items-start h-100 w-100" data-aos="fade-up">
                  <div className="mission-icon text-center rounded-circle">
                    <i className={`bi ${item.icon} fs-4`}></i>
                  </div>
                  <div>
                    <h3 className="text-uppercase fw-bold">{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
<Featuers/>
          {/* Buttons Block */}
          <div className="text-center mt-5 p-4 bg-light rounded-4" data-aos="fade-up">
            <p className="mb-4 fs-5 fw-semibold">
              Join us at {process.env.REACT_APP_SITE_NAME }, where health meets convenience. Explore our services today and discover how we can support you on your path to optimal health and well-being. For more information, please visit our website or reach out to our friendly team.
            </p>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              {/* <a href="#join" className="btn btn-primary px-4 py-2">Join Us</a> */}
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
              {/* <a href="#contact" className="btn btn-outline-primary px-4 py-2">Contact Us</a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
