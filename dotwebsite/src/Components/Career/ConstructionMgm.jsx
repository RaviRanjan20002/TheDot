import React from 'react';
// import "./ConstructionMgm.css";

// Import images (Make sure to replace these with actual image paths)
import DPrintingTechnician from "../../assets/DPrintingTechnician.jpg";
import Architect from "../../assets/Architectcc.jpg";
import Builder from "../../assets/Builder.jpg";
import Cartographer from "../../assets/Cartographer.jpg";
import ContractsManager from "../../assets/ContractsManager.jpg";
import FieldEngineer from "../../assets/FieldEngineer.jpg";
import TownPlanner from "../../assets/TownPlanner.jpg";
import UrbanFarmer from "../../assets/UrbanFarmer.jpg";
import manymore from "../../assets/manymore.jpg";
// import ArchitecturalAssistant from "../../../assets/ArchitecturalAssistant.jpg";
// import ArchitecturalTechnician from "../../../assets/ArchitecturalTechnician.jpg";
// import BuildingInspector from "../../../assets/BuildingInspector.jpg";
// import BuildingSurveyor from "../../../assets/BuildingSurveyor.jpg";
// import BuildingTrades from "../../../assets/BuildingTrades.jpg";
// import BusinessInformationManagementSpecialist from "../../../assets/BusinessInformationManagementSpecialist.jpg";
// import CADTechnician from "../../../assets/CADTechnician.jpg";
// import Carpenter from "../../../assets/Carpenter.jpg";
// import CommercialManager from "../../../assets/CommercialManager.jpg";
// import ConstructionEngineer from "../../../assets/ConstructionEngineer.jpg";
// import ConstructionEquipmentOperator from "../../../assets/ConstructionEquipmentOperator.jpg";
// import ConstructionManager from "../../../assets/ConstructionManager.jpg";
// import ContractAdministrator from "../../../assets/ContractAdministrator.jpg";
// import DesignSpecialist from "../../../assets/DesignSpecialist.jpg";
// import Estimator from "../../../assets/Estimator.jpg";
// import GamingIndustry from "../../../assets/GamingIndustry.jpg";
// import GeneralContractor from "../../../assets/GeneralContractor.jpg";
// import Glazier from "../../../assets/Glazier.jpg";
// import GreenBuildingConsultant from "../../../assets/GreenBuildingConsultant.jpg";
// import HeavyEquipmentOperator from "../../../assets/HeavyEquipmentOperator.jpg";
// import HVACTechnician from "../../../assets/HVACTechnician.jpg";
// import LandfillWormOperator from "../../../assets/LandfillWormOperator.jpg";
// import LandscapeDesigner from "../../../assets/LandscapeDesigner.jpg";
// import Mason from "../../../assets/Mason.jpg";
// import Painter from "../../../assets/Painter.jpg";
// import Plumber from "../../../assets/Plumber.jpg";
// import ProjectArchitect from "../../../assets/ProjectArchitect.jpg";
// import ProjectManager from "../../../assets/ProjectManager.jpg";
// import ProjectSurveyor from "../../../assets/ProjectSurveyor.jpg";
// import QuantitySurveyor from "../../../assets/QuantitySurveyor.jpg";
// import Roofer from "../../../assets/Roofer.jpg";
// import SiteEngineer from "../../../assets/SiteEngineer.jpg";
// import SiteOperative from "../../../assets/SiteOperative.jpg";
// import SmartBuildingTechnician from "../../../assets/SmartBuildingTechnician.jpg";
// import SolarEnergyTechnician from "../../../assets/SolarEnergyTechnician.jpg";
// import SolarPanelInstaller from "../../../assets/SolarPanelInstaller.jpg";
// import SolarPhotovoltaicInstaller from "../../../assets/SolarPhotovoltaicInstaller.jpg";
// import StructuralEngineer from "../../../assets/StructuralEngineer.jpg";
// import Surveyor from "../../../assets/Surveyor.jpg";
// import TechnicalArchitect from "../../../assets/TechnicalArchitect.jpg";
// import TreehouseBuilder from "../../../assets/TreehouseBuilder.jpg";
// import Welder from "../../../assets/Welder.jpg";
// import WindEnergyTechnician from "../../../assets/WindEnergyTechnician.jpg";


