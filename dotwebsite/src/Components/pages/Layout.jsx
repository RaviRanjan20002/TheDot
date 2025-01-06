import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "../../../styles/Navbar.css"; 
import logo from "../../assets/logo.jpg"; 

const Layout = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <nav className="navbar">
      <div class="logo-container">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h3 className="DotName">The Dot</h3>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/blogs">BLOGS</Link>
          </li>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="dropdown">
          <span className="dropdown-toggle" onClick={toggleDropdown}>
              VIEW RESULT <span className="dropdown-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  style={{ marginLeft: '5px' }}
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
                <a href="https://script.google.com/macros/s/AKfycbyb7MreEsHHZwDRbJbQSftB1aJ9fKfX0KlpSD-CBdyIeJAqjq6b3xgrKjUu3KvZ9tHtPg/exec" class="no-zoom" target="_blank" rel="noopener noreferrer">
              JEE Main Result
              </a>
                </li>
                <li>
                <a href="https://script.google.com/macros/s/AKfycbyb7MreEsHHZwDRbJbQSftB1aJ9fKfX0KlpSD-CBdyIeJAqjq6b3xgrKjUu3KvZ9tHtPg/exec" class="no-zoom" target="_blank" rel="noopener noreferrer">
                    JEE Advance Result
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="social-icons">
          <a href="https://www.facebook.com/thedotrewari/" className="fab fa-facebook-f" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://www.facebook.com/thedotrewari/" className="fab fa-twitter" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://www.facebook.com/thedotrewari/" className="fab fa-instagram" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://www.facebook.com/thedotrewari/" className="fab fa-linkedin-in" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://www.facebook.com/thedotrewari/" className="fab fa-youtube" target="_blank" rel="noopener noreferrer"></a>

        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
