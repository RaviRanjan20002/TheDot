import React from "react";
import "../../../styles/HowToPrepareIITJEE.css";
import visionImage from "../../assets/assessment.jpg"; // Replace with actual image if needed

const OurVision = () => {
  return (
    <div className="single-blog-container">
      <h1>Our Vision</h1>
      <p className="blog-author">By The DOT Institute | April 2025</p>

      <img
        src={visionImage}
        alt="Our Vision"
        className="blog-main-image"
      />

      <p>
        At <strong>The DOT Institute</strong>, our vision is to inspire a culture of relentless pursuit of knowledge, curiosity, and self-improvement. We believe that education is the cornerstone of a successful life — not just academically, but socially and emotionally as well.
      </p>

      <h2>Empowering Through Education</h2>
      <p>
        Our goal is to empower students from every background to believe in their dreams and achieve them through guided effort and perseverance. We aim to democratize quality education by making it accessible, affordable, and effective.
      </p>

      <h2>Building Thinkers, Not Just Test Takers</h2>
      <p>
        We don’t just prepare students to clear competitive exams — we train them to be problem-solvers, critical thinkers, and ethical leaders of tomorrow. Our curriculum and mentoring strategies are designed to nurture creativity, logic, and discipline.
      </p>

      <h2>Long-Term Success, Not Short-Term Scores</h2>
      <p>
        We measure success not just by ranks and marks, but by how deeply our students understand concepts and how confidently they apply them in real life. We envision creating lifelong learners who embrace challenges with a growth mindset.
      </p>

      <blockquote>
        “Vision without action is a dream. Action without vision is chaos. At DOT, we believe in both.” — The DOT Institute
      </blockquote>

      <p>
        Our vision guides everything we do — from classroom interactions to the technology we adopt. We are here to shape not just brilliant minds, but responsible, well-rounded individuals who will shape the future.
      </p>

      <p><strong>The future belongs to those who prepare for it today — at The DOT Institute, we start now.</strong></p>
    </div>
  );
};

export default OurVision;
