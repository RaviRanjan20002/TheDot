
import "./AdministrationManagement.css";
// Import images
import Administration from "../../../assets/admnistrationinside.jpg";
import Business from "../../../assets/businessinside.jpg";
import Finance from "../../../assets/financeinside.jpg";
import Operations from "../../../assets/operationsinside.jpg";
import HR from "../../../assets/hrinside.jpg";
import IT from "../../../assets/itinside.jpg";
import Logistics from "../../../assets/logisticsinside.jpg";
import Marketing from "../../../assets/marketinginside.jpg";
import ProjectManagement from "../../../assets/projectinside.jpg";
import Sales from "../../../assets/salesinside.jpg";

const roles = [
    { title: "Administrative Assistant", image: Administration },
    { title: "Administrative Manager", image: Administration },
    { title: "Administrative Services Manager", image: Administration },
    { title: "Business Administrator", image: Business },
    { title: "Business Analyst", image: Business },
    { title: "Business Development Manager", image: Business },
    { title: "Business Operations Manager", image: Business },
    { title: "Chief Executive Officer (CEO)", image: Finance },
    { title: "Chief Financial Officer (CFO)", image: Finance },
    { title: "Chief Operating Officer (COO)", image: Finance },
    { title: "Corporate Communication Director", image: Marketing },
    { title: "Corporate Trainer", image: Marketing },
    { title: "Customer Service Manager", image: Operations },
    { title: "Executive Assistant", image: Administration },
    { title: "Facilities Manager", image: Operations },
    { title: "General Manager", image: Operations },
    { title: "Human Resources Manager", image: HR },
    { title: "IT Manager", image: IT },
    { title: "Logistics Manager", image: Logistics },
    { title: "Management Consultant", image: Business },
    { title: "Marketing Manager", image: Marketing },
    { title: "Office Manager", image: Administration },
    { title: "Operations Manager", image: Operations },
    { title: "Project Manager", image: ProjectManagement },
    { title: "Property Manager", image: Operations },
    { title: "Quality Assurance Manager", image: Operations },
    { title: "Recruitment Manager", image: HR },
    { title: "Regional Manager", image: Business },
    { title: "Risk Manager", image: Finance },
    { title: "Sales Manager", image: Sales },
    { title: "Supply Chain Manager", image: Logistics },
    { title: "Training and Development Manager", image: HR },
    { title: "Vice President of Operations", image: Operations },
    { title: "Warehouse Manager", image: Logistics }
];

const AdminManagment = () => {
    return (
        <div className="container">
            <h1>Administration & Management Careers</h1>
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