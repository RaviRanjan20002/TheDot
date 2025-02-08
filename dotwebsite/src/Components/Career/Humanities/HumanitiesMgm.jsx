import artist from "../../../assets/artist.jpg";
import historian from "../../../assets/HistoricPreservationist.jpg";
import psychologist from "../../../assets/psychologist.avif";
import journalist from "../../../assets/journalist.avif";
import fashionDesigner from "../../../assets/fashionDesigner.avif";
import graphicDesigner from "../../../assets/graphicDesigner.avif";
import linguist from "../../../assets/linguist.avif";
import socialWorker from "../../../assets/socialWorker.avif";
import performingArtist from "../../../assets/performingArtist.avif";
import manymore from "../../../assets/manymore.jpg";

const careers = [
  {
    title: "Artist",
    image: artist,
    path: "https://en.wikipedia.org/wiki/Artist",
  },
  {
    title: "Historian",
    image: historian,
    path: "https://en.wikipedia.org/wiki/History",
  },
  {
    title: "Psychologist",
    image: psychologist,
    path: "https://en.wikipedia.org/wiki/Psychology",
  },
  {
    title: "Journalist",
    image: journalist,
    path: "https://en.wikipedia.org/wiki/Journalism",
  },
  {
    title: "Fashion Designer",
    image: fashionDesigner,
    path: "https://en.wikipedia.org/wiki/Fashion_design",
  },
  {
    title: "Graphic Designer",
    image: graphicDesigner,
    path: "https://en.wikipedia.org/wiki/Graphic_design",
  },
  {
    title: "Linguist",
    image: linguist,
    path: "https://en.wikipedia.org/wiki/Linguistics",
  },
  {
    title: "Social Worker",
    image: socialWorker,
    path: "https://en.wikipedia.org/wiki/Social_work",
  },
  {
    title: "Performing Artist",
    image: performingArtist,
    path: "https://en.wikipedia.org/wiki/Performing_arts",
  },
  {
    title: "& many more",
    image: manymore,
    path: "https://en.wikipedia.org/wiki/Humanities",
  },
];

const HumanitiesMgm = () => {
  return (
    <div className="container">
      <h2 className="title">Humanities Career</h2>
      <p className="description">
        The humanities stream offers a wide range of creative and intellectual career options. From visual arts to performing arts, history, psychology, and more, students can pursue diverse fields that match their passion and talents.
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

export default HumanitiesMgm;