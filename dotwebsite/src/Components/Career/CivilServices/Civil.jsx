import "./Civil.css";
import rail from "../../../assets/rail.avif";
import Customs from "../../../assets/custom.avif";
import Excise from "../../../assets/excise.avif";
import IncomeTax from "../../../assets/income.avif";
import civilservices from "../../../assets/civils.avif";
import iss from "../../../assets/IndianStatisticalService.avif";
import ifs from "../../../assets/ifs.avif";
import icls from "../../../assets/icls.avif";
import ils from "../../../assets/ils.avif";
import cls from "../../../assets/cls.avif";
import clss from "../../../assets/clss.avif";

const careers = [
  {
    title: "Railways",
    image: rail,
    path: "https://en.wikipedia.org/wiki/Indian_Railways",
  },
  {
    title: "Customs",
    image: Customs,
    path: "https://en.wikipedia.org/wiki/Indian_Customs",
  },
  {
    title: "Excise",
    image: Excise,
    path: "https://en.wikipedia.org/wiki/Central_Excise_Service",
  },
  {
    title: "Income Tax",
    image: IncomeTax,
    path: "https://en.wikipedia.org/wiki/Indian_Revenue_Service",
  },
  {
    title: "Civil Services",
    image: civilservices,
    path: "https://en.wikipedia.org/wiki/Civil_services_of_India",
  },
  {
    title: "Indian Statistical Service",
    image: iss,
    path: "https://en.wikipedia.org/wiki/Indian_Statistical_Service",
  },
  {
    title: "Indian Foreign Service",
    image: ifs,
    path: "https://en.wikipedia.org/wiki/Indian_Foreign_Service",
  },
  {
    title: "Indian Corporate Law Service (ICLS)",
    image: icls,
    path: "https://en.wikipedia.org/wiki/Indian_Corporate_Law_Service",
  },
  {
    title: "Indian Legal Service",
    image: ils,
    path: "https://en.wikipedia.org/wiki/Indian_Legal_Service",
  },
  {
    title: "Central Labour Service",
    image: cls,
    path: "https://en.wikipedia.org/wiki/Central_Labour_Service",
  },
  {
    title: "Central Secretariat Service",
    image: clss,
    path: "https://en.wikipedia.org/wiki/Central_Secretariat_Service",
  },
];

const Civil = () => {
  return (
    <div className="civilcontainer">
      <h2 className="civiltitle">Civil Services</h2>
      <p className="civildescription">
        The civil service system is the backbone of the administrative machinery
        of the country. The Union Public Service Commission conducts a
        nationwide competitive examination for recruitment to various Civil
        Services of the Government of India. Civil Services offer an attractive
        and challenging career to ambitious, aspiring, and talented youth.
      </p>
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
