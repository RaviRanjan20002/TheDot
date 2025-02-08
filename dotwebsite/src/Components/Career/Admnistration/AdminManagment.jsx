
import "./AdminManagment.css";


// Import images
import Administration from "../../../assets/AdministrativeAssistant.jpg";
import AdministrativeManager from "../../../assets/AdministrativeManager.jpg";
import AdministrativeServicesManager from "../../../assets/AdministrativeServicesManager.jpg";
import Business from "../../../assets/businessinside.jpg";
import BusinessAdmisitrator from "../../../assets/BusinessAdministrator.jpg";
import BusinessDevelopmentManager from "../../../assets/BusinessDevelopmentManager.jpg";
import BusinessOperationsManager from "../../../assets/BusinessOperationsManager.jpg";
import Finance from "../../../assets/financeinside.jpg";
import CFO from "../../../assets/CFO.jpg";
import COO from "../../../assets/COO.jpg";
import CorporateCommunicationDirector from "../../../assets/CorporateCommunicationDirector.jpg";
import CustomerServiceManager from "../../../assets/CustomerServiceManager.jpg";
import ExecutiveAssistant from "../../../assets/ExecutiveAssistant.jpg";
import FacilitiesManager from "../../../assets/FacilitiesManager.jpg";
import GeneralManager from "../../../assets/GeneralManager.jpg";
import ManagementConsultant from "../../../assets/ManagementConsultant.jpg";
import MarketingManager from "../../../assets/MarketingManager.jpg";
import OfficeManager from "../../../assets/OfficeManager.jpg";
import Operations from "../../../assets/operationsinside.jpg";
import PropertyManager from "../../../assets/PropertyManager.jpg";
import QualityAssuranceManager from "../../../assets/QualityAssuranceManager.jpg";
import WarehouseManager from "../../../assets/WarehouseManager.jpg";
import HR from "../../../assets/hrinside.jpg";
import TrainingDevelopmentManager from "../../../assets/TrainingDevelopmentManager.jpg";
import VPOperations from "../../../assets/VPOperations.jpg";
import SupplyChainManager from "../../../assets/SupplyChainManager.jpg";
import RegionalManager from "../../../assets/RegionalManager.jpg";
import IT from "../../../assets/itinside.jpg";
import Logistics from "../../../assets/logisticsinside.jpg";
import Marketing from "../../../assets/marketinginside.jpg";
import ProjectManagement from "../../../assets/projectinside.jpg";
import Sales from "../../../assets/salesinside.jpg";
import manymore from "../../../assets/manymore.jpg";

const roles = [
    { title: "Administrative Assistant", image: Administration },
    { title: "Administrative Manager", image: AdministrativeManager },
    { title: "Administrative Services Manager", image: AdministrativeServicesManager },
    { title: "Business Administrator", image: BusinessAdmisitrator },
    { title: "Business Analyst", image: Business },
    { title: "Business Development Manager", image: BusinessDevelopmentManager },
    { title: "Business Operations Manager", image: BusinessOperationsManager },
    { title: "Chief Executive Officer (CEO)", image: Finance },
    { title: "Chief Financial Officer (CFO)", image: CFO },
    { title: "Chief Operating Officer (COO)", image: COO },
    { title: "Corporate Communication Director", image: CorporateCommunicationDirector },
    { title: "Corporate Trainer", image: Marketing },
    { title: "Customer Service Manager", image: CustomerServiceManager },
    { title: "Executive Assistant", image: ExecutiveAssistant },
    { title: "Facilities Manager", image: FacilitiesManager },
    { title: "General Manager", image: GeneralManager },
    { title: "Human Resources Manager", image: HR },
    { title: "IT Manager", image: IT },
    { title: "Logistics Manager", image: Logistics },
    { title: "Management Consultant", image: ManagementConsultant },
    { title: "Marketing Manager", image: MarketingManager },
    { title: "Office Manager", image: OfficeManager },
    { title: "Operations Manager", image: Operations },
    { title: "Project Manager", image: ProjectManagement },
    { title: "Property Manager", image: PropertyManager },

    { title: "Quality Assurance Manager", image: QualityAssuranceManager },
    { title: "Recruitment Manager", image: HR },
    { title: "Regional Manager", image: RegionalManager },
    { title: "Risk Manager", image: Finance },
    { title: "Sales Manager", image: Sales },
    { title: "Supply Chain Manager", image: SupplyChainManager },
    { title: "Training and Development Manager", image: TrainingDevelopmentManager },
    { title: "Vice President of Operations", image: VPOperations },
    { title: "Warehouse Manager", image: WarehouseManager },
    {
        title: "& many more",
        image: manymore,
        path: "https://en.wikipedia.org/wiki/Travel_and_Tourism",
    },
];

const AdminManagment = () => {
    return (
        <div className="container">
            <h1>Administration & Management Careers</h1>
            <p className="admindescription">
                This field is simply not just about harvesting, crops, seeds, pesticides etc., but also delves into the aspects of trading, feasibility studies, food processing, marketing as well as economics.
            </p>
            {/* <p className="adminread-more">Read more</p> */}

            <h3 className="adminsubtitle">Click below to explore any of the following career(s)</h3>

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

export default AdminManagment;