// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Breadcrum from './Breadcrum';

// const Navbar = ({ toggleSidebar }) => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const toggleDropdown = () => setShowDropdown((prev) => !prev);

//   return (
//     <nav className="navbar navbar-light bg-white shadow-sm sticky-top px-3 px-md-5">
//       <div className="container-fluid d-flex justify-content-between align-items-center">
//         {/* Left: Sidebar toggle (mobile) + Breadcrumb */}
//         <div className="d-flex align-items-center gap-3">
//           <button className="btn btn-outline-primary d-md-none" onClick={toggleSidebar}>
//             <i className="bi bi-list"></i>
//           </button>
//           <Breadcrum />
//         </div>

//         {/* Right: Avatar + Dropdown */}
//         <div className="position-relative" ref={dropdownRef}>
//           <div
//             className="d-flex align-items-center"
//             style={{ cursor: 'pointer' }}
//             onClick={toggleDropdown}
//           >
//             <img
//               src="https://i.pravatar.cc/30"
//               alt="avatar"
//               className="rounded-circle"
//               style={{ width: '32px', height: '32px' }}
//             />
//             <span className="ms-2 fw-semibold text-dark">Marketing Mantra</span>
//           </div>

//           {showDropdown && (
//             <div
//               className="dropdown-menu show dropdown-menu-end"
//               style={{
//                 position: 'absolute',
//                 top: 'calc(100% + 0.5rem)',
//                 right: 0,
//                 zIndex: 1050,
//               }}
//             >
//               <Link to="/details" className="dropdown-item">My Profile</Link>
//               <div className="dropdown-divider"></div>
//               <Link to="/login" className="dropdown-item">Login</Link>
//               <div className="dropdown-divider"></div>
//               <Link to="/login" className="dropdown-item text-danger">Logout</Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Breadcrum from './Breadcrum';

// const Navbar = ({ toggleSidebar, onLogout }) => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const toggleDropdown = () => setShowDropdown((prev) => !prev);

//   const handleLogout = () => {
//     setShowDropdown(false);
//     onLogout(); // 🧠 Clear login state from parent
//   };

//   return (
//     <nav className="navbar navbar-light bg-white shadow-sm sticky-top px-3 px-md-5">
//       <div className="container-fluid d-flex justify-content-between align-items-center">
//         {/* Left: Sidebar toggle (mobile) + Breadcrumb */}
//         <div className="d-flex align-items-center gap-3">
//           {/* <button className="btn btn-outline-primary d-md-none" onClick={toggleSidebar}>
//             <i className="bi bi-list"></i>
//           </button> */}
//           <button className="btn btn-outline-primary d-md-none" onClick={toggleSidebar}>
//   <i className="bi bi-list"></i>
// </button>
//           <Breadcrum />
//         </div>

//         {/* Right: Avatar + Dropdown */}
//         <div className="position-relative" ref={dropdownRef}>
//           <div
//             className="d-flex align-items-center"
//             style={{ cursor: 'pointer' }}
//             onClick={toggleDropdown}
//           >
//             <img
//               src="https://i.pravatar.cc/30"
//               alt="avatar"
//               className="rounded-circle"
//               style={{ width: '32px', height: '32px' }}
//             />
//             <span className="ms-2 fw-semibold text-dark">Marketing Mantra</span>
//           </div>

//           {showDropdown && (
//             <div
//               className="dropdown-menu show dropdown-menu-end"
//               style={{
//                 position: 'absolute',
//                 top: 'calc(100% + 0.5rem)',
//                 right: 0,
//                 zIndex: 1050,
//               }}
//             >
//               <Link to="/details" className="dropdown-item">My Profile</Link>
//               <div className="dropdown"></div>
//               {/* Optional login if you want to show it */}
//               {/* <Link to="/login" className="dropdown-item">Login</Link> */}
//               <div className="dropdown-divider"></div>
//               <button onClick={handleLogout} className="dropdown-item text-danger">
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrum from './Breadcrum';

const Navbar = ({ toggleSidebar, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const handleLogout = () => {
    setShowDropdown(false);
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      onLogout(); // 🧠 Clear login state from parent
    }
  };

  return (
    <nav className="navbar navbar-light bg-white shadow-sm sticky-top px-3 px-md-5">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left: Sidebar toggle (mobile) + Breadcrumb */}
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-outline-primary d-md-none" onClick={toggleSidebar}>
            <i className="bi bi-list"></i>
          </button>
          <Breadcrum />
        </div>

        {/* Right: Avatar + Dropdown */}
        <div className="position-relative" ref={dropdownRef}>
          <div
            className="d-flex align-items-center"
            style={{ cursor: 'pointer' }}
            onClick={toggleDropdown}
          >
            <img
              src="https://i.pravatar.cc/30"
              alt="avatar"
              className="rounded-circle"
              style={{ width: '32px', height: '32px' }}
            />
            <span className="ms-2 fw-semibold text-dark">Marketing Mantra</span>
          </div>

          {showDropdown && (
            <div
              className="dropdown-menu show dropdown-menu-end"
              style={{
                position: 'absolute',
                top: 'calc(100% + 0.5rem)',
                right: 0,
                zIndex: 1050,
              }}
            >
              <Link to="/details" className="dropdown-item">My Profile</Link>
              <div className="dropdown-divider"></div>
              <button onClick={handleLogout} className="dropdown-item text-danger">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
