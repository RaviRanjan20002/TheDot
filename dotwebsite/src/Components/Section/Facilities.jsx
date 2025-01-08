import React from "react";
import "../../../styles/Facilities.css";
import facultySupportImage from "../../assets/facultySupport.jpg"; // Replace with the correct path
import expertEducatorsImage from "../../assets/expertEducators.jpg"; // Replace with the correct path
import assessmentsImage from "../../assets/assessments.jpg"; // Replace with the correct path

const Facilities = () => {
    return (
        <section className="facilities-section">
            <div className="facilities-container">
                <div className="textcont">
                    <h2 className="section-title">Expert Coaching Facilities</h2>
                    <p className="section-description">
                        We provide specialized coaching for IIT-JEE and NEET with experienced faculty in all subjects.
                    </p>
                </div>
                <div className="facilities-grid">
                    <div className="facility-item">
                        <img src={facultySupportImage} alt="Expert Faculty Support" className="facility-image" />
                        <h3>Expert Faculty Support</h3>
                        <p>
                            Our experienced faculty members are always ready to assist students in addressing any academic challenges. Whether it’s a specific topic, a difficult concept, or a question from the course material, our faculty provides clear and comprehensive explanations.
                        </p>
                    </div>
                    <div className="facility-item">
                        <img src={expertEducatorsImage} alt="Experienced and Expert Educators" className="facility-image" />
                        <h3>Experienced and Expert Educators</h3>
                        <p>
                            At The DOT, we are proud to have a distinguished team of faculty members, all of whom are IITians graduates from the prestigious Indian Institutes of Technology (IITs). Their academic excellence and strong technical foundation set them apart as experts in their fields, offering students a world-class education grounded in the latest industry practices and research.
                        </p>
                    </div>
                    <div className="facility-item">
                        <img src={assessmentsImage} alt="Regular Assessments and Tests" className="facility-image" />
                        <h3>Regular Assessments and Tests</h3>
                        <p>
                            At The DOT, we believe in continuous evaluation to track student progress and ensure thorough understanding of the subject matter. Our Regular Tests and Assessments are designed to: Evaluate Understanding, Track Progress, Practice and Mock Tests, and build the skills necessary for effective time management and exam preparation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facilities;
