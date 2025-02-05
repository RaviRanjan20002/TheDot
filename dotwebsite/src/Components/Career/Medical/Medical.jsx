import "./Medical.css";
import doctor from "../../../assets/doctor.jpg";
import Veterinarian from "../../../assets/Veterinarian.avif";
import Homeopathy from "../../../assets/Homeopathy.avif";
import Ayurveda from "../../../assets/Ayurveda.avif";
import Dentist from "../../../assets/Dentist.avif";
import Pathologist from "../../../assets/Pathologist.avif";
import Anesthesiologist from "../../../assets/Anesthesiologist.avif";
import SportsMedicine from "../../../assets/SportsMedicine.avif";
import Psychiatry from "../../../assets/Psychiatry.avif";

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
