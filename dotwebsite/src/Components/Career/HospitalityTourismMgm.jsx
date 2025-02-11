import React from 'react';

// Import images
import AdventureTravelGuide from "../../assets/AdventureTravelGuide.jpg";
import Bartender from "../../assets/Bartender.jpg";
import BedAndBreakfastOwner from "../../assets/BedAndBreakfastOwner.jpg";
import CateringManager from "../../assets/CateringManager.jpg";
import Chef from "../../assets/Chef.jpg";
import Concierge from "../../assets/Concierge.jpg";
import CruiseDirector from "../../assets/CruiseDirector.jpg";
import CulinaryTourGuide from "../../assets/CulinaryTourGuide.jpg";
// import EntertainmentCoordinator from "../../../assets/EntertainmentCoordinator.jpg";
// import EventPlanner from "../../../assets/EventPlanner.jpg";
// import FrontDeskSupervisor from "../../../assets/FrontDeskSupervisor.jpg";
// import GlampingOperator from "../../../assets/GlampingOperator.jpg";
// import HotelManager from "../../../assets/HotelManager.jpg";
// import HotelSalesManager from "../../../assets/HotelSalesManager.jpg";
// import HousekeepingManager from "../../../assets/HousekeepingManager.jpg";
// import ResortManager from "../../../assets/ResortManager.jpg";
// import RestaurantManager from "../../../assets/RestaurantManager.jpg";
// import RestaurantOwner from "../../../assets/RestaurantOwner.jpg";
// import Sommelier from "../../../assets/Sommelier.jpg";
// import SpaManager from "../../../assets/SpaManager.jpg";
// import ThemeParkDesigner from "../../../assets/ThemeParkDesigner.jpg";
// import TourGuide from "../../../assets/TourGuide.jpg";
// import TourismPromoter from "../../../assets/TourismPromoter.jpg";
// import TravelAgent from "../../../assets/TravelAgent.jpg";
// import TravelConsultant from "../../../assets/TravelConsultant.jpg";
import manymore from "../../assets/manymore.jpg";

const careers = [
  { title: "Adventure Travel Guide", image: AdventureTravelGuide, link: "https://en.wikipedia.org/wiki/Adventure_travel" },
  { title: "Bartender", image: Bartender, link: "https://en.wikipedia.org/wiki/Bartender" },
  { title: "Bed and Breakfast Owner", image: BedAndBreakfastOwner, link: "https://en.wikipedia.org/wiki/Bed_and_breakfast" },
  { title: "Catering Manager", image: CateringManager, link: "https://en.wikipedia.org/wiki/Catering" },
  { title: "Chef", image: Chef, link: "https://en.wikipedia.org/wiki/Chef" },
  { title: "Concierge", image: Concierge, link: "https://en.wikipedia.org/wiki/Concierge" },
  { title: "Cruise Director", image: CruiseDirector, link: "https://en.wikipedia.org/wiki/Cruise_director" },
  { title: "Culinary Tour Guide", image: CulinaryTourGuide, link: "https://en.wikipedia.org/wiki/Food_tourism" },
  
  { 
    title: "& many more", 
    image: manymore, 
    link: "https://www.google.com/search?q=Hospitality+and+Tourism+Careers" 
  }
];

const HospitalityTourismMgm = () => {
  return (
    <div className="container">
      <h1>Hospitality & Tourism Careers</h1>
      <p className="description">
        Explore exciting careers in the hospitality and tourism industry, ranging from event planning and hotel management to culinary arts and travel consulting.
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

export default HospitalityTourismMgm;
