// Import images
import AircraftMechanic from "../../../assets/AircraftMechanic.avif";
import Designer from "../../../assets/Designer.avif";
import MetalWorker from "../../../assets/MetalWorker.avif";
import qe from "../../../assets/qe.avif";
import wm from "../../../assets/wm.avif";
import manymore from "../../../assets/manymore.jpg";

const careers = [
  { title: "Aircraft Mechanic", image: AircraftMechanic, link: "https://en.wikipedia.org/wiki/Aircraft_maintenance_technician" },
  { title: "Designer", image: Designer, link: "https://en.wikipedia.org/wiki/Design" },
  { title: "Metal Worker", image: MetalWorker, link: "https://en.wikipedia.org/wiki/Metalworking" },
  { title: "Quality Engineer", image: qe, link: "https://en.wikipedia.org/wiki/Quality_engineering" },
  { title: "Warehouse Manager", image: wm, link: "https://en.wikipedia.org/wiki/Warehouse" },
  { 
    title: "& many more", 
    image: manymore, 
    link: "https://en.wikipedia.org/wiki/Manufacturing"
  },
];

const Manufacturing = () => {
  return (
    <div className="container">
      <h1>Manufacturing and Industrial Careers</h1>
      <p className="description">
        Manufacturing and industrial careers play a vital role in producing goods and 
        maintaining supply chains worldwide. These careers require expertise in design, 
        engineering, mechanics, and quality control to ensure efficiency and innovation. 
        From aircraft maintenance to metalworking, each profession in this field contributes 
        to building and maintaining essential infrastructure and products used daily. 
        Advancements in automation, robotics, and sustainable practices continue to shape 
        the future of manufacturing, making it an ever-evolving and dynamic industry.
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

export default Manufacturing;
