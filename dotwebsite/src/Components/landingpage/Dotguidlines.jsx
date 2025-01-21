import React from 'react';
import '../../../styles/DotGuide.css'; // Ensure you have a corresponding CSS file for styling
import guidelineImages from "../../assets/guidelines.png";

const DotGuide = () => {
  return (
    <div className="dot-container">
      {/* Left Section: Stacked Images */}
      <div className="dot-content">
        <div className="dot-images">
          <div className="image-stack">
            {/* Foreground Image */}
            <img
              src={guidelineImages}
              alt="Focused Student"
              className="image-foreground"
            />
          </div>
        </div>
      </div>

      {/* Right Section: Text Content */}
      <div className="dot-text-content">
        <h1>
          Your dream, our expertise
          <br />
          <span>Let DOT guide you!</span>
        </h1>
        <p>
          Experience our unique learning system that combines personalized
          support with unmatched infrastructure to deliver proven results.
        </p>
        <div className="dot-buttons">
          <button className="dot-button">Better faculty</button>
          <button className="dot-button">Better care</button>
          <button className="dot-button">Better outcomes</button>
        </div>
      </div>
    </div>
  );
};

export default DotGuide;
