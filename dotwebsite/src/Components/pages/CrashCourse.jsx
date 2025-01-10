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
              If you are all set to appear in JEE Main 2025, then this is the perfect time and course to give your preparation the ultimate boost. The online classes will start soon.
            </p>
            <p><strong>Course Highlights:</strong></p>
            <ul>
              <li>✔ <strong>The Medium of Course:</strong> English</li>
              <li>✔ <strong>Mode of Admission:</strong> Direct</li>
              <li>✔ <strong>Who can apply:</strong> 12th Appearing / Passed Students</li>
              <li>✔ <strong>Course Fee:</strong> ₹10,000</li>
            </ul>

            <p><strong>With 45 Days of Online Learning, You Will Get:</strong></p>
            <ul>
              <li>A Better Idea about which topics to focus on more</li>
              <li>A Clear-Cut Strategy</li>
              <li>Stronger Fundamentals</li>
              <li>Clearer Concepts</li>
              <li>Practised Syllabus</li>
            </ul>

            <p><strong>Salient Features:</strong></p>
            <ul>
              <li>In the Special Online Crash Course, you will be taught by <strong>DOT institute Faculties</strong>.</li>
              <li>Comprehensive Study Material and Worksheet Support covering the complete syllabus.</li>
              <li>Offline Classes will be conducted 6 days a week for 4 hours every day.</li>
              <li>Regular doubt removal assistance will be provided through WhatsApp and Calls.</li>
              <li>8 Full Mock Tests and Daily Practice Tests based on JEE (Main) 2025 pattern.</li>
              <li>Exhaustive test analysis and performance reports.</li>
              <li>Individual guidance from expert mentors to help you score more in JEE Main.</li>
            </ul>
            <p><strong>Note:</strong> Tentative number of Lecture Hours and Days may be revised depending on the Exam Dates announced by NTA.</p>
          </div>

          <a
            href="https://your-link-to-enroll.com" 
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
