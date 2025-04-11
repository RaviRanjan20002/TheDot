// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../../../styles/Footer.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Footer = () => {
  const [openSections, setOpenSections] = useState({
    about: false,
    courses: false,
    results: false,
    contact: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* About Section */}
        <div className="footer-column">
          <span className="dropdown-heading">
            About us
            <span
              className="dropdown-icon"
              onClick={() => toggleSection("about")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{ marginLeft: "117px" }}
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 5.5a.5.5 0 0 1 .866-.5l5.5 7a.5.5 0 0 1-.732.684L1.5 5.5zm12.866-.5a.5.5 0 1 1 .732.684l-5.5 7a.5.5 0 0 1-.866-.5l5.5-7z"
                />
              </svg>
            </span>
          </span>
          <ul
            className={`${openSections.about ? "visible" : "hidden"} toggle-section`}
          >
            <li><Link to="/about-excellence">About Excellence</Link></li>
            <li><Link to="/our-vision">Our Vision</Link></li>
            <li><Link to="/our-journey">Our Journey</Link></li>
            <li><Link to="/join-our-team">Join Our Team</Link></li>
          </ul>
        </div>

        {/* Courses Section */}
        <div className="footer-column">
          <span className="dropdown-heading">
            Courses & Programs
            <span
              className="dropdown-icon"
              onClick={() => toggleSection("courses")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{ marginLeft: "20px" }}
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 5.5a.5.5 0 0 1 .866-.5l5.5 7a.5.5 0 0 1-.732.684L1.5 5.5zm12.866-.5a.5.5 0 1 1 .732.684l-5.5 7a.5.5 0 0 1-.866-.5l5.5-7z"
                />
              </svg>
            </span>
          </span>
          <ul
            className={`${openSections.courses ? "visible" : "hidden"} toggle-section`}
          >
            <li> <Link to="/jee-main-adv">JEE (Main & Adv.)</Link></li>
            <li><Link to="/neet-ug">NEET (UG)</Link></li>
            <li><Link to="/jee-crash-course">Crash course for JEE mains</Link></li>
            <li><Link to="/neet-crash-course">Crash course for Neet</Link></li>
            {/* <li>Online Programs</li> */}
            {/* <li>Study Abroad</li> */}
          </ul>
        </div>

        {/* Results Section */}
        <div className="footer-column">
          <span className="dropdown-heading">
            Results
            <span
              className="dropdown-icon"
              onClick={() => toggleSection("results")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{ marginLeft: "130px" }}
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 5.5a.5.5 0 0 1 .866-.5l5.5 7a.5.5 0 0 1-.732.684L1.5 5.5zm12.866-.5a.5.5 0 1 1 .732.684l-5.5 7a.5.5 0 0 1-.866-.5l5.5-7z"
                />
              </svg>
            </span>
          </span>
          <ul
            className={`${openSections.results ? "visible" : "hidden"} toggle-section`}
          >
            <li><Link to="/result">JEE Advanced</Link></li>
            <li><Link to="/result">NEET UG</Link></li>
            {/* <li>AIIMS</li> */}
            {/* <li>Olympiads</li> */}
            {/* <li>Board Exams</li> */}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-column">
          <span className="dropdown-heading">
            Contact us
            <span
              className="dropdown-icon"
              onClick={() => toggleSection("contact")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{ marginLeft: "99px" }}
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 5.5a.5.5 0 0 1 .866-.5l5.5 7a.5.5 0 0 1-.732.684L1.5 5.5zm12.866-.5a.5.5 0 1 1 .732.684l-5.5 7a.5.5 0 0 1-.866-.5l5.5-7z"
                />
              </svg>
            </span>
          </span>
          <ul
            className={`${openSections.contact ? "visible" : "hidden"} toggle-section`}
          >
            <li>
              <strong>Address:</strong> 94L, Old DC Office Rd, Model Town, Rewari, Haryana 123401
            </li>
            <li>
              <strong>Phone:</strong> +91 7419614851
            </li>
            <li>
              <strong>Email:</strong> thedot.ind@gmail.com
            </li>
          </ul>
          <div className="social-icons">
            <a href="https://www.facebook.com/thedotrewari/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/thedotinstitute" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="http://linkedin.com/in/the-dot-754739257" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in fa-lg"></i>
            </a>
            <a href="https://www.youtube.com/@thedotinstituterewari" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube fa-lg"></i>
            </a>
          </div>

        </div>  
      </div>

      <div className="footer-bottom">
        <p>The DOT Coaching Institute ©All rights reserved.</p>
        <p>
          <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">Refund Policy</a> | <a href="#">Disclaimer</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

