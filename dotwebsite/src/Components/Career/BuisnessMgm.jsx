
import React from "react";
// import "./BusinessMgm.css";

import AccountantImage from "../../assets/Accountant.jpg";
import AuditorImage from "../../assets/Auditor.jpg";
import BrandManagerImage from "../../assets/BrandManager.jpg";
import BusinessAnalystImage from "../../assets/BusinessAnalyst.jpg";
import EntrepreneurImage from "../../assets/Entrepreneur.jpg";
import InvestmentBankerImage from "../../assets/InvestmentBanker.jpg";
import ProductManagerImage from "../../assets/ProductManager.jpg";
import TaxAdvisorImage from "../../assets/TaxAdvisor.jpg";
import manymore from "../../assets/manymore.jpg";


const careers = [
    { title: "Accountant", image: AccountantImage, link: "https://en.wikipedia.org/wiki/Accountant" },
  { title: "Auditor", image: AuditorImage, link: "https://en.wikipedia.org/wiki/Auditor" },
  { title: "Brand Manager", image: BrandManagerImage, link: "https://en.wikipedia.org/wiki/Brand_manager" },
  { title: "Business Analyst", image: BusinessAnalystImage, link: "https://en.wikipedia.org/wiki/Business_analyst" },
  { title: "Entrepreneur", image: EntrepreneurImage, link: "https://en.wikipedia.org/wiki/Entrepreneur" },
  { title: "Investment Banker", image: InvestmentBankerImage, link: "https://en.wikipedia.org/wiki/Investment_banking" },
  { title: "Product Manager", image: ProductManagerImage, link: "https://en.wikipedia.org/wiki/Product_management" },
  { title: "Tax Advisor", image: TaxAdvisorImage, link: "https://en.wikipedia.org/wiki/Tax_advisor" },
    {
        title: "& many more",
        image: manymore,
        link: "https://www.google.com/search?q=Business+and+Finance+Careers"
    },

    //   { title: "Business Development Manager", image: BusinessDevelopmentManagerImage },
    //     { title: "Corporate Strategy Manager", image: CorporateStrategyManagerImage },
    //     { title: "Corporate Wellness Consultant", image: CorporateWellnessConsultantImage },
    //     { title: "E-commerce Specialist", image: ECommerceSpecialistImage },
    // { title: "Financial Analyst", image: FinancialAnalystImage },
    // { title: "Financial Planner", image: FinancialPlannerImage },
    // { title: "Fund Manager", image: FundManagerImage },
    // { title: "Human Resources Manager", image: HumanResourcesManagerImage },
    // { title: "Investor Relations Manager", image: InvestorRelationsManagerImage },
    // { title: "Management Consultant", image: ManagementConsultantImage },
    // { title: "Marketing Manager", image: MarketingManagerImage },
    // { title: "Operations Manager", image: OperationsManagerImage },
    // { title: "Procurement Specialist", image: ProcurementSpecialistImage },
    // { title: "Real Estate Agent", image: RealEstateAgentImage },
    // { title: "Risk Manager", image: RiskManagerImage },
    // { title: "Sales Manager", image: SalesManagerImage },
    // { title: "Social Media Influencer", image: SocialMediaInfluencerImage },
    // { title: "Sustainability Consultant", image: SustainabilityConsultantImage },
];

const BusinessMgm = () => {
    return (
        <div className="container">
            <h1>Business and Finance Careers</h1>
            <p className="description">
                The world of business and finance offers a wealth of exciting opportunities, spanning across areas like marketing, management, accounting, and more. Dive into these dynamic fields and discover the roles that drive success in today’s fast-paced corporate landscape!
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

export default BusinessMgm;

