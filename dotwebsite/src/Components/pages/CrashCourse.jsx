// eslint-disable-next-line no-unused-vars
import React from 'react';
import "../../../styles/CrashCoursePage.css"; // Ensure the correct CSS file is imported
import "../../../styles/CrashCourse.css";
const CrashCourse = () => {
  return (
    <section className="crash-course-page">
      {/* Header Section */}
      <div className="header-section">
        <h1>The Crash Course to Give Your JEE Main Preparation the Ultimate Boost</h1>
      </div>

      {/* Main Content */}
      <div className="main-container">
        {/* Left Side - Course Content */}
        <div className="course-content">
          <h2 className="course-title">Dot Institute JEE Mains 2025 Crash Course</h2>
          <p className="course-subtitle">
            The Crash Course to Give Your JEE Main Preparation the Ultimate Boost
          </p>
          
          <div className="course-details">
            <p>
              <strong>DOT Institute</strong> announces the much-awaited <strong>“Online Crash Course”</strong> for JEE Main 2025.
            </p>
            <p>
              If you are all set to appear in JEE Main 2025, then this is the perfect time and course to give your preparation the ultimate boost. Classes will start soon.
            </p>
            <p><strong>Course Highlights:</strong></p>
            <ul>
              <li>✔ <strong>The Medium of Course:</strong> English</li>
              <li>✔ <strong>Mode of Admission:</strong> Direct</li>
              <li>✔ <strong>Who can apply:</strong> 12th Appearing / Passed Students</li>
              <li>✔ <strong>Course Fee:</strong> ₹9,999 only</li>
            </ul>

            <p><strong>With 45 Days of Online Learning, You Will Get:</strong></p>
            <ul>
              <li>A Better Idea about which topics to focus on more</li>
              <li>A Clear-Cut Strategy</li>
              <li>Stronger Fundamentals</li>
              <li>Clearer Concepts</li>
              <li>Practised Syllabus</li>
            </ul>

            <p><strong>Salient Features of Program:</strong></p>
            <ul>
            <li>✔ 180+ Hours (32 Hours in a Week)</li>
              <li>✔ Fast-Paced Offline Classes (One to One Mentorship Session)</li>
              <li>✔ 45+ Home Practice Tests</li>
              <li>✔ 10 JEE Mains Full Mock Tests</li>
              <li>✔ 11th & 12th Syllabus Fully Covered with Advanced Problem-Solving</li>
              <li>✔ Get an 80% Scholarship on JEE Advanced Crash Course for students with 97+ percentile in JEE Mains!</li>
              <li>✔ Hostel Facility Available</li>
            </ul>
            <p><strong>Note:</strong> Tentative number of Lecture Hours and Days may be revised depending on the Exam Dates announced by NTA.</p>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfKKfFbXQWro8Y3jPH4q8mqK3-FYUJoHx4rpZYtnwls6YpW9Q/viewform?usp=dialog" 
            target="_blank"
            rel="noopener noreferrer"
            className="enroll-button"
          >
            Enroll Now
          </a>
        </div>
      </div> {/* Closed the missing div tag */}
    </section>
  );
};

export default CrashCourse;
