// New Component for Career Streams Page

import { Link } from "react-router-dom";
import "./CareerStreams.css";
import studentImage from "../../assets/student-image2.png";

const CareerStreams = () => {
  return (
    <div className="career-streams-container">
      <h1>Choose Your Stream...</h1>
      <p className="description-text">
        Discover the path that aligns with your passion and skills. Each stream
        opens the door to exciting opportunities and fulfilling careers. Take
        the first step towards shaping your future today!
      </p>
      <img src={studentImage} alt="Student" className="student-image" />

      <div className="streams-grid">
        <Link to="/CareerLibrary?stream=Medical" className="stream-card">
          Medical
        </Link>
        <Link to="/CareerLibrary?stream=Non-Medical" className="stream-card">
          Non-Medical
        </Link>
        <Link to="/CareerLibrary?stream=others" className="stream-card">
          Others
        </Link>
      </div>

      <p className="good-luck-text">All the Best for Your Future!</p>
      <p className="motivational-quote">
        Your journey starts here. Choose wisely and dream big!
      </p>
    </div>
  );
};

export default CareerStreams;
