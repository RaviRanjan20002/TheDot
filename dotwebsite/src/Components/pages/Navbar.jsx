import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../../styles/Navbar.css";
import logo from "../../assets/logo.jpg";

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
        <h3 className="DotName">The Dot</h3>
      </div>

      <button className="menu-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>

      <ul className={`nav-links ${isMobileMenuVisible ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMobileMenu}>HOME</Link>
        </li>
        <li>
          <Link to="/blogs" onClick={closeMobileMenu}>BLOGS</Link>
        </li>
        <li>
          <Link to="/gallery" onClick={closeMobileMenu}>GALLERY</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMobileMenu}>CONTACT</Link>
        </li>
        <li>
          <Link to="/admission" onClick={closeMobileMenu}>Admission</Link>
        </li>
        <li className="dropdown">
          <span className="dropdown-toggle" onClick={toggleDropdown}>
            VIEW RESULT
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
                  href="https://script.google.com/macros/s/AKfycbyb7MreEsHHZwDRbJbQSftB1aJ9fKfX0KlpSD-CBdyIeJAqjq6b3xgrKjUu3KvZ9tHtPg/exec"
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
                  href="https://script.google.com/macros/s/AKfycbxCMkxiK7oOh2zPgp6m3EDK0sZbT5_8n-b7_gOWqq50gNSyQdjmEy42mBIZhWK2FZkEeA/exec"
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
          <a
            href="https://www.facebook.com/thedotrewari/"
            className="fab fa-facebook-f"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          ></a>
          
          <a
            href="https://www.instagram.com/thedot_iit/"
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
          ></a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
