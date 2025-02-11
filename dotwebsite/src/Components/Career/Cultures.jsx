import React from "react";
// import "./Cultures.css";

// Import images
import Archaeologist from "../../assets/Archaeologist.avif";
import Archivist from "../../assets/Archivist.avif";
import MuseumCurator from "../../assets/Museum Curator.avif";
import ArtHistorian from "../../assets/ArtHistorian.jpg";
import Conservationist from "../../assets/Conservationist.jpg";
import CulturalHeritageManager from "../../assets/CulturalHeritageManager.jpg";
import CulturalResourceManager from "../../assets/CulturalResourceManager.jpg";
import HeritageEducationSpecialist from "../../assets/HeritageEducationSpecialist.jpg";
import HeritageSiteManager from "../../assets/HeritageSiteManager.jpg";
import HistoricPreservationist from "../../assets/HistoricPreservationist.jpg";
import manymore from "../../assets/manymore.jpg";

const careers = [
  { title: "Archaeologist", image: Archaeologist, link: "https://en.wikipedia.org/wiki/Archaeology" },
  { title: "Archivist", image: Archivist, link: "https://en.wikipedia.org/wiki/Archivist" },
  { title: "Museum Curator", image: MuseumCurator, link: "https://en.wikipedia.org/wiki/Curator" },
  { title: "Art Historian", image: ArtHistorian, link: "https://en.wikipedia.org/wiki/Art_history" },
  { title: "Conservationist", image: Conservationist, link: "https://en.wikipedia.org/wiki/Conservation_(ethic)" },
  { title: "Cultural Heritage Manager", image: CulturalHeritageManager, link: "https://en.wikipedia.org/wiki/Cultural_heritage_management" },
  { title: "Cultural Resource Manager", image: CulturalResourceManager, link: "https://en.wikipedia.org/wiki/Cultural_resources" },
  { title: "Heritage Education Specialist", image: HeritageEducationSpecialist, link: "https://en.wikipedia.org/wiki/Heritage_education" },
  { title: "Heritage Site Manager", image: HeritageSiteManager, link: "https://en.wikipedia.org/wiki/World_Heritage_Site" },
  { title: "Historic Preservationist", image: HistoricPreservationist, link: "https://en.wikipedia.org/wiki/Historic_preservation" },
  { title: "& many more", image: manymore, link: "https://www.google.com/search?q=cultural+heritage+careers" }
];

const Cultures = () => {
  return (
    <div className="container">
      <h1>Cultural Heritage Management Careers</h1>
      <p className="description">
        Cultural heritage management (CHM) involves the conservation and protection of cultural heritage resources, drawing on fields such as archaeology, history, museum studies, and architecture. It plays a crucial role in preserving cultural identity and history for future generations.
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

export default Cultures;