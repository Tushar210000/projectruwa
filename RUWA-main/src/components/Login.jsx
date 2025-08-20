// // // import React, { useState } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom';

// // // // import './LoginPage.css'; // optional

// // // const Login = ({ onLogin }) => {
// // //   const [username, setUsername] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [loading, setLoading] = useState(false);

// // //   const navigate = useNavigate();

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     setLoading(true);
    
// // //     // Simulate delay (optional)
// // //     setTimeout(() => {
// // //       localStorage.setItem('token', 'dummy-token');
// // //       localStorage.setItem('adminUser', username || 'admin');

// // //       if (onLogin) onLogin();
// // //       navigate('/detailspage');
// // //     }, 500);
// // //   };

// // //   return (
// // //     <div className="login-page">
// // //       <div className="login-card">
// // //         <img
// // //           src="/img/marketinglogo.png"
// // //           alt="Logo"
// // //           className="login-logo"
// // //         />
// // //         <h4 className="login-welcome">Welcome, please sign in</h4>

// // //         <form onSubmit={handleSubmit} noValidate>
// // //           <div className="form-group">
// // //             <label>
// // //               <span className="text-danger">*</span> Username
// // //             </label>
// // //             <input
// // //               type="text"
// // //               className="form-control"
// // //               value={username}
// // //               onChange={(e) => setUsername(e.target.value)}
// // //               placeholder="Enter your username"
// // //             />
// // //           </div>

// // //           <div className="form-group">
// // //             <label>
// // //               <span className="text-danger">*</span> Password
// // //             </label>
// // //             <div className="input-group">
// // //               <input
// // //                 type={showPassword ? 'text' : 'password'}
// // //                 className="form-control"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //                 placeholder="Enter your password"
// // //               />
// // //               <button
// // //                 type="button"
// // //                 className="btn btn-outline-secondary"
// // //                 onClick={() => setShowPassword(!showPassword)}
// // //               >
// // //                 <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
// // //               </button>
// // //             </div>
// // //           </div>

// // //           <div className="d-flex justify-content-between align-items-center mb-3">
// // //             <Link to="/forgot-password" className="forgot-link">Forgot your password?</Link>
// // //           </div>

// // //           <button type="submit" className="btn button btn-magento w-100 mb-3" disabled={loading}>
// // //             {loading ? 'Logging in...' : 'Sign In'}
// // //           </button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;
// // // // // import React, { useState } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import { useAuth } from './AuthContext';

// // // // // const Login = () => {
// // // // //   const [email, setEmail] = useState('');
// // // // //   const { login } = useAuth();
// // // // //   const navigate = useNavigate();

// // // // //   const handleLogin = (e) => {
// // // // //     e.preventDefault();

// // // // //     const fakeUser = {
// // // // //       name: 'Ruwa User',
// // // // //       email: email,
// // // // //       profilePic: 'https://randomuser.me/api/portraits/men/75.jpg'
// // // // //     };

// // // // //     login(fakeUser);
// // // // //     navigate('/');
// // // // //   };

// // // // //   return (
// // // // //     <div className="container mt-5" style={{ maxWidth: 400 }}>
// // // // //       <h2>Login</h2>
// // // // //       <form onSubmit={handleLogin}>
// // // // //         <div className="mb-3">
// // // // //           <label>Email:</label>
// // // // //           <input
// // // // //             type="email"
// // // // //             className="form-control"
// // // // //             value={email}
// // // // //             required
// // // // //             onChange={(e) => setEmail(e.target.value)}
// // // // //           />
// // // // //         </div>
// // // // //         <button type="submit" className="btn btn-primary w-100">Login</button>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // export default Login;
// // // // // import React, { useState } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import { Eye, EyeOff } from 'lucide-react';
// // // // // import { useAuth } from './AuthContext';

// // // // // const Login = ({ onClose }) => {
// // // // //   const [email, setEmail] = useState('');
// // // // //   const [password, setPassword] = useState('');
// // // // //   const [error, setError] = useState('');
// // // // //   const [showPassword, setShowPassword] = useState(false);

// // // // //   const { login } = useAuth();
// // // // //   const navigate = useNavigate('/');

// // // // //   const handleLogin = (e) => {
// // // // //     e.preventDefault();
// // // // //     if (!email || !password) {
// // // // //       setError('Please fill in both fields');
// // // // //       return;
// // // // //     }

// // // // //     const fakeUser = {
// // // // //       name: 'Ruwa User',
// // // // //       email: email,
// // // // //       profilePic: 'https://randomuser.me/api/portraits/men/75.jpg'
// // // // //     };

