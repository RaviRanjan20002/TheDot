import { useParams } from "react-router-dom";
import careersData from "./careersData";
import AdminManagment from "../AdminManagment";
import AgricultureMgm from "../AgricultureMgm";
import ArchitectureMgm from "../ArchitectureMgm";
import BusinessMgm from "../BuisnessMgm";
import ConstructionMgm from "../ConstructionMgm";
import EducationMgm  from "../EducationMgm";
import EventManagementMgm from "../EventManagementMgm";
import FoodCulinaryArtMgm from "../FoodCulinaryArtMgm";
import HospitalityTourismMgm from "../HospitalityTourismMgm";
import MarketingAdvertisingMgm from "../MarketingAdvertisingMgm";
import MusicAndEntertainmentMgm from "../MusicAndEntertainmentMgm";
import RoboticsAutomationMgm from "../RoboticsAutomationMgm";
import SalesMarketingMgm from "../SalesMarketingMgm";
import SportsCreationMgm from "../SportsCreationMgm";
import TravelTourismMgm from "../TravelTourismMgm";
import Engineering from "../Engineering";
import Medical from "../Medical";
import Civil from "../Civil";
import Law from "../Law";
import Arts from "../Arts/Arts";
import Entrepreneurship from "../Entrepreneurship";
import Cultures from "../Cultures";
import Media from "../Media";
import Hospitality from "../Hospitality";
import Security from "../Security";
import Safety from "../Safety";
import Scienceresarch from "../Scienceresarch";
import Textile from "../Textile";
import ITSoftwareMgm from "../ITSoftwareMgm";
import FinanceEconomicsMgm from "../FinanceEconomicsMgm";
import AnimalCareFarmingMgm from "../AnimalCareFarmingMgm";
import BeautyPersonalCareMgm from "../BeautyPersonalCareMgm";
import EnvironmentalCareMgm from "../EnvironmentalCareMgm";
import Transport from "../Transport";
import Socialservice from "../Socialservice";
import Salesmgm from "../Salesmgm";
import Politicslaw from "../Politicslaw";
import Mediaarts from "../Mediaarts";
import Manufacturing from "../Manufacturing";
import It from "../It";
import Gaming from "../Gaming";
import Fashion from "../Fashion";
import ECommerceMgm from "../ECommerceMgm";
import NonMedicalMgm from "../NonMedicalMgm";
import HumanitiesMgm from "../HumanitiesMgm";

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
  "Arts and Design": Arts,
  "Entrepreneurship":Entrepreneurship,
  "Cultural Heritage Management":Cultures,
  "Media and Communications":Media,
  "Hospitality Industry":Hospitality,
  "National Security and Emergency Services":Security,
  "Safety Management Services":Safety,
  "Science and Research":Scienceresarch,
  "Textile and Clothing Industry":Textile,
  "IT and Computer Science": ITSoftwareMgm,
  "Finance and Economics":FinanceEconomicsMgm,
  "Animal Care and Farming": AnimalCareFarmingMgm,
  "Beauty and Personal Care": BeautyPersonalCareMgm,
  "Environmental Care": EnvironmentalCareMgm,
  "Transportation and Logistics":Transport,
  "Social Services and Counseling":Socialservice,
  "Sales and Management":Salesmgm,
  "Politics and Law":Politicslaw,
  "Media and Performing Arts": Mediaarts ,
  "Manufacturing and Production":Manufacturing,
  "Information Technology":It,
  "Gaming Industry":Gaming,
  "Fashion Industry":Fashion,
  "Ecommerce":ECommerceMgm,
  "NonMedical": NonMedicalMgm,
  "Humanities": HumanitiesMgm ,
};

const CareerDetail = () => {
  const { careerTitle } = useParams(); // Get career name from URL
  const formattedTitle = careerTitle.replace(/-/g, " "); // Convert URL-friendly format back to normal text
  const career = careersData.find((c) => c.title.toLowerCase() === formattedTitle.toLowerCase());

  if (!career) {
    return <h2>Career Not Found !wait till we build </h2>;
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
