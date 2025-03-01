import "../../../styles/ParentsTestimonial.css";
import parent from "../../assets/parent.jpg";

const testimonials = [
  {
    name: "Michael Smith",
    image: parent, // Replace with actual image URL
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Emily Johnson",
    image: parent,
    text: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    name: "John Doe",
    image: parent,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Sarah Williams",
    image: parent,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "David Brown",
    image: parent,
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "David Brown",
    image: parent,
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Testimonial = ({ name, role, image, text }) => {
  return (
    <div className="testimonial-box">
      <div className="testimonial-content">
        <img src={image} alt={name} className="testimonial-img" />
        <h3>{name}</h3>
        <p className="role">{role}</p>
        <p className="text">{text}</p>
        <div className="stars">★★★★★</div>
      </div>
    </div>
  );
};

const ParentsTestimonial = () => {
  return (
    <div className="testimonial-container">
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </div>
  );
};

export default ParentsTestimonial;
