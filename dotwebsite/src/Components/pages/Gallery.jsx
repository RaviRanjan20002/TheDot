import React from "react";
import "../../../styles/Gallery.css";

import img1 from "../../assets/image-1.jpg";
import img2 from "../../assets/image-2.jpg";
import img3 from "../../assets/image-3.jpg";
import img4 from "../../assets/image-4.jpg";
import img5 from "../../assets/image-5.jpg";

const Gallery = () => {
  const images = [
    { id: 1, src: img1, alt: "Gallery Image 1" },
    { id: 2, src: img2, alt: "Gallery Image 2" },
    { id: 3, src: img3, alt: "Gallery Image 3" },
    { id: 4, src: img4, alt: "Gallery Image 4" },
    { id: 5, src: img5, alt: "Gallery Image 5" },
  ];

  return (
    <div className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>
      <p className="gallery-subtitle">
        Explore our vibrant moments of learning and achievement.
      </p>
      <div className="gallery-container">
        {images.map((image) => (
          <div className="gallery-item" key={image.id}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
