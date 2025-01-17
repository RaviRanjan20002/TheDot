// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../../styles/Testimonial.css";// Link to the CSS file
import classroomImage from "../../assets/classroom.jpg"; // Replace with your actual image path
import profileImage from "../../assets/profile.jpg"; // Replace with the profile image path

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* Left Image Section */}
        <div className="image-container">
          <img
            src={classroomImage}
            alt="Classroom"
            className="testimonial-image"
          />
        </div>

        {/* Right Testimonial Section */}
        <div className="testimonial-content">
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">
            The Dot coaching transformed my understanding of IIT-JEE
            concepts. Highly recommend their expert faculty!
          </p>
          <div className="profile">
            <img
              src={profileImage}
              alt="Aarav Singh"
              className="profile-image"
            />
            <p className="profile-name">Aarav Singh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
