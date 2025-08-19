// // // import React from "react";

// // // const jobOpenings = [
// // //   {
// // //     id: 1,
// // //     title: "Frontend Developer (React)",
// // //     location: "Remote / Noida",
// // //     type: "Full-Time",
// // //     description:
// // //       "We are looking for a skilled React developer with strong knowledge of JavaScript, HTML, CSS, and responsive UI/UX design.",
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Backend Developer (Node.js)",
// // //     location: "Remote / Bengaluru",
// // //     type: "Full-Time",
// // //     description:
// // //       "Join our backend team to work on scalable APIs, database architecture, and secure backend systems.",
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "Graphic Designer",
// // //     location: "On-Site / Delhi",
// // //     type: "Part-Time",
// // //     description:
// // //       "Looking for a creative designer with experience in Adobe Suite, Canva, and branding design.",
// // //   },
// // // ];

// // // export default function Career() {
// // //   return (
// // //     <div className="container py-5">
// // //       <div className="text-center mb-5">
// // //         <h1 className="fw-bold">🚀 Join Our Team</h1>
// // //         <p className="lead text-muted">We’re always looking for passionate, skilled individuals to grow with us.</p>
// // //       </div>

// // //       <div className="row g-4">
// // //         {jobOpenings.map((job) => (
// // //           <div className="col-md-6" key={job.id}>
// // //             <div className="card shadow-sm h-100">
// // //               <div className="card-body">
// // //                 <h5 className="card-title">{job.title}</h5>
// // //                 <h6 className="card-subtitle mb-2 text-muted">{job.location} | {job.type}</h6>
// // //                 <p className="card-text">{job.description}</p>
// // //                 <a href="/apply" className="btn btn-primary">Apply Now</a>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       <hr className="my-5" />

// // //       <div className="text-center">
// // //         <h2 className="fw-bold mb-3">Why Work With Us?</h2>
// // //         <p className="text-muted mb-4">
// // //           At RUWA India, we value innovation, creativity, and collaboration. Enjoy flexible work, growth opportunities, and a positive work culture.
// // //         </p>
// // //         <a href="/contact" className="btn btn-outline-secondary">Contact HR</a>
// // //       </div>
// // //     </div>
// // //   );
// // // }







// // by api 
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // export default function Career() {
// //   const [jobs, setJobs] = useState([]);
// //   const [selectedCategory, setSelectedCategory] = useState('All');

// //   const fetchJobs = async (category = 'All') => {
// //     try {
// //       const res = await axios.get(`http://192.168.1.6:5000/api/jobs?category=${category}`);
// //       setJobs(res.data);
// //     } catch (err) {
// //       console.error("Failed to fetch jobs", err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchJobs(selectedCategory);
// //   }, [selectedCategory]);

// //   const categories = ['All', 'Technology', 'Marketing', 'Operations', 'Support'];

// //   return (
// //     <div className="container-fluid">
// //       <div className="row">
// //         {/* Side Nav */}
// //         <div className="col-md-3 p-3 border-end">
// //           <h4>Job Categories</h4>
// //           <ul className="list-group">
// //             {categories.map(cat => (
// //               <li
// //                 key={cat}
// //                 className={`list-group-item ${selectedCategory === cat ? 'active' : ''}`}
// //                 onClick={() => setSelectedCategory(cat)}
// //                 style={{ cursor: 'pointer' }}
// //               >
// //                 {cat}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Job Listings */}
// //         <div className="col-md-9 p-4">
// //           <h3>{selectedCategory} Openings</h3>
// //           {jobs.length > 0 ? (
// //             jobs.map((job) => (
// //               <div key={job._id} className="card mb-3 shadow-sm">
// //                 <div className="card-body">
// //                   <h5 className="card-title">{job.title}</h5>
// //                   <p className="card-text"><strong>Location:</strong> {job.location}</p>
// //                   <p className="card-text"><strong>Description:</strong> {job.description}</p>
// //                   <p className="card-text"><strong>Requirements:</strong> {job.requirements}</p>
// //                   <button className="btn btn-primary">Apply</button>
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <p>No openings in this category.</p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }





// import React, { useState } from 'react';
// // import './Career.css'; // optional for custom styles

// const Career = () => {
//   const [selected, setSelected] = useState('jobs');

