import React from "react";
import { useParams, Link } from "react-router-dom";
import "../../../styles/Pdetails.css"; // Import the updated CSS
import mrsharma from "../../assets/MrSharma.jpeg";

const programDetails = {
    1: {
        schedule: "Monday - Friday: 4 PM to 7 PM | Saturday: 10 AM to 2 PM",
        parentTestimonials: [
            { name: "Mr. Sharma", feedback: "This program helped my son improve tremendously in JEE preparation.", image: mrsharma },
            { name: "Mrs. Kapoor", feedback: "Highly structured course with great mentorship and guidance.", image: mrsharma },
        ],
        studentTestimonials: [
            { name: "Aarav Gupta", feedback: "Amazing faculty and doubt support, improved my ranks drastically.", image: mrsharma},
            { name: "Sneha Verma", feedback: "The crash course gave me a great confidence boost before the exam.", image: mrsharma },
        ],
        youtubePodcast: "https://www.youtube.com/embed/UcqFdpc9q9Q",
        result: "Last year, 15+ students secured 95+ percentile in JEE!",
    },
    2: {
        schedule: "Tuesday - Friday: 3 PM to 6 PM | Sunday: 9 AM to 12 PM",
        parentTestimonials: [
            { name: "Mr. Mehta", feedback: "Best course for NEET aspirants. Well-organized and focused approach.", image: "/images/parent3.jpg" },
            { name: "Mrs. Rao", feedback: "Great faculty and structured materials helped my daughter a lot.", image: "/images/parent4.jpg" },
        ],
        studentTestimonials: [
            { name: "Rohan Joshi", feedback: "The test series and mock exams were super helpful for my NEET prep.", image: "/images/student3.jpg" },
            { name: "Neha Arora", feedback: "Loved the interactive doubt-solving sessions and mentorship.", image: "/images/student4.jpg" },
        ],
        youtubePodcast: "https://www.youtube.com/embed/UcqFdpc9q9Q",
        result: "Last year, 200+ students cracked NEET with excellent scores!",
    },
};

const Pdetails = () => {
    const { id } = useParams();
    const details = programDetails[id];

    if (!details) {
        return <h2 className="not-found">Program Details Not Available</h2>;
    }

    return (
        <div className="program-details">
            <h2 className="details-title">📚 Program Details</h2>

            {/* Schedule Section */}
            <div className="details-section schedule-section">
                <h3>📅 Schedule</h3>
                <div className="schedule-card">
                    <p>{details.schedule}</p>
                </div>
            </div>

            {/* Parents' Testimonials */}
            <div className="details-section">
                <h3>👨‍👩‍👧 Parents' Testimonials</h3>
                <div className="testimonials-grid">
                    {details.parentTestimonials.map((parent, index) => (
                        <div key={index} className="testimonial-card">
                            <img src={parent.image} alt={parent.name} className="testimonial-image2" />
                            <strong>{parent.name}</strong>
                            <p>"{parent.feedback}"</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Students' Testimonials */}
            <div className="details-section">
                <h3>🎓 Students' Testimonials</h3>
                <div className="testimonials-grid">
                    {details.studentTestimonials.map((student, index) => (
                        <div key={index} className="testimonial-card">
                            <img src={student.image} alt={student.name} className="testimonial-image2" />
                            <strong>{student.name}</strong>
                            <p>"{student.feedback}"</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* YouTube Podcast Section */}
            <div className="details-section">
                <h3>📺 YouTube Podcast</h3>
                <iframe
                    className="youtube-video"
                    src={details.youtubePodcast}
                    title="YouTube Podcast"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Result Section */}
            <div className="details-section result-section">
                <h3>🏆 Results</h3>
                <p>{details.result}</p>
            </div>

            <Link to="/" className="back-button">← Back to Programs</Link>
        </div>
    );
};

export default Pdetails;
