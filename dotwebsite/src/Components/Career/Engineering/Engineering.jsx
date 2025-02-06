import "./Engineering.css";

// Import images
import Computer from "../../../assets/computer.avif";
import Iteng from "../../../assets/Iteng.avif";
import electrical from "../../../assets/electric.avif";
import Mechanical from "../../../assets/mechanical.avif";
import production from "../../../assets/production.avif";
import aerospace from "../../../assets/aerospace.avif";
import ece from "../../../assets/ece.avif";
import civil from "../../../assets/civil.avif";
import cpl from "../../../assets/cpl.avif";
import manymore from "../../../assets/manymore.jpg";

const careers = [
  { title: "Computer Science and Engineering", image: Computer, link: "https://en.wikipedia.org/wiki/Computer_science_and_engineering" },
  { title: "Information and Technology", image: Iteng, link: "https://en.wikipedia.org/wiki/Information_technology" },
  { title: "Electric Engineering", image: electrical, link: "https://en.wikipedia.org/wiki/Electrical_engineering" },
  { title: "Mechanical Engineering", image: Mechanical, link: "https://en.wikipedia.org/wiki/Mechanical_engineering" },
  { title: "Production and Industrial Engineering", image: production, link: "https://en.wikipedia.org/wiki/Industrial_engineering" },
  { title: "Aerospace Engineering", image: aerospace, link: "https://en.wikipedia.org/wiki/Aerospace_engineering" },
  { title: "Electronics and Communication Engineering", image: ece, link: "https://en.wikipedia.org/wiki/Electronics_and_communications_engineering" },
  { title: "Civil Engineering", image: civil, link: "https://en.wikipedia.org/wiki/Civil_engineering" },
  { title: "Chemical and Petroleum Engineering", image: cpl, link: "https://en.wikipedia.org/wiki/Petroleum_engineering" },
  { title: "& many more", image: manymore, link: "https://www.google.com/search?q=Engineering+careers" },
];

const Engineering = () => {
  return (
    <div className="container">
      <h1>Engineering Careers</h1>
      <p className="description">
        Engineering is one of the most versatile degrees spanning multiple
        domains, ranging from aerospace to automobiles to healthcare to business
        and more. Engineers drive innovation and provide technological solutions
        that impact various aspects of our lives. Specializations include
        Electronics, Computer Science, Mechanical, Civil, Aerospace, and more.
        A four-year bachelor's degree from a reputed institution opens doors to
        top companies like Google, Facebook, Amazon, and Microsoft.
      </p>

      <h3 className="subtitle">Click below to explore any of the following career(s)</h3>

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

export default Engineering;
