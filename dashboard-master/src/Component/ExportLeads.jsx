// // // import React, { useEffect, useState } from 'react';

// // // const LeadsTable = () => {
// // //   const [leads, setLeads] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   // Replace with your real API endpoint
// // //   const fetchLeads = async () => {
// // //     try {
// // //       const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
// // //       const data = await response.json();

// // //       // Simulated lead format
// // //       const formattedLeads = data.map((item, index) => ({
// // //         id: index + 1,
// // //         name: item.name,
// // //         email: item.email,
// // //         phone: '9876543210', // Simulated value
// // //         subject: `Lead Subject #${index + 1}`,
// // //         message: item.body,
// // //       }));

// // //       setLeads(formattedLeads);
// // //       setLoading(false);
// // //     } catch (error) {
// // //       console.error('Error fetching leads:', error);
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchLeads();
// // //   }, []);

// // //   return (
// // //     <div className="container-fluid mt-4">
// // //       <div className="card shadow-sm p-4">
// // //         <h5 className="mb-3">Leads Table</h5>
// // //         {loading ? (
// // //           <p>Loading leads...</p>
// // //         ) : (
// // //           <div className="table-responsive">
// // //             <table className="table table-bordered table-striped">
// // //               <thead className="table-dark">
// // //                 <tr>
// // //                   <th>ID</th>
// // //                   <th>Name</th>
// // //                   <th>Email</th>
// // //                   <th>Phone</th>
// // //                   <th>Subject</th>
// // //                   <th>Message</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {leads.map((lead) => (
// // //                   <tr key={lead.id}>
// // //                     <td>{lead.id}</td>
// // //                     <td>{lead.name}</td>
// // //                     <td>{lead.email}</td>
// // //                     <td>{lead.phone}</td>
// // //                     <td>{lead.subject}</td>
// // //                     <td>{lead.message}</td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LeadsTable;



// // import React, { useEffect, useState } from 'react';
// // import { CSVLink } from 'react-csv';

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
// //         <div className="d-flex justify-content-between align-items-center mb-3">
// //           <h5 className="mb-0">Leads Table</h5>
// //           <CSVLink
// //             data={leads}
// //             filename={"leads.csv"}
// //             className="btn btn-outline-success"
// //           >
// //             Export CSV
// //           </CSVLink>
// //         </div>

// //         <input
// //           type="text"
// //           className="form-control mb-3"
// //           placeholder="Search by name, email, phone, or city"
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //         />

// //         <div className="table-responsive">
// //           <table className="table table-bordered table-striped">
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
// //                   <td>{lead.id}</td>
// //                   <td>{lead.name}</td>
// //                   <td>{lead.email}</td>
// //                   <td>{lead.phone}</td>
// //                   <td>{lead.city}</td>
// //                   <td>{lead.message}</td>
// //                   <td>{lead.datetime}</td>
// //                   <td>
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

// //         <div className="d-flex justify-content-between align-items-center mt-3">
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


// // import React, { useEffect, useState } from 'react';
// // import { CSVLink } from 'react-csv';

// // const ExportLeads = () => {
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
// //           <CSVLink
// //             data={leads}
// //             filename={"leads.csv"}
// //             className="btn btn-outline-success"
// //           >
// //             Export CSV
// //           </CSVLink>
// //         </div>

// //         <input
// //           type="text"
// //           className="form-control mb-3"
// //           placeholder="Search by name, email, phone, or city"
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //         />

// //         <div className="table-responsive" style={{ overflowX: 'auto' }}>
// //           <table className="table table-bordered table-striped" style={{ minWidth: '950px' }}>
// //             <thead className="table-dark text-center">
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

// // export default ExportLeads;



// import React, { useEffect, useState } from 'react';
// import { CSVLink } from 'react-csv';
// import axios from 'axios';

// const ExportLeads = () => {
//   const [leads, setLeads] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const leadsPerPage = 5;

