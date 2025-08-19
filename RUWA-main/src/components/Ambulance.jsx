// import React from 'react';

// export default function Ambulance() {
// //   const services = [
// //   {
// //     icon: '<i class="bi bi-truck-front fs-1 text-info"></i>',
// //     title: '24x7 Ambulance Service',
// //     description: [
// //       'Emergency response: Quick and reliable ambulance dispatch anytime.',
// //       'GPS tracking: Real-time ambulance location updates.',
// //       'Certified staff: Trained paramedics for on-the-spot care.',
// //       'Coverage areas: Available across urban and rural zones.',
// //     ]
// //   },
// //   {
// //     icon: '<i class="bi bi-truck-front fs-1 text-info"></i>',
// //     title: 'Advanced Life Support Ambulance',
// //     description: [
// //       'Equipped with ICU-grade facilities.',
// //       'Oxygen support, defibrillator, and critical care monitoring.',
// //       'Ideal for critical or long-distance transfers.',
// //     ]
// //   },
// //   {
// //     icon: '<i class="bi bi-truck-front fs-1 text-info"></i>',
// //     title: 'Free Ambulance for Card Members',
// //     description: [
// //       'Zero cost for Lifeline Health Card holders.',
// //       'Covers up to 10km per ride within city limits.',
// //       'Priority dispatch in emergencies.',
// //     ]
// //   },
// //   {
// //     icon: '<i class="bi bi-truck-front fs-1 text-info"></i>',
// //     title: 'Intercity and Long-Distance Transfers',
// //     description: [
// //       'Ambulance services between cities at subsidized rates.',
// //       'Comfortable and safe patient transport over long distances.',
// //       'Assisted by trained support staff throughout the journey.',
// //     ]
// //   }
// // ];
// const services = [
//   {
//     icon: '🚑',
//     title: '24x7 Ambulance Service',
//     description: [
//       'Emergency response: Quick and reliable ambulance dispatch anytime.',
//       'GPS tracking: Real-time ambulance location updates.',
//       'Certified staff: Trained paramedics for on-the-spot care.',
//       'Coverage areas: Available across urban and rural zones.'
//     ],
//     bgClass: 'bg-white'
//   },
//   {
//     icon: '🧑‍⚕️',
//     title: 'Advanced Life Support Ambulance',
//     description: [
//       'Equipped with ICU-grade facilities.',
//       'Oxygen support, defibrillator, and critical care monitoring.',
//       'Ideal for critical or long-distance transfers.'
//     ],
//     bgClass: 'bg-light'
//   },
//   {
//     icon: '🪪',
//     title: 'Free Ambulance for Card Members',
//     description: [
//       'Zero cost for Lifeline Health Card holders.',
//       'Covers up to 10km per ride within city limits.',
//       'Priority dispatch in emergencies.'
//     ],
//     bgClass: 'bg-white'
//   },
//   {
//     icon: '🛣️',
//     title: 'Intercity & Long-Distance Transfers',
//     description: [
//       'Ambulance services between cities at subsidized rates.',
//       'Comfortable and safe patient transport over long distances.',
//       'Assisted by trained support staff throughout the journey.'
//     ],
//     bgClass: 'bg-light'
//   }
// ];

//   return (
//     <section className="section services__v3 py-5" id="services">
//       <div className="container">
//         <div className="row g-4">
//           {/* Intro Card */}
//           <div className="col-12" data-aos="fade-up">
//             <div className="service-card p-4 rounded-4 h-100 d-flex flex-column text-center gap-3 shadow-sm">
//               <span className="subtitle text-uppercase mb-2 text-muted fs-6">Apply for Jan Arogya Cards</span>

//             </div>
//           </div>
//  {services.map((service, index) => (
//             <div className="col-12" data-aos="fade-up" data-aos-delay={index * 200} key={index}>
//               <div className="service-card p-4 rounded-4 h-100 d-flex flex-column gap-3 shadow-sm">
//                 <div className="text-center  fs-2" dangerouslySetInnerHTML={{ __html: service.icon }} />
//                 <h3 className="text-center fs-5 mb-2">{service.title}</h3>
//                 <ul className="ps-3 mb-0">
//                   {service.description.map((point, i) => (
//                     <li key={i} className="mb-2" style={{ lineHeight: '1.6' }}>{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* <div className="container py-5" >

