import "../../../styles/CareerLibrary.css";
import  { useState } from "react";
import Agriculture from "../../assets/agriculture.jpg";
import Administration from "../../assets/admnistration.jpg";
import Animal from "../../assets/Animal.jpg";
import Architecture from "../../assets/Architect.jpg";
import Arts from "../../assets/Arts.jpg";
import Beauty from "../../assets/Beauty.jpg";
import Business from "../../assets/Business.jpg";
import BusinessMgm from "../../assets/BusinessMgm.jpg";
import civilservices from "../../assets/civilservices.jpg";
import construction from "../../assets/construction.jpg";
import culture from "../../assets/culture.jpg";
import ecommerce from "../../assets/ecommerce.jpg";
import education from "../../assets/education.jpg";
import engineering from "../../assets/engineering.jpg";
import Environmental from "../../assets/Environmental.jpg";
import Event from "../../assets/Event.jpg";
import Fashion from "../../assets/Fashion.jpg";
import Finance from "../../assets/Finance.jpg";
import Food from "../../assets/Food.jpg";
import Gaming from "../../assets/gaming.jpg";
import Healthcare from "../../assets/Healthcare.jpg";
import Hospitality from "../../assets/Hospitality.jpg";
import Hospitalityindustry from "../../assets/Hospitalityindustry.jpg";
import it from "../../assets/it.jpg";
import itcs from "../../assets/itcs.jpg";
import law from "../../assets/law.jpg";
import Manufacture from "../../assets/Manufacture.jpg";
import Marketing from "../../assets/Marketing.jpg";
import Media from "../../assets/Media.jpg";
import MediaPerforming from "../../assets/Mediaperforming.jpg";
import Music from "../../assets/Music.jpg";
import NationalSecurity from "../../assets/Nationalsecurity.jpg";
import Politics from "../../assets/Poltics.jpg";
import Robotics from "../../assets/Robotics.jpg";
import Safety from "../../assets/Safety.jpg";
import Sales from "../../assets/Sales.jpg";
import SalesandMarketing from "../../assets/salesandmarketing.jpg";
import science from "../../assets/science.jpg";
import Social from "../../assets/social.jpg";
import Sports from "../../assets/sports.jpg";
import Textile from "../../assets/textile.jpg";
import Transport from "../../assets/transport.jpg";
import Travel from "../../assets/travel.jpg";
const careers = [
  {
    title: "Administration and Management",
    options: 34,
    image: Administration,
  },
  {
    title: "Agriculture and Natural Resources",
    options: 25,
    image: Agriculture,
  },
  { title: "Animal Care and Farming", options: 16, image: Animal },
  { title: "Architecture", options: 25, image: Architecture },
  { title: "Arts and Design", options: 42, image: Arts },
  { title: "Beauty and Personal Care", options: 25, image: Beauty },
  { title: "Business and Finance", options: 26, image: Business },
  { title: "Business and Management", options: 26, image: BusinessMgm },
  { title: "Civil Services", options: 27, image: civilservices },
  {
    title: "Construction and Skilled Trades",
    options: 52,
    image: construction,
  },
  { title: "Cultural Heritage Management", options: 10, image: culture },
  { title: "E-commerce", options: 25, image: ecommerce },
  { title: "Education", options: 36, image: education },
  { title: "Engineering", options: 56, image: engineering },
  { title: "Environmental Care", options: 9, image: Environmental },
  { title: "Event Management", options: 27, image: Event },
  { title: "Fashion Industry", options: 30, image: Fashion },
  { title: "Finance and Economics", options: 20, image: Finance },
  { title: "Food and Culinary Art", options: 31, image: Food },
  { title: "Gaming Industry", options: 18, image: Gaming },
  { title: "Healthcare and Medicine", options: 125, image: Healthcare },
  { title: "Hospitality and Tourism", options: 25, image: Hospitality },
  { title: "Hospitality Industry", options: 15, image: Hospitalityindustry },
  { title: "Information Technology (IT)", options: 24, image: it },
  { title: "IT and Computer Science", options: 31, image: itcs },
  { title: "Law and Public Policy", options: 24, image: law },
  { title: "Manufacturing and Production", options: 133, image: Manufacture },
  { title: "Marketing and Advertising", options: 17, image: Marketing },
  { title: "Media and Communications", options: 30, image: Media },
  { title: "Media and Performing Arts", options: 27, image: MediaPerforming },
  { title: "Music and Entertainment", options: 148, image: Music },
  {
    title: "National Security and Emergency Services",
    options: 30,
    image: NationalSecurity,
  },
  { title: "Politics and Law", options: 14, image: Politics },
  { title: "Robotics and Automation", options: 15, image: Robotics },
  { title: "Safety Management Services", options: 25, image: Safety },
  { title: "Sales and Management", options: 23, image: Sales },
  { title: "Sales and Marketing", options: 25, image: SalesandMarketing },
  { title: "Science and Research", options: 83, image: science },
  { title: "Social Services and Counseling", options: 25, image: Social },
  { title: "Sports and Recreation", options: 38, image: Sports },
  { title: "Textile and Clothing Industry", options: 52, image: Textile },
  { title: "Transportation and Logistics", options: 86, image: Transport },
  { title: "Travel and Tourism", options: 14, image: Travel },
];

const CareerLibrary = () => {

  const [query, setQuery] = useState('');
  return (
    <div className="career-library">
      <h1>Career Library</h1>
      <p className="subtitle">
        See all major career options out there and learn about each one of them.
      </p>
      <hr /> {/* AI Assistant Banner */}
      <div className="ai-assistant">
        <strong>
          🚀 Introducing Our Career Page Provided by The DOT Counselling Team
        </strong>
        <p>Kickstart your career journey with the best Career guidance.</p>
      </div>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name or career..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        className="search-bar"
      />
      {/* Career Cards */}
      <div className="career-grid">
        {careers.filter((career) => career.title.toLowerCase().includes(query)
        )
        .map((career, index) => (
          <div key={index} className="career-card">
            <img
              src={career.image}
              alt={career.title}
              className="career-image"
            />
            <div className="career-info">
              <h2>{career.title}</h2>
              <p>{career.options} career options</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerLibrary;
// <!-- <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
//     <link rel="icon" type="image/jpeg" href="./src/assets/logoimg.png" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
//     <meta name="description" content="Best Coaching Centers for IIT JEE and NEET in Rewari with Fee Structure: Join The DOT Institute in Rewari for JEE Main , JEE Advanced and NEET Preparation. We provide cutting-edge educational solutions that help students to excel in their goals."/> 
//     <meta name="keywords" content="iit-jee,NEET,Best Coaching in Rewari for IIT JEE and NEET,IIT JEE and NEET in Rewari,Rewari,Best Coaching for NEET,Best Faculty in Rewari, Highest Selection Ratio in rewari,Top Coaching Centers for IIT JEE and NEET in Rewari" /> 
//     <title> Best coaching for IIT-JEE Mains &amp; Advanced, NEET  in Rewari</title>
//   </head>
//   <body>
//     <div id="root"></div>
//     <script type="module" src="/src/main.jsx"></script>
//   </body>
// </html> -->