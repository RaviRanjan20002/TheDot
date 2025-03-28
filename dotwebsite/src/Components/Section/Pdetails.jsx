import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../../styles/Pdetails.css"; // Import the CSS file

const programDetails = {
    1: { youtubePodcast: ["https://www.youtube.com/embed/UcqFdpc9q9Q", "https://www.youtube.com/embed/lUQ-kQzfAUQ?si=E3_BU97prXyJeyjJ", "https://www.youtube.com/embed/1-J288mq9oo?si=Agx4zwic0ZM2IYLl"], result: "Last year, 15+ students secured 95+ percentile in JEE!" },
    2: { youtubePodcast: ["https://www.youtube.com/embed/UcqFdpc9q9Q", "https://www.youtube.com/embed/lUQ-kQzfAUQ?si=E3_BU97prXyJeyjJ", "https://www.youtube.com/embed/1-J288mq9oo?si=Agx4zwic0ZM2IYLl"], result: "Last year, 30+ students cracked NEET with excellent scores!" },
    3: { youtubePodcast: ["https://www.youtube.com/embed/UcqFdpc9q9Q", "https://www.youtube.com/embed/lUQ-kQzfAUQ?si=E3_BU97prXyJeyjJ", "https://www.youtube.com/embed/1-J288mq9oo?si=Agx4zwic0ZM2IYLl"], result: "Last year, 30+ students cracked NEET with excellent scores!" },
    4: { youtubePodcast: ["https://www.youtube.com/embed/UcqFdpc9q9Q", "https://www.youtube.com/embed/lUQ-kQzfAUQ?si=E3_BU97prXyJeyjJ", "https://www.youtube.com/embed/1-J288mq9oo?si=Agx4zwic0ZM2IYLl"], result: "Last year, 15+ students secured 95+ percentile in JEE!" },
    5: { youtubePodcast: ["https://www.youtube.com/embed/UcqFdpc9q9Q", "https://www.youtube.com/embed/lUQ-kQzfAUQ?si=E3_BU97prXyJeyjJ", "https://www.youtube.com/embed/1-J288mq9oo?si=Agx4zwic0ZM2IYLl"], result: "Last year, 30+ students cracked NEET with excellent scores!" },
    6: { youtubePodcast: ["https://www.youtube.com/embed/UcqFdpc9q9Q", "https://www.youtube.com/embed/lUQ-kQzfAUQ?si=E3_BU97prXyJeyjJ", "https://www.youtube.com/embed/1-J288mq9oo?si=Agx4zwic0ZM2IYLl"], result: "Last year, 15+ students secured 95+ percentile in JEE!" },
    7: { youtubePodcast: ["https://www.youtube.com/embed/UcqFdpc9q9Q", "https://www.youtube.com/embed/lUQ-kQzfAUQ?si=E3_BU97prXyJeyjJ", "https://www.youtube.com/embed/1-J288mq9oo?si=Agx4zwic0ZM2IYLl"], result: "Last year, 15+ students secured 95+ percentile in JEE!" },
    8: { youtubePodcast: ["https://www.youtube.com/embed/UcqFdpc9q9Q", "https://www.youtube.com/embed/lUQ-kQzfAUQ?si=E3_BU97prXyJeyjJ", "https://www.youtube.com/embed/1-J288mq9oo?si=Agx4zwic0ZM2IYLl"], result: "Last year, 30+ students cracked NEET with excellent scores!" },
};

const Pdetails = () => {
    const { id } = useParams();
    const details = programDetails[id];
    const [index, setIndex] = useState(0);

    const prevIndex = () => setIndex(index === 0 ? 2 : index - 1);
    const nextIndex = () => setIndex(index === 2 ? 0 : index + 1);

    if (!details) {
        return <h2 className="not-found">Program Details Not Available</h2>;
    }

    return (
        <div className="program-details">
            {/* YouTube Podcast Section */}
            <div className="details-section">
                <h3>📺 YouTube Podcast</h3>
                <div className="video-container">
                    <button className="arrowbutton left-arrow" onClick={prevIndex}>&#11164;</button>
                    <iframe className="youtube-video" src={details.youtubePodcast[index]} title="YouTube Podcast" frameBorder="0" allowFullScreen></iframe>
                    <button className="arrowbutton right-arrow" onClick={nextIndex}>&#11166;</button>
                </div>
            </div>

            {/* 🏆 Result Section */}
            <div className="result-section">
                <h3>🏆 Results</h3>
                <p>{details.result}</p>
                <Link to="/result" className="view-result">View Full Results</Link>
            </div>

            {/* 🔙 Back to Programs */}
            <Link to="/" className="back-button">← Back to Programs</Link>
        </div>
    );
};

export default Pdetails;
