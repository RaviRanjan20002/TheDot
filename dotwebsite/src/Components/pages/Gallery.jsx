import React, { useState } from "react";
import "../../../styles/Gallery.css";
import img1 from "../../assets/image-1.jpg";
import img2 from "../../assets/image-2.jpg";
import img3 from "../../assets/image-3.jpg";
import img4 from "../../assets/image-4.jpg";
import img5 from "../../assets/image-5.jpg";
import img6 from "../../assets/image-6.jpg";  
import img7 from "../../assets/image-7.jpg";
import img8 from "../../assets/image-8.jpg";
import img9 from "../../assets/image-9.jpg";
import img10 from "../../assets/image-10.jpg";
import img11 from "../../assets/image-11.jpg";
import img12 from "../../assets/image-12.jpg";
import img13 from "../../assets/image-13.jpg";
import img14 from "../../assets/image-14.jpg";
import img15 from "../../assets/image-15.jpg";
import img16 from "../../assets/image-16.jpg";
import img17 from "../../assets/image-17.jpg";
import img18 from "../../assets/image-18.jpg";
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: img1, alt: "Gallery Image 1", description: "This image captures a significant moment from our annual awards ceremony where students were recognized for their outstanding academic and extracurricular achievements." },
    { id: 2, src: img2, alt: "Gallery Image 2", description: "A glimpse into our interactive workshop where students actively engaged in team-based learning, fostering collaboration and innovative problem-solving skills." },
    { id: 3, src: img3, alt: "Gallery Image 3", description: "A powerful lecture delivered by our guest speaker, who shared valuable insights and experiences that left a lasting impact on our students, inspiring them to strive for excellence." },
    { id: 4, src: img4, alt: "Gallery Image 4", description: "Students are seen here enthusiastically participating in a hands-on science experiment, discovering new concepts and enhancing their practical understanding of theoretical knowledge." },
    { id: 5, src: img5, alt: "Gallery Image 5", description: "This photo showcases the vibrant atmosphere of our annual cultural festival, where students displayed their diverse talents in music, dance, and art, celebrating creativity and community spirit." },
    { id: 6, src: img6, alt: "Gallery Image 6", description: "Captured here is a heartwarming moment from our community outreach program, where students worked together to bring joy and learning to underprivileged children, embodying the spirit of compassion and service." },
    { id: 7, src: img7, alt: "Gallery Image 7", description: "An exhilarating sports event where students showcased their athletic skills and team spirit, fostering a sense of healthy competition and camaraderie." },
    { id: 8, src: img8, alt: "Gallery Image 8", description: "A snapshot of our innovative technology fair, where students presented their cutting-edge projects, demonstrating creativity and technical prowess." },
    { id: 9, src: img9, alt: "Gallery Image 9", description: "A serene moment captured during our nature retreat, where students bonded over outdoor activities, appreciating the beauty of the natural world." },
    { id: 10, src: img10, alt: "Gallery Image 10", description: "Students engaged in a lively debate competition, showcasing their critical thinking and public speaking skills on various thought-provoking topics." },
    { id: 11, src: img11, alt: "Gallery Image 11", description: "A memorable scene from our art exhibition, where students displayed their creative works, reflecting their unique perspectives and artistic talents." },
    { id: 12, src: img12, alt: "Gallery Image 12", description: "Our annual science fair highlighted here, where students showcased their innovative projects and experiments, fostering a spirit of inquiry and discovery." },
    { id: 13, src: img13, alt: "Gallery Image 13", description: "An engaging coding hackathon event, where students collaborated to develop software solutions, demonstrating teamwork and technical expertise." },
    { id: 14, src: img14, alt: "Gallery Image 14", description: "This image captures the excitement of our literary festival, where students participated in various events such as poetry recitation, storytelling, and book discussions." },
    { id: 15, src: img15, alt: "Gallery Image 15", description: "A snapshot from our leadership training camp, where students honed their leadership and team-building skills through various interactive activities." },
    { id: 16, src: img16, alt: "Gallery Image 16", description: "Students participating in an international cultural exchange program, embracing diversity and gaining a broader global perspective." },
    { id: 16, src: img17, alt: "Gallery Image 17", description: "Students participating in an international cultural exchange program, embracing diversity and gaining a broader global perspective." },
    { id: 18, src: img18, alt: "Gallery Image 18", description: "An inspiring scene from our mentorship program, where senior students guided and supported their juniors, fostering a sense of community and mentorship." }
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

