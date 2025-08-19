
// // import React, { useState } from 'react';
// // import Hrpolicy from '../components/Hrpolicy'
// // import PrivacyPolicy from './PrivacyPolicy';
// // // Import your components here
// // // import DocumentChecklist from './DocumentChecklist';
// // // import ApplicationForm from './ApplicationForm';
// // // import MOU from './MOU';
// // // import LetterOfIntent from './LetterOfIntent';

// // const PolicePage = () => {
// //   const [activeTab, setActiveTab] = useState('DocumentChecklist');

// //   const renderContent = () => {
// //     switch (activeTab) {
// //       case 'DocumentChecklist':
// //         return <Hrpolicy/>;
// //       case 'ApplicationForm':
// //         return <PrivacyPolicy />;
// //     //   case 'MOU':
// //     //     return <MOU />;
// //     //   case 'LetterOfIntent':
// //     //     return <LetterOfIntent />;
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-4xl font-bold mb-4">Police</h1>
// //       <p className="text-lg mb-6">our policy is</p>

// //       <div className="flex gap-4 border-b pb-2 mb-6">
// //         <button
// //           className={`px-4 py-2 ${activeTab === 'DocumentChecklist' ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
// //           onClick={() => setActiveTab('DocumentChecklist')}
// //         >
// //          HR Policy
// //         </button>
// //         <button
// //           className={`px-4 py-2 ${activeTab === 'ApplicationForm' ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
// //           onClick={() => setActiveTab('ApplicationForm')}
// //         >
// //           Privacy Policy
// //         </button>
// //         <button
// //           className={`px-4 py-2 ${activeTab === 'MOU' ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
// //           onClick={() => setActiveTab('MOU')}
// //         >
// //           MOU
// //         </button>
// //         <button
// //           className={`px-4 py-2 ${activeTab === 'LetterOfIntent' ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
// //           onClick={() => setActiveTab('LetterOfIntent')}
// //         >
// //           Letter of Intent
// //         </button>
// //       </div>

// //       <div className="mt-4">
// //         {renderContent()}
// //       </div>
// //     </div>
// //   );
// // };

// // export default PolicePage;
// import React, { useState } from 'react';
// import Hrpolicy from '../components/Hrpolicy';
// import PrivacyPolicy from './PrivacyPolicy';
// // import MOU from './MOU';
// // import LetterOfIntent from './LetterOfIntent';

// const PolicePage = () => {
//   const [activeTab, setActiveTab] = useState('hr');

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'hr':
//         return <Hrpolicy />;
//       case 'privacy':
//         return <PrivacyPolicy />;
//       // case 'mou':
//       //   return <MOU />;
//       // case 'intent':
//       //   return <LetterOfIntent />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="container py-4">
//       <h1 className="mb-3 fw-bold display-5">Police</h1>
//       <p className="mb-4 fs-5">Our policy is</p>

//       {/* Bootstrap Nav Tabs */}
//       <ul className="nav nav-tabs mb-4">
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'hr' ? 'active' : ''}`}
//             onClick={() => setActiveTab('hr')}
//           >
//             HR Policy
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'privacy' ? 'active' : ''}`}
//             onClick={() => setActiveTab('privacy')}
//           >
//             Privacy Policy
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'mou' ? 'active' : ''}`}
//             onClick={() => setActiveTab('mou')}
//           >
//             MOU
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === 'intent' ? 'active' : ''}`}
//             onClick={() => setActiveTab('intent')}
//           >
//             Letter of Intent
//           </button>
//         </li>
//       </ul>

//       {/* Render Content Based on Tab */}
//       <div>{renderContent()}</div>
//     </div>
//   );
// };

// export default PolicePage;
import React, { useState } from 'react';
import Hrpolicy from '../components/Hrpolicy';
import PrivacyPolicy from './PrivacyPolicy';
import Kendrsop from './Kendrsop';
import MedicalPolicy from './Medicalpolicy';
// import MOU from './MOU';
// import LetterOfIntent from './LetterOfIntent';

const PolicePage = () => {
  const [activeTab, setActiveTab] = useState('hr');

  const renderContent = () => {
    switch (activeTab) {
      case 'hr':
        return <PrivacyPolicy />;
    // return <Hrpolicy />;
      case 'privacy':
       return <Hrpolicy />;
      case 'mou':
        return <Kendrsop/>;
      case 'intent':
        return <MedicalPolicy />;
      default:
        return null;
    }
  };

  return (
    <div className="container py-5">
      {/* Centered Heading */}
      <div className="text-center mb-4">
        <h1 className="fw-bold display-5">Our Police</h1>
        <p className="fs-6 text-muted">We are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, and protect the data you provide while using our services, including health insurance assistance, Jan Arogya Card processing, ambulance support, and Jan Seva Kendra activities. We ensure all personal data is handled securely and only shared with authorized government bodies or service partners strictly for the purpose of service delivery. By using our platform, you agree to the terms outlined in this policy.</p>
      </div>

      {/* Bootstrap Nav Tabs */}
      <ul className="nav nav-tabs justify-content-center mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'hr' ? 'active' : ''}`}
            onClick={() => setActiveTab('hr')}
          >Privacy Policy
            
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'privacy' ? 'active' : ''}`}
            onClick={() => setActiveTab('privacy')}
          >HR Policy
            
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'mou' ? 'active' : ''}`}
            onClick={() => setActiveTab('mou')}
          >
           SOP
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'intent' ? 'active' : ''}`}
            onClick={() => setActiveTab('intent')}
          >
            Medical Policy 
          </button>
        </li>
      </ul>

      {/* Bootstrap Card Wrapper for Content */}
      <div className="card shadow-sm">
        <div className="card-body">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default PolicePage;
