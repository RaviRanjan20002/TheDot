
// export default NewHome;
import React, { useState, useEffect } from "react";
import "../../../styles/new.css";

import homeimg2 from "../../assets/devansh.png";
import homeimg1 from "../../assets/Webh.png";
import homeimg3 from "../../assets/webh.png";

const heroData = [
  {
    id: 1,
    title: "Your Journey Of ",
    highlight: "IIT-JEE & NEET",
    text: "Starts Here",
    description: "Learn From The Best Faculty, Only Result Matters And We Deliver The Best.",
    image: homeimg1,
  },
  {
    id: 2,
    title: "Excel in ",
    highlight: "IIT-JEE & NEET",
    description: "Master concepts with top-tier educators and structured courses.",
    image: homeimg2,
  },
  {
    id: 3,
    title: "Achieve Your Dream ",
    highlight: "With Expert Guidance",
    description: "Get personalized mentorship and a strategic study plan.",
    image: homeimg3,
  },
];

const interval = 4000;

const NewHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-content">
          <h1>
            {heroData[currentIndex].title} <span className="herodesc">{heroData[currentIndex].highlight}</span> {heroData[currentIndex].text}
          </h1>
          <p>{heroData[currentIndex].description}</p>
          <div className="buttons">
            <button className="start-trial">Explore Now</button>
            <a
              href="https://youtu.be/UcqFdpc9q9Q?si=GDVl-nx8FseKrBo4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="watch-video">▶ Watch the video</button>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroData[currentIndex].image} alt="Hero" className="child-image" />
        </div>
        <div className="dots">
          {heroData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewHome;
