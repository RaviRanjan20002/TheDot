
import "./BusinessMgm.css";

import AccountantImage from "../../../assets/Accountant.jpg";
import AuditorImage from "../../../assets/Auditor.jpg";
import BrandManagerImage from "../../../assets/BrandManager.jpg";
import BusinessAnalystImage from "../../../assets/BusinessAnalyst.jpg";
// import BusinessDevelopmentManagerImage from "../../../assets/BusinessDevelopmentManager.jpg";
// import CorporateStrategyManagerImage from "../../../assets/CorporateStrategyManager.jpg";
// import CorporateWellnessConsultantImage from "../../../assets/CorporateWellnessConsultant.jpg";
// import ECommerceSpecialistImage from "../../../assets/ECommerceSpecialist.jpg";
// import EntrepreneurImage from "../../../assets/Entrepreneur.jpg";
// import FinancialAnalystImage from "../../../assets/FinancialAnalyst.jpg";
// import FinancialPlannerImage from "../../../assets/FinancialPlanner.jpg";
// import FundManagerImage from "../../../assets/FundManager.jpg";
// import HumanResourcesManagerImage from "../../../assets/HumanResourcesManager.jpg";
// import InvestmentBankerImage from "../../../assets/InvestmentBanker.jpg";
// import InvestorRelationsManagerImage from "../../../assets/InvestorRelationsManager.jpg";
// import ManagementConsultantImage from "../../../assets/ManagementConsultant.jpg";
// import MarketingManagerImage from "../../../assets/MarketingManager.jpg";
// import OperationsManagerImage from "../../../assets/OperationsManager.jpg";
// import ProcurementSpecialistImage from "../../../assets/ProcurementSpecialist.jpg";
// import ProductManagerImage from "../../../assets/ProductManager.jpg";
// import RealEstateAgentImage from "../../../assets/RealEstateAgent.jpg";
// import RiskManagerImage from "../../../assets/RiskManager.jpg";
// import SalesManagerImage from "../../../assets/SalesManager.jpg";
// import SocialMediaInfluencerImage from "../../../assets/SocialMediaInfluencer.jpg";
// import SustainabilityConsultantImage from "../../../assets/SustainabilityConsultant.jpg";
// import TaxAdvisorImage from "../../../assets/TaxAdvisor.jpg";


// Business roles (you might need to add images if you have them)
const roles = [
    { title: "Accountant", image: AccountantImage },
    { title: "Auditor", image: AuditorImage },
    { title: "Brand Manager", image: BrandManagerImage },
    { title: "Business Analyst", image: BusinessAnalystImage },
    // { title: "Business Development Manager", image: BusinessDevelopmentManagerImage },
    // { title: "Corporate Strategy Manager", image: CorporateStrategyManagerImage },
    // { title: "Corporate Wellness Consultant", image: CorporateWellnessConsultantImage },
    // { title: "E-commerce Specialist", image: ECommerceSpecialistImage },
    // { title: "Entrepreneur", image: EntrepreneurImage },
    // { title: "Financial Analyst", image: FinancialAnalystImage },
    // { title: "Financial Planner", image: FinancialPlannerImage },
    // { title: "Fund Manager", image: FundManagerImage },
    // { title: "Human Resources Manager", image: HumanResourcesManagerImage },
    // { title: "Investment Banker", image: InvestmentBankerImage },
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
    // { title: "Tax Advisor", image: TaxAdvisorImage }
];



const BusinessMgm = () => {
    return (
        <div className="container">
            <h1>Business and Finance Careers</h1>
            <p className="business-description">
                The world of business and finance offers a wealth of exciting opportunities, spanning across areas like marketing, management, accounting, and more. Dive into these dynamic fields and discover the roles that drive success in today’s fast-paced corporate landscape!
            </p>

            <h3 className="business-subtitle">Click below to explore any of the following career(s)</h3>

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

export default BusinessMgm;
