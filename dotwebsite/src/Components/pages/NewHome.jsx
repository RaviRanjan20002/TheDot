import React from "react";
import "../../../styles/new.css";

const NewHome = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">
          <span className="edtech">EdTech</span><span className="kids">Kids.</span>
        </div>
        <ul className="nav-links">
          <li>Services</li>
          <li>Courses</li>
          <li>Learning</li>
          <li>Teachers</li>
          <li>Parents</li>
        </ul>
        <div className="nav-buttons">
          <button className="login">Login</button>
          <button className="get-started">Get Started</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Learn anything, anytime, anywhere.</h1>
          <p>Learn new skills from the comfort of your home or anywhere anytime.</p>
          <div className="buttons">
            <button className="start-trial">Start free trial</button>
            <button className="watch-video">▶ Watch the video</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/400" alt="Child" className="child-image" />
          <div className="badge">1000+ Courses</div>
        </div>
      </section>
    </div>
  );
};

export default NewHome;
