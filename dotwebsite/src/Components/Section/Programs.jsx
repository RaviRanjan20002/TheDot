import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../../../styles/Programs.css";
import image1 from "../../assets/JEE11.jpg";
import image5 from "../../assets/JEEDROP.jpg";
import image6 from "../../assets/NEETDROP.jpg";
import image4 from "../../assets/NEET12.jpg";
import image3 from "../../assets/JEE12.jpg";
import image2 from "../../assets/NEET11.jpg";
import image7 from "../../assets/CRASHNEET.jpg";
import image8 from "../../assets/CRASHJEE.jpg";

const programs = [
  { id: 1, title: "11th JEE Program", imgSrc: image1, description: "Detailed JEE preparation for 11th graders." },
  { id: 2, title: "11th NEET Program", imgSrc: image2, description: "Comprehensive NEET syllabus for 11th students." },
  { id: 3, title: "12th JEE Program", imgSrc: image3, description: "Advanced JEE topics for 12th graders." },
  { id: 4, title: "12th NEET Program", imgSrc: image4, description: "In-depth NEET syllabus for 12th students." },
  { id: 5, title: "JEE Dropper Program", imgSrc: image5, description: "Specialized JEE course for droppers." },
  { id: 6, title: "NEET Dropper", imgSrc: image6, description: "Targeted NEET preparation for droppers." },
  { id: 7, title: "JEE Crash Course", imgSrc: image8, description: "Quick revision and crash course for JEE." },
  { id: 8, title: "NEET Crash Course", imgSrc: image7, description: "Fast-paced NEET preparation course." },
];

const Programs = () => {
  return (
    <div className="course-section">
      <h2 className="section-title">Our Programs</h2>
      <div className="course-container">
        {programs.map((program) => (
          <div key={program.id} className="course-card">
            <img src={program.imgSrc} alt={program.title} className="course-image" />
            <div className="course-details">
              <h3 className="course-titleP">{program.title}</h3>
              <Link to={`/programs/${program.id}`} className="enroll-btnP">
                Explore More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
