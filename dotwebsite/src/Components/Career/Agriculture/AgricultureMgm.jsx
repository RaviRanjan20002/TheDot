import "./AgricultureMgm.css";
import AgriculturalInspector from "../../../assets/AgriculturalInspector.jpg";
import AgriculturalScientist from "../../../assets/AgriculturalScientist.jpg";
import Agroecologist from "../../../assets/Agroecologist.jpg";
import AgroforestrySpecialist from "../../../assets/AgroforestrySpecialist.jpg";
import Agronomist from "../../../assets/Agronomist.png";
import AquacultureTechnician from "../../../assets/AquacultureTechnician.jpg";
import ConservationScientist from "../../../assets/ConservationScientist.jpg";
import EcologicalRestorationTechnician from "../../../assets/EcologicalRestorationTechnician.jpg";
import manymore from "../../../assets/manymore.jpg";
// import EnvironmentalConsultant from "../../../assets/EnvironmentalConsultant.png";
// import EnvironmentalEducator from "../../../assets/EnvironmentalEducator.png";
// import Farmer from "../../../assets/Farmer.png";
// import FisheryManager from "../../../assets/FisheryManager.png";
// import Forester from "../../../assets/Forester.png";
// import Horticulturist from "../../../assets/Horticulturist.png";
// import HydroponicsSpecialist from "../../../assets/HydroponicsSpecialist.png";
// import LandRestorationSpecialist from "../../../assets/LandRestorationSpecialist.png";
// import PermacultureDesigner from "../../../assets/PermacultureDesigner.png";
// import PlantPathologist from "../../../assets/PlantPathologist.png";
// import RanchManager from "../../../assets/RanchManager.png";
// import RenewableEnergyConsultant from "../../../assets/RenewableEnergyConsultant.png";
// import SoilScientist from "../../../assets/SoilScientist.png";
// import SustainableAgricultureSpecialist from "../../../assets/SustainableAgricultureSpecialist.png";
// import UrbanGardener from "../../../assets/UrbanGardener.png";
// import VeterinaryTechnician from "../../../assets/VeterinaryTechnician.png";
// import WildlifeConservationist from "../../../assets/WildlifeConservationist.png";



const careers = [
  {
    title: "Agricultural Inspector",
    image: AgriculturalInspector,
    path: "https://en.wikipedia.org/wiki/Agricultural_inspector",
  },
  {
    title: "Agricultural Scientist",
    image: AgriculturalScientist,
    path: "https://en.wikipedia.org/wiki/Agricultural_science",
  },
  {
    title: "Agroecologist",
    image: Agroecologist,
    path: "https://en.wikipedia.org/wiki/Agroecology",
  },
  {
    title: "Agroforestry Specialist",
    image: AgroforestrySpecialist,
    path: "https://en.wikipedia.org/wiki/Agroforestry",
  },
  {
    title: "Agronomist",
    image: Agronomist,
    path: "https://en.wikipedia.org/wiki/Agronomy",
  },
  {
    title: "Aquaculture Technician",
    image: AquacultureTechnician,
    path: "https://en.wikipedia.org/wiki/Aquaculture",
  },
  {
    title: "Conservation Scientist",
    image: ConservationScientist,
    path: "https://en.wikipedia.org/wiki/Conservation_scientist",
  },
  {
    title: "Ecological Restoration Technician",
    image: EcologicalRestorationTechnician,
    path: "https://en.wikipedia.org/wiki/Ecological_restoration",
  },
  { 
    title: "& many more", 
    image: manymore, 
    path: "https://en.wikipedia.org/wiki/Agriculture"
},
  // {
  //   title: "Environmental Consultant",
  //   image: EnvironmentalConsultant,
  //   path: "#",
  // },
  // {
  //   title: "Environmental Educator",
  //   image: EnvironmentalEducator,
  //   path: "#",
  // },
  // {
  //   title: "Farmer",
  //   image: Farmer,
  //   path: "#",
  // },
  // {
  //   title: "Fishery Manager",
  //   image: FisheryManager,
  //   path: "#",
  // },
  // {
  //   title: "Forester",
  //   image: Forester,
  //   path: "#",
  // },
  // {
  //   title: "Horticulturist",
  //   image: Horticulturist,
  //   path: "#",
  // },
  // {
  //   title: "Hydroponics Specialist",
  //   image: HydroponicsSpecialist,
  //   path: "#",
  // },
  // {
  //   title: "Land Restoration Specialist",
  //   image: LandRestorationSpecialist,
  //   path: "#",
  // },
  // {
  //   title: "Permaculture Designer",
  //   image: PermacultureDesigner,
  //   path: "#",
  // },
  // {
  //   title: "Plant Pathologist",
  //   image: PlantPathologist,
  //   path: "#",
  // },
  // {
  //   title: "Ranch Manager",
  //   image: RanchManager,
  //   path: "#",
  // },
  // {
  //   title: "Renewable Energy Consultant",
  //   image: RenewableEnergyConsultant,
  //   path: "#",
  // },
  // {
  //   title: "Soil Scientist",
  //   image: SoilScientist,
  //   path: "#",
  // },
  // {
  //   title: "Sustainable Agriculture Specialist",
  //   image: SustainableAgricultureSpecialist,
  //   path: "#",
  // },
  // {
  //   title: "Urban Gardener",
  //   image: UrbanGardener,
  //   path: "#",
  // },
  // {
  //   title: "Veterinary Technician",
  //   image: VeterinaryTechnician,
  //   path: "#",
  // },
  // {
  //   title: "Wildlife Conservationist",
  //   image: WildlifeConservationist,
  //   path: "#",
  // },
];

const AgricultureMgm = () => {
  return (
    <div className="container">
      <h2 className="title">Agriculture & Natural Resource</h2>
      <p className="description">
        This field goes beyond crops and pesticides, exploring trading, food processing, marketing, and economics.
      </p>
      <h3 className="subtitle">
        Click below to explore any of the following career(s)
      </h3>

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

export default AgricultureMgm;
