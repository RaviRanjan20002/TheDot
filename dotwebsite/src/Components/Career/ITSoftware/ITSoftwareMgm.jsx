import React from 'react';
import "./ITSoftwareMgm.css";

// Import images (replace with actual paths)
import AppDeveloper from "../../../assets/AppDeveloper.jpg";
import AugmentedRealityDeveloper from "../../../assets/AugmentedRealityDeveloper.jpg";
import BlockchainDeveloper from "../../../assets/BlockchainDeveloper.jpg";
import BusinessDataIntelligenceSoftwareDeveloper from "../../../assets/BusinessDataIntelligenceSoftwareDeveloper.jpg";
import CloudArchitect from "../../../assets/CloudArchitect.jpg";
import SystemsAnalyst from "../../../assets/SystemsAnalyst.jpg";
import CADSpecialist from "../../../assets/CADSpecialist.jpg";
import ITSystemsManager from "../../../assets/ITSystemsManager.jpg";
import manymore from "../../../assets/manymore.jpg";
// import NetworkingSpecialist from "../../../assets/NetworkingSpecialist.jpg";
// import SystemsAnalyst from "../../../assets/SystemsAnalyst.jpg";
// import CybersecurityAnalyst from "../../../assets/CybersecurityAnalyst.jpg";
// import DatabaseManager from "../../../assets/DatabaseManager.jpg";
// import DevOpsEngineer from "../../../assets/DevOpsEngineer.jpg";
// import EthicalHacker from "../../../assets/EthicalHacker.jpg";
// import GamesDeveloper from "../../../assets/GamesDeveloper.jpg";
// import HealthInformationTechnician from "../../../assets/HealthInformationTechnician.jpg";
// import InfoSecurityAnalyst from "../../../assets/InfoSecurityAnalyst.jpg";
// import ITSystemsExecutive from "../../../assets/ITSystemsExecutive.jpg";
// import ITSecuritySpecialist from "../../../assets/ITSecuritySpecialist.jpg";
// import ITSupportExecutive from "../../../assets/ITSupportExecutive.jpg";
// import MobileAppDeveloper from "../../../assets/MobileAppDeveloper.jpg";
// import NanotechnologySpecialist from "../../../assets/NanotechnologySpecialist.jpg";
// import NetworkAdministrator from "../../../assets/NetworkAdministrator.jpg";
// import NetworkEngineer from "../../../assets/NetworkEngineer.jpg";
// import SoftwareAppsDeveloper from "../../../assets/SoftwareAppsDeveloper.jpg";
// import SoftwareEngineer from "../../../assets/SoftwareEngineer.jpg";
// import TechnologyManager from "../../../assets/TechnologyManager.jpg";
// import VirtualRealityDesigner from "../../../assets/VirtualRealityDesigner.jpg";
// import WebDesigner from "../../../assets/WebDesigner.jpg";
// import WebDeveloper from "../../../assets/WebDeveloper.jpg";

const roles = [
  { title: "App Developer", image: AppDeveloper },
  { title: "Augmented Reality Developer", image: AugmentedRealityDeveloper },
  { title: "Blockchain Developer", image: BlockchainDeveloper },
  { title: "Business Data Intelligence Software Developer", image: BusinessDataIntelligenceSoftwareDeveloper },
  { title: "Cloud Architect", image: CloudArchitect },
  { title: "Computer Systems Analyst", image: SystemsAnalyst },
  // { title: "Cloud Computing Specialist", image: CloudComputingSpecialist },
  { title: "Computer Aided Design (CAD) Specialist", image: CADSpecialist },
  { title: "Computer and IT Systems Manager", image: ITSystemsManager },
  { title: "& many more", image: manymore, link: "https://www.google.com/search?q=IT+%26+Software+Careers" },
  // { title: "Computer Networking Specialist", image: NetworkingSpecialist },
 
  // { title: "Cybersecurity Analyst", image: CybersecurityAnalyst },
  // { title: "Database Manager", image: DatabaseManager },
  // { title: "DevOps Engineer", image: DevOpsEngineer },
  // { title: "Ethical Hacker", image: EthicalHacker },
  // { title: "Games Developer", image: GamesDeveloper },
  // { title: "Health Information Technician", image: HealthInformationTechnician },
  // { title: "Information Security Analyst", image: InfoSecurityAnalyst },
  // { title: "Information Technology Systems (MIS) Executive", image: ITSystemsExecutive },
  // { title: "IT Security Specialist", image: ITSecuritySpecialist },
  // { title: "IT Support Executive", image: ITSupportExecutive },
  // { title: "Mobile Application Developer", image: MobileAppDeveloper },
  // { title: "Nanotechnology Specialist", image: NanotechnologySpecialist },
  // { title: "Network Administrator", image: NetworkAdministrator },
  // { title: "Network Engineer", image: NetworkEngineer },
  // { title: "Software Applications Developer", image: SoftwareAppsDeveloper },
  // { title: "Software Engineer", image: SoftwareEngineer },
  // { title: "Technology Manager", image: TechnologyManager },
  // { title: "Virtual Reality Designer", image: VirtualRealityDesigner },
  // { title: "Web Designer", image: WebDesigner },
  // { title: "Web Developer", image: WebDeveloper }
];

const ITSoftwareMgm = () => {
  return (
    <div className="container">
      <h1>IT and Software Careers</h1>
      <p className="itswdescription">
        Explore dynamic career opportunities in the IT and software development industry. Whether you're designing apps, building cloud solutions, or securing systems, these roles are perfect for tech enthusiasts looking to make an impact!
      </p>

      <h3 className="itswsubtitle">Click below to explore any of the following career(s)</h3>

      <div className="grid">
        {roles.map((role, index) => (
          <div key={index} className="card">
            <img src={role.image} alt={role.title} />
            <h2>{role.title}</h2>
            <a
              href={role.link || `https://www.google.com/search?q=${encodeURIComponent(role.title)}+Career`}
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

export default ITSoftwareMgm;
