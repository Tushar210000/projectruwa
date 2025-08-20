

// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Adds = () => {
// //   const navigate = useNavigate();
// //   const [showForm, setShowForm] = useState(false);
// //   const [media, setMedia] = useState(null);
// //   const [name, setName] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [error, setError] = useState('');
// //   const [ads, setAds] = useState([]);
// //   const [editIndex, setEditIndex] = useState(null);

// //   useEffect(() => {
// //     const storedAds = localStorage.getItem('my-ads');
// //     if (storedAds) setAds(JSON.parse(storedAds));
// //   }, []);

// //   useEffect(() => {
// //     localStorage.setItem('my-ads', JSON.stringify(ads));
// //   }, [ads]);

// //   const handleMediaChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file && file.size > 10 * 1024 * 1024) {
// //       setError('File size must be less than 10MB');
// //       setMedia(null);
// //     } else {
// //       setError('');
// //       setMedia(file);
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!name || !description || (!media && editIndex === null)) {
// //       setError('All fields are required');
// //       return;
// //     }

// //     const mediaURL = media ? URL.createObjectURL(media) : ads[editIndex]?.media;
// //     const mediaType = media
// //       ? media.type.startsWith('video') ? 'video' : 'image'
// //       : ads[editIndex]?.mediaType;

// //     const currentTime = new Date().toLocaleString();

// //     const newAd = {
// //       id: editIndex !== null ? ads[editIndex].id : Date.now(),
// //       name,
// //       media: mediaURL,
// //       mediaType,
// //       description,
// //       addedAt: editIndex !== null ? ads[editIndex].addedAt : currentTime,
// //       status: editIndex !== null ? ads[editIndex].status : 'Active'
// //     };

// //     if (editIndex !== null) {
// //       const updatedAds = [...ads];
// //       updatedAds[editIndex] = newAd;
// //       setAds(updatedAds);
// //       setEditIndex(null);
// //     } else {
// //       setAds([...ads, newAd]);
// //     }

// //     setShowForm(false);
// //     setMedia(null);
// //     setName('');
// //     setDescription('');
// //     setError('');
// //   };

// //   const handleEdit = (index) => {
// //     const ad = ads[index];
// //     setName(ad.name);
// //     setDescription(ad.description);
// //     setMedia(null);
// //     setEditIndex(index);
// //     setShowForm(true);
// //   };

// //   const handleDelete = (index) => {
// //     const updatedAds = ads.filter((_, i) => i !== index);
// //     setAds(updatedAds);
// //   };

// //   return (
// //     <div className="container mt-4">
// //       {/* Breadcrumb */}
// //       <nav aria-label="breadcrumb">
// //         <ol className="breadcrumb">
// //           <li className="breadcrumb-item">Home</li>
// //           <li className="breadcrumb-item active" aria-current="page">Adds</li>
// //         </ol>
// //       </nav>

// //       {/* Heading & View Final Ads Button */}
// //       <div className="d-flex justify-content-between align-items-center mb-3">
// //         <h2 className="page-title">Uploads and update your adds here</h2>
// //         <button className="btn btn-outline-info" onClick={() => navigate('/final-ads')}>
// //           View Final Ads
// //         </button>
// //       </div>

// //       {/* Upload Button */}
// //       <button
// //         className="btn btn-primary upload-btn mb-3"
// //         onClick={() => {
// //           setShowForm(true);
// //           setEditIndex(null);
// //           setMedia(null);
// //           setName('');
// //           setDescription('');
// //         }}
// //       >
// //         Upload Add
// //       </button>

// //       {/* Upload Form */}
// //       {showForm && (
// //         <div className="card form-card mb-4">
// //           <form onSubmit={handleSubmit}>
// //             <div className="mb-3">
// //               <label className="form-label">Name</label>
// //               <input
// //                 type="text"
// //                 className="form-control"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label">Upload Image or Video (Max: 10MB)</label>
// //               <input
// //                 type="file"
// //                 className="form-control"
// //                 accept="image/*,video/*"
// //                 onChange={handleMediaChange}
// //               />
// //               {editIndex !== null && (
// //                 <small className="text-muted">Leave blank to keep existing media</small>
// //               )}
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label">Description</label>
// //               <textarea
// //                 className="form-control"
// //                 rows="3"
// //                 value={description}
// //                 onChange={(e) => setDescription(e.target.value)}
// //                 required
// //               ></textarea>
// //             </div>

// //             {error && <div className="alert alert-danger">{error}</div>}

// //             <button type="submit" className="btn btn-success">
// //               {editIndex !== null ? 'Update Ad' : 'Submit'}
// //             </button>
// //             <button
// //               type="button"
// //               className="btn btn-secondary ms-2"
// //               onClick={() => {
// //                 setShowForm(false);
// //                 setEditIndex(null);
// //                 setMedia(null);
// //                 setName('');
// //                 setDescription('');
// //               }}
// //             >
// //               Cancel
// //             </button>
// //           </form>
// //         </div>
// //       )}

// //       {/* Display Ads */}
// //       <div className="row">
// //         {ads.map((ad, index) => (
// //           <div className="col-md-4 col-sm-6 col-12 mb-4" key={ad.id}>
// //             <div className="card ad-card">
// //               <div style={{ height: '200px', overflow: 'hidden' }}>
// //                 {ad.mediaType === 'image' ? (
// //                   <img
// //                     src={ad.media}
// //                     alt="Ad"
// //                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
// //                   />
// //                 ) : (
// //                   <video controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
// //                     <source src={ad.media} />
// //                   </video>
// //                 )}
// //               </div>
// //               <div className="card-body">
// //                 <h5>{ad.name}</h5>
// //                 <p className="card-text">{ad.description}</p>
// //                 <button className="btn btn-warning me-2" onClick={() => handleEdit(index)}>
// //                   Edit
// //                 </button>
// //                 <button className="btn btn-danger" onClick={() => handleDelete(index)}>
// //                   Delete
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Adds;



// // import React, { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Adds = () => {
// //   const navigate = useNavigate();
// //   const [showForm, setShowForm] = useState(false);
// //   const [media, setMedia] = useState(null);
// //   const [name, setName] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [error, setError] = useState('');
// //   const [ads, setAds] = useState([]);
// //   const [editIndex, setEditIndex] = useState(null);

// //   useEffect(() => {
// //     const fetchAds = async () => {
// //       try {
// //         const token = localStorage.getItem('token');
// //         const res = await fetch('http://192.168.1.6:5000/api/api/ads', {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });
// //         if (!res.ok) throw new Error('Failed to fetch ads');
// //         const data = await res.json();
// //         setAds(data);
// //       } catch (err) {
// //         console.error('Error fetching ads:', err);
// //       }
// //     };
// //     fetchAds();
// //   }, []);

// //   const handleMediaChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file && file.size > 10 * 1024 * 1024) {
// //       setError('File size must be less than 10MB');
// //       setMedia(null);
// //     } else {
// //       setError('');
// //       setMedia(file);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!name || !description || (!media && editIndex === null)) {
// //       setError('All fields are required');
// //       return;
// //     }

// //     try {
// //       const token = localStorage.getItem('token');
// //       let uploadedFilePath = '';
// //       let mediaType = '';
// //       let uploadedAt = new Date().toISOString();

// //       if (media) {
// //         const formData = new FormData();
// //         formData.append('file', media);

// //         const uploadRes = await fetch('http://192.168.1.6:5000/api/uploads', {
// //           method: 'POST',
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //           body: formData,
// //         });

// //         if (!uploadRes.ok) {
// //           const errorText = await uploadRes.text();
// //           console.error('Upload failed:', errorText);
// //           alert(`Upload failed (${uploadRes.status}): ${errorText}`);
// //           throw new Error('Failed to upload media');
// //         }

// //         const uploadData = await uploadRes.json();
// //         uploadedFilePath = uploadData.file_path || null;
// //         mediaType = uploadData.file_type || null;
// //         uploadedAt = uploadData.uploaded_at || new Date().toISOString();
// //       } else if (editIndex !== null) {
// //         uploadedFilePath = ads[editIndex].media || null;
// //         mediaType = ads[editIndex].mediaType || null;
// //         uploadedAt = ads[editIndex].addedAt || new Date().toISOString();
// //       }

// //       const newAd = {
// //         id: editIndex !== null ? ads[editIndex].id : Date.now(),
// //         name: name || null,
// //         description: description || null,
// //         media: uploadedFilePath,
// //         mediaType: mediaType,
// //         addedAt: uploadedAt,
// //         status: editIndex !== null ? ads[editIndex].status : 'Active',
// //       };

// //       await fetch('http://192.168.1.6:5000/api/ads', {
// //         method: editIndex !== null ? 'PUT' : 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           Authorization: `Bearer ${token}`,
// //         },
// //         body: JSON.stringify(newAd),
// //       });

// //       if (editIndex !== null) {
// //         const updatedAds = [...ads];
// //         updatedAds[editIndex] = newAd;
// //         setAds(updatedAds);
// //         setEditIndex(null);
// //       } else {
// //         setAds([...ads, newAd]);
// //       }

// //       setShowForm(false);
// //       setMedia(null);
// //       setName('');
// //       setDescription('');
// //       setError('');
// //     } catch (err) {
// //       console.error('Error submitting ad:', err);
// //       setError('Something went wrong. Please try again.');
// //     }
// //   };

// //   const handleEdit = (index) => {
// //     const ad = ads[index];
// //     setName(ad.name);
// //     setDescription(ad.description);
// //     setMedia(null);
// //     setEditIndex(index);
// //     setShowForm(true);
// //   };

// //   const handleDelete = (index) => {
// //     const updatedAds = ads.filter((_, i) => i !== index);
// //     setAds(updatedAds);
// //   };

// //   return (
// //     <div className="container mt-4">
// //       <nav aria-label="breadcrumb">
// //         <ol className="breadcrumb">
// //           <li className="breadcrumb-item">Home</li>
// //           <li className="breadcrumb-item active" aria-current="page">Adds</li>
// //         </ol>
// //       </nav>

// //       <div className="d-flex justify-content-between align-items-center mb-3">
// //         <h2 className="page-title">Uploads and update your adds here</h2>
// //         <button className="btn btn-outline-info" onClick={() => navigate('/final-ads')}>
// //           View Final Ads
// //         </button>
// //       </div>

// //       <button
// //         className="btn btn-primary upload-btn mb-3"
// //         onClick={() => {
// //           setShowForm(true);
// //           setEditIndex(null);
// //           setMedia(null);
// //           setName('');
// //           setDescription('');
// //         }}
// //       >
// //         Upload Add
// //       </button>

// //       {showForm && (
// //         <div className="card form-card mb-4">
// //           <form onSubmit={handleSubmit}>
// //             <div className="mb-3">
// //               <label className="form-label">Name</label>
// //               <input
// //                 type="text"
// //                 className="form-control"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label">Upload Image or Video (Max: 10MB)</label>
// //               <input
// //                 type="file"
// //                 className="form-control"
// //                 accept="image/*,video/*"
// //                 onChange={handleMediaChange}
// //               />
// //               {editIndex !== null && (
// //                 <small className="text-muted">Leave blank to keep existing media</small>
// //               )}
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label">Description</label>
// //               <textarea
// //                 className="form-control"
// //                 rows="3"
// //                 value={description}
// //                 onChange={(e) => setDescription(e.target.value)}
// //                 required
// //               ></textarea>
// //             </div>

// //             {error && <div className="alert alert-danger">{error}</div>}

// //             <button type="submit" className="btn btn-success">
// //               {editIndex !== null ? 'Update Ad' : 'Submit'}
// //             </button>
// //             <button
// //               type="button"
// //               className="btn btn-secondary ms-2"
// //               onClick={() => {
// //                 setShowForm(false);
// //                 setEditIndex(null);
// //                 setMedia(null);
// //                 setName('');
// //                 setDescription('');
// //               }}
// //             >
// //               Cancel
// //             </button>
// //           </form>
// //         </div>
// //       )}

// //       <div className="row">
// //         {ads.map((ad, index) => (
// //           <div className="col-md-4 col-sm-6 col-12 mb-4" key={ad.id}>
// //             <div className="card ad-card">
// //               <div style={{ height: '200px', overflow: 'hidden' }}>
// //                 {ad.mediaType === 'image' ? (
// //                   <img
// //                     src={`http://192.168.1.6:5000/${ad.media.replace(/\\/g, '/')}`}
// //                     alt="Ad"
// //                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
// //                   />
// //                 ) : (
// //                   <video controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
// //                     <source src={`http://192.168.1.6:5000/${ad.media.replace(/\\/g, '/')}`} />
// //                   </video>
// //                 )}
// //               </div>
// //               <div className="card-body">
// //                 <h5>{ad.name}</h5>
// //                 <p className="card-text">{ad.description}</p>
// //                 <button className="btn btn-warning me-2" onClick={() => handleEdit(index)}>
// //                   Edit
// //                 </button>
// //                 <button className="btn btn-danger" onClick={() => handleDelete(index)}>
// //                   Delete
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Adds;


// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const API_BASE = 'http://192.168.1.6:5000/api/uploads';

// // const Adds = () => {
// //   const [showForm, setShowForm] = useState(false);
// //   const [media, setMedia] = useState(null);
// //   const [name, setName] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [error, setError] = useState('');
// //   const [ads, setAds] = useState([]);
// //   const [editId, setEditId] = useState(null);

// //   useEffect(() => {
// //     fetchAds();
// //   }, []);

// //   const fetchAds = async () => {
// //     try {
// //       const res = await axios.get(API_BASE);
// //       setAds(res.data);
// //     } catch (err) {
// //       console.error('Error fetching ads:', err);
// //     }
// //   };

// //   const handleMediaChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file && file.size > 10 * 1024 * 1024) {
// //       setError('File size must be less than 10MB');
// //       setMedia(null);
// //     } else {
// //       setError('');
// //       setMedia(file);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!name || !description || (!media && !editId)) {
// //       setError('All fields are required');
// //       return;
// //     }

// //     const formData = new FormData();
// //     if (media) formData.append('file', media);
// //     formData.append('name', name);
// //     formData.append('description', description);

// //     try {
// //       if (editId) {
// //         await axios.put(`${API_BASE}/replace/${editId}`, formData, {
// //           headers: { 'Content-Type': 'multipart/form-data' },
// //         });
// //       } else {
// //         await axios.post(API_BASE, formData, {
// //           headers: { 'Content-Type': 'multipart/form-data' },
// //         });
// //       }
// //       resetForm();
// //       fetchAds();
// //     } catch (err) {
// //       setError('Upload failed. Please try again.');
// //       console.error(err);
// //     }
// //   };

// //   const handleEdit = (ad) => {
// //     setName(ad.title || ad.name);
// //     setDescription(ad.description || '');
// //     setMedia(null); // keep old media unless new is selected
// //     setEditId(ad.id);
// //     setShowForm(true);
// //   };

// //   const handleDelete = async (id) => {
// //     try {
// //       await axios.delete(`${API_BASE}/${id}`);
// //       fetchAds();
// //     } catch (err) {
// //       console.error('Delete failed:', err);
// //     }
// //   };

// //   const resetForm = () => {
// //     setShowForm(false);
// //     setName('');
// //     setDescription('');
// //     setMedia(null);
// //     setError('');
// //     setEditId(null);
// //   };

// //   return (
// //     <div className="container mt-4">
// //       <nav aria-label="breadcrumb">
// //         <ol className="breadcrumb">
// //           <li className="breadcrumb-item">Home</li>
// //           <li className="breadcrumb-item active" aria-current="page">Adds</li>
// //         </ol>
// //       </nav>

// //       <h2 className="page-title mb-3">Uploads and update your adds here</h2>

// //       <button
// //         className="btn btn-primary mb-3"
// //         onClick={() => {
// //           setShowForm(true);
// //           setEditId(null);
// //           setMedia(null);
// //           setName('');
// //           setDescription('');
// //         }}
// //       >
// //         Upload Add
// //       </button>

// //       {showForm && (
// //         <div className="card form-card mb-4">
// //           <form onSubmit={handleSubmit}>
// //             <div className="mb-3">
// //               <label className="form-label">Name</label>
// //               <input
// //                 type="text"
// //                 className="form-control"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label">Upload Image or Video (Max: 10MB)</label>
// //               <input
// //                 type="file"
// //                 className="form-control"
// //                 accept="image/*,video/*"
// //                 onChange={handleMediaChange}
// //               />
// //               {editId && (
// //                 <small className="text-muted">Leave blank to keep existing media</small>
// //               )}
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label">Description</label>
// //               <textarea
// //                 className="form-control"
// //                 rows="3"
// //                 value={description}
// //                 onChange={(e) => setDescription(e.target.value)}
// //                 required
// //               ></textarea>
// //             </div>

// //             {error && <div className="alert alert-danger">{error}</div>}

// //             <button type="submit" className="btn btn-success">
// //               {editId ? 'Update Ad' : 'Submit'}
// //             </button>
// //             <button
// //               type="button"
// //               className="btn btn-secondary ms-2"
// //               onClick={resetForm}
// //             >
// //               Cancel
// //             </button>
// //           </form>
// //         </div>
// //       )}

// //       <div className="row">
// //         {ads.map((ad) => (
// //           <div className="col-md-4 col-sm-6 col-12 mb-4" key={ad.id}>
// //             <div className="card ad-card">
// //               <div style={{ height: '200px', overflow: 'hidden' }}>
// //                 {ad.file_type === 'image' ? (
// //                   <img
// //                     src={`http://192.168.1.6:5000/${ad.file_path}`}
// //                     alt="Ad"
// //                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
// //                   />
// //                 ) : (
// //                   <video controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
// //                     <source src={`http://192.168.1.6:5000/${ad.file_path}`} />
// //                   </video>
// //                 )}
// //               </div>
// //               <div className="card-body">
// //                 <h5>{ad.title || ad.name}</h5>
// //                 <p className="card-text">{ad.description}</p>
// //                 <button className="btn btn-warning me-2" onClick={() => handleEdit(ad)}>
// //                   Edit
// //                 </button>
// //                 <button className="btn btn-danger" onClick={() => handleDelete(ad.id)}>
// //                   Delete
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Adds;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AddPage = () => {
//   const navigate = useNavigate();
//   const [showForm, setShowForm] = useState(false);
//   const [media, setMedia] = useState(null);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [error, setError] = useState('');
//   const [ads, setAds] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     const storedAds = localStorage.getItem('my-ads');
//     if (storedAds) setAds(JSON.parse(storedAds));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('my-ads', JSON.stringify(ads));
//   }, [ads]);

//   const handleMediaChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.size > 10 * 1024 * 1024) {
//       setError('File size must be less than 10MB');
//       setMedia(null);
//     } else {
//       setError('');
//       setMedia(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !description || (!media && editIndex === null)) {
//       setError('All fields are required');
//       return;
//     }

//     const mediaURL = media ? URL.createObjectURL(media) : ads[editIndex]?.media;
//     const mediaType = media
//       ? media.type.startsWith('video') ? 'video' : 'image'
//       : ads[editIndex]?.mediaType;

//     const currentTime = new Date().toLocaleString();

//     const newAd = {
//       id: editIndex !== null ? ads[editIndex].id : Date.now(),
//       name,
//       media: mediaURL,
//       mediaType,
//       description,
//       addedAt: editIndex !== null ? ads[editIndex].addedAt : currentTime,
//       status: editIndex !== null ? ads[editIndex].status : 'Active'
//     };

//     if (editIndex !== null) {
//       const updatedAds = [...ads];
//       updatedAds[editIndex] = newAd;
//       setAds(updatedAds);
//       setEditIndex(null);
//     } else {
//       setAds([...ads, newAd]);
//     }

//     setShowForm(false);
//     setMedia(null);
//     setName('');
//     setDescription('');
//     setError('');
//   };

//   const handleEdit = (index) => {
//     const ad = ads[index];
//     setName(ad.name);
//     setDescription(ad.description);
//     setMedia(null);
//     setEditIndex(index);
//     setShowForm(true);
//   };

//   const handleDelete = (index) => {
//     const updatedAds = ads.filter((_, i) => i !== index);
//     setAds(updatedAds);
//   };

//   return (
//     <div className="container mt-4">
//       {/* Header */}
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h2 className="page-title">Uploads and update your ads here</h2>
//         <button className="btn btn-outline-info" onClick={() => navigate('/final-ads')}>
//           View Final Ads
//         </button>
//       </div>

//       {/* Upload Button */}
//       <button
//         className="btn btn-primary upload-btn mb-3"
//         onClick={() => {
//           setShowForm(true);
//           setEditIndex(null);
//           setMedia(null);
//           setName('');
//           setDescription('');
//         }}
//       >
//         Upload Ad
//       </button>

//       {/* Upload Form */}
//       {showForm && (
//         <div className="card form-card mb-4">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label" htmlFor="adName">Name</label>
//               <input
//                 type="text"
//                 id="adName"
//                 name="name"
//                 className="form-control"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label" htmlFor="mediaUpload">Upload Image or Video (Max: 10MB)</label>
//               <input
//                 type="file"
//                 id="mediaUpload"
//                 name="media"
//                 className="form-control"
//                 accept="image/*,video/*"
//                 onChange={handleMediaChange}
//               />
//               {editIndex !== null && (
//                 <small className="text-muted">Leave blank to keep existing media</small>
//               )}
//             </div>

//             <div className="mb-3">
//               <label className="form-label" htmlFor="adDescription">Description</label>
//               <textarea
//                 id="adDescription"
//                 name="description"
//                 className="form-control"
//                 rows="3"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//               ></textarea>
//             </div>

//             {error && <div className="alert alert-danger">{error}</div>}

//             <button type="submit" className="btn btn-success">
//               {editIndex !== null ? 'Update Ad' : 'Submit'}
//             </button>
//             <button
//               type="button"
//               className="btn btn-secondary ms-2"
//               onClick={() => {
//                 setShowForm(false);
//                 setEditIndex(null);
//                 setMedia(null);
//                 setName('');
//                 setDescription('');
//               }}
//             >
//               Cancel
//             </button>
//           </form>
//         </div>
//       )}

//       {/* Display Ads */}
//       <div className="row">
//         {ads.map((ad, index) => (
//           <div className="col-md-4 col-sm-6 col-12 mb-4" key={ad.id}>
//             <div className="card ad-card shadow">
//               <div style={{ height: '200px', overflow: 'hidden' }}>
//                 {ad.mediaType === 'image' ? (
//                   <img
//                     src={ad.media}
//                     alt="Ad"
//                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                   />
//                 ) : (
//                   <video controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
//                     <source src={ad.media} />
//                   </video>
//                 )}
//               </div>
//               <div className="card-body">
//                 <h5>{ad.name}</h5>
//                 <p className="card-text">{ad.description}</p>
//                 <button className="btn btn-warning me-2" onClick={() => handleEdit(index)}>
//                   Edit
//                 </button>
//                 <button className="btn btn-danger" onClick={() => handleDelete(index)}>
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // export default AddPage;
// import React, { useEffect, useState } from 'react';

// const AddPage = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [media, setMedia] = useState(null);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [error, setError] = useState('');
//   const [ads, setAds] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     fetchAds();
//   }, []);

//   const fetchAds = async () => {
//     try {
//       const res = await fetch('https://your-api.com/ads');
//       const data = await res.json();
//       setAds(data);
//     } catch (err) {
//       setError('Failed to load ads');
//     }
//   };

//   const handleMediaChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.size > 10 * 1024 * 1024) {
//       setError('File size must be less than 10MB');
//       setMedia(null);
//     } else {
//       setError('');
//       setMedia(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !description || (!media && editIndex === null)) {
//       setError('All fields are required');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('description', description);
//     if (media) formData.append('media', media);

//     try {
//       if (editIndex !== null) {
//         const adId = ads[editIndex].id;
//         await fetch(`https://your-api.com/ads/${adId}`, {
//           method: 'PUT',
//           body: formData
//         });
//       } else {
//         await fetch('https://your-api.com/ads', {
//           method: 'POST',
//           body: formData
//         });
//       }

//       await fetchAds(); // Refresh after add/update
//       setShowForm(false);
//       setName('');
//       setDescription('');
//       setMedia(null);
//       setEditIndex(null);
//       setError('');
//     } catch (err) {
//       setError('Failed to submit ad');
//     }
//   };

//   const handleEdit = (index) => {
//     const ad = ads[index];
//     setName(ad.name);
//     setDescription(ad.description);
//     setMedia(null);
//     setEditIndex(index);
//     setShowForm(true);
//   };

//   const handleDelete = async (index) => {
//     const adId = ads[index].id;
//     try {
//       await fetch(`https://your-api.com/ads/${adId}`, {
//         method: 'DELETE'
//       });
//       await fetchAds(); // Refresh after delete
//     } catch (err) {
//       setError('Failed to delete ad');
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="page-title mb-3">Upload or update your ads</h2>

//       <button
//         className="btn btn-primary upload-btn mb-3"
//         onClick={() => {
//           setShowForm(true);
//           setEditIndex(null);
//           setMedia(null);
//           setName('');
//           setDescription('');
//         }}
//       >
//         Upload Ad
//       </button>

//       {showForm && (
//         <div className="card form-card mb-4">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label">Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Upload Image or Video (Max: 10MB)</label>
//               <input
//                 type="file"
//                 className="form-control"
//                 accept="image/*,video/*"
//                 onChange={handleMediaChange}
//               />
//               {editIndex !== null && (
//                 <small className="text-muted">Leave blank to keep existing media</small>
//               )}
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Description</label>
//               <textarea
//                 className="form-control"
//                 rows="3"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//               ></textarea>
//             </div>

//             {error && <div className="alert alert-danger">{error}</div>}

//             <button type="submit" className="btn btn-success">
//               {editIndex !== null ? 'Update Ad' : 'Submit'}
//             </button>
//             <button
//               type="button"
//               className="btn btn-secondary ms-2"
//               onClick={() => {
//                 setShowForm(false);
//                 setEditIndex(null);
//                 setMedia(null);
//                 setName('');
//                 setDescription('');
//               }}
//             >
//               Cancel
//             </button>
//           </form>
//         </div>
//       )}

//       <div className="row">
//         {ads.map((ad, index) => (
//           <div className="col-md-4 col-sm-6 col-12 mb-4" key={ad.id}>
//             <div className="card ad-card shadow">
//               <div style={{ height: '200px', overflow: 'hidden' }}>
//                 {ad.mediaType === 'image' ? (
//                   <img
//                     src={ad.media}
//                     alt="Ad"
//                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                   />
//                 ) : (
//                   <video controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
//                     <source src={ad.media} />
//                   </video>
//                 )}
//               </div>
//               <div className="card-body">
//                 <h5>{ad.name}</h5>
//                 <p className="card-text">{ad.description}</p>
//                 <button className="btn btn-warning me-2" onClick={() => handleEdit(index)}>
//                   Edit
//                 </button>
//                 <button className="btn btn-danger" onClick={() => handleDelete(index)}>
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AddPage;
import React, { useEffect, useState } from 'react';

const AddPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [media, setMedia] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [ads, setAds] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {
      const res = await fetch('http://192.168.1.6:5000/api/ads');
      const data = await res.json();
      setAds(data);
    } catch (err) {
      setError('Failed to load ads');
    }
  };

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB');
      setMedia(null);
    } else {
      setError('');
      setMedia(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || (!media && editIndex === null)) {
      setError('All fields are required');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    if (media) formData.append('media', media);

    try {
      if (editIndex !== null) {
        const adId = ads[editIndex].id;
        await fetch(`http://192.168.1.6:5000/api/ads/${adId}`, {
          method: 'PUT',
          body: formData
        });
      } else {
        // ✅ Use /uploads for new ad creation
        await fetch('http://192.168.1.6:5000/api/uploads', {
          method: 'POST',
          body: formData
        });
      }

      await fetchAds(); // Refresh ads list
      setShowForm(false);
      setName('');
      setDescription('');
      setMedia(null);
      setEditIndex(null);
      setError('');
    } catch (err) {
      setError('Failed to submit ad');
    }
  };

  const handleEdit = (index) => {
    const ad = ads[index];
    setName(ad.name);
    setDescription(ad.description);
    setMedia(null);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = async (index) => {
    const adId = ads[index].id;
    try {
      await fetch(`http://192.168.1.6:5000/api/ads/${adId}`, {
        method: 'DELETE'
      });
      await fetchAds(); // Refresh after delete
    } catch (err) {
      setError('Failed to delete ad');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="page-title mb-3">Upload or update your ads</h2>

      <button
        className="btn btn-primary upload-btn mb-3"
        onClick={() => {
          setShowForm(true);
          setEditIndex(null);
          setMedia(null);
          setName('');
          setDescription('');
        }}
      >
        Upload Ad
      </button>

      {showForm && (
        <div className="card form-card mb-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Upload Image or Video (Max: 10MB)</label>
              <input
                type="file"
                className="form-control"
                accept="image/*,video/*"
                onChange={handleMediaChange}
              />
              {editIndex !== null && (
                <small className="text-muted">Leave blank to keep existing media</small>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <button type="submit" className="btn btn-success">
              {editIndex !== null ? 'Update Ad' : 'Submit'}
            </button>
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={() => {
                setShowForm(false);
                setEditIndex(null);
                setMedia(null);
                setName('');
                setDescription('');
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      <div className="row">
        {ads.map((ad, index) => (
          <div className="col-md-4 col-sm-6 col-12 mb-4" key={ad.id}>
            <div className="card ad-card shadow">
              <div style={{ height: '200px', overflow: 'hidden' }}>
                {ad.mediaType === 'image' ? (
                  <img
                    src={ad.media}
                    alt="Ad"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <video controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                    <source src={ad.media} />
                  </video>
                )}
              </div>
              <div className="card-body">
                <h5>{ad.name}</h5>
                <p className="card-text">{ad.description}</p>
                <button className="btn btn-warning me-2" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddPage;
