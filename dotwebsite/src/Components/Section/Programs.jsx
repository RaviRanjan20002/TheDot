import React from "react";
import "../../../styles/Programs.css";

import image1 from "../../assets/1.jpg";

const programs = [
    {
      title: "12th JEE Program",
      instructor: "Expert Faculty",
      rating: 4.8,
      reviews: 1200,
      imgSrc: image1, 
    },
    {
      title: "11th JEE Program",
      instructor: "Expert Faculty",
      rating: 4.7,
      reviews: 950,
      imgSrc: "https://via.placeholder.com/300x200",
    },
    {
      title: "12th NEET Program",
      instructor: "Expert Faculty",
      rating: 4.9,
      reviews: 1500,
      imgSrc: "https://via.placeholder.com/300x200",
    },
    {
      title: "11th NEET Program",
      instructor: "Expert Faculty",
      rating: 4.6,
      reviews: 870,
      imgSrc: "https://via.placeholder.com/300x200",
    },
    {
      title: "JEE Dropper Program",
      instructor: "Expert Faculty",
      rating: 4.8,
      reviews: 1350,
      imgSrc: "https://via.placeholder.com/300x200",
    },
    {
      title: "NEET Dropper Program",
      instructor: "Expert Faculty",
      rating: 4.7,
      reviews: 1250,
      imgSrc: "https://via.placeholder.com/300x200",
    },
  ];
  
  const Programs = () => {
    return (
      <div className="programs-container">
        <h2>OUR PROGRAMS</h2>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div className="program-card" key={index}>
              <img src={program.imgSrc} alt={program.title} />
              <h3>{program.title}</h3>
              <p>{program.instructor}</p>
              <div className="rating">⭐ {program.rating} ({program.reviews})</div>
              <div className="price">
                <span className="discount-price">{program.price}</span>
                <span className="original-price">{program.originalPrice}</span>
              </div>
              <div className="labels">
                <span className="premium">Premium</span>
                <span className="bestseller">Bestseller</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Programs;