//         <form>
//           <div className="mb-3">
//             <label className="form-label">Full Name</label>
//             <input type="text" className="form-control" required />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Phone Number</label>
//             <input type="tel" className="form-control" required />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Hospital Preference</label>
//             <input type="text" className="form-control" />
//           </div>
//           <button type="submit" className="btn btn-success">Submit</button>
//         </form>
//       </div> */}
//       <div className="container py-5">
//   <h2 className="mb-4 text-center">Book an Appointment</h2>
//   <form>
//     <div className="row g-3">
//       <div className="col-md-6">
//         <label className="form-label">Full Name</label>
//         <input type="text" className="form-control" placeholder="Enter your full name" required />
//       </div>
//       <div className="col-md-6">
//         <label className="form-label">Phone Number</label>
//         <input type="tel" className="form-control" placeholder="e.g. 9876543210" required />
//       </div>
//       <div className="col-md-6">
//         <label className="form-label">Email</label>
//         <input type="email" className="form-control" placeholder="your@email.com" required />
//       </div>
//       <div className="col-md-6">
//         <label className="form-label">Hospital Preference</label>
//         <input type="text" className="form-control" placeholder="Preferred hospital" />
//       </div>
//       <div className="col-md-6">
//         <label className="form-label">Appointment Date</label>
//         <input type="date" className="form-control" required />
//       </div>
//       <div className="col-md-6">
//         <label className="form-label">Preferred Time</label>
//         <input type="time" className="form-control" required />
//       </div>
//       <div className="col-12">
//         <label className="form-label">Message / Health Concern</label>
//         <textarea className="form-control" rows="4" placeholder="Describe your issue..." />
//       </div>
//     </div>
//     <div className="text-center mt-4">
//       <button type="submit" className="btn btn-success px-5">Submit</button>
//     </div>
//   </form>
// </div>

//     </section>

//   );
// }
import React, { useState } from 'react';

// import { useState } from "react";
import axios from "axios";

export default function Ambulance() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    hospitalPreference: "",
    appointmentDate: "",
    preferredTime: "",
    message: ""
  });

  const services = [
    {
      icon: '🚑',
      title: '24x7 Ambulance Service',
      description: [
        'Emergency response: Quick and reliable ambulance dispatch anytime.',
        'GPS tracking: Real-time ambulance location updates.',
        'Certified staff: Trained paramedics for on-the-spot care.',
        'Coverage areas: Available across urban and rural zones.'
      ],
      bgClass: 'bg-white'
    },
    {
      icon: '🧑‍⚕️',
      title: 'Advanced Life Support Ambulance',
      description: [
        'Equipped with ICU-grade facilities.',
        'Oxygen support, defibrillator, and critical care monitoring.',
        'Ideal for critical or long-distance transfers.'
      ],
      bgClass: 'bg-light'
    },
    {
      icon: '🪪',
      title: 'Free Ambulance for Card Members',
      description: [
        'Zero cost for Lifeline Health Card holders.',
        'Covers up to 10km per ride within city limits.',
        'Priority dispatch in emergencies.'
      ],
      bgClass: 'bg-white'
    },
    {
      icon: '🛣️',
      title: 'Intercity & Long-Distance Transfers',
      description: [
        'Ambulance services between cities at subsidized rates.',
        'Comfortable and safe patient transport over long distances.',
        'Assisted by trained support staff throughout the journey.'
      ],
      bgClass: 'bg-light'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token"); // JWT token
      await axios.post(
        "http://localhost:8000/api/services/ambulance-booking/user/book",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFormSubmitted(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        hospitalPreference: "",
        appointmentDate: "",
        preferredTime: "",
        message: ""
      });

      setTimeout(() => {
        setFormSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("Booking failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to book ambulance");
    }
  };

  return (
    <section className="section services__v3 py-5" id="services">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 " data-aos="fade-up">
            <div className="service-card p-4 rounded-4 h-100 d-flex flex-column text-center gap-3 shadow-sm">
              <span className="subtitle text-uppercase mb-2 text-muted fs-6">
                Book your Ambulance 
              </span>
            </div>
          </div>

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
        <h2 className="mb-4 text-center">Book an Appointment</h2>

        {formSubmitted && (
          <div className="alert alert-success text-center fw-semibold" role="alert">
            ✅ Appointment booked successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Full Name</label>
              <input name="fullName" value={formData.fullName} onChange={handleChange} type="text" className="form-control" placeholder="Enter your full name" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className="form-control" placeholder="e.g. 9876543210" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input name="email" value={formData.email} onChange={handleChange} type="email" className="form-control" placeholder="your@email.com" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Hospital Preference</label>
              <input name="hospitalPreference" value={formData.hospitalPreference} onChange={handleChange} type="text" className="form-control" placeholder="Preferred hospital" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Appointment Date</label>
              <input name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} type="date" className="form-control" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Preferred Time</label>
              <input name="preferredTime" value={formData.preferredTime} onChange={handleChange} type="time" className="form-control" required />
            </div>
            <div className="col-12">
              <label className="form-label">Message / Health Concern</label>
              <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" rows="4" placeholder="Describe your issue..." />
            </div>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-success px-5">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
