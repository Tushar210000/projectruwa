// // // import React, { useState } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom';

// // // const Login = () => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [errors, setErrors] = useState({});

// // //   const navigate = useNavigate();

// // //   const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     const newErrors = {};

// // //     if (!email) newErrors.email = 'Email is required';
// // //     else if (!isValidEmail(email)) newErrors.email = 'Enter a valid email';

// // //     if (!password) newErrors.password = 'Password is required';

// // //     setErrors(newErrors);

// // //     if (Object.keys(newErrors).length === 0) {
// // //       console.log('Logged in:', { email, password });

// // //       // ✅ Redirect to homepage or dashboard after successful login
// // //       navigate('/app');
// // //   }
// // //   };

// // //   return (
// // //     <div
// // //       className="vh"
// // //       style={{ background: 'linear-gradient(135deg, #d6f8e5, #d9e9ff)', padding: '1rem' }}
// // //     >
// // //       {/* Logo and Brand */}
// // //       <div className="d-flex justify-content-between align-items-start mb-4 w-100">
// // //         <img
// // //           src="img/marketinglogo.png"
// // //           alt="Logo"
// // //           style={{ width: '70px', height: '70px', objectFit: 'contain' }}
// // //         />
// // //         <h4 className="mb-0 mt-10 fw-bold text-dark">
// // //           Marketing Mantra <sup className="text-muted">TM</sup>
// // //         </h4>
// // //       </div>

// // //       {/* Login Form */}
// // //       <div className="d-flex justify-content-center align-items-center h-100">
// // //         <div className="bg-white p-4 p-md-5 rounded shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
// // //           <div className="d-flex justify-content-between align-items-center mb-4">
// // //             <h3 className="fw-bold">Login</h3>
// // //             <Link to="/register" className="text-primary text-decoration-none">Don't have an account?</Link>
// // //           </div>

// // //           <form onSubmit={handleSubmit} noValidate>
// // //             <div className="mb-3">
// // //               <label className="form-label">Email Address</label>
// // //               <input
// // //                 type="email"
// // //                 className={`form-control ${errors.email ? 'is-invalid' : ''}`}
// // //                 placeholder="Email Address"
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //               />
// // //               {errors.email && <div className="invalid-feedback">{errors.email}</div>}
// // //             </div>

// // //             <div className="mb-3">
// // //               <label className="form-label">Password</label>
// // //               <div className="input-group">
// // //                 <input
// // //                   type={showPassword ? 'text' : 'password'}
// // //                   className={`form-control ${errors.password ? 'is-invalid' : ''}`}
// // //                   placeholder="Password"
// // //                   value={password}
// // //                   onChange={(e) => setPassword(e.target.value)}
// // //                 />
// // //                 <button
// // //                   type="button"
// // //                   className="btn btn-outline-secondary"
// // //                   onClick={() => setShowPassword(!showPassword)}
// // //                 >
// // //                   <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
// // //                 </button>
// // //               </div>
// // //               {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
// // //             </div>

// // //             <div className="d-flex justify-content-between align-items-center mb-3">
// // //               <div>
// // //                 <input type="checkbox" className="form-check-input me-2" id="keepSignedIn" />
// // //                 <label htmlFor="keepSignedIn" className="form-check-label">Keep me signed in</label>
// // //               </div>
// // //               <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
// // //             </div>

// // //             {/* ✅ Correct Login Button */}
// // //             <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
// // //             {/* <Link to='/app'>Login</Link> */}

// // //             <div className="d-flex align-items-center my-3">
// // //               <hr className="flex-grow-1" />
// // //               <span className="mx-2 text-muted">Login With</span>
// // //               <hr className="flex-grow-1" />
// // //             </div>

// // //             <div className="d-flex justify-content-between gap-2">
// // //               <button type="button" className="btn btn-light border w-100 d-flex align-items-center justify-content-center">
// // //                 <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" width="20" className="me-2" />
// // //                 Google
// // //               </button>
// // //               <button type="button" className="btn btn-light border w-100 d-flex align-items-center justify-content-center">
// // //                 <i className="bi bi-twitter text-primary me-2"></i>
// // //                 Twitter
// // //               </button>
// // //               <button type="button" className="btn btn-light border w-100 d-flex align-items-center justify-content-center">
// // //                 <i className="bi bi-facebook text-primary me-2"></i>
// // //                 Facebook
// // //               </button>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;


