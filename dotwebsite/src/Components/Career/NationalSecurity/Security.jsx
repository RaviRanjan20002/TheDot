import Army from "../../../assets/army.avif";
import Navy from "../../../assets/navy.avif";
import Iaf from "../../../assets/iaf.avif";
import caf from "../../../assets/caf.avif";
import bsf from "../../../assets/bsf.avif";
import cid from "../../../assets/cid.avif";
import manymore from "../../../assets/manymore.jpg";

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
  {
    title: "& many more",
    image: manymore,
    path: "https://en.wikipedia.org/wiki/Indian_Armed_Forces",
  },
];

const Security = () => {
  return (
    <div className="container">
      <h2 className="title">National Security and Emergency Services</h2>
      <p className="description">
      A career in the Indian Armed Forces offers prestige, adventure, and diverse opportunities in the Army, Navy, Air Force, and Coast Guard, with selection through SSB interviews, tests, and medical exams. Candidates can apply after Class 12 (NDA) or graduation (CDS), followed by rigorous training and career growth.
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

export default Security;
