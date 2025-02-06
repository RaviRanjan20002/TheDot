
import rail from "../../../assets/rail.avif";
import Customs from "../../../assets/custom.avif";
import Excise from "../../../assets/excise.avif";
import IncomeTax from "../../../assets/income.avif";
import civilservices from "../../../assets/civils.avif";
import iss from "../../../assets/IndianStatisticalService.avif";
import ifs from "../../../assets/ifs.avif";
import icls from "../../../assets/icls.avif";
import ils from "../../../assets/ils.avif";
import cls from "../../../assets/cls.avif";
import clss from "../../../assets/clss.avif";
import manymore from "../../../assets/manymore.jpg";

const careers = [
  { title: "Railways", image: rail, path: "https://www.indianrailways.gov.in/" },
  { title: "Customs", image: Customs, path: "https://www.cbic.gov.in/" },
  { title: "Excise", image: Excise, path: "https://www.cbic.gov.in/" },
  { title: "Income Tax", image: IncomeTax, path: "https://incometaxindia.gov.in/" },
  { title: "Civil Services", image: civilservices, path: "https://www.upsc.gov.in/" },
  { title: "Indian Statistical Service", image: iss, path: "https://www.mospi.gov.in/" },
  { title: "Indian Foreign Service", image: ifs, path: "https://www.mea.gov.in/" },
  { title: "Indian Corporate Law Service (ICLS)", image: icls, path: "https://www.mca.gov.in/" },
  { title: "Indian Legal Service", image: ils, path: "https://lawmin.gov.in/" },
  { title: "Central Labour Service", image: cls, path: "https://labour.gov.in/" },
  { title: "Central Secretariat Service", image: clss, path: "https://persmin.gov.in/" },
  {
    title: "& many more",
    image: manymore,
    path: "https://www.google.com/search?q=Indian+Civil+Services+Careers"
  }
];

const Civil = () => {
  return (
    <div className="container">
      <h1>Civil Services</h1>
      <p className="description">
        The civil service system is the backbone of the administrative machinery of the country.
        The Union Public Service Commission conducts a nationwide competitive examination for 
        recruitment to various Civil Services of the Government of India. Civil Services offer an 
        attractive and challenging career to the ambitious, aspiring, and talented youth of the country. 
        Jobs in civil services are symbols of great power, social recognition, and affluence, covering 
        fields such as law and order, administration, international representation, and public welfare.
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

export default Civil;
