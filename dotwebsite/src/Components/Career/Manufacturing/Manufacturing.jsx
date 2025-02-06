
// Import images
import Music from "../../../assets/Musics.avif";
import Choreographer from "../../../assets/Choreographer.avif";
import ActingDramatics from "../../../assets/ActingDramatics.avif";
import Modelling from "../../../assets/Modelling.avif";
import Stage from "../../../assets/stage.avif";
import manymore from "../../../assets/manymore.jpg";

const careers = [
  { title: "Music", image: Music, link: "https://www.careersinmusic.com/" },
  { title: "Choreographer", image: Choreographer, link: "https://www.careersinballet.com/choreographer-career-guide" },
  { title: "Acting/Dramatics", image: ActingDramatics, link: "https://www.backstage.com/magazine/article/acting-career-guide-72359/" },
  { title: "Modelling", image: Modelling, link: "https://www.models.com/" },
  { title: "Stage Lighting", image: Stage, link: "https://www.productionhub.com/profiles/details/43737/stage-lighting-career-guide" },
  { 
    title: "& many more", 
    image: manymore, 
    link: "https://www.google.com/search?q=Art+and+design+careers&sca_esv=6aebd63ec5ad7295&sxsrf=AHTn8zpg45FYyy-rWcVFyUXFTMUzY-LO0A%3A1738737548382&ei=jAejZ6_3FsPi2roP4_296Q4&ved=0ahUKEwiv7baP9quLAxVDsVYBHeN-L-0Q4dUDCBA&uact=5&oq=Art+and+design+careers&gs_lp=Egxnd3Mtd2l6LXNlcnAiFkFydCBhbmQgZGVzaWduIGNhcmVlcnMyChAAGIAEGEMYigUyChAAGIAEGEMYigUyBBAAGB4yBBAAGB4yBhAAGAUYHjIGEAAYBRgeMgYQABgFGB4yBhAAGAUYHjIGEAAYBRgeMgYQABgFGB5IhR5QqxVYlhpwAngBkAEAmAH3AaABywOqAQMyLTK4AQPIAQD4AQGYAgSgAtsDwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAgcQABiABBgNwgIGEAAYDRgewgIIEAAYBRgNGB7CAggQABgIGA0YHpgDAIgGAZAGCZIHBTIuMC4yoAfBDg&sclient=gws-wiz-serp"
  },
];

const Manufacturing = () => {
  return (
    <div className="container">
      <h1>Arts and Design Careers</h1>
      <p className="description">
        Performing arts involves self-expression through music, dance, and drama. 
        With India being a leading film producer, there are vast career opportunities in 
        theatre, entertainment, television, and film. From certificate courses to masters 
        programs, a formal education in the arts enhances skills and opportunities in 
        this dynamic field.
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

export default Manufacturing;