// // // // import React from 'react';
// // // // import Card from './Card';


// // // // const Dashboard = () => (
// // // //   <div className="container-fluid">
// // // //     <div className="row mt-4">
// // // //       <Card
// // // //         title="Total Users"
// // // //         value="4,42,236"
// // // //         change="↑ 59.3%"
// // // //         changeColor="bg-primary text-white px-2"
// // // //         extra="You made an extra 35,000 this year"
// // // //       />
// // // //       <Card
// // // //         title="Total Users"
// // // //         value="78,250"
// // // //         change="↑ 70.5%"
// // // //         changeColor="bg-success text-white px-2"
// // // //         extra="You made an extra 8,900 this year"
// // // //       />
// // // //       <Card
// // // //         title="Total Order"
// // // //         value="18,800"
// // // //         change="↓ 27.4%"
// // // //         changeColor="bg-warning text-dark px-2"
// // // //         extra="You made an extra 1,943 this year"
// // // //       />
// // // //       {/* <Card
// // // //         title="Total Sales"
// // // //         value="$35,078"
// // // //         change="↓ 27.4%"
// // // //         changeColor="bg-danger text-white px-2"
// // // //         extra="You made an extra $20,395 this year"
// // // //       /> */}
// // // //     </div>

// // // //     <div className="row">
// // // //       <div className="col-md-12">
// // // //         <div className="card p-4 shadow-sm">
// // // //           <h5>Unique Visitors</h5>
// // // //           <p>[Chart Placeholder]</p>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   </div>
// // // // );

// // // // export default Dashboard;


// // // // // import React from 'react';
// // // // // import Card from './Card';

// // // // // const Dashboard = () => (
// // // // //   <div className="container-fluid">
// // // // //     <div className="row mt-4">
// // // // //       <div className="col-md-6 col-xl-3 mb-4">
// // // // //         <Card
// // // // //           title="Total Page Views"
// // // // //           value="4,42,236"
// // // // //           change="↑ 59.3%"
// // // // //           changeColor="bg-primary text-white px-2"
// // // // //           extra="You made an extra 35,000 this year"
// // // // //         />
// // // // //       </div>
// // // // //       <div className="col-md-6 col-xl-3 mb-4">
// // // // //         <Card
// // // // //           title="Total Users"
// // // // //           value="78,250"
// // // // //           change="↑ 70.5%"
// // // // //           changeColor="bg-success text-white px-2"
// // // // //           extra="You made an extra 8,900 this year"
// // // // //         />
// // // // //       </div>
// // // // //       <div className="col-md-6 col-xl-3 mb-4">
// // // // //         <Card
// // // // //           title="Total Order"
// // // // //           value="18,800"
// // // // //           change="↓ 27.4%"
// // // // //           changeColor="bg-warning text-dark px-2"
// // // // //           extra="You made an extra 1,943 this year"
// // // // //         />
// // // // //       </div>
// // // // //       <div className="col-md-6 col-xl-3 mb-4">
// // // // //         <Card
// // // // //           title="Total Sales"
// // // // //           value="$35,078"
// // // // //           change="↓ 27.4%"
// // // // //           changeColor="bg-danger text-white px-2"
// // // // //           extra="You made an extra $20,395 this year"
// // // // //         />
// // // // //       </div>
// // // // //     </div>

// // // // //     <div className="row">
// // // // //       <div className="col-md-12">
// // // // //         <div className="card p-4 shadow-sm">
// // // // //           <h5>Unique Visitors</h5>
// // // // //           <p>[Chart Placeholder]</p>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   </div>
// // // // // );

// // // // // export default Dashboard;
// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import Card from './Card';

// // // const Dashboard = () => {
// // //   const [summary, setSummary] = useState(null);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     axios.get('http://192.168.1.6:5000/api/dashboard/summary')
// // //       .then(response => {
// // //         setSummary(response.data);
// // //         setLoading(false);
// // //       })
// // //       .catch(error => {
// // //         console.error("Error fetching dashboard summary:", error);
// // //         setLoading(false);
// // //       });
// // //   }, []);

