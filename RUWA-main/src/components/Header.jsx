
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// export default function Header() {
//   const { user, logout, login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // 🔧 Step 1: Remove Bootstrap Backdrop
//   const removeModalBackdrop = () => {
//     const backdrop = document.querySelector('.modal-backdrop');
//     if (backdrop) backdrop.remove();
//     document.body.classList.remove('modal-open');
//     document.body.style = '';
//   };

//   // 🔁 Step 2: On route change, remove leftover modal backdrop
//   // useEffect(() => {
//   //   removeModalBackdrop();
//   // }, [location.pathname]);
  
// //   useEffect(() => {
// //   const handlePopState = () => {
// //     removeModalBackdrop();
// //   };

// //   window.addEventListener('popstate', handlePopState);

// //   return () => {
// //     window.removeEventListener('popstate', handlePopState);
// //   };
// // }, []);

// // import { useEffect } from 'react';

// useEffect(() => {
//   const removeBackdrop = () => {
//     document.body.classList.remove('modal-open');
//     document.body.style = '';
//     const backdrops = document.querySelectorAll('.modal-backdrop');
//     backdrops.forEach((backdrop) => backdrop.remove());
//   };

//   // For all modals
//   const modals = document.querySelectorAll('.modal');
//   modals.forEach((modal) => {
//     modal.addEventListener('hidden.bs.modal', removeBackdrop);
//   });

//   // Cleanup on unmount
//   return () => {
//     modals.forEach((modal) => {
//       modal.removeEventListener('hidden.bs.modal', removeBackdrop);
//     });
//   };
// }, []);


//   // const handleLogin = (e) => {
//   //   e.preventDefault();

//   //   if (!email || !password) {
//   //     alert('Please enter all fields');
//   //     return;
//   //   }

//   //   const fakeUser = {
//   //     name: 'Ruwa User',
//   //     email: email,
//   //     profilePic: 'https://randomuser.me/api/portraits/men/75.jpg'
//   //   };

//   //   login(fakeUser);
//   //   navigate('/');
//   //   removeModalBackdrop(); // in case modal left behind
//   // };
// const handleLogin = (e) => {
//   e.preventDefault();

//   if (!email || !password) {
//     alert('Please enter all fields');
//     return;
//   }

//   const fakeUser = {
//     name: 'Ruwa User',
//     email: email,
//     profilePic: 'https://randomuser.me/api/portraits/men/75.jpg'
//   };

//   login(fakeUser);

//   // ✅ Show success alert
//   alert('Login Successful!');

//   // ✅ Hide login modal
//   const loginModal = window.bootstrap.Modal.getInstance(document.getElementById("loginModal"));
//   loginModal?.hide();

//   // ✅ Clean up any leftover backdrop
//   removeModalBackdrop();

//   // ✅ Redirect
//   navigate('/');
// };

//   // const handleLogout = () => {
//   //   logout();
//   //   removeModalBackdrop();
//   //   window.location.href = '/';
//   // };
//   const handleLogout = () => {
//   const confirmed = window.confirm("Are you sure you want to log out?");
//   if (confirmed) {
//     logout();
//     alert("Logged out successfully.");
//     navigate("/"); // optional: redirect after logout
//   }
// };

//   const closeOffcanvas = () => {
//     const offcanvasElement = document.getElementById('fbs__net-navbars');
//     const offcanvasInstance = window.bootstrap?.Offcanvas.getInstance(offcanvasElement);
//     if (offcanvasInstance) offcanvasInstance.hide();
    
//   };

//   const [registerData, setRegisterData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     age: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleRegisterChange = (e) => {
//     const { name, value } = e.target;
//     setRegisterData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleRegisterSubmit = (e) => {
//     e.preventDefault();

//     if (registerData.password !== registerData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     alert("Registered Successfully!");

//     const registerModal = window.bootstrap?.Modal.getInstance(document.getElementById("registerModal"));
//     registerModal?.hide();

//     removeModalBackdrop(); // Clear dark background

//     const loginModal = new window.bootstrap.Modal(document.getElementById("loginModal"));
//     loginModal.show();
//   };

//   return (
//     <>
//   <header className="fbs__net-navbar navbar bg-light navbar-expand-lg dark" aria-label="ruwa navbar">
//         <div className="container d-flex align-items-center justify-content-between">

