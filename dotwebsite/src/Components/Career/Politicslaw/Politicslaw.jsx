
import Barrister from "../../../assets/Barrister.avif";
import Judge from "../../../assets/Judge.avif";
import Politician from "../../../assets/ActingDramatics.avif";
import Lawyer from "../../../assets/Lawyer.avif";
import NotaryPublic from "../../../assets/np.avif";
import manymore from "../../../assets/manymore.jpg";

const careers = [
  { title: "Barrister", image: Barrister, link: "https://en.wikipedia.org/wiki/Barrister" },
  { title: "Judge", image: Judge, link: "https://en.wikipedia.org/wiki/Judge" },
  { title: "Politician", image: Politician, link: "https://en.wikipedia.org/wiki/Politician" },
  { title: "Lawyer", image: Lawyer, link: "https://en.wikipedia.org/wiki/Lawyer" },
  { title: "Notary Public", image: NotaryPublic, link: "https://en.wikipedia.org/wiki/Notary_public" },
  { 
    title: "& many more", 
    image: manymore, 
    link: "https://en.wikipedia.org/wiki/Law"
  },
];

const Politicslaw = () => {
  return (
    <div className="container">
      <h1>Politics and Law</h1>
      <p className="description">
        The fields of politics and law shape societies through governance, justice, and policy-making. 
        Lawyers and judges uphold the rule of law, ensuring fairness and justice, while politicians 
        influence legislation and public policies. Careers in this domain require strong analytical 
        skills, communication abilities, and a deep understanding of legal and political systems. 
        Whether advocating for justice, serving in government, or providing legal counsel, professionals 
        in politics and law play a crucial role in shaping the world.
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

export default Politicslaw;
