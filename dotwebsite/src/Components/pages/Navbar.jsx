import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../../styles/Navbar.css";
import logo from "../../assets/dott.png";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const mobileMenuRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownVisible((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuVisible((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuVisible(false);
  const closeDropdown = () => setDropdownVisible(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close mobile menu if clicked outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuVisible(false);
      }
      // Close dropdown if clicked outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={mobileMenuRef}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <button className="menu-toggle" onClick={toggleMobileMenu}>☰</button>
      
      <ul className={`nav-links ${isMobileMenuVisible ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
        <li><Link to="/blogs" onClick={closeMobileMenu}>Blogs</Link></li>
        <li><Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link></li>
        <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
        <li><Link to="/career-streams" onClick={closeMobileMenu}>Career Library</Link></li>

        {/* Dropdown Menu */}
        <li className="dropdown" ref={dropdownRef}>
          <span className="dropdown-toggle" onClick={toggleDropdown}>View Result ▼</span>
          {isDropdownVisible && (
            <ul className="dropdown-menu">
              <li>
                <a href="https://script.google.com/..." target="_blank" rel="noopener noreferrer" onClick={closeDropdown}>
                  JEE Main Result
                </a>
              </li>
              <li>
                <a href="https://script.google.com/..." target="_blank" rel="noopener noreferrer" onClick={closeDropdown}>
                  NEET Result
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://support.thedotinstitute.in/" target="_blank" rel="noopener noreferrer">
            <button className="start-trial">Get Scholarship</button>
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