// // //   if (loading) {
// // //     return <div className="text-center mt-5">Loading Dashboard...</div>;
// // //   }

// // //   return (
// // //     <div className="container-fluid">
// // //       <div className="row mt-4">
// // //         <Card
// // //           title="Total Users"
// // //           value={summary.totalUsers.value}
// // //           change={summary.totalUsers.change}
// // //           changeColor={summary.totalUsers.changeColor}
// // //           extra={summary.totalUsers.extra}
// // //         />
// // //         <Card
// // //           title="Total Leads"
// // //           value={summary.totalLeads.value}
// // //           change={summary.totalLeads.change}
// // //           changeColor={summary.totalLeads.changeColor}
// // //           extra={summary.totalLeads.extra}
// // //         />
// // //         <Card
// // //           title="Total Orders"
// // //           value={summary.totalOrders.value}
// // //           change={summary.totalOrders.change}
// // //           changeColor={summary.totalOrders.changeColor}
// // //           extra={summary.totalOrders.extra}
// // //         />
// // //         <Card
// // //           title="Total Sales"
// // //           value={summary.totalSales.value}
// // //           change={summary.totalSales.change}
// // //           changeColor={summary.totalSales.changeColor}
// // //           extra={summary.totalSales.extra}
// // //         />
// // //       </div>

// // //       <div className="row">
// // //         <div className="col-md-12">
// // //           <div className="card p-4 shadow-sm">
// // //             <h5>Unique Visitors</h5>
// // //             <p>[Chart Placeholder]</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;



// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import Card from './Card';

// // // const Dashboard = () => {
// // //   const [summary, setSummary] = useState({});
// // //   const [leads, setLeads] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   const today = new Date().toISOString().split('T')[0];

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         // Fetch dashboard summary
// // //         const summaryRes = await axios.get('http://192.168.1.6:5000/api/dashboard/summary');
// // //         setSummary(summaryRes.data);

// // //         // Fetch all leads
// // //         const leadsRes = await axios.get('http://192.168.1.6:5000/api/leads');

// // //         // Filter today's leads
// // //         const todayLeads = leadsRes.data
// // //           .filter(lead => {
// // //             const leadDate = new Date(lead.date).toISOString().split('T')[0];
// // //             return leadDate === today;
// // //           })
// // //           .sort((a, b) => new Date(b.date) - new Date(a.date)) // recent first
// // //           .slice(0, 5); // only 5 leads

// // //         setLeads(todayLeads);
// // //         setLoading(false);
// // //       } catch (err) {
// // //         console.error('Error fetching dashboard data:', err);
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchData();
// // //   }, []);

// // //   if (loading) return <div className="text-center mt-5">Loading...</div>;

// // //   return (
// // //     <div className="container-fluid">
// // //       {/* Cards */}
// // //       <div className="row mt-4">
// // //         <Card
// // //           title="Total Leads"
// // //           value={summary.totalLeads || 0}
// // //           change="↑ 15.3%"
// // //           changeColor="bg-success text-white px-2"
// // //           extra="Compared to last week"
// // //         />
// // //         <Card
// // //           title="Total Uploads"
// // //           value={summary.totalUploads || 0}
// // //           change="↑ 9.8%"
// // //           changeColor="bg-primary text-white px-2"
// // //           extra="Files uploaded to system"
// // //         />
// // //         <Card
// // //           title="Today Leads"
// // //           value={summary.todayLeads || 0}
// // //           change="↓ 5.1%"
// // //           changeColor="bg-warning text-dark px-2"
// // //           extra="Leads captured today"
// // //         />
// // //         <Card
// // //           title="Today Uploads"
// // //           value={summary.todayUploads || 0}
// // //           change="↑ 2.7%"
// // //           changeColor="bg-info text-white px-2"
// // //           extra="Uploads made today"
// // //         />
// // //       </div>

