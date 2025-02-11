import Cutter from "../../assets/Cutter.avif";
import pm from "../../assets/pm.avif";
import saless from "../../assets/saless.avif";
import td from "../../assets/td.avif";
import sm from "../../assets/sm.avif";
import tas from "../../assets/tas.avif";
import manymore from "../../assets/manymore.jpg";
const careers = [
  {
    title: "Cutter",
    image: Cutter,
    path: "https://en.wikipedia.org/wiki/Cutting_(textile_industry)",
  },
  {
    title: "Pattern Maker",
    image: pm,
    path: "https://en.wikipedia.org/wiki/Pattern_(sewing)",
  },
  {
    title: "Sales Manager",
    image: saless,
    path: "https://en.wikipedia.org/wiki/Sales_management",
  },
  {
    title: "Textile Designer",
    image: td,
    path: "https://en.wikipedia.org/wiki/Textile_design",
  },
  {
    title: "Showroom Manager",
    image: sm,
    path: "https://en.wikipedia.org/wiki/Retail_management",
  },
  {
    title: "Trimmer and Inspector",
    image: tas,
    path: "https://en.wikipedia.org/wiki/Quality_control",
  },
  {
    title: "& many more",
    image: manymore,
    path: "https://en.wikipedia.org/wiki/Textile_industry",
  },
];
const Textile = () => {
  return (
    <div className="container">
      <h2 className="title">Textile and Clothing Industry</h2>
      <p className="description">
      The textile and clothing industry offers diverse careers in design, production, and sales, focusing on fabric innovation, sustainable fashion, and quality control. Professionals influence fashion trends and contribute to global markets and economies.
      </p>

      <h3 className="lawsubtitle">
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

export default Textile;
