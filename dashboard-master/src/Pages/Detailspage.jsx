// // // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Detailspage = () => {
// //   const navigate = useNavigate();
// //   const [profile, setProfile] = useState(null);

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         const res = await axios.get('http://192.168.1.6:5000/api/admin/profile');
// //         setProfile(res.data);
// //       } catch (error) {
// //         console.error('Error fetching profile:', error);
// //       }
// //     };

// //     fetchProfile();
// //   }, []);

// //   if (!profile) {
// //     return <div className="p-4">Loading...</div>;
// //   }

// //   return (
// //     <div className="d-flex vh-100 bg-light">
// //       <div className="flex-grow-1 p-4 overflow-auto">
// //         {/* Top Bar */}
// //         <div className="d-flex justify-content-between align-items-center mb-4">
// //           <div className="p-2 gap-2">
// //             <img src="https://i.pravatar.cc/40" alt="Avatar" className="rounded-circle" />
// //             <span className="fw-semibold">{profile.full_name}</span>
// //           </div>
// //           <div className="d-flex justify-content-between align-items-center gap-2">
// //             <button className="btn btn-sm btn-outline-danger" onClick={() => navigate('/profile')}>
// //               Edit
// //             </button>
// //           </div>
// //         </div>

// //         {/* Profile + Address */}
// //         <div className="row g-3 mb-3">
// //           <div className="col-md-6">
// //             <div className="card p-3">
// //               <div className="d-flex justify-content-between align-items-start">
// //                 <div>
// //                   <img src="https://i.pravatar.cc/60" className="rounded-circle mb-2" alt="profile" />
// //                   <h6 className="fw-bold mb-0">{profile.full_name}</h6>
// //                   <small className="text-muted">{profile.phone}</small>
// //                 </div>
// //                 <small>Joined {profile.created_at ? profile.created_at.slice(0, 10) : 'N/A'}</small>
// //               </div>
// //               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
// //             </div>
// //           </div>

