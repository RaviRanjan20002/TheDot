import React from 'react';
import "./MarketingAdvertisingMgm.css";

// Import images
import ContentMarketingManager from "../../../assets/ContentMarketingManager.jpg";
import ContentWriters from "../../../assets/ContentWriters.jpg";
import ConversionRateOptimizer from "../../../assets/ConversionRateOptimizer.jpg";
import CopyWriters from "../../../assets/CopyWriters.jpg";
// import DigitalContentSpecialist from "../../../assets/DigitalContentSpecialist.jpg";
// import DigitalMarketingManager from "../../../assets/DigitalMarketingManager.jpg";
// import InboundMarketingManager from "../../../assets/InboundMarketingManager.jpg";
// import InternetMarketingSpecialists from "../../../assets/InternetMarketingSpecialists.jpg";
// import MarketResearchAnalysts from "../../../assets/MarketResearchAnalysts.jpg";
// import MarketingSpecialist from "../../../assets/MarketingSpecialist.jpg";
// import PersonalBrandAdvisor from "../../../assets/PersonalBrandAdvisor.jpg";
// import ProductManager from "../../../assets/ProductManager.jpg";
// import Reviewing from "../../../assets/Reviewing.jpg";
// import SearchEngineMarketers from "../../../assets/SearchEngineMarketers.jpg";
// import SEOExecutives from "../../../assets/SEOExecutives.jpg";
// import SocialMediaMarketing from "../../../assets/SocialMediaMarketing.jpg";
// import SocialMediaMarketingExperts from "../../../assets/SocialMediaMarketingExperts.jpg";

// Define the career roles with images
const roles = [
    { title: "Content Marketing Manager", image: ContentMarketingManager },
    { title: "Content Writers", image: ContentWriters },
    { title: "Conversion Rate Optimizer", image: ConversionRateOptimizer },
    { title: "Copy Writers", image: CopyWriters },
    // { title: "Digital Content Specialist", image: DigitalContentSpecialist },
    // { title: "Digital Marketing Manager", image: DigitalMarketingManager },
    // { title: "Inbound Marketing Manager", image: InboundMarketingManager },
    // { title: "Internet Marketing Specialists", image: InternetMarketingSpecialists },
    // { title: "Market Research Analysts", image: MarketResearchAnalysts },
    // { title: "Marketing Specialist", image: MarketingSpecialist },
    // { title: "Personal Brand Advisor", image: PersonalBrandAdvisor },
    // { title: "Product Manager", image: ProductManager },
    // { title: "Reviewing", image: Reviewing },
    // { title: "Search Engine Marketers", image: SearchEngineMarketers },
    // { title: "Search Engine Optimization (SEO) Executives", image: SEOExecutives },
    // { title: "Social Media Marketing", image: SocialMediaMarketing },
    // { title: "Social Media Marketing Experts", image: SocialMediaMarketingExperts }
];

const MarketingAdvertisingMgm = () => {
    return (
        <div className="container">
            <h1>Marketing & Advertising Careers</h1>
            <p className="marketingdescription">
                Discover exciting career opportunities in marketing and advertising, where creativity meets strategy to drive business success.
            </p>

            <h3 className="marketingsubtitle">Click below to explore any of the following career(s)</h3>

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

export default MarketingAdvertisingMgm;
