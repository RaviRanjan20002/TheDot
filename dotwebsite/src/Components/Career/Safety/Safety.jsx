import fire from "../../../assets/fire.avif";
import csm from "../../../assets/csm.avif";
import hsa from "../../../assets/hsa.avif";
import risk from "../../../assets/risk.avif";
import hazard from "../../../assets/hzrd.avif";
import sdr from "../../../assets/sdr.avif";

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
];

const Safety = () => {
  return (
    <div className="lawcontainer">
      <h2 className="lawtitle">Safety Management Services</h2>
      <p className="lawdescription">
        Safety management services play a crucial role in ensuring the health, safety, and well-being of individuals in various industries. Professionals in this field work to identify potential hazards, implement safety protocols, and ensure compliance with regulations to minimize risks. Careers in safety management span diverse sectors, including fire safety, construction, occupational health, and risk management. These roles require strong analytical skills, attention to detail, and a proactive approach to hazard prevention. With increasing workplace safety standards and regulations, the demand for skilled safety professionals continues to grow, making it a promising career path.
      </p>

      <h3 className="lawsubtitle">
        Click below to explore any of the following career(s)
      </h3>

      <div className="lawcareer-grid">
        {careers.map((career, index) => (
          <div key={index} className="lawcareer-card">
            <a href={career.path} target="_blank" rel="noopener noreferrer">
              <img
                src={career.image}
                alt={career.title}
                className="lawcareer-image"
              />
              <p className="lawcareer-title">{career.title}</p>
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

export default Safety;