//   const jobData = [
//     {
//       title: 'Frontend Developer',
//       location: 'Remote',
//       skills: 'React, Bootstrap, API Integration',
//     },
//     {
//       title: 'Backend Developer',
//       location: 'Noida (On-site)',
//       skills: 'Node.js, MongoDB, REST APIs',
//     },
//     {
//       title: 'UI/UX Designer',
//       location: 'Remote',
//       skills: 'Figma, Adobe XD, Responsive Design',
//     },
//     {
//       title: 'Marketing Executive',
//       location: 'Delhi (On-site)',
//       skills: 'SEO, Google Ads, Social Media Campaigns',
//     },
//     {
//       title: 'Customer Support Associate',
//       location: 'Remote',
//       skills: 'Email & Chat Support, CRM Tools, Fluent English',
//     },
//   ];

//   const content = {
//     jobs: (
//       <>
//         <h3 className="mb-4">🚀 Current Openings</h3>
//         <div className="row g-4">
//           {jobData.map((job, idx) => (
//             <div key={idx} className="col-md-6">
//               <div className="card h-100 shadow-sm">
//                 <div className="card-body">
//                   <h5 className="card-title">{job.title}</h5>
//                   <h6 className="card-subtitle mb-2 text-muted">{job.location}</h6>
//                   <p className="card-text">
//                     <strong>Skills Required:</strong> {job.skills}
//                   </p>
//                   <button className="btn btn-primary w-100">Apply Now</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </>
//     ),
//     life: (
//       <>
//         <h3 className="mb-3">💼 Life at RUWA</h3>
//         <p>
//           At RUWA, we blend professionalism with creativity. Flexible timings, open communication,
//           and a fun work environment make every day exciting.
//         </p>
//         <ul>
//           <li>Flexible hours</li>
//           <li>Monthly team outings</li>
//           <li>Work from home options</li>
//         </ul>
//       </>
//     ),
//     culture: (
//       <>
//         <h3 className="mb-3">🎯 Our Culture</h3>
//         <p>
//           We believe in innovation, inclusion, and integrity. We encourage ownership and reward initiative.
//           Your voice matters here.
//         </p>
//         <p>We hire for attitude and train for skill.</p>
//       </>
//     ),
//     locations: (
//       <>
//         <h3 className="mb-3">📍 Office Locations</h3>
//         <ul>
//           <li>🏢 Head Office – Noida, Uttar Pradesh</li>
//           <li>💻 Development – Bengaluru, Karnataka</li>
//           <li>🎨 Design Studio – Delhi</li>
//           <li>📞 Remote Teams – PAN India</li>
//         </ul>
//       </>
//     ),
//     apply: (
//       <>
//         <h3 className="mb-3">🧾 How to Apply</h3>
//         <p>
//           Send your updated resume to <strong>hr@ruwaindia.com</strong> with your portfolio or LinkedIn link.
//           <br />
//           We’ll reach out if there’s a match.
//         </p>
//         <p>✨ Pro tip: Include a short cover letter highlighting your motivation!</p>
//       </>
//     ),
//   };

//   return (
//     <div className="container-fluid py-5">
//       <div className="row">
//         {/* Sidebar */}
//         <div className="col-md-3 mb-4 mb-md-0 border-end">
//           <div className="list-group sticky-top">
//             {Object.keys(content).map((key) => (
//               <button
//                 key={key}
//                 className={`list-group-item list-group-item-action ${selected === key ? 'active' : ''}`}
//                 onClick={() => setSelected(key)}
//               >
//                 {key === 'jobs' && 'Job Openings'}
//                 {key === 'life' && 'Life at RUWA'}
//                 {key === 'culture' && 'Company Culture'}
//                 {key === 'locations' && 'Office Locations'}
//                 {key === 'apply' && 'How to Apply'}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Content */}
//         <div className="col-md-9">
//           <div className="p-4 bg-light rounded shadow-sm">{content[selected]}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Career;
import React, { useState } from 'react';
import { FaArrowRight, FaPaperPlane } from 'react-icons/fa';
import Orgstructer from '../components/Orgstructer'