// // //       {/* Placeholder for charts */}
// // //       <div className="row">
// // //         <div className="col-md-12">
// // //           <div className="card p-4 shadow-sm mb-4">
// // //             <h5>Unique Visitors</h5>
// // //             <p>[Chart Placeholder]</p>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Today's Leads Table */}
// // //       <div className="row">
// // //         <div className="col-md-12">
// // //           <div className="card p-4 shadow-sm">
// // //             <h5 className="mb-3">Today Leads</h5>
// // //             {leads.length === 0 ? (
// // //               <p>No leads for today.</p>
// // //             ) : (
// // //               <div className="table-responsive">
// // //                 <table className="table table-bordered table-striped">
// // //                   <thead className="thead-dark">
// // //                     <tr>
// // //                       <th>ID</th>
// // //                       <th>Name</th>
// // //                       <th>Number</th>
// // //                       <th>City</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {leads.map((lead, index) => (
// // //                       <tr key={lead._id || index}>
// // //                         <td>{lead._id}</td>
// // //                         <td>{lead.name}</td>
// // //                         <td>{lead.number}</td>
// // //                         <td>{lead.city}</td>
// // //                       </tr>
// // //                     ))}
// // //                   </tbody>
// // //                 </table>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import Card from './Card';

// // const Dashboard = () => {
// //   const [summary, setSummary] = useState({});
// //   const [leads, setLeads] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const today = new Date().toISOString().split('T')[0];

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Fetch summary data
// //         const summaryRes = await axios.get('http://192.168.1.6:5000/api/dashboard/summary');
// //         setSummary(summaryRes.data);

// //         // Fetch leads data
// //         const leadsRes = await axios.get('http://192.168.1.6:5000/api/leads');
// //         const allLeads = Array.isArray(leadsRes.data)
// //           ? leadsRes.data
// //           : leadsRes.data.leads || [];

// //         // Filter today's leads using createdAt
// //         const todayLeads = allLeads
// //           .filter(lead => {
// //             const leadDate = new Date(lead.createdAt).toISOString().split('T')[0];
// //             return leadDate === today;
// //           })
// //           .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // latest first
// //           .slice(0, 5); // only recent 5

// //         setLeads(todayLeads);
// //         setLoading(false);
// //       } catch (err) {
// //         console.error('Error fetching dashboard data:', err);
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   if (loading) return <div className="text-center mt-5">Loading...</div>;

// //   return (
// //     <div className="container-fluid">
// //       {/* Summary Cards */}
// //       <div className="row mt-4">
// //         <Card
// //           title="Total Leads"
// //           value={summary.totalLeads || 0}
// //           change="↑ 15.3%"
// //           changeColor="bg-success text-white px-2"
// //           extra="Compared to last week"
// //         />
// //         <Card
// //           title="Total Uploads"
// //           value={summary.totalUploads || 0}
// //           change="↑ 9.8%"
// //           changeColor="bg-primary text-white px-2"
// //           extra="Files uploaded to system"
// //         />
// //         <Card
// //           title="Today Leads"
// //           value={summary.todayLeads || 0}
// //           change="↓ 5.1%"
// //           changeColor="bg-warning text-dark px-2"
// //           extra="Leads captured today"
// //         />
// //         <Card
// //           title="Today Uploads"
// //           value={summary.todayUploads || 0}
// //           change="↑ 2.7%"
// //           changeColor="bg-info text-white px-2"
// //           extra="Uploads made today"
// //         />
// //       </div>

// //       {/* Placeholder for charts */}
// //       <div className="row">
// //         <div className="col-md-12">
// //           <div className="card p-4 shadow-sm mb-4">
// //             <h5>Unique Visitors</h5>
// //             <p>[Chart Placeholder]</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Today Leads Table */}
// //       <div className="row">
// //         <div className="col-md-12">
// //           <div className="card p-4 shadow-sm">
// //             <h5 className="mb-3">Today Leads</h5>
// //             {leads.length === 0 ? (
// //               <p>No leads for today.</p>
// //             ) : (
// //               <div className="table-responsive">
// //                 <table className="table table-bordered table-striped">
// //                   <thead className="thead-dark">
// //                     <tr>
// //                       <th className="text-center">ID</th>
// //                       <th>Name</th>
// //                       <th>Email</th>
// //                       <th>Phone</th>
// //                       <th>City</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {leads.map((lead, index) => (
// //                       <tr key={lead.id || index}>
// //                         <td className="text-center">{lead.id}</td>
// //                         <td style={{ maxWidth: '150px', wordBreak: 'break-word' }}>{lead.name}</td>
// //                         <td style={{ maxWidth: '180px', wordBreak: 'break-word' }}>{lead.email}</td>
// //                         <td>{lead.phone}</td>
// //                         <td>{lead.city}</td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;



// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import Card from './Card';

// // const Dashboard = () => {
// //   const [summary, setSummary] = useState({});
// //   const [recentLeads, setRecentLeads] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Fetch summary data
// //         const summaryRes = await axios.get('http://192.168.1.6:5000/api/dashboard/summary');
// //         setSummary(summaryRes.data);

// //         // Fetch today leads
// //         const leadsRes = await axios.get('http://192.168.1.6:5000/api/leads/today');
// //         setRecentLeads(leadsRes.data || []);

// //         setLoading(false);
// //       } catch (err) {
// //         console.error('Error fetching dashboard data:', err);
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   if (loading) return <div className="text-center mt-5">Loading...</div>;

// //   return (
// //     <div className="container-fluid">
// //       {/* Summary Cards */}
// //       <div className="row mt-4">
// //         <Card
// //           title="Total Leads"
// //           value={summary.totalLeads || 0}
// //           change="↑ 15.3%"
// //           changeColor="bg-success text-white px-2"
// //           extra="Compared to last week"
// //         />
// //         <Card
// //           title="Total Uploads"
// //           value={summary.totalUploads || 0}
// //           change="↑ 9.8%"
// //           changeColor="bg-primary text-white px-2"
// //           extra="Files uploaded to system"
// //         />
// //         <Card
// //           title="Today Leads"
// //           value={summary.todayLeads || 0}
// //           change="↓ 5.1%"
// //           changeColor="bg-warning text-dark px-2"
// //           extra="Leads captured today"
// //         />
// //         <Card
// //           title="Today Uploads"
// //           value={summary.todayUploads || 0}
// //           change="↑ 2.7%"
// //           changeColor="bg-info text-white px-2"
// //           extra="Uploads made today"
// //         />
// //       </div>

// //       {/* Today Leads Table */}
// //       <div className="row">
// //         <div className="col-md-12">
// //           <div className="card p-4 shadow-sm">
// //             <h5 className="mb-3">Today Leads</h5>
// //             <div className="table-responsive">
// //               <table className="table table-bordered table-striped">
// //                 <thead className="thead-dark">
// //                   <tr>
// //                     <th>Name</th>
// //                     <th>Email</th>
// //                     <th>Phone</th>
// //                     <th>Date & Time</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {recentLeads.length === 0 ? (
// //                     <tr>
// //                       <td colSpan="4" className="text-center text-muted">
// //                         No leads for today.
// //                       </td>
// //                     </tr>
// //                   ) : (
// //                     recentLeads.slice(0, 5).map((lead, index) => (
// //                       <tr key={index}>
// //                         <td style={{ maxWidth: '150px', wordBreak: 'break-word' }}>{lead.name}</td>
// //                         <td style={{ maxWidth: '180px', wordBreak: 'break-word' }}>{lead.email}</td>
// //                         <td>{lead.phone}</td>
// //                         <td>
// //                           {lead.datetime/* {new Date(lead.createdAt).toLocaleString('en-IN', {
// //                             dateStyle: 'short',
// //                             timeStyle: 'short',
// //                             hour12: true,
// //                           })} */}
// //                         </td>
// //                       </tr>
// //                     ))
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;









// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import Card from './Card';

// // const Dashboard = () => {
// //   const [summary, setSummary] = useState({});
// //   const [recentLeads, setRecentLeads] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Fetch dashboard summary
// //         const summaryRes = await axios.get('http://192.168.1.6:5000/api/dashboard/summary');
// //         setSummary(summaryRes.data);

// //         // Fetch today leads
// //         const leadsRes = await axios.get('http://192.168.1.6:5000/api/leads/today');
// //         setRecentLeads(leadsRes.data || []);