// // // // //     login(fakeUser);
// // // // //     navigate('/');
// // // // //     onClose();
// // // // //   };

// // // // //   return (
// // // // //     <div style={styles.overlay}>
// // // // //       <div style={styles.box}>
// // // // //         <button style={styles.closeBtn} onClick={onClose}>×</button>
// // // // //         <form onSubmit={handleLogin}>
// // // // //           <h2>Login</h2>
// // // // //           <input
// // // // //             type="email"
// // // // //             placeholder="Email"
// // // // //             value={email}
// // // // //             onChange={(e) => setEmail(e.target.value)}
// // // // //             style={styles.input}
// // // // //           />
// // // // //           <div style={styles.passwordWrapper}>
// // // // //             <input
// // // // //               type={showPassword ? 'text' : 'password'}
// // // // //               placeholder="Password"
// // // // //               value={password}
// // // // //               onChange={(e) => setPassword(e.target.value)}
// // // // //               style={styles.input}
// // // // //             />
// // // // //             <button
// // // // //               type="button"
// // // // //               onClick={() => setShowPassword(!showPassword)}
// // // // //               style={styles.toggleBtn}
// // // // //             >
// // // // //               {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
// // // // //             </button>
// // // // //           </div>
// // // // //           {error && <p style={styles.error}>{error}</p>}
// // // // //           <button type="submit" style={styles.button}>Login</button>
// // // // //           <div style={{ marginTop: '1rem', textAlign: 'center' }}>
// // // // //             <a href="/forgot-password" style={styles.link}>Forgot Password?</a> | <a href="/register" style={styles.link}>Register</a>
// // // // //           </div>
// // // // //         </form>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const styles = {
// // // // //   overlay: {
// // // // //     position: 'fixed', top: 0, left: 0,
// // // // //     width: '100vw', height: '100vh',
// // // // //     backgroundColor: 'rgba(0,0,0,0.5)',
// // // // //     display: 'flex', justifyContent: 'center', alignItems: 'center',
// // // // //     zIndex: 9999, padding: '1rem'
// // // // //   },
// // // // //   box: {
// // // // //     background: '#fff', padding: '2rem', borderRadius: '10px',
// // // // //     maxWidth: '400px', width: '100%', position: 'relative', boxShadow: '0 0 20px rgba(0,0,0,0.2)'
// // // // //   },
// // // // //   closeBtn: {
// // // // //     position: 'absolute', top: '10px', right: '15px', fontSize: '22px',
// // // // //     background: 'none', border: 'none', cursor: 'pointer'
// // // // //   },
// // // // //   input: {
// // // // //     width: '100%', padding: '0.5rem', marginBottom: '0.5rem', borderRadius: '5px', border: '1px solid #ccc'
// // // // //   },
// // // // //   button: {
// // // // //     width: '100%', padding: '0.75rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px'
// // // // //   },
// // // // //   error: {
// // // // //     color: 'red', fontSize: '0.85rem', marginBottom: '0.5rem'
// // // // //   },
// // // // //   link: {
// // // // //     color: '#007bff', textDecoration: 'none'
// // // // //   },
// // // // //   passwordWrapper: {
// // // // //     position: 'relative'
// // // // //   },
// // // // //   toggleBtn: {
// // // // //     position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)',
// // // // //     background: 'none', border: 'none', color: '#007bff', cursor: 'pointer'
// // // // //   }
// // // // // };

// // // // // export default Login;
// // // // import React, { useState } from 'react';
// // // // // import Link from 'react-router-dom'
// // // // import { Link ,useNavigate } from 'react-router-dom';
// // // // import { Eye, EyeOff } from 'lucide-react';
// // // // import { useAuth } from './AuthContext';

// // // // const Login = ({ onClose, onForgot }) => {
// // // //   const [email, setEmail] = useState('');
// // // //   const [password, setPassword] = useState('');
// // // //   const [error, setError] = useState('');
// // // //   const [showPassword, setShowPassword] = useState(false);

// // // //   const { login } = useAuth();
// // // //   const navigate = useNavigate();

// // // //   const handleLogin = (e) => {
// // // //     e.preventDefault();
// // // //     if (!email || !password) {
// // // //       setError('Please fill in both fields');
// // // //       return;
// // // //     }

// // // //     const fakeUser = {
// // // //       name: 'Ruwa User',
// // // //       email: email,
// // // //       profilePic: 'https://randomuser.me/api/portraits/men/75.jpg'
// // // //     };

// // // //     login(fakeUser);
// // // //     navigate('/');
// // // //     onClose();
// // // //   };

