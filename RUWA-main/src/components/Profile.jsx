// import React from "react";
// // import "./Profile.css";
// // import profilePic from "./assets/patient.png"; // use your uploaded image here

// export default function Profile() {
//   return (
//     <div className="profile-container p-4">
//       <div className="breadcrumb">
//         <span>Patients List</span> / <strong>Patient Details</strong>
//       </div>

//       <div className="card patient-card p-4 shadow-sm">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <div className="d-flex align-items-center gap-3">
//             <img src="/assets/images/doctor.jpg" alt="Patient" className="profile-image" />
//             <div>
//               <h5 className="mb-0">Henry D. Wilson <span className="badge bg-success ms-2">Active</span></h5>
//               <div>ID: #5233 • 📞 +123 456 7890</div>
//             </div>
//           </div>
//           <div className="tabs">
//             <button className="tab active">Details</button>
//             <button className="tab">Appointments</button>
//             <button className="tab">Insurance</button>
//             <button className="tab">Chat</button>
//             <button className="tab">Notes</button>
//             <button className="tab">Attachments</button>
//           </div>
//         </div>

//         <div className="row profile-details">
//           <div className="col-md-6">
//             <h6>Personal Information</h6>
//             <ul>
//               <li><strong>First Name:</strong> Henry</li>
//               <li><strong>Last Name:</strong> Wilson</li>
//               <li><strong>Father Name:</strong> Denlin Wilson</li>
//               <li><strong>Gender:</strong> Male</li>
//               <li><strong>Phone Number:</strong> +123 456 7890</li>
//               <li><strong>Email ID:</strong> henry@gmail.com</li>
//               <li><strong>Date of Birth:</strong> 30/06/1996</li>
//               <li><strong>Blood Group:</strong> O+</li>
//               <li><strong>Marital Status:</strong> Married</li>
//               <li><strong>Address:</strong> 123 Main Street</li>
//             </ul>
//           </div>
//           <div className="col-md-6">
//             <h6>Medical Information</h6>
//             <ul>
//               <li><strong>Primary Physician:</strong> Dr. Emily Davies</li>
//               <li><strong>Known Allergies:</strong> Penicillin</li>
//               <li><strong>Previous Surgeries:</strong> Appendectomy (2020)</li>
//               <li><strong>Chronic Conditions:</strong> Hypertension (Diagnosed: 01/10/2022)</li>
//               <li><strong>Current Medication:</strong> Atenolol 50mg</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// // }
import React, { useState } from "react";
// import "./Profile.css";
// import profilePic from "./assets/patient.png"; // your image path

