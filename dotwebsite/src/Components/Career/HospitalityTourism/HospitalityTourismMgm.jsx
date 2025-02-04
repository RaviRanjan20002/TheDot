import React from 'react';
import "./HospitalityTourismMgm.css";

// Import images (Replace with actual image paths)
import AdventureTravelGuide from "../../../assets/AdventureTravelGuide.jpg";
import Bartender from "../../../assets/Bartender.jpg";
import BedAndBreakfastOwner from "../../../assets/BedAndBreakfastOwner.jpg";
import CateringManager from "../../../assets/CateringManager.jpg";
// import Chef from "../../../assets/Chef.jpg";
// import Concierge from "../../../assets/Concierge.jpg";
// import CruiseDirector from "../../../assets/CruiseDirector.jpg";
// import CulinaryTourGuide from "../../../assets/CulinaryTourGuide.jpg";
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

const roles = [
    { title: "Adventure Travel Guide", image: AdventureTravelGuide },
    { title: "Bartender", image: Bartender },
    { title: "Bed and Breakfast Owner", image: BedAndBreakfastOwner },
    { title: "Catering Manager", image: CateringManager },
//     { title: "Chef", image: Chef },
//     { title: "Concierge", image: Concierge },
//     { title: "Cruise Director", image: CruiseDirector },
//     { title: "Culinary Tour Guide", image: CulinaryTourGuide },
//     { title: "Entertainment Coordinator", image: EntertainmentCoordinator },
//     { title: "Event Planner", image: EventPlanner },
//     { title: "Front Desk Supervisor", image: FrontDeskSupervisor },
//     { title: "Glamping Operator", image: GlampingOperator },
//     { title: "Hotel Manager", image: HotelManager },
//     { title: "Hotel Sales Manager", image: HotelSalesManager },
//     { title: "Housekeeping Manager", image: HousekeepingManager },
//     { title: "Resort Manager", image: ResortManager },
//     { title: "Restaurant Manager", image: RestaurantManager },
//     { title: "Restaurant Owner", image: RestaurantOwner },
//     { title: "Sommelier", image: Sommelier },
//     { title: "Spa Manager", image: SpaManager },
//     { title: "Theme Park Designer", image: ThemeParkDesigner },
//     { title: "Tour Guide", image: TourGuide },
//     { title: "Tourism Promoter", image: TourismPromoter },
//     { title: "Travel Agent", image: TravelAgent },
//     { title: "Travel Consultant", image: TravelConsultant }
 ];

const HospitalityTourismMgm = () => {
    return (
        <div className="container">
            <h1>Hospitality & Tourism Careers</h1>
            <p className="hospitalitydescription">
                Explore exciting careers in the hospitality and tourism industry, ranging from event planning and hotel management to culinary arts and travel consulting.
            </p>

            <h3 className="hospitalitysubtitle">Click below to explore any of the following career(s)</h3>

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

export default HospitalityTourismMgm;
