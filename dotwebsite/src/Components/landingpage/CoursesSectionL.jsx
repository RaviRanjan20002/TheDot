import React from "react";
import "../../../styles/CoursesSectionL.css";

const CoursesSection = () => {
  const courses = [
    {
      icon: "📘", // Replace with actual icons or images if needed
      title: "Boards | Foundation | Class 6 to 10",
      description:
        "Ace your school exams, boards, and olympiads with our foundation courses, crafted to develop scientific thinking, competitive spirit, and skills required for success.",
      button: "LEARN MORE",
    },
    {
      icon: "🎓", // Replace with actual icons or images if needed
      title: "IIT-JEE (Main + Advanced)",
      description:
        "Build a strong foundation for success in IIT-JEE with our proven teaching methodology guided by experts known for delivering exceptional results.",
      button: "LEARN MORE",
    },
    {
      icon: "🩺", // Replace with actual icons or images if needed
      title: "NEET (UG)",
      description:
        "Embark on your pre-medical preparation with our specialized courses, recognized for their impressive track record in achieving remarkable results each year.",
      button: "LEARN MORE",
    },
  ];

  return (
    <div className="courses-sectionL">
      <h1 className="courses-titleL">EXPLORE OUR ENHANCED COURSES</h1>
      <h2 className="courses-subtitleL">Tailored for your Success</h2>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-icon">{course.icon}</div>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <button className="course-button">{course.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
