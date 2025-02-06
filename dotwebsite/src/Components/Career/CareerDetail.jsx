import { useParams } from "react-router-dom";
import careersData from "./careersData";
import AdminManagment from "./Admnistration/AdminManagment";
import AgricultureMgm from "./Agriculture/AgricultureMgm";
import ArchitectureMgm from "./Architecture/ArchitectureMgm";
import BusinessMgm from "./BuisnessNfinance/BuisnessMgm";
import ConstructionMgm from "./ConstructionNskilledTrades/ConstructionMgm";
import EducationMgm  from "./Education/EducationMgm";
import EventManagementMgm from "./EventManagement/EventManagementMgm";
import FoodCulinaryArtMgm from "./FoodCulinaryArt/FoodCulinaryArtMgm";
import HospitalityTourismMgm from "./HospitalityTourism/HospitalityTourismMgm";
import MarketingAdvertisingMgm from "./MarketingAdvertising/MarketingAdvertisingMgm";
import MusicAndEntertainmentMgm from "./MusicAndEntertainment/MusicAndEntertainmentMgm";
import RoboticsAutomationMgm from "./RoboticsAutomation/RoboticsAutomationMgm";
import SalesMarketingMgm from "./SalesMarketing/SalesMarketingMgm";
import SportsCreationMgm from "./SportsCreation/SportsCreationMgm";
import TravelTourismMgm from "./TravelTourism/TravelTourismMgm";
import Engineering from "./Engineering/Engineering";
import Medical from "./Medical/Medical";
import Civil from "./CivilServices/Civil";
import Law from "./Law/Law";
import Arts from "./Arts/Arts";
import ITSoftwareMgm from "./ITSoftware/ITSoftwareMgm";
import FinanceEconomicsMgm from "./FinanceEconomics/FinanceEconomicsMgm";
import AnimalCareFarmingMgm from "./AnimalCareFarming/AnimalCareFarmingMgm";
import BeautyPersonalCareMgm from "./BeautyPersonalCare/BeautyPersonalCareMgm";
import EnvironmentalCareMgm from "./EnviornmentalCare/EnvironmentalCareMgm";
import ECommerceMgm from "./E-Commerce/ECommerceMgm";
import Environment from "./Environmental/Environment";


// Import other components for different careers

const careerComponents = {
  "Administration and Management":AdminManagment,
  "Agriculture and Natural Resources": AgricultureMgm,
  "Architecture": ArchitectureMgm,
  "Business and Finance": BusinessMgm,
  "Construction and Skilled Trades": ConstructionMgm, 
  "Education":EducationMgm,
  "Event Management": EventManagementMgm,
  "Food and Culinary Art": FoodCulinaryArtMgm,
  "Hospitality and Tourism": HospitalityTourismMgm,
  "Marketing and Advertising": MarketingAdvertisingMgm,
  "Music and Entertainment": MusicAndEntertainmentMgm ,
  "Robotics and Automation": RoboticsAutomationMgm,
  "Sales and Marketing": SalesMarketingMgm,
  "Sports and Recreation":SportsCreationMgm,
  "Travel and Tourism": TravelTourismMgm,
  "Engineering": Engineering,
  "Medical": Medical,
  "Civil Services": Civil,
  "Law and Public Policy":Law,
  "Arts and Design":Arts,
  "IT and Computer Science": ITSoftwareMgm,
  "Finance and Economics":FinanceEconomicsMgm,
  "Animal Care and Farming": AnimalCareFarmingMgm,
  "Beauty and Personal Care": BeautyPersonalCareMgm,
  "Environmental Care": EnvironmentalCareMgm,
  "Ecommerce": ECommerceMgm,
  "Gaming Industry":Environment,
};

const CareerDetail = () => {
  const { careerTitle } = useParams(); // Get career name from URL
  const formattedTitle = careerTitle.replace(/-/g, " "); // Convert URL-friendly format back to normal text
  const career = careersData.find((c) => c.title.toLowerCase() === formattedTitle.toLowerCase());

  if (!career) {
    return <h2>Career Not Found</h2>;
  }

  const SpecificCareerComponent = careerComponents[career.title];

  return SpecificCareerComponent ? (
    <SpecificCareerComponent />
  ) : (
    <div className="career-detail">
      {/* <h1>{career.title}</h1>
      <img src={career.image} alt={career.title} className="career-detail-image" />
      <p>Number of career options: {career.options}</p>
      <p>More details about {career.title} will go here...</p> */}
    </div>
  );
};

export default CareerDetail;
