import AIML from "../../assets/aiml.jpg";
import Blockchain from "../../assets/blockchain.avif";
import BI from "../../assets/bi.jpg";
import Cybersecurity from "../../assets/cybersecurity.jpg";
import DataScience from "../../assets/DataScientist.avif";
import DatabaseAdmin from "../../assets/databaseadmin.jpg";
import DevOps from "../../assets/devops.jpg";
import DigitalNomad from "../../assets/digitalnomad.jpg";


// import eSports from "../../../assets/esports.avif";
// import EthicalHacker from "../../../assets/ethicalhacker.avif";
// import ISManager from "../../../assets/ismanager.avif";
// import ITConsultant from "../../../assets/itconsultant.avif";
// import ITDirector from "../../../assets/itdirector.avif";
// import ITManager from "../../../assets/itmanager.avif";
// import ITProjectManager from "../../../assets/itprojectmanager.avif";
// import ITSupport from "../../../assets/itsupport.avif";
// import NetworkAdmin from "../../../assets/networkadmin.avif";
// import SoftwareArchitect from "../../../assets/softwarearchitect.avif";
// import SoftwareDeveloper from "../../../assets/softwaredeveloper.avif";
// import SystemsAdmin from "../../../assets/systemsadmin.avif";
// import SystemsAnalyst from "../../../assets/systemsanalyst.avif";
// import UXUIDesigner from "../../../assets/uxui.avif";
// import VRDeveloper from "../../../assets/vrdeveloper.avif";
// import WebDeveloper from "../../../assets/webdeveloper.avif";
import manymore from "../../assets/manymore.jpg";

const careers = [
  { title: "AI/ML Engineer", image: AIML, link: "https://en.wikipedia.org/wiki/Machine_learning_engineer" },
  { title: "Blockchain Developer", image: Blockchain, link: "https://en.wikipedia.org/wiki/Blockchain" },
  { title: "Business Intelligence Analyst", image: BI, link: "https://en.wikipedia.org/wiki/Business_intelligence" },
  { title: "Cybersecurity Analyst", image: Cybersecurity, link: "https://en.wikipedia.org/wiki/Computer_security" },
  { title: "Data Scientist", image: DataScience, link: "https://en.wikipedia.org/wiki/Data_science" },
  { title: "Database Administrator", image: DatabaseAdmin, link: "https://en.wikipedia.org/wiki/Database_administrator" },
  { title: "DevOps Engineer", image: DevOps, link: "https://en.wikipedia.org/wiki/DevOps" },
  { title: "Digital Nomad", image: DigitalNomad, link: "https://en.wikipedia.org/wiki/Digital_nomad" },

  // { title: "eSports Manager", image: eSports, link: "https://en.wikipedia.org/wiki/Esports" },
  // { title: "Ethical Hacker", image: EthicalHacker, link: "https://en.wikipedia.org/wiki/Ethical_hacking" },
  // { title: "Information Systems Manager", image: ISManager, link: "https://en.wikipedia.org/wiki/Information_systems" },
  // { title: "IT Consultant", image: ITConsultant, link: "https://en.wikipedia.org/wiki/IT_consulting" },
  // { title: "IT Director", image: ITDirector, link: "https://en.wikipedia.org/wiki/Chief_information_officer" },
  // { title: "IT Manager", image: ITManager, link: "https://en.wikipedia.org/wiki/Information_technology_management" },
  // { title: "IT Project Manager", image: ITProjectManager, link: "https://en.wikipedia.org/wiki/Project_management" },
  // { title: "IT Support Specialist", image: ITSupport, link: "https://en.wikipedia.org/wiki/Technical_support" },
  // { title: "Network Administrator", image: NetworkAdmin, link: "https://en.wikipedia.org/wiki/Network_administrator" },
  // { title: "Software Architect", image: SoftwareArchitect, link: "https://en.wikipedia.org/wiki/Software_architecture" },
  // { title: "Software Developer", image: SoftwareDeveloper, link: "https://en.wikipedia.org/wiki/Software_developer" },
  // { title: "Systems Administrator", image: SystemsAdmin, link: "https://en.wikipedia.org/wiki/System_administrator" },
  // { title: "Systems Analyst", image: SystemsAnalyst, link: "https://en.wikipedia.org/wiki/Systems_analysis" },
  // { title: "UX/UI Designer", image: UXUIDesigner, link: "https://en.wikipedia.org/wiki/User_experience_design" },
  // { title: "Virtual Reality Developer", image: VRDeveloper, link: "https://en.wikipedia.org/wiki/Virtual_reality" },
  // { title: "Web Developer", image: WebDeveloper, link: "https://en.wikipedia.org/wiki/Web_development" },
  { 
    title: "& many more", 
    image: manymore, 
    link: "https://en.wikipedia.org/wiki/Information_technology" 
  },
];

const IT = () => {
  return (
    <div className="container">
      <h1>Information Technology Careers</h1>
      <p className="description">
        The IT industry is at the heart of the digital revolution, offering diverse roles from software development to cybersecurity.
        As technology continues to evolve, professionals in this field are in high demand to innovate, secure, and optimize digital solutions
        across industries worldwide. Whether you are interested in coding, data analysis, or managing complex systems, IT has a career path for you.
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

export default IT;