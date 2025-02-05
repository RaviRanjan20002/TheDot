import Archaeologist from "../../../assets/Archaeologist.avif";
import Archivist from "../../../assets/Archivist.avif";
import MuseumCurator from "../../../assets/Museum Curator.avif";
const careers = [
  {
    title: "Archaeologist",
    image: Archaeologist,
    path: "https://en.wikipedia.org/wiki/Cultural_heritage_management",
  },
  {
    title: "Archivist",
    image: Archivist,
    path: "https://en.wikipedia.org/wiki/Cultural_heritage_management",
  },
  {
    title: " Museum Curator",
    image: MuseumCurator,
    path: "https://en.wikipedia.org/wiki/Cultural_heritage_management",
  },
];

const Cultures= () => {
  return (
    <div className="lawcontainer">
      <h2 className="lawtitle">Cultural Heritage Management</h2>
      <p className="lawdescription">
        Cultural heritage management (CHM) is the vocation and practice of
        managing cultural heritage.[1] It is a branch of cultural resources
        management (CRM), although it also draws on the practices of cultural
        conservation, restoration, museology, archaeology, history and
        architecture. While the term cultural heritage is generally used in
        Europe, in the US the term cultural resources is in more general use
        specifically referring to cultural heritage resources.
      </p>
      {/* <p className="agriread-more">Read more</p> */}

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

export default Cultures;
