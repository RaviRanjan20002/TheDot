import hotel from "../../../assets/hotel.avif";
import hmg from "../../../assets/hmg.avif";
import tour from "../../../assets/tour.avif";
import ctmg from "../../../assets/ctmg.avif";
import bthr from "../../../assets/bthr.avif";
import trd from "../../../assets/trd.avif";

const careers = [
  {
    title: "Hotel Management",
    image: hotel,
    path: "https://en.wikipedia.org/wiki/Hotel_management",
  },
  {
    title: "Hotel Manager",
    image: hmg,
    path: "https://en.wikipedia.org/wiki/Hotel_manager",
  },
  {
    title: "Tour Guiding",
    image: tour,
    path: "https://en.wikipedia.org/wiki/Tour_guide",
  },
  {
    title: "Catering Manager",
    image: ctmg,
    path: "https://en.wikipedia.org/wiki/Catering",
  },
  {
    title: "Beauty Therapist",
    image: bthr,
    path: "https://en.wikipedia.org/wiki/Beauty_therapy",
  },
  {
    title: "Training and Development",
    image: trd,
    path: "https://en.wikipedia.org/wiki/Training_and_development",
  },
];

const Hospitality = () => {
  return (
    <div className="lawcontainer">
      <h2 className="lawtitle">Hospitality Industry</h2>
      <p className="lawdescription">
        The hospitality and tourism industry is a vast sector that includes all
        the economic activities that directly or indirectly contribute to, or
        depend upon, travel, tourism and hospitality. This industry sector
        includes: Hotels & Resorts. Restaurants & Catering. Night Clubs & Bars.
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

export default Hospitality;
