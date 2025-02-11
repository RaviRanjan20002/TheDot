import React from 'react';

// Import images (replace with actual paths)
import Ecologist from "../../assets/Ecologist.jpg";
import EnergyConservation from "../../assets/EnergyConservation.jpg";
import EnvironmentalConsultant from "../../assets/EnvironmentalConsultant.jpg";
import EnvironmentalEngineering from "../../assets/EnvironmentalEngineering.jpg";
import Floriculture from "../../assets/Floriculture.jpg";
import ForestryWildlife from "../../assets/ForestryWildlife.jpg";
import HorticulturalWorker from "../../assets/HorticulturalWorker.jpg";
import LandscapeArchitect from "../../assets/LandscapeArchitect.jpg";
import WildlifeConservation from "../../assets/WildlifeConservation.jpg";
import manymore from "../../assets/manymore.jpg";

const careers = [
  { title: "Ecologist", image: Ecologist, link: "https://en.wikipedia.org/wiki/Ecology" },
  { title: "Energy Conservation", image: EnergyConservation, link: "https://en.wikipedia.org/wiki/Energy_conservation" },
  { title: "Environmental Consultant", image: EnvironmentalConsultant, link: "https://en.wikipedia.org/wiki/Environmental_consulting" },
  { title: "Environmental Engineering", image: EnvironmentalEngineering, link: "https://en.wikipedia.org/wiki/Environmental_engineering" },
  { title: "Floriculture", image: Floriculture, link: "https://en.wikipedia.org/wiki/Floriculture" },
  { title: "Forestry/Wildlife", image: ForestryWildlife, link: "https://en.wikipedia.org/wiki/Forestry" },
  { title: "Horticultural Worker", image: HorticulturalWorker, link: "https://en.wikipedia.org/wiki/Horticulture" },
  { title: "Landscape Architect", image: LandscapeArchitect, link: "https://en.wikipedia.org/wiki/Landscape_architecture" },
  { title: "Wildlife Conservation", image: WildlifeConservation, link: "https://en.wikipedia.org/wiki/Wildlife_conservation" },
  { 
    title: "& many more", 
    image: manymore, 
    link: "https://www.google.com/search?q=Environmental+Care+careers"
  },
];

const EnvironmentalCareMgm = () => {
  return (
    <div className="container">
      <h1>Environmental Care Careers</h1>
      <p className="description">
        Explore meaningful career opportunities in environmental care. Whether you are passionate about conserving wildlife, engineering sustainable solutions, or consulting on eco-friendly projects, there is a role for you in making a positive impact on our planet.
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

export default EnvironmentalCareMgm;