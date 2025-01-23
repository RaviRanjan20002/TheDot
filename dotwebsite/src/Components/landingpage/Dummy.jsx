// import  { useState } from "react";
// import "../../../styles/Admission.css";
// import FeeBenefits from "./FeeBenefits";
// import Questions from "./Questions";
// import DotGuide from "./Dotguidlines";
// const Admission = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false); // State for submission status

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior

//     const formEle = document.querySelector(".form-section");
//     const formData = new FormData(formEle);

//     // Ensure correct checkbox values
//     formData.set("termsAccepted", formEle.termsAccepted.checked ? "true" : "false");
//     formData.set(
//       "updatesAuthorized",
//       formEle.updatesAuthorized.checked ? "true" : "false"
//     );

//     try {
//       setIsSubmitting(true); // Set loading state to true

//       const response = await fetch(
//         "https://script.google.com/macros/s/AKfycbzOu-FSuI1x5Q7RsECP_aiC3bxy7Bhm2_HRYk1fHO3sXgW7Z0_X6zK4UMonYacJco3U/exec",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to submit the form");
//       }

//       const data = await response.json();
//       console.log(data);

//       alert("Form submitted successfully!");
//       formEle.reset(); // Reset the form fields
//     } catch (error) {
//       console.error(error);
//       alert("There was an error submitting the form. Please try again.");
//     } finally {
//       setIsSubmitting(false); // Reset loading state
//     }
//   };

//   return (
//     <div className="mainBody">
//       <div className="admission-container">
//         <div className="admission-content">
//           <div className="admission-info">
//             <div className="three">
//               <h1>THE DOT</h1>
//               <h2>The Clear Leader</h2>
//               <p>IIT-JEE, AIIMS, NEET (UG) & Olympiads</p>
//             </div>
//           </div>

//           <div className="admission-form">
//             <h3>Request a Call Back</h3>
//             <p>(Session 2025-26)</p>
//             <form className="form-section" onSubmit={handleSubmit}>
//               <input type="text" name="name" placeholder="Name" required />
//               <input type="email" name="email" placeholder="E-mail" required />
//               <div className="mobile-input">
//                 <span>91</span>
//                 <input type="tel" name="mobile" placeholder="Mobile No" required />
//               </div>
//               <select name="clas" required>
//                 <option value="">Select Class</option>
//                 <option value="class10">Class 10</option>
//                 <option value="class11">Class 11</option>
//                 <option value="class12">Class 12</option>
//                 <option value="Dropper">Dropper</option>
//               </select>
//               <select name="choice" required>
//                 <option value="">Select Choice</option>
//                 <option value="IIT-JEE">IIT-JEE</option>
//                 <option value="NEET(UG)">NEET(UG)</option>
//               </select>
//               <div className="checkboxes">
//                 <label>
//                   <input type="checkbox" name="termsAccepted" required /> I agree
//                   to Terms & Condition
//                 </label>
//                 <label>
//                   <input type="checkbox" name="updatesAuthorized" /> I authorize
//                   The DOT Institute to send me regular updates via Phone Calls,
//                   WhatsApp, SMS, or Email.
//                 </label>
//               </div>
//               <button type="submit" disabled={isSubmitting}>
//                 {isSubmitting ? "Submitting..." : "Submit"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="fee-benefits-section">
//          <FeeBenefits />
//        </div>
//        <div>
//         <DotGuide />
//       </div>
//        <div>
//         <Questions />
//       </div>
//     </div>
//   );
// };

// export default Admission;
// body {
//     margin: 0;
//     padding: 0;
//     background-color: white;
//   }
  
//   .mainBody{
//     /* background-color: #003580; */
//     /* height: 100; */
//   }
  
//   /* Container */
//   .admission-container {
//     margin: 0;
//     padding: 0 15px;
//     box-sizing: border-box;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 2rem;
//     background-color: #c1d8e0;
//     gap: 2rem;
//     /* box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); */
//     /* border-radius: 10px; */
//     width: 100%;
//     /* max-width: 1200px; */
//     /* margin: 20px auto; */
    
//     /* padding: 6rem; */
//     padding-top: 3rem;
//     padding-bottom: 10rem;
//   }
  
//   /* Admission Content Wrapper */
//   .admission-content {
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     gap: 1rem;
//     width: 100%;
//     max-width: 1200px;
//   }
  
//   /* Info Section */
//   .admission-info {
//     flex: 1;
//     /* margin-right: 20px; */
//     padding: 20px;
//     background-color: #ffffff;
//     border: 1px solid #ececec;
//     border-radius: 10px;
//     box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
//   }
  
