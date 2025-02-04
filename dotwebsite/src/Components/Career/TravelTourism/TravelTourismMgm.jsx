import React from 'react';
import "./TravelTourismMgm.css";

// Import images (replace with actual paths)
import AdventureSports from "../../../assets/AdventureSports.jpg";
import AdventureTourism from "../../../assets/AdventureTourism.jpg";
import AirHostessTraining from "../../../assets/AirHostessTraining.jpg";
import AirlineCabinCrew from "../../../assets/AirlineCabinCrew.jpg";
// import FitnessTrainer from "../../../assets/FitnessTrainer.jpg";
// import MuseumCurator from "../../../assets/MuseumCurator.jpg";
// import MuseumDirector from "../../../assets/MuseumDirector.jpg";
// import PersonalTrainer from "../../../assets/PersonalTrainer.jpg";
// import ScubaDiving from "../../../assets/ScubaDiving.jpg";
// import SpaceTourismGuide from "../../../assets/SpaceTourismGuide.jpg";
// import SportsPhysicalFitness from "../../../assets/SportsPhysicalFitness.jpg";
// import TravelAgent from "../../../assets/TravelAgent.jpg";
// import YogaInstructorTrainer from "../../../assets/YogaInstructorTrainer.jpg";
// import PhysicalEducation from "../../../assets/PhysicalEducation.jpg";

const roles = [
  { title: "Adventure Sports", image: AdventureSports },
  { title: "Adventure Tourism", image: AdventureTourism },
  { title: "Air Hostess Training", image: AirHostessTraining },
  { title: "Airline Cabin Crew", image: AirlineCabinCrew },
//   { title: "Fitness Trainer", image: FitnessTrainer },
//   { title: "Museum Curator", image: MuseumCurator },
//   { title: "Museum Director", image: MuseumDirector },
//   { title: "Personal Trainer", image: PersonalTrainer },
//   { title: "Scuba Diving", image: ScubaDiving },
//   { title: "Space Tourism Guide", image: SpaceTourismGuide },
//   { title: "Sports/Physical Fitness", image: SportsPhysicalFitness },
//   { title: "Travel Agent", image: TravelAgent },
//   { title: "Yoga Instructor/Trainer", image: YogaInstructorTrainer },
//   { title: "Physical Education", image: PhysicalEducation }
];

const TravelTourismMgm = () => {
  return (
    <div className="container">
      <h1>Travel and Tourism Careers</h1>
      <p className="traveltourismdescription">
        Explore exciting career opportunities in the travel, tourism, and fitness industries. Whether you're guiding tourists on an adventure or working with clients on physical fitness, these roles are an amazing fit for adventurous and energetic individuals!
      </p>

      <h3 className="traveltourismsubtitle">Click below to explore any of the following career(s)</h3>

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

export default TravelTourismMgm;
