
import "../../../styles/Courses.css";
import { Link } from "react-router-dom";
import aluminiImg from "../../assets/alumini.jpg";
import dtseImg from "../../assets/dtseexam.png";
import sbuildImg from "../../assets/sbuild.jpg";

const coursesData = [
  {
    title: "Our Alumni",
    description: "Success stories from our accomplished students.",
    image: aluminiImg,
  },
  {
    title: "DTSE Program",
    description: "Stay updated with our latest insights.",
    image: dtseImg,
  },
  {
    title: "Latest Blog Posts",
    description: "Explore comprehensive coaching programs available.",
    image: sbuildImg,
  },
];

const Courses = () => {
  return (
    <section className="courses-section">
      <div className="container">
        <div className="crash-course-container-main">
          <Link
            to="/CrashCourse"
            className="crash-course-box-main"
          >
            <h2 className="course-title-main">Crash Course for JEE Mains</h2>
            <p className="course-subtitlemain">
              Limited Seats Available. Enroll Now!!
            </p>
          </Link>
        </div>
        <div className="containertwo">
          <p className="section-description-cr">
            Join our expert coaching for IIT-JEE and NEET success.
          </p>
          <Link to="/contact">
            <button className="enroll-header-button">ENROLL</button>
          </Link>
        </div>

        <div className="courses-list">
          {coursesData.map((course, index) => (
            <div key={index} className="course-item">
              <img src={course.image} alt={course.title} />
              <div className="course-item-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

