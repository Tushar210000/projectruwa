// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // const ForgetPassword = () => {
// //   const [email, setEmail] = useState('');
// //   const [submitted, setSubmitted] = useState(false);
// //   const [error, setError] = useState('');

// //   const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setError('');

// //     if (!email) {
// //       setError('Email is required');
// //     } else if (!isValidEmail(email)) {
// //       setError('Enter a valid email');
// //     } else {
// //       setSubmitted(true);
// //       // API call goes here
// //       console.log('Reset link sent to:', email);
// //     }
// //   };

// //   return (
// //     <div
// //       className="vh-"
// //       style={{
// //         background: 'linear-gradient(135deg, #d6f8e5, #d9e9ff)',
// //         padding: '1rem',
// //       }}
// //     >
// //       {/* Logo & Brand */}
// //       <div className="d-flex justify-content-between align-items-start mb-4 w-100">
// //         <img
// //           src="img/marketinglogo.png"
// //           alt="Logo"
// //           style={{ width: '70px', height: '70px', objectFit: 'contain' }}
// //         />
// //         <h4 className="mb-0 mt-2 fw-bold text-dark">
// //           Marketing Mantra <sup className="text-muted">TM</sup>
// //         </h4>
// //       </div>

// //       {/* Forgot Form */}
// //       <div className="d-flex justify-content-center w-70 align-items-center h-100">
// //         <div
// //           className="bg-white p-4 p-md-5 rounded shadow-sm"
// //           style={{ width: '100%', maxWidth: '400px' }}
// //         >
// //           <div className="d-flex justify-content-between align-items-center mb-4">
// //             <h4 className="fw-bold">Forgot Password</h4>
// //             <Link to="/login" className="text-primary text-decoration-none">
// //               Back to Login
// //             </Link>
// //           </div>

// //           {submitted ? (
// //             <div className="alert alert-success">
// //               A reset link has been sent to <strong>{email}</strong>
// //             </div>
// //           ) : (
// //             <form onSubmit={handleSubmit}>
// //               <div className="mb-3">
// //                 <label className="form-label">Email Address</label>
// //                 <input
// //                   type="email"
// //                   className={`form-control ${error ? 'is-invalid' : ''}`}
// //                   placeholder="Enter your email"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                 />
// //                 {error && <div className="invalid-feedback">{error}</div>}
// //               </div>

// //               <button type="submit" className="btn btn-primary w-100">
// //                 Send Reset Link
// //               </button>
// //             </form>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ForgetPassword;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const ForgetPassword = () => {
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState('');

//   const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');

//     if (!email) {
//       setError('Email is required');
//     } else if (!isValidEmail(email)) {
//       setError('Enter a valid email');
//     } else {
//       setSubmitted(true);
//       // API call goes here
//       console.log('Reset link sent to:', email);
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-card">
//         <img
//           src="/img/marketinglogo.png"
//           alt="Logo"
//           className="login-logo"
//         />
//         <h4 className="login-welcome">Reset your password</h4>

//         {submitted ? (
//           <div className="alert alert-success">
//             A reset link has been sent to <strong>{email}</strong>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 className={`form-control ${error ? 'is-invalid' : ''}`}
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {error && <div className="invalid-feedback">{error}</div>}
//             </div>

//             <button type="submit" className="btn btn-magento w-100 mt-3">
//               Send Reset Link
//             </button>

//             <div className="text-center mt-3">
//               <Link to="/login" className="text-decoration-none text-primary">
//                 Back to Login
//               </Link>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgetPassword;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email is required');
    } else if (!isValidEmail(email)) {
      setError('Enter a valid email');
    } else {
      setSubmitted(true);
      // API call would go here
      console.log('Reset link sent to:', email);
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
        <h4 className="login-welcome">Reset your password</h4>

        {submitted ? (
          <>
            <div className="alert alert-success">
              A reset link has been sent to <strong>{email}</strong>
            </div>
            <button
              className="btn btn-magento w-100 mt-3"
              onClick={() => navigate('/login')}
            >
              Go to Login
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className={`form-control ${error ? 'is-invalid' : ''}`}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <div className="invalid-feedback">{error}</div>}
            </div>

            <button type="submit" className="btn btn-magento w-100 mt-3">
              Send Reset Link
            </button>

            <div className="text-center mt-3">
              <Link to="/login" className="text-decoration-none text-primary">
                Back to Login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
