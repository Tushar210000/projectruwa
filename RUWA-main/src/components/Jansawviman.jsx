// import React from 'react';

// export default function Jansawviman
// () {
//   return (
//     <div className="container py-5" style={{ marginTop: '80px' }}>
//       <h2 className="mb-4">Apply for Jan Swabhiman Seva</h2>
//       <form>
//         <div className="mb-3">
//           <label className="form-label">Full Name</label>
//           <input type="text" className="form-control" required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Phone Number</label>
//           <input type="tel" className="form-control" required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Address</label>
//           <input type="text" className="form-control" />
//         </div>
//         <button type="submit" className="btn btn-info">Submit</button>
//       </form>
//     </div>
//   );
// }
import React, { useState } from 'react';

export default function Jansawviman() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const services = [
    {
      icon: '🆔',
      title: 'Welfare Eligibility Check',
      description: [
        'Available to low-income families and senior citizens.',
        'Priority for rural and semi-urban areas.',
        'Minimal documentation required.'
      ],
      bgClass: 'bg-white'
    },
    {
      icon: '🛡️',
      title: 'Social Security Coverage',
      description: [
        'Access to welfare pensions and medical aid.',
        'Education benefits for children.',
        'Subsidized services for women and elderly.'
      ],
      bgClass: 'bg-light'
    },
    {
      icon: '🧾',
      title: 'Easy Documentation',
      description: [
        'Aadhaar card, income certificate accepted.',
        'Simple one-page application process.',
        'Assistance centers for document upload.'
      ],
      bgClass: 'bg-white'
    },
    {
      icon: '🚑',
      title: 'Free Ambulance & Emergency Services',
      description: [
        '24/7 ambulance access in rural areas.',
        'Priority support during medical emergencies.',
        'Includes transport to partnered hospitals.'
      ],
      bgClass: 'bg-light'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section className="section services__v3 py-5" id="swabhiman">
       
      <div className="container">
        <div className="row g-4">
          <div className="col-12" data-aos="fade-up">
            <div className="service-card p-4 rounded-4 h-100 d-flex flex-column text-center gap-3 shadow-sm">
              <span className="subtitle text-uppercase mb-2 text-muted fs-6">
                Join Jan Swabhiman Seva
              </span>
            </div>
          </div>
 {/* <div className="container-fluid px-0">
      <img
        src="/assets/images/janarogaykendrasec.jpg"
        alt="Jan Swabhiman Seva Banner"
        className="img-fluid w-100"
        style={{ maxHeight: '400px', objectFit: 'cover' }}
      />
    </div> */}
          {services.map((service, index) => (
            <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay={index * 200} key={index}>
              <div className={`service-card p-4 rounded-4 h-100 d-flex flex-column gap-3 shadow-sm ${service.bgClass}`}>
                <div className="text-center fs-2">{service.icon}</div>
                <h3 className="text-center fs-5 mb-2">{service.title}</h3>
                <ul className="ps-3 mb-0">
                  {service.description.map((point, i) => (
                    <li key={i} className="mb-2" style={{ lineHeight: '1.6' }}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container py-5">
        <h2 className="mb-4 text-center">Apply for Swabhiman Seva</h2>

        {formSubmitted && (
          <div className="alert alert-success text-center fw-semibold" role="alert">
            ✅ Jan Swabhiman Card application submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your full name" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" placeholder="e.g. 9876543210" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Aadhaar Number</label>
              <input type="text" className="form-control" placeholder="XXXX-XXXX-XXXX" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Annual Family Income</label>
              <input type="number" className="form-control" placeholder="In INR" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Residential Area</label>
              <select className="form-select" required>
                <option value="">-- Select Area --</option>
                <option value="Urban">Urban</option>
                <option value="Rural">Rural</option>
                <option value="Semi-Urban">Semi-Urban</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Upload ID Proof</label>
              <input type="file" className="form-control" accept="image/*,application/pdf" required />
            </div>
            <div className="col-12">
              <label className="form-label">Additional Notes</label>
              <textarea className="form-control" rows="4" placeholder="Any specific request or condition..." />
            </div>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-info px-5 text-white">Apply for Seva</button>
          </div>
        </form>
      </div>
    </section>
  );
}
