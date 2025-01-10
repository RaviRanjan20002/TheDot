import React from "react";
import "./CrashCourse.css";

const CrashCourse = () => {
  return (
    <div className="crash-course-container">
      <div className="crash-course-content">
        <h2>Accelerate Your Success through</h2>
        <h1>JEE MAIN 2025 CRASH COURSE</h1>
        <div className="highlights">
          <h3>PROGRAM HIGHLIGHTS:</h3>
          <ul>
            <li>120+ Hours (12 Hours a week)</li>
            <li>Fast Paced Live Online Classes of 12th Syllabus</li>
            <li>Recorded Lectures of 11th Syllabus</li>
            <li>30 Home Practice Tests</li>
            <li>5 JEE Main Full Mock Tests</li>
          </ul>
        </div>
        <div className="pricing">
          <p className="original-price">Fee: <span>29,999 + GST</span></p>
          <p className="discounted-price">14,999 + GST</p>
        </div>
        <button className="enroll-button">Enroll Now</button>
      </div>
      <div className="crash-course-image">
        <img src="path-to-your-image.png" alt="JEE Crash Course" />
      </div>
    </div>
  );
};

export default CrashCourse;
