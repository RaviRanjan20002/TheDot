import React from 'react';
import "./ArchitectureMgm.css";

// Import images
import ArchitectImage from "../../../assets/Architectinside.jpg";
import ArchitecturalDrafter from "../../../assets/ArchitecturalDrafter.jpg";
import ArchitecturalIllustrator from "../../../assets/ArchitecturalIllustrator.jpg";
import ArchitecturalTechnologist from "../../../assets/ArchitecturalTechnologist.jpg";
// import BIMSpecialist from "../../../assets/BIMSpecialist.jpg";
// import BuildingInspector from "../../../assets/BuildingInspector.jpg";
// import CADTechnician from "../../../assets/CADTechnician.jpg";
// import CommercialArchitect from "../../../assets/CommercialArchitect.jpg";
// import ConstructionEstimator from "../../../assets/ConstructionEstimator.jpg";
// import ConstructionManager from "../../../assets/ConstructionManager.jpg";
// import DesignArchitect from "../../../assets/DesignArchitect.jpg";
// import EnvironmentalDesigner from "../../../assets/EnvironmentalDesigner.jpg";
// import HistoricPreservationist from "../../../assets/HistoricPreservationist.jpg";
// import IndustrialDesigner from "../../../assets/IndustrialDesigner.jpg";
// import InteriorDesigner from "../../../assets/InteriorDesigner.jpg";
// import LandscapeArchitect from "../../../assets/LandscapeArchitect.jpg";
// import LightingDesigner from "../../../assets/LightingDesigner.jpg";
// import ProjectManager from "../../../assets/ProjectManager.jpg";
// import ResidentialArchitect from "../../../assets/ResidentialArchitect.jpg";
// import RestorationArchitect from "../../../assets/RestorationArchitect.jpg";
// import SitePlanner from "../../../assets/SitePlanner.jpg";
// import StructuralEngineer from "../../../assets/StructuralEngineer.jpg";
// import SustainableDesignConsultant from "../../../assets/SustainableDesignConsultant.jpg";
// import UrbanDesigner from "../../../assets/UrbanDesigner.jpg";
// import UrbanPlanner from "../../../assets/UrbanPlanner.jpg";

const roles = [
  { title: "Architect", image: ArchitectImage },
  { title: "Architectural Drafter", image: ArchitecturalDrafter },
  { title: "Architectural Illustrator", image: ArchitecturalIllustrator },
  { title: "Architectural Technologist", image: ArchitecturalTechnologist }
  // { title: "BIM (Building Information Modeling) Specialist", image: BIMSpecialist },
  // { title: "Building Inspector", image: BuildingInspector },
  // { title: "CAD Technician", image: CADTechnician },
  // { title: "Commercial Architect", image: CommercialArchitect },
  // { title: "Construction Estimator", image: ConstructionEstimator },
  // { title: "Construction Manager", image: ConstructionManager },
  // { title: "Design Architect", image: DesignArchitect },
  // { title: "Environmental Designer", image: EnvironmentalDesigner },
  // { title: "Historic Preservationist", image: HistoricPreservationist },
  // { title: "Industrial Designer", image: IndustrialDesigner },
  // { title: "Interior Designer", image: InteriorDesigner },
  // { title: "Landscape Architect", image: LandscapeArchitect },
  // { title: "Lighting Designer", image: LightingDesigner },
  // { title: "Project Manager", image: ProjectManager },
  // { title: "Residential Architect", image: ResidentialArchitect },
  // { title: "Restoration Architect", image: RestorationArchitect },
  // { title: "Site Planner", image: SitePlanner },
  // { title: "Structural Engineer", image: StructuralEngineer },
  // { title: "Sustainable Design Consultant", image: SustainableDesignConsultant },
  // { title: "Urban Designer", image: UrbanDesigner },
  // { title: "Urban Planner", image: UrbanPlanner }
];

const ArchitectureMgm = () => {
  return (
    <div className="container">
      <h1>Architecture Careers</h1>
      <p className="architecture-description">
        Architecture is a vast field that involves not only designing buildings but also understanding the technical aspects of construction, sustainability, and urban planning. Explore a wide variety of career options in this exciting industry.
      </p>
      <h3 className="architecture-subtitle">Click below to explore any of the following career(s)</h3>

      <div className="grid">
        {roles.map((role, index) => (
          <div key={index} className="card">
            <img src={role.image} alt={role.title} />
            <h2>{role.title}</h2>
            <a 
              href={`https://www.google.com/search?q=${encodeURIComponent(role.title)}+Career`} 
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

export default ArchitectureMgm;
