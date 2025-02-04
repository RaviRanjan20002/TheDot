import React from 'react';
import "./SportsCreationMgm.css";

// Import images (replace with actual paths)
import AdventureSportsGuide from "../../../assets/AdventureSportsGuide.jpg";
import AthleticDirector from "../../../assets/AthleticDirector.jpg";
import AthleticTrainer from "../../../assets/AthleticTrainer.jpg";
import EsportsPlayer from "../../../assets/EsportsPlayer.jpg";
// import EnduranceCoach from "../../../assets/EnduranceCoach.jpg";
// import EquipmentManager from "../../../assets/EquipmentManager.jpg";
// import ExercisePhysiologist from "../../../assets/ExercisePhysiologist.jpg";
// import FitnessTrainer from "../../../assets/FitnessTrainer.jpg";
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
  { title: "Adventure Sports Guide", image: AdventureSportsGuide },
  { title: "Athletic Director", image: AthleticDirector },
  { title: "Athletic Trainer", image: AthleticTrainer },
  { title: "E-sports Player", image: EsportsPlayer },
//   { title: "Endurance Coach", image: EnduranceCoach },
//   { title: "Equipment Manager", image: EquipmentManager },
//   { title: "Exercise Physiologist", image: ExercisePhysiologist },
//   { title: "Fitness Trainer", image: FitnessTrainer },
//   { title: "Parkour Coach", image: ParkourCoach },
//   { title: "Performance Coach", image: PerformanceCoach },
//   { title: "Personal Trainer", image: PersonalTrainer },
//   { title: "Physical Education Teacher", image: PhysicalEducationTeacher },
//   { title: "Physical Therapist", image: PhysicalTherapist },
//   { title: "Professional Athlete", image: ProfessionalAthlete },
//   { title: "Recreation Coordinator", image: RecreationCoordinator },
//   { title: "Recreational Therapist", image: RecreationalTherapist },
//   { title: "Referee/Umpire", image: RefereeUmpire },
//   { title: "Scout", image: Scout },
//   { title: "Sports Agent", image: SportsAgent },
//   { title: "Sports Analyst", image: SportsAnalyst },
//   { title: "Sports Broadcaster", image: SportsBroadcaster },
//   { title: "Sports Coach", image: SportsCoach },
//   { title: "Sports Commentator", image: SportsCommentator },
//   { title: "Sports Development Officer", image: SportsDevelopmentOfficer },
//   { title: "Sports Event Coordinator", image: SportsEventCoordinator },
//   { title: "Sports Event Manager", image: SportsEventManager },
//   { title: "Sports Facility Manager", image: SportsFacilityManager },
//   { title: "Sports Management Consultant", image: SportsManagementConsultant },
//   { title: "Sports Marketing Manager", image: SportsMarketingManager },
//   { title: "Sports Medicine Physician", image: SportsMedicinePhysician },
//   { title: "Sports Nutritionist", image: SportsNutritionist },
//   { title: "Sports Official", image: SportsOfficial },
//   { title: "Sports Photographer", image: SportsPhotographer },
//   { title: "Sports Psychologist", image: SportsPsychologist },
//   { title: "Sports Public Relations Specialist", image: SportsPublicRelationsSpecialist },
//   { title: "Sports Statistician", image: SportsStatistician },
//   { title: "Strength and Conditioning Coach", image: StrengthAndConditioningCoach },
//   { title: "Yoga Instructor", image: YogaInstructor }
];

const SportsCreationMgm = () => {
  return (
    <div className="container">
      <h1>Sports and Creation Careers</h1>
      <p className="sportscreationdescription">
        Explore the dynamic and rewarding careers in the sports and recreation industry. Whether you're coaching athletes or managing events, these roles are pivotal in shaping the world of sports!
      </p>

      <h3 className="sportscreationsubtitle">Click below to explore any of the following career(s)</h3>

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

export default SportsCreationMgm;
