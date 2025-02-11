
// import "./AnimalCareFarmingMgm.css";

// Import images (replace with actual paths)
import AgriculturalEconomist from "../../assets/AgriculturalEconomist.jpg";
import AgriculturalEngineer from "../../assets/AgriculturalEngineer.jpg";
import AgriculturalScience from "../../assets/AgriculturalScience.jpg";
import AnimalCareWorker from "../../assets/AnimalCareWorker.jpg";
import AnimalTraining from "../../assets/AnimalTraining.jpg";
import DairyFarming from "../../assets/DairyFarming.jpg";
import DairyTechnology from "../../assets/DairyTechnology.jpg";
import FarmManager from "../../assets/FarmManager.jpg";
import manymore from "../../assets/manymore.jpg";

// import FisheryScience from "../../../assets/FisheryScience.jpg";
// import PetGrooming from "../../../assets/PetGrooming.jpg";
// import PoultryFarming from "../../../assets/PoultryFarming.jpg";
// import SugarTechnology from "../../../assets/SugarTechnology.jpg";
// import UrbanAgricultureSpecialist from "../../../assets/UrbanAgricultureSpecialist.jpg";
// import Veterinarian from "../../../assets/Veterinarian.jpg";
// import Zookeeper from "../../../assets/Zookeeper.jpg";
// import Zoologist from "../../../assets/Zoologist.jpg";

const roles = [
  { title: "Agricultural Economist", image: AgriculturalEconomist, link: "https://en.wikipedia.org/wiki/Agricultural_economics" },
  { title: "Agricultural Engineer", image: AgriculturalEngineer, link: "https://en.wikipedia.org/wiki/Agricultural_engineering" },
  { title: "Agricultural Science", image: AgriculturalScience, link: "https://en.wikipedia.org/wiki/Agricultural_science" },
  { title: "Animal Care Worker", image: AnimalCareWorker, link: "https://en.wikipedia.org/wiki/Animal_care" },
  { title: "Animal Training", image: AnimalTraining, link: "https://en.wikipedia.org/wiki/Animal_training" },
  { title: "Dairy Farming", image: DairyFarming, link: "https://en.wikipedia.org/wiki/Dairy_farming" },
  { title: "Dairy Technology", image: DairyTechnology, link: "https://en.wikipedia.org/wiki/Dairy_technology" },
  { title: "Farm Manager", image: FarmManager, link: "https://en.wikipedia.org/wiki/Farm_manager" },
  { title: "& many more", image: manymore, link: "https://www.google.com/search?q=Animal+Care+and+Farming+Careers" }
];

const AnimalCareFarmingMgm = () => {
  return (
    <div className="container">
      <h1>Animal Care and Farming Careers</h1>
      <p className="description">
        Discover rewarding careers in animal care and farming. Whether you are passionate about agriculture, veterinary science, or farm management, there are numerous opportunities for you!
      </p>
      
      <h3 className="subtitle">Click below to explore any of the following careers</h3>

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

export default AnimalCareFarmingMgm;
