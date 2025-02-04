import React from 'react';
import "./EventManagementMgm.css";

// Import images
import SpecialEventsCoordinator from "../../../assets/SpecialEventsCoordinator.jpg";
import SponsorshipCoordinator from "../../../assets/SponsorshipCoordinator.jpg";
import TradeShowCoordinator from "../../../assets/TradeShowCoordinator.jpg";
import VenueManager from "../../../assets/VenueManager.jpg";
// import WeddingPhotography from "../../../assets/WeddingPhotography.jpg";
// import WeddingPlanner from "../../../assets/WeddingPlanner.jpg";
// import CateringManager from "../../../assets/CateringManager.jpg";
// import ConferenceOrganizer from "../../../assets/ConferenceOrganizer.jpg";
// import ConventionServicesManager from "../../../assets/ConventionServicesManager.jpg";
// import CorporateEventPlanner from "../../../assets/CorporateEventPlanner.jpg";
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
// import ExhibitionOrganizer from "../../../assets/ExhibitionOrganizer.jpg";
// import FestivalCoordinator from "../../../assets/FestivalCoordinator.jpg";
// import LogisticsManager from "../../../assets/LogisticsManager.jpg";
// import MeetingPlanner from "../../../assets/MeetingPlanner.jpg";
// import PartyPlanner from "../../../assets/PartyPlanner.jpg";

const roles = [
    { title: "Special Events Coordinator", image: SpecialEventsCoordinator },
    { title: "Sponsorship Coordinator", image: SponsorshipCoordinator },
    { title: "Trade Show Coordinator", image: TradeShowCoordinator },
    { title: "Venue Manager", image: VenueManager },
    // { title: "Wedding Photography", image: WeddingPhotography },
    // { title: "Wedding Planner", image: WeddingPlanner },
    // { title: "Catering Manager", image: CateringManager },
    // { title: "Conference Organizer", image: ConferenceOrganizer },
    // { title: "Convention Services Manager", image: ConventionServicesManager },
    // { title: "Corporate Event Planner", image: CorporateEventPlanner },
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
    // { title: "Exhibition Organizer", image: ExhibitionOrganizer },
    // { title: "Festival Coordinator", image: FestivalCoordinator },
    // { title: "Logistics Manager", image: LogisticsManager },
    // { title: "Meeting Planner", image: MeetingPlanner },
    // { title: "Party Planner", image: PartyPlanner }
];

const EventManagementMgm = () => {
    return (
        <div className="container">
            <h1>Event Management Careers</h1>
            <p className="eventdescription">
                The Event Management industry involves planning, coordinating, and executing events such as weddings, conferences, and corporate functions.
            </p>
            
            <h3 className="eventsubtitle">Click below to explore any of the following careers</h3>

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

export default EventManagementMgm;