// //           <div className="col-md-6">
// //             <div className="card p-3">
// //               <h6 className="fw-bold mb-2">Address <span className="badge bg-primary ms-2">Primary</span></h6>
// //               <p className="mb-1">{profile.address}</p>
// //               <p className="mb-0">{profile.secondary_address || ''}</p>
// //               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Emails + Phone */}
// //         <div className="row g-3 mb-3">
// //           <div className="col-md-6">
// //             <div className="card p-3">
// //               <h6 className="fw-bold mb-2">Emails</h6>
// //               <span className="badge bg-secondary me-2">Primary</span> {profile.email}
// //               <div className="d-flex gap-2 mt-3">
// //                 <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="col-md-6">
// //             <div className="card p-3">
// //               <h6 className="fw-bold mb-2">Phone Number</h6>
// //               <span className="badge bg-secondary me-2">Primary</span> {profile.phone}
// //               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Account Options */}
// //         <div className="card p-3">
// //           <h6 className="fw-bold mb-3">Account Options</h6>
// //           <div className="row">
// //             <div className="col-md-4">
// //               <p className="mb-1"><strong>Language</strong></p>
// //               <p className="text-muted">{profile.language}</p>
// //             </div>
// //             <div className="col-md-4">
// //               <p className="mb-1"><strong>Time Zone</strong></p>
// //               <p className="text-muted">{profile.time_zone}</p>
// //             </div>
// //             <div className="col-md-4">
// //               <p className="mb-1"><strong>Nationality</strong></p>
// //               <p className="text-muted">{profile.nationality}</p>
// //             </div>
// //             <div className="col-md-4">
// //               <p className="mb-1"><strong>Merchant ID</strong></p>
// //               <p className="text-muted">{profile.merchant_id}</p>
// //             </div>
// //             <div className="col-md-4">
// //               <p className="mb-1 text-danger"><strong>Close your account</strong></p>
// //             </div>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Detailspage;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Detailspage = () => {
//   const navigate = useNavigate();
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const res = await axios.get('http://192.168.1.6:5000/api/admin/profile', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setProfile(res.data);
//       } catch (error) {
//         console.error('Error fetching profile:', error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (!profile) {
//     return <div className="p-4">Loading...</div>;
//   }

//   return (
//     <div className="d-flex vh-100 bg-light">
//       <div className="flex-grow-1 p-4 overflow-auto">
//         {/* Top Bar */}
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <div className="p-2 gap-2">
//             <img src="https://i.pravatar.cc/40" alt="Avatar" className="rounded-circle" />
//             <span className="fw-semibold">{profile.full_name}</span>
//           </div>
//           <div className="d-flex justify-content-between align-items-center gap-2">
//             <button className="btn btn-sm btn-outline-danger" onClick={() => navigate('/profile')}>
//               Edit
//             </button>
//           </div>
//         </div>

//         {/* Profile + Address */}
//         <div className="row g-3 mb-3">
//           <div className="col-md-6">
//             <div className="card p-3">
//               <div className="d-flex justify-content-between align-items-start">
//                 <div>
//                   <img src="https://i.pravatar.cc/60" className="rounded-circle mb-2" alt="profile" />
//                   <h6 className="fw-bold mb-0">{profile.full_name}</h6>
//                   <small className="text-muted">{profile.phone}</small>
//                 </div>
//                 <small>Joined {profile.created_at ? profile.created_at.slice(0, 10) : 'N/A'}</small>
//               </div>
//               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Address <span className="badge bg-primary ms-2">Primary</span></h6>
//               <p className="mb-1">{profile.address}</p>
//               <p className="mb-0">{profile.secondary_address || ''}</p>
//               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//             </div>
//           </div>
//         </div>

//         {/* Emails + Phone */}
//         <div className="row g-3 mb-3">
//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Emails</h6>
//               <span className="badge bg-secondary me-2">Primary</span> {profile.email}
//               <div className="d-flex gap-2 mt-3">
//                 <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Phone Number</h6>
//               <span className="badge bg-secondary me-2">Primary</span> {profile.phone}
//               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//             </div>
//           </div>
//         </div>

//         {/* Account Options */}
//         <div className="card p-3">
//           <h6 className="fw-bold mb-3">Account Options</h6>
//           <div className="row">
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Language</strong></p>
//               <p className="text-muted">{profile.language}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Time Zone</strong></p>
//               <p className="text-muted">{profile.time_zone}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Nationality</strong></p>
//               <p className="text-muted">{profile.nationality}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Merchant ID</strong></p>
//               <p className="text-muted">{profile.merchant_id}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1 text-danger"><strong>Close your account</strong></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default Detailspage;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Detailspage = () => {
//   const navigate = useNavigate();
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem('token');

//         if (!token) {
//           console.warn('No token found. Redirecting to login...');
//           navigate('/login');
//           return;
//         }

//         const res = await axios.get('http://192.168.1.6:5000/api/admin/profile', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setProfile(res.data);
//       } catch (error) {
//         console.error('Error fetching profile:', error);
//         if (error.response && error.response.status === 401) {
//           alert('Session expired or unauthorized. Please login again.');
//           navigate('/login');
//         }
//       }
//     };

//     fetchProfile();
//   }, [navigate]);

//   if (!profile) {
//     return <div className="p-4">Loading...</div>;
//   }

//   return (
//     <div className="d-flex vh-100 bg-light">
//       <div className="flex-grow-1 p-4 overflow-auto">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <div className="p-2 gap-2">
//             <img src="https://i.pravatar.cc/40" alt="Avatar" className="rounded-circle" />
//             <span className="fw-semibold">{profile.full_name}</span>
//           </div>
//           <div className="d-flex justify-content-between align-items-center gap-2">
//             <button className="btn btn-sm btn-outline-danger" onClick={() => navigate('/profile')}>
//               Edit
//             </button>
//           </div>
//         </div>

//         {/* Profile + Address */}
//         <div className="row g-3 mb-3">
//           <div className="col-md-6">
//             <div className="card p-3">
//               <div className="d-flex justify-content-between align-items-start">
//                 <div>
//                   <img src="https://i.pravatar.cc/60" className="rounded-circle mb-2" alt="profile" />
//                   <h6 className="fw-bold mb-0">{profile.full_name}</h6>
//                   <small className="text-muted">{profile.phone}</small>
//                 </div>
//                 <small>Joined {profile.created_at ? profile.created_at.slice(0, 10) : 'N/A'}</small>
//               </div>
//               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Address <span className="badge bg-primary ms-2">Primary</span></h6>
//               <p className="mb-1">{profile.address}</p>
//               <p className="mb-0">{profile.secondary_address || ''}</p>
//               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//             </div>
//           </div>
//         </div>

//         {/* Emails + Phone */}
//         <div className="row g-3 mb-3">
//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Emails</h6>
//               <span className="badge bg-secondary me-2">Primary</span> {profile.email}
//               <div className="d-flex gap-2 mt-3">
//                 <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Phone Number</h6>
//               <span className="badge bg-secondary me-2">Primary</span> {profile.phone}
//               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//             </div>
//           </div>
//         </div>

//         {/* Account Options */}
//         <div className="card p-3">
//           <h6 className="fw-bold mb-3">Account Options</h6>
//           <div className="row">
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Language</strong></p>
//               <p className="text-muted">{profile.language}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Time Zone</strong></p>
//               <p className="text-muted">{profile.time_zone}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Nationality</strong></p>
//               <p className="text-muted">{profile.nationality}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Merchant ID</strong></p>
//               <p className="text-muted">{profile.merchant_id}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1 text-danger"><strong>Close your account</strong></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Detailspage;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Detailspage = () => {
//   const navigate = useNavigate();
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         console.log("🔐 Token from localStorage:", token); // ✅ Debug

//         if (!token) {
//           alert('No token found. Please login.');
//           navigate('/login');
//           return;
//         }

//         const res = await axios.get('http://192.168.1.6:5000/api/admin/profile', {
//           headers: {
//             Authorization: `Bearer ${token}`, // ✅ Must be exact
//           },
//         });

//         console.log("✅ Profile fetched:", res.data);
//         setProfile(res.data);
//       } catch (error) {
//         console.error('❌ Error fetching profile:', error);

//         if (error.response?.status === 401) {
//           alert('Session expired or unauthorized. Please login again.');
//           localStorage.removeItem('token'); // ⛔ Clear bad token
//           navigate('/login');
//         }
//       }
//     };

//     fetchProfile();
//   }, [navigate]);

//   if (!profile) {
//     return <div className="p-4">Loading...</div>;
//   }

//   return (
//     <div className="d-flex vh-100 bg-light">
//       <div className="flex-grow-1 p-4 overflow-auto">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <div className="p-2 gap-2">
//             <img src="https://i.pravatar.cc/40" alt="Avatar" className="rounded-circle" />
//             <span className="fw-semibold">{profile.full_name}</span>
//           </div>
//           <button className="btn btn-sm btn-outline-danger" onClick={() => navigate('/profile')}>
//             Edit
//           </button>
//         </div>

//         {/* Profile + Address */}
//         <div className="row g-3 mb-3">
//           <div className="col-md-6">
//             <div className="card p-3">
//               <div className="d-flex justify-content-between align-items-start">
//                 <div>
//                   <img src="https://i.pravatar.cc/60" className="rounded-circle mb-2" alt="profile" />
//                   <h6 className="fw-bold mb-0">{profile.full_name}</h6>
//                   <small className="text-muted">{profile.phone}</small>
//                 </div>
//                 <small>Joined {profile.created_at?.slice(0, 10) || 'N/A'}</small>
//               </div>
//               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Address <span className="badge bg-primary ms-2">Primary</span></h6>
//               <p className="mb-1">{profile.address}</p>
//               <p className="mb-0">{profile.secondary_address || ''}</p>
//               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//             </div>
//           </div>
//         </div>

//         {/* Emails + Phone */}
//         <div className="row g-3 mb-3">
//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Emails</h6>
//               <span className="badge bg-secondary me-2">Primary</span> {profile.email}
//               <div className="d-flex gap-2 mt-3">
//                 <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Phone Number</h6>
//               <span className="badge bg-secondary me-2">Primary</span> {profile.phone}
//               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//             </div>
//           </div>
//         </div>

//         {/* Account Options */}
//         <div className="card p-3">
//           <h6 className="fw-bold mb-3">Account Options</h6>
//           <div className="row">
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Language</strong></p>
//               <p className="text-muted">{profile.language}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Time Zone</strong></p>
//               <p className="text-muted">{profile.time_zone}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Nationality</strong></p>
//               <p className="text-muted">{profile.nationality}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Merchant ID</strong></p>
//               <p className="text-muted">{profile.merchant_id}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1 text-danger"><strong>Close your account</strong></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Detailspage;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Detailspage = () => {
//   const navigate = useNavigate();
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         console.log("🔐 Token from localStorage:", token);

//         if (!token) {
//           alert('No token found. Please login.');
//           navigate('/login');
//           return;
//         }

//         const res = await axios.get('http://192.168.1.6:5000/api/admin/profile', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         console.log("✅ Profile fetched:", res.data);
//         setProfile(res.data);
//       } catch (error) {
//         console.error('❌ Error fetching profile:', error);

//         if (error.response?.status === 401) {
//           alert('Session expired or unauthorized. Please login again.');
//           localStorage.removeItem('token');
//           navigate('/login');
//         }
//       }
//     };

//     fetchProfile();
//   }, [navigate]);

//   if (!profile) {
//     return <div className="p-4">Loading profile...</div>;
//   }

//   return (
//     <div className="d-flex vh-100 bg-light">
//       <div className="flex-grow-1 p-4 overflow-auto">
//         {/* Header */}
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <div className="p-2 gap-2">
//             <img src="https://i.pravatar.cc/40" alt="Avatar" className="rounded-circle" />
//             <span className="fw-semibold">{profile.full_name || 'N/A'}</span>
//           </div>
//           <button className="btn btn-sm btn-outline-danger" onClick={() => navigate('/profile')}>
//             Edit
//           </button>
//         </div>

//         {/* Profile + Address */}
//         <div className="row g-3 mb-3">
//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Personal Info</h6>
//               <p><strong>Name:</strong> {profile.full_name || 'N/A'}</p>
//               <p><strong>Phone:</strong> {profile.phone || 'N/A'}</p>
//               <p><strong>Email:</strong> {profile.email || 'N/A'}</p>
//               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Address</h6>
//               <p>{profile.address || 'No address provided'}</p>
//               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//             </div>
//           </div>
//         </div>

//         {/* Account Options */}
//         <div className="card p-3 mb-3">
//           <h6 className="fw-bold mb-3">Account Preferences</h6>
//           <div className="row">
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Language</strong></p>
//               <p className="text-muted">{profile.language || 'N/A'}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Time Zone</strong></p>
//               <p className="text-muted">{profile.time_zone || 'N/A'}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Nationality</strong></p>
//               <p className="text-muted">{profile.nationality || 'N/A'}</p>
//             </div>
//             <div className="col-md-4 mt-3">
//               <p className="mb-1"><strong>Merchant ID</strong></p>
//               <p className="text-muted">{profile.merchant_id || 'N/A'}</p>
//             </div>
//             <div className="col-md-4 mt-3">
//               <p className="mb-1 text-danger"><strong>Close your account</strong></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Detailspage;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Detailspage = () => {
//   const navigate = useNavigate();
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem('adminToken'); // ✅ Fixed token key
//         console.log("🔐 Token from localStorage:", token);

//         if (!token) {
//           alert('No token found. Please login.');
//           navigate('/login');
//           return;
//         }

//         const res = await axios.get('http://192.168.1.6:5000/api/admin/profile', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         console.log("✅ Profile fetched:", res.data);
//         setProfile(res.data);
//       } catch (error) {
//         console.error('❌ Error fetching profile:', error);
//         if (error.response?.status === 401) {
//           alert('Session expired or unauthorized. Please login again.');
//           localStorage.removeItem('adminToken');
//           navigate('/login');
//         }
//       }
//     };

//     fetchProfile();
//   }, [navigate]);

//   if (!profile) {
//     return <div className="p-4">Loading...</div>;
//   }

//   return (
//     <div className="d-flex vh-100 bg-light">
//       <div className="flex-grow-1 p-4 overflow-auto">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <div className="p-2 gap-2 d-flex align-items-center">
//             <img src={profile.profile_pic || "https://i.pravatar.cc/40"} alt="Avatar" className="rounded-circle" />
//             <span className="fw-semibold">{profile.full_name}</span>
//           </div>
//           <button className="btn btn-sm btn-outline-danger" onClick={() => navigate('/profile')}>
//             Edit
//           </button>
//         </div>

//         {/* Profile + Address */}
//         <div className="row g-3 mb-3">
//           <div className="col-md-6">
//             <div className="card p-3">
//               <div className="d-flex justify-content-between align-items-start">
//                 <div>
//                   <img src={profile.profile_pic || "https://i.pravatar.cc/60"} className="rounded-circle mb-2" alt="profile" />
//                   <h6 className="fw-bold mb-0">{profile.full_name}</h6>
//                   <small className="text-muted">{profile.phone}</small>
//                 </div>
//                 <small>ID: {profile.adminId || 'N/A'}</small>
//               </div>
//               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Address <span className="badge bg-primary ms-2">Primary</span></h6>
//               <p className="mb-1">{profile.address || 'N/A'}</p>
//               <p className="mb-0">{profile.secondary_address || ''}</p>
//               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//             </div>
//           </div>
//         </div>

//         {/* Emails + Phone */}
//         <div className="row g-3 mb-3">
//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Emails</h6>
//               <span className="badge bg-secondary me-2">Primary</span> {profile.email}
//               <div className="d-flex gap-2 mt-3">
//                 <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Phone Number</h6>
//               <span className="badge bg-secondary me-2">Primary</span> {profile.phone}
//               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//             </div>
//           </div>
//         </div>

//         {/* Account Options */}
//         <div className="card p-3">
//           <h6 className="fw-bold mb-3">Account Options</h6>
//           <div className="row">
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Language</strong></p>
//               <p className="text-muted">{profile.language || 'N/A'}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Time Zone</strong></p>
//               <p className="text-muted">{profile.time_zone || 'N/A'}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Nationality</strong></p>
//               <p className="text-muted">{profile.nationality || 'N/A'}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Merchant ID</strong></p>
//               <p className="text-muted">{profile.merchant_id || 'N/A'}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1 text-danger"><strong>Close your account</strong></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Detailspage;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Detailspage = () => {
//   const navigate = useNavigate();
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         alert('No token found. Redirecting to login.');
//         navigate('/login');
//         return;
//       }

//       try {
//         const res = await axios.get('http://192.168.1.6:5000/api/admin/profile', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = res.data.profile || res.data; // fallback if response is nested
//         setProfile(data);
//         console.log('✅ Profile:', data);
//       } catch (error) {
//         console.error('❌ Error fetching profile:', error);
//         localStorage.removeItem('token');
//         navigate('/login');
//       }
//     };

//     fetchProfile();
//   }, [navigate]);

//   if (!profile) return <div className="p-4">Loading...</div>;

//   return (
//     <div className="d-flex vh-100 bg-light">
//       <div className="flex-grow-1 p-4 overflow-auto">
//         {/* Top Bar */}
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <div className="p-2 d-flex align-items-center gap-2">
//             <img
//               src={profile.profile_pic || "https://i.pravatar.cc/40"}
//               alt="Avatar"
//               className="rounded-circle"
//               width="40"
//               height="40"
//             />
//             <span className="fw-semibold">{profile.full_name || 'N/A'}</span>
//           </div>
//           <button className="btn btn-sm btn-outline-danger" onClick={() => navigate('/profile')}>
//             Edit
//           </button>
//         </div>

//         {/* Profile Details */}
//         <div className="row g-3 mb-3">
//           <div className="col-md-6">
//             <div className="card p-3">
//               <div className="d-flex justify-content-between align-items-start">
//                 <div>
//                   <img
//                     src={profile.profile_pic || "https://i.pravatar.cc/60"}
//                     alt="Profile"
//                     className="rounded-circle mb-2"
//                     width="60"
//                     height="60"
//                   />
//                   <h6 className="fw-bold mb-0">{profile.full_name || 'N/A'}</h6>
//                   <small className="text-muted">{profile.phone || 'N/A'}</small>
//                 </div>
//                 <small>ID: {profile.adminId || 'N/A'}</small>
//               </div>
//               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">
//                 Address <span className="badge bg-primary ms-2">Primary</span>
//               </h6>
//               <p className="mb-1">{profile.address || 'N/A'}</p>
//               <p className="mb-0">{profile.secondary_address || ''}</p>
//               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//             </div>
//           </div>
//         </div>

//         {/* Email & Phone */}
//         <div className="row g-3 mb-3">
//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Email</h6>
//               <span className="badge bg-secondary me-2">Primary</span> {profile.email || 'N/A'}
//               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Phone Number</h6>
//               <span className="badge bg-secondary me-2">Primary</span> {profile.phone || 'N/A'}
//               <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
//             </div>
//           </div>
//         </div>

//         {/* Account Options */}
//         <div className="card p-3">
//           <h6 className="fw-bold mb-3">Account Options</h6>
//           <div className="row">
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Language</strong></p>
//               <p className="text-muted">{profile.language || 'N/A'}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Time Zone</strong></p>
//               <p className="text-muted">{profile.time_zone || 'N/A'}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Nationality</strong></p>
//               <p className="text-muted">{profile.nationality || 'N/A'}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Merchant ID</strong></p>
//               <p className="text-muted">{profile.merchant_id || 'N/A'}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1 text-danger"><strong>Close your account</strong></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Detailspage;

import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Detailspage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ⬅️ added to track route changes
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('No token found. Redirecting to login.');
        navigate('/login');
        return;
      }

      try {
        const res = await axios.get('http://192.168.1.6:5000/api/admin/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = res.data.profile || res.data;
        setProfile(data);
        console.log('✅ Profile:', data);
      } catch (error) {
        console.error('❌ Error fetching profile:', error);
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    fetchProfile();
  }, [navigate, location]); // ⬅️ triggers useEffect on route change

  if (!profile) return <div className="p-4">Loading...</div>;

  return (
    <div className="d-flex vh-100 bg-light">
      <div className="flex-grow-1 p-4 overflow-auto">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="p-2 d-flex align-items-center gap-2">
            <img
              src={profile.profile_pic || "https://i.pravatar.cc/40"}
              alt="Avatar"
              className="rounded-circle"
              width="40"
              height="40"
            />
            <span className="fw-semibold">{profile.full_name || 'N/A'}</span>
          </div>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => navigate('/profile', { state: { profile } })}
          >
            Edit
          </button>
        </div>

        {/* Profile Details Layout (unchanged) */}
        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <div className="card p-3">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <img
                    src={profile.profile_pic || "https://i.pravatar.cc/60"}
                    alt="Profile"
                    className="rounded-circle mb-2"
                    width="60"
                    height="60"
                  />
                  <h6 className="fw-bold mb-0">{profile.full_name || 'N/A'}</h6>
                  <small className="text-muted">{profile.phone || 'N/A'}</small>
                </div>
                <small>ID: {profile.adminId || 'N/A'}</small>
              </div>
              <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-3">
              <h6 className="fw-bold mb-2">
                Address <span className="badge bg-primary ms-2">Primary</span>
              </h6>
              <p className="mb-1">{profile.address || 'N/A'}</p>
              <p className="mb-0">{profile.secondary_address || ''}</p>
              <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
            </div>
          </div>
        </div>

        {/* Email & Phone */}
        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <div className="card p-3">
              <h6 className="fw-bold mb-2">Email</h6>
              <span className="badge bg-secondary me-2">Primary</span> {profile.email || 'N/A'}
              <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-3">
              <h6 className="fw-bold mb-2">Phone Number</h6>
              <span className="badge bg-secondary me-2">Primary</span> {profile.phone || 'N/A'}
              <button className="btn btn-sm btn-outline-secondary mt-3 ms-auto">Edit</button>
            </div>
          </div>
        </div>

        {/* Account Options */}
        <div className="card p-3">
          <h6 className="fw-bold mb-3">Account Options</h6>
          <div className="row">
            <div className="col-md-4">
              <p className="mb-1"><strong>Language</strong></p>
              <p className="text-muted">{profile.language || 'N/A'}</p>
            </div>
            <div className="col-md-4">
              <p className="mb-1"><strong>Time Zone</strong></p>
              <p className="text-muted">{profile.time_zone || 'N/A'}</p>
            </div>
            <div className="col-md-4">
              <p className="mb-1"><strong>Nationality</strong></p>
              <p className="text-muted">{profile.nationality || 'N/A'}</p>
            </div>
            <div className="col-md-4">
              <p className="mb-1"><strong>Merchant ID</strong></p>
              <p className="text-muted">{profile.merchant_id || 'N/A'}</p>
            </div>
            <div className="col-md-4">
              <p className="mb-1 text-danger"><strong>Close your account</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailspage;
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';

