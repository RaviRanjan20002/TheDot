
// import React from "react";
// import img1 from "../../assets/aiml.jpg";
// import img2 from "../../assets/aiml.jpg";
// import "../../../styles/ResFac.css"; // Importing the CSS file

// const resFacData = [
//   {
//     title: "Our Faculty",
//     description: "Meet our experienced faculty members.",
//     image: img1,
//   },
//   {
//     title: "Our Results",
//     description: "View our students' exceptional achievements.",
//     image: img2,
//   },
// ];

// const ResFac = () => {
//   return (
//     <div className="resfac-container">
//      <div className="resfac-inside">
//       {resFacData.map((item, index) => (
//         <div className="resfac" key={index}>
//           <div className="resfac-content">
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//             <img src={item.image} alt={item.title} />
//           </div>
//         </div>
//       ))}
//       </div>
//     </div>
//   );
// };

// export default ResFac;

import React from "react";
import img1 from "../../assets/aiml.jpg";
import img2 from "../../assets/aiml.jpg";
import "../../../styles/ResFac.css";
import { Link } from "react-router-dom";

const resFacData = [
  {
    title: "Expert Faculty",
    description: "Our faculty members are highly qualified professionals with years of experience in teaching and mentoring students for competitive exams.",
    image: img1,
    path:"/faculty"
  },
  {
    title: "Outstanding Results",
    description: "Our students consistently achieve top ranks in JEE & NEET exams, reflecting the effectiveness of our teaching methodologies.",
    image: img2,
    path:"/result"
  },
];

const ResFac = () => {
  return (
    <div className="resfac-container">
      <div className="resfac-heading">
        <h1>Why Choose Us?</h1>
        <p>We provide top-notch guidance, expert faculty, and a proven track record of success.</p>
      </div>
      <div className="resfac-inside">
        {resFacData.map((item, index) => (
          <div className="resfac" key={index}>
            <div className="resfac-content">
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <Link to ={ `${item.path}`}>
              <button className="learn-more">Explore More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResFac;
