import React from "react";
// import "./AdminManagment.css";

// Import images
import Administration from "../../assets/AdministrativeAssistant.jpg";
import AdministrativeManager from "../../assets/AdministrativeManager.jpg";
import AdministrativeServicesManager from "../../assets/AdministrativeServicesManager.jpg";
import Business from "../../assets/businessinside.jpg";
import BusinessAdministrator from "../../assets/BusinessAdministrator.jpg";
import BusinessDevelopmentManager from "../../assets/BusinessDevelopmentManager.jpg";
import BusinessOperationsManager from "../../assets/BusinessOperationsManager.jpg";
import Finance from "../../assets/financeinside.jpg";
import CFO from "../../assets/CFO.jpg";
import COO from "../../assets/COO.jpg";
import CorporateCommunicationDirector from "../../assets/CorporateCommunicationDirector.jpg";
import CustomerServiceManager from "../../assets/CustomerServiceManager.jpg";
import ExecutiveAssistant from "../../assets/ExecutiveAssistant.jpg";
import FacilitiesManager from "../../assets/FacilitiesManager.jpg";
import GeneralManager from "../../assets/GeneralManager.jpg";
import ManagementConsultant from "../../assets/ManagementConsultant.jpg";
import MarketingManager from "../../assets/MarketingManager.jpg";
import OfficeManager from "../../assets/OfficeManager.jpg";
import Operations from "../../assets/operationsinside.jpg";
import PropertyManager from "../../assets/PropertyManager.jpg";
import QualityAssuranceManager from "../../assets/QualityAssuranceManager.jpg";
import WarehouseManager from "../../assets/WarehouseManager.jpg";
import HR from "../../assets/hrinside.jpg";
import TrainingDevelopmentManager from "../../assets/TrainingDevelopmentManager.jpg";
import VPOperations from "../../assets/VPOperations.jpg";
import SupplyChainManager from "../../assets/SupplyChainManager.jpg";
import RegionalManager from "../../assets/RegionalManager.jpg";
import IT from "../../assets/itinside.jpg";
import Logistics from "../../assets/logisticsinside.jpg";
import Marketing from "../../assets/marketinginside.jpg";
import ProjectManagement from "../../assets/projectinside.jpg";
import Sales from "../../assets/salesinside.jpg";
import manymore from "../../assets/manymore.jpg";


const careers = [
    { title: "Administrative Assistant", image: Administration, link: "https://en.wikipedia.org/wiki/Administrative_assistant" },
    { title: "Administrative Manager", image: AdministrativeManager, link: "https://en.wikipedia.org/wiki/Administrative_manager" },
    { title: "Administrative Services Manager", image: AdministrativeServicesManager, link: "https://en.wikipedia.org/wiki/Administrative_services_manager" },
    { title: "Business Administrator", image: BusinessAdministrator, link: "https://en.wikipedia.org/wiki/Business_administrator" },
    { title: "Business Analyst", image: Business, link: "https://en.wikipedia.org/wiki/Business_analyst" },
    { title: "Business Development Manager", image: BusinessDevelopmentManager, link: "https://en.wikipedia.org/wiki/Business_development" },
    { title: "Business Operations Manager", image: BusinessOperationsManager, link: "https://en.wikipedia.org/wiki/Operations_management" },
    { title: "Chief Executive Officer (CEO)", image: Finance, link: "https://en.wikipedia.org/wiki/Chief_executive_officer" },
    { title: "Chief Financial Officer (CFO)", image: CFO, link: "https://en.wikipedia.org/wiki/Chief_financial_officer" },
    { title: "Chief Operating Officer (COO)", image: COO, link: "https://en.wikipedia.org/wiki/Chief_operating_officer" },
    { title: "Corporate Communication Director", image: CorporateCommunicationDirector, link: "https://en.wikipedia.org/wiki/Corporate_communication" },
    { title: "Corporate Trainer", image: Marketing, link: "https://en.wikipedia.org/wiki/Corporate_training" },
    { title: "Customer Service Manager", image: CustomerServiceManager, link: "https://en.wikipedia.org/wiki/Customer_service" },
    { title: "Executive Assistant", image: ExecutiveAssistant, link: "https://en.wikipedia.org/wiki/Executive_assistant" },
    { title: "Facilities Manager", image: FacilitiesManager, link: "https://en.wikipedia.org/wiki/Facility_management" },
    { title: "General Manager", image: GeneralManager, link: "https://en.wikipedia.org/wiki/General_manager" },
    { title: "Human Resources Manager", image: HR, link: "https://en.wikipedia.org/wiki/Human_resource_management" },
    { title: "IT Manager", image: IT, link: "https://en.wikipedia.org/wiki/IT_management" },
    { title: "Logistics Manager", image: Logistics, link: "https://en.wikipedia.org/wiki/Logistics_management" },
    { title: "Management Consultant", image: ManagementConsultant, link: "https://en.wikipedia.org/wiki/Management_consulting" },
    { title: "Marketing Manager", image: MarketingManager, link: "https://en.wikipedia.org/wiki/Marketing_management" },
    { title: "Office Manager", image: OfficeManager, link: "https://en.wikipedia.org/wiki/Office_management" },
    { title: "Operations Manager", image: Operations, link: "https://en.wikipedia.org/wiki/Operations_management" },
    { title: "Project Manager", image: ProjectManagement, link: "https://en.wikipedia.org/wiki/Project_management" },
    { title: "Property Manager", image: PropertyManager, link: "https://en.wikipedia.org/wiki/Property_management" },
    { title: "Quality Assurance Manager", image: QualityAssuranceManager, link: "https://en.wikipedia.org/wiki/Quality_management" },
    { title: "Recruitment Manager", image: HR, link: "https://en.wikipedia.org/wiki/Recruitment" },
    { title: "Regional Manager", image: RegionalManager, link: "https://en.wikipedia.org/wiki/Regional_manager" },
    { title: "Risk Manager", image: Finance, link: "https://en.wikipedia.org/wiki/Risk_management" },
    { title: "Sales Manager", image: Sales, link: "https://en.wikipedia.org/wiki/Sales_management" },
    { title: "Supply Chain Manager", image: SupplyChainManager, link: "https://en.wikipedia.org/wiki/Supply_chain_management" },
    { title: "Training and Development Manager", image: TrainingDevelopmentManager, link: "https://en.wikipedia.org/wiki/Training_and_development" },
    { title: "Vice President of Operations", image: VPOperations, link: "https://en.wikipedia.org/wiki/Vice_president" },
    { title: "Warehouse Manager", image: WarehouseManager, link: "https://en.wikipedia.org/wiki/Warehouse_management_system" },
    { title: "& many more", image: manymore, link: "https://www.google.com/search?q=Administration+careers" }
];

const AdminManagment = () => {
    return (
        <div className="container">
            <h1>Administration & Management Careers</h1>
            <p className="description">
                This field extends beyond traditional office roles to include trading, feasibility studies, food processing, marketing, and economics, offering diverse career opportunities.
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

export default AdminManagment;
