import React from 'react';
// import "./TravelTourismMgm.css";

// Import images
import AdventureSports from "../../assets/AdventureSports.jpg";
import AdventureTourism from "../../assets/AdventureTourism.jpg";
import AirHostessTraining from "../../assets/AirHostessTraining.jpg";
import AirlineCabinCrew from "../../assets/AirlineCabinCrew.jpg";
import FitnessTrainer from "../../assets/FitnessTrainer.jpg";
import MuseumCurator from "../../assets/MuseumCurator.jpg";
import MuseumDirector from "../../assets/MuseumDirector.jpg";
import PersonalTrainer from "../../assets/PersonalTrainer.jpg";
import manymore from "../../assets/manymore.jpg";

const careers = [
  { title: "Adventure Sports", image: AdventureSports, link: "https://en.wikipedia.org/wiki/Adventure_sport" },
  { title: "Adventure Tourism", image: AdventureTourism, link: "https://en.wikipedia.org/wiki/Adventure_tourism" },
  { title: "Air Hostess Training", image: AirHostessTraining, link: "https://en.wikipedia.org/wiki/Flight_attendant#Training" },
  { title: "Airline Cabin Crew", image: AirlineCabinCrew, link: "https://en.wikipedia.org/wiki/Flight_attendant" },
  { title: "Fitness Trainer", image: FitnessTrainer, link: "https://en.wikipedia.org/wiki/Personal_trainer" },
  { title: "Museum Curator", image: MuseumCurator, link: "https://en.wikipedia.org/wiki/Curator" },
  { title: "Museum Director", image: MuseumDirector, link: "https://en.wikipedia.org/wiki/Museum_director" },
  { title: "Personal Trainer", image: PersonalTrainer, link: "https://en.wikipedia.org/wiki/Personal_trainer" },
  { 
    title: "& many more", 
    image: manymore, 
    link: "https://www.google.com/search?q=Travel+and+Tourism+careers"
  },
];

const TravelTourismMgm = () => {
  return (
    <div className="container">
      <h1>Travel and Tourism Careers</h1>
      <p className="description">
        Explore exciting career opportunities in the travel, tourism, and fitness industries. Whether you're guiding tourists on an adventure or working with clients on physical fitness, these roles are an amazing fit for adventurous and energetic individuals!
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

export default TravelTourismMgm;
