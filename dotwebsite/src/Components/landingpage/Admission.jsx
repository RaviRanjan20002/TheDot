import  { useState } from "react";
import "../../../styles/Admission.css";
import FeeBenefits from "./FeeBenefits";
import Questions from "./Questions";
import DotGuide from "./Dotguidlines";
import StatsSection from "./StatsSection";
import TriumphSection from "./TriumphSection";
import CoursesSection from "./CoursesSectionL";
// import DotGuide from "./Dotguidlines";

const Admission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submission status

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const formEle = document.querySelector(".form-section");
    const formData = new FormData(formEle);

    // Ensure correct checkbox values
    formData.set("termsAccepted", formEle.termsAccepted.checked ? "true" : "false");
    formData.set(
      "updatesAuthorized",
      formEle.updatesAuthorized.checked ? "true" : "false"
    );

    try {
      setIsSubmitting(true); // Set loading state to true

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzOu-FSuI1x5Q7RsECP_aiC3bxy7Bhm2_HRYk1fHO3sXgW7Z0_X6zK4UMonYacJco3U/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const data = await response.json();
      console.log(data);

      alert("Form submitted successfully!");
      formEle.reset(); // Reset the form fields
    } catch (error) {
      console.error(error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  return (
    <div className="mainBody">
      <div className="admission-container">
        <div className="admission-content">
          <div className="admission-info">
            <div className="three">
              <h1>THE DOT</h1>
              <h2>The Clear Leader</h2>
              <p>IIT-JEE, AIIMS, NEET (UG) & Olympiads</p>
            </div>
          </div>
          <div className="admission-form">
            <h3>Request a Call Back</h3>
            <p>(Session 2025-26)</p>
            <form className="form-section" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="E-mail" required />
              <div className="mobile-input">
                <span>91</span>
                <input type="tel" name="mobile" placeholder="Mobile No" required />
              </div>
              <select name="clas" required>
                <option value="">Select Class</option>
                <option value="class10">Class 10</option>
                <option value="class11">Class 11</option>
                <option value="class12">Class 12</option>
                <option value="Dropper">Dropper</option>
              </select>
              <select name="choice" required>
                <option value="">Select Choice</option>
                <option value="IIT-JEE">IIT-JEE</option>
                <option value="NEET(UG)">NEET(UG)</option>
              </select>
              <div className="checkboxes">
                <label>
                  <input type="checkbox" name="termsAccepted" required /> I agree
                  to Terms & Condition
                </label>
                <label>
                  <input type="checkbox" name="updatesAuthorized" /> I authorize
                  The DOT Institute to send me regular updates via Phone Calls,
                  WhatsApp, SMS, or Email.
                </label>
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="fee-benefits-section">
         <FeeBenefits />
       </div>
       <div>
        <DotGuide />
      </div>
      <div>
        <DotGuide/>
      </div>
      <div>
        <StatsSection/>
      </div>
      <div>
        <TriumphSection/>
      </div>
      <div>
        <CoursesSection/>
      </div>
      <div> 
        <Questions />
      </div>
      
    </div>
  );
};

export default Admission;
