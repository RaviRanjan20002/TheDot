// TestSeries.jsx
import React from "react";
import "../../../styles/Registration.css";

const TestSeries = () => {
    return (
        <section className="test-series-section">
            <div className="container">
                <div className="containertwo">
                <h2 className="test-series-title">Registration for DTSE 2025</h2>
            
            <button
                    className="buy-now-button"
                    onClick={() => alert("Redirecting to the purchase page...")}
                >
                    Register now 
            </button>
                </div>
               
            </div>
        </section>
    );
};

export default TestSeries;
