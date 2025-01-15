import React from "react";
import "../../../styles/Blog.css";

import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.avif";
import blog4 from "../../assets/blog4.avif";
import blog5 from "../../assets/blog5.avif";
import blog6 from "../../assets/blog6.avif";
import blog7 from "../../assets/blog7.avif";
import blog8 from "../../assets/blog8.avif";
import blog9 from "../../assets/blog9.avif";
import blog10 from "../../assets/blog10.avif";
import blog11 from "../../assets/blog11.avif";
import blog12 from "../../assets/blog12.avif";
import blog13 from "../../assets/blog13.avif";

const blogPosts = [
  {
    title: "How to Prepare for IIT-JEE Effectively",
    description: "Tips and strategies to help you ace the IIT-JEE exam.",
    image: blog2, // Use imported image
    link: "https://www.google.com/search?q=How+to+Prepare+for+IIT-JEE+Effectively"
  },
  {
    title: "Top NEET Preparation Strategies",
    description: "Best practices for cracking the NEET exam with ease.",
    image: blog3, // Use imported image
    link: "https://www.google.com/search?q=Top+NEET+Preparation+Strategies"
  },
  {
    title: "Choosing the Right Coaching Program",
    description: "How to select the best coaching program for your exams.",
    image: blog4, // Use imported image
    link: "https://www.google.com/search?q=Choosing+the+Right+Coaching+Program"
  },
  {
    title: "The Importance of Time Management for Exam Success",
    description: "Learn how to manage your time effectively for better results.",
    image: blog5, // Use imported image
    link: "https://www.google.com/search?q=The+Importance+of+Time+Management+for+Exam+Success"
  },
  {
    title: "How to Stay Motivated During Your Exam Prep",
    description: "Stay focused and motivated through the long journey of exam preparation.",
    image: blog6, // Use imported image
    link: "https://www.google.com/search?q=How+to+Stay+Motivated+During+Your+Exam+Prep"
  },
  {
    title: "Mastering Mathematics for IIT-JEE",
    description: "Effective tips and techniques to excel in Mathematics for IIT-JEE.",
    image: blog7, // Use imported image
    link: "https://www.google.com/search?q=Mastering+Mathematics+for+IIT-JEE"
  },
  {
    title: "The Role of Practice in Exam Preparation",
    description: "Why consistent practice is key to cracking competitive exams.",
    image: blog8, // Use imported image
    link: "https://www.google.com/search?q=The+Role+of+Practice+in+Exam+Preparation"
  },
  {
    title: "Key Factors in Choosing the Right Study Material",
    description: "How to choose the best study resources for your exam preparation.",
    image: blog9, // Use imported image
    link: "https://www.google.com/search?q=Key+Factors+in+Choosing+the+Right+Study+Material"
  },
  {
    title: "Overcoming Exam Anxiety and Stress",
    description: "Tips on how to stay calm and focused before and during exams.",
    image: blog10, // Use imported image
    link: "https://www.google.com/search?q=Overcoming+Exam+Anxiety+and+Stress"
  },
  {
    title: "How to Create a Study Schedule for Success",
    description: "Effective ways to plan your study time for maximum productivity.",
    image: blog11, // Use imported image
    link: "https://www.google.com/search?q=How+to+Create+a+Study+Schedule+for+Success"
  },
  {
    title: "Understanding NEET Syllabus and Exam Pattern",
    description: "A detailed guide on the NEET syllabus and how to tackle it.",
    image: blog12, // Use imported image
    link: "https://www.google.com/search?q=Understanding+NEET+Syllabus+and+Exam+Pattern"
  },
  {
    title: "Top Mistakes to Avoid in IIT-JEE Preparation",
    description: "Common mistakes students make during preparation and how to avoid them.",
    image: blog13, // Use imported image
    link: "https://www.google.com/search?q=Top+Mistakes+to+Avoid+in+IIT-JEE+Preparation"
  }
];

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="container-B">
        <h2 className="section-title-B">Our Blog</h2>
        <p className="section-description-B">Discover the latest tips and insights in education</p>
        <div className="blog-list-B">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-post">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-description">{post.description}</p>
                <a href={post.link} className="blog-button" target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

