import { useState, useEffect } from 'react'; 
import "../../../styles/BannerSlider.css";
const BannerSlider = () => {
  const images = [
    "../src/assets/bannerbg.png",
    "../src/assets/bannerbg6.png",
    // Add more image URLs as needed
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

