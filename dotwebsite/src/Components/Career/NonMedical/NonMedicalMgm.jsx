import engineer from "../../../assets/engineer.jpg";
import architect from "../../../assets/architectcc.jpg";
import pilot from "../../../assets/pilot.jpg";
import softwareDeveloper from "../../../assets/softwareDeveloper.jpg";
import dataScientist from "../../../assets/dataScientist.jpg";
import statistician from "../../../assets/statistician.jpg";
import physicist from "../../../assets/physicist.jpg";
import chemist from "../../../assets/chemist.jpg";
import mathematician from "../../../assets/mathematician.jpg";
import manymore from "../../../assets/manymore.jpg";

const careers = [
  {
    title: "Engineer",
    image: engineer,
    path: "https://en.wikipedia.org/wiki/Engineer",
  },
  {
    title: "Architect",
    image: architect,
    path: "https://en.wikipedia.org/wiki/Architect",
  },
  {
    title: "Pilot",
    image: pilot,
    path: "https://en.wikipedia.org/wiki/Pilot_(aeronautics)",
  },
  {
    title: "Software Developer",
    image: softwareDeveloper,
    path: "https://en.wikipedia.org/wiki/Software_developer",
  },
  {
    title: "Data Scientist",
    image: dataScientist,
    path: "https://en.wikipedia.org/wiki/Data_science",
  },
  {
    title: "Statistician",
    image: statistician,
    path: "https://en.wikipedia.org/wiki/Statistician",
  },
  {
    title: "Physicist",
    image: physicist,
    path: "https://en.wikipedia.org/wiki/Physicist",
  },
  {
    title: "Chemist",
    image: chemist,
    path: "https://en.wikipedia.org/wiki/Chemist",
  },
  {
    title: "Mathematician",
    image: mathematician,
    path: "https://en.wikipedia.org/wiki/Mathematician",
  },
  { 
    title: "& many more", 
    image: manymore, 
    path: "https://en.wikipedia.org/wiki/Science"
  },
];

const NonMedicalMgm = () => {
  return (
    <div className="container">
      <h2 className="title">Non-Medical Career</h2>
      <p className="description">
        Non-medical fields offer a wide range of challenging and rewarding career paths in engineering, technology, and the sciences. These careers often require strong problem-solving skills, creativity, and specialized training or education.
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

export default NonMedicalMgm;
