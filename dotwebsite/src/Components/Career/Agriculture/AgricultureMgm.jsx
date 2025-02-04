
import "./AgricultureMgm.css";
import ab from "../../../assets/ab.png";
import ag from "../../../assets/ag.png";
import Diary from "../../../assets/diary.png";
import fst from "../../../assets/fst.png";
import pbg from "../../../assets/pbg.png";
import soil from "../../../assets/soil.png";
const careers = [
  {
    title: "Food Science and Technology",
    image: ab,
    path: "https://www.ift.org/career-development/learn-about-food-science/food-facts/about-fs-and-t",
  },
  {
    title: "Agricultural Biotechnology",
    image: ag,
    path: "https://www.usda.gov/farming-and-ranching/plants-and-crops/biotechnology/agricultural-biotechnology-glossary#:~:text=Agricultural%20Biotechnology%3A%20A%20range%20of,microorganisms%20for%20specific%20agricultural%20uses.",
  },
  {
    title: "Agronomy",
    image: Diary,
    path: "https://www.britannica.com/science/agronomy",
  },
  {
    title: "Plant Breeding and Genetics",
    image: fst,
    path: "https://www.britannica.com/science/plant-breeding",
  },
  {
    title: "Soil Science",
    image: pbg,
    path: "https://en.wikipedia.org/wiki/Soil_science#:~:text=Soil%20science%20is%20the%20study,use%20and%20management%20of%20soils.",
  },
  {
    title: "Dairy Technology",
    image: soil,
    path: "https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/dairy-technology#:~:text=Dairy%20husbandry%20involves%20the%20production,wholesome%2C%20and%20sensorially%20desirable%20products.",
  },
  // { title: "Horticulture", image: "/images/horticulture.png" },
  // { title: "Agricultural Engineering", image: "/images/agricultural-engineering.png" },
];

const AgricultureMgm = () => {
  return (
    <div className="agricontainer">
      <h2 className="agrititle">Food & Agriculture</h2>
      <p className="agridescription">
        This field is simply not just about harvesting, crops, seeds, pesticides
        etc., but also delves into the aspects of trading, feasibility studies,
        food processing, marketing as well as economics.
      </p>
      {/* <p className="agriread-more">Read more</p> */}

      <h3 className="agrisubtitle">
        Click below to explore any of the following career(s)
      </h3>

      <div className="agricareer-grid">
        {careers.map((career, index) => (
          <div key={index} className="agricareer-card">
            <a href={career.path} target="_blank" rel="noopener noreferrer">
              <img
                src={career.image}
                alt={career.title}
                className="agricareer-image"
              />
              <p className="agricareer-title">{career.title}</p>
            </a>
            <a href={career.path} target="_blank" rel="noopener noreferrer" className="button">
               See Details
             </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgricultureMgm;
