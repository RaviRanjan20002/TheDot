import Astronaut from "../../../assets/astr.avif";
import bio from "../../../assets/bio.avif";
import chemist from "../../../assets/chemist.avif";
import fs from "../../../assets/fs.avif";
import Geologist from "../../../assets/Geologist.avif";
import rs from "../../../assets/rs.avif";
import manymore from "../../../assets/manymore.jpg";
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
    <div className="lawcontainer">
      <h2 className="lawtitle">Science and Research</h2>
      <p className="lawdescription">
        Science and research careers involve the pursuit of knowledge, discovery, 
        and innovation in various fields such as space exploration, biology, chemistry, 
        geology, and food science. Scientists and researchers play a crucial role in 
        advancing technology, improving healthcare, understanding the natural world, 
        and solving global challenges. Careers in science and research require 
        curiosity, analytical skills, and a passion for experimentation and discovery. 
        From astronauts exploring space to food scientists ensuring nutrition and safety, 
        these professions contribute significantly to society and the future of humanity.
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

export default Scienceresarch;
