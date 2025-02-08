
import "./Entrepreneurship.css";

// Import images (replace with actual paths)
import ManagementAnalyst from "../../../assets/ManagementAnalyst.jpg";
import SalesManager from "../../../assets/SalesManager.jpg";
import CorporateCommunication from "../../../assets/CorporateCommunication.jpg";
import BusinessDevelopment from "../../../assets/BusinessDevelopment.jpg";
import CEO from "../../../assets/CEO.jpg";
import NewVentureDevelopers from "../../../assets/NewVentureDevelopers.jpg";
import AdvertisingExecutive from "../../../assets/AdvertisingExecutive.jpg";
import BusinessFounder from "../../../assets/BusinessFounder.jpg";

// import MarketingManager from "../../../assets/MarketingManager.jpg";
// import SocialMedia from "../../../assets/SocialMedia.jpg";
// import SocialEntrepreneurship from "../../../assets/SocialEntrepreneurship.jpg";
// import ProductManagement from "../../../assets/ProductManagement.jpg";
// import ConstructionManager from "../../../assets/ConstructionManager.jpg";
// import SalesRepresentative from "../../../assets/SalesRepresentative.jpg";
// import Appraiser from "../../../assets/Appraiser.jpg";
// import Corporate from "../../../assets/Corporate.jpg";
// import BusinessConsultant from "../../../assets/BusinessConsultant.jpg";
// import FinancialAdviser from "../../../assets/FinancialAdviser.jpg";
// import WebDeveloper from "../../../assets/WebDeveloper.jpg";
// import SmallBusiness from "../../../assets/SmallBusiness.jpg";
// import CorporateEntrepreneurship from "../../../assets/CorporateEntrepreneurship.jpg";
// import VentureCapital from "../../../assets/VentureCapital.jpg";
// import BusinessAnalyst from "../../../assets/BusinessAnalyst.jpg";
// import DevelopmentOfficer from "../../../assets/DevelopmentOfficer.jpg";
import manymore from "../../../assets/manymore.jpg";

const careers = [
  { title: "Management Analyst", image: ManagementAnalyst, link: "https://en.wikipedia.org/wiki/Management_consulting" },
  { title: "Sales Manager", image: SalesManager, link: "https://en.wikipedia.org/wiki/Sales_management" },
  { title: "Master of Corporate Communication", image: CorporateCommunication, link: "https://en.wikipedia.org/wiki/Corporate_communication" },
  { title: "Business Development", image: BusinessDevelopment, link: "https://en.wikipedia.org/wiki/Business_development" },
  { title: "Chief Executive Officer", image: CEO, link: "https://en.wikipedia.org/wiki/Chief_executive_officer" },
  { title: "New Venture Developers", image: NewVentureDevelopers, link: "https://en.wikipedia.org/wiki/Entrepreneurship" },
  { title: "Advertising Executive", image: AdvertisingExecutive, link: "https://en.wikipedia.org/wiki/Advertising" },
  { title: "Business Founder", image: BusinessFounder, link: "https://en.wikipedia.org/wiki/Entrepreneurship" },

  // { title: "Marketing Manager", image: MarketingManager },
  // { title: "Social Media", image: SocialMedia },
  // { title: "Social Entrepreneurship", image: SocialEntrepreneurship },
  // { title: "Product Management", image: ProductManagement },
  // { title: "Construction Manager", image: ConstructionManager },
  // { title: "Sales Representative", image: SalesRepresentative },
  // { title: "Appraiser", image: Appraiser },
  // { title: "Corporate", image: Corporate },
  // { title: "Business Consultant", image: BusinessConsultant },
  // { title: "Financial Adviser", image: FinancialAdviser },
  // { title: "Web Developer", image: WebDeveloper },
  // { title: "Small Business", image: SmallBusiness },
  // { title: "Corporate Entrepreneurship", image: CorporateEntrepreneurship },
  // { title: "Venture Capital", image: VentureCapital },
  // { title: "Business Analyst", image: BusinessAnalyst },
  // { title: "Development Officer", image: DevelopmentOfficer },
  { title: "& many more", image: manymore, link: "https://www.google.com/search?q=Entrepreneurship+Careers" }
];

const Entrepreneurship = () => {
  return (
    <div className="container">
      <h1>Entrepreneurship Careers</h1>
      <p className="description">
        Entrepreneurs drive innovation by seizing market opportunities, often creating new products or services. While no formal education is required, success is enhanced with a solid educational background. Popular fields include E-Commerce, M-Commerce, EduTech, FinTech, and Healthcare. Entrepreneurship can also lead to careers in consulting, sales, and R&D.
      </p>

      <h3 className="subtitle">Click below to explore any of the following career(s)</h3>

      <div className="grid">
        {careers.map((career, index) => (
          <div key={index} className="card">
            <img src={career.image} alt={career.title} />
            <h2>{career.title}</h2>
            <a
              href={career.link || `https://www.google.com/search?q=${encodeURIComponent(career.title)}+Career`}
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

export default Entrepreneurship;
