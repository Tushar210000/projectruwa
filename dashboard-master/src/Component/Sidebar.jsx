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




import React from 'react';
import { BiFont, BiPalette, BiImage, BiChevronDown, BiHome, BiGroup, BiDownload } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="custom-sidebar sticky-top">
    <div className="sidebar-header mb-4">
      <h5>Marketing Mantra</h5>
    </div>

    <div className="sidebar-section">
      <p className="section-title">Main</p>
      <Link to="/" className="sidebar-link">
        <BiHome className="sidebar-icon" />
        Dashboard
      </Link>
    </div>

    <div className="sidebar-section">
      <p className="section-title">UI Components</p>
      <Link to="/typography" className="sidebar-link">
        <BiHome className="sidebar-icon" />
        Typography
      </Link>
      <Link to="/color" className="sidebar-link">
        <BiPalette className="sidebar-icon" />
        Color
      </Link>
      <Link to="/leads" className="sidebar-link">
  {/* <i className="bi bi-people-fill me-2" /> */}
  <BiGroup className="sidebar-icon" />
   Leads
</Link>

<Link to="/export" className="sidebar-link"> 
{/* <i class="bi bi-save me-2"></i>  */}
<BiDownload className="sidebar-icon" />
Export
</Link>
    </div>

    <div className="sidebar-section">
      <p className="section-title">Other</p>
      <Link to="/" className="sidebar-link d-flex justify-content-between align-items-center">
        <span>
          <BiChevronDown className="sidebar-icon" />
          Menu Levels
        </span>
      </Link>
    </div>
  </div>
);

export default Sidebar;
