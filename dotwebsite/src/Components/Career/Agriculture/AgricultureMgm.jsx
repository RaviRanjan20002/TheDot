
import "../../../../styles/AgricultureMgm.css";
import ab from "../../../assets/ab.png";
import ag from "../../../assets/ag.png";
import Diary from "../../../assets/diary.png";
import fst from "../../../assets/fst.png";
import pbg from "../../../assets/pbg.png";
import soil from "../../../assets/soil.png";
const careers = [
  { title: "Food Science and Technology", image: ab },
  { title: "Agricultural Biotechnology", image: ag },
  { title: "Agronomy", image: Diary },
  { title: "Plant Breeding and Genetics", image: fst },
  { title: "Soil Science", image: pbg },
  { title: "Dairy Technology", image:soil },
  // { title: "Horticulture", image: "/images/horticulture.png" },
  // { title: "Agricultural Engineering", image: "/images/agricultural-engineering.png" },
];

const AgricultureMgm = () => {
  return (
    <div className="agricontainer">
      <h2 className="agrititle">Food & Agriculture</h2>
      <p className="agridescription">
        This field is simply not just about harvesting, crops, seeds, pesticides etc., but also delves into the aspects of trading, feasibility studies, food processing, marketing as well as economics.
      </p>
      <p className="agriread-more">Read more</p>

      <h3 className="agrisubtitle">Click below to explore any of the following career(s)</h3>
      
      <div className="agricareer-grid">
        {careers.map((career, index) => (
          <div key={index} className="agricareer-card">
            <img src={career.image} alt={career.title} className="agricareer-image" />
            <p className="agricareer-title">{career.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgricultureMgm;
