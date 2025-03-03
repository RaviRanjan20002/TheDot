import "../../../styles/ParentsTestimonial.css";
import parent from "../../assets/MrSharma.jpeg";

const testimonials = [
  {
    name: "Rajesh Verma",
    image: parent,
    text: "The DOT Institute has been a game-changer for my child. The expert faculty and structured approach to JEE and NEET preparation make it one of the best coaching institutes in India. Highly recommended!",
  },
  {
    name: "Sunita Sharma",
    image: parent,
    text: "I am extremely satisfied with The DOT Institute. The personalized attention and doubt-clearing sessions have significantly improved my child's confidence in competitive exams.",
  },
  {
    name: "Anil Gupta",
    image: parent,
    text: "The DOT Institute ensures a balance of conceptual learning and practice. Their AI-powered question paper generator helps students get real exam-like experience!",
  },
  {
    name: "Pooja Reddy",
    image: parent,
    text: "I have seen a remarkable improvement in my child's performance. The DOT Institute's innovative approach to learning and mock test analysis is outstanding.",
  },
  {
    name: "Vikram Patel",
    image: parent,
    text: "The DOT Institute provides a great learning environment with top-notch faculty and technology-driven preparation. It truly prepares students for success!",
  },
  {
    name: "Meena Iyer",
    image: parent,
    text: "What I love about The DOT Institute is their structured curriculum and real-time feedback for students. It ensures they stay ahead in their preparation!",
  },
];

const Testimonial = ({ name, image, text }) => {
  return (
    <div className="ptestimonial-box">
      <div className="ptestimonial-content">
        <img src={image} alt={name} className="testimonial-img" />
        <h3>{name}</h3>
        <p className="text">{text}</p>
        <div className="stars">★★★★★</div>
      </div>
    </div>
  );
};

const ParentsTestimonial = () => {
  return (
    <div className="ptcontainer">
    <h1> Parents' Testimonials about The DOT !</h1>
    <div className="ptestimonial-container">
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </div>
    </div>
  );
};

export default ParentsTestimonial;
