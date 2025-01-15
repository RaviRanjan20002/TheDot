// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../../../styles/Footer.css";

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
            <li>About Excellence</li>
            <li>Our Vision</li>
            <li>Leadership</li>
            <li>Our Journey</li>
            <li>Join Our Team</li>
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
                style={{ marginLeft: "10px" }}
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
            <li>JEE (Main & Adv.)</li>
            <li>NEET (UG)</li>
            <li>Class 6th to 10th</li>
            <li>Online Programs</li>
            <li>Study Abroad</li>
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
                style={{ marginLeft: "132px" }}
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
            <li>JEE Advanced</li>
            <li>NEET UG</li>
            <li>AIIMS</li>
            <li>Olympiads</li>
            <li>Board Exams</li>
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
                style={{ marginLeft: "100px" }}
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
            <a
              href="https://www.facebook.com/thedotrewari/"
              className="fab fa-facebook-f"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="https://www.facebook.com/thedotrewari/"
              className="fab fa-twitter"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="https://www.facebook.com/thedotrewari/"
              className="fab fa-instagram"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="https://www.facebook.com/thedotrewari/"
              className="fab fa-linkedin-in"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="https://www.facebook.com/thedotrewari/"
              className="fab fa-youtube"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Excellence Coaching. All rights reserved.</p>
        <p>
          <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">Refund Policy</a> | <a href="#">Disclaimer</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
