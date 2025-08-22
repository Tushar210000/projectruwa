// import React from 'react';

// import { BiSolidDashboard, BiFont, BiPalette, BiImage, BiLogIn, BiUserPlus, BiChevronDown } from 'react-icons/bi';
// import { Link } from 'react-router-dom';
// // 📊
// const Sidebar = () => (
//     <div className="custom-sidebar sticky-top">
//         <div className="sidebar-header mb-4">
//             <h5> Marketing Mantra</h5>
//         </div>

//         <div className="sidebar-section">
//             <p className="section-title">Main</p>

//             <Link to="/" className="sidebar-link">
//                 <BiFont className="sidebar-icon" />
//                 Home
//             </Link>

//         </div>

//         <div className="sidebar-section">
//             <p className="section-title">UI Components</p>
//             <Link to="/typography" className="sidebar-link">
//                 <BiFont className="sidebar-icon" />
//                 Typography
//             </Link>

//             <Link to="/" className="sidebar-link">
//                 <BiFont className="sidebar-icon" />
//                 Color
//             </Link>
//             <Link to="/" className="sidebar-link">
//                 <BiFont className="sidebar-icon" />
//                 Icons
//             </Link>
//         </div>

//         <div className="sidebar-section">
//             <p className="section-title">Pages</p>
//             {/* <Link to="/login" className="sidebar-link">
//                 <BiFont className="sidebar-icon" />
//                 Login
//             </Link> */}

//             {/* <Link to="/register" className="sidebar-link">
//                 <BiFont className="sidebar-icon" />
//                 Register
//             </Link> */}
//         </div>

//         <div className="sidebar-section">
//             <p className="section-title">Other</p>
            
//             <Link to="/" className="sidebar-link d-flex justify-content-between align-items-center">
//                 <span>
//                     <BiChevronDown className="sidebar-icon" />
//                     Menu Levels
//                 </span>
//             </Link>
//         </div>
//     </div>
// );

// export default Sidebar;




// import React from 'react';
// import { BiFont, BiPalette, BiImage, BiChevronDown, BiHome, BiGroup, BiDownload, BiUpload, BiEditAlt, BiBlanket, BiHomeCircle } from 'react-icons/bi';
// import { GiArrowsShield, GiBigGear, GiCleaver, GiGears, GiHeadShot, GiHumanTarget, GiRamProfile } from 'react-icons/gi';
// import { Link } from 'react-router-dom';

// const Sidebar = () => (
//   <div className="custom-sidebar sticky-top">
//     <div className="sidebar-header mb-4">
//       <h5>Marketing Mantra</h5>
//     </div>

//     <div className="sidebar-section">
//       <p className="section-title">Main</p>
//       <Link to="/" className="sidebar-link">
//         <BiHomeCircle className="sidebar-icon" />
//         Dashboard
//       </Link>
//     </div>

//     <div className="sidebar-section">
//       <p className="section-title">Page Components</p>
//       {/* <Link to="/typography" className="sidebar-link">
//         <BiHome className="sidebar-icon" />
//         Typography
//       </Link>
//       <Link to="/color" className="sidebar-link">
//         <BiPalette className="sidebar-icon" />
//         Color
//       </Link> */}
//       <Link to="/leads" className="sidebar-link">
//   {/* <i className="bi bi-people-fill me-2" /> */}
//   <BiGroup className="sidebar-icon" />
//    Leads
// </Link>

// <Link to="/export" className="sidebar-link"> 
// {/* <i class="bi bi-save me-2"></i>  */}
// <BiDownload className="sidebar-icon" />
// Export
// </Link>
// <Link to="/adds" className="sidebar-link"> 
// {/* <i class="bi bi-save me-2"></i>  */}
// <BiEditAlt className="sidebar-icon" />
// Add Ad's
// </Link><Link to="/final-ads" className="sidebar-link"> 
// {/* <i class="bi bi-save me-2"></i>  */}
// <BiUpload className="sidebar-icon" />
// Upload ad's
// </Link>
// <Link to="/active-ads" className="sidebar-link">
//   {/* <i className="bi bi-people-fill me-2" /> */}
//   <BiBlanket className="sidebar-icon" />
//    Ad's Page
// </Link>
//     </div>

//     <div className="sidebar-section">
//       <p className="section-title">Other</p>
//       <Link to="/details" className="sidebar-link d-flex justify-content-between align-items-center">
//         <span>
//           <GiHumanTarget className="sidebar-icon" />
//           Profile
//         </span>
//       </Link>
//        <Link to="/" className="sidebar-link d-flex justify-content-between align-items-center">
//         <span>
//           <GiArrowsShield className="sidebar-icon" />
//           Logout
//         </span>
//       </Link>
      
//     </div>
//   </div>
// );

// export default Sidebar;
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ onLogout }) => {
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      onLogout();
    }
  };

  return (
    <div className="custom-sidebar">
      <div className="sidebar-header mb-4">
        <h5>Ruwa India</h5>
      </div>

      <div className="sidebar-section">
        <p className="section-title">Main</p>
        <Link to="/Home" className="sidebar-link">
          <span className="sidebar-icon">📊</span>
          Dashboard
        </Link>
      </div>

      <div className="sidebar-section">
        <p className="section-title">Page Components</p>

        <Link to="/Contact_leads" className="sidebar-link">
          <span className="sidebar-icon">📞</span>
          Contact Leads
        </Link>

        <Link to="/kendra-leads" className="sidebar-link">
          <span className="sidebar-icon">🏠</span>
          Kendra Leads
        </Link>
        
        <Link to="/Popup-Leads" className="sidebar-link">
          <span className="sidebar-icon">👥</span>
          Pop Leads
        </Link> 

        <Link to="/sewa-leads" className="sidebar-link">
          <span className="sidebar-icon">💊</span>
          Sewa Leads
        </Link>

        <Link to="/ambulance-leads" className="sidebar-link">
          <span className="sidebar-icon">🚑</span>
          Ambulance Leads
        </Link>

        <Link to="/insurance-leads" className="sidebar-link">
          <span className="sidebar-icon">🛡</span>
          Insurance Leads
        </Link>

        <Link to="/card-apply" className="sidebar-link">
          <span className="sidebar-icon">💳</span>
          Card Applys 
        </Link>

        <Link to="/empolyee_list" className="sidebar-link">
          <span className="sidebar-icon">👔</span>
          Employee 
        </Link>
      </div>

      <div className="sidebar-section">
        <p className="section-title">Other</p>
        <Link to="/details" className="sidebar-link d-flex align-items-center">
          <span className="sidebar-icon">🙍‍♂</span>
          Profile
        </Link>

        <Link to="/createemply" className="sidebar-link d-flex align-items-center">
          <span className="sidebar-icon">➕</span>
          Create Empolyee
        </Link>

        <button
          className="sidebar-link d-flex align-items-center w-100 bg-transparent border-0 text-start"
          onClick={handleLogout}
        >
          <span className="sidebar-icon">🚪</span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;


