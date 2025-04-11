import React from "react";
import "../../../styles/HowToPrepareIITJEE.css";
import joinTeamImage from "../../assets/1a.jpg"; // Replace with actual image

const JoinOurTeam = () => {
  return (
    <div className="single-blog-container">
      <h1>Join Our Team</h1>
      <p className="blog-author">By The DOT Institute | April 2025</p>

      <img
        src={joinTeamImage}
        alt="Join Our Team"
        className="blog-main-image"
      />

      <p>
        At <strong>The DOT Institute</strong>, we believe that great institutions are built by great people. We are always on the lookout for passionate, talented, and driven individuals who are excited to shape the future of education with us.
      </p>

      <h2>Why Work With Us?</h2>
      <p>
        Working at The DOT Institute means being part of a close-knit team that values growth, creativity, and impact. Whether you're a teacher, counselor, designer, content creator, or administrator — your role here directly contributes to transforming lives.
      </p>

      <h2>Our Culture</h2>
      <p>
        We foster a work environment where ideas are welcomed, collaboration is encouraged, and learning never stops. Here, you'll work with some of the most dedicated educators and professionals who genuinely care about students and each other.
      </p>

      <h2>Who Can Apply?</h2>
      <p>
        We're looking for:
        <ul>
          <li>Experienced and aspiring faculty members in Physics, Chemistry, Biology, and Mathematics</li>
          <li>Academic mentors and counselors</li>
          <li>Marketing and digital outreach experts</li>
          <li>Designers, content developers, and operations staff</li>
        </ul>
      </p>

      <h2>Training and Growth</h2>
      <p>
        When you join us, we don’t just put you in a role — we help you grow into it. From ongoing training sessions to hands-on experience and leadership opportunities, we make sure your journey here is as rewarding as your impact.
      </p>

      <blockquote>
        “If you're passionate about education and eager to make a difference — your place is with us.” — The DOT Institute
      </blockquote>

      <p>
        Ready to take the leap? Join a team that's changing the face of education one student at a time. Email your resume and a brief introduction to <strong>thedot.ind@gmail.com</strong> and let's start building the future — together.
      </p>

      <p><strong>Inspire. Educate. Empower — with The DOT Institute.</strong></p>
    </div>
  );
};

export default JoinOurTeam;
