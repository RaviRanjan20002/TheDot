import "./Law.css";
import Laww from "../../../assets/laww.avif";
import Public from "../../../assets/public.avif";
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
];

const Law = () => {
  return (
    <div className="lawcontainer">
      <h2 className="lawtitle">Law and Public Policy</h2>
      <p className="lawdescription">
        A law degree arms one with serious advocacy skills, enabling one to
        argue in favor of any cause. Lawyers advise clients and provide
        solutions to legal issues at both private and public levels. They
        interpret laws, rules, and regulations and prepare legal documents. They
        argue and debate at the courts and take decisions on legal matters. As a
        lawyer, one is expected to apply abstract law theories to solve problems
        of clients in a diverse set of situations. India has over twelve lakh
        lawyers, but according to reports, only one-fifth of them are capable of
        practicing law in the courts. Thus, there is a huge demand for well-trained
        & skilled lawyers. With the increase in the number of premier law
        colleges in the country and the increasing demand from the industry, a
        career in law is an extremely lucrative option for the youth. Today, a
        huge range of specialization options has also emerged for lawyers such
        as International Taxation Law, Cyber Law, Environmental Law, Sports
        Management Law, IPR, Aviation Law, and Mergers & Acquisitions Law, etc.
        Students interested in making a career in law can either do a 5-year
        course straight after the 12th class or a three-year law course after
        graduation in any discipline. After graduation, one can further
        specialize by pursuing an LLM from an Indian or global
        university/college. People in the field of law work at various
        corporate houses, law agencies, law firms, litigation, and
        administrative services, amongst others. Today, leading law firms are the
        most sought-after destinations for Law Graduates. Some of the top law
        firms in the country are Amarchand Mangaldas, AZB & Partners, J Sagar
        Associates, Khaitan & Co, Luthra & Luthra. Trending Fields: Corporate
        Law, International Taxation, Cyber Law.
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

export default Law;
