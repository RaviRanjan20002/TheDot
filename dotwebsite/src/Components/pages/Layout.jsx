import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "../../../styles/Navbar.css"; // Adjust the path based on your structure
import logo from "../../assets/logo.jpg"; // Adjust the path based on your structure

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
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
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
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
          <a href="#" className="fab fa-linkedin-in"></a>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
