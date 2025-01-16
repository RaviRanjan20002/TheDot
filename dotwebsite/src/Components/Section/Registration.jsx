import "../../../styles/Registration.css";
import { useState } from "react";

const Registration = () => {
    const [message, setMessage] = useState("");

    const handleRegisterClick = () => {
        setMessage((prevMessage) =>
            prevMessage ? "" : "Registration is now closed!"
        );
    };

    return (
        <section className="test-series-section">
            <div className="container">
                <div className="container-R">
                    <h2 className="test-series-title">Registration for DTSE 2025</h2>

                    <button
                        className="buy-now-button"
                        onClick={handleRegisterClick}
                    >
                        Register now !
                    </button>

                    {message && <p className="registration-closed-message">{message}</p>}
                </div>
            </div>
        </section>
    );
};

export default Registration;
