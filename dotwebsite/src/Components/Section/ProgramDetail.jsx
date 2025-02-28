import React from "react";
import { useParams, Link } from "react-router-dom";
import "../../../styles/ProgramDetail.css"; // Import the CSS file
// import image1 from "../../assets/prog2.jpg";

const programs = [
  { id: 1, title: "11th JEE Program", imgSrc: image1, description: "Detailed JEE preparation for 11th graders." },
  { id: 2, title: "11th NEET Program", imgSrc: image1, description: "Comprehensive NEET syllabus for 11th students." },
  { id: 3, title: "12th JEE Program", imgSrc: image1, description: "Advanced JEE topics for 12th graders." },
  { id: 4, title: "12th NEET Program", imgSrc: image1, description: "In-depth NEET syllabus for 12th students." },
  { id: 5, title: "JEE Dropper Program", imgSrc: image1, description: "Specialized JEE course for droppers." },
  { id: 6, title: "NEET Dropper", imgSrc: image1, description: "Targeted NEET preparation for droppers." },
  { id: 7, title: "JEE Crash Course", imgSrc: image1, description: "Quick revision and crash course for JEE." },
  { id: 8, title: "NEET Crash Course", imgSrc: image1, description: "Fast-paced NEET preparation course." },
];

const ProgramDetail = () => {
  const { id } = useParams(); // Get program ID from URL
  const program = programs.find((p) => p.id === parseInt(id));

  if (!program) {
    return <h2 className="not-found">Program Not Found</h2>;
  }

  return (
    <div className="program-detail">
      <h2 className="detail-title">{program.title}</h2>
      <p className="detail-description">{program.description}</p>

      {/* New Boxes for Additional Information */}
      <div className="info-boxes">
        {/* Course Planner Box */}
        <div className="info-box">
          <h3>Course Planner</h3>
          <p>Download the course planner for detailed scheduling.</p>
          <a href="/path-to-course-planner.pdf" download className="download-btn">
            Download
          </a>
        </div>

        {/* Faculty Box */}
        <div className="info-box">
          <h3>Faculty</h3>
          <p>Learn more about our expert faculty members.</p>
          <a href="/path-to-faculty-details.pdf" download className="download-btn">
            Download
          </a>
        </div>

        {/* Connect to Counselors Box */}
        <div className="info-box">
          <h3>Connect to Counselors</h3>
          <p>Get guidance from our expert counselors.</p>
          <Link to="/contact" className="connect-btn">
            Connect Now
          </Link>
        </div>
      </div>

      <Link to="/" className="back-button">← Back to Programs</Link>
    </div>
  );
};

export default ProgramDetail;
