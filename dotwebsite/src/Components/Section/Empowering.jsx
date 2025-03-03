import  { useState, useEffect } from "react";
import "../../../styles/Empowering.css";
import successImage from "../../assets/success.jpg"; // Replace with the actual path to your image

const Empowering = () => {
    const [successCount, setSuccessCount] = useState(0);
    const [iitianCount, setIITianCount] = useState(0);

    useEffect(() => {
        const duration = 8000; // 2 seconds
        const updateInterval = 50; // Update every 50ms

        let successTarget = 500;
        let iitianTarget = 50;

        let successStep = Math.ceil(successTarget / (duration / updateInterval));
        let iitianStep = Math.ceil(iitianTarget / (duration / updateInterval));

        const successInterval = setInterval(() => {
            setSuccessCount((prev) => {
                if (prev + successStep >= successTarget) {
                    clearInterval(successInterval);
                    return successTarget;
                }
                return prev + successStep;
            });
        }, updateInterval);

        const iitianInterval = setInterval(() => {
            setIITianCount((prev) => {
                if (prev + iitianStep >= iitianTarget) {
                    clearInterval(iitianInterval);
                    return iitianTarget;
                }
                return prev + iitianStep;
            });
        }, updateInterval);

        return () => {
            clearInterval(successInterval);
            clearInterval(iitianInterval);
        };
    }, []);

    return (
        <section className="empowering-section">
            <div className="container-Em">
                <div className="content-Em">
                    <h2 className="section-title-em">Empowering Future Leaders in IIT-JEE & NEET</h2>
                    <p className="section-description-em">
                        At The Dot, we specialize in IIT-JEE & NEET coaching, guided by experienced IITians ensuring students achieve his goals.
                    </p>
                    <div className="statistics">
                        <div className="stat-item">
                            <h3>{successCount}+</h3>
                            <p>Success Stories</p>
                        </div>
                        <div className="stat-item">
                            <h3>{iitianCount}+</h3>
                            <p>Experienced IITians</p>
                        </div>
                    </div>
                </div>
                <div className="image-container-Em">
                    <img src={successImage} alt="Success Stories" />
                </div>
            </div>
        </section>
    );
};

export default Empowering;
