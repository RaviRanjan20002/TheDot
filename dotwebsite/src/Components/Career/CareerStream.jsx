// New Component for Career Streams Page

import React from "react";
import { Link } from "react-router-dom";
import "./CareerStreams.css";
import studentImage from "../../assets/student-image2.png"; 

const CareerStreams = () => {
    return (
        <div className="career-streams-container">
            <h1>Choose Your Stream...</h1>
            <p className="description-text">
                Discover the path that aligns with your passion and skills. Each stream opens the door to exciting opportunities and fulfilling careers. Take the first step towards shaping your future today!
            </p>
            <img src={studentImage} alt="Student" className="student-image" />

            <div className="streams-grid">
                <Link to="/career/medical" className="stream-card">Medical</Link>
                <Link to="/career/NonMedical" className="stream-card">Non-Medical</Link>
                <Link to="/career/Humanities" className="stream-card">Humanities/Arts</Link>
                <Link to="/career/commerce" className="stream-card">Commerce</Link>
            </div>

            <p className="good-luck-text">All the Best for Your Future!</p>
            <p className="motivational-quote">"Your journey starts here. Choose wisely and dream big!"</p>
        </div>
    );
};

export default CareerStreams;