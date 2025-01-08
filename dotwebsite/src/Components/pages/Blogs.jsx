import React from "react";
import "../../../styles/Blog.css";

const blogPosts = [
  {
    title: "How to Prepare for IIT-JEE Effectively",
    description: "Tips and strategies to help you ace the IIT-JEE exam.",
    image: "../src/assets/blog2.png", // Replace with actual image path
    link: "https://www.google.com/search?q=How+to+Prepare+for+IIT-JEE+Effectively"
},
{
    title: "Top NEET Preparation Strategies",
    description: "Best practices for cracking the NEET exam with ease.",
    image: "../src/assets/blog3.avif", // Replace with actual image path
    link: "https://www.google.com/search?q=Top+NEET+Preparation+Strategies"
},
{
    title: "Choosing the Right Coaching Program",
    description: "How to select the best coaching program for your exams.",
    image: "../src/assets/blog4.avif", // Replace with actual image path
    link: "https://www.google.com/search?q=Choosing+the+Right+Coaching+Program"
},
{
    title: "The Importance of Time Management for Exam Success",
    description: "Learn how to manage your time effectively for better results.",
    image: "../src/assets/blog5.avif", // Replace with actual image path
    link: "https://www.google.com/search?q=The+Importance+of+Time+Management+for+Exam+Success"
},
{
    title: "How to Stay Motivated During Your Exam Prep",
    description: "Stay focused and motivated through the long journey of exam preparation.",
    image: "../src/assets/blog6.avif", // Replace with actual image path
    link: "https://www.google.com/search?q=How+to+Stay+Motivated+During+Your+Exam+Prep"
},
{
    title: "Mastering Mathematics for IIT-JEE",
    description: "Effective tips and techniques to excel in Mathematics for IIT-JEE.",
    image: "../src/assets/blog7.avif", // Replace with actual image path
    link: "https://www.google.com/search?q=Mastering+Mathematics+for+IIT-JEE"
},
{
    title: "The Role of Practice in Exam Preparation",
    description: "Why consistent practice is key to cracking competitive exams.",
    image: "../src/assets/blog8.avif", // Replace with actual image path
    link: "https://www.google.com/search?q=The+Role+of+Practice+in+Exam+Preparation"
},
{
    title: "Key Factors in Choosing the Right Study Material",
    description: "How to choose the best study resources for your exam preparation.",
    image: "../src/assets/blog9.avif", // Replace with actual image path
    link: "https://www.google.com/search?q=Key+Factors+in+Choosing+the+Right+Study+Material"
},
{
    title: "Overcoming Exam Anxiety and Stress",
    description: "Tips on how to stay calm and focused before and during exams.",
    image: "../src/assets/blog10.avif", // Replace with actual image path
    link: "https://www.google.com/search?q=Overcoming+Exam+Anxiety+and+Stress"
},
{
    title: "How to Create a Study Schedule for Success",
    description: "Effective ways to plan your study time for maximum productivity.",
    image: "../src/assets/blog11.avif", // Replace with actual image path
    link: "https://www.google.com/search?q=How+to+Create+a+Study+Schedule+for+Success"
},
{
    title: "Understanding NEET Syllabus and Exam Pattern",
    description: "A detailed guide on the NEET syllabus and how to tackle it.",
    image: "../src/assets/blog12.avif", // Replace with actual image path
    link: "https://www.google.com/search?q=Understanding+NEET+Syllabus+and+Exam+Pattern"
},
{
    title: "Top Mistakes to Avoid in IIT-JEE Preparation",
    description: "Common mistakes students make during preparation and how to avoid them.",
    image: "../src/assets/blog13.avif", // Replace with actual image path
    link: "https://www.google.com/search?q=Top+Mistakes+to+Avoid+in+IIT-JEE+Preparation"
}
  
];

const Blog = () => {
    return (
        <section className="blog-section">
            <div className="container">
            <h2 className="section-title">Our Blog</h2>
            <p className="section-description">Discover the latest tips and insights in education</p>
                <div className="blog-list">
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

