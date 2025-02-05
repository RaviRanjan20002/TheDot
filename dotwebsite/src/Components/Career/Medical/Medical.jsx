import "./Medical.css";
import doctor from "../../../assets/doctor.jpg";
import Veterinarian from "../../../assets/Veterinarian.avif";
import Homeopathy from "../../../assets/Homeopathy.avif";
import Ayurveda from "../../../assets/Ayurveda.avif";
import Dentist from "../../../assets/Dentist.avif";
import Pathologist from "../../../assets/Pathologist.avif";
import Anesthesiologist from "../../../assets/Anesthesiologist.avif";
import  SportsMedicine from "../../../assets/SportsMedicine.avif";
import Psychiatry from "../../../assets/Psychiatry.avif"
const careers = [
  {
    title: "Doctor",
    image: doctor,
    path: "https://www.ift.org/career-development/learn-about-food-science/food-facts/about-fs-and-t",
  },
  {
    title: "Veterinarian",
    image: Veterinarian,
    path: "https://www.usda.gov/farming-and-ranching/plants-and-crops/biotechnology/agricultural-biotechnology-glossary#:~:text=Agricultural%20Biotechnology%3A%20A%20range%20of,microorganisms%20for%20specific%20agricultural%20uses.",
  },
  {
    title: "Homeopathy",
    image: Homeopathy,
    path: "https://www.britannica.com/science/agronomy",
  },
  {
    title: "Ayurveda",
    image: Ayurveda,
    path: "https://www.britannica.com/science/plant-breeding",
  },
  {
    title: "Dentist",
    image: Dentist,
    path: "https://en.wikipedia.org/wiki/Soil_science#:~:text=Soil%20science%20is%20the%20study,use%20and%20management%20of%20soils.",
  },
  {
    title: "Pathologist",
    image: Pathologist,
    path: "https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/dairy-technology#:~:text=Dairy%20husbandry%20involves%20the%20production,wholesome%2C%20and%20sensorially%20desirable%20products.",
  },
  {
    title: "Anesthesiologist",
    image: Anesthesiologist,
    path: "https://en.wikipedia.org/wiki/Soil_science#:~:text=Soil%20science%20is%20the%20study,use%20and%20management%20of%20soils.",
  },
  {
    title: "Sports Medicine",
    image: SportsMedicine,
    path: "https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/dairy-technology#:~:text=Dairy%20husbandry%20involves%20the%20production,wholesome%2C%20and%20sensorially%20desirable%20products.",
  },
  {
    title: "Psychiatry",
    image: Psychiatry,
    path: "https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/dairy-technology#:~:text=Dairy%20husbandry%20involves%20the%20production,wholesome%2C%20and%20sensorially%20desirable%20products.",
  },
];

const Medical = () => {
  return (
    <div className="doccontainer">
      <h2 className="doctitle">Medical</h2>
      <p className="docdescription">
        Medicine is one of the most valuable and sought after career for those
        interested in science. There is immense scope for medicine as a
        professional career. It is a very challenging profession and requires
        utmost patience to excel. Career gestation period in medicine is
        relatively longer than other career options as specialization post the
        MBBS degree is highly recommended. Intricate and fast lifestyles have
        given rise to multiple new diseases, which the general doctors armed
        with a MBBS degree find difficult to deal with. This makes
        specializations a necessity in this field. Specialization may include
        General Surgery, General Medicine, Pediatrics, Obstetrics, Gynecology,
        Neurology, Ophthalmology, Cardiology, Dermatology, anesthesiology etc.
        Other systems of medicine like Homeopathy, Ayurveda, Unani, Dentistry &
        Veterinary Science are also fast emerging fields with excellent career
        opportunities. Medical Science courses are offered at undergraduate,
        postgraduate and doctorate levels. At the undergraduate level, an MBBS
        degree is awarded in allopathic system of medical science, whereas in
        Homeopathic, Unani System and Ayurvedic System of Medical science, BHMS,
        BUMS and BAMS degree are awarded. A BDS degree is awarded at the
        undergraduate level in dental science. For veterinary science, BSc
        degree is awarded. The competition environment in the field of Medicine
        is extremely vigorous as the number of seats in premier institutes is
        significantly less in comparison to the aspiring candidates. However
        with the increasing focus on healthcare, the number of medical colleges
        in the country is rapidly increasing. Candidate seeking admission in the
        field of medicine should have had the subject combination of Science
        with Biology at 10+2 level. Entrance test like: NEET (National
        Eligibility cum Entrance Test) is the gateway to various medical
        colleges across the country, both private as well as public. Top
        recruiting companies include- Fortis, Apollo and Max amongst others.
        Trending fields include- Cardiologist, Surgeon, Psychiatrist,
        Neurologist
      </p>
      {/* <p className="agriread-more">Read more</p> */}

      <h3 className="docsubtitle">
        Click below to explore any of the following career(s)
      </h3>

      <div className="doccareer-grid">
        {careers.map((career, index) => (
          <div key={index} className="doccareer-card">
            <a href={career.path} target="_blank" rel="noopener noreferrer">
              <img
                src={career.image}
                alt={career.title}
                className="doccareer-image"
              />
              <p className="doccareer-title">{career.title}</p>
            </a>
            <a href={career.path} target="_blank" rel="noopener noreferrer" className="button">
               See Details
             </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medical;