// //         setLoading(false);
// //       } catch (err) {
// //         console.error('Error fetching dashboard data:', err);
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   if (loading) return <div className="text-center mt-5">Loading...</div>;

// //   return (
// //     <div className="container-fluid">
// //       {/* Summary Cards */}
// //       <div className="row mt-4">
// //         <Card
// //           title="Total Leads"
// //           value={summary.totalLeads || 0}
// //           change="↑ 15.3%"
// //           changeColor="bg-success text-white px-2"
// //           extra="Compared to last week"
// //         />
// //         <Card
// //           title="Total Uploads"
// //           value={summary.totalUploads || 0}
// //           change="↑ 9.8%"
// //           changeColor="bg-primary text-white px-2"
// //           extra="Files uploaded to system"
// //         />
// //         <Card
// //           title="Today Leads"
// //           value={summary.todayLeads || 0}
// //           change="↓ 5.1%"
// //           changeColor="bg-warning text-dark px-2"
// //           extra="Leads captured today"
// //         />
// //         <Card
// //           title="Today Uploads"
// //           value={summary.todayUploads || 0}
// //           change="↑ 2.7%"
// //           changeColor="bg-info text-white px-2"
// //           extra="Uploads made today"
// //         />
// //       </div>

// //       {/* Today Leads Table */}
// //       <div className="row">
// //         <div className="col-md-12">
// //           <div className="card p-4 shadow-sm">
// //             <h5 className="mb-3">Today Leads</h5>
// //             <div className="table-responsive">
// //               <table className="table table-bordered table-striped">
// //                 <thead className="thead-dark">
// //                   <tr>
// //                     <th>Name</th>
// //                     <th>Phone</th>
// //                     <th>Email</th>
// //                     <th>Time</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {recentLeads.length === 0 ? (
// //                     <tr>
// //                       <td colSpan="4" className="text-center text-muted">
// //                         No leads for today.
// //                       </td>
// //                     </tr>
// //                   ) : (
// //                     recentLeads.map((lead, index) => (
// //                       <tr key={index}>
// //                         <td>{lead.name}</td>
// //                         <td>{lead.phone}</td>
// //                         <td>{lead.email}</td>
// //                         <td>
// //                           {lead.submitted_at
// //                             ? new Date(lead.submitted_at).toLocaleString('en-IN', {
// //                                 dateStyle: 'short',
// //                                 timeStyle: 'short',
// //                                 hour12: true,
// //                               })
// //                             : 'N/A'}
// //                         </td>
// //                       </tr>
// //                     ))
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import Card from './Card';
// // import {
// //   LineChart,
// //   Line,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// //   Legend,
// //   ResponsiveContainer,
// // } from 'recharts';

// // const Dashboard = () => {
// //   const [summary, setSummary] = useState({});
// //   const [recentLeads, setRecentLeads] = useState([]);
// //   const [hourlyLeads, setHourlyLeads] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const summaryRes = await axios.get('http://192.168.1.6:5000/api/dashboard/summary');
// //         setSummary(summaryRes.data);

// //         const leadsRes = await axios.get('http://192.168.1.6:5000/api/leads/today');
// //         setRecentLeads(leadsRes.data || []);

// //         const hourlyRes = await axios.get('http://192.168.1.6:5000/api/leads/todays-leads-hourly');
// //         setHourlyLeads(hourlyRes.data || []);

// //         setLoading(false);
// //       } catch (err) {
// //         console.error('Error fetching dashboard data:', err);
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   if (loading) return <div className="text-center mt-5">Loading...</div>;

// //   return (
// //     <div className="container-fluid">
// //       {/* Summary Cards */}
// //       <div className="row mt-4">
// //         <Card title="Total Leads" value={summary.totalLeads || 0} change="↑ 15.3%" changeColor="bg-success text-white px-2" extra="Compared to last week" />
// //         <Card title="Total Uploads" value={summary.totalUploads || 0} change="↑ 9.8%" changeColor="bg-primary text-white px-2" extra="Files uploaded to system" />
// //         <Card title="Today Leads" value={summary.todayLeads || 0} change="↓ 5.1%" changeColor="bg-warning text-dark px-2" extra="Leads captured today" />
// //         <Card title="Today Uploads" value={summary.todayUploads || 0} change="↑ 2.7%" changeColor="bg-info text-white px-2" extra="Uploads made today" />
// //       </div>

