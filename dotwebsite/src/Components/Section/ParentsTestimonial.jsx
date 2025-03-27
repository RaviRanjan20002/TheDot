// import "../../../styles/ParentsTestimonial.css";
// import parent from "../../assets/MrSharma.jpeg";

// const testimonials = [
//   {
//     name: "Rajesh Verma",
//     image: parent,
//     text: "The DOT Institute has been a game-changer for my child. The expert faculty and structured approach to JEE and NEET preparation make it one of the best coaching institutes in India. Highly recommended!",
//   },
//   {
//     name: "Sunita Sharma",
//     image: parent,
//     text: "I am extremely satisfied with The DOT Institute. The personalized attention and doubt-clearing sessions have significantly improved my child's confidence in competitive exams.",
//   },
//   {
//     name: "Anil Gupta",
//     image: parent,
//     text: "The DOT Institute ensures a balance of conceptual learning and practice. Their AI-powered question paper generator helps students get real exam-like experience!",
//   },
//   {
//     name: "Pooja Reddy",
//     image: parent,
//     text: "I have seen a remarkable improvement in my child's performance. The DOT Institute's innovative approach to learning and mock test analysis is outstanding.",
//   },
//   {
//     name: "Vikram Patel",
//     image: parent,
//     text: "The DOT Institute provides a great learning environment with top-notch faculty and technology-driven preparation. It truly prepares students for success!",
//   },
//   {
//     name: "Meena Iyer",
//     image: parent,
//     text: "What I love about The DOT Institute is their structured curriculum and real-time feedback for students. It ensures they stay ahead in their preparation!",
//   },
// ];

// const Testimonial = ({ name, image, text }) => {
//   return (
//     <div className="ptestimonial-box">
//       <div className="ptestimonial-content">
//         <img src={image} alt={name} className="testimonial-img" />
//         <h3>{name}</h3>
//         <p className="text">{text}</p>
//         <div className="stars">★★★★★</div>
//       </div>
//     </div>
//   );
// };

// const ParentsTestimonial = () => {
//   return (
//     <div className="ptcontainer">
//     <h1> Parents' Testimonials about The DOT !</h1>
//     <div className="ptestimonial-container">
//       {testimonials.map((testimonial, index) => (
//         <Testimonial key={index} {...testimonial} />
//       ))}
//     </div>
//     </div>
//   );
// };

// export default ParentsTestimonial;

// import { useRef } from "react";
// import "../../../styles/ParentsTestimonial.css";
// import video1 from "../../assets/vid1.mp4";
// import video2 from "../../assets/vid2.mp4";
// import video3 from "../../assets/video3.mp4";
// import video4 from "../../assets/video4.mp4";
// import video5 from "../../assets/video5.mp4";
// import video6 from "../../assets/video6.mp4";

// const ParentsTestimonial = () => {
//   const videos = [
//     { id: 1, src: video1 },
//     { id: 2, src: video2 },
//     { id: 3, src: video3 },
//     { id: 4, src: video4 },
//     { id: 5, src: video5 },
//     { id: 6, src: video6},
//   ];

//   const videoRefs = useRef([]);

//   const handleMouseEnter = (index) => {
//     if (videoRefs.current[index]) {
//       videoRefs.current[index].play();
//     }
//   };

//   const handleMouseLeave = (index) => {
//     if (videoRefs.current[index]) {
//       videoRefs.current[index].pause();
//       videoRefs.current[index].currentTime = 0;
//     }
//   };
//   return (
//     <div className="testimonial-section">
//       <h1 className="testimonial-heading">Parents' Testimonials</h1>
//       <div className="testimonials-container">
//         {videos.map((video, index) => (
//           <div
//             key={video.id}
//             className={`video-card ${index % 2 === 0 ? "up" : "down"}`} // Zig-zag effect
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={() => handleMouseLeave(index)}
//           >
//             <video
//               ref={(el) => (videoRefs.current[index] = el)}
//               src={video.src}
//               className="testimonial-video"
//               muted={false}
//               loop
//             ></video>
//             <div>{video.id}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ParentsTestimonial;


import { useRef } from "react";
import "../../../styles/ParentsTestimonial.css";
import video1 from "../../assets/vid1.mp4";
import video2 from "../../assets/vid2.mp4";
import video3 from "../../assets/vid3.mp4";
import video4 from "../../assets/vid4.mp4";
import video5 from "../../assets/vid5.mp4";
import video6 from "../../assets/vid6.mp4";

const ParentsTestimonial = () => {
  const videos = [
    { id: 1, src: video1, name: "Sapna Yadav " },
    { id: 2, src: video2, name: "Dayanand Pokhriwal" },
    { id: 3, src: video3, name: "Kiran" },
    { id: 4, src: video4, name: "Sachin Gupta" },
    { id: 5, src: video5, name: "Chandra Sekhar" },
    { id: 6, src: video6, name: "Arun kumar" },
  ];

  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  return (
    <div className="testimonial-section">
      <h1 className="testimonial-heading">Parent's Testimonials</h1>
      <div className="testimonials-container">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`video-card ${index % 2 === 0 ? "up" : "down"}`} // Zig-zag effect
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              className="testimonial-video"
              muted ={false}
              loop
            ></video>
            <div className="parent-name-box">
              <span className="parent-name">{video.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentsTestimonial;