//           <Link className="navbar-brand w-auto" to="/">
//             <img className="logo dark img-fluid d-lg-none" src="/assets/images/ruwalogocolor.png" alt="Ruwa India Logo" style={{ height: '50px' }} />
//             <img className="logo dark img-fluid d-none d-lg-block" src="/assets/images/ruwalogocolor.png" alt="Ruwa India Logo" style={{ height: '70px' }} />
//           </Link>

//           <div className="offcanvas offcanvas-start w-75" id="fbs__net-navbars" tabIndex="-1" aria-labelledby="fbs__net-navbarsLabel">
//             <div className="offcanvas-header justify-content-between align-items-center">
//               {user ? (
//                 <div className="d-flex align-items-center gap-2">
//                   <img src={user.profilePic || 'https://randomuser.me/api/portraits/men/75.jpg'} alt="User" style={{ width: 40, height: 40, borderRadius: '50%' }} />
//                   <strong className="text-dark">{user.name || 'User'}</strong>
//                 </div>
//               ) : (
//                 <Link className="logo-link" id="fbs__net-navbarsLabel" to="/">
//                   <img className="logo dark img-fluid" src="/assets/images/ruwalogocolor.png" alt="Ruwa India Logo" style={{ height: '70px' }} />
//                 </Link>
//               )}
//               <button className="btn-close btn-close-black ms-2" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//             </div>

//             <div className="offcanvas-body align-items-lg-center">
//               <ul className="navbar-nav nav me-auto ps-lg-5 mb-2 mb-lg-0">
//                 <li className="nav-item fw-bold fs-2">
//                   <Link className="nav-link scroll-link" onClick={closeOffcanvas} to="/">Home</Link>
//                 </li>
//                 <li className="nav-item fw-bold">
//                   <Link className="nav-link scroll-link" onClick={closeOffcanvas} to="/about">About Us</Link>
//                 </li>
//                 <li className="nav-item fw-bold">
//                   <Link className="nav-link scroll-link" onClick={closeOffcanvas} to="/services">Services</Link>
//                 </li>
//                  {/* <li className="nav-item fw-bold">
//                   <Link className="nav-link scroll-link" onClick={closeOffcanvas} to="/policy">Our Policy</Link>
//                 </li> */}
//                 <li className="nav-item fw-bold">
//                   <Link className="nav-link scroll-link" onClick={closeOffcanvas} to="/contact">Contact</Link>
//                 </li>
               
//               </ul>

//               <div className="d-lg-none mt-3">
//                 {!user ? (
//                   <>
//                     <button className="btn btn-primary w-100 mb-2" data-bs-toggle="modal" onClick={closeOffcanvas} data-bs-target="#registerModal">Register</button>
//                     <button className="btn btn-outline-dark w-100 mb-2" data-bs-toggle="modal" onClick={closeOffcanvas} data-bs-target="#loginModal">Login</button>
//                   </>
//                 ) : (
//                   <>
//                     <Link className="btn btn-outline-dark w-100 mb-2" onClick={closeOffcanvas} to="/profile">My Profile</Link>
//                     <Link className="btn btn-outline-dark w-100 mb-2" onClick={closeOffcanvas} to="/profilecard">Card</Link>
//                     <button className="btn btn-danger w-100" onClick={handleLogout}>Logout</button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="ms-auto w-auto d-none d-lg-flex">
//             <div className="header-social d-flex align-items-center gap-2">
//               {!user ? (
//                 <>
//                   <button className="btn btn-primary py-2" data-bs-toggle="modal" onClick={closeOffcanvas} data-bs-target="#registerModal">Register</button>
//                   <button className="btn btn-outline-light py-2" data-bs-toggle="modal" onClick={closeOffcanvas} data-bs-target="#loginModal">Login</button>
//                 </>
//               ) : (
//                 <div className="dropdown">
//                   <button className="btn btn-outline-light dropdown-toggle d-flex align-items-center" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
//                     <img src={user.profilePic || 'https://randomuser.me/api/portraits/men/75.jpg'} alt="avatar" style={{ width: 30, height: 30, borderRadius: '50%', marginRight: 8 }} />
//                     {user.name || 'User'}
//                   </button>
//                   <ul className="dropdown-menu" aria-labelledby="profileDropdown">
//                     <li><Link className="dropdown-item" to="/profile">My Profile</Link></li>
//                                         <Link className="dropdown-item" to="/profilecard">Card</Link>
//                     <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>

