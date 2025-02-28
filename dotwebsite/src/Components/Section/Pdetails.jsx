import React from "react";
import { useParams, Link } from "react-router-dom";
import "../../../styles/Pdetails.css"; // Import the CSS file

const programDetails = {
    1: {
        schedule: "Monday - Friday: 4 PM to 7 PM | Saturday: 10 AM to 2 PM",
        parentTestimonials: [
            { name: "Mr. Sharma", feedback: "This program helped my son improve tremendously in JEE preparation." },
            { name: "Mrs. Kapoor", feedback: "Highly structured course with great mentorship and guidance." },
        ],
        studentTestimonials: [
            { name: "Aarav Gupta", feedback: "Amazing faculty and doubt support, improved my ranks drastically." },
            { name: "Sneha Verma", feedback: "The crash course gave me a great confidence boost before the exam." },
        ],
        youtubePodcast: "https://www.youtube.com/watch?v=UcqFdpc9q9Q&ab_channel=TheDOT", // Replace with actual video link
        result: "Last year, 150+ students secured 95+ percentile in JEE!",
    },
    2: {
        schedule: "Tuesday - Friday: 3 PM to 6 PM | Sunday: 9 AM to 12 PM",
        parentTestimonials: [
            { name: "Mr. Mehta", feedback: "Best course for NEET aspirants. Well-organized and focused approach." },
            { name: "Mrs. Rao", feedback: "Great faculty and structured materials helped my daughter a lot." },
        ],
        studentTestimonials: [
            { name: "Rohan Joshi", feedback: "The test series and mock exams were super helpful for my NEET prep." },
            { name: "Neha Arora", feedback: "Loved the interactive doubt-solving sessions and mentorship." },
        ],
        youtubePodcast: "https://youtu.be/UcqFdpc9q9Q?si=iZtw3C2eMwDneNHu", // Replace with actual video link
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
            <h2 className="details-title">Program Details</h2>

            {/* Schedule Section */}
            <div className="details-section">
                <h3>📅 Schedule</h3>
                <p>{details.schedule}</p>
            </div>

            {/* Parents' Testimonials */}
            <div className="details-section">
                <h3>👨‍👩‍👧 Parents' Testimonials</h3>
                {details.parentTestimonials.map((parent, index) => (
                    <div key={index} className="testimonial">
                        <strong>{parent.name}</strong>
                        <p>"{parent.feedback}"</p>
                    </div>
                ))}
            </div>

            {/* Students' Testimonials */}
            <div className="details-section">
                <h3>🎓 Students' Testimonials</h3>
                {details.studentTestimonials.map((student, index) => (
                    <div key={index} className="testimonial">
                        <strong>{student.name}</strong>
                        <p>"{student.feedback}"</p>
                    </div>
                ))}
            </div>

            {/* YouTube Podcast Section */}
            <div className="details-section">
                <h3>🎥 YouTube Podcast</h3>
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