//   const fetchLeads = async () => {
//     try {
//       const response = await axios.get('http://192.168.1.6:5000/api/leads');
//       setLeads(response.data);
//     } catch (error) {
//       console.error('Failed to fetch leads:', error);
//     }
//   };

//   useEffect(() => {
//     fetchLeads();
//   }, []);

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this lead?')) {
//       try {
//         await axios.delete(`http://192.168.1.6:5000/api/leads/${id}`);
//         setLeads((prev) => prev.filter((lead) => lead.id !== id));
//       } catch (error) {
//         console.error('Failed to delete lead:', error);
//       }
//     }
//   };

//   const filteredLeads = leads.filter((lead) =>
//     lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     lead.number.includes(searchTerm) ||
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
//           <CSVLink
//             data={leads}
//             filename={"leads.csv"}
//             className="btn btn-outline-success"
//           >
//             Export CSV
//           </CSVLink>
//         </div>

//         <input
//           type="text"
//           className="form-control mb-3"
//           placeholder="Search by name, email, number, or city"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <div className="table-responsive" style={{ overflowX: 'auto' }}>
//           <table className="table table-bordered table-striped" style={{ minWidth: '950px' }}>
//             <thead className="table-dark text-center">
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>City</th>
//                 <th>Message</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentLeads.map((lead) => (
//                 <tr key={lead.id}>
//                   <td className="text-center">{lead.id}</td>
//                   <td style={{ maxWidth: '150px', wordBreak: 'break-word' }}>{lead.name}</td>
//                   <td style={{ maxWidth: '180px', wordBreak: 'break-word' }}>{lead.email}</td>
//                   <td>{lead.number}</td>
//                   <td>{lead.city}</td>
//                   <td style={{ maxWidth: '250px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{lead.msg}</td>
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
//                   <td colSpan="7" className="text-center">No leads found.</td>
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

// export default ExportLeads;

// import React, { useEffect, useState } from 'react';
// import { CSVLink } from 'react-csv';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const ExportLeads = () => {
//   const [leads, setLeads] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const leadsPerPage = 5;

//   const fetchLeads = async () => {
//     try {
//       const response = await fetch('http://192.168.1.6:5000/api/leads');
//       const data = await response.json();
//       const formatted = data.map((item, index) => ({
//         id: item.id || index + 1,
//         name: item.name,
//         email: item.email,
//         phone: item.number,
//         city: item.city,
//         message: item.msg,
//         datetime: new Date().toLocaleString(),
//       }));
//       setLeads(formatted);
//     } catch (error) {
//       console.error('Failed to fetch leads:', error);
//     }
//   };

//   useEffect(() => {
//     fetchLeads();
//   }, []);

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this lead?')) {
//       try {
//         await fetch(`http://192.168.1.6:5000/api/leads/${id}`, {
//           method: 'DELETE',
//         });
//         setLeads((prev) => prev.filter((lead) => lead.id !== id));
//       } catch (err) {
//         alert('Failed to delete lead');
//       }
//     }
//   };

//   const exportPDF = () => {
//     const doc = new jsPDF();
//     doc.text('Leads Table', 14, 10);
//     const tableColumn = ['ID', 'Name', 'Email', 'Phone', 'City', 'Message'];
//     const tableRows = leads.map((lead) => [
//       lead.id,
//       lead.name,
//       lead.email,
//       lead.phone,
//       lead.city,
//       lead.message,
//     ]);
//     doc.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//       startY: 20,
//       styles: { fontSize: 8 },
//     });
//     doc.save('leads.pdf');
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
//           <div>
//             <CSVLink
//               data={leads}
//               filename={"leads.csv"}
//               className="btn btn-outline-success me-2"
//             >
//               Export CSV
//             </CSVLink>
//             <button onClick={exportPDF} className="btn btn-outline-danger">
//               Export PDF
//             </button>
//           </div>
//         </div>

