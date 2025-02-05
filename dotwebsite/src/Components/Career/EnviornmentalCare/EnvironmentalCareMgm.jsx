import React from 'react';
import "./EnvironmentalCareMgm.css";

// Import images (replace with actual paths)
import Ecologist from "../../../assets/Ecologist.jpg";
import EnergyConservation from "../../../assets/EnergyConservation.jpg";
import EnvironmentalConsultant from "../../../assets/EnvironmentalConsultant.jpg";
import EnvironmentalEngineering from "../../../assets/EnvironmentalEngineering.jpg";
import Floriculture from "../../../assets/Floriculture.jpg";
import ForestryWildlife from "../../../assets/ForestryWildlife.jpg";
import HorticulturalWorker from "../../../assets/HorticulturalWorker.jpg";
import LandscapeArchitect from "../../../assets/LandscapeArchitect.jpg";
import WildlifeConservation from "../../../assets/WildlifeConservation.jpg";
import manymore from "../../../assets/manymore.jpg";

const roles = [
  { title: "Ecologist", image: Ecologist },
  { title: "Energy Conservation", image: EnergyConservation },
  { title: "Environmental Consultant", image: EnvironmentalConsultant },
  { title: "Environmental Engineering", image: EnvironmentalEngineering },
  { title: "Floriculture", image: Floriculture },
  { title: "Forestry/Wildlife", image: ForestryWildlife },
  { title: "Horticultural Worker", image: HorticulturalWorker },
  { title: "Landscape Architect", image: LandscapeArchitect },
  { title: "Wildlife Conservation", image: WildlifeConservation },
  { title: "& many more", image: manymore, link: "https://www.google.com/search?q=Environmental+Care&sca_esv=061cf45e01aae854&sxsrf=AHTn8zqctDaQI33XvPlqnvWMn2MSsX-Snw%3A1738753200037&ei=sESjZ7T7Aaid0-kPgcDzoAQ&ved=0ahUKEwi0k9y2sKyLAxWozjQHHQHgHEQQ4dUDCBA&uact=5&oq=Environmental+Care&gs_lp=Egxnd3Mtd2l6LXNlcnAiEkVudmlyb25tZW50YWwgQ2FyZTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyChAAGIAEGBQYhwIyChAAGIAEGBQYhwIyBRAAGIAESPcDUABYAHAAeAGQAQCYAcsBoAHLAaoBAzItMbgBA8gBAPgBAvgBAZgCAaAC0AGYAwCSBwMyLTGgB8kF&sclient=gws-wiz-serp" },
];

const EnvironmentalCareMgm = () => {
  return (
    <div className="container">
      <h1>Environmental Care Careers</h1>
      <p className="environmentaldescription">
        The Environmental Care industry offers a range of rewarding roles dedicated to preserving our planet's resources, wildlife, and ecosystems. Explore the key positions that help make a difference in the world!
      </p>

      <h3 className="environmentalsubtitle">Click below to explore any of the following career(s)</h3>

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

export default EnvironmentalCareMgm;