// //       {/* Hourly Leads Graph */}
// //       <div className="row my-4">
// //         <div className="col-md-12">
// //           <div className="card shadow-sm p-4">
// //             <h5 className="text-center mb-4">Today's Leads - Hourly</h5>
// //             <div style={{ height: '300px' }}>
// //               <ResponsiveContainer width="100%" height="100%">
// //                 <LineChart data={hourlyLeads} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
// //                   <CartesianGrid strokeDasharray="3 3" />
// //                   <XAxis dataKey="hour" label={{ value: 'Hour', position: 'insideBottomRight', offset: -5 }} />
// //                   <YAxis />
// //                   <Tooltip />
// //                   <Legend />
// //                   <Line
// //                     type="monotone"
// //                     dataKey="count"
// //                     stroke="#4A90E2"
// //                     strokeWidth={3}
// //                     dot={{ r: 4 }}
// //                     activeDot={{ r: 6 }}
// //                     name="Leads"
// //                   />
// //                 </LineChart>
// //               </ResponsiveContainer>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Today Leads Table */}
// //       <div className="row">
// //         <div className="col-md-12">
// //           <div className="card p-4 shadow-sm">
// //             <h5 className="mb-3">Today Leads</h5>
// //             <div className="table-responsive">
// //               <table className="table table-bordered table-striped">
// //                 <thead className="thead-dark">
// //                   <tr>
// //                     <th>Name</th>
// //                     <th>Phone</th>
// //                     <th>Email</th>
// //                     <th>Time</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {recentLeads.length === 0 ? (
// //                     <tr>
// //                       <td colSpan="4" className="text-center text-muted">
// //                         No leads for today.
// //                       </td>
// //                     </tr>
// //                   ) : (
// //                     recentLeads.map((lead, index) => (
// //                       <tr key={index}>
// //                         <td>{lead.name}</td>
// //                         <td>{lead.phone}</td>
// //                         <td>{lead.email}</td>
// //                         <td>
// //                           {lead.submitted_at
// //                             ? new Date(lead.submitted_at).toLocaleString('en-IN', {
// //                                 dateStyle: 'short',
// //                                 timeStyle: 'short',
// //                                 hour12: true,
// //                               })
// //                             : 'N/A'}
// //                         </td>
// //                       </tr>
// //                     ))
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Card from './Card';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';

// const Dashboard = () => {
//   const [summary, setSummary] = useState({});
//   const [recentLeads, setRecentLeads] = useState([]);
//   const [hourlyLeads, setHourlyLeads] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const summaryRes = await axios.get('http://192.168.1.6:5000/api/dashboard/summary');
//         setSummary(summaryRes.data);

//         const leadsRes = await axios.get('http://192.168.1.6:5000/api/leads/today');
//         setRecentLeads(leadsRes.data || []);

//         const hourlyRes = await axios.get('http://192.168.1.6:5000/api/leads/todays-leads-hourly');
//         setHourlyLeads(hourlyRes.data || []);

//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching dashboard data:', err);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div className="text-center mt-5">Loading...</div>;

//   return (
//     <div className="container-fluid">
//       {/* Summary Cards */}
//       <div className="row mt-4">
//         <Card title="Total Leads" value={summary.totalLeads || 0} change="↑ 15.3%" changeColor="bg-success text-white px-2" extra="Compared to last week" />
//         <Card title="Total Uploads" value={summary.totalUploads || 0} change="↑ 9.8%" changeColor="bg-primary text-white px-2" extra="Files uploaded to system" />
//         <Card title="Today Leads" value={summary.todayLeads || 0} change="↓ 5.1%" changeColor="bg-warning text-dark px-2" extra="Leads captured today" />
//         <Card title="Today Uploads" value={summary.todayUploads || 0} change="↑ 2.7%" changeColor="bg-info text-white px-2" extra="Uploads made today" />
//       </div>

