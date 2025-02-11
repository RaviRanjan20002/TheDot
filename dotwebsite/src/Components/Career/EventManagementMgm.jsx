import React from 'react';



// Import images
import SpecialEventsCoordinator from "../../assets/SpecialEventsCoordinator.jpg";
import SponsorshipCoordinator from "../../assets/SponsorshipCoordinator.jpg";
import TradeShowCoordinator from "../../assets/TradeShowCoordinator.jpg";
import VenueManager from "../../assets/VenueManager.jpg";
import WeddingPlanner from "../../assets/WeddingPlanner.jpg";
import CorporateEventPlanner from "../../assets/CorporateEventPlanner.jpg";
import ExhibitionOrganizer from "../../assets/ExhibitionOrganizer.jpg";
import LogisticsManager from "../../assets/LogisticsManager.jpg";
import manymore from "../../assets/manymore.jpg";
// import WeddingPhotography from "../../../assets/WeddingPhotography.jpg";
// import CateringManager from "../../../assets/CateringManager.jpg";
// import ConferenceOrganizer from "../../../assets/ConferenceOrganizer.jpg";
// import ConventionServicesManager from "../../../assets/ConventionServicesManager.jpg";
// import EndOfLifeManager from "../../../assets/EndOfLifeManager.jpg";
// import EntertainmentManager from "../../../assets/EntertainmentManager.jpg";
// import EventConsultant from "../../../assets/EventConsultant.jpg";
// import EventCoordinator from "../../../assets/EventCoordinator.jpg";
// import EventDesigner from "../../../assets/EventDesigner.jpg";
// import EventManager from "../../../assets/EventManager.jpg";
// import EventMarketingManager from "../../../assets/EventMarketingManager.jpg";
// import EventOperationsManager from "../../../assets/EventOperationsManager.jpg";
// import EventPlanner from "../../../assets/EventPlanner.jpg";
// import EventProductionManager from "../../../assets/EventProductionManager.jpg";
// import EventSalesManager from "../../../assets/EventSalesManager.jpg";
// import EventTechnologySpecialist from "../../../assets/EventTechnologySpecialist.jpg";
// import FestivalCoordinator from "../../../assets/FestivalCoordinator.jpg";
// import MeetingPlanner from "../../../assets/MeetingPlanner.jpg";
// import PartyPlanner from "../../../assets/PartyPlanner.jpg";

const roles = [
    { title: "Special Events Coordinator", image: SpecialEventsCoordinator, link: "https://en.wikipedia.org/wiki/Event_management" },
    { title: "Sponsorship Coordinator", image: SponsorshipCoordinator, link: "https://en.wikipedia.org/wiki/Sponsorship" },
    { title: "Trade Show Coordinator", image: TradeShowCoordinator, link: "https://en.wikipedia.org/wiki/Trade_show" },
    { title: "Venue Manager", image: VenueManager, link: "https://en.wikipedia.org/wiki/Venue_management" },
    { title: "Wedding Planner", image: WeddingPlanner, link: "https://en.wikipedia.org/wiki/Wedding_planner" },
    { title: "Corporate Event Planner", image: CorporateEventPlanner, link: "https://en.wikipedia.org/wiki/Corporate_event" },
    { title: "Exhibition Organizer", image: ExhibitionOrganizer, link: "https://en.wikipedia.org/wiki/Exhibition" },
    { title: "Logistics Manager", image: LogisticsManager, link: "https://en.wikipedia.org/wiki/Logistics" },
    {
        title: "& many more",
        image: manymore,
        link: "https://www.google.com/search?q=Event+Management+Careers"
    },
    // { title: "Wedding Photography", image: WeddingPhotography },
    // { title: "Catering Manager", image: CateringManager },
    // { title: "Conference Organizer", image: ConferenceOrganizer },
    // { title: "Convention Services Manager", image: ConventionServicesManager },
    // { title: "End-of-Life Manager or Memorializer", image: EndOfLifeManager },
    // { title: "Entertainment Manager", image: EntertainmentManager },
    // { title: "Event Consultant", image: EventConsultant },
    // { title: "Event Coordinator", image: EventCoordinator },
    // { title: "Event Designer", image: EventDesigner },
    // { title: "Event Manager", image: EventManager },
    // { title: "Event Marketing Manager", image: EventMarketingManager },
    // { title: "Event Operations Manager", image: EventOperationsManager },
    // { title: "Event Planner", image: EventPlanner },
    // { title: "Event Production Manager", image: EventProductionManager },
    // { title: "Event Sales Manager", image: EventSalesManager },
    // { title: "Event Technology Specialist", image: EventTechnologySpecialist },
    // { title: "Festival Coordinator", image: FestivalCoordinator },
    // { title: "Meeting Planner", image: MeetingPlanner },
    // { title: "Party Planner", image: PartyPlanner },
];


const EventManagementMgm = () => {
    return (
      <div className="container">
        <h1>Event Management Careers</h1>
        <p className="description">
          The Event Management industry involves planning, coordinating, and executing events such as weddings, conferences, and corporate functions. Explore a variety of roles that bring events to life and ensure their success.
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
  
  export default EventManagementMgm;