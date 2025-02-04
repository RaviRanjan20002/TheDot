import "./Arts.css";
import Music from "../../../assets/Musics.avif";
import Choreographer from "../../../assets/Choreographer.avif";
import ActingDramatics from "../../../assets/ActingDramatics.avif";
import Modelling from "../../../assets/Modelling.avif";
import stage from "../../../assets/stage.avif";

const careers = [
  {
    title: "Music",
    image: Music,
    path: "https://www.ift.org/career-development/learn-about-food-science/food-facts/about-fs-and-t",
  },
  {
    title: "Choreographer",
    image: Choreographer,
    path: "https://www.usda.gov/farming-and-ranching/plants-and-crops/biotechnology/agricultural-biotechnology-glossary#:~:text=Agricultural%20Biotechnology%3A%20A%20range%20of,microorganisms%20for%20specific%20agricultural%20uses.",
  },
  {
    title: "Acting/Dramatics",
    image: ActingDramatics,
    path: "https://www.ift.org/career-development/learn-about-food-science/food-facts/about-fs-and-t",
  },
  {
    title: "Modelling",
    image: Modelling ,
    path: "https://www.usda.gov/farming-and-ranching/plants-and-crops/biotechnology/agricultural-biotechnology-glossary#:~:text=Agricultural%20Biotechnology%3A%20A%20range%20of,microorganisms%20for%20specific%20agricultural%20uses.",
  },
  {
    title: "Stage lighting",
    image: stage,
    path: "https://www.ift.org/career-development/learn-about-food-science/food-facts/about-fs-and-t",
  },
];

const Arts = () => {
  return (
    <div className="lawcontainer">
      <h2 className="lawtitle">Arts and Design</h2>
      <p className="lawdescription">
        Performing arts is an art form where the artists express themselves in
        front of audience through their physical abilities like body movements,
        facial expressions, vocals and gestures. Performing arts is divided into
        three art forms namely, music, dance and drama. Music consists of
        knowing the theories of music, notes, principles of singing and
        composing music. Dance, on the other hand is the rhythmic movement of
        body in sync with the background sound and music. Drama comprises of the
        depiction of a story through the amalgamation of dance and music along
        with use of gestures, language, speech and facial expressions. Apart
        from the basic academic requirement, a person should be interested in
        the particular art form along with enough talent and skills to pursue it
        as a career. India is the largest producer of films all over the world
        and our culture has always cherished different art forms, which
        continues till date. There are many institutes and universities that
        provides education in performance at certificate level, diploma level,
        bachelors and masters level. Minimum requirement for certificate
        courses is Xth board certificate; while for diploma and bachelors level
        it is 10+2 board certificate. If one wants to study at the masters
        level, bachelors degree in relevant subjects is mandatory. Performing
        art has a lot of scope in todays time and age. One can be placed in
        theatre groups, entertainment companies, television, as well as the film
        industry or work independently as freelancers.
      </p>
      {/* <p className="agriread-more">Read more</p> */}

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

export default Arts;
