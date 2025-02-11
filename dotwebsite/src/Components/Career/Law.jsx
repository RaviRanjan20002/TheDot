
import Laww from "../../assets/laww.avif";
import Public from "../../assets/public.avif";
import complianceOfficer from "../../assets/complianceOfficer.png";
import corporateCounsel from "../../assets/corporateCounsel.jpg";
import courtReporter from "../../assets/courtReporter.jpg";
import criminalDefenseAttorney from "../../assets/criminalDefenseAttorney.jpg";
import cyberLawExpert from "../../assets/cyberLawExpert.jpg";
import digitalPrivacyConsultant from "../../assets/digitalPrivacyConsultant.png";
// import employmentLawyer from "../../../assets/employmentLawyer.avif";
// import estatePlanner from "../../../assets/estatePlanner.avif";
// import familyLawyer from "../../../assets/familyLawyer.avif";
// import immigrationConsultant from "../../../assets/immigrationConsultant.avif";
// import intellectualPropertyLawyer from "../../../assets/intellectualPropertyLawyer.avif";
// import judge from "../../../assets/judge.avif";
// import lawClerk from "../../../assets/lawClerk.avif";
// import lawyer from "../../../assets/lawyer.avif";
// import legalConsultant from "../../../assets/legalConsultant.avif";
// import legalSecretary from "../../../assets/legalSecretary.avif";
// import legalTechSpecialist from "../../../assets/legalTechSpecialist.avif";
// import lobbyist from "../../../assets/lobbyist.avif";
// import mediator from "../../../assets/mediator.avif";
// import paralegal from "../../../assets/paralegal.avif";
// import publicDefender from "../../../assets/publicDefender.avif";
// import publicPolicyAnalyst from "../../../assets/publicPolicyAnalyst.avif";
// import realEstateLawyer from "../../../assets/realEstateLawyer.avif";
// import taxAttorney from "../../../assets/taxAttorney.avif";
import manymore from "../../assets/manymore.jpg";
const careers = [
  {
    title: "Law",
    image: Laww,
    path: "https://en.wikipedia.org/wiki/Law",
  },
  {
    title: "Public Prosecution",
    image: Public,
    path: "https://en.wikipedia.org/wiki/Public_prosecutor",
  },
  {
    title: "Compliance Officer",
    image: complianceOfficer,
    path: "https://en.wikipedia.org/wiki/Compliance_officer",
  },
  {
    title: "Corporate Counsel",
    image: corporateCounsel,
    path: "https://en.wikipedia.org/wiki/Corporate_counsel",
  },
  {
    title: "Court Reporter",
    image: courtReporter,
    path: "https://en.wikipedia.org/wiki/Court_reporter",
  },
  {
    title: "Criminal Defense Attorney",
    image: criminalDefenseAttorney,
    path: "https://en.wikipedia.org/wiki/Criminal_defense_lawyer",
  },
  {
    title: "Cyber Law Expert",
    image: cyberLawExpert,
    path: "https://en.wikipedia.org/wiki/Cyberlaw",
  },
  {
    title: "Digital Privacy Consultant",
    image: digitalPrivacyConsultant,
    path: "https://en.wikipedia.org/wiki/Privacy_law",
  },
  {
    title: "& many more",
    image: manymore,
    path: "https://en.wikipedia.org/wiki/Cultural_heritage_management",
  },
];

const Law = () => {
  return (
    <div className="container">
      <h2 className="title">Law and Public Policy</h2>
      <p className="description">
      A law degree provides strong advocacy skills for advising clients and solving legal issues, with high demand for well-trained lawyers despite a large number of practitioners.  Diverse specializations like cyber law and international taxation are emerging, and graduates can pursue 5-year or 3-year law courses followed by LLM, working in firms, corporations, or litigation.
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

export default Law;
