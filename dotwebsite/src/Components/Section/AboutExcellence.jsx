import React from "react";
import "../../../styles/HowToPrepareIITJEE.css";
import aboutImage from "../../assets/13a.jpg";

const AboutExcellence = () => {
  return (
    <div className="single-blog-container">
      <h1>About Excellence – The DOT Institute</h1>
      <p className="blog-author">By The DOT Institute | April 2025</p>

      <img
        src={aboutImage}
        alt="The DOT Institute"
        className="blog-main-image"
      />

      <p>
        At <strong>The DOT Institute</strong>, excellence is not just an aspiration — it’s a commitment. Since our inception, we have worked tirelessly to redefine the boundaries of quality education and student success.
      </p>

      <h2>Our Mission</h2>
      <p>
        We aim to build strong academic foundations for students preparing for competitive exams like <strong>JEE (Main & Advanced)</strong> and <strong>NEET (UG)</strong>. With structured guidance and personalized mentoring, we bring the best out of every learner.
      </p>

      <h2>What Sets Us Apart</h2>
      <p>
        Our expert faculty, carefully curated study material, and consistent assessment methods set us apart. We prioritize conceptual clarity, regular doubt-solving, and performance tracking to ensure every student stays on the right path.
      </p>

      <h2>Empowering Students with Confidence</h2>
      <p>
        Beyond academics, we work on building discipline, confidence, and motivation. Our environment encourages questions, discussions, and growth. We don’t just prepare students for exams — we prepare them for life.
      </p>

      <blockquote>
        “At The DOT, we don't just teach; we transform.” — The DOT Institute
      </blockquote>

      <p>
        Every student has potential. With the right guidance, they can turn that potential into achievement. That’s what excellence means to us — empowering young minds to chase their dreams with clarity, courage, and confidence.
      </p>

      <p><strong>Welcome to The DOT Institute — where learning becomes a legacy.</strong></p>
    </div>
  );
};

export default AboutExcellence;
