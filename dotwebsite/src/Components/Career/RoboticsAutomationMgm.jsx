import React from 'react';


// Import images (replace with actual paths)
import AutomatedProductDesignEngineer from "../../assets/AutomatedProductDesignEngineer.jpg";
import CyborgDesigner from "../../assets/CyborgDesigner.jpg";
import FlexibleManufacturingEngineer from "../../assets/FlexibleManufacturingEngineer.jpg";
import MechatronicsEngineer from "../../assets/MechatronicsEngineer.jpg";
import RobotDesignEngineer from "../../assets/RobotDesignEngineer.jpg";
import RoboticsAvatarDesigner from "../../assets/RoboticorHolographicAvatarDesigner.jpg";
import RoboticsAccountManager from "../../assets/RoboticsAccountManager.jpg";
import RoboticsEngineer from "../../assets/RoboticsEngineer.jpg";
import manymore from "../../assets/manymore.jpg";

// import RoboticsServiceTechnician from "../../../assets/RoboticsServiceTechnician.jpg";
// import RoboticsSystemEngineer from "../../../assets/RoboticsSystemEngineer.jpg";
// import RoboticsTechnician from "../../../assets/RoboticsTechnician.jpg";
// import SalesEngineer from "../../../assets/SalesEngineer.jpg";
// import SeniorRoboticsSpecialist from "../../../assets/SeniorRoboticsSpecialist.jpg";
// import SoftwareDeveloper from "../../../assets/SoftwareDeveloper.jpg";
// import VLSIEngineer from "../../../assets/VLSIEngineer.jpg";

const careers = [
  
    { 
      title: "Automated Product Design Engineer", 
      image: AutomatedProductDesignEngineer, 
      link: "https://en.wikipedia.org/wiki/Product_design" 
    },
    { 
      title: "Cyborg Designer", 
      image: CyborgDesigner, 
      link: "https://en.wikipedia.org/wiki/Cyborg" 
    },
    { 
      title: "Flexible Manufacturing Engineer", 
      image: FlexibleManufacturingEngineer, 
      link: "https://en.wikipedia.org/wiki/Flexible_manufacturing_system" 
    },
    { 
      title: "Mechatronics Engineer", 
      image: MechatronicsEngineer, 
      link: "https://en.wikipedia.org/wiki/Mechatronics" 
    },
    { 
      title: "Robot Design Engineer", 
      image: RobotDesignEngineer, 
      link: "https://en.wikipedia.org/wiki/Robot" 
    },
    { 
      title: "Robotic or Holographic Avatar Designer", 
      image: RoboticsAvatarDesigner, 
      link: "https://en.wikipedia.org/wiki/Avatar_(computing)" 
    },
    { 
      title: "Robotics Account Manager", 
      image: RoboticsAccountManager, 
      link: "https://en.wikipedia.org/wiki/Account_manager" 
    },
    { 
      title: "Robotics Engineer", 
      image: RoboticsEngineer, 
      link: "https://en.wikipedia.org/wiki/Robotics_engineering" 
    },
    
  { title: "& many more", image: manymore, link: "https://www.google.com/search?q=Robotics+and+Automation+Careers" }
];

const RoboticsAutomationMgm = () => {
  return (
    <div className="container">
      <h1>Robotics and Automation Careers</h1>
      <p className="description">
        Robotics and Automation are transforming industries, integrating advanced technologies to improve productivity, safety, and efficiency in diverse sectors. Explore the many roles that help shape the future of robotics!
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

export default RoboticsAutomationMgm;