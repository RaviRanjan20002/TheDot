import hotel from "../../../assets/hotel.avif";
import hmg from "../../../assets/hmg.avif";
import tour from "../../../assets/tour.avif";
import ctmg from "../../../assets/ctmg.avif";
import bthr from "../../../assets/bthr.avif";
import trd from "../../../assets/trd.avif";
import accountant from "../../../assets/accountant.jpg";
import bartending from "../../../assets/bartending.jpg";
import chef from "../../../assets/chef.jpg";
import concierge from "../../../assets/concierge.jpg";
import manymore from "../../../assets/manymore.jpg";
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
  {
    title: "Accountant",
    image: accountant,
    path: "https://en.wikipedia.org/wiki/Accountant",
  },
  {
    title: "Bartending",
    image: bartending,
    path: "https://en.wikipedia.org/wiki/Bartender",
  },
  {
    title: "Chef and Culinary Artists",
    image: chef,
    path: "https://en.wikipedia.org/wiki/Chef",
  },
  {
    title: "Concierge",
    image: concierge,
    path: "https://en.wikipedia.org/wiki/Concierge",
  },
    {
      title: "& many more",
      image: manymore,
      path: "https://en.wikipedia.org/wiki/Hospitality_industry"
    }
];

const Hospitality = () => {
  return (
    <div className="container">
      <h2 className="title">Hospitality Industry</h2>
      <p className="description">
        The hospitality and tourism industry is a vast sector that includes all
        the economic activities that directly or indirectly contribute to, or
        depend upon, travel, tourism and hospitality. This industry sector
        includes: Hotels & Resorts. Restaurants & Catering. Night Clubs & Bars.
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

export default Hospitality;