// // // //   return (
// // // //     <div style={styles.overlay}>
// // // //       <div style={styles.box}>
// // // //         <button style={styles.closeBtn} onClick={onClose}>×</button>
// // // //         <form onSubmit={handleLogin}>
// // // //           <h2>Login</h2>
// // // //           <input
// // // //             type="email"
// // // //             placeholder="Email"
// // // //             value={email}
// // // //             onChange={(e) => setEmail(e.target.value)}
// // // //             style={styles.input}
// // // //           />
// // // //           <div style={styles.passwordWrapper}>
// // // //             <input
// // // //               type={showPassword ? 'text' : 'password'}
// // // //               placeholder="Password"
// // // //               value={password}
// // // //               onChange={(e) => setPassword(e.target.value)}
// // // //               style={styles.input}
// // // //             />
// // // //             <button
// // // //               type="button"
// // // //               onClick={() => setShowPassword(!showPassword)}
// // // //               style={styles.toggleBtn}
// // // //             >
// // // //               {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
// // // //             </button>
// // // //           </div>
// // // //           {error && <p style={styles.error}>{error}</p>}
// // // //           <button type="submit" style={styles.button}>Login</button>

// // // //           <div style={{ marginTop: '1rem', textAlign: 'center' }}>
// // // //             <Link
// // // //               // style={styles.link}
// // // //               // onClick={() => {
// // // //               //   navigate('/forgot-password');
// // // //               //   onClose();
// // // //               // }}
// // // //               to="/forgot-password"
// // // //             >
// // // //               Forgot Password?
// // // //             </Link> | <Link
// // // //               // style={styles.link}
// // // //               // onClick={() => {
// // // //               //   navigate('/register');
// // // //               //   onClose();
// // // //               // }}
// // // //               to="/register"
// // // //             >
// // // //               Register
// // // //             </Link>
// // // //           </div>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const styles = {
// // // //   overlay: {
// // // //     position: 'fixed', top: 0, left: 0,
// // // //     width: '100vw', height: '100vh',
// // // //     backgroundColor: 'rgba(0,0,0,0.5)',
// // // //     display: 'flex', justifyContent: 'center', alignItems: 'center',
// // // //     zIndex: 9999, padding: '1rem'
// // // //   },
// // // //   box: {
// // // //     background: '#fff', padding: '2rem', borderRadius: '10px',
// // // //     maxWidth: '400px', width: '100%', position: 'relative', boxShadow: '0 0 20px rgba(0,0,0,0.2)'
// // // //   },
// // // //   closeBtn: {
// // // //     position: 'absolute', top: '10px', right: '15px', fontSize: '22px',
// // // //     background: 'none', border: 'none', cursor: 'pointer'
// // // //   },
// // // //   input: {
// // // //     width: '100%', padding: '0.5rem', marginBottom: '0.5rem',
// // // //     borderRadius: '5px', border: '1px solid #ccc'
// // // //   },
// // // //   button: {
// // // //     width: '100%', padding: '0.75rem', backgroundColor: '#007bff',
// // // //     color: '#fff', border: 'none', borderRadius: '5px'
// // // //   },
// // // //   error: {
// // // //     color: 'red', fontSize: '0.85rem', marginBottom: '0.5rem'
// // // //   },
// // // //   link: {
// // // //     color: '#007bff', textDecoration: 'none', cursor: 'pointer'
// // // //   },
// // // //   passwordWrapper: {
// // // //     position: 'relative'
// // // //   },
// // // //   toggleBtn: {
// // // //     position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)',
// // // //     background: 'none', border: 'none', color: '#007bff', cursor: 'pointer'
// // // //   }
// // // // };

// // // // export default Login;

// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { useAuth } from './AuthContext';

// // // const Login = () => {
// // //   const [email, setEmail] = useState('');
// // //   const { login } = useAuth();
// // //   const navigate = useNavigate();

// // //   const handleLogin = (e) => {
// // //     e.preventDefault();

// // //     const fakeUser = {
// // //       name: 'Ruwa User',
// // //       email: email,
// // //       profilePic: 'https://randomuser.me/api/portraits/men/75.jpg'
// // //     };

// // //     login(fakeUser);
// // //     navigate('/');
// // //   };

// // //   return (
// // //     <div className="container mt-5" style={{ maxWidth: 400 }}>
// // //       <h2>Login</h2>
// // //       <form onSubmit={handleLogin}>
// // //         <div className="mb-3">
// // //           <label>Email:</label>
// // //           <input
// // //             type="email"
// // //             className="form-control"
// // //             value={email}
// // //             required
// // //             onChange={(e) => setEmail(e.target.value)}
// // //           />
// // //         </div>
// // //         <button type="submit" className="btn btn-primary w-100">Login</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Login;
// // import React, { useState } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { useAuth } from './AuthContext';

