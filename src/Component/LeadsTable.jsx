// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';

// // // const LeadsTable = () => {
// // //   const [leads, setLeads] = useState([]);
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const leadsPerPage = 5;

// // //   const fetchLeads = async () => {
// // //     try {
// // //       const response = await axios.get('http://192.168.1.6:5000/api/leads', {
// // //       credentials: true,
// // //       });
// // //       const data = response.data;

// // //       const formatted = data.map((item) => ({
// // //         id: item.id,
// // //         name: item.name,
// // //         email: item.email,
// // //         phone: item.phone || '',
// // //         city: item.city || '',
// // //         message: item.message || '',
// // //         datetime: new Date(item.created_at || Date.now()).toLocaleString(),
// // //       }));

// // //       setLeads(formatted);
// // //     } catch (error) {
// // //       console.error('Failed to fetch leads:', error);
// // //     }
// // //   };

// // //   const handleDelete = async (id) => {
// // //     if (window.confirm('Are you sure you want to delete this lead?')) {
// // //       try {
// // //         await axios.delete(`http://192.168.1.6:5000/api/leads/${id}`, {
// // //           withCredentials: true,
// // //         });
// // //         setLeads((prev) => prev.filter((lead) => lead.id !== id));
// // //       } catch (error) {
// // //         console.error('Failed to delete lead:', error);
// // //       }
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchLeads();
// // //   }, []);

// // //   const filteredLeads = leads.filter((lead) =>
// // //     lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //     lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //     lead.phone.includes(searchTerm) ||
// // //     lead.city.toLowerCase().includes(searchTerm.toLowerCase())
// // //   );

// // //   const indexOfLast = currentPage * leadsPerPage;
// // //   const indexOfFirst = indexOfLast - leadsPerPage;
// // //   const currentLeads = filteredLeads.slice(indexOfFirst, indexOfLast);
// // //   const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

// // //   return (
// // //     <div className="container-fluid mt-4">
// // //       <div className="card shadow-sm p-4">
// // //         <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
// // //           <h5 className="mb-0">Leads Table</h5>
// // //         </div>

// // //         <input
// // //           type="text"
// // //           className="form-control mb-3"
// // //           placeholder="Search by name, email, phone, or city"
// // //           value={searchTerm}
// // //           onChange={(e) => setSearchTerm(e.target.value)}
// // //         />

// // //         <div className="table-responsive" style={{ overflowX: 'auto' }}>
// // //           <table className="table table-bordered table-striped" style={{ minWidth: '900px' }}>
// // //             <thead className="table-dark">
// // //               <tr>
// // //                 <th>ID</th>
// // //                 <th>Name</th>
// // //                 <th>Email</th>
// // //                 <th>Phone</th>
// // //                 <th>City</th>
// // //                 <th>Message</th>
// // //                 <th>Date/Time</th>
// // //                 <th>Action</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {currentLeads.map((lead) => (
// // //                 <tr key={lead.id}>
// // //                   <td className="text-center">{lead.id}</td>
// // //                   <td>{lead.name}</td>
// // //                   <td>{lead.email}</td>
// // //                   <td>{lead.phone}</td>
// // //                   <td>{lead.city}</td>
// // //                   <td>{lead.message}</td>
// // //                   <td>{lead.datetime}</td>
// // //                   <td className="text-nowrap text-center">
// // //                     <button
// // //                       className="btn btn-sm btn-danger"
// // //                       onClick={() => handleDelete(lead.id)}
// // //                     >
// // //                       Delete
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //               {currentLeads.length === 0 && (
// // //                 <tr>
// // //                   <td colSpan="8" className="text-center">No leads found.</td>
// // //                 </tr>
// // //               )}
// // //             </tbody>
// // //           </table>
// // //         </div>

// // //         <div className="d-flex justify-content-between align-items-center mt-3">
// // //           <span>
// // //             Showing {indexOfFirst + 1}–{Math.min(indexOfLast, filteredLeads.length)} of {filteredLeads.length}
// // //           </span>
// // //           <div>
// // //             <button
// // //               className="btn btn-sm btn-secondary me-2"
// // //               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// // //               disabled={currentPage === 1}
// // //             >
// // //               Prev
// // //             </button>
// // //             <button
// // //               className="btn btn-sm btn-secondary"
// // //               onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// // //               disabled={currentPage === totalPages}
// // //             >
// // //               Next
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LeadsTable;




