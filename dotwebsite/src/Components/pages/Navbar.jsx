import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../../styles/Navbar.css";
import logo from "../../assets/logo21.png";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible((prev) => !prev);
  };

  // Close the mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h3 className="DotName">The DOT</h3>
      </div>

      <button className="menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>

      <ul
        className={`nav-links ${isMobileMenuVisible ? "active" : ""}`}
        ref={mobileMenuRef}
      >
        <li>
          <Link to="/" onClick={() => setMobileMenuVisible(false)}>HOME</Link>
        </li>
        <li>
          <Link to="/blogs" onClick={() => setMobileMenuVisible(false)}>BLOGS</Link>
        </li>
        <li>
          <Link to="/gallery" onClick={() => setMobileMenuVisible(false)}>GALLERY</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMobileMenuVisible(false)}>CONTACT</Link>
        </li>
        <li>
          <Link to="/career-streams" onClick={() => setMobileMenuVisible(false)}>CAREER LIBRARY</Link>
        </li>
        <li className="dropdown">
          <span className="dropdown-toggle" onClick={toggleDropdown}>
            VIEW RESULT
            <span className="dropdown-icon">▼</span>
          </span>
          {isDropdownVisible && (
            <ul className="dropdown-menu">
              <li>
                <a
                  href="https://script.google.com/macros/s/AKfycbx7ukQgqNo03DhSqG50M6GSwxml0-2EPv6qOAsTI3YJVzGLegZ3VhACSYsSrpzNjY6WGQ/exec"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuVisible(false)}
                >
                  JEE Main Result
                </a>
              </li>
              <li>
                <a
                  href="https://script.google.com/macros/s/AKfycbx65WSAKBgYbZgP5tBybMAkjQXcNBPDK-Bnm28FYBInkiktskn86QsEAPiYhwvLO_2KkQ/exec"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuVisible(false)}
                >
                  NEET Result
                </a>
              </li>
            </ul>
          )}
        </li>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/thedotrewari/"
            className="fab fa-facebook-f"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuVisible(false)}
          ></a>
          <a
            href="https://www.instagram.com/thedotinstitute"
            className="fab fa-instagram"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuVisible(false)}
          ></a>
          <a
            href="http://linkedin.com/in/the-dot-754739257"
            className="fab fa-linkedin-in"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuVisible(false)}
          ></a>
          <a
            href="https://www.youtube.com/@thedotrewari"
            className="fab fa-youtube"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuVisible(false)}
          ></a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
