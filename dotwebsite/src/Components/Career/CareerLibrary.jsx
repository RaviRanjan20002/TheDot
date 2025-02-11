
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import careersData from "./careersData";
import "./CareerLibrary.css";

const streamCareers = {
  "Medical": ["Medical", "Agriculture and Natural Resources", "Animal Care and Farming", "Politics and Law", "Science and Research", "Sports and Recreation", "Healthcare", "Environmental Care", "Food and Culinary Art", "Beauty and Personal Care", "Arts and Design", "Construction and Skilled Trades", "Cultural Heritage Management", "Education", "Fashion Industry", "Healthcare", "Hospitality Industry", "Medical", "Safety Management Services", "Social Services and Counseling", "Sports and Recreation", "Transportation and Logistics"],

  "Non-Medical": ["Engineering", "IT and Computer Science", "Agriculture and Natural Resources", "Robotics and Automation", "Science and Research", "Civil Services", "Gaming Industry", "Hospitality and Tourism", "Hospitality Industry", "Information Technology", "Law and Public Policy", "Manufacturing and Production", "Marketing and Advertising", "Media and Communications", "Media and Performing Arts", "Music and Entertainment","NonMedical", "Humanities", "National Security and Emergency Services", "Politics and Law", "Robotics and Automation", "Safety Management Services", "Sales and Management", "Transportation and Logistics", "Travel and Tourism"],

  "others": ["Media and Communications", "Music and Entertainment", "Politics and Law", "Social Services and Counseling", "Media and Performing Arts", "National Security and Emergency Services", "Fashion Industry", "Arts and Design", "Textile and Clothing Industry", "Transportation and Logistics", "Travel and Tourism", "Business and Finance", "Marketing and Advertising", "Entrepreneurship", "Finance and Economics", "Sales and Management", "Sales and Marketing", "Ecommerce", "Finance", "Marketing", "Sales", "Supply Chain Management", "Business and Finance", "Marketing and Advertising", "Sales and Management", "Sales and Marketing", "Ecommerce", "Finance", "Manufacturing and Production", "Agriculture and Natural Resources","Sales", "Hospitality Industry", "Hospitality and Tourism", "Sales and Management", "Sales and Marketing", "Transportation and Logistics", "Travel and Tourism", "NonMedical", "Humanities"],
};

const CareerLibrary = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedStream = params.get("stream");

  const [filteredCareers, setFilteredCareers] = useState(careersData);
  const [query, setQuery] = useState("");
  const [videoIndex, setVideoIndex] = useState(0);

  const videoUrls = {
    "Medical": [
      "https://www.youtube.com/embed/E5_0W-bx1YE",
      "https://www.youtube.com/embed/xeruM608dBM",
      "https://www.youtube.com/embed/egC7Upkgrwg"
    ],
    "Non-Medical": [
      "https://www.youtube.com/embed/E5_0W-bx1YE",
      "https://www.youtube.com/embed/xeruM608dBM",
      "https://www.youtube.com/embed/egC7Upkgrwg"
    ],
    "others": [
      "https://www.youtube.com/embed/E5_0W-bx1YE",
      "https://www.youtube.com/embed/xeruM608dBM",
      "https://www.youtube.com/embed/egC7Upkgrwg"
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (selectedStream && streamCareers[selectedStream]) {
      setFilteredCareers(
        careersData.filter((career) => streamCareers[selectedStream].includes(career.title))
      );
    } else {
      setFilteredCareers(careersData);
    }
  }, [selectedStream]);

  const nextVideo = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls[selectedStream].length);
  };

  const prevVideo = () => {
    setVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoUrls[selectedStream].length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="career-library">
      <h1>
        <Link to="/career-streams" className="career-library-link">
          <span>Career Library</span>
        </Link>
      </h1>
      <p className="subtitle">Explore career options based on your selected stream.</p>
      <hr />

      <input
        type="text"
        placeholder="Search career..."
        onChange={(e) => setQuery(e.target.value.trim().toLowerCase())}
        className="search-bar"
      />

      {selectedStream && videoUrls[selectedStream] && (
        <div className="video-slider">
          <button className="nav-button left" onClick={prevVideo}>&#8249;</button>
          <div className="video-frame">
            <iframe
              width="100%"
              height="350"
              src={videoUrls[selectedStream][videoIndex]}
              title="Career Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <button className="nav-button right" onClick={nextVideo}>&#8250;</button>
        </div>
      )}

      <div className="career-grid">
        {filteredCareers
          .filter((career) => career.title.toLowerCase().includes(query))
          .map((career, index) => (
            <Link key={index} to={`/career/${career.title.replace(/\s+/g, "-").toLowerCase()}`} className="career-card">
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


