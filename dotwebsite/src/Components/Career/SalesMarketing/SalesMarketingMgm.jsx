import React from 'react';
import "./SalesMarketingMgm.css";

// Import images (replace with actual paths)
import SalesRepresentative from "../../../assets/SalesRepresentative.jpg";
import MarketingManager from "../../../assets/MarketingManager.jpg";
import MarketResearchAnalyst from "../../../assets/MarketResearchAnalyst.jpg";
import BrandManager from "../../../assets/BrandManager.jpg";
// import DigitalMarketingSpecialist from "../../../assets/DigitalMarketingSpecialist.jpg";
// import AccountExecutive from "../../../assets/AccountExecutive.jpg";
// import PublicRelationsManager from "../../../assets/PublicRelationsManager.jpg";
// import SalesManager from "../../../assets/SalesManager.jpg";
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
  { title: "Sales Representative", image: SalesRepresentative },
  { title: "Marketing Manager", image: MarketingManager },
  { title: "Market Research Analyst", image: MarketResearchAnalyst },
  { title: "Brand Manager", image: BrandManager },
//   { title: "Digital Marketing Specialist", image: DigitalMarketingSpecialist },
//   { title: "Account Executive", image: AccountExecutive },
//   { title: "Public Relations Manager", image: PublicRelationsManager },
//   { title: "Sales Manager", image: SalesManager },
//   { title: "Product Manager", image: ProductManager },
//   { title: "Business Development Manager", image: BusinessDevelopmentManager },
//   { title: "Affiliate Marketer", image: AffiliateMarketer },
//   { title: "Growth Hacker", image: GrowthHacker },
//   { title: "Experiential Marketer", image: ExperientialMarketer },
//   { title: "Influencer Marketing Manager", image: InfluencerMarketingManager },
//   { title: "SEO Specialist", image: SEOSpecialist },
//   { title: "Online Community Manager", image: OnlineCommunityManager },
//   { title: "Marketing Analyst", image: MarketingAnalyst },
//   { title: "Customer Relationship Manager", image: CustomerRelationshipManager },
//   { title: "Trade Show Coordinator", image: TradeShowCoordinator },
//   { title: "Campaign Manager", image: CampaignManager },
//   { title: "Email Marketing Specialist", image: EmailMarketingSpecialist },
//   { title: "Content Strategist", image: ContentStrategist },
//   { title: "Social Media Strategist", image: SocialMediaStrategist },
//   { title: "Marketing Communications Specialist", image: MarketingCommunicationsSpecialist },
//   { title: "Lead Generation Specialist", image: LeadGenerationSpecialist }
 ];

const SalesMarketingMgm = () => {
  return (
    <div className="container">
      <h1>Sales and Marketing Careers</h1>
      <p className="salesmarketingdescription">
        The Sales and Marketing industry offers a wide variety of opportunities to drive growth, build brand recognition, and create meaningful connections with consumers. Explore the key roles that make it all happen!
      </p>

      <h3 className="salesmarketingsubtitle">Click below to explore any of the following career(s)</h3>

      <div className="grid">
        {roles.map((role, index) => (
          <div key={index} className="card">
            <img src={role.image} alt={role.title} />
            <h2>{role.title}</h2>
            <a href={`https://www.google.com/search?q=${encodeURIComponent(role.title)}+Career`} target="_blank" rel="noopener noreferrer" className="button">
              See Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesMarketingMgm;
