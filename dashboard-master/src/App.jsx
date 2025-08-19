// // // // App.jsx
// // import React, { useState, useEffect } from 'react';
// // import { Routes, Route, useLocation } from 'react-router-dom';

// // import Sidebar from './Component/Sidebar';
// // import Navbar from './Component/Navbar';

// // import Dashboard from './Component/Dashboard';
// // import Typography from './Pages/Typography';
// // import Color from './Pages/Color';
// // import Detailspage from './Pages/Detailspage';
// // import ProfileSettings from './Pages/ProfileSettings';
// // import LoginPage from './Pages/LoginPage';
// // import Register from './Pages/Register';
// // import ForgetPassword from './Pages/ForgetPassword';
// // const AppLayout = () => {
// //   const location = useLocation();
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       const isLarge = window.innerWidth >= 768;
// //       setIsLargeScreen(isLarge);
// //       if (isLarge) setIsSidebarOpen(false);
// //     };
// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   return (
// //     <div className="d-flex">
// //       {/* Sidebar */}
// //       {isLargeScreen && <Sidebar />}
// //       {!isLargeScreen && isSidebarOpen && (
// //         <>
// //           <div className="drawer-sidebar open">
// //             <Sidebar />
// //           </div>
// //           <div className="overlay" onClick={() => setIsSidebarOpen(false)} />
// //         </>
// //       )}

// //       {/* Content */}
// //       <div className="flex-grow-1">
// //         <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
// //         <div className="p-4">
// //           <Routes>
// //             <Route path="/" element={<Dashboard />} />
// //             <Route path="/typography" element={<Typography />} />
// //             <Route path="/color" element={<Color />} />
// //             <Route path="/details" element={<Detailspage />} />
// //             <Route path="/profile" element={<ProfileSettings />} />
// //             <Route path="/" element={<LoginPage />} />
// //       <Route path="/login" element={<LoginPage />} />
// //       <Route path="/register" element={<Register />} />
// //       <Route path="/forgot-password" element={<ForgetPassword />} />
// //       {/* <Route path='/' element={<Home/>}/> */}
// //           </Routes>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AppLayout;




// import React, { useState } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';

// import Sidebar from './Component/Sidebar';
// import Navbar from './Component/Navbar';

// import Dashboard from './Component/Dashboard';
// import Typography from './Pages/Typography';
// import Color from './Pages/Color';
// import Detailspage from './Pages/Detailspage';
// import ProfileSettings from './Pages/ProfileSettings';
// import LoginPage from './Pages/LoginPage';
// import Register from './Pages/Register';
// import ForgetPassword from './Pages/ForgetPassword';
// import LeadsTable from './Component/LeadsTable';
// import ExportLeads from './Component/ExportLeads'

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   if (!isLoggedIn) {
//     // Show only Auth pages when not logged in
//     return (
//       <Routes>
//         <Route path="/" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
//         <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgetPassword />} />
//         <Route path="*" element={<Navigate to="/" />} />
        
//       </Routes>
//     );
//   }

//   // Show dashboard layout when logged in
//   return (
//     <div className="d-flex">
//       <Sidebar />
//       <div className="flex-grow-1">
//         <Navbar />
//         <div className="p-4">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/typography" element={<Typography />} />
//             <Route path="/color" element={<Color />} />
//             <Route path="/details" element={<Detailspage />} />
//             <Route path="/profile" element={<ProfileSettings />} />
//             <Route path="*" element={<Navigate to="/" />} />
//             <Route path="/leads" element={<LeadsTable />} />
//             <Route path="/export" element={<ExportLeads />} />
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
import LoginPage from './Pages/LoginPage';  // ✅ Correctly imported
import Register from './Pages/Register';
import ForgetPassword from './Pages/ForgetPassword';
import LeadsTable from './Component/LeadsTable';
import ExportLeads from './Component/ExportLeads';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 768;
      setIsLargeScreen(isLarge);
      if (isLarge) setIsSidebarOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isLoggedIn) {
    return (
      <Routes>
        <Route path="/" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return (
    <div className="d-flex">
      {isLargeScreen ? (
        <Sidebar />
      ) : isSidebarOpen ? (
        <>
          <div className="drawer-sidebar open">
            <Sidebar />
          </div>
          <div className="overlay" onClick={() => setIsSidebarOpen(false)} />
        </>
      ) : null}

      <div className="flex-grow-1">
        <Navbar
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onLogout={() => setIsLoggedIn(false)}
        />
        <div className="p-4">
          <Routes>
            <Route path="/dash" element={<Dashboard />} />
            <Route path="/typography" element={<Typography />} />
            <Route path="/color" element={<Color />} />
            <Route path="/details" element={<Detailspage />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/leads" element={<LeadsTable />} />
            <Route path="/export" element={<ExportLeads />} />
            <Route path="*" element={<Navigate to="/dash" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