const roles = [
    { title: "3D-Printing Technician", image: DPrintingTechnician, link: "https://en.wikipedia.org/wiki/3D_printing" },
    { title: "Architect", image: Architect, link: "https://en.wikipedia.org/wiki/Architect" },
    { title: "Builder", image: Builder, link: "https://en.wikipedia.org/wiki/Builder" },
    { title: "Cartographer", image: Cartographer, link: "https://en.wikipedia.org/wiki/Cartography" },
    { title: "Contracts Manager", image: ContractsManager, link: "https://en.wikipedia.org/wiki/Contract_management" },
    { title: "Field Engineer", image: FieldEngineer, link: "https://en.wikipedia.org/wiki/Field_engineer" },
    { title: "Town Planner", image: TownPlanner, link: "https://en.wikipedia.org/wiki/Urban_planner" },
    { title: "Urban Farmer", image: UrbanFarmer, link: "https://en.wikipedia.org/wiki/Urban_agriculture" },
    {
        title: "& many more",
        image: manymore,
        link: "https://www.google.com/search?q=Construction+%26+Skilled+Trades+Careers&sca_esv=664f7e6c30f8a07c&rlz=1C1VDKB_enIN1133IN1133&sxsrf=AHTn8zo4wiQWduOtXnWyO-KBtsK0_Mczxw%3A1738732044746&ei=DPKiZ-qgLdKgnesPn4LW8Qo&ved=0ahUKEwjq1ovP4auLAxVSUGcHHR-BNa4Q4dUDCBA&uact=5&oq=Construction+%26+Skilled+Trades+Careers&gs_lp=Egxnd3Mtd2l6LXNlcnAiJUNvbnN0cnVjdGlvbiAmIFNraWxsZWQgVHJhZGVzIENhcmVlcnMyBhAAGBYYHjIGEAAYFhgeMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTIIEAAYogQYiQUyBRAAGO8FMggQABiiBBiJBTIFEAAY7wVI1wdQAFgAcAB4AZABAJgB6wGgAesBqgEDMi0xuAEDyAEA-AEC-AEBmAIBoAL0AZgDAJIHAzItMaAH_wc&sclient=gws-wiz-serp"
    },
    // { title: "Architectural Assistant", image: ArchitecturalAssistant },
    // { title: "Architectural Technician", image: ArchitecturalTechnician },
    // { title: "Building Inspector", image: BuildingInspector },
    // { title: "Building Surveyor", image: BuildingSurveyor },
    // { title: "Building Trades", image: BuildingTrades },
    // { title: "Business Information Management Specialist", image: BusinessInformationManagementSpecialist },
    // { title: "CAD Technician", image: CADTechnician },
    // { title: "Carpenter", image: Carpenter },
    // { title: "Commercial Manager", image: CommercialManager },
    // { title: "Construction Engineer", image: ConstructionEngineer },
    // { title: "Construction Equipment Operator", image: ConstructionEquipmentOperator },
    // { title: "Construction Manager", image: ConstructionManager },
    // { title: "Contract Administrator", image: ContractAdministrator },
    // { title: "Design Specialist", image: DesignSpecialist },
    // { title: "Estimator", image: Estimator },
    // { title: "Gaming Industry", image: GamingIndustry },
    // { title: "General Contractor", image: GeneralContractor },
    // { title: "Glazier", image: Glazier },
    // { title: "Green Building Consultant", image: GreenBuildingConsultant },
    // { title: "Heavy Equipment Operator", image: HeavyEquipmentOperator },
    // { title: "HVAC Technician", image: HVACTechnician },
    // { title: "Landfill Worm Operator", image: LandfillWormOperator },
    // { title: "Landscape Designer", image: LandscapeDesigner },
    // { title: "Mason", image: Mason },
    // { title: "Painter", image: Painter },
    // { title: "Plumber", image: Plumber },
    // { title: "Project Architect", image: ProjectArchitect },
    // { title: "Project Manager", image: ProjectManager },
    // { title: "Project Surveyor", image: ProjectSurveyor },
    // { title: "Quantity Surveyor", image: QuantitySurveyor },
    // { title: "Roofer", image: Roofer },
    // { title: "Site Engineer", image: SiteEngineer },
    // { title: "Site Operative", image: SiteOperative },
    // { title: "Smart-Building Technician", image: SmartBuildingTechnician },
    // { title: "Solar Energy Technician", image: SolarEnergyTechnician },
    // { title: "Solar Panel Installer", image: SolarPanelInstaller },
    // { title: "Solar Photovoltaic Installer", image: SolarPhotovoltaicInstaller },
    // { title: "Structural Engineer", image: StructuralEngineer },
    // { title: "Surveyor", image: Surveyor },
    // { title: "Technical Architect", image: TechnicalArchitect },
    // { title: "Treehouse Builder", image: TreehouseBuilder },
    // { title: "Welder", image: Welder },
    // { title: "Wind Energy Technician", image: WindEnergyTechnician },
    
];

const ConstructionMgm = () => {
    return (
        <div className="container">
            <h1>Construction & Skilled Trades Careers</h1>
            <p className="description">
                Explore a wide range of careers in construction and skilled trades, from technical roles in engineering and design to hands-on building and planning professions. These roles are essential to developing infrastructure and advancing sustainable practices.
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

export default ConstructionMgm;