//           <button className="fbs__net-navbar-toggler justify-content-center align-items-center ms-auto" data-bs-toggle="offcanvas" data-bs-target="#fbs__net-navbars" aria-controls="fbs__net-navbars" aria-label="Toggle navigation" aria-expanded="false">
//             <svg className="fbs__net-icon-menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <line x1="21" x2="3" y1="6" y2="6"></line>
//               <line x1="15" x2="3" y1="12" y2="12"></line>
//               <line x1="17" x2="3" y1="18" y2="18"></line>
//             </svg>
//             <svg className="fbs__net-icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M18 6 6 18"></path>
//               <path d="m6 6 12 12"></path>
//             </svg>
//           </button>
//         </div>
//       </header>

//       {/* 👇 Example Register Modal */}
//       <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="registerModalLabel">Register</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={handleRegisterSubmit}>
//                 <input type="text" name="name" className="form-control mb-2" placeholder="Full Name" value={registerData.name} onChange={handleRegisterChange} required />
//                 <input type="email" name="email" className="form-control mb-2" placeholder="Email" value={registerData.email} onChange={handleRegisterChange} required />
//                 <input type="tel" name="phone" className="form-control mb-2" placeholder="Phone Number" value={registerData.phone} onChange={handleRegisterChange} required />
//                 <input type="number" name="age" className="form-control mb-2" placeholder="Age" value={registerData.age} onChange={handleRegisterChange} required />

//                 <div className="mb-2 position-relative">
//                   <input type="password" name="password" className="form-control" id="registerPassword" placeholder="Password" value={registerData.password} onChange={handleRegisterChange} required />
//                   <i className="bi bi-eye position-absolute top-50 end-0 translate-middle-y me-3" style={{ cursor: 'pointer' }} onClick={() => {
//                     const input = document.getElementById('registerPassword');
//                     input.type = input.type === 'password' ? 'text' : 'password';
//                   }}></i>
//                 </div>

//                 <div className="mb-2 position-relative">
//                   <input type="password" name="confirmPassword" className="form-control" id="registerConfirmPassword" placeholder="Confirm Password" value={registerData.confirmPassword} onChange={handleRegisterChange} required />
//                   <i className="bi bi-eye position-absolute top-50 end-0 translate-middle-y me-3" style={{ cursor: 'pointer' }} onClick={() => {
//                     const input = document.getElementById('registerConfirmPassword');
//                     input.type = input.type === 'password' ? 'text' : 'password';
//                   }}></i>
//                 </div>

//                 <button type="submit" className="btn btn-primary w-100">Register</button>

//                 <div className="d-flex justify-content-between mt-3">
//                   <Link data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#forgotModal">Forgot Password?</Link>
//                   <Link data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#loginModal">Login</Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* login model  */}
// <div
//   className="modal fade"
//   id="loginModal"
//   tabIndex="-1"
//   aria-labelledby="loginModalLabel"
//   aria-hidden="true"
// >
//   <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title" id="loginModalLabel">Login</h5>
//         <button
//           type="button"
//           className="btn-close"
//           data-bs-dismiss="modal"
//           aria-label="Close"
//         ></button>
//       </div>

//       <div className="modal-body">
//         {/* Login Form Starts Here */}
//         <div className="container">
//           <div className="w-100 mx-auto" style={{ maxWidth: 400 }}>
//             <form onSubmit={handleLogin}>
//               <div className="mb-3">
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Email"
//                   value={email}
//                   required
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>

//               <div className="mb-3 position-relative">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   className="form-control"
//                   placeholder="Password"
//                   value={password}
//                   required
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <i
//                   className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} position-absolute top-50 end-0 translate-middle-y me-3`}
//                   onClick={() => setShowPassword(!showPassword)}
//                   style={{ cursor: 'pointer' }}
//                 ></i>
//               </div>

//               <div className="d-grid mb-3">
//                 <button type="submit" className="btn btn-primary">Login</button>
//               </div>
//             </form>

