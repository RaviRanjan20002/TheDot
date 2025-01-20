import React from "react";
import "../../../styles/FeeBenefits.css";

const FeeBenefits = () => {
  return (
    <div className="fee-benefits-container">
      <h1 className="title">Discover our ongoing <br /> fee benefits & scholarships</h1>
      <div className="benefits-grid">
        <div className="benefit-card">
          <h2 className="benefit-title">Special fee benefit</h2>
          <p className="benefit-description">
            Secure your admission at a special fee slab by depositing the fee on or before
          </p>
          <p className="benefit-deadline">20-01-2025</p>
          <button className="apply-button">APPLY NOW</button>
        </div>
        <div className="benefit-card">
          <h2 className="benefit-title">Double fee advantage</h2>
          <p className="benefit-description">
            Get double advantage of special fee benefit and 
          </p>
          <p className="benefit-deadline">DSAT scholarship</p>
          <button className="apply-button">APPLY NOW</button>
        </div>
        <div className="benefit-card">
          <h2 className="benefit-title">DOT scholarship admission test</h2>
          <p className="benefit-description">
            Appear in DSAT & get 
          </p>
          <p className="benefit-deadline">up to 90% scholarship</p>
          <button className="apply-button">APPLY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default FeeBenefits;
