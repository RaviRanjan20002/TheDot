import eventmgm from "../../../assets/eventmgm.avif";
import wed from "../../../assets/wed.avif";
import com from "../../../assets/com.avif";
import jor from "../../../assets/jor.avif";
import vr from "../../../assets/vr.avif";
import wec from "../../../assets/wec.avif";
import pr from "../../../assets/pr.avif";
import imgc from "../../../assets/imgc.avif";
import content from "../../../assets/content.avif";
import manymore from "../../../assets/manymore.jpg";
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
    <div className="lawcontainer">
      <h2 className="lawtitle">Media and Communications</h2>
      <p className="lawdescription">
        Journalists in the 21st century play a very important role in providing
        necessary information to people regarding the day-to-day life and keep
        the citizens of the country updated with the current affairs and
        happenings that take place. Mass communication helps in disseminating
        such wide range of information to the people in a variety of ways such
        as audio, video, graphics, animation etc. Today, journalism is not only
        about reading out news to the people, but is central to shaping the
        thought patterns among people. With the increasing number of news
        channels, newspapers and the expansion of technology, journalism and
        mass communication has a wide scope and plenty of opportunities. Mass
        communication opens the door to fields like public relations, editing,
        scriptwriting, video jockey, and radio jockey amongst many others. The
        coursework for journalism and mass communication provides the technical
        aspects of knowledge required for the field. Other important skills
        necessary for the field are the ability to write and speak effectively,
        interest in the current affairs. General knowledge constitutes an
        important component of journalism and mass communication. Specialization
        in the field of journalism is available in areas like sports, politics,
        finance and economics, investigation etc. Master level courses are also
        available and are also considered to be important for future growth.
        Some of the top job recruiters in the field include AIR, NDTV Network,
        India Today Network, Hindustan Group of Publications, Viacom etc.
        Trending Field: Reporters, Journalists, Editors, Scriptwriters, Anchors,
        Writers etc.
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

export default Media;
