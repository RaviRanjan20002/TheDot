import React from "react";
import "../../../styles/HowToPrepareIITJEE.css";
import journeyImage from "../../assets/1a.jpg"; // Replace this with the actual image

const OurJourney = () => {
  return (
    <div className="single-blog-container">
      <h1>Our Journey</h1>
      <p className="blog-author">By The DOT Institute | April 2025</p>

      <img
        src={journeyImage}
        alt="Our Journey"
        className="blog-main-image"
      />

      <p>
        The story of <strong>The DOT Institute</strong> began with a simple yet powerful idea — to redefine the way education is delivered and experienced in India. What started as a modest setup with a handful of passionate educators and a dream has today evolved into a trusted name in academic excellence.
      </p>

      <h2>Humble Beginnings</h2>
      <p>
        In our early days, we operated from a small space in Rewari, armed with only our vision, dedication, and belief in our students. We knew the potential that young minds held — they just needed the right guidance, motivation, and environment to thrive.
      </p>

      <h2>Step by Step, Brick by Brick</h2>
      <p>
        Through consistent effort and a commitment to quality, we began to grow. More students walked through our doors, and more parents entrusted us with their children's futures. We expanded our courses, upgraded our infrastructure, and introduced new learning methodologies to meet evolving needs.
      </p>

      <h2>Turning Challenges into Opportunities</h2>
      <p>
        Like any journey, ours too had obstacles — from technological transitions to academic competition. But every challenge only strengthened our resolve. With a dedicated team and a student-first mindset, we turned every setback into a stepping stone.
      </p>

      <h2>Where We Are Today</h2>
      <p>
        Today, The DOT Institute stands proud with thousands of success stories — from IITians and doctors to scholars and achievers. But more than numbers, it's the trust and transformation that matter most to us.
      </p>

      <blockquote>
        “We measure our success not by the number of toppers, but by the number of lives we’ve changed.” — The DOT Institute
      </blockquote>

      <p>
        As we continue to grow and innovate, we remain grounded in our roots and values. Our journey is far from over — in fact, it's only just begun. With every new batch, we write a new chapter of success, excellence, and empowerment.
      </p>

      <p><strong>Join us as we continue to shape minds and build futures — one student at a time.</strong></p>
    </div>
  );
};

export default OurJourney;
