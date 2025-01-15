import { useState, useEffect } from 'react';  
import "../../../styles/BannerSlider.css";
import bannerbg from "../../assets/bannerbg.png";
import bannerbg2 from "../../assets/bannerbg2.jpg";
const BannerSlider = () => {
  const images = [bannerbg2, bannerbg];

  const interval = 4000; // Interval time in milliseconds

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image} alt={`Banner ${index + 1}`} />
        </div>
      ))}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;