//   .admission-info .three h1 {
//     font-size: 2rem;
//     color: #184f89;
//     margin: 0;
//     font-family: "DM Serif Text", serif;
//     text-align: center;
//   }
  
//   .admission-info .three h2 {
//     margin: 0;
//     font-size: 1.2rem;
//     color: #184f89;
//     font-family: "DM Serif Text", serif;
//     text-align: center;
//   }
  
//   .admission-info .three p {
//     margin: 5px;
//     font-family: "DM Serif Text", serif;
//     font-weight: 400;
//     font-style: normal;
//     text-align: center;
//     font-size: 1.2rem;
//     color: #666;
//   }
  
//   .admission-stats {
//     margin-top: 20px;
//   }
  
//   .admission-stats h3 {
//     font-family: "DM Serif Text", serif;
//     font-weight: 400;
//     font-style: normal;
//     text-align: center;
//     font-size: 1rem;
//     color: #444;
//     font-weight: bold;
//   }
  
//   .stats-grid {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     gap: 10px;
//   }
  
//   .stats-item {
//     background-color: #f0faff;
//     border: 1px solid #d1e7ff;
//     border-radius: 10px;
//     padding: 10px;
//     text-align: center;
//     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
//   }
  
//   .stats-item h4 {
//     font-size: 1.5rem;
//     color: #184f89;
//     font-weight: bold;
//     margin: 0;
//   }
  
//   .stats-item p {
//     font-size: 1rem;
//     color: #555;
//     line-height: 1.4;
//   }
  
//   .admission-highlights {
//     margin-top: 30px;
//     font-size: 1.1rem;
//     color: #222;
//     font-weight: bold;
//     background-color: #f4f4f4;
//     padding: 10px;
//     border-radius: 8px;
//   }
  
//   /* Form Section */
//   .admission-form {
//     margin-left: 10px;
//     margin-right: 10px;
//     flex: 1;
//     background-color: #fff;
//     border: 1px solid #ececec;
//     border-radius: 10px;
//     padding: 30px;
//     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//     box-sizing: border-box; 
//   }
  
//   .admission-form h3 {
//     font-size: 1.8rem;
//     color: #184f89;
//     font-weight: bold;
//     margin-bottom: 10px;
//   }
  
//   .admission-form p {
//     font-size: 1rem;
//     color: #555;
//     margin-bottom: 20px;
//   }
  
//   .form-section input,
//   .form-section select {
//     width: 100%;
//     padding: 12px 15px;
//     margin-bottom: 20px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     font-size: 1rem;
//     background-color: #fafafa;
//     box-sizing: border-box; 
//   }
  
  
//   .mobile-input {
//     display: flex;
//     align-items: center;
//     gap: 0;
//     margin-bottom: 20px;
//   }
  
//   .mobile-input span {
//     background-color: #e8e8e8;
//     border: 1px solid #ccc;
//     padding: 12px 15px;
//     border-radius: 5px 0 0 5px;
//     font-size: 1rem;
//     color: #333;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: relative;
//     top: -10px;
//   }
  
//   .mobile-input input {
//     flex: 1;
//     border: 1px solid #ccc;
//     border-left: none;
//     border-radius: 0 5px 5px 0;
//     padding: 12px 15px;
//   }
  
//   .checkboxes {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//     font-size: 0.9rem;
//     color: #555;
//   }
  
//   .checkboxes label {
//     display: flex;
//     align-items: center;
//     gap: 10px;
//   }
  
//   .checkboxes input[type="checkbox"] {
//     width: 18px;
//     height: 18px;
//     margin: 0;
//     accent-color: #184f89;
//   }
  
//   .checkboxes label a {
//     color: #184f89;
//     text-decoration: none;
//   }
  
//   .checkboxes label a:hover {
//     text-decoration: underline;
//   }
  
//   button[type="submit"] {
//     width: 100%;
//     padding: 12px;
//     background-color: #0047ab;
//     color: #fff;
//     border: none;
//     border-radius: 5px;
//     font-size: 1.2rem;
//     font-weight: bold;
//     cursor: pointer;
//     transition: background-color 0.3s ease, box-shadow 0.2s ease;
//   }
  
//   button[type="submit"]:focus,
//   input:focus {
//     outline: 2px solid #0047ab;
//     outline-offset: 2px;
//   }
  
//   button[type="submit"]:hover {
//     background-color: #003580;
//     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//   }
  
//   /* Responsive Design */
//   @media (max-width: 768px) {
//     .admission-content {
//       flex-direction: column; /* Stack vertically */
//       align-items: center; /* Center content */
//     }
  
//     .admission-info,
//     .admission-form {
//       width: 100%; /* Full width on smaller screens */
//       margin: 0; /* Remove side margins */
//     }
//   }