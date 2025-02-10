// import { Link } from "react-router-dom";
// import "./CareerLibrary.css";
// import { useState } from "react";
// import careersData from "./careersData"; // Import career data
// // import CareerOptions from "./CareerOptions"; // Import CareerOptions component

// const CareerLibrary = () => {
//   const [query, setQuery] = useState('');

//   return (
//     <div>
//       <div className="career-library">
//         <h1>
//           <Link to="/career-streams" className="career-library-link">
//             Career Library
//           </Link>
//         </h1>
//         <p className="subtitle">
//           See all major career options out there and learn about each one of them.
//         </p>
//         <hr />
//         {/* AI Assistant Banner */}
//         <div className="ai-assistant">
//           <strong>🚀 Introducing Our Career Page Provided by The DOT Counselling Team</strong>
//           <p>Kickstart your career journey with the best Career guidance.</p>
//         </div>
//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search by name or career..."
//           onChange={(e) => setQuery(e.target.value.toLowerCase())}
//           className="search-bar"
//         />
//         {/* Career Cards */}
//         <div className="career-grid">
//           {careersData.filter((career) => career.title.toLowerCase().includes(query)
//           ).map((career, index) => (
//             <Link
//               key={index}
//               to={`/career/${career.title.replace(/\s+/g, "-").toLowerCase()}`} // Dynamic URL
//               className="career-card"
//             >
//               <img src={career.image} alt={career.title} className="career-image" />
//               <div className="career-info">
//                 <h2>{career.title}</h2>
//                 <p>{career.options} career options</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareerLibrary; 


import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import careersData from "./careersData";
import "./CareerLibrary.css";

const streamCareers = {
  "Medical":["Medical", "Agriculture and Natural Resources", "Animal Care and Farming", "Politics and Law","Science and Research","Sports and Recreation","Travel and Tourism","Healthcare","Environmental Care","Food and Culinary Art","Beauty and Personal Care","Construction and Skilled Trades","Cultural Heritage Management","Education","Fashion Industry","Healthcare","Hospitality Industry","Medical","Safety Management Services","Social Services and Counseling","Sports and Recreation","Transportation and Logistics","Travel and Tourism"],
  "Non-Medical": ["Engineering", "IT and Computer Science", "Robotics and Automation", "Science and Research","Civil Services","Gaming Industry" ,"Hospitality and Tourism","Hospitality Industry","Information Technology","Law and Public Policy","Manufacturing and Production","Marketing and Advertising","Media and Communications","Media and Performing Arts","Music and Entertainment","National Security and Emergency Services","Politics and Law","Robotics and Automation","Safety Management Services","Sales and Management","Transportation and Logistics","Travel and Tourism","NonMedical","Humanities"],
  "others": ["Media and Communications", "Music and Entertainment", "Politics and Law", "Social Services and Counseling","Media and Performing Arts","National Security and Emergency Services","Fashion Industry","Arts and Design","Textile and Clothing Industry","Transportation and Logistics","Travel and Tourism","NonMedical","Humanities","Business and Finance", "Marketing and Advertising", "Entrepreneurship", "Finance and Economics","Sales and Management","Sales and Marketing","Ecommerce","Finance","Marketing","Sales","Supply Chain Management","Business and Finance","Marketing and Advertising","Sales and Management","Sales and Marketing","Ecommerce","Finance","Manufacturing and Production","Sales","Hospitality Industry","Hospitality and Tourism","Sales and Management","Sales and Marketing","Transportation and Logistics","Travel and Tourism","NonMedical","Humanities"],
};

const CareerLibrary = () => {
  const location = useLocation();
  const [filteredCareers, setFilteredCareers] = useState(careersData);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const selectedStream = params.get("stream");

    if (selectedStream && streamCareers[selectedStream]) {
      setFilteredCareers(careersData.filter(career => streamCareers[selectedStream].includes(career.title)));
    } else {
      setFilteredCareers(careersData);
    }
  }, [location]);

  return (
    <div className="career-library">
      <h1>
        <Link to="/career-streams" className="career-library-link">
          Career Library
        </Link>
      </h1>
      <p className="subtitle">
        Explore career options based on your selected stream.
      </p>
      <hr />
      <input
        type="text"
        placeholder="Search career..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        className="search-bar"
      />
      <div className="career-grid">
        {filteredCareers.filter(career => career.title.toLowerCase().includes(query)).map((career, index) => (
          <Link
            key={index}
            to={`/career/${career.title.replace(/\s+/g, "-").toLowerCase()}`}
            className="career-card"
          >
            <img src={career.image} alt={career.title} className="career-image" />
            <div className="career-info">
              <h2>{career.title}</h2>
              <p>{career.options} career options</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CareerLibrary;
