/* eslint-disable no-undef */
import { useState, useEffect } from 'react'; 
import "../../../styles/BannerSlider.css";

const BannerSlider = () => {
  const images = [
    { id: 1, src: require("../src/assets/bannerbg.png"), alt: "Banner Image 1" },
    { id: 2, src: require("../src/assets/bannerbg6.png"), alt: "Banner Image 2" },
  ];

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
          key={image.id}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image.src} alt={image.alt} />
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

