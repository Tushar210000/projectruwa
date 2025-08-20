// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// // import './ModalForm.css'; // make sure you create this CSS file

// export default function Getstart({ onClose }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     countryCode: '+91',
//     phone: '',
//     city: '',
//     message: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.city.trim()) newErrors.city = 'City is required';
//     if (!formData.message.trim()) newErrors.message = 'Message is required';

//     if (!formData.email.trim() || !emailRegex.test(formData.email)) {
//       newErrors.email = 'Valid email is required';
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = 'Phone must be 10 digits';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       alert('Your details have been submitted successfully!');
//       setFormData({
//         name: '',
//         email: '',
//         countryCode: '+91',
//         phone: '',
//         city: '',
//         message: '',
//       });
//       setErrors({});
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-box">
//         <Link to='/'><i className="back-button">✕</i></Link>
//         {/* <button className="back-button" onClick={onClose}>✕</button> */}
//         <h3 className="text-center mb-4">Welcome</h3>
//         <form onSubmit={handleSubmit} noValidate>
//           <div className="mb-3">
//             <input type="text" className="form-control" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
//             {errors.name && <small className="text-danger">{errors.name}</small>}
//           </div>

//           <div className="mb-3">
//             <input type="email" className="form-control" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
//             {errors.email && <small className="text-danger">{errors.email}</small>}
//           </div>

//           <div className="mb-3 d-flex">
//             <select className="form-select me-2" name="countryCode" value={formData.countryCode} onChange={handleChange} style={{ maxWidth: '90px' }}>
//               <option value="+91">+91</option>
//               <option value="+1">+1</option>
//               <option value="+44">+44</option>
//             </select>
//             <input type="tel" className="form-control" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
//           </div>
//           {errors.phone && <small className="text-danger">{errors.phone}</small>}

//           <div className="mb-3">
//             <input type="text" className="form-control" placeholder="City" name="city" value={formData.city} onChange={handleChange} />
//             {errors.city && <small className="text-danger">{errors.city}</small>}
//           </div>

//           <div className="mb-3">
//             <textarea className="form-control" placeholder="Message" name="message" rows="3" value={formData.message} onChange={handleChange}></textarea>
//             {errors.message && <small className="text-danger">{errors.message}</small>}
//           </div>

//           <button type="submit" className="btn btn-primary w-100">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Getstart() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    city: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.email.trim() || !emailRegex.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Your details have been submitted successfully!');
      setFormData({
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        city: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="fullpage-form-container">
      <Link to="/" className="back-button">✕</Link>
      <div className="form-wrapper">
        <h3 className="text-center mb-4">Welcome</h3>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>

          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          <div className="mb-3 d-flex">
            <select className="form-select me-2" name="countryCode" value={formData.countryCode} onChange={handleChange} style={{ maxWidth: '90px' }}>
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>
            <input type="tel" className="form-control" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          {errors.phone && <small className="text-danger">{errors.phone}</small>}

          <div className="mb-3">
            <input type="text" className="form-control" placeholder="City" name="city" value={formData.city} onChange={handleChange} />
            {errors.city && <small className="text-danger">{errors.city}</small>}
          </div>

          <div className="mb-3">
            <textarea className="form-control" placeholder="Message" name="message" rows="3" value={formData.message} onChange={handleChange}></textarea>
            {errors.message && <small className="text-danger">{errors.message}</small>}
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}