//             <div className="text-center mt-3">
//               <p>
//                 Don’t have an account?{' '}
//                 <Link
//               // type="Link"
//               // className="btn btn-link p-0"
//               data-bs-dismiss="modal"
//               data-bs-toggle="modal"
//               data-bs-target="#registerModal"
//             >
//               Register
//             </Link>
//               </p>
//               <p>
//                 <Link
//               type="Link"
//               // className="btn btn-link p-0"
//               data-bs-dismiss="modal"
//               data-bs-toggle="modal"
//               data-bs-target="#forgotModal"
//             >
//               Forgot Password?
//             </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* Login Form Ends Here */}
//       </div>
//     </div>
//   </div>
// </div>


//       {/* Forgot Password Modal */}
// <div className="modal fade" id="forgotModal" tabIndex="-1" aria-labelledby="forgotModalLabel" aria-hidden="true">
//   <div className="modal-dialog modal-dialog-centered">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h5 className="modal-title" id="forgotModalLabel">Forgot Password</h5>
//         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div className="modal-body">
//         <form>
//           <div className="mb-3">
//             <label className="form-label">Enter your email or phone</label>
//             <input type="text" className="form-control" placeholder="Email or phone number" />
//           </div>
//           <button type="submit" className="btn btn-primary w-100">Reset Password</button>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>
   
//       {/* 👇 Same for LoginModal, ForgotModal — just ensure backdrop logic is handled on close or submit */}
//     </>
//   );
// }




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// export default function Header() {
//   const { user, logout } = useAuth();

//   const handleLogout = () => {
//     logout();
//     window.location.href = '/login'; // Redirect after logout
//   };

//   return (
//     <>
//       <header className="fbs__net-navbar navbar navbar-expand-lg dark" aria-label="ruwa navbar">
//         <div className="container d-flex align-items-center justify-content-between">
          
//           {/* Logo for all screens */}
//           <Link className="navbar-brand w-auto" to="/">
//             <img
//               className="logo dark img-fluid d-lg-none"
//               src="/assets/images/ruwalogocolor.png"
//               alt="Ruwa India Logo"
//               style={{ height: '50px' }}
//             />
//             <img
//               className="logo dark img-fluid d-none d-lg-block"
//               src="/assets/images/ruwalogocolor.png"
//               alt="Ruwa India Logo"
//               style={{ height: '70px' }}
//             />
//           </Link>

//           <div
//             className="offcanvas offcanvas-start w-75"
//             id="fbs__net-navbars"
//             tabIndex="-1"
//             aria-labelledby="fbs__net-navbarsLabel"
//           >
//             <div className="offcanvas-header justify-content-between align-items-center">
//               {user ? (
//                 <div className="d-flex align-items-center gap-2">
//                   <img
//                     src={user.profilePic || 'https://randomuser.me/api/portraits/men/75.jpg'}
//                     alt="User"
//                     style={{ width: 40, height: 40, borderRadius: '50%' }}
//                   />
//                   <strong className="text-dark">{user.name || 'User'}</strong>
//                 </div>
//               ) : (
//                 <Link className="logo-link" id="fbs__net-navbarsLabel" to="/">
//                   <img
//                     className="logo dark img-fluid"
//                     src="/assets/images/ruwalogocolor.png"
//                     alt="Ruwa India Logo"
//                     style={{ height: '70px' }}
//                   />
//                 </Link>
//               )}
//               <button
//                 className="btn-close btn-close-black ms-2"
//                 type="button"
//                 data-bs-dismiss="offcanvas"
//                 aria-label="Close"
//               ></button>
//             </div>

//             <div className="offcanvas-body align-items-lg-center">
//               <ul className="navbar-nav nav me-auto ps-lg-5 mb-2 mb-lg-0">
//                 <li className="nav-item fw-bold fs-2">
//                   <Link className="nav-link scroll-link" to="/">
//                     Home
//                   </Link>
//                 </li>
//                 <li className="nav-item fw-bold">
//                   <Link className="nav-link scroll-link" to="/about">
//                     About Us
//                   </Link>
//                 </li>
//                 <li className="nav-item fw-bold">
//                   <Link className="nav-link scroll-link" to="/services">
//                     Services
//                   </Link>
//                 </li>
//                 <li className="nav-item fw-bold">
//                   <Link className="nav-link scroll-link" to="/contact">
//                     Contact
//                   </Link>
//                 </li>
//               </ul>

