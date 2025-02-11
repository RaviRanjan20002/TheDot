import React from 'react';
// import "./ECommerceMgm.css";

// Import images (replace with actual paths)
import ECommerceAnalyst from "../../assets/ECommerceAnalyst.jpg";
import ECommerceBusinessDevManager from "../../assets/ECommerceBusinessDevManager.jpg";
import ECommerceContentWriter from "../../assets/ECommerceContentWriter.jpg";
import ECommerceUXDesigner from "../../assets/ECommerceUXDesigner.jpg";
import ECommerceWebDeveloper from "../../assets/ECommerceWebDeveloper.jpg";
import ECommerceDirector from "../../assets/ECommerceDirector.jpg";
import ECommerceSalesManager from "../../assets/ECommerceSalesManager.jpg";
import ECommerceGrowthHacker from "../../assets/ECommerceGrowthHacker.jpg";
import manyMore from "../../assets/manymore.jpg";

// import ECommerceCROSpecialist from "../../../assets/ECommerceCROSpecialist.jpg";
// import ECommerceCoordinator from "../../../assets/ECommerceCoordinator.jpg";
// import ECommerceCustomerExperienceManager from "../../../assets/ECommerceCustomerExperienceManager.jpg";
// import ECommerceCustomerServiceRep from "../../../assets/ECommerceCustomerServiceRep.jpg";
// import ECommerceDataAnalyst from "../../../assets/ECommerceDataAnalyst.jpg";
// import ECommerceDigitalMarketingSpecialist from "../../../assets/ECommerceDigitalMarketingSpecialist.jpg";
// import ECommerceDirector from "../../../assets/ECommerceDirector.jpg";
// import ECommerceFulfillmentManager from "../../../assets/ECommerceFulfillmentManager.jpg";
// import ECommerceGrowthHacker from "../../../assets/ECommerceGrowthHacker.jpg";
// import ECommerceLogisticsCoordinator from "../../../assets/ECommerceLogisticsCoordinator.jpg";
// import ECommerceManager from "../../../assets/ECommerceManager.jpg";
// import ECommerceMarketingManager from "../../../assets/ECommerceMarketingManager.jpg";
// import ECommerceMerchandiser from "../../../assets/ECommerceMerchandiser.jpg";
// import ECommerceOperationsManager from "../../../assets/ECommerceOperationsManager.jpg";
// import ECommercePlatformManager from "../../../assets/ECommercePlatformManager.jpg";
// import ECommerceProductManager from "../../../assets/ECommerceProductManager.jpg";
// import ECommerceSalesManager from "../../../assets/ECommerceSalesManager.jpg";
// import ECommerceSEOSpecialist from "../../../assets/ECommerceSEOSpecialist.jpg";
// import ECommerceSocialMediaManager from "../../../assets/ECommerceSocialMediaManager.jpg";
// import ECommerceSpecialist from "../../../assets/ECommerceSpecialist.jpg";
// import ECommerceUXDesigner from "../../../assets/ECommerceUXDesigner.jpg";
// import ECommerceWebDeveloper from "../../../assets/ECommerceWebDeveloper.jpg";

const roles = [
    { title: "E-commerce Analyst", image: ECommerceAnalyst, link: "https://en.wikipedia.org/wiki/E-commerce_Analyst" },
    { title: "E-commerce Business Development Manager", image: ECommerceBusinessDevManager, link: "https://en.wikipedia.org/wiki/Business_development" },
    { title: "E-commerce Content Writer", image: ECommerceContentWriter, link: "https://en.wikipedia.org/wiki/Content_writer" },
    { title: "E-commerce User Experience (UX) Designer", image: ECommerceUXDesigner, link: "https://en.wikipedia.org/wiki/User_experience_design" },
    { title: "E-commerce Web Developer", image: ECommerceWebDeveloper, link: "https://en.wikipedia.org/wiki/Web_development" },
    { title: "E-commerce Director", image: ECommerceDirector, link: "https://en.wikipedia.org/wiki/Director_(business)" },
    { title: "E-commerce Sales Manager", image: ECommerceSalesManager, link: "https://en.wikipedia.org/wiki/Sales_management" },
    { title: "E-commerce Growth Hacker", image: ECommerceGrowthHacker, link: "https://en.wikipedia.org/wiki/Growth_hacking" },
    { title: "& many more", image: manyMore, link: "https://www.google.com/search?q=E-commerce+Careers" },

    // { title: "E-commerce Content Writer", image: ECommerceContentWriter },
    // { title: "E-commerce Customer Experience Manager", image: ECommerceCustomerExperienceManager },
    // { title: "E-commerce Customer Service Representative", image: ECommerceCustomerServiceRep },
    // { title: "E-commerce Digital Marketing Specialist", image: ECommerceDigitalMarketingSpecialist },
    // { title: "E-commerce Director", image: ECommerceDirector },
    // { title: "E-commerce Fulfillment Manager", image: ECommerceFulfillmentManager },
    // { title: "E-commerce Growth Hacker", image: ECommerceGrowthHacker },
    // { title: "E-commerce Logistics Coordinator", image: ECommerceLogisticsCoordinator },
    // { title: "E-commerce Manager", image: ECommerceManager },
    // { title: "E-commerce Marketing Manager", image: ECommerceMarketingManager },
    // { title: "E-commerce Merchandiser", image: ECommerceMerchandiser },
    // { title: "E-commerce Operations Manager", image: ECommerceOperationsManager },
    // { title: "E-commerce Platform Manager", image: ECommercePlatformManager },
    // { title: "E-commerce Product Manager", image: ECommerceProductManager },
    // { title: "E-commerce Sales Manager", image: ECommerceSalesManager },
    // { title: "E-commerce SEO Specialist", image: ECommerceSEOSpecialist },
    // { title: "E-commerce Social Media Manager", image: ECommerceSocialMediaManager },
    // { title: "E-commerce Specialist", image: ECommerceSpecialist },
    // { title: "E-commerce User Experience (UX) Designer", image: ECommerceUXDesigner },
    // { title: "E-commerce Web Developer", image: ECommerceWebDeveloper },
    // { title: "& many more", image: manyMore, link: "https://www.google.com/search?q=E-comm+Careers" },
];

const ECommerceMgm = () => {
    return (
      <div className="container">
        <h1>E-commerce Careers</h1>
        <p className="description">
          Dive into the dynamic world of E-commerce! From marketing and data analysis to customer experience and logistics, explore various roles that drive the digital marketplace forward.
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
  
  export default ECommerceMgm;
  