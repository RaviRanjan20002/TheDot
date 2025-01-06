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
    { id: 1, src: img1, alt: "Gallery Image 1", description: "This image captures a significant moment from our annual awards ceremony where students were recognized for their outstanding academic and extracurricular achievements." },
    { id: 2, src: img2, alt: "Gallery Image 2", description: "A glimpse into our interactive workshop where students actively engaged in team-based learning, fostering collaboration and innovative problem-solving skills." },
    { id: 3, src: img3, alt: "Gallery Image 3", description: "A powerful lecture delivered by our guest speaker, who shared valuable insights and experiences that left a lasting impact on our students, inspiring them to strive for excellence." },
    { id: 4, src: img4, alt: "Gallery Image 4", description: "Students are seen here enthusiastically participating in a hands-on science experiment, discovering new concepts and enhancing their practical understanding of theoretical knowledge." },
    { id: 5, src: img5, alt: "Gallery Image 5", description: "This photo showcases the vibrant atmosphere of our annual cultural festival, where students displayed their diverse talents in music, dance, and art, celebrating creativity and community spirit." },
    { id: 6, src: img3, alt: "Gallery Image 6", description: "Captured here is a heartwarming moment from our community outreach program, where students worked together to bring joy and learning to underprivileged children, embodying the spirit of compassion and service." },
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
          <div className="caption">{selectedImage.description}</div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

