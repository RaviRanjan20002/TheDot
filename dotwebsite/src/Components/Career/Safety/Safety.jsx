import fire from "../../../assets/fire.avif";
import csm from "../../../assets/csm.avif";
import hsa from "../../../assets/hsa.avif";
import risk from "../../../assets/risk.avif";
import hazard from "../../../assets/hzrd.avif";
import sdr from "../../../assets/sdr.avif";
import manymore from "../../../assets/manymore.jpg";
const careers = [
  {
    title: "Fire Safety Officer",
    image: fire,
    path: "https://en.wikipedia.org/wiki/Fire_safety",
  },
  {
    title: "Construction Safety Manager",
    image: csm,
    path: "https://en.wikipedia.org/wiki/Construction_safety",
  },
  {
    title: "Health and Safety Advisor",
    image: hsa,
    path: "https://en.wikipedia.org/wiki/Occupational_safety_and_health",
  },
  {
    title: "Risk Manager",
    image: risk,
    path: "https://en.wikipedia.org/wiki/Risk_management",
  },
  {
    title: "Hazardous Materials Specialist",
    image: hazard,
    path: "https://en.wikipedia.org/wiki/Hazardous_materials",
  },
  {
    title: "Safety Director",
    image: sdr,
    path: "https://en.wikipedia.org/wiki/Occupational_safety_and_health_professional",
  },
  {
    title: "& many more",
    image: manymore,
    path: "https://en.wikipedia.org/wiki/Safety_management",
  },
];

const Safety = () => {
  return (
    <div className="container">
      <h2 className="title">Safety Management Services</h2>
      <p className="description">
      Safety management professionals identify hazards, implement protocols, and ensure regulatory compliance across industries like construction, fire safety, and occupational health. With rising safety standards, demand for skilled experts is growing, making it a promising career path.
      </p>

      <h3 className="subtitle">
        Click below to explore any of the following career(s)
      </h3>

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

export default Safety;
