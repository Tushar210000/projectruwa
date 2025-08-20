


// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';

// import Sidebar from './Component/Sidebar';
// import Navbar from './Component/Navbar';

// import Dashboard from './Component/Dashboard';
// import Typography from './Pages/Typography';
// import Color from './Pages/Color';
// import Detailspage from './Pages/Detailspage';
// import ProfileSettings from './Pages/ProfileSettings';
// import LoginPage from './Pages/LoginPage';  // ✅ Correctly imported
// import Register from './Pages/Register';
// import ForgetPassword from './Pages/ForgetPassword';
// import LeadsTable from './Component/LeadsTable';
// import ExportLeads from './Component/ExportLeads';
// import Adds from './Pages/Adds';
// import Finalpage from './Pages/Finalpage';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       const isLarge = window.innerWidth >= 768;
//       setIsLargeScreen(isLarge);
//       if (isLarge) setIsSidebarOpen(false);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   if (!isLoggedIn) {
//     return (
//       <Routes>
//         <Route path="/" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
//         <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgetPassword />} />


//         <Route path="*" element={<Navigate to="/" />} />
//         {/* <Route path="/active-ads" element={<ActiveAdsSlider />} /> */}
//       </Routes>
//     );
//   }

//   return (
//     <div className="d-flex">
//       {isLargeScreen ? (
//         <Sidebar />
//       ) : isSidebarOpen ? (
//         <>
//           <div className="drawer-sidebar open">
//             <Sidebar />
//           </div>
//           <div className="overlay" onClick={() => setIsSidebarOpen(false)} />
//         </>
//       ) : null}

//       <div className="flex-grow-1">
//         <Navbar
//           toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
//           onLogout={() => setIsLoggedIn(false)}
//         />
//         <div className="p-4" >
//           <Routes>
//             <Route path="/dash" element={<Dashboard />} />
//             <Route path="/typography" element={<Typography />} />
//             <Route path="/color" element={<Color />} />
//             <Route path="/details" element={<Detailspage />} />
//             <Route path="/profile" element={<ProfileSettings />} />
//             <Route path="/leads" element={<LeadsTable />} />
//             <Route path="/export" element={<ExportLeads />} />
//             <Route path="/adds" element={<Adds />} />
//             <Route path="/final-ads" element={<Finalpage />} />
//              <Route path="/active-ads" element={<Color />} />
//             <Route path="*" element={<Navigate to="/dash" />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './Component/Sidebar';
import Navbar from './Component/Navbar';

import Dashboard from './Component/Dashboard';
import Typography from './Pages/Typography';
import Color from './Pages/Color';
import Detailspage from './Pages/Detailspage';
import ProfileSettings from './Pages/ProfileSettings';
import LoginPage from './Pages/LoginPage';
import Register from './Pages/Register';
import ForgetPassword from './Pages/ForgetPassword';
import LeadsTable from './Component/LeadsTable';
import ExportLeads from './Component/ExportLeads';
import Adds from './Pages/Adds';
import Finalpage from './Pages/Finalpage';
import PopupLeads from './Component/PopupLeads';
import CreateEmpl from './Component/CreateEmpl';
import Allemployee from './Component/Allemployee';
import KendraLeads from './Component/KendraLeads';
import SewaLeads from './Component/SewaLeads';
import AmbulanceLeads from './Component/AmbulanceLeads';
import InsuranceLeads from './Component/InsuranceLeads';
import AllCardApply from './Component/AllCardApply';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  // Handle logout (can be reused in Navbar & Sidebar)
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      setIsLoggedIn(false);
    }
  };

  // Responsive sidebar toggle
  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 768;
      setIsLargeScreen(isLarge);
      if (isLarge) setIsSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Routes when not logged in
  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  // Logged-in app layout
  return (
    <div className="d-flex">
      {isLargeScreen ? (
        <Sidebar onLogout={handleLogout} />
      ) : isSidebarOpen ? (
        <>
          <div className="drawer-sidebar open">
            <Sidebar onLogout={handleLogout} />
          </div>
          <div className="overlay" onClick={() => setIsSidebarOpen(false)} />
        </>
      ) : null}

      <div className="flex-grow-1">
        <Navbar
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onLogout={handleLogout}
        />
        <div className="p-4">
          <Routes>
            <Route path="/Home" element={<Dashboard />} />
            <Route path="/Popup-Leads" element={<PopupLeads/>} />
            <Route path="/kendra-leads" element={<KendraLeads/>} />


            <Route path="/sewa-leads" element={<SewaLeads/>} />
            <Route path="/ambulance-leads" element={<AmbulanceLeads/>} />
            <Route path="/insurance-leads" element={<InsuranceLeads/>} />
            <Route path="/card-apply" element={<AllCardApply/>} />
              {/* <Route path="/card-apply" element={<AllCardApply/>} /> */}


            <Route path="/details" element={<Detailspage />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/Contact_leads" element={<LeadsTable />} />
            <Route path="/export" element={<ExportLeads />} />
            <Route path="/createemply" element={<CreateEmpl/>} />
            <Route path="/final-ads" element={<Finalpage />} />
            <Route path="/empolyee_list" element={<Allemployee/>} />
            <Route path="*" element={<Navigate to="/Home" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