//         <input
//           type="text"
//           className="form-control mb-3"
//           placeholder="Search by name, email, phone, or city"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <div className="table-responsive" style={{ overflowX: 'auto' }}>
//           <table className="table table-bordered table-striped" style={{ minWidth: '950px' }}>
//             <thead className="table-dark text-center">
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
//                   <td>{lead.name}</td>
//                   <td>{lead.email}</td>
//                   <td>{lead.phone}</td>
//                   <td>{lead.city}</td>
//                   <td style={{ maxWidth: '250px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{lead.message}</td>
//                   <td>{lead.datetime}</td>
//                   <td className="text-center">
//                     <button className="btn btn-sm btn-danger" onClick={() => handleDelete(lead.id)}>
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

// export default ExportLeads;
 

// import React, { useEffect, useState } from 'react';
// import { CSVLink } from 'react-csv';
// import jsPDF from 'jspdf';
// // import 'jspdf-autotable';
// import autoTable from 'jspdf-autotable'; 

// const ExportLeads = () => {
//   const [leads, setLeads] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const leadsPerPage = 5;

//   const fetchLeads = async () => {
//     try {
//       const response = await fetch('http://192.168.1.6:5000/api/leads');
//       const data = await response.json();
//       setLeads(data);
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

//   // const exportPDF = () => {
//   //   const doc = new jsPDF();
//   //   doc.text('Leads Table', 14, 10);

//   //   const tableColumn = ['ID', 'Name', 'Email', 'Phone', 'City', 'Message'];
//   //   const tableRows = leads.map((lead) => [
//   //     lead.id,
//   //     lead.name,
//   //     lead.email,
//   //     lead.number,
//   //     lead.city,
//   //     lead.msg,
//   //   ]);

//   //   doc.autoTable({
//   //     head: [tableColumn],
//   //     body: tableRows,
//   //     startY: 20,
//   //     styles: { fontSize: 8 },
//   //   });

//   //   doc.save('leads.pdf');
//   // };


//   const exportPDF = () => {
//   const doc = new jsPDF();
//   doc.text('Leads Table', 14, 10);

//   const tableColumn = ['ID', 'Name', 'Email', 'Phone', 'City', 'Message'];
//   const tableRows = leads.map((lead) => [
//     lead.id,
//     lead.name,
//     lead.email,
//     lead.number,
//     lead.city,
//     lead.msg,
//   ]);

//   autoTable(doc, {
//     head: [tableColumn],
//     body: tableRows,
//     startY: 20,
//     styles: { fontSize: 8 },
//   });

//   doc.save('leads.pdf');
// };


//   const filteredLeads = leads.filter((lead) =>
//     lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     lead.number.includes(searchTerm) ||
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
//           <div>
//             <CSVLink
//               data={leads}
//               filename={"leads.csv"}
//               className="btn btn-outline-success me-2"
//             >
//               Export CSV
//             </CSVLink>
//             <button onClick={exportPDF} className="btn btn-outline-danger">
//               Export PDF
//             </button>
//           </div>
//         </div>

//         <input
//           type="text"
//           className="form-control mb-3"
//           placeholder="Search by name, email, phone, or city"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <div className="table-responsive" style={{ overflowX: 'auto' }}>
//           <table className="table table-bordered table-striped" style={{ minWidth: '950px' }}>
//             <thead className="table-dark text-center">
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>City</th>
//                 <th>Message</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentLeads.map((lead) => (
//                 <tr key={lead.id}>
//                   <td className="text-center">{lead.id}</td>
//                   <td style={{ maxWidth: '150px', wordBreak: 'break-word' }}>{lead.name}</td>
//                   <td style={{ maxWidth: '180px', wordBreak: 'break-word' }}>{lead.email}</td>
//                   <td>{lead.number}</td>
//                   <td>{lead.city}</td>
//                   <td style={{ maxWidth: '250px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{lead.msg}</td>
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
//                   <td colSpan="7" className="text-center">No leads found.</td>
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

// export default ExportLeads;


// import React, { useEffect, useState } from 'react';
// import { CSVLink } from 'react-csv';
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';

// const ExportLeads = () => {
//   const [leads, setLeads] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const leadsPerPage = 5;