// // import React, { useEffect, useState } from 'react';

// // const LeadsTable = () => {
// //   const [leads, setLeads] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const leadsPerPage = 5;

// //   const fetchLeads = async () => {
// //     try {
// //       const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=25');
// //       const data = await response.json();

// //       const formatted = data.map((item, index) => ({
// //         id: index + 1,
// //         name: item.name,
// //         email: item.email,
// //         phone: '9876543210',
// //         city: 'New Delhi',
// //         message: item.body,
// //         datetime: new Date().toLocaleString(),
// //       }));

// //       setLeads(formatted);
// //     } catch (error) {
// //       console.error('Failed to fetch leads:', error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchLeads();
// //   }, []);

// //   const handleDelete = (id) => {
// //     if (window.confirm('Are you sure you want to delete this lead?')) {
// //       setLeads((prev) => prev.filter((lead) => lead.id !== id));
// //     }
// //   };

// //   const filteredLeads = leads.filter((lead) =>
// //     lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     lead.phone.includes(searchTerm) ||
// //     lead.city.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const indexOfLast = currentPage * leadsPerPage;
// //   const indexOfFirst = indexOfLast - leadsPerPage;
// //   const currentLeads = filteredLeads.slice(indexOfFirst, indexOfLast);
// //   const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

// //   return (
// //     <div className="container-fluid mt-4">
// //       <div className="card shadow-sm p-4">
// //         <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
// //           <h5 className="mb-0">Leads Table</h5>
// //         </div>

// //         <input
// //           type="text"
// //           className="form-control mb-3"
// //           placeholder="Search by name, email, phone, or city"
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //         />

// //         <div className="table-responsive" style={{ overflowX: 'auto' }}>
// //           <table className="table table-bordered table-striped" style={{ minWidth: '900px' }}>
// //             <thead className="table-dark">
// //               <tr>
// //                 <th>ID</th>
// //                 <th>Name</th>
// //                 <th>Email</th>
// //                 <th>Phone</th>
// //                 <th>City</th>
// //                 <th>Message</th>
// //                 <th>Date/Time</th>
// //                 <th>Action</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {currentLeads.map((lead) => (
// //                 <tr key={lead.id}>
// //                   <td className="text-center">{lead.id}</td>
// //                   <td style={{ maxWidth: '150px', wordBreak: 'break-word' }}>{lead.name}</td>
// //                   <td style={{ maxWidth: '180px', wordBreak: 'break-word' }}>{lead.email}</td>
// //                   <td>{lead.phone}</td>
// //                   <td>{lead.city}</td>
// //                   <td style={{ maxWidth: '250px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{lead.message}</td>
// //                   <td className="text-nowrap">{lead.datetime}</td>
// //                   <td className="text-center">
// //                     <button
// //                       className="btn btn-sm btn-danger"
// //                       onClick={() => handleDelete(lead.id)}
// //                     >
// //                       Delete
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //               {currentLeads.length === 0 && (
// //                 <tr>
// //                   <td colSpan="8" className="text-center">No leads found.</td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>
// //         </div>

// //         <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3 gap-2">
// //           <span>
// //             Showing {indexOfFirst + 1}–{Math.min(indexOfLast, filteredLeads.length)} of {filteredLeads.length}
// //           </span>
// //           <div>
// //             <button
// //               className="btn btn-sm btn-secondary me-2"
// //               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// //               disabled={currentPage === 1}
// //             >
// //               Prev
// //             </button>
// //             <button
// //               className="btn btn-sm btn-secondary"
// //               onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// //               disabled={currentPage === totalPages}
// //             >
// //               Next
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }; 


// // export default LeadsTable;



// import React, { useEffect, useState } from 'react';

// const LeadsTable = () => {
//   const [leads, setLeads] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const leadsPerPage = 5;

//   const fetchLeads = async () => {
//     try {
//       const response = await fetch('http://192.168.1.6:5000/api/leads', {
//         credentials: 'include', // important for cookies/session
//       });

//       const data = await response.json();
//       console.log("Fetched leads from backend:", data); // debug