// // // import React, { useState } from 'react';
// // // import { Link } from 'react-router-dom';

// // // const Login = ({ onLogin }) => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [errors, setErrors] = useState({});

// // //   const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     const newErrors = {};

// // //     if (!email) newErrors.email = 'Email is required';
// // //     else if (!isValidEmail(email)) newErrors.email = 'Enter a valid email';

// // //     if (!password) newErrors.password = 'Password is required';

// // //     setErrors(newErrors);

// // //     if (Object.keys(newErrors).length === 0) {
// // //       // Simulate successful login
// // //       console.log('Logged in:', { email, password });
// // //       onLogin(); // ✅ Call onLogin to update App.jsx state
// // //     }
// // //   };

// // //   return (
// // //     <div
// // //       className="vh"
// // //       style={{ background: 'linear-gradient(135deg, #d6f8e5, #d9e9ff)', padding: '1rem' }}
// // //     >
// // //       {/* Logo and Brand */}
// // //       <div className="d-flex justify-content-between align-items-start mb-4 w-100">
// // //         <img
// // //           src="img/marketinglogo.png"
// // //           alt="Logo"
// // //           style={{ width: '70px', height: '70px', objectFit: 'contain' }}
// // //         />
// // //         <h4 className="mb-0 mt-10 fw-bold text-dark">
// // //           Marketing Mantra <sup className="text-muted">TM</sup>
// // //         </h4>
// // //       </div>

// // //       {/* Login Form */}
// // //       <div className="d-flex justify-content-center align-items-center h-100">
// // //         <div className="bg-white p-4 p-md-5 rounded shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
// // //           <div className="d-flex justify-content-between align-items-center mb-4">
// // //             <h3 className="fw-bold">Login</h3>
// // //             <Link to="/register" className="text-primary text-decoration-none">Don't have an account?</Link>
// // //           </div>

// // //           <form onSubmit={handleSubmit} noValidate>
// // //             <div className="mb-3">
// // //               <label className="form-label">Email Address</label>
// // //               <input
// // //                 type="email"
// // //                 className={`form-control ${errors.email ? 'is-invalid' : ''}`}
// // //                 placeholder="Email Address"
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //               />
// // //               {errors.email && <div className="invalid-feedback">{errors.email}</div>}
// // //             </div>

// // //             <div className="mb-3">
// // //               <label className="form-label">Password</label>
// // //               <div className="input-group">
// // //                 <input
// // //                   type={showPassword ? 'text' : 'password'}
// // //                   className={`form-control ${errors.password ? 'is-invalid' : ''}`}
// // //                   placeholder="Password"
// // //                   value={password}
// // //                   onChange={(e) => setPassword(e.target.value)}
// // //                 />
// // //                 <button
// // //                   type="button"
// // //                   className="btn btn-outline-secondary"
// // //                   onClick={() => setShowPassword(!showPassword)}
// // //                 >
// // //                   <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
// // //                 </button>
// // //               </div>
// // //               {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
// // //             </div>

// // //             <div className="d-flex justify-content-between align-items-center mb-3">
// // //               <div>
// // //                 <input type="checkbox" className="form-check-input me-2" id="keepSignedIn" />
// // //                 <label htmlFor="keepSignedIn" className="form-check-label">Keep me signed in</label>
// // //               </div>
// // //               <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
// // //             </div>

// // //             <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>

// // //             <div className="d-flex align-items-center my-3">
// // //               <hr className="flex-grow-1" />
// // //               <span className="mx-2 text-muted">Login With</span>
// // //               <hr className="flex-grow-1" />
// // //             </div>

