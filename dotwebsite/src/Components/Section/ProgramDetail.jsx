import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../../styles/ProgramDetail.css"; // Import the CSS file

import coursePlanner from "../../assets/coursePlanner.avif";
import faculty from "../../assets/prog2.jpg";
import councellor from "../../assets/counseller.jpeg";
import Pdetails from "./Pdetails";
// import Pdetails from "./Pdetails";

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

    if (!program) {
        return <h2 className="not-found">Program Not Found</h2>;
    }

    const validateForm = () => {
        const { name, phone, email } = studentInfo;

        // Name validation (At least 3 characters)
        if (name.trim().length < 3) {
            alert("Name must be at least 3 characters long.");
            return false;
        }

        // Phone number validation (Exactly 10 digits)
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            alert("Phone number must be exactly 10 digits.");
            return false;
        }

        // Email validation (Basic pattern check)
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const link = document.createElement("a");
            link.href = downloadLink;
            link.setAttribute("download", downloadLink.split("/").pop());
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setShowForm(false);
            setStudentInfo({ name: "", phone: "", email: "" });
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
                    <button
                        className="download-btn"
                        onClick={() => {
                            setDownloadLink("/pdfs/The Dot Book.-1.pdf");
                            setShowForm(true);
                        }}
                    >
                        Download
                    </button>
                </div>

                <div className="info-box">
                    <img src={faculty} alt="Faculty" className="info-image" />
                    <h3>Faculty</h3>
                    <p>Learn more about our expert faculty members.</p>
                    <button
                        className="download-btn"
                        onClick={() => {
                            setDownloadLink("/pdfs/faculty-details.pdf");
                            setShowForm(true);
                        }}
                    >
                        Download
                    </button>
                </div>

                <div className="info-box">
                    <img src={councellor} alt="Counselor" className="info-image" />
                    <h3>Connect to Counselors</h3>
                    <p>Get guidance from our expert counselors.</p>
                    <Link to="/contact" className="connect-btn">
                        Connect Now
                    </Link>
                </div>
            </div>

            {/* <Link to="/" className="back-button">← Back to Programs</Link> */}

            {showForm && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Enter Your Details</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={studentInfo.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={studentInfo.phone}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={studentInfo.email}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit" className="submit-btn">Submit & Download</button>
                            <button type="button" className="close-btn" onClick={() => setShowForm(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
        <Pdetails/>
        </div>
        
    );
    
};

export default ProgramDetail;
