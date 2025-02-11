
import rail from "../../assets/rail.avif";
import Customs from "../../assets/custom.avif";
import Excise from "../../assets/excise.avif";
import IncomeTax from "../../assets/income.avif";
import civilservices from "../../assets/civils.avif";
import iss from "../../assets/IndianStatisticalService.avif";
import ifs from "../../assets/ifs.avif";
import icls from "../../assets/icls.avif";
import ils from "../../assets/ils.avif";
import cls from "../../assets/cls.avif";
import clss from "../../assets/clss.avif";
import manymore from "../../assets/manymore.jpg";

const careers = [
  { title: "Railways", image: rail, path: "https://en.wikipedia.org/wiki/Indian_Railways" },
  { title: "Customs", image: Customs, path: "https://en.wikipedia.org/wiki/Customs_duty" },
  { title: "Excise", image: Excise, path: "https://en.wikipedia.org/wiki/Excise_tax" },
  { title: "Income Tax", image: IncomeTax, path: "https://en.wikipedia.org/wiki/Income_tax_in_India" },
  { title: "Civil Services", image: civilservices, path: "https://en.wikipedia.org/wiki/Civil_services_in_India" },
  { title: "Indian Statistical Service", image: iss, path: "https://en.wikipedia.org/wiki/Indian_Statistical_Service" },
  { title: "Indian Foreign Service", image: ifs, path: "https://en.wikipedia.org/wiki/Indian_Foreign_Service" },
  { title: "Indian Corporate Law Service (ICLS)", image: icls, path: "https://en.wikipedia.org/wiki/Indian_Corporate_Law_Service" },
  { title: "Indian Legal Service", image: ils, path: "https://en.wikipedia.org/wiki/Ministry_of_Law_and_Justice_(India)" },
  { title: "Central Labour Service", image: cls, path: "https://en.wikipedia.org/wiki/Ministry_of_Labour_and_Employment_(India)" },
  { title: "Central Secretariat Service", image: clss, path: "https://en.wikipedia.org/wiki/Central_Secretariat_Service" },
  {
    title: "& many more",
    image: manymore,
    path: "https://en.wikipedia.org/wiki/Civil_services_in_India"
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
        fields such as law and order,administration, international representation, and public welfare.
      </p>

      <h3 className="subtitle">Click below to explore any of the following career(s)</h3>

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

export default Civil;
