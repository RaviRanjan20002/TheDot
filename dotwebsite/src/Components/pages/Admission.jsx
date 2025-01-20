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
    <div className="container">
      <div className="left-section">
        <h1>THE DOT</h1>
        <h2>THE CLEAR LEADER</h2>
        <p>IIT-JEE, NEET(UG)</p>
      </div>
      <div className="right-section">
        <h3>REQUEST A CALL BACK</h3>
        <p>(Session 2025-26)</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Id" required onChange={handleChange} />
          <div className="mobile-input">
            <span>91</span>
            <input type="text" name="mobile" placeholder="mobile no" required onChange={handleChange} />
          </div>  
          <select name="class" required onChange={handleChange}>
            <option value="">Select Class</option>
            <option value="class10">Class 10</option>
            <option value="class11">Class 11</option>
            <option value="class12">Class 12</option>
            <option value="Dropper">Dropper</option>
          </select>
          <select name="choice" required onChange={handleChange}>
            <option value="">Select Choice</option>
            <option value="IIT-JEE">IIT-JEE</option>
            <option value="NEET(UG)">NEET(UG)</option>
          </select>
          <div className="checkboxes">
            <label>
              <input type="checkbox" name="termsAccepted" required onChange={handleChange} /> I agree to Terms & Condition
            </label>
            <label>
              <input type="checkbox" name="updatesAuthorized" onChange={handleChange} /> I authorize The DOT Institute to send me regular updates via Phone Calls, WhatsApp, SMS, or Email.
            </label>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Admission;
