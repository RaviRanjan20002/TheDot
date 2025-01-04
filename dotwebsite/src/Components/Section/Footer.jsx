import React from "react";
import "../../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* About Section */}
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li>About Excellence</li>
            <li>Our Vision</li>
            <li>Leadership</li>
            <li>Our Journey</li>
            <li>Join Our Team</li>
          </ul>
        </div>

        {/* Courses Section */}
        <div className="footer-column">
          <h3>Courses & Programs</h3>
          <ul>
            <li>JEE (Main & Adv.)</li>
            <li>NEET (UG)</li>
            <li>Class 6th to 10th</li>
            <li>Online Programs</li>
            <li>Study Abroad</li>
          </ul>
        </div>

        {/* Results Section */}
        <div className="footer-column">
          <h3>Results</h3>
          <ul>
            <li>JEE Advanced</li>
            <li>NEET UG</li>
            <li>AIIMS</li>
            <li>Olympiads</li>
            <li>Board Exams</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-column contact-info">
          <h3>Contact Us</h3>
          <p>
            <strong>Address:</strong> 94L, Old DC Office Rd, Model Town, Rewari,
            Haryana 123401
          </p>
          <p>
            <strong>Phone:</strong> +91 7419614851
          </p>
          <p>
            <strong>Email:</strong> thedot.ind@gmail.com
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Excellence Coaching. All rights reserved.</p>
        <p>
          <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">Refund Policy</a> | <a href="#">Disclaimer</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