// const Detailspage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [profile, setProfile] = useState(null);

//   const fetchProfile = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('No token found. Redirecting to login.');
//       navigate('/login');
//       return;
//     }

//     try {
//       const res = await axios.get('http://192.168.1.6:5000/api/admin/profile', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const data = res.data.profile || res.data;
//       setProfile(data);
//     } catch (error) {
//       console.error('❌ Error fetching profile:', error);
//       localStorage.removeItem('token');
//       navigate('/login');
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, [location.state?.updated]); // Re-fetch on update

//   if (!profile) return <div className="p-4">Loading...</div>;

//   return (
//     <div className="d-flex vh-100 bg-light">
//       <div className="flex-grow-1 p-4 overflow-auto">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <div className="p-2 d-flex align-items-center gap-2">
//             <img
//               src={profile.profile_pic || "https://i.pravatar.cc/40"}
//               alt="Avatar"
//               className="rounded-circle"
//               width="40"
//               height="40"
//             />
//             <span className="fw-semibold">{profile.full_name || 'N/A'}</span>
//           </div>
//           <button
//             className="btn btn-sm btn-outline-danger"
//             onClick={() => navigate('/profile', { state: { profile } })}
//           >
//             Edit
//           </button>
//         </div>

//         <div className="row g-3 mb-3">
//           <div className="col-md-6">
//             <div className="card p-3">
//               <div className="d-flex justify-content-between align-items-start">
//                 <div>
//                   <img
//                     src={profile.profile_pic || "https://i.pravatar.cc/60"}
//                     alt="Profile"
//                     className="rounded-circle mb-2"
//                     width="60"
//                     height="60"
//                   />
//                   <h6 className="fw-bold mb-0">{profile.full_name || 'N/A'}</h6>
//                   <small className="text-muted">{profile.phone || 'N/A'}</small>
//                 </div>
//                 <small>ID: {profile.adminId || 'N/A'}</small>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Address</h6>
//               <p className="mb-1">{profile.address || 'N/A'}</p>
//               <p className="mb-0">{profile.secondary_address || ''}</p>
//             </div>
//           </div>
//         </div>

//         <div className="row g-3 mb-3">
//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Email</h6>
//               <span className="badge bg-secondary me-2">Primary</span> {profile.email || 'N/A'}
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="card p-3">
//               <h6 className="fw-bold mb-2">Phone Number</h6>
//               <span className="badge bg-secondary me-2">Primary</span> {profile.phone || 'N/A'}
//             </div>
//           </div>
//         </div>

//         <div className="card p-3">
//           <h6 className="fw-bold mb-3">Account Options</h6>
//           <div className="row">
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Language</strong></p>
//               <p className="text-muted">{profile.language || 'N/A'}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Time Zone</strong></p>
//               <p className="text-muted">{profile.time_zone || 'N/A'}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Nationality</strong></p>
//               <p className="text-muted">{profile.nationality || 'N/A'}</p>
//             </div>
//             <div className="col-md-4">
//               <p className="mb-1"><strong>Merchant ID</strong></p>
//               <p className="text-muted">{profile.merchant_id || 'N/A'}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Detailspage;
