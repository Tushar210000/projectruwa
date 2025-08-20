// import React from 'react';
// // import './ModalForm.css';

// export default function ModalForm({ isOpen, onClose }) {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-box">
//         <button className="modal-close" onClick={onClose}>×</button>
//         <h2>Meet the <strong>LEADER</strong> in its Class</h2>
//         <p>Stay informed. Share your details!</p>

//         <form className="modal-form">
//           <input type="text" placeholder="Name" required />
//           <input type="text" placeholder="Mobile No." required />
//           <input type="email" placeholder="Email" required />
//           <select>
//             <option>DELHI</option>
//             <option>MUMBAI</option>
//             <option>BANGALORE</option>
//           </select>
//           <label className="modal-checkbox">
//             <input type="checkbox" required />
//             I agree to the <a href="#">Terms of Use</a>, <a href="#">Privacy Policy</a> & <a href="#">Data Collection Contract</a>
//           </label>
//           <button type="submit" className="modal-submit">SUBMIT</button>
//         </form>
//       </div>
//     </div>
//   );
// }
import React from 'react';
// import './ModalForm.css';
// import ruwaLogo from '../assets/logo.png'; // Make sure this path is correct

export default function ModalForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          {/* <img src='/assets/images/logo_ruwaindia.png'style={{height:"90px"}} alt="RUWA India Logo" className="modal-logo" /> */}
          <h2 className="modal-title">RUWA <strong>India</strong></h2>
        </div>

        <p className="modal-description">
          Empowering healthcare access across India. Fill in your details to stay connected with our initiatives and updates.
        </p>

        <form className="modal-form">
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Mobile No." required />
          <input type="email" placeholder="Email" required />
          <select required>
            <option value="">Select City</option>
            <option>DELHI</option>
            <option>MUMBAI</option>
            <option>BANGALORE</option>
          </select>

          <label className="modal-checkbox">
            <input type="checkbox" required />
            I agree to the <a href="#">Terms of Use</a>, <a href="#">Privacy Policy</a> & <a href="#">Data Collection Contract</a>
          </label>

          <button type="submit" className="modal-submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