//   const fetchLeads = async () => {
//     try {
//       const response = await fetch('http://192.168.1.6:5000/api/leads');
//       const data = await response.json();

//       // Sort leads by ID in increasing order
//       const sorted = data.sort((a, b) => a.id - b.id);

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

//   const exportPDF = () => {
//     const doc = new jsPDF();
//     doc.text('Leads Table', 14, 10);

//     const tableColumn = ['ID', 'Name', 'Email', 'Phone', 'City', 'Message'];
//     const tableRows = leads.map((lead) => [
//       lead.id,
//       lead.name,
//       lead.email,
//       lead.phone,
//       lead.city,
//       lead.msg,
//     ]);

//     autoTable(doc, {
//       head: [tableColumn],
//       body: tableRows,
//       startY: 20,
//       styles: { fontSize: 8 },
//     });

//     doc.save('leads.pdf');
//   };

//   const filteredLeads = leads.filter((lead) =>
//     lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     lead.number.includes(searchTerm) ||
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
//           <div>
//             <CSVLink
//               data={leads}
//               filename={"leads.csv"}
//               className="btn btn-outline-success me-2"
//             >
//               Export CSV
//             </CSVLink>
//             <button onClick={exportPDF} className="btn btn-outline-danger">
//               Export PDF
//             </button>
//           </div>
//         </div>

//         <input
//           type="text"
//           className="form-control mb-3"
//           placeholder="Search by name, email, phone, or city"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <div className="table-responsive" style={{ overflowX: 'auto' }}>
//           <table className="table table-bordered table-striped" style={{ minWidth: '950px' }}>
//             <thead className="table-dark text-center">
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>City</th>
//                 <th>Message</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentLeads.map((lead) => (
//                 <tr key={lead.id}>
//                   <td className="text-center">{lead.id}</td>
//                   <td style={{ maxWidth: '150px', wordBreak: 'break-word' }}>{lead.name}</td>
//                   <td style={{ maxWidth: '180px', wordBreak: 'break-word' }}>{lead.email}</td>
//                   <td>{lead.number}</td>
//                   <td>{lead.city}</td>
//                   <td style={{ maxWidth: '250px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{lead.msg}</td>
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
//                   <td colSpan="7" className="text-center">No leads found.</td>
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

// export default ExportLeads;

