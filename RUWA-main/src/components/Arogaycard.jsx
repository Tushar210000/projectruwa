// import React from 'react'

// export default function Arogaycard() {
//      const [formData, setFormData] = useState({
//         firstName: "Henry",
//         lastName: "Wilson",
//         fatherName: "Denlin Wilson",
//         gender: "Male",
//         phone: "+123 456 7890",
//         email: "henry@gmail.com",
//         dob: "1996-06-30",
//         bloodGroup: "O+",
//         maritalStatus: "Married",
//         address: "123 Main Street",
//         physician: "Dr. Emily Davies",
//         allergies: "Penicillin",
//         surgeries: "Appendectomy (2020)",
//         conditions: "Hypertension (Diagnosed: 01/10/2022)",
//         medication: "Atenolol 50mg",
//       });
//   return (
//     <>
//       <div className="profile-container p-4">
//       <div className="breadcrumb d-flex justify-content-between">
//         <span>Patients List / <strong>Patient Details</strong></span>
//         <button className="btn btn-primary btn-sm" onClick={handleToggleEdit}>
//           {editable ? "Save" : "Edit"}
//         </button>
//       </div>

//       <div className="card patient-card p-4 shadow-sm mt-3">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <div className="d-flex align-items-center gap-3">
//             <img src="/assets/images/astronaut.svg" alt="Patient" className="profile-image" />
//             <div>
//               <h5 className="mb-0">
//                 {formData.firstName} {formData.lastName}
//                 <span className="badge bg-success ms-2">Active</span>
//               </h5>
//               <div>ID: #5233 • 📞 {formData.phone}</div>
//             </div>
//           </div>
//           <div className="tabs d-none d-md-flex">
//             <button className="tab active">Details</button>
//             <button className="tab" >Arogay Card</button>
//             <button className="tab">Insurance</button>
//             <button className="tab">Chat</button>
//             <button className="tab">Notes</button>
//             <button className="tab">Attachments</button>
//           </div>
//         </div>

       
//       </div>
//     </div>
//     </>
//   )
// }

// import React, { useState } from 'react';
// // import ArogyaCardComponent from './ArogyaCardComponent'; // Update with actual component name
// import HealthCard from './HealthCard'
// export default function Arogaycard() {
//   const [editable, setEditable] = useState(false);
//   const [activeTab, setActiveTab] = useState("Details");

//   const handleToggleEdit = () => {
//     setEditable(!editable);
//   };

//   const formData = {
//     firstName: "Henry",
//     lastName: "Wilson",
//     fatherName: "Denlin Wilson",
//     gender: "Male",
//     phone: "+123 456 7890",
//     email: "henry@gmail.com",
//     dob: "1996-06-30",
//     bloodGroup: "O+",
//     maritalStatus: "Married",
//     address: "123 Main Street",
//     physician: "Dr. Emily Davies",
//     allergies: "Penicillin",
//     surgeries: "Appendectomy (2020)",
//     conditions: "Hypertension (Diagnosed: 01/10/2022)",
//     medication: "Atenolol 50mg",
//   };

//   return (
//     <div className="profile-container p-4">
//       {/* Breadcrumb */}
//       <div className="breadcrumb d-flex justify-content-between mb-3">
//         <span>Patients List / <strong>Patient Details</strong></span>
//         <button className="btn btn-primary btn-sm" onClick={handleToggleEdit}>
//           {editable ? "Save" : "Edit"}
//         </button>
//       </div>

//       <div className="card patient-card p-4 shadow-sm">
//         {/* Header Row */}
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <div className="d-flex align-items-center gap-3">
//             <img src="/assets/images/astronaut.svg" alt="Patient" className="profile-image" />
//             <div>
//               <h5 className="mb-0">
//                 {formData.firstName} {formData.lastName}
//                 <span className="badge bg-success ms-2">Active</span>
//               </h5>
//               <div>ID: #5233 • 📞 {formData.phone}</div>
//             </div>
//           </div>

//           {/* Tabs */}
//           <div className="tabs d-none d-md-flex">
//             {["Details", "Arogay Card", "Insurance", "Chat", "Notes", "Attachments"].map(tab => (
//               <button
//                 key={tab}
//                 className={`tab btn btn-link ${activeTab === tab ? "text-primary fw-bold border-bottom border-primary" : ""}`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Info Body */}
//         <div className="row">
//           {/* Left Side: Personal Info */}
//           <div className="col-md-6">
//             <h6 className="fw-bold mb-3">Personal Information</h6>
//             <p><strong>First Name:</strong> {formData.firstName}</p>
//             <p><strong>Last Name:</strong> {formData.lastName}</p>
//             <p><strong>Father Name:</strong> {formData.fatherName}</p>
//             <p><strong>Gender:</strong> {formData.gender}</p>
//             <p><strong>Phone Number:</strong> {formData.phone}</p>
//             <p><strong>Email ID:</strong> {formData.email}</p>
//             <p><strong>Date of Birth:</strong> {formData.dob}</p>
//             <p><strong>Blood Group:</strong> {formData.bloodGroup}</p>
//             <p><strong>Marital Status:</strong> {formData.maritalStatus}</p>
//             <p><strong>Address:</strong> {formData.address}</p>
//           </div>

//           {/* Right Side: Conditional Content */}
//           <div className="col-md-6">
//             {activeTab === "Details" && (
//               <>
//                 <h6 className="fw-bold mb-3">Medical Information</h6>
//                 <p><strong>Primary Physician:</strong> {formData.physician}</p>
//                 <p><strong>Known Allergies:</strong> {formData.allergies}</p>
//                 <p><strong>Previous Surgeries:</strong> {formData.surgeries}</p>
//                 <p><strong>Chronic Conditions:</strong> {formData.conditions}</p>
//                 <p><strong>Current Medication:</strong> {formData.medication}</p>
//               </>
//             )}