//       {/* Hourly Leads Graph */}
//       <div className="row my-4">
//         <div className="col-md-12">
//           <div className="card shadow-sm p-4">
//             <h5 className="text-center mb-4">Today's Leads - Hourly</h5>
//             <div style={{ height: '300px' }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={hourlyLeads} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis
//                     dataKey="hour"
//                     tickFormatter={(hour) => {
//                       const hr = parseInt(hour, 10);
//                       const suffix = hr >= 12 ? 'PM' : 'AM';
//                       const formatted =
//                         hr === 0 ? '12 AM' :
//                         hr === 12 ? '12 PM' :
//                         `${(hr % 12).toString().padStart(2, '0')} ${suffix}`;
//                       return formatted;
//                     }}
//                     label={{ value: 'Hour', position: 'insideBottomRight', offset: -5 }}
//                   />
//                   <YAxis allowDecimals={false} />
//                   <Tooltip
//                     labelFormatter={(label) => `Hour: ${label}`}
//                     formatter={(value) => [`${value} leads`, 'Leads']}
//                   />
//                   <Legend />
//                   <Line
//                     type="monotone"
//                     dataKey="count"
//                     stroke="#4A90E2"
//                     strokeWidth={3}
//                     dot={{ r: 4 }}
//                     activeDot={{ r: 6 }}
//                     name="Leads"
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Today Leads Table */}
//       <div className="row">
//         <div className="col-md-12">
//           <div className="card p-4 shadow-sm">
//             <h5 className="mb-3">Today Leads</h5>
//             <div className="table-responsive">
//               <table className="table table-bordered table-striped">
//                 <thead className="thead-dark">
//                   <tr>
//                     <th>Name</th>
//                     <th>Phone</th>
//                     <th>Email</th>
//                     <th>Time</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {recentLeads.length === 0 ? (
//                     <tr>
//                       <td colSpan="4" className="text-center text-muted">
//                         No leads for today.
//                       </td>
//                     </tr>
//                   ) : (
//                     recentLeads.map((lead, index) => (
//                       <tr key={index}>
//                         <td>{lead.name}</td>
//                         <td>{lead.phone}</td>
//                         <td>{lead.email}</td>
//                         <td>
//                           {lead.submitted_at
//                             ? new Date(lead.submitted_at).toLocaleString('en-IN', {
//                                 dateStyle: 'short',
//                                 timeStyle: 'short',
//                                 hour12: true,
//                               })
//                             : 'N/A'}
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

