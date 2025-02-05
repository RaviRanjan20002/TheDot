import React from 'react';
import "./RoboticsAutomationMgm.css";

// Import images (replace with actual paths)
import AutomatedProductDesignEngineer from "../../../assets/AutomatedProductDesignEngineer.jpg";
import CyborgDesigner from "../../../assets/CyborgDesigner.jpg";
import FlexibleManufacturingEngineer from "../../../assets/FlexibleManufacturingEngineer.jpg";
import MechatronicsEngineer from "../../../assets/MechatronicsEngineer.jpg";
import RobotDesignEngineer from "../../../assets/RobotDesignEngineer.jpg";
import RoboticsAvatarDesigner from "../../../assets/RoboticorHolographicAvatarDesigner.jpg";
import RoboticsAccountManager from "../../../assets/RoboticsAccountManager.jpg";
import RoboticsEngineer from "../../../assets/RoboticsEngineer.jpg";
import manymore from "../../../assets/manymore.jpg";

// import RoboticsServiceTechnician from "../../../assets/RoboticsServiceTechnician.jpg";
// import RoboticsSystemEngineer from "../../../assets/RoboticsSystemEngineer.jpg";
// import RoboticsTechnician from "../../../assets/RoboticsTechnician.jpg";
// import SalesEngineer from "../../../assets/SalesEngineer.jpg";
// import SeniorRoboticsSpecialist from "../../../assets/SeniorRoboticsSpecialist.jpg";
// import SoftwareDeveloper from "../../../assets/SoftwareDeveloper.jpg";
// import VLSIEngineer from "../../../assets/VLSIEngineer.jpg";

const roles = [
  { title: "Automated Product Design Engineer", image: AutomatedProductDesignEngineer },
  { title: "Cyborg Designer", image: CyborgDesigner },
  { title: "Flexible Manufacturing Engineer", image: FlexibleManufacturingEngineer },
  { title: "Mechatronics Engineer", image: MechatronicsEngineer },
  { title: "Robot Design Engineer", image: RobotDesignEngineer },
  { title: "Robotic or Holographic Avatar Designer", image: RoboticsAvatarDesigner },
  { title: "Robotics Account Manager", image: RoboticsAccountManager },
  { title: "Robotics Engineer", image: RoboticsEngineer },
  { title: "& many more", image: manymore, link: "https://www.google.com/search?q=Robotics+and+Automation+Careers" }
];

const RoboticsAutomationMgm = () => {
  return (
    <div className="container">
      <h1>Robotics and Automation Careers</h1>
      <p className="roboticsdescription">
        Robotics and Automation are transforming industries, integrating advanced technologies to improve productivity, safety, and efficiency in diverse sectors. Explore the many roles that help shape the future of robotics!
      </p>

      <h3 className="roboticssubtitle">Click below to explore any of the following career(s)</h3>

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

export default RoboticsAutomationMgm;