//             {activeTab === "Arogay Card" && (
//               <HealthCard/>
//             )}

//             {activeTab !== "Details" && activeTab !== "Arogay Card" && (
//               <p className="text-muted">This section is under development.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from 'react';
// // import ArogyaCardComponent from './ArogyaCardComponent'; // Replace with your actual card component
// import HealthCard from './HealthCard'
// export default function Arogaycard() {
// //   const [editable, setEditable] = useState(false);
// //   const [activeTab, setActiveTab] = useState("Arogay Card"); // Default tab

// //   const handleToggleEdit = () => {
// //     setEditable(!editable);
// //   };

//   const formData = {
//     firstName: "Henry",
//     lastName: "Wilson",
//     fatherName: "Denlin Wilson",
//     gender: "Male",
//     phone: "+123 456 7890",
//     email: "henry@gmail.com",
//     dob: "1996-06-30",
//     bloodGroup: "O+",
//     maritalStatus: "Married",
//     address: "123 Main Street",
//   };

//   return (
//     <div className="profile-container p-4">
//       {/* Breadcrumb */}
//       <div className="breadcrumb d-flex justify-content-between mb-3">
//         <span>Patients List / <strong>Patient Details</strong></span>
//         {/* <button className="btn btn-primary btn-sm" onClick={handleToggleEdit}>
//           {editable ? "Save" : "Edit"}
//         </button> */}
//       </div>

//       <div className="card patient-card p-4 shadow-sm">
//         {/* Header Row */}
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <div className="d-flex align-items-center gap-3">
//             <img src="/assets/images/astronaut.svg" alt="Patient" className="profile-image" />
//             <div>
//               <h5 className="mb-0">
//                 {formData.firstName} {formData.lastName}
//                 <span className="badge bg-success ms-2">Active</span>
//               </h5>
//               <div>ID: #5233 • 📞 {formData.phone}</div>
//             </div>
//           </div>

//           {/* Tabs */}
//           {/* <div className="tabs d-none d-md-flex">
//             {["Arogay Card", "Insurance", "Chat", "Notes", "Attachments"].map(tab => (
//               <button
//                 key={tab}
//                 className={`tab btn btn-link ${activeTab === tab ? "text-primary fw-bold border-bottom border-primary" : ""}`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div> */}
//         </div>

//         {/* Main Content */}
//         <div className="row">
//           {/* Left Column - Personal Info */}
//           <div className="col-md-6">
//             <h6 className="fw-bold mb-3">Personal Information</h6>
//             <p><strong>First Name:</strong> {formData.firstName}</p>
//             <p><strong>Last Name:</strong> {formData.lastName}</p>
//             <p><strong>Father Name:</strong> {formData.fatherName}</p>
//             <p><strong>Gender:</strong> {formData.gender}</p>
//             <p><strong>Phone Number:</strong> {formData.phone}</p>
//             <p><strong>Email ID:</strong> {formData.email}</p>
//             <p><strong>Date of Birth:</strong> {formData.dob}</p>
//             <p><strong>Blood Group:</strong> {formData.bloodGroup}</p>
//             <p><strong>Marital Status:</strong> {formData.maritalStatus}</p>
//             <p><strong>Address:</strong> {formData.address}</p>
//           </div>

//           {/* Right Column - Tab Content */}
//           <div className="col-md-6 d-flex justify-content-center align-items-start">
//            <p>arogay card</p>
//            <HealthCard/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import HealthCard from './HealthCard'; // Make sure this component exists

export default function Arogaycard() {
  const formData = {
    firstName: "Henry",
    lastName: "Wilson",
    fatherName: "Denlin Wilson",
    gender: "Male",
    phone: "+123 456 7890",
    email: "henry@gmail.com",
    dob: "1996-06-30",
    bloodGroup: "O+",
    maritalStatus: "Married",
    address: "123 Main Street",
  };

  return (
    <div className="container py-4">
      {/* Breadcrumb */}
      <div className="d-flex justify-content-between mb-3">
        <span>Patients List / <strong>Patient Details</strong></span>
      </div>

      <div className="card shadow rounded-4 p-4">
        <div className="row g-4">
          {/* Left Side - Personal Info */}
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-3 mb-4">
              <img src="/assets/images/astronaut.svg" alt="Patient" className="profile-image rounded-circle" style={{ width: 60, height: 60 }} />
              <div>
                <h5 className="mb-0">
                  {formData.firstName} {formData.lastName}
                  <span className="badge bg-success ms-2">Active</span>
                </h5>
                <div>ID: #5233 • 📞 {formData.phone}</div>
              </div>
            </div>

            <h6 className="fw-bold mb-3">Personal Information</h6>
            <p><strong>First Name:</strong> {formData.firstName}</p>
            <p><strong>Last Name:</strong> {formData.lastName}</p>
            <p><strong>Father Name:</strong> {formData.fatherName}</p>
            <p><strong>Gender:</strong> {formData.gender}</p>
            <p><strong>Phone Number:</strong> {formData.phone}</p>
            <p><strong>Email ID:</strong> {formData.email}</p>
            <p><strong>Date of Birth:</strong> {formData.dob}</p>
            <p><strong>Blood Group:</strong> {formData.bloodGroup}</p>
            <p><strong>Marital Status:</strong> {formData.maritalStatus}</p>
            <p><strong>Address:</strong> {formData.address}</p>
          </div>

          {/* Right Side - Health Card */}
          <div className="col-md-6 d-flex justify-content-center align-items-start">
            <HealthCard />
          </div>
        </div>
      </div>
    </div>
  );
}
