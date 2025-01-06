import React, { useState } from "react";
import "../../../styles/Gallery.css";
import img1 from "../../assets/image-1.jpg";
import img2 from "../../assets/image-2.jpg";
import img3 from "../../assets/image-3.jpg";
import img4 from "../../assets/image-4.jpg";
import img5 from "../../assets/image-5.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: img1, alt: "Gallery Image 1" },
    { id: 2, src: img2, alt: "Gallery Image 2" },
    { id: 3, src: img3, alt: "Gallery Image 3" },
    { id: 4, src: img4, alt: "Gallery Image 4" },
    { id: 5, src: img5, alt: "Gallery Image 5" },
    { id: 6, src: img3, alt: "Gallery Image 5" },
  ];

  return (
    <div className="gallery-section">
      <h2 className="gallery-title">Our Journey of Excellence</h2>
      <p className="gallery-subtitle">
      Take a look at the vibrant life of our institution, where every moment is a step towards excellence.
      </p>
      <div className="gallery-container">
        {images.map((image) => (
          <div
            className="gallery-item"
            key={image.id}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img src={selectedImage.src} alt={selectedImage.alt} className="modal-content" />
          <div className="caption">{selectedImage.alt}</div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
