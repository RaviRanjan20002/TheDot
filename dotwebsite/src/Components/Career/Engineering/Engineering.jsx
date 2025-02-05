import "./Engineering.css";
import Computer from "../../../assets/computer.avif";
import Iteng from "../../../assets/Iteng.avif";
import electrical from "../../../assets/electric.avif";
import Mechanical from "../../../assets/mechanical.avif";
import production from "../../../assets/production.avif";
import aerospace from "../../../assets/aerospace.avif";
import ece from "../../../assets/ece.avif";
import civil from "../../../assets/civil.avif";
import cpl from "../../../assets/cpl.avif";
const careers = [
  {
    title: "Computer Science and Engineering",
    image: Computer,
    path: "https://www.ift.org/career-development/learn-about-food-science/food-facts/about-fs-and-t",
  },
  {
    title: "Information and Technology",
    image: Iteng,
    path: "https://www.usda.gov/farming-and-ranching/plants-and-crops/biotechnology/agricultural-biotechnology-glossary#:~:text=Agricultural%20Biotechnology%3A%20A%20range%20of,microorganisms%20for%20specific%20agricultural%20uses.",
  },
  {
    title: "Electric Engineering",
    image: electrical,
    path: "https://www.britannica.com/science/agronomy",
  },
  {
    title: "Mechanical Engineering",
    image: Mechanical,
    path: "https://www.britannica.com/science/plant-breeding",
  },
  {
    title: "Production and Industrial Engineering",
    image: production,
    path: "https://en.wikipedia.org/wiki/Soil_science#:~:text=Soil%20science%20is%20the%20study,use%20and%20management%20of%20soils.",
  },
  {
    title: "Aerospace Engineering",
    image: aerospace,
    path: "https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/dairy-technology#:~:text=Dairy%20husbandry%20involves%20the%20production,wholesome%2C%20and%20sensorially%20desirable%20products.",
  },
  {
    title: "Electronics and Communication Engineering",
    image: ece,
    path: "https://en.wikipedia.org/wiki/Soil_science#:~:text=Soil%20science%20is%20the%20study,use%20and%20management%20of%20soils.",
  },
  {
    title: "Civil Engineering",
    image: civil,
    path: "https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/dairy-technology#:~:text=Dairy%20husbandry%20involves%20the%20production,wholesome%2C%20and%20sensorially%20desirable%20products.",
  },
  {
    title: "Chemical and Petroleum Engineering",
    image: cpl,
    path: "https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/dairy-technology#:~:text=Dairy%20husbandry%20involves%20the%20production,wholesome%2C%20and%20sensorially%20desirable%20products.",
  },
];

const Engineering = () => {
  return (
    <div className="engcontainer">
      <h2 className="engtitle">Engineering</h2>
      <p className="engdescription">
        Engineering is one of the most versatile degrees spanning multiple
        domains ranging from aerospace to automobiles to healthcare to business
        & many more. Engineers are at the center of innovation and one of the
        most sought after professionals in the country. They provide
        technological solutions to the problems, issues and ideas that affect
        every area of our lives and are responsible for technological
        advancements. Depending upon ones interest, one can specialize in
        multiple fields of engineering such as Electronics, Computer Science,
        Mechanical, Civil & Aerospace amongst others. With increasing
        competition in the field, huge numbers of engineering colleges have
        mushroomed across the country. However, competition for the premier
        colleges remains extremely high. A four year Bachelors degree in
        Engineering can be quite rewarding if completed from the marque colleges
        of the country. In order to build a career in Engineering and
        Technology, one should have a combination of PCM (Physics, Chemistry and
        Mathematics) at the 10+2 level. An engineering degree from the coveted
        colleges opens doors for some of the top companies in the world like
        Google, Facebook, Amazon, Microsoft amongst others recruiters
      </p>
      {/* <p className="agriread-more">Read more</p> */}

      <h3 className="engsubtitle">
        Click below to explore any of the following career(s)
      </h3>

      <div className="engcareer-grid">
        {careers.map((career, index) => (
          <div key={index} className="engcareer-card">
            <a href={career.path} target="_blank" rel="noopener noreferrer">
              <img
                src={career.image}
                alt={career.title}
                className="engcareer-image"
              />
              <p className="engcareer-title">{career.title}</p>
              <a href={career.path} target="_blank" rel="noopener noreferrer" className="button">
               See Details
             </a>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Engineering;
