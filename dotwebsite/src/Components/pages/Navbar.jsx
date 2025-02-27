import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../../styles/Navbar.css";
// import logo from "../../assets/logo.jpg";
// import logo from "../../assets/logo21.png";
import logo from "../../assets/dott.png";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
  };

  // Close the mobile menu if clicked outside
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
    <nav className="navbar" ref={mobileMenuRef}>
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        {/* <h3 className="DotName">The DOT</h3> */}
      </div>

      <button className="menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>

      <ul className={`nav-links ${isMobileMenuVisible ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMobileMenu}>Home</Link>
        </li>
        <li>
          <Link to="/blogs" onClick={closeMobileMenu}>Blogs</Link>
        </li>
        <li>
          <Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
        </li>
        <li>
          <Link to="/career-streams" onClick={closeMobileMenu}>Career Library</Link>
        </li>
        <li className="dropdown">
          <span className="dropdown-toggle" onClick={toggleDropdown}>
            View Result
            <span className="dropdown-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{ marginLeft: "5px" }}
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 5.5a.5.5 0 0 1 .866-.5l5.5 7a.5.5 0 0 1-.732.684L1.5 5.5zm12.866-.5a.5.5 0 1 1 .732.684l-5.5 7a.5.5 0 0 1-.866-.5l5.5-7z"
                />
              </svg>
            </span>
          </span>

          {isDropdownVisible && (
            <ul className="dropdown-menu">
              <li>
                <a
                  href="https://script.google.com/macros/s/AKfycbx7ukQgqNo03DhSqG50M6GSwxml0-2EPv6qOAsTI3YJVzGLegZ3VhACSYsSrpzNjY6WGQ/exec"
                  className="no-zoom"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
                  JEE Main Result
                </a>
              </li>
              <li>
                <a
                  href="https://script.google.com/macros/s/AKfycbx65WSAKBgYbZgP5tBybMAkjQXcNBPDK-Bnm28FYBInkiktskn86QsEAPiYhwvLO_2KkQ/exec"
                  className="no-zoom"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
                  NEET Result
                </a>
              </li>
            </ul>
          )}
        </li>
        <div className="social-icons">
          {/* <a
            href="https://www.facebook.com/thedotrewari/"
            className="fab fa-facebook-f"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          ></a>
          
          <a
            href="https://www.instagram.com/thedotinstitute"
            className="fab fa-instagram"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          ></a>
          <a
            href="http://linkedin.com/in/the-dot-754739257"
            className="fab fa-linkedin-in"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          ></a>
          <a
            href="https://www.youtube.com/@thedotrewari"
            className="fab fa-youtube"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          ></a> */
            <a
              href="https://support.thedotinstitute.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
             <button className="start-trial">Get Scholarship</button>
            </a>
          }
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
