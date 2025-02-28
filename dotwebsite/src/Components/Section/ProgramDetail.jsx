
import  { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../../../styles/ProgramDetail.css";
import image1 from "../../assets/prog2.jpg";
import pdfi from "../../public/uploads/dummy.pdf";

const programs = [
  { id: 1, title: "11th JEE Program", imgSrc: image1, description: "Detailed JEE preparation for 11th graders.", pdf: pdfi },
  { id: 2, title: "11th NEET Program", imgSrc: image1, description: "Comprehensive NEET syllabus for 11th students.", pdf: pdfi },
  { id: 3, title: "12th JEE Program", imgSrc: image1, description: "Advanced JEE topics for 12th graders.", pdf: pdfi },
  { id: 4, title: "12th NEET Program", imgSrc: image1, description: "In-depth NEET syllabus for 12th students.", pdf: pdfi },
];

const ProgramDetail = () => {
  const { id } = useParams();
  const [pdfUrl, setPdfUrl] = useState("");

  const program = programs.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (program) {
      setPdfUrl(program.pdf);
    }
  }, [program]);

  if (!program) {
    return <h2 className="not-found">Program Not Found</h2>;
  }

  return (
    <div className="program-detail">
      <h2 className="detail-title">{program.title}</h2>
      <p className="detail-description">{program.description}</p>

      <div className="info-boxes">
        {/* Course Planner Box */}
        <div className="info-box">
          <h3>Course Planner</h3>
          <p>Download the course planner for detailed scheduling.</p>
          {pdfUrl ? (
            <a href={pdfUrl} download className="download-btn">
              Download
            </a>
          ) : (
            <p>No PDF available</p>
          )}
        </div>

        {/* Faculty Box */}
        <div className="info-box">
          <h3>Faculty</h3>
          <p>Learn more about our expert faculty members.</p>
          {pdfUrl ? (
            <a href={pdfUrl} download className="download-btn">
              Download
            </a>
          ) : (
            <p>No PDF available</p>
          )}
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
