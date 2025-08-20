// // // // import React, { useState } from 'react';

// // // // export default function Register() {
// // // //   const [form, setForm] = useState({ name: '', email: '', password: '' });
// // // //   const [error, setError] = useState('');

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     if (!form.name || !form.email || !form.password) return setError('All fields required.');
// // // //     alert('Registered Successfully!');
// // // //   };

// // // //   return (
// // // //     <div className="container mt-5">
// // // //       <h2>Register</h2>
// // // //       <form onSubmit={handleSubmit}>
// // // //         <input type="text" placeholder="Name" className="form-control my-2" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
// // // //         <input type="email" placeholder="Email" className="form-control my-2" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
// // // //         <input type="password" placeholder="Password" className="form-control my-2" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
// // // //         {error && <p className="text-danger">{error}</p>}
// // // //         <button type="submit" className="btn btn-success">Register</button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // }
// // // import React from 'react';
// // // import { Link } from 'react-router-dom';

// // // export default function Register() {
// // //   return (
// // //     <div className="flex justify-center items-center min-h-screen bg-gray-100">
// // //       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
// // //         <h2 className="text-xl text-gray-500 mb-1">Create a new account</h2>
// // //         <h1 className="text-2xl font-bold mb-6">Join RUWA</h1>
// // //         <input type="text" placeholder="Full Name" className="w-full p-2 mb-4 border rounded" />
// // //         <input type="email" placeholder="Email address" className="w-full p-2 mb-4 border rounded" />
// // //         <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
// // //         <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign up</button>
// // //         <p className="text-sm text-center mt-6">Already have an account? <Link to="/login" className="text-blue-600">Sign in</Link></p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // components/RegisterPopup.jsx
// // import React from 'react';

// // const Resigter = ({ onClose }) => {
// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
// //       <div className="bg-gradient-to-br from-red-500 to-red-700 text-white p-6 rounded-xl w-full max-w-md relative shadow-lg">
// //         <button className="absolute top-2 right-3 text-white text-xl font-bold" onClick={onClose}>×</button>

// //         <h2 className="text-2xl font-bold mb-2">Meet the <span className="font-extrabold">LEADER</span> in its Class</h2>
// //         <p className="mb-4">Stay informed. Share your details!</p>

// //         <form className="space-y-3">
// //           <input type="text" placeholder="Name" className="w-full p-2 rounded bg-white text-black" />
// //           <input type="text" placeholder="Mobile No." className="w-full p-2 rounded bg-white text-black" />
// //           <input type="email" placeholder="Email" className="w-full p-2 rounded bg-white text-black" />
// //           <select className="w-full p-2 rounded bg-white text-black">
// //             <option>DELHI</option>
// //             <option>MUMBAI</option>
// //             <option>KOLKATA</option>
// //             <option>BENGALURU</option>
// //           </select>

// //           <label className="flex items-center text-sm mt-2">
// //             <input type="checkbox" className="mr-2" />
// //             I agree to the <a href="#" className="underline font-bold">Terms of use</a>, <a href="#" className="underline font-bold">Privacy Policy</a> & <a href="#" className="underline font-bold">Data Collection Contract</a>
// //           </label>

// //           <button type="submit" className="w-full bg-white text-red-600 font-bold py-2 mt-2 rounded hover:bg-gray-200">
// //             SUBMIT
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Resigter;
// // // components/RegisterPopup.jsx
// // import React from 'react';
// // // import './RegisterPopup.css'; // Custom CSS for styling

// // const Resigter = ({ onClose }) => {
// //   return (
// //     <div className="popup-overlay">
// //       <div className="popup-box">
// //         <button className="close-btn" onClick={onClose}>×</button>
// //         <h2><span className="bold-text">Meet the <strong>LEADER</strong></span> in its Class</h2>
// //         <p>Stay informed. Share your details!</p>

// //         <form className="form-fields">
// //           <div className="input-row">
// //             <input type="text" placeholder="Name" />
// //             <input type="text" placeholder="Mobile No." />
// //           </div>
// //           <div className="input-row">
// //             <input type="email" placeholder="Email" />
// //             <select>
// //               <option>DELHI</option>
// //               <option>MUMBAI</option>
// //               <option>PUNE</option>
// //               <option>BENGALURU</option>
// //             </select>
// //           </div>

// //           <div className="checkbox-row">
// //             <input type="checkbox" id="terms" />
// //             <label htmlFor="terms">
// //               I agree to the <a href="#">Terms Of use</a>, <a href="#">Privacy Policy</a> & <a href="#">Data Collection Contract</a>
// //             </label>
// //           </div>