// // //             <div className="d-flex justify-content-between gap-2">
// // //               <button type="button" className="btn btn-light border w-100 d-flex align-items-center justify-content-center">
// // //                 <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" width="20" className="me-2" />
// // //                 Google
// // //               </button>
// // //               <button type="button" className="btn btn-light border w-100 d-flex align-items-center justify-content-center">
// // //                 <i className="bi bi-twitter text-primary me-2"></i>
// // //                 Twitter
// // //               </button>
// // //               <button type="button" className="btn btn-light border w-100 d-flex align-items-center justify-content-center">
// // //                 <i className="bi bi-facebook text-primary me-2"></i>
// // //                 Facebook
// // //               </button>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;




// // // with api 
// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import axios from 'axios';

// // const Login = ({ onLogin }) => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [errors, setErrors] = useState({});
// //   const [loading, setLoading] = useState(false);

// //   const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const newErrors = {};

// //     if (!email) newErrors.email = 'Email is required';
// //     else if (!isValidEmail(email)) newErrors.email = 'Enter a valid email';

// //     if (!password) newErrors.password = 'Password is required';

// //     setErrors(newErrors);

// //     if (Object.keys(newErrors).length === 0) {
// //       try {
// //         setLoading(true);

// //         const res = await axios.post('https://localhost:5000/login', {
// //           email,
// //           password
// //         }, {
// //           withCredentials: true // if you're using cookies or sessions
// //         });

// //         setLoading(false);

// //         if (res.status === 200) {
// //           console.log('Login successful:', res.data);
// //           onLogin(); // trigger dashboard display
// //         }
// //       } catch (error) {
// //         setLoading(false);
// //         const msg = error.response?.data?.message || 'Invalid email or password';
// //         setErrors({ password: msg });
// //         console.error('Login failed:', msg);
// //       }
// //     }
// //   };

// //   return (
// //     <div
// //       className="vh"
// //       style={{ background: 'linear-gradient(135deg, #d6f8e5, #d9e9ff)', padding: '1rem' }}
// //     >
// //       {/* Logo and Brand */}
// //       <div className="d-flex justify-content-between align-items-start mb-4 w-100">
// //         <img
// //           src="img/marketinglogo.png"
// //           alt="Logo"
// //           style={{ width: '70px', height: '70px', objectFit: 'contain' }}
// //         />
// //         <h4 className="mb-0 mt-10 fw-bold text-dark">
// //           Marketing Mantra <sup className="text-muted">TM</sup>
// //         </h4>
// //       </div>

// //       {/* Login Form */}
// //       <div className="d-flex justify-content-center align-items-center h-100">
// //         <div
// //           className="bg-white p-4 p-md-5 rounded shadow-sm"
// //           style={{ width: '100%', maxWidth: '400px' }}
// //         >
// //           <div className="d-flex justify-content-between align-items-center mb-4">
// //             <h3 className="fw-bold">Login</h3>
// //             <Link to="/register" className="text-primary text-decoration-none">
// //               Don't have an account?
// //             </Link>
// //           </div>

// //           <form onSubmit={handleSubmit} noValidate>
// //             <div className="mb-3">
// //               <label className="form-label">Email Address</label>
// //               <input
// //                 type="email"
// //                 className={`form-control ${errors.email ? 'is-invalid' : ''}`}
// //                 placeholder="Email Address"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />
// //               {errors.email && <div className="invalid-feedback">{errors.email}</div>}
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label">Password</label>
// //               <div className="input-group">
// //                 <input
// //                   type={showPassword ? 'text' : 'password'}
// //                   className={`form-control ${errors.password ? 'is-invalid' : ''}`}
// //                   placeholder="Password"
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                 />
// //                 <button
// //                   type="button"
// //                   className="btn btn-outline-secondary"
// //                   onClick={() => setShowPassword(!showPassword)}
// //                 >
// //                   <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
// //                 </button>
// //               </div>
// //               {errors.password && (
// //                 <div className="invalid-feedback d-block">{errors.password}</div>
// //               )}
// //             </div>