export default function Profile() {
  
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({
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
    physician: "Dr. Emily Davies",
    allergies: "Penicillin",
    surgeries: "Appendectomy (2020)",
    conditions: "Hypertension (Diagnosed: 01/10/2022)",
    medication: "Atenolol 50mg",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleEdit = () => setEditable((prev) => !prev);

  return (
    <div className="profile-container p-4">
      <div className="breadcrumb d-flex justify-content-between">
        <span>Patients List / <strong>Patient Details</strong></span>
        <button className="btn btn-primary btn-sm" onClick={handleToggleEdit}>
          {editable ? "Save" : "Edit"}
        </button>
      </div>

      <div className="card patient-card p-4 shadow-sm mt-3">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center gap-3">
            <img src="/assets/images/astronaut.svg" alt="Patient" className="profile-image" />
            <div>
              <h5 className="mb-0">
                {formData.firstName} {formData.lastName}
                <span className="badge bg-success ms-2">Active</span>
              </h5>
              <div>ID: #5233 • 📞 {formData.phone}</div>
            </div>
          </div>
          <div className="tabs d-none d-md-flex">
            <button className="tab active">Details</button>
            <button className="tab" >Arogay Card</button>
            <button className="tab">Insurance</button>
            <button className="tab">Chat</button>
            <button className="tab">Notes</button>
            <button className="tab">Attachments</button>
          </div>
        </div>

        <div className="row profile-details">
          <div className="col-md-6">
            <h6>Personal Information</h6>
            <ul>
              <li><strong>First Name:</strong> {editable ? <input name="firstName" value={formData.firstName} onChange={handleChange} /> : formData.firstName}</li>
              <li><strong>Last Name:</strong> {editable ? <input name="lastName" value={formData.lastName} onChange={handleChange} /> : formData.lastName}</li>
              <li><strong>Father Name:</strong> {editable ? <input name="fatherName" value={formData.fatherName} onChange={handleChange} /> : formData.fatherName}</li>
              <li><strong>Gender:</strong> {editable ? <input name="gender" value={formData.gender} onChange={handleChange} /> : formData.gender}</li>
              <li><strong>Phone Number:</strong> {editable ? <input name="phone" value={formData.phone} onChange={handleChange} /> : formData.phone}</li>
              <li><strong>Email ID:</strong> {editable ? <input name="email" value={formData.email} onChange={handleChange} /> : formData.email}</li>
              <li><strong>Date of Birth:</strong> {editable ? <input type="date" name="dob" value={formData.dob} onChange={handleChange} /> : formData.dob}</li>
              <li><strong>Blood Group:</strong> {editable ? <input name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} /> : formData.bloodGroup}</li>
              <li><strong>Marital Status:</strong> {editable ? <input name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} /> : formData.maritalStatus}</li>
              <li><strong>Address:</strong> {editable ? <input name="address" value={formData.address} onChange={handleChange} /> : formData.address}</li>
            </ul>
          </div>

          <div className="col-md-6">
            <h6>Medical Information</h6>
            <ul>
              <li><strong>Primary Physician:</strong> {editable ? <input name="physician" value={formData.physician} onChange={handleChange} /> : formData.physician}</li>
              <li><strong>Known Allergies:</strong> {editable ? <input name="allergies" value={formData.allergies} onChange={handleChange} /> : formData.allergies}</li>
              <li><strong>Previous Surgeries:</strong> {editable ? <input name="surgeries" value={formData.surgeries} onChange={handleChange} /> : formData.surgeries}</li>
              <li><strong>Chronic Conditions:</strong> {editable ? <input name="conditions" value={formData.conditions} onChange={handleChange} /> : formData.conditions}</li>
              <li><strong>Current Medication:</strong> {editable ? <input name="medication" value={formData.medication} onChange={handleChange} /> : formData.medication}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
// import React, { useState } from "react";
// import HealthCard from "./HealthCard"; // ✅ Make sure this path is correct

// export default function Profile() {
//   const [formData, setFormData] = useState({
//     physician: "Dr. A. Kumar",
//     allergies: "None",
//     surgeries: "Appendectomy (2015)",
//     conditions: "Hypertension",
//     medication: "Amlodipine"
//   });

//   const [editable, setEditable] = useState(false);
//   const [activeTab, setActiveTab] = useState("details"); // 🟡 Controls current view

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="container my-5">
//       <div className="row g-4">
//         <div className="col-md-6">
//           <h6>Personal Information</h6>
//           <ul>
//             <li><strong>Name:</strong> Ramesh Kumar</li>
//             <li><strong>Date of Birth:</strong> 01/01/1980</li>
//             <li><strong>Father's Name:</strong> Mahesh Kumar</li>
//             <li><strong>City:</strong> Lucknow</li>
//           </ul>
//         </div>

//         <div className="col-md-6">
//           {/* Conditional content: medical info or arogya card */}
//           {activeTab === "details" && (
//             <>
//               <h6>Medical Information</h6>
//               <ul>
//                 <li><strong>Primary Physician:</strong> {editable ? <input name="physician" value={formData.physician} onChange={handleChange} /> : formData.physician}</li>
//                 <li><strong>Known Allergies:</strong> {editable ? <input name="allergies" value={formData.allergies} onChange={handleChange} /> : formData.allergies}</li>
//                 <li><strong>Previous Surgeries:</strong> {editable ? <input name="surgeries" value={formData.surgeries} onChange={handleChange} /> : formData.surgeries}</li>
//                 <li><strong>Chronic Conditions:</strong> {editable ? <input name="conditions" value={formData.conditions} onChange={handleChange} /> : formData.conditions}</li>
//                 <li><strong>Current Medication:</strong> {editable ? <input name="medication" value={formData.medication} onChange={handleChange} /> : formData.medication}</li>
//               </ul>
//             </>
//           )}

//           {activeTab === "arogya" && (
//             <HealthCard />
//           )}
//         </div>
//       </div>

//       {/* Tabs to switch views */}
//       <div className="tabs d-none d-md-flex mt-4">
//         <button className={`tab ${activeTab === "details" ? "active" : ""}`} onClick={() => setActiveTab("details")}>Details</button>
//         <button className={`tab ${activeTab === "arogya" ? "active" : ""}`} onClick={() => setActiveTab("arogya")}>Arogya Card</button>
//         <button className="tab">Insurance</button>
//         <button className="tab">Chat</button>
//         <button className="tab">Notes</button>
//         <button className="tab">Attachments</button>
//       </div>
//     </div>
//   );
// }