const Career = () => {
  const [selected, setSelected] = useState('jobs');
  const [showModal, setShowModal] = useState(false);
  const [activeJob, setActiveJob] = useState(null);

  const jobData = [
    {
      title: 'Frontend Developer',
      location: 'Remote',
      skills: 'React, Bootstrap, API Integration',
      description:
        'We’re looking for a skilled Frontend Developer to create amazing user experiences. You should be proficient in React, understand UI/UX principles, and be comfortable with API integration.',
    },
    {
      title: 'Backend Developer',
      location: 'Remote',
      skills: 'Node.js, MongoDB, REST APIs',
      description:
        'Build robust backend services using Node.js. Knowledge of database design, authentication, and deployment required.',
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote',
      skills: 'Figma, Adobe XD, HTML/CSS',
      description:
        'Craft beautiful user interfaces and delightful experiences. Translate ideas into prototypes and work with developers to implement designs.',
    },
    {
      title: 'Digital Marketing Manager',
      location: 'Remote',
      skills: 'SEO, PPC, Google Analytics',
      description:
        'Drive traffic, optimize conversions, and manage campaigns. Experience with Google tools and paid channels is required.',
    },
    {
      title: 'HR Executive',
      location: 'Remote',
      skills: 'Recruitment, Payroll, Policies',
      description:
        'Manage end-to-end hiring, onboarding, and employee welfare. Maintain HR compliance and payroll processes.',
    },
  ];

  const handleCardClick = (job) => {
    setActiveJob(job);
    setShowModal(true);
  };

  const content = {
    jobs: (
      <>
        <h3 className="mb-4">🚀 Current Openings</h3>
        <div className="row">
          {jobData.map((job, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div
                className="card shadow-sm h-100 border-0 cursor-pointer"
                style={{ cursor: 'pointer' }}
                onClick={() => handleCardClick(job)}
              >
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{job.title}</h5>
                    <p className="text-muted mb-1">
                      <strong>Location:</strong> {job.location}
                    </p>
                    <p className="text-muted">
                      <strong>Skills:</strong> {job.skills}
                    </p>
                  </div>
                  <button className="btn btn-outline-primary mt-auto w-100">
                    View Details <FaArrowRight className="ms-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
    life: (
      <>
        <h3 className="mb-3">💼 Life at RUWA</h3>
        <p>
          At RUWA, we blend professionalism with creativity. Flexible timings, open communication, and a fun work environment make every day exciting.
        </p>
      </>
    ),
    culture: (
      <>
        <h3 className="mb-3">🎯 Our Culture</h3>
        <p>
          We believe in innovation, inclusion, and integrity. We encourage ownership and reward initiative. Your voice matters here.
        </p>
      </>
    ),
    locations: (
      <>
        <h3 className="mb-3">📍 Office Locations</h3>
        <ul>
          <li>Head Office – Nashik, Maharashtra</li>
          <li>Development – Nashik, Maharashtra</li>
          <li>Design Studio – Nashik, Maharashtra</li>
        </ul>
      </>
    ),
    loca: (
      <>
        <Orgstructer/>
      </>
    ),
    apply: (
      <>
        <h3 className="mb-3">🧾 How to Apply</h3>
        <p>
          Send your updated resume to <strong>hrd@ruwaindia.com</strong> with your portfolio or LinkedIn link.
        </p>
        <a className="btn btn-success mt-3" href="mailto:hdr@ruwaindia.com">
          <FaArrowRight className="me-2" /> Apply Now
        </a>
      </>
    ),
  };

  return (
    <div className="container-fluid py-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 mb-4 mb-md-0">
          <div className="list-group shadow-sm">
            <button className={`list-group-item list-group-item-action ${selected === 'jobs' ? 'active' : ''}`} onClick={() => setSelected('jobs')}>
              Job Openings
            </button>
            <button className={`list-group-item list-group-item-action ${selected === 'life' ? 'active' : ''}`} onClick={() => setSelected('life')}>
              Life at RUWA
            </button>
            <button className={`list-group-item list-group-item-action ${selected === 'culture' ? 'active' : ''}`} onClick={() => setSelected('culture')}>
              Company Culture
            </button>
            <button className={`list-group-item list-group-item-action ${selected === 'locations' ? 'active' : ''}`} onClick={() => setSelected('locations')}>
              Office Locations
            </button>
            <button className={`list-group-item list-group-item-action ${selected === 'loca' ? 'active' : ''}`} onClick={() => setSelected('loca')}>
             Our Structure
            </button>
            <button className={`list-group-item list-group-item-action ${selected === 'apply' ? 'active' : ''}`} onClick={() => setSelected('apply')}>
              How to Apply
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="col-md-9">
          <div className="p-4 bg-white rounded shadow-sm">{content[selected]}</div>
        </div>
      </div>

      {/* Modal */}
      {activeJob && (
        <div
          className={`modal fade ${showModal ? 'show d-block' : ''}`}
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setShowModal(false)}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{activeJob.title}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p><strong>Location:</strong> {activeJob.location}</p>
                <p><strong>Required Skills:</strong> {activeJob.skills}</p>
                <p><strong>Description:</strong> {activeJob.description}</p>
              </div>
              <div className="modal-footer">
                <a
                  href="mailto:hr@ruwaindia.com?subject=Job Application: [Your Role]"
                  className="btn btn-primary"
                >
                  <FaPaperPlane className="me-2" />
                  Apply Now
                </a>
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