//       // const formatted = data.map((item, index) => ({
//       //   id: item.id || index + 1,
//       //   name: item.name || '',
//       //   email: item.email || '',
//       //   phone: item.phone || '',
//       //   city: item.city || '',
//       //   message: item.message || '',
//       //   datetime: new Date(item.createdAt || Date.now()).toLocaleString(),
//       // }));
//       const formatted = data.map((item) => ({
//   id: item.id,
//   name: item.name || '',
//   email: item.email || '',
//   phone: item.phone || '',
//   city: item.city || '',
//   message: item.message || '',
//   datetime: new Date(item.submitted_at || Date.now()).toLocaleString(),
// }));
      

//       setLeads(formatted);
//     } catch (error) {
//       console.error('Failed to fetch leads:', error);
//     }
//   };

//   useEffect(() => {
//     fetchLeads();
//   }, []);

//   const handleDelete = (id) => {
//     if (window.confirm('Are you sure you want to delete this lead?')) {
//       setLeads((prev) => prev.filter((lead) => lead.id !== id));
//     }
//   };

//   const filteredLeads = leads.filter((lead) =>
//     lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     lead.phone.includes(searchTerm) ||
//     lead.city.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLast = currentPage * leadsPerPage;
//   const indexOfFirst = indexOfLast - leadsPerPage;
//   const currentLeads = filteredLeads.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

//   return (
//     <div className="container-fluid mt-4">
//       <div className="card shadow-sm p-4">
//         <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
//           <h5 className="mb-0">Leads Table</h5>
//         </div>

//         <input
//           type="text"
//           className="form-control mb-3"
//           placeholder="Search by name, email, phone, or city"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <div className="table-responsive" style={{ overflowX: 'auto' }}>
//           <table className="table table-bordered table-striped" style={{ minWidth: '900px' }}>
//             <thead className="table-dark">
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>City</th>
//                 <th>Message</th>
//                 <th>Date/Time</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentLeads.map((lead) => (
//                 <tr key={lead.id}>
//                   <td className="text-center">{lead.id}</td>
//                   <td style={{ maxWidth: '150px', wordBreak: 'break-word' }}>{lead.name}</td>
//                   <td style={{ maxWidth: '180px', wordBreak: 'break-word' }}>{lead.email}</td>
//                   <td>{lead.phone}</td>
//                   <td>{lead.city}</td>
//                   <td style={{ maxWidth: '250px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{lead.message}</td>
//                   <td className="text-nowrap">{lead.datetime}</td>
//                   <td className="text-center">
//                     <button
//                       className="btn btn-sm btn-danger"
//                       onClick={() => handleDelete(lead.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {currentLeads.length === 0 && (
//                 <tr>
//                   <td colSpan="8" className="text-center">No leads found.</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3 gap-2">
//           <span>
//             Showing {indexOfFirst + 1}–{Math.min(indexOfLast, filteredLeads.length)} of {filteredLeads.length}
//           </span>
//           <div>
//             <button
//               className="btn btn-sm btn-secondary me-2"
//               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//               disabled={currentPage === 1}
//             >
//               Prev
//             </button>
//             <button
//               className="btn btn-sm btn-secondary"
//               onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default LeadsTable;
// import React, { useEffect, useState } from 'react';

// const LeadsTable = () => {
//   const [leads, setLeads] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const leadsPerPage = 5;

//   const fetchLeads = async () => {
//     try {
//       const response = await fetch('http://192.168.1.6:5000/api/leads', {
//         credentials: 'include', // for sessions/cookies
//       });

//       const data = await response.json();
//       console.log("Fetched leads from backend:", data);

//       const formatted = data.map((item) => ({
//         id: item.id,
//         name: item.name || '',
//         email: item.email || '',
//         phone: item.phone || '',
//         city: item.city || '',
//         message: item.message || '',
//         datetime: new Date(item.submitted_at || Date.now()).toLocaleString(),
//       }));

//       setLeads(formatted);
//     } catch (error) {
//       console.error('Failed to fetch leads:', error);
//     }
//   };

//   useEffect(() => {
//     fetchLeads();
//   }, []);

//   const handleDelete = (id) => {
//     if (window.confirm('Are you sure you want to delete this lead?')) {
//       setLeads((prev) => prev.filter((lead) => lead.id !== id));
//     }
//   };

