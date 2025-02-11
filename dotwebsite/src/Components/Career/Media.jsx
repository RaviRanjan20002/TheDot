import eventmgm from "../../assets/eventmgm.avif";
import wed from "../../assets/wed.avif";
import com from "../../assets/com.avif";
import jor from "../../assets/jor.avif";
import vr from "../../assets/vr.avif";
import wec from "../../assets/wec.avif";
import pr from "../../assets/pr.avif";
import imgc from "../../assets/imgc.avif";
import content from "../../assets/content.avif";
import manymore from "../../assets/manymore.jpg";
const careers = [
  {
    title: "Event Management",
    image: eventmgm,
    path: "https://en.wikipedia.org/wiki/Event_management",
  },
  {
    title: "Wedding Planner",
    image: wed,
    path: "https://en.wikipedia.org/wiki/Wedding_planner",
  },
  {
    title: "Mass Communication",
    image: com,
    path: "https://en.wikipedia.org/wiki/Mass_communication",
  },
  {
    title: "Journalism",
    image: jor,
    path: "https://en.wikipedia.org/wiki/Journalism",
  },
  {
    title: "Video/Radio Jockey",
    image: vr,
    path: "https://en.wikipedia.org/wiki/Radio_personality",
  },
  {
    title: "Writer, Editor, Copywriter",
    image: wec,
    path: "https://en.wikipedia.org/wiki/Copywriting",
  },
  {
    title: "Public Relations",
    image: pr,
    path: "https://en.wikipedia.org/wiki/Public_relations",
  },
  {
    title: "Content writer",
    image: content,
    path: "https://en.wikipedia.org/wiki/Content_writing",
  },
  {
    title: "Image Consultant",
    image: imgc,
    path: "https://en.wikipedia.org/wiki/Image_consulting",
  },
  {
      title: "& many more",
      image: manymore,
      path: "https://en.wikipedia.org/wiki/Mass_communication",
  },
];

const Media = () => {
  return (
    <div className="container">
      <h2 className="title">Media and Communications</h2>
      <p className="description">
      Journalism and mass communication keep citizens informed and shape public opinion through various media, offering careers in reporting, editing, PR, and broadcasting. With growing media outlets and technology, opportunities span fields like politics, sports, and investigative journalism.
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

export default Media;
