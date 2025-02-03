import { Link } from "react-router-dom";
import "../../../styles/CareerLibrary.css";
import careersData from "./careersData"; // Import career data

const CareerLibrary = () => {
  return (
    <div className="career-library">
      <h1>Career Library</h1>
      <p className="subtitle">
        See all major career options out there and learn about each one of them.
      </p>
      <hr />
      {/* AI Assistant Banner */}
      <div className="ai-assistant">
        <strong>🚀 Introducing Our Career Page Provided by The DOT Counselling Team</strong>
        <p>Kickstart your career journey with the best Career guidance.</p>
      </div>
      {/* Search Bar */}
      <input type="text" placeholder="Search by name or career..." className="search-bar" />
      {/* Career Cards */}
      <div className="career-grid">
        {careersData.map((career, index) => (
          <Link
            key={index}
            to={`/career/${career.title.replace(/\s+/g, "-").toLowerCase()}`} // Dynamic URL
            className="career-card"
          >
            <img src={career.image} alt={career.title} className="career-image" />
            <div className="career-info">
              <h2>{career.title}</h2>
              <p>{career.options} career options</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CareerLibrary;
