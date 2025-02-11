
import doctor from "../../assets/doctor.jpg";
import Veterinarian from "../../assets/Veterinarian.avif";
import Homeopathy from "../../assets/Homeopathy.avif";
import Ayurveda from "../../assets/Ayurveda.avif";
import Dentist from "../../assets/Dentist.avif";
import Pathologist from "../../assets/Pathologist.avif";
import Anesthesiologist from "../../assets/Anesthesiologist.avif";
import SportsMedicine from "../../assets/SportsMedicine.avif";
import Psychiatry from "../../assets/Psychiatry.avif";
import manymore from "../../assets/manymore.jpg";
const careers = [
  {
    title: "Doctor",
    image: doctor,
    path: "https://en.wikipedia.org/wiki/Physician",
  },
  {
    title: "Veterinarian",
    image: Veterinarian,
    path: "https://en.wikipedia.org/wiki/Veterinarian",
  },
  {
    title: "Homeopathy",
    image: Homeopathy,
    path: "https://en.wikipedia.org/wiki/Homeopathy",
  },
  {
    title: "Ayurveda",
    image: Ayurveda,
    path: "https://en.wikipedia.org/wiki/Ayurveda",
  },
  {
    title: "Dentist",
    image: Dentist,
    path: "https://en.wikipedia.org/wiki/Dentist",
  },
  {
    title: "Pathologist",
    image: Pathologist,
    path: "https://en.wikipedia.org/wiki/Pathology",
  },
  {
    title: "Anesthesiologist",
    image: Anesthesiologist,
    path: "https://en.wikipedia.org/wiki/Anesthesiology",
  },
  {
    title: "Sports Medicine",
    image: SportsMedicine,
    path: "https://en.wikipedia.org/wiki/Sports_medicine",
  },
  {
    title: "Psychiatry",
    image: Psychiatry,
    path: "https://en.wikipedia.org/wiki/Psychiatry",
  },
    { 
      title: "& many more", 
      image: manymore, 
      path: "https://en.wikipedia.org/wiki/Medicine"
    },
];

const Medical = () => {
  return (
    <div className="container">
      <h2 className="title">Medical Career</h2>
      <p className="description">
      Medicine is a challenging yet rewarding science career with high demand, requiring specialized training beyond the MBBS degree.  Diverse opportunities exist in various specializations, though competition is intense, and biology at 10+2 with NEET is required.
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

export default Medical;