//   const filteredLeads = leads.filter((lead) =>
//     lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     lead.phone.includes(searchTerm) ||
//     lead.city.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLast = currentPage * leadsPerPage;
//   const indexOfFirst = indexOfLast - leadsPerPage;
//   const currentLeads = filteredLeads.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

//   return (
//     <div className="container-fluid mt-4">
//       <div className="card shadow-sm p-4">
//         <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
//           <h5 className="mb-0">Leads Table</h5>
//         </div>

//         <input
//           type="text"
//           className="form-control mb-3"
//           placeholder="Search by name, email, phone, or city"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <div className="table-responsive" style={{ overflowX: 'auto' }}>
//           <table className="table table-bordered table-striped" style={{ minWidth: '900px' }}>
//             <thead className="table-dark">
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>City</th>
//                 <th>Message</th>
//                 <th>Date/Time</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentLeads.length > 0 ? currentLeads.map((lead) => (
//                 <tr key={lead.id}>
//                   <td className="text-center">{lead.id}</td>
//                   <td style={{ maxWidth: '150px', wordBreak: 'break-word' }}>{lead.name}</td>
//                   <td style={{ maxWidth: '180px', wordBreak: 'break-word' }}>{lead.email}</td>
//                   <td>{lead.phone}</td>
//                   <td>{lead.city}</td>
//                   <td style={{ maxWidth: '250px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{lead.message}</td>
//                   <td className="text-nowrap">{lead.datetime}</td>
//                   <td className="text-center">
//                     <button
//                       className="btn btn-sm btn-danger"
//                       onClick={() => handleDelete(lead.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               )) : (
//                 <tr>
//                   <td colSpan="8" className="text-center">No leads found.</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3 gap-2">
//           <span>
//             Showing {indexOfFirst + 1}–{Math.min(indexOfLast, filteredLeads.length)} of {filteredLeads.length}
//           </span>
//           <div>
//             <button
//               className="btn btn-sm btn-secondary me-2"
//               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//               disabled={currentPage === 1}
//             >
//               Prev
//             </button>
//             <button
//               className="btn btn-sm btn-secondary"
//               onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeadsTable;




// import React, { useEffect, useState } from 'react';

// const LeadsTable = () => {
//   const [leads, setLeads] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const leadsPerPage = 5;

//   const fetchLeads = async () => {
//     try {
//       const response = await fetch('http://192.168.1.6:5000/api/leads', {
//         credentials: 'include', // for sessions/cookies
//       });

//       const data = await response.json();
//       console.log("Fetched leads from backend:", data);

//       const formatted = data.map((item) => ({
//         id: item.id,
//         name: item.name || '',
//         email: item.email || '',
//         phone: item.phone || '',
//         city: item.city || '',
//         message: item.message || '',
//         datetime: new Date(item.submitted_at || Date.now()).toLocaleString(),
//       }));

//       // ✅ Sort by ID in ascending order
//       const sorted = formatted.sort((a, b) => a.id - b.id);

//       setLeads(sorted);
//     } catch (error) {
//       console.error('Failed to fetch leads:', error);
//     }
//   };

//   useEffect(() => {
//     fetchLeads();
//   }, []);

//   const handleDelete = (id) => {
//     if (window.confirm('Are you sure you want to delete this lead?')) {
//       setLeads((prev) => prev.filter((lead) => lead.id !== id));
//     }
//   };

//   const filteredLeads = leads.filter((lead) =>
//     lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     lead.phone.includes(searchTerm) ||
//     lead.city.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLast = currentPage * leadsPerPage;
//   const indexOfFirst = indexOfLast - leadsPerPage;
//   const currentLeads = filteredLeads.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

//   return (
//     <div className="container-fluid mt-4">
//       <div className="card shadow-sm p-4">
//         <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
//           <h5 className="mb-0">Leads Table</h5>
//         </div>

