import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../../styles/ProgramDetail.css";

import coursePlanner from "../../assets/coursePlanner.avif";
import faculty from "../../assets/prog2.jpg";
import councellor from "../../assets/counseller.jpeg";
import Pdetails from "./Pdetails";
import ParentsTestimonial from "./ParentsTestimonial";

const programs = [
    { id: 1, title: "11th JEE Program", description: "Detailed JEE preparation for 11th graders." },
    { id: 2, title: "11th NEET Program", description: "Comprehensive NEET syllabus for 11th students." },
    { id: 3, title: "12th JEE Program", description: "Advanced JEE topics for 12th graders." },
    { id: 4, title: "12th NEET Program", description: "In-depth NEET syllabus for 12th students." },
    { id: 5, title: "JEE Dropper Program", description: "Specialized JEE course for droppers." },
    { id: 6, title: "NEET Dropper", description: "Targeted NEET preparation for droppers." },
    { id: 7, title: "JEE Crash Course", description: "Quick revision and crash course for JEE." },
    { id: 8, title: "NEET Crash Course", description: "Fast-paced NEET preparation course." },
];

const ProgramDetail = () => {
    const { id } = useParams();
    const program = programs.find((p) => p.id === parseInt(id));

    const [showForm, setShowForm] = useState(false);
    const [downloadLink, setDownloadLink] = useState("");
    const [studentInfo, setStudentInfo] = useState({ name: "", phone: "", email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false); 
    if (!program) {
        return <h2 className="not-found">Program Not Found</h2>;
    }

    const validateForm = () => {
        const { name, phone, email } = studentInfo;

        if (name.trim().length < 3) {
            alert("Name must be at least 3 characters long.");
            return false;
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            alert("Phone number must be exactly 10 digits.");
            return false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        return true;
    };

    const handleChange = (e) => {
        setStudentInfo({ ...studentInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
          const formEle = document.querySelector(".formsec");
          const formData = new FormData(formEle);

            try {
                setIsSubmitting(true);
                const response = await fetch(
                    "https://script.google.com/macros/s/AKfycbzrgzdVEGhOPI8YAAnvS86IhcD8Lv_BTMB84DqmNYmTwyEsFblkorNPi72jF7iZ4y88/exec",
                    {
                        method: "POST",
                        body: formData,
                    }
                );

                if (response.ok) {
                    alert("Form submitted successfully!");
                    setShowForm(false);
                    setStudentInfo({ name: "", phone: "", email: "" });
                    
                    const link = document.createElement("a");
                    link.href = downloadLink;
                    link.setAttribute("download", downloadLink.split("/").pop());
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else {
                    alert("Failed to submit the form. Please try again.");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                alert("An error occurred while submitting the form.");
            }finally {
                setIsSubmitting(false); // Reset loading state
              }
        }
    };

    return (
        <div>
        <div className="program-detail">
            <h2 className="detail-title">{program.title}</h2>
            <p className="detail-description">{program.description}</p>

            <div className="info-boxes">
                <div className="info-box">
                    <img src={coursePlanner} alt="Course Planner" className="info-image" />
                    <h3>Course Planner</h3>
                    <p>Download the course planner for detailed scheduling.</p>
                    <button className="download-btn" onClick={() => { setDownloadLink("/pdfs/TheDotBook.pdf"); setShowForm(true); }}>Download</button>
                </div>

                <div className="info-box">
                    <img src={faculty} alt="Faculty" className="info-image" />
                    <h3>Faculty</h3>
                    <p>Learn more about our expert faculty members.</p>
                    <button className="download-btn" onClick={() => { setDownloadLink("/pdfs/faculty-details.pdf"); setShowForm(true); }}>Download</button>
                </div>

                <div className="info-box">
                    <img src={councellor} alt="Counselor" className="info-image" />
                    <h3>Connect to Counselors</h3>
                    <p>Get guidance from our expert counselors.</p>
                    <Link to="/contact" className="connect-btn">Connect Now</Link>
                </div>
            </div>

            {/* <Link to="/" className="back-button">← Back to Programs</Link> */}

            {showForm && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Enter Your Details</h3>
                        <form className="formsec" onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Name" value={studentInfo.name} onChange={handleChange} required />
                            <input type="tel" name="phone" placeholder="Phone Number" value={studentInfo.phone} onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Email" value={studentInfo.email} onChange={handleChange} required />
                            <button type="submit" className="submit-btn"  disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit & Download"}</button>
                            <button type="button" className="close-btn" onClick={() => setShowForm(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
        <ParentsTestimonial/>
        <Pdetails/>
        </div>
    );
};

export default ProgramDetail;