//               <div className="d-lg-none mt-3">
//                 {!user ? (
//                   <>
//                     <Link className="btn btn-primary w-100 mb-2" to="/register">
//                       Register
//                     </Link>
//                     <Link className="btn btn-outline-dark w-100 mb-2" to="/login">
//                       Login
//                     </Link>
//                   </>
//                 ) : (
//                   <>
//                     <Link className="btn btn-outline-dark w-100 mb-2" to="/profile">
//                       My Profile
//                     </Link>
//                     <button className="btn btn-danger w-100" onClick={handleLogout}>
//                       Logout
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="ms-auto w-auto d-none d-lg-flex">
//             <div className="header-social d-flex align-items-center gap-2">
//               {!user ? (
//                 <>
//                   <Link className="btn btn-primary py-2" to="/register">
//                     Register
//                   </Link>
//                   <Link className="btn btn-outline-light py-2" to="/login">
//                     Login
//                   </Link>
//                 </>
//               ) : (
//                 <div className="dropdown">
//                   <button
//                     className="btn btn-outline-light dropdown-toggle d-flex align-items-center"
//                     id="profileDropdown"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     <img
//                       src={user.profilePic || 'https://randomuser.me/api/portraits/men/75.jpg'}
//                       alt="avatar"
//                       style={{ width: 30, height: 30, borderRadius: '50%', marginRight: 8 }}
//                     />
//                     {user.name || 'User'}
//                   </button>
//                   <ul className="dropdown-menu" aria-labelledby="profileDropdown">
//                     <li>
//                       <Link className="dropdown-item" to="/profile">
//                         My Profile
//                       </Link>
//                     </li>
//                     <li>
//                       <button className="dropdown-item" onClick={handleLogout}>
//                         Logout
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>

//           <button
//             className="fbs__net-navbar-toggler justify-content-center align-items-center ms-auto"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#fbs__net-navbars"
//             aria-controls="fbs__net-navbars"
//             aria-label="Toggle navigation"
//             aria-expanded="false"
//           >
//             <svg className="fbs__net-icon-menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
//               viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
//               strokeLinejoin="round">
//               <line x1="21" x2="3" y1="6" y2="6"></line>
//               <line x1="15" x2="3" y1="12" y2="12"></line>
//               <line x1="17" x2="3" y1="18" y2="18"></line>
//             </svg>
//             <svg className="fbs__net-icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
//               viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
//               strokeLinejoin="round">
//               <path d="M18 6 6 18"></path>
//               <path d="m6 6 12 12"></path>
//             </svg>
//           </button>
//         </div>
//       </header>
//     </>
//   );
// }




















import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import axios from 'axios';