// //           <button type="submit" className="submit-btn">SUBMIT</button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Resigter;
// // import React, { useState } from 'react';
// // import { Eye, EyeOff, Link } from 'lucide-react';

// // const Register = ({ onClose }) => {
// //   const [step, setStep] = useState(1);
// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     mobile: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //     otp: '',
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

// //   const validateForm = () => {
// //     let errs = {};
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     const phoneRegex = /^[0-9]{10}$/;

// //     if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
// //     if (!phoneRegex.test(formData.mobile)) errs.mobile = 'Enter valid 10-digit mobile number';
// //     if (!emailRegex.test(formData.email)) errs.email = 'Enter valid email';
// //     if (!formData.password || formData.password.length < 6) errs.password = 'Password must be at least 6 characters';
// //     if (formData.password !== formData.confirmPassword) errs.confirmPassword = 'Passwords do not match';

// //     setErrors(errs);
// //     return Object.keys(errs).length === 0;
// //   };

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSendOtp = (e) => {
// //     e.preventDefault();
// //     if (validateForm()) {
// //       setStep(2);
// //     }
// //   };

// //   const handleVerifyOtp = (e) => {
// //     e.preventDefault();
// //     if (formData.otp.length === 6) {
// //       setStep(3);
// //       setTimeout(() => {
// //         onClose();
// //       }, 2000);
// //     } else {
// //       setErrors({ otp: 'Enter valid 6-digit OTP' });
// //     }
// //   };

// //   return (
// //     <div style={styles.overlay}>
// //       <div style={styles.box}>
// //         <button style={styles.closeBtn} onClick={onClose}>×</button>

// //         {step === 1 && (
// //           <form onSubmit={handleSendOtp}>
// //             <h2>Register</h2>
// //             <input
// //               type="text"
// //               name="fullName"
// //               placeholder="Full Name"
// //               value={formData.fullName}
// //               onChange={handleChange}
// //               style={styles.input}
// //             />
// //             {errors.fullName && <p style={styles.error}>{errors.fullName}</p>}

// //             <input
// //               type="text"
// //               name="mobile"
// //               placeholder="Mobile No."
// //               value={formData.mobile}
// //               onChange={handleChange}
// //               style={styles.input}
// //             />
// //             {errors.mobile && <p style={styles.error}>{errors.mobile}</p>}

// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               style={styles.input}
// //             />
// //             {errors.email && <p style={styles.error}>{errors.email}</p>}

// //             <div style={styles.passwordWrapper}>
// //               <input
// //                 type={showPassword ? 'text' : 'password'}
// //                 name="password"
// //                 placeholder="Password"
// //                 value={formData.password}
// //                 onChange={handleChange}
// //                 style={styles.input}
// //               />
// //               <button
// //                 type="button"
// //                 onClick={() => setShowPassword(!showPassword)}
// //                 style={styles.toggleBtn}
// //               >
// //                 {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
// //               </button>
// //             </div>
// //             {errors.password && <p style={styles.error}>{errors.password}</p>}

// //             <div style={styles.passwordWrapper}>
// //               <input
// //                 type={showConfirmPassword ? 'text' : 'password'}
// //                 name="confirmPassword"
// //                 placeholder="Re-enter Password"
// //                 value={formData.confirmPassword}
// //                 onChange={handleChange}
// //                 style={styles.input}
// //               />
// //               <button
// //                 type="button"
// //                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
// //                 style={styles.toggleBtn}
// //               >
// //                 {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
// //               </button>
// //             </div>
// //             {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}

// //             <div style={{ marginBottom: '1rem' }}>
// //               <input type="checkbox" required /> I agree to the <a href="#">Terms</a>, <a href="#">Privacy Policy</a>
// //             </div>

// //             <button type="submit" style={styles.button}>Send OTP</button>

// //             <div style={{ marginTop: '1rem', textAlign: 'center' }}>
// //               <Link href="/forgot-password" style={styles.link}>Forgot Password?</Link> | <Link href="/login" style={styles.link}>Login</Link>
// //             </div>
// //           </form>
// //         )}

// //         {step === 2 && (
// //           <form onSubmit={handleVerifyOtp}>
// //             <h2>Enter OTP</h2>
// //             <input
// //               type="text"
// //               name="otp"
// //               placeholder="Enter 6-digit OTP"
// //               value={formData.otp}
// //               onChange={handleChange}
// //               style={styles.input}
// //             />
// //             {errors.otp && <p style={styles.error}>{errors.otp}</p>}
// //             <button type="submit" style={styles.button}>Verify & Register</button>
// //           </form>
// //         )}

// //         {step === 3 && (
// //           <div style={{ textAlign: 'center' }}>
// //             <h3 style={{ color: 'green' }}>🎉 Registered Successfully!</h3>
// //             <p>Welcome aboard.</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   overlay: {
// //     position: 'fixed', top: 0, left: 0,
// //     width: '100vw', height: '100vh',
// //     backgroundColor: 'rgba(0,0,0,0.5)',
// //     display: 'flex', justifyContent: 'center', alignItems: 'center',
// //     zIndex: 9999, padding: '1rem'
// //   },
// //   box: {
// //     background: '#fff', padding: '2rem', borderRadius: '10px',
// //     maxWidth: '400px', width: '100%', position: 'relative', boxShadow: '0 0 20px rgba(0,0,0,0.2)'
// //   },
// //   closeBtn: {
// //     position: 'absolute', top: '10px', right: '15px', fontSize: '22px',
// //     background: 'none', border: 'none', cursor: 'pointer'
// //   },
// //   input: {
// //     width: '100%', padding: '0.5rem', marginBottom: '0.5rem', borderRadius: '5px', border: '1px solid #ccc'
// //   },
// //   button: {
// //     width: '100%', padding: '0.75rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px'
// //   },
// //   error: {
// //     color: 'red', fontSize: '0.85rem', marginBottom: '0.5rem'
// //   },
// //   link: {
// //     color: '#007bff', textDecoration: 'none'
// //   },
// //   passwordWrapper: {
// //     position: 'relative'
// //   },
// //   toggleBtn: {
// //     position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)',
// //     background: 'none', border: 'none', color: '#007bff', cursor: 'pointer'
// //   }
// // };

// // export default Register;


// import React, { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';
// import { useNavigate,Link } from 'react-router-dom';

// const Register = ({ onClose }) => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     mobile: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     otp: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const navigate = useNavigate('/');

//   const validateForm = () => {
//     let errs = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[0-9]{10}$/;

//     if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
//     if (!phoneRegex.test(formData.mobile)) errs.mobile = 'Enter valid 10-digit mobile number';
//     if (!emailRegex.test(formData.email)) errs.email = 'Enter valid email';
//     if (!formData.password || formData.password.length < 6) errs.password = 'Password must be at least 6 characters';
//     if (formData.password !== formData.confirmPassword) errs.confirmPassword = 'Passwords do not match';

//     setErrors(errs);
//     return Object.keys(errs).length === 0;
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSendOtp = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setStep(2);
//     }
//   };

//   const handleVerifyOtp = (e) => {
//     e.preventDefault();
//     if (formData.otp.length === 6) {
//       setStep(3);
//       setTimeout(() => {
//         onClose();
//       }, 2000);
//     } else {
//       setErrors({ otp: 'Enter valid 6-digit OTP' });
//     }
//   };

//   return (
//     <div style={styles.overlay}>
//       <div style={styles.box}>
//         <button style={styles.closeBtn} onClick={onClose}>×</button>

//         {step === 1 && (
//           <form onSubmit={handleSendOtp}>
//             <h2>Register</h2>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={handleChange}
//               style={styles.input}
//             />
//             {errors.fullName && <p style={styles.error}>{errors.fullName}</p>}

//             <input
//               type="text"
//               name="mobile"
//               placeholder="Mobile No."
//               value={formData.mobile}
//               onChange={handleChange}
//               style={styles.input}
//             />
//             {errors.mobile && <p style={styles.error}>{errors.mobile}</p>}

//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               style={styles.input}
//             />
//             {errors.email && <p style={styles.error}>{errors.email}</p>}

//             <div style={styles.passwordWrapper}>
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 style={styles.input}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 style={styles.toggleBtn}
//               >
//                 {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//               </button>
//             </div>
//             {errors.password && <p style={styles.error}>{errors.password}</p>}

//             <div style={styles.passwordWrapper}>
//               <input
//                 type={showConfirmPassword ? 'text' : 'password'}
//                 name="confirmPassword"
//                 placeholder="Re-enter Password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 style={styles.input}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 style={styles.toggleBtn}
//               >
//                 {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//               </button>
//             </div>
//             {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}

//             <div style={{ marginBottom: '1rem' }}>
//               <input type="checkbox" required /> I agree to the <a href="#">Terms</a>, <a href="#">Privacy Policy</a>
//             </div>

//             <button type="submit" style={styles.button}>Send OTP</button>

//             {/* <div style={{ marginTop: '1rem', textAlign: 'center' }}>
//               <button
//                 type="button"
//                 onClick={() => {
//                   onClose();
//                   navigate('/forgot-password');
//                 }}
//                 style={{ ...styles.link, background: 'none', border: 'none', cursor: 'pointer' }}
//               >
//                 Forgot Password?
//               </button>
//               {" "} | {" "}
//               <button
//                 type="button"
//                 onClick={() => {
//                   onClose();
//                   navigate('/login');
//                 }}
//                 style={{ ...styles.link, background: 'none', border: 'none', cursor: 'pointer' }}
//               >
//                 Login
//               </button>
//             </div> */}
//             <div style={{ marginTop: '1rem', textAlign: 'center' }}>
//             <Link
//               // style={styles.link}
//               // onClick={() => {
//               //   navigate('/forgot-password');
//               //   onClose();
//               // }}
//               to="/forgot-password"
//             >
//               Forgot Password?
//             </Link> | <Link
//               // style={styles.link}
//               // onClick={() => {
//               //   navigate('/register');
//               //   onClose();
//               // }}
//               to="/login"
//             >
//               Login
//             </Link>
//           </div>
//           </form>
//         )}

//         {step === 2 && (
//           <form onSubmit={handleVerifyOtp}>
//             <h2>Enter OTP</h2>
//             <input
//               type="text"
//               name="otp"
//               placeholder="Enter 6-digit OTP"
//               value={formData.otp}
//               onChange={handleChange}
//               style={styles.input}
//             />
//             {errors.otp && <p style={styles.error}>{errors.otp}</p>}
//             <button type="submit" style={styles.button}>Verify & Register</button>
//           </form>
//         )}

//         {step === 3 && (
//           <div style={{ textAlign: 'center' }}>
//             <h3 style={{ color: 'green' }}>🎉 Registered Successfully!</h3>
//             <p>Welcome aboard.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   overlay: {
//     position: 'fixed', top: 0, left: 0,
//     width: '100vw', height: '100vh',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     display: 'flex', justifyContent: 'center', alignItems: 'center',
//     zIndex: 9999, padding: '1rem'
//   },
//   box: {
//     background: '#fff', padding: '2rem', borderRadius: '10px',
//     maxWidth: '400px', width: '100%', position: 'relative', boxShadow: '0 0 20px rgba(0,0,0,0.2)'
//   },
//   closeBtn: {
//     position: 'absolute', top: '10px', right: '15px', fontSize: '22px',
//     background: 'none', border: 'none', cursor: 'pointer'
//   },
//   input: {
//     width: '100%', padding: '0.5rem', marginBottom: '0.5rem', borderRadius: '5px', border: '1px solid #ccc'
//   },
//   button: {
//     width: '100%', padding: '0.75rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px'
//   },
//   error: {
//     color: 'red', fontSize: '0.85rem', marginBottom: '0.5rem'
//   },
//   link: {
//     color: '#007bff', textDecoration: 'none'
//   },
//   passwordWrapper: {
//     position: 'relative'
//   },
//   toggleBtn: {
//     position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)',
//     background: 'none', border: 'none', color: '#007bff', cursor: 'pointer'
//   }
// };

// export default Register;
 import React, { useState } from 'react';

export default function Resigter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    otp: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSendOtp = () => {
    // Here you can integrate with backend
    setShowOtpField(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation (can expand later)
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      formData.password !== formData.confirmPassword ||
      !formData.otp
    ) {
      alert('Please fill all fields correctly');
      return;
    }

    // Registration success simulation
    alert('Registered successfully!');
    // Optionally clear the form or close modal
  };

  return (
    <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title" id="registerModalLabel">Register</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleRegister}>

              <div className="mb-2">
                <input type="text" name="name" className="form-control" placeholder="Full Name" value={formData.name} onChange={handleChange} />
              </div>

              <div className="mb-2">
                <input type="email" name="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleChange} />
              </div>

              <div className="mb-2">
                <input type="tel" name="phone" className="form-control" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
              </div>

              <div className="mb-2 position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <i
                  className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} position-absolute top-50 end-0 translate-middle-y me-2`}
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>

              <div className="mb-2 position-relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <i
                  className={`bi ${showConfirmPassword ? "bi-eye-slash" : "bi-eye"} position-absolute top-50 end-0 translate-middle-y me-2`}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>

              <div className="mb-2 d-grid">
                <button type="button" className="btn btn-outline-primary" onClick={handleSendOtp}>Send OTP</button>
              </div>

              {showOtpField && (
                <div className="mb-2">
                  <input
                    type="text"
                    name="otp"
                    className="form-control"
                    placeholder="Enter OTP"
                    value={formData.otp}
                    onChange={handleChange}
                  />
                </div>
              )}

              <button type="submit" className="btn btn-primary w-100">Register</button>

              <div className="d-flex justify-content-between mt-3">
                <button type="button" className="btn btn-link p-0" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#forgotModal">
                  Forgot Password?
                </button>
                <button type="button" className="btn btn-link p-0" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#loginModal">
                  Login
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

