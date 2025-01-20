// Admission.jsx
import React from "react";
// import "../../../styles/Admission.css";
// const Admission = () => {
//   return (
//     <div className="container">
//       <div className="left-section">
//         <h1>THE DOT</h1>
//         <h2>THE CLEAR LEADER</h2>
//         <p>IIT-JEE,NEET(UG)</p>
//         {/* <div className="success-stories">
//           <h3>
//             EVERY 4<sup>TH</sup> SUCCESS STORY IS POWERED BY ALLEN
//           </h3>
//           <div className="stats">
//             <div>
//               <h4>IITs</h4>
//               <p>4425 ALLENites out of 17692 seats in 2024</p>
//             </div>
//             <div>
//               <h4>AIIMS (MBBS)</h4>
//               <p>660 ALLENites out of 2207 seats in 2024</p>
//             </div>
//             <div>
//               <h4>NEET (UG)</h4>
//               <p>6570 ALLENites in Top 25000 All India Rank in 2024</p>
//             </div>
//             <div>
//               <h4>OLYMPIADS</h4>
//               <p>
//                 939 out of 3704 Selections in Indian National Olympiads 2025
//               </p>
//             </div>
//           </div>
//           <p>
//             45 AIR in Top 100 - JEE (Adv.) 2024 | 39 AIR in Top 100 - NEET (UG)
//             2024
//           </p>
//         </div> */}
//       </div>
//       <div className="right-section">
//         <h3>REQUEST A CALL BACK</h3>
//         <p>(Session 2025-26)</p>
//         <form>
//           <input type="text" placeholder="Name" required />
//           <input type="email" placeholder="Email Id" required />
//           <div className="mobile-input">
//             <span>91</span>
//             <input type="text" placeholder="mobile no" required />
//           </div>  
//           <select required>
//             <option value="">Select Class</option>
//             <option value="class10">Class 10</option>
//             <option value="class11">Class 11</option>
//             <option value="class12">Class 12</option>
//             <option value="Dropper">Dropper</option>
//           </select>
//           <select required>
//             <option value="">Select Choice</option>
//             <option value="IIT-JEE">IIT-JEE</option>
//             <option value="NEET(UG)">NEET(UG)</option>
//           </select>
//           <div className="checkboxes">
//             <label>
//               <input type="checkbox" required /> I agree to Terms & Condition
//             </label>
//             <label>
//               <input type="checkbox" /> I authorize The DOT Institute to send me regular updates via Phone Calls, WhatsApp, SMS,
//               or Email.
//             </label>
//           </div>
//           <button type="submit">SUBMIT</button>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default Admission;


import { useState } from 'react';
import "../../../styles/Admission.css";

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    class: '',
    choice: '',
    termsAccepted: false,
    updatesAuthorized: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL'; // Replace with your deployed Google Apps Script URL

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      if (result.status === 'success') {
        alert('Form submitted successfully!');
      } else {
        alert('Form submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form.');
    }
  };

  return (
    <div className="admission-container">
      <div className="admission-info">
        <div className="three">
          <h1>THE DOT</h1>
          <h2>The Clear Leader</h2>
          <p>IIT-JEE, AIIMS, NEET (UG) & Olympiads</p>
        </div>
        

        <div className="admission-stats">
          <h3>Every 4<sup>th</sup> Success Story is Powered by The Dot in Rewari</h3>
          <div className="stats-grid">
            <div className="stats-item">
              <h4>4425</h4>
              <p>ALLENites out of 17692 seats in 2024 (IITs)</p>
            </div>
            <div className="stats-item">
              <h4>660</h4>
              <p>ALLENites out of 2207 seats in 2024 (AIIMS)</p>
            </div>
            <div className="stats-item">
              <h4>6570</h4>
              <p>ALLENites in Top 25000 All India Rank in 2024 (NEET UG)</p>
            </div>
            <div className="stats-item">
              <h4>939</h4>
              <p>Selections in Indian National Olympiads 2025</p>
            </div>
          </div>
        </div>

        <p className="admission-highlights">
          45 AIR in Top 100 - JEE (Adv.) 2024 | 39 AIR in Top 100 - NEET (UG) 2024
        </p>
      </div>

      <div className="admission-form">
        <h3>Request a Call Back</h3>
        <p>(Session 2025-26)</p>

        <form className="form-section">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <div className="mobile-input">
            <span>91</span>
            <input type="tel" placeholder="Mobile No" />
          </div>
          <select>
            <option>Select Center</option>
          </select>
          <select>
            <option>Select Class</option>
          </select>
          <select>
            <option>Select Stream</option>
          </select>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> I agree to <a href="#">Terms & Conditions</a>
            </label>
            <label>
              <input type="checkbox" /> I authorize ALLEN Career Institute Pvt. Ltd. to send me updates.
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Admission;