// import React, { useEffect, useState } from 'react';
// import { CSVLink } from 'react-csv';
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const ExportLeads = () => {
//   const [leads, setLeads] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const leadsPerPage = 5;

//   const fetchLeads = async () => {
//     try {
//       const response = await fetch('http://192.168.1.6:5000/api/leads');
//       const data = await response.json();
//       const sorted = data.sort((a, b) => a.id - b.id);
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

//   const exportPDF = () => {
//     if (!window.confirm("Do you want to download leads as PDF?")) return;

//     const doc = new jsPDF();
//     doc.text('Leads Table', 14, 10);

//     const tableColumn = ['ID', 'Name', 'Email', 'Phone', 'City', 'Message'];
//     const tableRows = leads.map((lead) => [
//       lead.id,
//       lead.name,
//       lead.email,
//       lead.phone,
//       lead.city,
//       lead.message,
//     ]);

//     autoTable(doc, {
//       head: [tableColumn],
//       body: tableRows,
//       startY: 20,
//       styles: { fontSize: 8 },
//     });

//     doc.save('leads.pdf');
//   };

//   const filteredLeads = leads.filter((lead) =>
//     lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     lead.phone?.includes(searchTerm) ||
//     lead.city?.toLowerCase().includes(searchTerm.toLowerCase())
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
//           <div>
//             <CSVLink
//               data={leads}
//               filename={"leads.csv"}
//               className="btn btn-outline-success me-2"
//             >
//               <i className="bi bi-file-earmark-excel-fill me-1"></i> Export CSV
//             </CSVLink>
//             <button onClick={exportPDF} className="btn btn-outline-danger">
//               <i className="bi bi-file-earmark-pdf-fill me-1"></i> Export PDF
//             </button>
//           </div>
//         </div>

//         <input
//           type="text"
//           className="form-control mb-3"
//           placeholder="Search by name, email, phone, or city"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <div className="table-responsive" style={{ overflowX: 'auto' }}>
//           <table className="table table-bordered table-striped" style={{ minWidth: '950px' }}>
//             <thead className="table-dark text-center">
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>City</th>
//                 <th>Message</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentLeads.length > 0 ? (
//                 currentLeads.map((lead) => (
//                   <tr key={lead.id}>
//                     <td className="text-center">{lead.id}</td>
//                     <td style={{ maxWidth: '150px', wordBreak: 'break-word' }}>{lead.name}</td>
//                     <td style={{ maxWidth: '180px', wordBreak: 'break-word' }}>{lead.email}</td>
//                     <td>{lead.phone}</td>
//                     <td>{lead.city}</td>
//                     <td style={{ maxWidth: '250px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{lead.message}</td>
//                     <td className="text-center">
//                       <button
//                         className="btn btn-sm btn-danger"
//                         onClick={() => handleDelete(lead.id)}
//                       >
//                         <i className="bi bi-trash"></i>
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="7" className="text-center">No leads found.</td>
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

// export default ExportLeads;
import React, { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ExportLeads = () => {
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 5;

  const fetchLeads = async () => {
    try {
      const response = await fetch('http://192.168.1.6:5000/api/leads');
      const data = await response.json();

      const formatted = data.map((item) => ({
        id: item.id,
        name: item.name || '',
        email: item.email || '',
        phone: item.phone || '',
        city: item.city || '',
        message: item.message || '',
        datetime: item.submitted_at
          ? new Date(item.submitted_at).toLocaleString()
          : '',
      }));

      const sorted = formatted.sort((a, b) => a.id - b.id);
      setLeads(sorted);
    } catch (error) {
      console.error('Failed to fetch leads:', error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      setLeads((prev) => prev.filter((lead) => lead.id !== id));
    }
  };

  const exportPDF = () => {
    if (!window.confirm('Do you want to download leads as PDF?')) return;

    const doc = new jsPDF();
    doc.text('Leads Table', 14, 10);

    const tableColumn = ['ID', 'Name', 'Email', 'Phone', 'City', 'Message', 'Date/Time'];
    const tableRows = leads.map((lead) => [
      lead.id,
      lead.name,
      lead.email,
      lead.phone,
      lead.city,
      lead.message,
      lead.datetime,
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      styles: { fontSize: 8 },
    });

    doc.save('leads.pdf');
  };

  const filteredLeads = leads.filter((lead) =>
    lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.phone?.includes(searchTerm) ||
    lead.city?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * leadsPerPage;
  const indexOfFirst = indexOfLast - leadsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-sm p-4">
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
          <h5 className="mb-0">Leads Table</h5>
          <div>
            <CSVLink
              data={leads}
              filename={'leads.csv'}
              className="btn btn-outline-success me-2"
            >
              <i className="bi bi-file-earmark-excel-fill me-1"></i> Export CSV
            </CSVLink>
            <button onClick={exportPDF} className="btn btn-outline-danger">
              <i className="bi bi-file-earmark-pdf-fill me-1"></i> Export PDF
            </button>
          </div>
        </div>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by name, email, phone, or city"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="table-responsive" style={{ overflowX: 'auto' }}>
          <table className="table table-bordered table-striped" style={{ minWidth: '1000px' }}>
            <thead className="table-dark text-center">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th className="d-none d-md-table-cell">City</th>
                <th className="d-none d-md-table-cell">Message</th>
                <th className="d-none d-md-table-cell">Date/Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentLeads.length > 0 ? (
                currentLeads.map((lead) => (
                  <tr key={lead.id}>
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
                    <td className="d-none d-md-table-cell text-nowrap">
                      {lead.datetime}
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(lead.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">
                    No leads found.
                  </td>
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

export default ExportLeads;
