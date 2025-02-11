import React from 'react';

// Import images (replace with actual paths)
import SalesRepresentative from "../../assets/SalesRepresentative.jpg";
import MarketingManager from "../../assets/MarketingManager.jpg";
import MarketResearchAnalyst from "../../assets/MarketResearchAnalyst.jpg";
import BrandManager from "../../assets/BrandManager.jpg";
import DigitalMarketingSpecialist from "../../assets/DigitalMarketingSpecialist.jpg";
import AccountExecutive from "../../assets/AccountExecutive.jpg";
import PublicRelationsManager from "../../assets/PublicRelationsManager.jpg";
import SalesManager from "../../assets/SalesManager.jpg";
import manymore from "../../assets/manymore.jpg";

// import ProductManager from "../../../assets/ProductManager.jpg";
// import BusinessDevelopmentManager from "../../../assets/BusinessDevelopmentManager.jpg";
// import AffiliateMarketer from "../../../assets/AffiliateMarketer.jpg";
// import GrowthHacker from "../../../assets/GrowthHacker.jpg";
// import ExperientialMarketer from "../../../assets/ExperientialMarketer.jpg";
// import InfluencerMarketingManager from "../../../assets/InfluencerMarketingManager.jpg";
// import SEOSpecialist from "../../../assets/SEOSpecialist.jpg";
// import OnlineCommunityManager from "../../../assets/OnlineCommunityManager.jpg";
// import MarketingAnalyst from "../../../assets/MarketingAnalyst.jpg";
// import CustomerRelationshipManager from "../../../assets/CustomerRelationshipManager.jpg";
// import TradeShowCoordinator from "../../../assets/TradeShowCoordinator.jpg";
// import CampaignManager from "../../../assets/CampaignManager.jpg";
// import EmailMarketingSpecialist from "../../../assets/EmailMarketingSpecialist.jpg";
// import ContentStrategist from "../../../assets/ContentStrategist.jpg";
// import SocialMediaStrategist from "../../../assets/SocialMediaStrategist.jpg";
// import MarketingCommunicationsSpecialist from "../../../assets/MarketingCommunicationsSpecialist.jpg";
// import LeadGenerationSpecialist from "../../../assets/LeadGenerationSpecialist.jpg";

const roles = [
  { title: "Sales Representative", image: SalesRepresentative, link: "https://en.wikipedia.org/wiki/Sales_representative" },
  { title: "Marketing Manager", image: MarketingManager, link: "https://en.wikipedia.org/wiki/Marketing_management" },
  { title: "Market Research Analyst", image: MarketResearchAnalyst, link: "https://en.wikipedia.org/wiki/Market_research" },
  { title: "Brand Manager", image: BrandManager, link: "https://en.wikipedia.org/wiki/Brand_management" },
  { title: "Digital Marketing Specialist", image: DigitalMarketingSpecialist, link: "https://en.wikipedia.org/wiki/Digital_marketing" },
  { title: "Account Executive", image: AccountExecutive, link: "https://en.wikipedia.org/wiki/Account_executive" },
  { title: "Public Relations Manager", image: PublicRelationsManager, link: "https://en.wikipedia.org/wiki/Public_relations" },
  { title: "Sales Manager", image: SalesManager, link: "https://en.wikipedia.org/wiki/Sales_management" },
  { title: "& many more", image: manymore, link: "https://www.google.com/search?q=Sales+%26+Marketing+Careers" },
];

const SalesMarketingMgm = () => {
  return (
    <div className="container">
      <h1>Sales and Marketing Careers</h1>
      <p className="description">
        The Sales and Marketing industry offers a wide variety of opportunities to drive growth, build brand recognition, and create meaningful connections with consumers. Explore the key roles that make it all happen!
      </p>

      <h3 className="subtitle">Click below to explore any of the following career(s)</h3>

      <div className="grid">
        {roles.map((role, index) => (
          <div key={index} className="card">
            <img src={role.image} alt={role.title} />
            <h2>{role.title}</h2>
            <a
              href={role.link}
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

export default SalesMarketingMgm;
