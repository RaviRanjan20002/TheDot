import React from "react";
import "../../../styles/Programs.css";

import image1 from "../../assets/prog2.jpg";

const programs = [
    {
      title: "12th JEE Program",
    //   instructor: "A comprehensive program covering JEE Main & Advanced syllabus, focusing on concept clarity, problem-solving, and mock tests.",
    //   rating: 4.8,
    //   reviews: 1200,
      imgSrc: image1, 
    },
    {
      title: "11th JEE Program",
    //   instructor: "Expert Faculty",
    //   rating: 4.7,
    //   reviews: 950,
      imgSrc: image1,
    },
    {
      title: "12th NEET Program",
    //   instructor: "Expert Faculty",
    //   rating: 4.9,
    //   reviews: 1500,
      imgSrc: image1,
    },
    {
      title: "11th NEET Program",
    //   instructor: "Expert Faculty",
    //   rating: 4.6,
    //   reviews: 870,
      imgSrc: image1,
    },
    {
      title: "JEE Dropper Program",
    //   instructor: "Expert Faculty",
    //   rating: 4.8,
    //   reviews: 1350,
      imgSrc: image1 ,
    },
    {
      title: "NEET Dropper",
    //   instructor: "Expert Faculty",
    //   rating: 4.7,
    //   reviews: 1250,
      imgSrc: image1,
    },
  ];
  
  const Programs = () => {
    return (
        <div className="course-section">
          <h2 className="section-title">Our Programs</h2>
          <div className="course-container">
            {programs.map((program, index) => (
              <div key={index} className="course-card">
                <img src={program.imgSrc} alt={program.title} className="course-image" />
                <div className="course-details">
                  <h3 className="course-title">{program.title}</h3>
                  
                  <div className="price-section">
                    <span className="current-price">{program.price}</span>
                    <span className="original-price">{program.originalPrice}</span>
                  </div>
                  <button className="enroll-btn">Enroll Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

  export default Programs;
















  