// //             <div className="d-flex justify-content-between align-items-center mb-3">
// //               <div>
// //                 <input type="checkbox" className="form-check-input me-2" id="keepSignedIn" />
// //                 <label htmlFor="keepSignedIn" className="form-check-label">
// //                   Keep me signed in
// //                 </label>
// //               </div>
// //               <Link to="/forgot-password" className="text-decoration-none">
// //                 Forgot Password?
// //               </Link>
// //             </div>

// //             <button type="submit" className="btn btn-primary w-100 mb-3" disabled={loading}>
// //               {loading ? 'Logging in...' : 'Login'}
// //             </button>

// //             <div className="d-flex align-items-center my-3">
// //               <hr className="flex-grow-1" />
// //               <span className="mx-2 text-muted">Login With</span>
// //               <hr className="flex-grow-1" />
// //             </div>

// //             <div className="d-flex justify-content-between gap-2">
// //               <button
// //                 type="button"
// //                 className="btn btn-light border w-100 d-flex align-items-center justify-content-center"
// //               >
// //                 <img
// //                   src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
// //                   alt="Google"
// //                   width="20"
// //                   className="me-2"
// //                 />
// //                 Google
// //               </button>
// //               <button
// //                 type="button"
// //                 className="btn btn-light border w-100 d-flex align-items-center justify-content-center"
// //               >
// //                 <i className="bi bi-twitter text-primary me-2"></i>
// //                 Twitter
// //               </button>
// //               <button
// //                 type="button"
// //                 className="btn btn-light border w-100 d-flex align-items-center justify-content-center"
// //               >
// //                 <i className="bi bi-facebook text-primary me-2"></i>
// //                 Facebook
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);