// // const Login = () => {
// //   const { login } = useAuth();
// //   const navigate = useNavigate();

// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [showPassword, setShowPassword] = useState(false);

// //   const handleLogin = (e) => {
// //     e.preventDefault();

// //     if (!email || !password) {
// //       alert('Please enter all fields');
// //       return;
// //     }

// //     // Fake login logic
// //     const fakeUser = {
// //       name: 'Ruwa User',
// //       email: email,
// //       profilePic: 'https://randomuser.me/api/portraits/men/75.jpg'
// //     };

// //     login(fakeUser);
// //     navigate('/');
// //   };

// //   return (
// //     <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
// //       <div className="w-100" style={{ maxWidth: 400 }}>
// //         <h2 className="text-center mb-4">Login</h2>
// //         <form onSubmit={handleLogin}>
// //           <div className="mb-3">
// //             <input
// //               type="email"
// //               className="form-control"
// //               placeholder="Email"
// //               value={email}
// //               required
// //               onChange={(e) => setEmail(e.target.value)}
// //             />
// //           </div>

// //           <div className="mb-3 position-relative">
// //             <input
// //               type={showPassword ? 'text' : 'password'}
// //               className="form-control"
// //               placeholder="Password"
// //               value={password}
// //               required
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //             <i
// //               className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} position-absolute top-50 end-0 translate-middle-y me-3`}
// //               onClick={() => setShowPassword(!showPassword)}
// //               style={{ cursor: 'pointer' }}
// //             ></i>
// //           </div>

// //           <div className="d-grid mb-3">
// //             <button type="submit" className="btn btn-primary">Login</button>
// //           </div>
// //         </form>

// //         <div className="text-center mt-3">
// //           <p>
// //             Don’t have an account?{' '}
// //             <Link to="/register" className="text-decoration-none">Register</Link>
// //           </p>
// //           <p>
// //             <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // export default function Login() {
// //   const [emailOrPhone, setEmailOrPhone] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [showPassword, setShowPassword] = useState(false);
// //   const navigate = useNavigate();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();

// //     const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrPhone);
// //     const isPhone = /^[0-9]{10}$/.test(emailOrPhone);

// //     if (!isEmail && !isPhone) {
// //       alert('Please enter a valid email or 10-digit phone number.');
// //       return;
// //     }

// //     const payload = {
// //       identifier: emailOrPhone,
// //       password: password,
// //     };

// //     try {
// //       const res = await fetch('http://192.168.1.6:5000/api/admin/login', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(payload),
// //       });

// //       const data = await res.json();

// //       if (res.ok) {
// //         localStorage.setItem('token', data.token);
// //         alert('✅ Login successful!');
// //         navigate('/dashboard');
// //       } else {
// //         alert(`❌ ${data.message || 'Login failed'}`);
// //       }
// //     } catch (error) {
// //       console.error('Login error:', error);
// //       alert('Something went wrong. Try again later.');
// //     }
// //   };

// //   return (
// //     <div className="container py-5 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
// //       <div className="card shadow p-4 w-100" style={{ maxWidth: 400 }}>
// //         <h3 className="mb-4 text-center">Login</h3>
// //         <form onSubmit={handleLogin}>
// //           <div className="mb-3">
// //             <input
// //               type="text"
// //               className="form-control"
// //               placeholder="Email or Phone Number"
// //               value={emailOrPhone}
// //               required
// //               onChange={(e) => setEmailOrPhone(e.target.value)}
// //             />
// //           </div>

// //           <div className="mb-3 position-relative">
// //             <input
// //               type={showPassword ? 'text' : 'password'}
// //               className="form-control"
// //               placeholder="Password"
// //               value={password}
// //               required
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //             <i
// //               className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} position-absolute top-50 end-0 translate-middle-y me-3`}
// //               onClick={() => setShowPassword(!showPassword)}
// //               style={{ cursor: 'pointer' }}
// //             ></i>
// //           </div>

// //           <div className="d-grid mb-3">
// //             <button type="submit" className="btn btn-primary">Login</button>
// //           </div>
// //         </form>

// //         <div className="text-center">
// //           <p>
// //             Don’t have an account? <Link to="/register">Register</Link>
// //           </p>
// //           <p>
// //             <Link to="/forgot-password">Forgot Password?</Link>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // // }




// // import React from "react";
// // // import "./JanaushadhiLogin.css"; // custom styles if needed
// // // import logo from "./logo.png"; // update with your logo path

