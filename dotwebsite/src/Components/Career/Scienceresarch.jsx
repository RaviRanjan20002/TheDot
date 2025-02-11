import Astronaut from "../../assets/astr.avif";
import bio from "../../assets/bio.avif";
import chemist from "../../assets/chemist.avif";
import fs from "../../assets/fs.avif";
import Geologist from "../../assets/Geologist.avif";
import rs from "../../assets/rs.avif";
import manymore from "../../assets/manymore.jpg";
const careers = [
    {
      title: "Astronaut",
      image: Astronaut,
      path: "https://en.wikipedia.org/wiki/Astronaut",
    },
    {
      title: "Biologist",
      image: bio,
      path: "https://en.wikipedia.org/wiki/Biologist",
    },
    {
      title: "Chemist",
      image: chemist,
      path: "https://en.wikipedia.org/wiki/Chemist",
    },
    {
      title: "Food Scientist",
      image: fs,
      path: "https://en.wikipedia.org/wiki/Food_science",
    },
    {
      title: "Geologist",
      image: Geologist,
      path: "https://en.wikipedia.org/wiki/Geologist",
    },
    {
      title: "Research Scientist",
      image: rs,
      path: "https://en.wikipedia.org/wiki/Scientific_research",
    },
    {
          title: "& many more",
          image: manymore,
          path: "https://en.wikipedia.org/wiki/Science",
    },
  ];
const Scienceresarch = () => {
  return (
    <div className="container">
      <h2 className="title">Science and Research</h2>
      <p className="description">
      Careers in science and research drive innovation and discovery in fields like space exploration, biology, chemistry, and food science, contributing to technology, healthcare, and solving global challenges. These roles require curiosity, analytical skills, and a passion for advancing knowledge.
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

export default Scienceresarch;
