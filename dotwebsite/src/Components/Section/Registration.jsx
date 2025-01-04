// TestSeries.jsx
import "../../../styles/Registration.css";

const Registration = () => {
    return (
        <section className="test-series-section">
            <div className="container">
                <div className="containertwo">
                <h2 className="test-series-title">Registration for DTSE 2025</h2>
            
            <button
                    className="buy-now-button"
                    onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfEXszccdaQxY5Xu-sSSisEQuPcHmMVxZp8J9SPEIFft3m8ag/viewform", "_blank")}
                >
                    Register now 
            </button>
                </div>
               
            </div>
        </section>
    );
};

export default Registration;
