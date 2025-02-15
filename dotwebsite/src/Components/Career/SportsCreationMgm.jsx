import React from 'react';

// Import images (replace with actual paths)
import AdventureSportsGuide from "../../assets/AdventureSportsGuide.jpg";
import AthleticDirector from "../../assets/AthleticDirector.jpg";
import AthleticTrainer from "../../assets/AthleticTrainer.jpg";
import EsportsPlayer from "../../assets/EsportsPlayer.jpg";
import EnduranceCoach from "../../assets/EnduranceCoach.jpg";
import EquipmentManager from "../../assets/EquipmentManager.jpg";
import ExercisePhysiologist from "../../assets/ExercisePhysiologist.jpg";
import FitnessTrainer from "../../assets/FitnessTrainer.jpg";
import manymore from "../../assets/manymore.jpg";

// import ParkourCoach from "../../../assets/ParkourCoach.jpg";
// import PerformanceCoach from "../../../assets/PerformanceCoach.jpg";
// import PersonalTrainer from "../../../assets/PersonalTrainer.jpg";
// import PhysicalEducationTeacher from "../../../assets/PhysicalEducationTeacher.jpg";
// import PhysicalTherapist from "../../../assets/PhysicalTherapist.jpg";
// import ProfessionalAthlete from "../../../assets/ProfessionalAthlete.jpg";
// import RecreationCoordinator from "../../../assets/RecreationCoordinator.jpg";
// import RecreationalTherapist from "../../../assets/RecreationalTherapist.jpg";
// import RefereeUmpire from "../../../assets/RefereeUmpire.jpg";
// import Scout from "../../../assets/Scout.jpg";
// import SportsAgent from "../../../assets/SportsAgent.jpg";
// import SportsAnalyst from "../../../assets/SportsAnalyst.jpg";
// import SportsBroadcaster from "../../../assets/SportsBroadcaster.jpg";
// import SportsCoach from "../../../assets/SportsCoach.jpg";
// import SportsCommentator from "../../../assets/SportsCommentator.jpg";
// import SportsDevelopmentOfficer from "../../../assets/SportsDevelopmentOfficer.jpg";
// import SportsEventCoordinator from "../../../assets/SportsEventCoordinator.jpg";
// import SportsEventManager from "../../../assets/SportsEventManager.jpg";
// import SportsFacilityManager from "../../../assets/SportsFacilityManager.jpg";
// import SportsManagementConsultant from "../../../assets/SportsManagementConsultant.jpg";
// import SportsMarketingManager from "../../../assets/SportsMarketingManager.jpg";
// import SportsMedicinePhysician from "../../../assets/SportsMedicinePhysician.jpg";
// import SportsNutritionist from "../../../assets/SportsNutritionist.jpg";
// import SportsOfficial from "../../../assets/SportsOfficial.jpg";
// import SportsPhotographer from "../../../assets/SportsPhotographer.jpg";
// import SportsPsychologist from "../../../assets/SportsPsychologist.jpg";
// import SportsPublicRelationsSpecialist from "../../../assets/SportsPublicRelationsSpecialist.jpg";
// import SportsStatistician from "../../../assets/SportsStatistician.jpg";
// import StrengthAndConditioningCoach from "../../../assets/StrengthAndConditioningCoach.jpg";
// import YogaInstructor from "../../../assets/YogaInstructor.jpg";

const roles = [
  { title: "Adventure Sports Guide", image: AdventureSportsGuide, link: "https://en.wikipedia.org/wiki/Adventure_sport" },
  { title: "Athletic Director", image: AthleticDirector, link: "https://en.wikipedia.org/wiki/Athletic_director" },
  { title: "Athletic Trainer", image: AthleticTrainer, link: "https://en.wikipedia.org/wiki/Athletic_trainer" },
  { title: "E-sports Player", image: EsportsPlayer, link: "https://en.wikipedia.org/wiki/Esports_player" },
  { title: "Endurance Coach", image: EnduranceCoach, link: "https://en.wikipedia.org/wiki/Coach_(sport)" },
  { title: "Equipment Manager", image: EquipmentManager, link: "https://en.wikipedia.org/wiki/Equipment_manager" },
  { title: "Exercise Physiologist", image: ExercisePhysiologist, link: "https://en.wikipedia.org/wiki/Exercise_physiology" },
  { title: "Fitness Trainer", image: FitnessTrainer, link: "https://en.wikipedia.org/wiki/Personal_trainer" },
  { title: "& many more", image: manymore, link: "https://www.google.com/search?q=Sports+%26+Recreation+Careers" },
];

const SportsCreationMgm = () => {
  return (
    <div className="container">
      <h1>Sports and Recreation Careers</h1>
      <p className="description">
        Explore exciting career opportunities in the sports and recreation industry. Whether you're coaching, training, or managing, these roles play a vital role in shaping the sports world!
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

export default SportsCreationMgm;