// // export default function JanaushadhiLogin() {
// //   return (
    
// //   );
// // }


// import React from "react";
// // import "./JanaushadhiLogin.css"; // custom styles if needed
// // import logo from "./logo.png"; // update with your logo path

// export default function JanaushadhiLogin() {
//   return (
//     <div className="container-fluid vh-100 p-0">
//       <div className="row g-0 h-100">
//         {/* Left side background */}
//         <div className="col-md-6 d-none d-md-block bg-blue position-relative text-white p-5">
//           <div className="position-absolute start-0 top-0 w-100 h-100 bg-overlay"></div>
//           <div className="position-relative" style={{ zIndex: 1 }}>
//             <h2 className="fw-bold mb-3">Pradhan Mantri Bhartiya Janaushadhi Pariyojana</h2>
//             <p>
//               A Project Was Launched To Increase The Number Of Janaushadhi Kendras To 25,000 Under Pradhan Mantri Bhartiya Janaushadhi Pariyojana.
//               Applications Are Invited To Open Janaushadhi Kendra In Every District Of The Country.
//             </p>
//           </div>
//         </div>

//         {/* Right side login form */}
//         <div className="col-md-6 col-12 d-flex align-items-center justify-content-center bg-white">
//           <div className="w-75">
//             <div className="text-center mb-4">
//               <img src='/assets/images/ruwalogocolor.png' alt="Logo" style={{ maxHeight: "80px" }} />
//               <h4 className="mt-3 fw-bold">Welcome</h4>
//               <p className="text-muted">Login to your account below</p>
//             </div>
//             <form>
//               <div className="mb-3">
//                 <label className="form-label">User Name<span className="text-danger">*</span></label>
//                 <input type="email" className="form-control" placeholder="Enter Email" required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Password<span className="text-danger">*</span></label>
//                 <div className="input-group">
//                   <input type="password" className="form-control" placeholder="Enter Password" required />
//                   <span className="input-group-text"><i className="bi bi-eye-slash"></i></span>
//                 </div>
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Captcha Code<span className="text-danger">*</span></label>
//                 <div className="input-group">
//                   <input type="text" className="form-control" placeholder="Enter Captcha" />
//                   <span className="input-group-text bg-light text-danger fw-bold">uZMMm2a</span>
//                   <span className="input-group-text bg-light"><i className="bi bi-arrow-clockwise"></i></span>
//                 </div>
//               </div>
//               <div className="d-flex justify-content-end mb-3">
//                 <a href="#" className="text-decoration-none text-primary">Forget Password ?</a>
//               </div>
//               <button type="submit" className="btn btn-primary w-100">LOGIN</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// } 

   import React from "react";


export default function Login() {
  return (
    <section className="">
      <div className="container-fluid">
        <div className="row overflow-hidden rounded-4 shadow">
          {/* Left side image + text */}
          <div
            className="col-md-6 d-none d-md-block text-white p-5"
            style={{
              backgroundImage: "url(/assets/images/janaushadhi-bg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0, 53, 128, 0.7)" }}></div>
            <div className="position-relative" style={{ zIndex: 1 }}>
              <h2 className="fw-bold mb-3">Pradhan Mantri Bhartiya Janaushadhi Pariyojana</h2>
              <p>
                A Project Was Launched To Increase The Number Of Janaushadhi Kendras To 25,000. Applications Are Invited To Open Janaushadhi Kendra In Every District Of The Country.
              </p>
            </div>
          </div>

          {/* Right side form */}
          <div className="col-md-6 bg-white p-5">
            <div className="text-center mb-4">
              <img src="/assets/images/ruwalogocolor.png" alt="Logo" style={{ maxHeight: "80px" }} />
              <h4 className="mt-3 fw-bold">Welcome</h4>
              <p className="text-muted">Login to your account below</p>
            </div>
            <form>
              <div className="mb-3">
                <label className="form-label">
                  User Name <span className="text-danger">*</span>
                </label>
                <input type="email" className="form-control" placeholder="Enter Email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Password <span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  <input type="password" className="form-control" placeholder="Enter Password" required />
                  <span className="input-group-text"><i className="bi bi-eye-slash"></i></span>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Captcha Code <span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Enter Captcha" />
                  <span className="input-group-text text-danger bg-light fw-bold">uZMMm2a</span>
                  <span className="input-group-text bg-light"><i className="bi bi-arrow-clockwise"></i></span>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-3">
                <a href="#" className="text-decoration-none text-primary">Forget Password?</a>
              </div>
              <button type="submit" className="btn btn-primary w-100">LOGIN</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
