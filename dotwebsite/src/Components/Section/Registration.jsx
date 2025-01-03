// TestSeries.jsx
import React from "react";
import "../../../styles/Registration.css";

const TestSeries = () => {
    return (
        <section className="test-series-section">
            <div className="container">
                <h2 className="test-series-title">Registration for DTSE 2025</h2>
            
                <button
                    className="buy-now-button"
                    onClick={() => alert("Redirecting to the purchase page...")}
                >
                    Register now 
                </button>
            </div>
        </section>
    );
};

export default TestSeries;
