import React from "react";
import "../../../styles/Courses.css";
import { Link } from "react-router-dom";

const coursesData = [
    {
        title: "Our Alumni",
        description: "Success stories from our accomplished students.",
        image: "../src/assets/alumini.JPG" // Replace with actual image path
    },
    {
        title: "DTSE Program",
        description: "Stay updated with our latest insights.",
        image: "../src/assets/Dtse.png" // Replace with actual image path
    },
    {
        title: "Latest Blog Posts",
        description: "Explore comprehensive coaching programs available.",
        image: "../src/assets/sbuild.JPG" // Replace with actual image path
    }
];

const Courses = () => {
    return (
        <section className="courses-section">
            <div className="container">
                <div className="containertwo">
                    <p className="section-description-cr">
                        Join our expert coaching for IIT-JEE and NEET success.
                    </p>
                    <Link to="/contact">
                        <button className="enroll-header-button">ENROLL</button>
                    </Link>
                </div>

                <div className="courses-list">
                    {coursesData.map((course, index) => (
                        <div key={index} className="course-item">
                            <img src={course.image} alt={course.title} />
                            <div className="course-item-content">
                                <h3>{course.title}</h3>
                                <p>{course.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;