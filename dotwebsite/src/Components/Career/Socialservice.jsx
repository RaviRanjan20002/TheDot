// Import images
import LifeCoach from "../../assets/life.avif";
import ChildWelfare from "../../assets/child.avif";
import Psychologist from "../../assets/Psychologist.avif";
import YouthCounselor from "../../assets/youth.avif";
import manymore from "../../assets/manymore.jpg";

const careers = [
  { title: "Life Coach", image: LifeCoach, link: "https://en.wikipedia.org/wiki/Life_coach" },
  { title: "Child Welfare Worker", image: ChildWelfare, link: "https://en.wikipedia.org/wiki/Child_protection" },
  { title: "Psychologist", image: Psychologist, link: "https://en.wikipedia.org/wiki/Psychologist" },
  { title: "Youth Counselor", image: YouthCounselor, link: "https://en.wikipedia.org/wiki/Counseling_psychology" },
  { 
    title: "& many more", 
    image: manymore, 
    link: "https://en.wikipedia.org/wiki/Social_work"
  },
];

const Socialservice = () => {
  return (
    <div className="container">
      <h1>Social Services and Counseling</h1>
      <p className="description">
        Social services and counseling play a vital role in supporting individuals, 
        families, and communities in need. Professionals in this field work to improve 
        mental health, provide guidance, and offer emotional support to those facing 
        personal and social challenges. Careers in social work, psychology, and 
        counseling allow individuals to make a meaningful impact by helping others 
        navigate life’s difficulties and improve their well-being.
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

export default Socialservice;
