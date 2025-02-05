import Army from "../../../assets/army.avif";
import Navy from "../../../assets/navy.avif";
import Iaf from "../../../assets/iaf.avif";
import caf from "../../../assets/caf.avif";
import bsf from "../../../assets/bsf.avif";
import cid from "../../../assets/cid.avif";

const careers = [
  {
    title: "Indian Army",
    image: Army,
    path: "https://en.wikipedia.org/wiki/Indian_Army",
  },
  {
    title: "Indian Navy",
    image: Navy,
    path: "https://en.wikipedia.org/wiki/Indian_Navy",
  },
  {
    title: "Indian Air Force",
    image: Iaf,
    path: "https://en.wikipedia.org/wiki/Indian_Air_Force",
  },
  {
    title: "Central Armed Police Forces",
    image: caf,
    path: "https://en.wikipedia.org/wiki/Central_Armed_Police_Forces",
  },
  {
    title: "Border Security Force (BSF)",
    image: bsf,
    path: "https://en.wikipedia.org/wiki/Border_Security_Force",
  },
  {
    title: "CID officer",
    image: cid,
    path: "https://en.wikipedia.org/wiki/Crime_Investigation_Department",
  },
];

const Security = () => {
  return (
    <div className="lawcontainer">
      <h2 className="lawtitle">National Security and Emergency Services</h2>
      <p className="lawdescription">
        A career in defense forces promises one of the most prestigious and
        respected positions in the country. The Indian Armed Forces are the
        military forces of India, which consists of four professional uniformed
        services: The Indian Army, Indian Air Force, Indian Navy and Indian
        Coast Guard. The various paramilitary organizations and various
        inter-service institutions also help the Indian Armed Forces. The
        Ministry of Defense is responsible for the management of armed forces in
        India. Armed forces offer very exciting career to young men and women in
        several fields. Career in the forces promises a life full of adventure.
        To ensure that appropriate candidates are chosen, a comprehensive
        selection process is adopted by the armed forces through Service
        Selection Board (SSB) Interview. Selection procedure involves three
        phases: Objective test, Interview and medical examination. Candidates
        applying for Air force and Navy must have Physics and Maths in the +2
        level exam. Students can apply after class 12 (NDA) or after graduation
        (CDS) for defense services. Candidates finally selected by SSB are
        absorbed by armed forces. Individuals are exposed to various forms of
        training and promotions at different levels.
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

export default Security;
