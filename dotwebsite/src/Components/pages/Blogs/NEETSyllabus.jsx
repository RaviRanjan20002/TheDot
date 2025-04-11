import React from "react";
import "../../../../styles/HowToPrepareIITJEE.css"; 
import image1 from "../../../assets/support.jpg";

const NEETSyllabus = () => {
  return (
    <div className="single-blog-container">
      <h1>Understanding NEET Syllabus and Exam Pattern</h1>
      <p className="blog-author">By The DOT Institute | April 2025</p>

      <img
        src={image1}
        alt="NEET Syllabus"
        className="blog-main-image"
      />

      <p>
        NEET (National Eligibility cum Entrance Test) is a highly competitive exam that determines admission to medical and dental colleges across India. To excel in NEET, it's crucial to not just study hard but also to study smart — and that begins with a solid understanding of the syllabus and exam pattern.
      </p>

      <h2>1. NEET Exam Structure at a Glance</h2>
      <p>
        NEET consists of 200 questions (180 to be attempted), split across four subjects: Physics, Chemistry, Botany, and Zoology. Each subject has two sections:
        <ul>
          <li><strong>Section A:</strong> 35 compulsory questions</li>
          <li><strong>Section B:</strong> 15 questions (attempt any 10)</li>
        </ul>
        The exam is 3 hours and 20 minutes long, with a total of 720 marks.
      </p>

      <h2>2. NEET Marking Scheme</h2>
      <p>
        <ul>
          <li>+4 for every correct answer</li>
          <li>-1 for every incorrect answer</li>
          <li>No marks for unattempted questions</li>
        </ul>
        Accuracy is key — careless mistakes can cost valuable marks.
      </p>

      <h2>3. Subject-Wise Syllabus Breakdown</h2>
      <h3>📘 Physics</h3>
      <ul>
        <li><strong>Class 11:</strong> Physical world, Laws of Motion, Thermodynamics, Oscillations, etc.</li>
        <li><strong>Class 12:</strong> Current Electricity, Magnetism, Optics, Modern Physics</li>
      </ul>

      <h3>🧪 Chemistry</h3>
      <ul>
        <li><strong>Class 11:</strong> Basic Concepts, Structure of Atom, Chemical Bonding, Hydrocarbons</li>
        <li><strong>Class 12:</strong> Solid State, Solutions, Electrochemistry, Organic Chemistry</li>
      </ul>

      <h3>🌿 Biology</h3>
      <ul>
        <li><strong>Class 11:</strong> Cell Structure, Plant Physiology, Human Physiology</li>
        <li><strong>Class 12:</strong> Reproduction, Genetics, Biotechnology, Ecology</li>
      </ul>

      <h2>4. Strategy Tips from The DOT Institute</h2>
      <ul>
        <li>💡 Focus more on Biology — it carries 50% of the total marks</li>
        <li>📚 Use NCERT books as your primary study material</li>
        <li>📝 Practice mock tests regularly to build speed and confidence</li>
        <li>🧠 Master time management during the 200-question challenge</li>
      </ul>

      <blockquote>
        “Understanding the syllabus is the first step to mastering it.” — The DOT Institute
      </blockquote>

      <p>
        A deep understanding of the NEET syllabus and exam pattern not only boosts your confidence but also helps you design an effective study plan. At <strong>The DOT Institute</strong>, we provide structured preparation, expert guidance, and personalized mentoring to ensure you’re fully prepared.
      </p>

      <p><strong>Know the pattern. Learn the syllabus. Ace the exam.</strong></p>
    </div>
  );
};

export default NEETSyllabus;
