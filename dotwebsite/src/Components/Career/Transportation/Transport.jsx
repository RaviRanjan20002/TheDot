import dm from "../../../assets/dm.avif";
import FlightInstructor from "../../../assets/fi.avif";
import ActingDramatics from "../../../assets/Acting.avif";
import LogisticsManager from "../../../assets/lgm.avif";
import MerchantNavy from "../../../assets/MerchantNavy.avif";
import manymore from "../../../assets/manymore.jpg";

const careers = [
  { 
    title: "Distribution Manager", 
    image: dm, 
    link: "https://en.wikipedia.org/wiki/Distribution_management" 
  },
  { 
    title: "Flight Instructor", 
    image: FlightInstructor, 
    link: "https://en.wikipedia.org/wiki/Flight_instructor" 
  },
  { 
    title: "Acting/Dramatics", 
    image: ActingDramatics, 
    link: "https://en.wikipedia.org/wiki/Acting" 
  },
  { 
    title: "Logistics Manager", 
    image: LogisticsManager, 
    link: "https://en.wikipedia.org/wiki/Logistics_management" 
  },
  { 
    title: "Merchant Navy", 
    image: MerchantNavy, 
    link: "https://en.wikipedia.org/wiki/Merchant_Navy" 
  },
  { 
    title: "& many more", 
    image: manymore, 
    link: "https://en.wikipedia.org/wiki/Transport_Logistic" 
  },
];

const Transport = () => {
  return (
    <div className="container">
      <h1>Transportation and Logistics</h1>
      <p className="description">
      The transportation and logistics industry plays a crucial role in global trade and economic development. 
        From managing the distribution of goods to ensuring efficient supply chains, professionals in this field 
        help keep businesses and consumers connected. Whether you are interested in aviation, maritime operations, 
        or logistics management, there are diverse career paths to explore in this dynamic industry.
      </p>

      <h3 className="subtitle">Click below to explore any of the following career(s)</h3>

      <div className="grid">
        {careers.map((career, index) => (
          <div key={index} className="card">
            <img src={career.image} alt={career.title} />
            <h2>{career.title}</h2>
            <a 
              href={career.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="button"
            >
              See Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transport;