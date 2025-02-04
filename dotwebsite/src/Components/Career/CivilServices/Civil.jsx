import "./Civil.css";
import rail from "../../../assets/rail.avif";
import Customs from "../../../assets/custom.avif";
import Excise from "../../../assets/excise.avif";
import IncomeTax from "../../../assets/income.avif";
import civilservices from "../../../assets/civils.avif";
import iss from "../../../assets/IndianStatisticalService.avif";
import ifs from "../../../assets/ifs.avif";
import icls from "../../../assets/icls.avif";
import ils from "../../../assets/ils.avif"
import cls from "../../../assets/cls.avif";
import clss from "../../../assets/clss.avif";
const careers = [
  {
    title: "Railways",
    image: rail,
    path: "https://www.ift.org/career-development/learn-about-food-science/food-facts/about-fs-and-t",
  },
  {
    title: "Customs",
    image: Customs,
    path: "https://www.usda.gov/farming-and-ranching/plants-and-crops/biotechnology/agricultural-biotechnology-glossary#:~:text=Agricultural%20Biotechnology%3A%20A%20range%20of,microorganisms%20for%20specific%20agricultural%20uses.",
  },
  {
    title: "Excise",
    image: Excise,
    path: "https://www.britannica.com/science/agronomy",
  },
  {
    title: "Income Tax",
    image: IncomeTax,
    path: "https://www.britannica.com/science/plant-breeding",
  },
  {
    title: "civil services",
    image: civilservices,
    path: "https://en.wikipedia.org/wiki/Soil_science#:~:text=Soil%20science%20is%20the%20study,use%20and%20management%20of%20soils.",
  },
  {
    title: "Indian Statistical Service",
    image: iss,
    path: "https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/dairy-technology#:~:text=Dairy%20husbandry%20involves%20the%20production,wholesome%2C%20and%20sensorially%20desirable%20products.",
  },
  {
    title: "Indian Foreign Service",
    image: ifs,
    path: "https://en.wikipedia.org/wiki/Soil_science#:~:text=Soil%20science%20is%20the%20study,use%20and%20management%20of%20soils.",
  },
  {
    title: "Indian Corporate Law Service (ICLS)",
    image: icls,
    path: "https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/dairy-technology#:~:text=Dairy%20husbandry%20involves%20the%20production,wholesome%2C%20and%20sensorially%20desirable%20products.",
  },
  {
    title: "Indian Legal Service",
    image: ils,
    path: "https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/dairy-technology#:~:text=Dairy%20husbandry%20involves%20the%20production,wholesome%2C%20and%20sensorially%20desirable%20products.",
  },
  {
    title: "Central Labour Service",
    image: cls,
    path: "https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/dairy-technology#:~:text=Dairy%20husbandry%20involves%20the%20production,wholesome%2C%20and%20sensorially%20desirable%20products.",
  },
  {
    title: "Central secretariat Service",
    image: clss,
    path: "https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/dairy-technology#:~:text=Dairy%20husbandry%20involves%20the%20production,wholesome%2C%20and%20sensorially%20desirable%20products.",
  },
];

const Civil = () => {
  return (
    <div className="civilcontainer">
      <h2 className="civiltitle">civil Services</h2>
      <p className="civildescription">
        The civil service system is the backbone of the administrative machinery
        of the country. The Union Public Service Commission conducts a
        nationwide competitive examination for recruitment to various Civil
        Services of the Government of India. Civil Services offer an attractive
        and challenging career to the ambitious, aspiring and the talented youth
        of the country. The wide variety of jobs within the fold of the Civil
        Services have relatively greater sphere of authority and power than any
        other services in India. It is considered to be one of the toughest
        examination in India with success rate of 0.1%-0.3% with more than
        900,000 applicants. The challenging aspect of this exam is that
        aspirants must complete a three-stage process, requiring in depth
        knowledge, rational thinking, drafting skills, creativity, language
        competency, a can do and empathetic personality. The candidate applying
        for civil services examination must hold a degree of any central, state
        or deemed university. There are certain restrictions on age limit and
        number of attempts. Jobs in civil services are symbols of great power,
        social recognition and affluence. A wide variety of work domains are
        associated with civil services, like maintenance of law and order,
        developmental work, disaster management, representing India on
        international forums, administration, and empowerment of marginalized
        sections of society etc. Trending fields: Indian Administrative
        Services, Indian Foreign Service, Indian Police Service.
      </p>
      {/* <p className="agriread-more">Read more</p> */}

      <h3 className="civilsubtitle">
        Click below to explore any of the following career(s)
      </h3>

      <div className="civilcareer-grid">
        {careers.map((career, index) => (
          <div key={index} className="civilcareer-card">
            <a href={career.path} target="_blank" rel="noopener noreferrer">
              <img
                src={career.image}
                alt={career.title}
                className="civilcareer-image"
              />
              <p className="civilcareer-title">{career.title}</p>
            </a>
            <a
              href={career.path}
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

export default Civil;