export default function Header() {
  const { user, logout, login } = useAuth(); // Destructure login, not just user and logout
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to remove Bootstrap modal backdrops
  const removeModalBackdrop = () => {
    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(backdrop => backdrop.remove());
    document.body.classList.remove('modal-open');
    document.body.style = '';
  };

  // Clear backdrops on route change
  useEffect(() => {
    removeModalBackdrop();
  }, [location.pathname]);

  // Use the login function from AuthContext directly
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!phone || !password) {
      alert('Please enter phone and password');
      return;
    }
    
    // Call the login function from AuthContext
    const result = await login(phone, password);
    
    if (result.success) {
      // Logic for successful login
      const loginModalElement = document.getElementById('loginModal');
      const loginModal = window.bootstrap.Modal.getInstance(loginModalElement);
      if (loginModal) {
        loginModal.hide();
      }
      navigate('/');
    } else {
      // Logic for failed login
      alert(result.error);
    }
  };

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to log out?');
    if (confirmed) {
      logout();
      alert('Logged out successfully.');
    }
  };

  const closeOffcanvas = () => {
    const offcanvasElement = document.getElementById('fbs__net-navbars');
    const offcanvasInstance = window.bootstrap?.Offcanvas.getInstance(offcanvasElement);
    if (offcanvasInstance) offcanvasInstance.hide();
  };

  const [registerData, setRegisterData] = useState({
    name: '',
    phone: '',
    password: '',
    confirmPassword: '',
    aadhar:'',
  });

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/auth/register', {
        name: registerData.name,
        phone: registerData.phone,
        password: registerData.password,
        aadhar:registerData.aadhar
      });

      if (response.data.token) {
        alert('Registered Successfully!');
        
        // Hide the register modal
        const registerModalElement = document.getElementById('registerModal');
        const registerModal = window.bootstrap.Modal.getInstance(registerModalElement);
        if (registerModal) {
          registerModal.hide();
        }

        // Remove backdrop and show login modal
        removeModalBackdrop();
        const loginModal = new window.bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <>
      <header
        className="fbs__net-navbar navbar bg-light navbar-expand-lg dark"
        aria-label="ruwa navbar"
      >
        <div className="container d-flex align-items-center justify-content-between">
          <Link className="navbar-brand w-auto" to="/">
            <img
              className="logo dark img-fluid d-lg-none"
              src="\assets\images\logowithoutbg.png"
              alt="Ruwa India Logo"
              style={{ height: '50px' }}
            />
            <img
              className="logo dark img-fluid d-none d-lg-block"
              src="\assets\images\logowithoutbg.png"
              alt="Ruwa India Logo"
              style={{ height: '70px' }}
            />
          </Link>

          <div
            className="offcanvas offcanvas-start w-75"
            id="fbs__net-navbars"
            tabIndex="-1"
            aria-labelledby="fbs__net-navbarsLabel"
          >
            <div className="offcanvas-header justify-content-between align-items-center">
              {user ? (
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={
                      user.profilePic ||
                      'https://randomuser.me/api/portraits/men/75.jpg'
                    }
                    alt="User"
                    style={{ width: 40, height: 40, borderRadius: '50%' }}
                  />
                  <strong className="text-dark">
  {user.name ? user.name.charAt(0).toUpperCase() + user.name.slice(1) : 'User'}
</strong>

                </div>
              ) : (
                <Link className="logo-link" id="fbs__net-navbarsLabel" to="/">
                  <img
                    className="logo dark img-fluid"
                    src="\assets\images\logowithoutbg.png"
                    alt="Ruwa India Logo"
                    style={{ height: '70px' }}
                  />
                </Link>
              )}
              <button
                className="btn-close btn-close-black ms-2"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body align-items-lg-center">
              <ul className="navbar-nav nav me-auto ps-lg-5 mb-2 mb-lg-0">
                <li className="nav-item fw-bold fs-2">
                  <Link
                    className="nav-link scroll-link"
                    onClick={closeOffcanvas}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item fw-bold">
                  <Link
                    className="nav-link scroll-link"
                    onClick={closeOffcanvas}
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item fw-bold">
                  <Link
                    className="nav-link scroll-link"
                    onClick={closeOffcanvas}
                    to="/services"
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item fw-bold">
                  <Link
                    className="nav-link scroll-link"
                    onClick={closeOffcanvas}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="d-lg-none mt-3">
                {!user ? (
                  <>
                    <button
                      className="btn btn-primary w-100 mb-2"
                      data-bs-toggle="modal"
                      onClick={closeOffcanvas}
                      data-bs-target="#registerModal"
                    >
                      Register
                    </button>
                    <button
                      className="btn btn-outline-dark w-100 mb-2"
                      data-bs-toggle="modal"
                      onClick={closeOffcanvas}
                      data-bs-target="#loginModal"
                    >
                      Login
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      className="btn btn-outline-dark w-100 mb-2"
                      onClick={closeOffcanvas}
                      to="/profile"
                    >
                      My Profile
                    </Link>
                    <Link
                      className="btn btn-outline-dark w-100 mb-2"
                      onClick={closeOffcanvas}
                      to="/profilecard"
                    >
                      Card
                    </Link>
                    <button
                      className="btn btn-danger w-100"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="ms-auto w-auto d-none d-lg-flex">
            <div className="header-social d-flex align-items-center gap-2">
              {!user ? (
                <>
                  <button
                    className="btn btn-primary py-2"
                    data-bs-toggle="modal"
                    onClick={closeOffcanvas}
                    data-bs-target="#registerModal"
                  >
                    Register
                  </button>
                  <button
                    className="btn btn-outline-light py-2"
                    data-bs-toggle="modal"
                    onClick={closeOffcanvas}
                    data-bs-target="#loginModal"
                  >
                    Login
                  </button>
                </>
              ) : (
                <div className="dropdown">
                  <button
                    className="btn btn-outline-light dropdown-toggle d-flex align-items-center"
                    id="profileDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={
                        user.profilePic ||
                        'https://randomuser.me/api/portraits/men/75.jpg'
                      }
                      alt="avatar"
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: '50%',
                        marginRight: 8,
                      }}
                    />
                   {user.name ? user.name.charAt(0).toUpperCase() + user.name.slice(1) : 'User'}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="profileDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        My Profile
                      </Link>
                    </li>
                    <Link className="dropdown-item" to="/profilecard">
                      Card
                    </Link>
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <button
            className="fbs__net-navbar-toggler justify-content-center align-items-center ms-auto"
            data-bs-toggle="offcanvas"
            data-bs-target="#fbs__net-navbars"
            aria-controls="fbs__net-navbars"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            <svg
              className="fbs__net-icon-menu"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="21" x2="3" y1="6" y2="6"></line>
              <line x1="15" x2="3" y1="12" y2="12"></line>
              <line x1="17" x2="3" y1="18" y2="18"></line>
            </svg>
            <svg
              className="fbs__net-icon-close"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* 👇 Example Register Modal */}
      <div
        className="modal fade"
        id="registerModal"
        tabIndex="-1"
        aria-labelledby="registerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="registerModalLabel">
                Register
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleRegisterSubmit}>
                <input
                  type="text"
                  name="name"
                  className="form-control mb-2"
                  placeholder="Full Name"
                  value={registerData.name}
                  onChange={handleRegisterChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  className="form-control mb-2"
                  placeholder="Phone Number"
                  value={registerData.phone}
                  onChange={handleRegisterChange}
                  required
                />
                <input
                  type="text"
                  name="aadhar"
                  className="form-control mb-2"
                  placeholder="Aadhar Number"
                  value={registerData.aadhar}
                  onChange={handleRegisterChange}
                  required
                />
                <input
                  type="number"
                  name="age"
                  className="form-control mb-2"
                  placeholder="Age"
                  value={registerData.age}
                  onChange={handleRegisterChange}
                  required
                />

                <div className="mb-2 position-relative">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="registerPassword"
                    placeholder="Password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    required
                  />
                  <i
                    className="bi bi-eye position-absolute top-50 end-0 translate-middle-y me-3"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      const input = document.getElementById('registerPassword');
                      input.type =
                        input.type === 'password' ? 'text' : 'password';
                    }}
                  ></i>
                </div>

                <div className="mb-2 position-relative">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    id="registerConfirmPassword"
                    placeholder="Confirm Password"
                    value={registerData.confirmPassword}
                    onChange={handleRegisterChange}
                    required
                  />
                  <i
                    className="bi bi-eye position-absolute top-50 end-0 translate-middle-y me-3"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      const input = document.getElementById(
                        'registerConfirmPassword',
                      );
                      input.type =
                        input.type === 'password' ? 'text' : 'password';
                    }}
                  ></i>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      

      {/* login model  */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {/* Login Form Starts Here */}
              <div className="container">
                <div className="w-100 mx-auto" style={{ maxWidth: 400 }}>
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                        value={phone}
                        required
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="mb-3 position-relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <i
                        className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} position-absolute top-50 end-0 translate-middle-y me-3`}
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ cursor: 'pointer' }}
                      ></i>
                    </div>

                    <div className="d-grid mb-3">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </form>

                  <div className="text-center mt-3">
                    <p>
                      Don’t have an account?{' '}
                      <Link
                        data-bs-dismiss="modal"
                        data-bs-toggle="modal"
                        data-bs-target="#registerModal"
                      >
                        Register
                      </Link>
                    </p>
                    <p>
                      <Link
                        type="Link"
                        data-bs-dismiss="modal"
                        data-bs-toggle="modal"
                        data-bs-target="#forgotModal"
                      >
                        Forgot Password?
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              {/* Login Form Ends Here */}
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <div
        className="modal fade"
        id="forgotModal"
        tabIndex="-1"
        aria-labelledby="forgotModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="forgotModalLabel">
                Forgot Password
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">
                    Enter your email or phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email or phone number"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}