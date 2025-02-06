
import Advertiser from "../../../assets/Advertiser.avif";
import Brand from "../../../assets/brand.avif";
import MarketResearcher from "../../../assets/MarketResearcher.jpg";
import Retailer from "../../../assets/Retailer.avif";
import SalesExecutive from "../../../assets/SalesExecutive.avif";
import manymore from "../../../assets/manymore.jpg";

const careers = [
  { title: "Advertiser", image: Advertiser, link: "https://en.wikipedia.org/wiki/Advertising" },
  { title: "Brand Manager", image: Brand, link: "https://en.wikipedia.org/wiki/Brand_management" },
  { title: "Market Researcher", image: MarketResearcher, link: "https://en.wikipedia.org/wiki/Market_research" },
  { title: "Retailer", image: Retailer, link: "https://en.wikipedia.org/wiki/Retail" },
  { title: "Sales Executive", image: SalesExecutive, link: "https://en.wikipedia.org/wiki/Sales" },
  { 
    title: "& many more", 
    image: manymore, 
    link: "https://en.wikipedia.org/wiki/Business_management"
  },
];

const Salesmgm = () => {
  return (
    <div className="container">
      <h1>Sales and Management</h1>
      <p className="description">
        Sales and management are the driving forces behind business growth, customer relationships, 
        and market expansion. Professionals in this field analyze consumer needs, develop marketing 
        strategies, and manage teams to optimize business success. Careers in advertising, brand 
        management, market research, and retail provide exciting opportunities to work in a dynamic 
        and competitive environment. Whether you are helping businesses grow or managing large-scale 
        retail operations, this industry offers rewarding career paths with strong growth potential.
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

export default Salesmgm;