//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     if (!username) newErrors.username = 'Username is required';
//     if (!password) newErrors.password = 'Password is required';

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       try {
//         setLoading(true);

//         const res = await axios.post(
//           'http://localhost:5000/admin/login',
//           {
//             username,
//             password,
//           },
//           {
//             withCredentials: true,
//           }
//         );

//         setLoading(false);

//         if (res.status === 200) {
//           console.log('Login successful:', res.data);
//           onLogin();
//         }
//       } catch (error) {
//         setLoading(false);
//         const msg = error.response?.data?.message || 'Invalid username or password';
//         setErrors({ password: msg });
//         console.error('Login failed:', msg);
//       }
//     }
//   };

//   return (
//     <div
//       className="vh"
//       style={{ background: 'linear-gradient(135deg, #d6f8e5, #d9e9ff)', padding: '1rem' }}
//     >
//       <div className="d-flex justify-content-between align-items-start mb-4 w-100">
//         <img
//           src="img/marketinglogo.png"
//           alt="Logo"
//           style={{ width: '70px', height: '70px', objectFit: 'contain' }}
//         />
//         <h4 className="mb-0 mt-10 fw-bold text-dark">
//           Marketing Mantra <sup className="text-muted">TM</sup>
//         </h4>
//       </div>

//       <div className="d-flex justify-content-center align-items-center h-100">
//         <div
//           className="bg-white p-4 p-md-5 rounded shadow-sm"
//           style={{ width: '100%', maxWidth: '400px' }}
//         >
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h3 className="fw-bold">Login</h3>
//             <Link to="/register" className="text-primary text-decoration-none">
//               Don't have an account?
//             </Link>
//           </div>

//           <form onSubmit={handleSubmit} noValidate>
//             <div className="mb-3">
//               <label className="form-label">Username</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.username ? 'is-invalid' : ''}`}
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               {errors.username && <div className="invalid-feedback">{errors.username}</div>}
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <div className="input-group">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
//                 </button>
//               </div>
//               {errors.password && (
//                 <div className="invalid-feedback d-block">{errors.password}</div>
//               )}
//             </div>

//             <div className="d-flex justify-content-between align-items-center mb-3">
//               <div>
//                 <input type="checkbox" className="form-check-input me-2" id="keepSignedIn" />
//                 <label htmlFor="keepSignedIn" className="form-check-label">
//                   Keep me signed in
//                 </label>
//               </div>
//               <Link to="/forgot-password" className="text-decoration-none">
//                 Forgot Password?
//               </Link>
//             </div>

//             <button type="submit" className="btn btn-primary w-100 mb-3" disabled={loading}>
//               {loading ? 'Logging in...' : 'Login'}
//             </button>

//             <div className="d-flex align-items-center my-3">
//               <hr className="flex-grow-1" />
//               <span className="mx-2 text-muted">Login With</span>
//               <hr className="flex-grow-1" />
//             </div>

//             <div className="d-flex justify-content-between gap-2">
//               <button
//                 type="button"
//                 className="btn btn-light border w-100 d-flex align-items-center justify-content-center"
//               >
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
//                   alt="Google"
//                   width="20"
//                   className="me-2"
//                 />
//                 Google
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-light border w-100 d-flex align-items-center justify-content-center"
//               >
//                 <i className="bi bi-twitter text-primary me-2"></i>
//                 Twitter
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-light border w-100 d-flex align-items-center justify-content-center"
//               >
//                 <i className="bi bi-facebook text-primary me-2"></i>
//                 Facebook
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;





// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     if (!username) newErrors.username = 'Username is required';
//     if (!password) newErrors.password = 'Password is required';

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       try {
//         setLoading(true);

// //         const res = await axios.post(
// //           'http://192.168.1.6:5000/admin/login'
// // ,
// //           { username, password },
// //           { withCredentials: true }
// //         );
// const res = await axios.post(
//   'http://192.168.1.6:5000/api/admin/login',  // ✅ Use backend machine's IP and port
//   { username, password },
//   { withCredentials: true }
// );


//         setLoading(false);

//         if (res.status === 200) {
//           // Store token and username
//           localStorage.setItem('adminToken', res.data.token);
//           localStorage.setItem('adminUser', res.data.username);

//           // ✅ Navigate to admin dashboard
//           navigate('/dash');
//         }
//       } catch (error) {
//         setLoading(false);
//         const msg = error.response?.data?.message || 'Invalid username or password';
//         setErrors({ password: msg });
//         console.error('Login failed:', msg);
//       }
//     }
//   };

//   return (
//     <div
//       className="vh"
//       style={{ background: 'linear-gradient(135deg, #d6f8e5, #d9e9ff)', padding: '1rem' }}
//     >
//       <div className="d-flex justify-content-between align-items-start mb-4 w-100">
//         <img
//           src="img/marketinglogo.png"
//           alt="Logo"
//           style={{ width: '70px', height: '70px', objectFit: 'contain' }}
//         />
//         <h4 className="mb-0 mt-10 fw-bold text-dark">
//           Marketing Mantra <sup className="text-muted">TM</sup>
//         </h4>
//       </div>

//       <div className="d-flex justify-content-center align-items-center h-100">
//         <div className="bg-white p-4 p-md-5 rounded shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h3 className="fw-bold">Login</h3>
//             <Link to="/register" className="text-primary text-decoration-none">
//               Don't have an account?
//             </Link>
//           </div>

//           <form onSubmit={handleSubmit} noValidate>
//             <div className="mb-3">
//               <label className="form-label">Username</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.username ? 'is-invalid' : ''}`}
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               {errors.username && <div className="invalid-feedback">{errors.username}</div>}
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <div className="input-group">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
//                 </button>
//               </div>
//               {errors.password && (
//                 <div className="invalid-feedback d-block">{errors.password}</div>
//               )}
//             </div>

//             <div className="d-flex justify-content-between align-items-center mb-3">
//               {/* <div>
//                 <input type="checkbox" className="form-check-input me-2" id="keepSignedIn" />
//                 <label htmlFor="keepSignedIn" className="form-check-label">
//                   Keep me signed in
//                 </label>
//               </div> */}
//               <Link to="/forgot-password" className="text-decoration-none">
//                 Forgot Password?
//               </Link>
//             </div>

//             <button type="submit" className="btn btn-primary w-100 mb-3" disabled={loading}>
//               {loading ? 'Logging in...' : 'Login'}
//             </button>

//             <div className="d-flex align-items-center my-3">
//               <hr className="flex-grow-1" />
//               <span className="mx-2 text-muted">Login With</span>
//               <hr className="flex-grow-1" />
//             </div>

//             <div className="d-flex justify-content-between gap-2">
//               <button type="button" className="btn btn-light border w-100 d-flex align-items-center justify-content-center">
//                 <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" width="20" className="me-2" />
//                 Google
//               </button>
//               <button type="button" className="btn btn-light border w-100 d-flex align-items-center justify-content-center">
//                 <i className="bi bi-twitter text-primary me-2"></i>
//                 Twitter
//               </button>
//               <button type="button" className="btn btn-light border w-100 d-flex align-items-center justify-content-center">
//                 <i className="bi bi-facebook text-primary me-2"></i>
//                 Facebook
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
  



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     if (!username) newErrors.username = 'Username is required';
//     if (!password) newErrors.password = 'Password is required';

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       try {
//         setLoading(true);
//         const res = await axios.post(
//           'http://192.168.1.6:5000/api/admin/login',
//           { username, password },
//           { withCredentials: true }
//         );
//         setLoading(false);

//         if (res.status === 200) {
//           localStorage.setItem('adminToken', res.data.token);
//           localStorage.setItem('adminUser', res.data.username);
//           onLogin(); // ✅ Set login state in App
//           navigate('/dash'); // ✅ Navigate to dashboard
//         }
//       } catch (error) {
//         setLoading(false);
//         const msg = error.response?.data?.message || 'Invalid username or password';
//         setErrors({ password: msg });
//         console.error('Login failed:', msg);
//       }
//     }
//   };

//   return (
//     <div className="vh" style={{ background: 'linear-gradient(135deg, #d6f8e5, #d9e9ff)', padding: '1rem' }}>
//       <div className="d-flex justify-content-between align-items-start mb-4 w-100">
//         <img src="img/marketinglogo.png" alt="Logo" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
//         <h4 className="mb-0 mt-10 fw-bold text-dark">
//           Marketing Mantra <sup className="text-muted">TM</sup>
//         </h4>
//       </div>

//       <div className="d-flex justify-content-center align-items-center h-100">
//         <div className="bg-white p-4 p-md-5 rounded shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h3 className="fw-bold">Login</h3>
//             <Link to="/register" className="text-primary text-decoration-none">
//               Don't have an account?
//             </Link>
//           </div>

//           <form onSubmit={handleSubmit} noValidate>
//             <div className="mb-3">
//               <label className="form-label">Username</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.username ? 'is-invalid' : ''}`}
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               {errors.username && <div className="invalid-feedback">{errors.username}</div>}
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <div className="input-group">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
//                 </button>
//               </div>
//               {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
//             </div>

//             <div className="d-flex justify-content-between align-items-center mb-3">
//               <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
//             </div>

//             <button type="submit" className="btn btn-primary w-100 mb-3" disabled={loading}>
//               {loading ? 'Logging in...' : 'Login'}
//             </button>

//             <div className="d-flex align-items-center my-3">
//               <hr className="flex-grow-1" />
//               <span className="mx-2 text-muted">Login With</span>
//               <hr className="flex-grow-1" />
//             </div>

//             <div className="d-flex justify-content-between gap-2">
//               <button type="button" className="btn btn-light border w-100 d-flex align-items-center justify-content-center">
//                 <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" width="20" className="me-2" />
//                 Google
//               </button>
//               <button type="button" className="btn btn-light border w-100 d-flex align-items-center justify-content-center">
//                 <i className="bi bi-twitter text-primary me-2"></i>
//                 Twitter
//               </button>
//               <button type="button" className="btn btn-light border w-100 d-flex align-items-center justify-content-center">
//                 <i className="bi bi-facebook text-primary me-2"></i>
//                 Facebook
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default LoginPage;
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     if (!username) newErrors.username = 'Username is required';
//     if (!password) newErrors.password = 'Password is required';
//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       try {
//         setLoading(true);
//         const res = await axios.post('http://192.168.1.6:5000/api/admin/login', {
//           username,
//           password,
//         });

//         setLoading(false);

//         const { token, username: user } = res.data;

//         if (token) {
//           localStorage.setItem('token', token);             // ✅ Used by Detailspage.jsx
//           localStorage.setItem('adminUser', user);          // Optional

//           if (onLogin) onLogin();                           // Optional
//           navigate('/detailspage');                         // ✅ Go to profile page
//         } else {
//           setErrors({ password: 'Login failed: Token not received' });
//         }
//       } catch (error) {
//         setLoading(false);
//         const msg = error.response?.data?.message || 'Invalid username or password';
//         setErrors({ password: msg });
//         console.error('Login failed:', msg);
//       }
//     }
//   };

//   return (
//     <div className="vh" style={{ background: 'linear-gradient(135deg, #d6f8e5, #d9e9ff)', padding: '1rem' }}>
//       <div className="d-flex justify-content-between align-items-start mb-4 w-100">
//         <img src="img/marketinglogo.png" alt="Logo" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
//         <h4 className="mb-0 mt-10 fw-bold text-dark">
//           Marketing Mantra <sup className="text-muted">TM</sup>
//         </h4>
//       </div>

//       <div className="d-flex justify-content-center align-items-center h-100">
//         <div className="bg-white p-4 p-md-5 rounded shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h3 className="fw-bold">Login</h3>
//             <Link to="/register" className="text-primary text-decoration-none">
//               Don't have an account?
//             </Link>
//           </div>

//           <form onSubmit={handleSubmit} noValidate>
//             <div className="mb-3">
//               <label className="form-label">Username</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.username ? 'is-invalid' : ''}`}
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               {errors.username && <div className="invalid-feedback">{errors.username}</div>}
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <div className="input-group">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   className="btn btn-outline-secondary"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
//                 </button>
//               </div>
//               {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
//             </div>

//             <div className="d-flex justify-content-between align-items-center mb-3">
//               <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
//             </div>

//             <button type="submit" className="btn btn-primary w-100 mb-3" disabled={loading}>
//               {loading ? 'Logging in...' : 'Login'}
//             </button>

//             <div className="d-flex align-items-center my-3">
//               <hr className="flex-grow-1" />
//               <span className="mx-2 text-muted">Login With</span>
//               <hr className="flex-grow-1" />
//             </div>

//             <div className="d-flex justify-content-between gap-2">
//               <button type="button" className="btn btn-light border w-100 d-flex align-items-center justify-content-center">
//                 <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" width="20" className="me-2" />
//                 Google
//               </button>
//               <button type="button" className="btn btn-light border w-100 d-flex align-items-center justify-content-center">
//                 <i className="bi bi-twitter text-primary me-2"></i>
//                 Twitter
//               </button>
//               <button type="button" className="btn btn-light border w-100 d-flex align-items-center justify-content-center">
//                 <i className="bi bi-facebook text-primary me-2"></i>
//                 Facebook
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import './LoginPage.css'; // Make sure this is addeds

const LoginPage = ({ onLogin }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!phone) newErrors.username = 'phone is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        setLoading(true);
        const res = await axios.post('http://localhost:8000/api/auth/login', {
          phone,
          password,
        });

        setLoading(false);
        const  {token,role}  = res.data;
        
        if (token) {
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);
          if (onLogin) onLogin();
          navigate('/detailspage');
        } else {
          setErrors({ password: 'Login failed: Token not received' });
        }
      } catch (error) {
        setLoading(false);
        const msg = error.response?.data?.message || 'Invalid username or password';
        setErrors({ password: msg });
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <img
          src="/img/marketinglogo.png"
          alt="Logo"
          className="login-logo"
        />
        <h4 className="login-welcome">Welcome, please sign in</h4>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>
              <span className="text-danger">*</span> Username
            </label>
            <input
              type="text"
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your username"
              required
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>

          <div className="form-group">
            <label>
              <span className="text-danger">*</span> Password
            </label>
            <div className="input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </button>
            </div>
            {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <Link to="/forgot-password" className="forgot-link">Forgot your password?</Link>
          </div>

          <button type="submit" className="btn button btn-magento w-100 mb-3" disabled={loading}>
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
