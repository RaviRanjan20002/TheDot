import Cutter from "../../../assets/Cutter.avif";
import pm from "../../../assets/pm.avif";
import saless from "../../../assets/saless.avif";
import td from "../../../assets/td.avif";
import sm from "../../../assets/sm.avif";
import tas from "../../../assets/tas.avif";
import manymore from "../../../assets/manymore.jpg";
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
    <div className="lawcontainer">
      <h2 className="lawtitle">Textile and Clothing Industry</h2>
      <p className="lawdescription">
        The textile and clothing industry is a vital part of the global economy,
        involving the design, production, and distribution of textiles and
        apparel. Careers in this industry range from designing fabrics to
        managing sales and ensuring quality control. Professionals in this field
        work on innovations in fabric technology, sustainable fashion, and
        efficient manufacturing processes. Whether you are interested in
        creative design, production, or retail management, the textile industry
        offers diverse career paths with opportunities to influence fashion
        trends and contribute to global markets.
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

export default Textile;
