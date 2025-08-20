import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Finalpage = () => {
  const navigate = useNavigate();
  const [ads, setAds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const adsPerPage = 5;

  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {
      const res = await axios.get('http://192.168.1.6:5000/api/uploads');
      const cleanedAds = res.data
        .filter(ad => ad.title && ad.description && ad.file_path)
        .map(ad => ({
          ...ad,
          id: ad.id,
          name: ad.title,
          media: `http://192.168.1.6:5000/${ad.file_path}`,
          mediaType: ad.file_type,
          addedAt: ad.uploaded_at || 'N/A',
          status: ad.status || 'Active'
        }));
      setAds(cleanedAds);
    } catch (err) {
      console.error('Error fetching ads:', err);
    }
  };

  const handleToggleStatus = (index) => {
    const updatedAds = [...ads];
    updatedAds[index].status =
      updatedAds[index].status === 'Active' ? 'Inactive' : 'Active';
    setAds(updatedAds);
  };

  const filteredAds = ads.filter(
    (ad) =>
      ad.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ad.id?.toString().includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredAds.length / adsPerPage);
  const startIndex = (currentPage - 1) * adsPerPage;
  const currentAds = filteredAds.slice(startIndex, startIndex + adsPerPage);

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Final Ads Page</h2>
        <button className="btn btn-primary" onClick={() => navigate('/adds')}>
          Back to Add Page
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by Name or ID"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
      />

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-bordered align-middle text-center">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Media</th>
              <th>Description</th>
              <th>Date & Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentAds.length === 0 ? (
              <tr>
                <td colSpan="6">No ads found</td>
              </tr>
            ) : (
              currentAds.map((ad, index) => (
                <tr key={ad.id}>
                  <td>{ad.id}</td>
                  <td>{ad.name}</td>
                  <td>
                    <div style={{ height: '120px', overflow: 'hidden' }}>
                      {ad.mediaType === 'image' ? (
                        <img
                          src={ad.media}
                          alt="media"
                          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                        />
                      ) : (
                        <video
                          controls
                          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                        >
                          <source src={ad.media} />
                        </video>
                      )}
                    </div>
                  </td>
                  <td>{ad.description}</td>
                  <td>{ad.addedAt}</td>
                  <td>
                    <button
                      className={`btn btn-sm ${
                        ad.status === 'Active' ? 'btn-success' : 'btn-secondary'
                      }`}
                      onClick={() =>
                        handleToggleStatus(ads.findIndex((a) => a.id === ad.id))
                      }
                    >
                      {ad.status}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="mt-3">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage((p) => p - 1)}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 && 'active'}`}
              >
                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage((p) => p + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Finalpage;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Finalpage = () => {
//   const navigate = useNavigate();
//   const [ads, setAds] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const adsPerPage = 5;

//   useEffect(() => {
//     const storedAds = localStorage.getItem('my-ads');
//     if (storedAds) {
//       const parsed = JSON.parse(storedAds);
//       const now = new Date().toLocaleString();

//       // Fix old ads missing fields
//       const cleaned = parsed
//         .filter(ad => ad.name && ad.description && ad.media)
//         .map(ad => ({
//           ...ad,
//           addedAt: ad.addedAt || now,
//           status: ad.status || 'Active'
//         }));

//       setAds(cleaned);
//       localStorage.setItem('my-ads', JSON.stringify(cleaned));
//     }
//   }, []);

//   const handleToggleStatus = (index) => {
//     const updatedAds = [...ads];
//     updatedAds[index].status =
//       updatedAds[index].status === 'Active' ? 'Inactive' : 'Active';
//     setAds(updatedAds);
//     localStorage.setItem('my-ads', JSON.stringify(updatedAds));
//   };

//   const filteredAds = ads.filter(
//     (ad) =>
//       ad.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       ad.id?.toString().includes(searchTerm)
//   );

//   const totalPages = Math.ceil(filteredAds.length / adsPerPage);
//   const startIndex = (currentPage - 1) * adsPerPage;
//   const currentAds = filteredAds.slice(startIndex, startIndex + adsPerPage);

//   return (
//     <div className="container mt-4">
//       {/* Header */}
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h2>Final Ads Page</h2>
//         <button className="btn btn-primary" onClick={() => navigate('/adds')}>
//           Back to Add Page
//         </button>
//       </div>

//       {/* Search */}
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search by Name or ID"
//         value={searchTerm}
//         onChange={(e) => {
//           setSearchTerm(e.target.value);
//           setCurrentPage(1);
//         }}
//       />

//       {/* Table */}
//       <div className="table-responsive">
//         <table className="table table-bordered align-middle text-center">
//           <thead className="table-dark">
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Media</th>
//               <th>Description</th>
//               <th>Date & Time</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentAds.length === 0 ? (
//               <tr>
//                 <td colSpan="6">No ads found</td>
//               </tr>
//             ) : (
//               currentAds.map((ad, index) => (
//                 <tr key={ad.id}>
//                   <td>{ad.id}</td>
//                   <td>{ad.name}</td>
//                   <td>
//                     <div style={{ height: '120px', overflow: 'hidden' }}>
//                       {ad.mediaType === 'image' ? (
//                         <img
//                           src={ad.media}
//                           alt="media"
//                           style={{ height: '100%', width: '100%', objectFit: 'cover' }}
//                         />
//                       ) : (
//                         <video
//                           controls
//                           style={{ height: '100%', width: '100%', objectFit: 'cover' }}
//                         >
//                           <source src={ad.media} />
//                         </video>
//                       )}
//                     </div>
//                   </td>
//                   <td>{ad.description}</td>
//                   <td>{ad.addedAt || 'N/A'}</td>
//                   <td>
//                     <button
//                       className={`btn btn-sm ${
//                         ad.status === 'Active' ? 'btn-success' : 'btn-secondary'
//                       }`}
//                       onClick={() =>
//                         handleToggleStatus(ads.findIndex((a) => a.id === ad.id))
//                       }
//                     >
//                       {ad.status}
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <nav className="mt-3">
//           <ul className="pagination justify-content-center">
//             <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
//               <button
//                 className="page-link"
//                 onClick={() => setCurrentPage((p) => p - 1)}
//               >
//                 Previous
//               </button>
//             </li>
//             {Array.from({ length: totalPages }, (_, i) => (
//               <li
//                 key={i}
//                 className={`page-item ${currentPage === i + 1 && 'active'}`}
//               >
//                 <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
//                   {i + 1}
//                 </button>
//               </li>
//             ))}
//             <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
//               <button
//                 className="page-link"
//                 onClick={() => setCurrentPage((p) => p + 1)}
//               >
//                 Next
//               </button>
//             </li>
//           </ul>
//         </nav>
//       )}
//       <button className="btn btn-info ms-2" onClick={() => navigate('/active-ads')}>
//   View Active Ads
// </button>

//     </div>
//   );
// };

// export default Finalpage;
