import React from 'react';


// Import images
import Baker from "../../assets/Baker.jpg";
import CateringService from "../../assets/CateringService.jpg";
import Chef from "../../assets/Chef.jpg";
import Chocolatier from "../../assets/Chocolatier.jpg";
import Dietitian from "../../assets/Dietitian.jpg";
import FoodChemist from "../../assets/FoodChemist.jpg";
import Herbalist from "../../assets/Herbalist.jpg";
import KitchenDesigner from "../../assets/KitchenDesigner.jpg";
import manymore from "../../assets/manymore.jpg";
// import CulinaryArtsTeacher from "../../../assets/CulinaryArtsTeacher.jpg";
// import CulinaryResearchScientist from "../../../assets/CulinaryResearchScientist.jpg";
// import CulinaryTravelConsultant from "../../../assets/CulinaryTravelConsultant.jpg";

// import EthicalChef from "../../../assets/EthicalChef.jpg";
// import FarmToTableCoordinator from "../../../assets/FarmToTableCoordinator.jpg";
// import FlavorChemistry from "../../../assets/FlavorChemistry.jpg";

// import FoodCritic from "../../../assets/FoodCritic.jpg";
// import FoodEntrepreneur from "../../../assets/FoodEntrepreneur.jpg";
// import FoodFlavorChemist from "../../../assets/FoodFlavorChemist.jpg";
// import FoodFlavorist from "../../../assets/FoodFlavorist.jpg";
// import FoodHistorian from "../../../assets/FoodHistorian.jpg";
// import FoodMarketingSpecialist from "../../../assets/FoodMarketingSpecialist.jpg";
// import FoodProductDeveloper from "../../../assets/FoodProductDeveloper.jpg";
// import FoodSafetySpecialist from "../../../assets/FoodSafetySpecialist.jpg";
// import FoodServiceDirector from "../../../assets/FoodServiceDirector.jpg";
// import FoodSupplyChainManager from "../../../assets/FoodSupplyChainManager.jpg";
// import FoodTechnology from "../../../assets/FoodTechnology.jpg";
// import GourmetFoodProducer from "../../../assets/GourmetFoodProducer.jpg";

// import MenuDeveloper from "../../../assets/MenuDeveloper.jpg";
// import Microbiologist from "../../../assets/Microbiologist.jpg";
// import RecipeDeveloper from "../../../assets/RecipeDeveloper.jpg";
// import SustainabilityConsultant from "../../../assets/SustainabilityConsultant.jpg";

const roles = [
    
        { title: "Baker", image: Baker, link: "https://en.wikipedia.org/wiki/Baker" },
        { title: "Catering Service", image: CateringService, link: "https://en.wikipedia.org/wiki/Catering" },
        { title: "Chef", image: Chef, link: "https://en.wikipedia.org/wiki/Chef" },
        { title: "Chocolatier", image: Chocolatier, link: "https://en.wikipedia.org/wiki/Chocolatier" },
        { title: "Dietitian", image: Dietitian, link: "https://en.wikipedia.org/wiki/Dietitian" },
        { title: "Food Chemist", image: FoodChemist, link: "https://en.wikipedia.org/wiki/Food_chemistry" },
        { title: "Herbalist (Food and Health)", image: Herbalist, link: "https://en.wikipedia.org/wiki/Herbalism" },
        { title: "Kitchen Designer", image: KitchenDesigner, link: "https://en.wikipedia.org/wiki/Kitchen_design" },

    
    {
                    title: "& many more",
                    image: manymore,
                    link: "https://www.google.com/search?q=Food+%26+Culinary+Arts+Careers"
                },
    // { title: "Culinary Arts Teacher", image: CulinaryArtsTeacher },
    // { title: "Culinary Research Scientist", image: CulinaryResearchScientist },
    // { title: "Culinary Travel Consultant", image: CulinaryTravelConsultant },
   
    // { title: "Ethical Chef (Sustainable Practices)", image: EthicalChef },
    // { title: "Farm-to-Table Coordinator", image: FarmToTableCoordinator },
    // { title: "Flavor Chemistry", image: FlavorChemistry },
  
    // { title: "Food Critic", image: FoodCritic },
    // { title: "Food Entrepreneur", image: FoodEntrepreneur },
    // { title: "Food Flavor Chemist", image: FoodFlavorChemist },
    // { title: "Food Flavorist", image: FoodFlavorist },
    // { title: "Food Historian", image: FoodHistorian },
    // { title: "Food Marketing Specialist", image: FoodMarketingSpecialist },
    // { title: "Food Product Developer", image: FoodProductDeveloper },
    // { title: "Food Safety Specialist", image: FoodSafetySpecialist },
    // { title: "Food Service Director", image: FoodServiceDirector },
    // { title: "Food Supply Chain Manager", image: FoodSupplyChainManager },
    // { title: "Food Technology", image: FoodTechnology },
    // { title: "Gourmet Food Producer", image: GourmetFoodProducer },
    
    // { title: "Menu Developer", image: MenuDeveloper },
    // { title: "Microbiologist (Food Industry)", image: Microbiologist },
    // { title: "Recipe Developer", image: RecipeDeveloper },
    // { title: "Sustainability Consultant (Food Industry)", image: SustainabilityConsultant },
];

const FoodCulinaryArtMgm = () => {
    return (
        <div className="container">
            <h1>Food & Culinary Art Careers</h1>
            <p className="fooddescription">
                The food and culinary arts industry is a vast and dynamic field that offers a variety of career opportunities, from food preparation to research and innovation.
            </p>
            <h3 className="foodsubtitle">Click below to explore any of the following career(s)</h3>

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

export default FoodCulinaryArtMgm;
