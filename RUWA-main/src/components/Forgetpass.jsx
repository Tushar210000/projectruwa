// // // // // import React, { useState } from 'react';

// // // // // export default function ForgotPass() {
// // // // //   const [email, setEmail] = useState('');
// // // // //   const [message, setMessage] = useState('');

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();
// // // // //     if (!email) return setMessage('Please enter your email.');
// // // // //     setMessage('Reset link sent to your email.');
// // // // //   };

// // // // //   return (
// // // // //     <div className="container mt-5">
// // // // //       <h2>Forgot Password</h2>
// // // // //       <form onSubmit={handleSubmit}>
// // // // //         <input type="email" placeholder="Enter Email" className="form-control my-2" value={email} onChange={e => setEmail(e.target.value)} />
// // // // //         <button type="submit" className="btn btn-warning">Send Reset Link</button>
// // // // //       </form>
// // // // //       {message && <p className="text-success mt-2">{message}</p>}
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import React from 'react';
// // // // import { Link } from 'react-router-dom';

// // // // export default function Forgotpass() {
// // // //   return (
// // // //     <div className="flex justify-center items-center min-h-screen bg-gray-100">
// // // //       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
// // // //         <h2 className="text-xl text-gray-500 mb-1">Reset your password</h2>
// // // //         <h1 className="text-2xl font-bold mb-6">Forgot Password</h1>
// // // //         <input type="email" placeholder="Email address" className="w-full p-2 mb-4 border rounded" />
// // // //         <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send Reset Link</button>
// // // //         <p className="text-sm text-center mt-6">Go back to <Link to="/login" className="text-blue-600">Login</Link></p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // // ForgotPassword.js
// // // import React, { useState } from 'react';

// // // const Forgotpass = ({ onClose }) => {
// // //   const [email, setEmail] = useState('');
// // //   const [message, setMessage] = useState('');
// // //   const [error, setError] = useState('');

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // //     if (!emailRegex.test(email)) {
// // //       setError('Enter a valid email');
// // //       return;
// // //     }
// // //     setError('');
// // //     setMessage('Password reset link sent to your email');
// // //   };

// // //   return (
// // //     <div style={styles.overlay}>
// // //       <div style={styles.box}>
// // //         <button style={styles.closeBtn} onClick={onClose}>×</button>
// // //         <form onSubmit={handleSubmit}>
// // //           <h2>Forgot Password</h2>
// // //           <input
// // //             type="email"
// // //             placeholder="Enter your registered email"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             style={styles.input}
// // //           />
// // //           {error && <p style={styles.error}>{error}</p>}
// // //           {message && <p style={{ color: 'green' }}>{message}</p>}
// // //           <button type="submit" style={styles.button}>Send Reset Link</button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const styles = {
// // //   overlay: {
// // //     position: 'fixed', top: 0, left: 0,
// // //     width: '100vw', height: '100vh',
// // //     backgroundColor: 'rgba(0,0,0,0.5)',
// // //     display: 'flex', justifyContent: 'center', alignItems: 'center',
// // //     zIndex: 9999, padding: '1rem'
// // //   },
// // //   box: {
// // //     background: '#fff', padding: '2rem', borderRadius: '10px',
// // //     maxWidth: '400px', width: '100%', position: 'relative', boxShadow: '0 0 20px rgba(0,0,0,0.2)'
// // //   },
// // //   closeBtn: {
// // //     position: 'absolute', top: '10px', right: '15px', fontSize: '22px',
// // //     background: 'none', border: 'none', cursor: 'pointer'
// // //   },
// // //   input: {
// // //     width: '100%', padding: '0.5rem', marginBottom: '0.5rem', borderRadius: '5px', border: '1px solid #ccc'
// // //   },
// // //   button: {
// // //     width: '100%', padding: '0.75rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px'
// // //   },
// // //   error: {
// // //     color: 'red', fontSize: '0.85rem', marginBottom: '0.5rem'
// // //   }
// // // };

// // // export default Forgotpass;
// // import React, { useState } from 'react';

// // export default function Forgetpass({ onClose }) {
// //   const [email, setEmail] = useState('');
// //   const [error, setError] = useState('');

// //   const validateEmail = (email) => {
// //     const regex = /^\S+@\S+\.\S+$/;
// //     return regex.test(email);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!validateEmail(email)) {
// //       setError('Please enter a valid email address');
// //       return;
// //     }
// //     setError('');
// //     // Handle forgot password API logic here
// //     alert('Password reset link sent to your email');
// //     onClose(); // close modal after action
// //   };

// //   return (
// //     <div style={styles.overlay}>
// //       <div style={styles.popup}>
// //         <button style={styles.closeBtn} onClick={onClose}>×</button>
// //         <h4 style={{ marginBottom: 20 }}>Forgot Password</h4>
// //         <form onSubmit={handleSubmit} style={{ width: '100%' }}>
// //           <div style={styles.formGroup}>
// //             <label>Email</label>
// //             <input
// //               type="email"
// //               style={styles.input}
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               placeholder="Enter your registered email"
// //             />
// //             {error && <span style={styles.error}>{error}</span>}
// //           </div>
// //           <button type="submit" style={styles.button}>Send Reset Link</button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // const styles = {
// //   overlay: {
// //     position: 'fixed', top: 0, left: 0,
// //     width: '100vw', height: '100vh',
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //     zIndex: 9999,
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     padding: 10,
// //   },
// //   popup: {
// //     backgroundColor: '#fff',
// //     padding: '30px 25px',
// //     borderRadius: 12,
// //     width: '100%',
// //     maxWidth: 400,
// //     position: 'relative',
// //     boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
// //   },
// //   closeBtn: {
// //     position: 'absolute',
// //     top: 10,
// //     right: 15,
// //     fontSize: 24,
// //     border: 'none',
// //     background: 'none',
// //     cursor: 'pointer',
// //   },
// //   formGroup: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: 5,
// //     marginBottom: 20,
// //   },
// //   input: {
// //     padding: '10px 12px',
// //     fontSize: 16,
// //     borderRadius: 6,
// //     border: '1px solid #ccc',
// //     outline: 'none',
// //   },
// //   error: {
// //     color: 'red',
// //     fontSize: 14,
// //   },
// //   button: {
// //     width: '100%',
// //     padding: '10px 0',
// //     fontSize: 16,
// //     backgroundColor: '#007bff',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: 6,
// //     cursor: 'pointer',
// //   },
// // };
// // // 
// import React, { useState } from 'react';
// import { FaEnvelope } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// export default function Forgotpass({ onClose, openLogin }) {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!regex.test(email)) return setError('Enter valid email');
//     setError('');
//     setMessage('Reset link sent');
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-box">
//         <button className="close-btn" onClick={onClose}>×</button>
//         <h3>Forgot Password</h3>
//         <div className="form-group">
//           <FaEnvelope />
//           <input type="email" value={email} placeholder="Registered Email" onChange={e => setEmail(e.target.value)} />
//         </div>
//         {error && <p className="text-danger">{error}</p>}
//         {message && <p className="text-success">{message}</p>}
//         <button className="btn btn-primary w-100" onClick={handleSubmit}>Send Reset Link</button>
//         <div className="text-center mt-3">
//           {/* <button className="link" onClick={openLogin}> Back to Login</button> */}
//           <Link className="link" to="/login"> back to login</Link>
          
//         </div>
//       </div>
//     </div>
//   );
// }
