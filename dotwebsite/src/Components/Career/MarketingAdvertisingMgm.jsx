import React from 'react';

// Import images
import ContentMarketingManager from "../../assets/ContentMarketingManager.jpg";
import SEOExecutives from "../../assets/SEOExecutives.jpg";
import ConversionRateOptimizer from "../../assets/ConversionRateOptimizer.jpg";
import CopyWriters from "../../assets/CopyWriters.jpg";
import DigitalContentSpecialist from "../../assets/DigitalContentSpecialist.jpg";
import PersonalBrandAdvisor from "../../assets/PersonalBrandAdvisor.jpg";
// import DigitalMarketingManager from "../../../assets/DigitalMarketingManager.jpg";
import InboundMarketingManager from "../../assets/InboundMarketingManager.jpg";
import InternetMarketingSpecialists from "../../assets/InternetMarketingSpecialists.jpg";
// import MarketResearchAnalysts from "../../../assets/MarketResearchAnalysts.jpg";
// import MarketingSpecialist from "../../../assets/MarketingSpecialist.jpg";
// import PersonalBrandAdvisor from "../../../assets/PersonalBrandAdvisor.jpg";
// import ProductManager from "../../../assets/ProductManager.jpg";
// import Reviewing from "../../../assets/Reviewing.jpg";
// import SearchEngineMarketers from "../../../assets/SearchEngineMarketers.jpg";
// import SEOExecutives from "../../../assets/SEOExecutives.jpg";
// import SocialMediaMarketing from "../../../assets/SocialMediaMarketing.jpg";
// import SocialMediaMarketingExperts from "../../../assets/SocialMediaMarketingExperts.jpg";
import manymore from "../../assets/manymore.jpg";

// Define the career roles with images
const careers = [

  { title: "Content Marketing Manager", image: ContentMarketingManager, link: "https://en.wikipedia.org/wiki/Content_marketing" },
  { title: "SEO Executives", image: SEOExecutives, link: "https://en.wikipedia.org/wiki/Search_engine_optimization" },
  { title: "Conversion Rate Optimizer", image: ConversionRateOptimizer, link: "https://en.wikipedia.org/wiki/Conversion_rate_optimization" },
  { title: "Copy Writers", image: CopyWriters, link: "https://en.wikipedia.org/wiki/Copywriting" },
  { title: "Digital Content Specialist", image: DigitalContentSpecialist, link: "https://en.wikipedia.org/wiki/Digital_marketing" },
  { title: "Personal Brand Advisor", image: PersonalBrandAdvisor, link: "https://en.wikipedia.org/wiki/Personal_branding" },
  { title: "Inbound Marketing Manager", image: InboundMarketingManager, link: "https://en.wikipedia.org/wiki/Inbound_marketing" },
  { title: "Internet Marketing Specialists", image: InternetMarketingSpecialists, link: "https://en.wikipedia.org/wiki/Online_advertising" },
  { title: "& many more", image: manymore, link: "https://www.google.com/search?q=Marketing+Advertising+Careers" }


  //   { title: "Digital Marketing Manager", image: DigitalMarketingManager },
  // { title: "Market Research Analysts", image: MarketResearchAnalysts },
  // { title: "Marketing Specialist", image: MarketingSpecialist },
  // { title: "Product Manager", image: ProductManager },
  // { title: "Reviewing", image: Reviewing },
  // { title: "Search Engine Marketers", image: SearchEngineMarketers },
  // { title: "SEO Executives", image: SEOExecutives },
  // { title: "Social Media Marketing", image: SocialMediaMarketing },
  // { title: "Social Media Marketing Experts", image: SocialMediaMarketingExperts },
];

const MarketingAdvertisingMgm = () => {
  return (
    <div className="container">
      <h1>Marketing & Advertising Careers</h1>
      <p className="description">
        Discover exciting career opportunities in marketing and advertising, where creativity meets strategy to drive business success.
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

export default MarketingAdvertisingMgm;
