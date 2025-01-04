// Empowering.jsx
import React from "react";
import "../../../styles/Empowering.css";
import successImage from "../../assets/success.jpg"; // Replace with the actual path to your image

const Empowering = () => {
    return (
        <section className="empowering-section">
            <div className="container">
                <div className="content">
                <h2 className="section-title-em">Empowering Future Leaders in Science</h2>
                    <p className="section-description-em">
                        At The Dot, we specialize in IIT-JEE and NEET coaching, guided by experienced IITians ensuring students achieve their academic goals.
                    </p>
                    <div className="statistics">
                        <div className="stat-item">
                            <h3>500+</h3>
                            <p>Success Stories</p>
                        </div>
                        <div className="stat-item">
                            <h3>50+</h3>
                            <p>Experienced IITians</p>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <img src={successImage} alt="Success Stories" />
                </div>
            </div>
        </section>
    );
};

export default Empowering;
