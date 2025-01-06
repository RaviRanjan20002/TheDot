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
        <div className="logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        {/* <h3>The Dot</h3> */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="dropdown">
            <span className="dropdown-toggle" onClick={toggleDropdown}>
              View Result <span className="dropdown-icon">▼</span>
            </span>
            {isDropdownVisible && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/jee-main-result">JEE Main Result</Link>
                </li>
                <li>
                  <Link to="/jee-advanced-result">JEE Advanced Result</Link>
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
