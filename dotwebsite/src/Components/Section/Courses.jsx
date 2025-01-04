// Courses.jsx
import React from "react";
import "../../../styles/Courses.css";

const Courses = () => {
    return (
        <section className="courses-section">
            <div className="container">
            <div className="containertwo">
            <p className="section-description-cr">
            Join our expert coaching for IIT-JEE and NEET success.
                </p>
                <button className="enroll-header-button">ENROLL</button>
            </div>
            
                
                <div className="courses-list">
                    <div className="course-item">
                        <h3>Our Alumni</h3>
                        <p>Success stories from our accomplished students.</p>
                        
                    </div>
                    <div className="course-item">
                        <h3>DTSE Program</h3>
                        <p>Stay updated with our latest insights.</p>
                       
                    </div>
                    <div className="course-item">
                        <h3>Latest Blog Posts</h3>
                        <p>Explore comprehensive coaching programs available.</p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;