const Dashboard = () => {
  const [summary, setSummary] = useState({});
  const [todayLeads, setTodayLeads] = useState([]);
  const [todayArogya, setTodayArogya] = useState([]);
  const [todayMessages, setTodayMessages] = useState([]);
  const [hourlyLeads, setHourlyLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const token=localStorage.getItem('token')
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Summary
        const summaryRes = await axios.get('https://last-2-ltig.onrender.com/api/admin/summary',{
          method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        });
        setSummary(summaryRes.data);

        // Today Leads
        const leadsRes = await axios.get('https://last-2-ltig.onrender.com/api/admin/leads/today',{
          method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        });
        setTodayLeads(leadsRes.data || []);

        // Today Arogya Applications
        const arogyaRes = await axios.get('https://last-2-ltig.onrender.com/api/admin/arogya/today',{
          method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        });
        setTodayArogya(arogyaRes.data || []);

        // Today Contact Messages
        const messagesRes = await axios.get('https://last-2-ltig.onrender.com/api/admin/messages/today',{
          method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        });
        setTodayMessages(messagesRes.data || []);

        // Hourly Leads
        const hourlyRes = await axios.get('https://last-2-ltig.onrender.com/api/admin/leads/todays-leads-hourly',{
          method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        });
        setHourlyLeads(hourlyRes.data || []);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container-fluid px-2 px-md-4">
      {/* Summary Cards */}
      <div className="row mt-4">
        <Card title="Total Kendra" value={summary.totalKendra || 0} change="↑ 15.3%" changeColor="bg-success text-white px-2" extra="Kendra Across India" />
        <Card title="Total Employee" value={summary.totalEmployees || 0} change="↑ 9.8%" changeColor="bg-primary text-white px-2" extra="Employees in system" />
        <Card title="Today Leads" value={summary.todayLeads || 0} change="↓ 5.1%" changeColor="bg-warning text-dark px-2" extra="Leads captured today" />
        <Card title="Today Arogya Card" value={summary.todayArogyaUploads || 0} change="↑ 2.7%" changeColor="bg-info text-white px-2" extra="Uploads made today" />
        <Card title="Today Messages" value={summary.todayMessages || 0} change="↑ 1.2%" changeColor="bg-secondary text-white px-2" extra="Messages received today" />
      </div>

      {/* Dual Chart Section */}
      <div className="row my-4">
        {/* Line Chart */}
        <div className="col-12 col-md-6 mb-4">
          <div className="card shadow-sm p-3 h-100">
            <h6 className="text-center mb-3">Today's Leads - Hourly (Line)</h6>
            <div style={{ height: '250px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hourlyLeads}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="hour"
                    tickFormatter={(hour) => {
                      const hr = parseInt(hour, 10);
                      const suffix = hr >= 12 ? 'PM' : 'AM';
                      const formatted =
                        hr === 0 ? '12 AM' :
                        hr === 12 ? '12 PM' :
                        `${(hr % 12).toString().padStart(2, '0')} ${suffix}`;
                      return formatted;
                    }}
                  />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="count" stroke="#4A90E2" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Leads" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="col-12 col-md-6 mb-4">
          <div className="card shadow-sm p-3 h-100">
            <h6 className="text-center mb-3">Today's Leads - Hourly (Bar)</h6>
            <div style={{ height: '250px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hourlyLeads}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="hour"
                    tickFormatter={(hour) => {
                      const hr = parseInt(hour, 10);
                      const suffix = hr >= 12 ? 'PM' : 'AM';
                      const formatted =
                        hr === 0 ? '12 AM' :
                        hr === 12 ? '12 PM' :
                        `${(hr % 12).toString().padStart(2, '0')} ${suffix}`;
                      return formatted;
                    }}
                  />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" name="Leads" fill="#4A90E2" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Today Leads Table */}
      <div className="row">
        <div className="col-12">
          <div className="card px-2 px-md-4 py-3 shadow-sm">
            <h5 className="mb-3 text-center text-md-start">Today Leads (JanArogyaApply)</h5>
            <div className="table-responsive">
              <table className="table table-bordered table-striped table-sm mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {todayLeads.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center text-muted">No leads for today.</td>
                    </tr>
                  ) : (
                    todayLeads.map((lead, index) => (
                      <tr key={index}>
                        <td>{lead.name}</td>
                        <td>{lead.phone}</td>
                        <td>{lead.email}</td>
                        <td>{lead.createdAt ? new Date(lead.createdAt).toLocaleString('en-IN', { hour12: true }) : 'N/A'}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Today Arogya Applications Table */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card px-2 px-md-4 py-3 shadow-sm">
            <h5 className="mb-3 text-center text-md-start">Today Arogya Applications</h5>
            <div className="table-responsive">
              <table className="table table-bordered table-striped table-sm mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {todayArogya.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center text-muted">No applications for today.</td>
                    </tr>
                  ) : (
                    todayArogya.map((app, index) => (
                      <tr key={index}>
                        <td>{app.name}</td>
                        <td>{app.mobile}</td>
                        <td>{app.email}</td>
                        <td>{app.status}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Today Contact Messages Table */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card px-2 px-md-4 py-3 shadow-sm">
            <h5 className="mb-3 text-center text-md-start">Today Contact Messages</h5>
            <div className="table-responsive">
              <table className="table table-bordered table-striped table-sm mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {todayMessages.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center text-muted">No messages for today.</td>
                    </tr>
                  ) : (
                    todayMessages.map((msg, index) => (
                      <tr key={index}>
                        <td>{msg.name}</td>
                        <td>{msg.phone}</td>
                        <td>{msg.email}</td>
                        <td>{msg.message}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;


