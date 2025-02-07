// Import images
import ApparelMerchandiser from "../../../assets/ApparelMerchandiser.jpg";
import Asserter from "../../../assets/Asserter.jpg";
import AssistantApparelMerchandiser from "../../../assets/AssistantApparelMerchandiser.jpg";
import AssistantDesigner from "../../../assets/AssistantDesigner.jpg";
import AssistantRetailBuyer from "../../../assets/AssistantRetailBuyer.jpg";
import Cutter from "../../../assets/Cutter.jpg";
import DivisionDirector from "../../../assets/DivisionDirector.jpg";
import ExecutiveTrainee from "../../../assets/ExecutiveTrainee.jpg";

// import FashionChoreography from "../../../assets/FashionChoreography.avif";
// import FashionDesigner from "../../../assets/FashionDesigner.avif";
// import FashionStylists from "../../../assets/FashionStylists.avif";
// import FootwearDesign from "../../../assets/FootwearDesign.avif";
// import JewelleryDesigner from "../../../assets/JewelleryDesigner.avif";
// import LeatherTechnology from "../../../assets/LeatherTechnology.avif";
// import MakeUpArtist from "../../../assets/MakeUpArtist.avif";
// import Marker from "../../../assets/Marker.avif";
// import MerchandiseDisplayer from "../../../assets/MerchandiseDisplayer.avif";
// import MerchandisePlanning from "../../../assets/MerchandisePlanning.avif";
// import MerchandisingManager from "../../../assets/MerchandisingManager.avif";
// import Modelling from "../../../assets/Modelling.avif";
// import PatternGrader from "../../../assets/PatternGrader.avif";
// import PatternMaker from "../../../assets/PatternMaker.avif";
// import ProductionMerchandiser from "../../../assets/ProductionMerchandiser.avif";
// import RetailBuyer from "../../../assets/RetailBuyer.avif";
// import SampleMaker from "../../../assets/SampleMaker.avif";
// import SampleMerchandiser from "../../../assets/SampleMerchandiser.avif";
// import SeniorMerchandiser from "../../../assets/SeniorMerchandiser.avif";
// import SketchingEmployee from "../../../assets/SketchingEmployee.avif";
// import Spreader from "../../../assets/Spreader.avif";
// import TeamLeaderSampleMerchandiser from "../../../assets/TeamLeaderSampleMerchandiser.avif";
import manymore from "../../../assets/manymore.jpg";

const careers = [
  { title: "Apparel Merchandiser", image: ApparelMerchandiser, link: "https://en.wikipedia.org/wiki/Apparel_merchandiser" },
  { title: "Asserter", image: Asserter, link: "https://en.wikipedia.org/wiki/Asserter" },
  { title: "Assistant Apparel Merchandiser", image: AssistantApparelMerchandiser, link: "https://en.wikipedia.org/wiki/Assistant_Apparel_Merchandiser" },
  { title: "Assistant Designer", image: AssistantDesigner, link: "https://en.wikipedia.org/wiki/Assistant_Designer" },
  { title: "Assistant Retail Buyer", image: AssistantRetailBuyer, link: "https://en.wikipedia.org/wiki/Retail_buyer" },
  { title: "Cutter", image: Cutter, link: "https://en.wikipedia.org/wiki/Cutter_(clothing)" },
  { title: "Division Director", image: DivisionDirector, link: "https://en.wikipedia.org/wiki/Division_director" },
  { title: "Executive Trainee or Management Trainee", image: ExecutiveTrainee, link: "https://en.wikipedia.org/wiki/Management_trainee" },
  // { title: "Fashion Choreography", image: FashionChoreography, link: "https://en.wikipedia.org/wiki/Fashion_show_choreography" },
  // { title: "Fashion Designer", image: FashionDesigner, link: "https://en.wikipedia.org/wiki/Fashion_design" },
  // { title: "Fashion Stylists and Personal Shoppers", image: FashionStylists, link: "https://en.wikipedia.org/wiki/Fashion_stylist" },
  // { title: "Footwear Design/Technology", image: FootwearDesign, link: "https://en.wikipedia.org/wiki/Footwear_design" },
  // { title: "Jewellery Designer", image: JewelleryDesigner, link: "https://en.wikipedia.org/wiki/Jewellery_design" },
  // { title: "Leather Technology", image: LeatherTechnology, link: "https://en.wikipedia.org/wiki/Leather_technology" },
  // { title: "Make-Up Artist", image: MakeUpArtist, link: "https://en.wikipedia.org/wiki/Make-up_artist" },
  // { title: "Marker", image: Marker, link: "https://en.wikipedia.org/wiki/Marker_(clothing)" },
  // { title: "Merchandise Displayer", image: MerchandiseDisplayer, link: "https://en.wikipedia.org/wiki/Merchandise_displayer" },
  // { title: "Merchandise Planning And Buying", image: MerchandisePlanning, link: "https://en.wikipedia.org/wiki/Merchandise_planning" },
  // { title: "Merchandising Manager", image: MerchandisingManager, link: "https://en.wikipedia.org/wiki/Merchandising_manager" },
  // { title: "Modelling", image: Modelling, link: "https://en.wikipedia.org/wiki/Model_(person)" },
  // { title: "Pattern Grader", image: PatternGrader, link: "https://en.wikipedia.org/wiki/Pattern_grader" },
  // { title: "Pattern Maker", image: PatternMaker, link: "https://en.wikipedia.org/wiki/Patternmaker_(clothing)" },
  // { title: "Production Merchandiser", image: ProductionMerchandiser, link: "https://en.wikipedia.org/wiki/Production_merchandiser" },
  // { title: "Retail Buyer", image: RetailBuyer, link: "https://en.wikipedia.org/wiki/Retail_buyer" },
  // { title: "Sample Maker", image: SampleMaker, link: "https://en.wikipedia.org/wiki/Sample_maker" },
  // { title: "Sample Merchandiser", image: SampleMerchandiser, link: "https://en.wikipedia.org/wiki/Sample_merchandiser" },
  // { title: "Senior Merchandiser", image: SeniorMerchandiser, link: "https://en.wikipedia.org/wiki/Senior_merchandiser" },
  // { title: "Sketching Employee or Sketcher", image: SketchingEmployee, link: "https://en.wikipedia.org/wiki/Fashion_illustrator" },
  // { title: "Spreader", image: Spreader, link: "https://en.wikipedia.org/wiki/Spreader_(clothing)" },
  // { title: "Team Leader of Sample Merchandiser", image: TeamLeaderSampleMerchandiser, link: "https://en.wikipedia.org/wiki/Sample_merchandiser" },
  { title: "& many more", image: manymore, link: "https://en.wikipedia.org/wiki/Fashion_industry" },
];

const Fashion = () => {
  return (
    <div className="container">
      <h1>Fashion Industry Careers</h1>
      <p className="description">
        The fashion industry offers a wide range of dynamic and creative career paths, from design and merchandising to technology and production. Whether you are interested in creating new styles, managing retail operations, or advancing technology in fashion, there are abundant opportunities to explore.
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

export default Fashion;
