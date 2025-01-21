import React from 'react';
import '../../../styles/DotGuide.css'; // Ensure you have a corresponding CSS file for styling

const DotGuide = () => {
  return (
    <div className="allen-container">
      {/* Left Section: Stacked Images */}
      <div className="allen-content">
        <div className="allen-images">
          <div className="image-stack">
            {/* Background Image */}
            <img
              src="../../assets/guidelines.png"
              alt="Background Students"
              className="image-background"
            />
            {/* Foreground Image */}
            <img
              src="../../assets/image-1.jpg"
              alt="Focused Student"
              className="image-foreground"
            />
          </div>
        </div>
      </div>

      {/* Right Section: Text Content */}
      <div className="allen-text-content">
        <h1>
          Your dream, our expertise
          <br />
          <span>Let ALLEN guide you!</span>
        </h1>
        <p>
          Experience our unique learning system that combines personalized support with unmatched infrastructure to deliver proven results.
        </p>
        <div className="allen-buttons">
          <button className="allen-button">Better faculty ▼</button>
          <button className="allen-button">Better care ▼</button>
          <button className="allen-button">Better outcomes ▼</button>
        </div>
      </div>
    </div>
  );
};

export default DotGuide;