//         <input
//           type="text"
//           className="form-control mb-3"
//           placeholder="Search by name, email, phone, or city"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <div className="table-responsive" style={{ overflowX: 'auto' }}>
//           <table className="table table-bordered table-striped" style={{ minWidth: '900px' }}>
//             <thead className="table-dark">
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>City</th>
//                 <th>Message</th>
//                 <th>Date/Time</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentLeads.length > 0 ? currentLeads.map((lead) => (
//                 <tr key={lead.id}>
//                   <td className="text-center">{lead.id}</td>
//                   <td style={{ maxWidth: '150px', wordBreak: 'break-word' }}>{lead.name}</td>
//                   <td style={{ maxWidth: '180px', wordBreak: 'break-word' }}>{lead.email}</td>
//                   <td>{lead.phone}</td>
//                   <td>{lead.city}</td>
//                   <td style={{ maxWidth: '250px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{lead.message}</td>
//                   <td className="text-nowrap">{lead.datetime}</td>
//                   <td className="text-center">
//                     <button
//                       className="btn btn-sm btn-danger"
//                       onClick={() => handleDelete(lead.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               )) : (
//                 <tr>
//                   <td colSpan="8" className="text-center">No leads found.</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3 gap-2">
//           <span>
//             Showing {indexOfFirst + 1}–{Math.min(indexOfLast, filteredLeads.length)} of {filteredLeads.length}
//           </span>
//           <div>
//             <button
//               className="btn btn-sm btn-secondary me-2"
//               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//               disabled={currentPage === 1}
//             >
//               Prev
//             </button>
//             <button
//               className="btn btn-sm btn-secondary"
//               onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeadsTable;
import React, { useEffect, useState } from 'react';
const token=localStorage.getItem("token")
const LeadsTable = () => {
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 5;

  // ✅ Fetch leads from backend
  const fetchLeads = async () => {
    try {
      const response = await fetch('https://ruwa-back-2.onrender.com/api/contact/getAll', {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      console.log("Fetched leads from backend:", data);

      const formatted = data.map((item, index) => ({
        _id: item._id,  // MongoDB ID
        id: index + 1,  // Just for display numbering
        name: item.name || '',
        email: item.email || '',
        phone: item.phone || '',
        city: item.city || '',
        message: item.message || '',
        datetime: new Date(item.createdAt || Date.now()).toLocaleString(),
      }));

      setLeads(formatted);
    } catch (error) {
      console.error('Failed to fetch leads:', error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // ✅ Delete lead using backend API
  const handleDelete = async (_id) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;

    try {
      const res = await fetch(`https://ruwa-back-2.onrender.com/api/contact/delete/${_id}`, {
        method: "DELETE",
        
        headers: { Authorization: `Bearer ${token}` },
        
      });

      const result = await res.json();
      if (res.ok) {
        alert(result.message || "Deleted successfully!");
        setLeads((prev) => prev.filter((lead) => lead._id !== _id));
      } else {
        alert(result.message || "Failed to delete");
      }
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Error deleting lead");
    }
  };

  // ✅ Search
  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.phone.includes(searchTerm) ||
    lead.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * leadsPerPage;
  const indexOfFirst = indexOfLast - leadsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-sm p-4">
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
          <h5 className="mb-0"> Hello Leads Table</h5>
        </div>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by name, email, phone, or city"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="table-responsive" style={{ overflowX: 'auto' }}>
          <table className="table table-bordered table-striped" style={{ minWidth: '900px' }}>
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th className="d-none d-md-table-cell">City</th>
                <th className="d-none d-md-table-cell">Message</th>
                <th className="d-none d-lg-table-cell">Date/Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentLeads.length > 0 ? currentLeads.map((lead) => (
                <tr key={lead._id}>
                  <td className="text-center">{lead.id}</td>
                  <td style={{ maxWidth: '150px', wordBreak: 'break-word' }}>{lead.name}</td>
                  <td style={{ maxWidth: '180px', wordBreak: 'break-word' }}>{lead.email}</td>
                  <td>{lead.phone}</td>
                  <td className="d-none d-md-table-cell">{lead.city}</td>
                  <td
                    className="d-none d-md-table-cell"
                    style={{ maxWidth: '250px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
                  >
                    {lead.message}
                  </td>
                  <td className="text-nowrap d-none d-lg-table-cell">{lead.datetime}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(lead._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="8" className="text-center">No leads found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3 gap-2">
          <span>
            Showing {indexOfFirst + 1}–{Math.min(indexOfLast, filteredLeads.length)} of {filteredLeads.length}
          </span>
          <div>
            <button
              className="btn btn-sm btn-secondary me-2"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsTable;

