

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../styles/Showcase.css"; // Import the CSS file

// Import your images
import img1 from "../../assets/agri.avif";
import img2 from "../../assets/agri.avif";

const slides = [
  {
    image: img1,
    title: "FACULTY SECTION",
    description: "Best Faculty in Rewari",
  },
  {
    image: img2,
    title: "EXTRAORDINARY RESULT",
    description: "Best Result in Rewari",
  },
];

const Showcase = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200,
  };

  return (
    <div className="showcase-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="show-slide">
            <div className="show-card">
              <img src={slide.image} alt="Training Program" className="show-card-image" />
              <div className="show-card-content">
                <h1 className="show-title">{slide.title}</h1>
                <p className="show-subtitle">{slide.description}</p>
                <button className="show-read-more">Explore Now</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Showcase;
