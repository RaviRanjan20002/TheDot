import "./Arts.css";

// Import images
import Music from "../../../assets/Musics.avif";
import Choreographer from "../../../assets/Choreographer.avif";
import ActingDramatics from "../../../assets/ActingDramatics.avif";
import Modelling from "../../../assets/Modelling.avif";
import FineArtist from "../../../assets/FineArtist.avif";
import GraphicDesigner from "../../../assets/GraphicDesigner.avif";
import Illustrator from "../../../assets/Illustrator.avif";
import InteriorDecorator from "../../../assets/InteriorDecorator.avif";
import manymore from "../../../assets/manymore.jpg";
// import Model3D from "../../../assets/3DModeler.avif";
// import Actor from "../../../assets/Actor.avif";
// import Animator from "../../../assets/Animator.avif";
// import VFXArtist from "../../../assets/VFXArtist.avif";
// import ArtDirector from "../../../assets/ArtDirector.avif";
// import ArtEducator from "../../../assets/ArtEducator.avif";
// import ArtInstaller from "../../../assets/ArtInstaller.avif";
// import ArtTherapist from "../../../assets/ArtTherapist.avif";
// import Artist from "../../../assets/Artist.avif";
// import BodyPainter from "../../../assets/BodyPainter.avif";
// import Calligrapher from "../../../assets/Calligrapher.avif";
// import Cartoonist from "../../../assets/Cartoonist.avif";
// import Cosplayer from "../../../assets/Cosplayer.avif";
// import CostumeDesigner from "../../../assets/CostumeDesigner.avif";
// import CreativeDirector from "../../../assets/CreativeDirector.avif";
// import Dancer from "../../../assets/Dancer.avif";
// import EventDesigner from "../../../assets/EventDesigner.avif";
// import ExhibitDesigner from "../../../assets/ExhibitDesigner.avif";
// import FashionDesigner from "../../../assets/FashionDesigner.avif";
// import FilmDirector from "../../../assets/FilmDirector.avif";
// import MakeupArtist from "../../../assets/MakeupArtist.avif";
// import MuseumCurator from "../../../assets/MuseumCurator.avif";
// import Painter from "../../../assets/Painter.avif";
// import Photographer from "../../../assets/Photographer.avif";
// import PrintDesigner from "../../../assets/PrintDesigner.avif";
// import ProductDesigner from "../../../assets/ProductDesigner.avif";
// import RotoscopingArtist from "../../../assets/RotoscopingArtist.avif";
// import Screenwriter from "../../../assets/Screenwriter.avif";
// import SetDesigner from "../../../assets/SetDesigner.avif";
// import StageManager from "../../../assets/StageManager.avif";
// import TattooArtist from "../../../assets/TattooArtist.avif";
// import VideoGameDesigner from "../../../assets/VideoGameDesigner.avif";
// import VisualMerchandiser from "../../../assets/VisualMerchandiser.avif";
// import WebDesigner from "../../../assets/WebDesigner.avif";
// import WebDeveloper from "../../../assets/WebDeveloper.avif";

const careers = [
  { title: "Music", image: Music, link: "https://www.careersinmusic.com/" },
  { title: "Choreographer", image: Choreographer, link: "https://www.careersinballet.com/choreographer-career-guide" },
  { title: "Acting/Dramatics", image: ActingDramatics, link: "https://www.backstage.com/magazine/article/acting-career-guide-72359/" },
  { title: "Modelling", image: Modelling, link: "https://www.models.com/" },
  { title: "Fine Artist", image: FineArtist, link: "https://www.fineartistcareers.com/" },
  { title: "Graphic Designer", image: GraphicDesigner, link: "https://www.graphicdesignercareers.com/" },
  { title: "Illustrator", image: Illustrator, link: "https://www.illustratorcareers.com/" },
  { title: "Interior Decorator", image: InteriorDecorator, link: "https://www.interiordecoratorcareers.com/" },
  { 
    title: "& many more", 
    image: manymore, 
    link: "https://www.google.com/search?q=Art+and+design+careers&sca_esv=6aebd63ec5ad7295&sxsrf=AHTn8zpg45FYyy-rWcVFyUXFTMUzY-LO0A%3A1738737548382&ei=jAejZ6_3FsPi2roP4_296Q4&ved=0ahUKEwiv7baP9quLAxVDsVYBHeN-L-0Q4dUDCBA&uact=5&oq=Art+and+design+careers&gs_lp=Egxnd3Mtd2l6LXNlcnAiFkFydCBhbmQgZGVzaWduIGNhcmVlcnMyChAAGIAEGEMYigUyChAAGIAEGEMYigUyBBAAGB4yBBAAGB4yBhAAGAUYHjIGEAAYBRgeMgYQABgFGB4yBhAAGAUYHjIGEAAYBRgeMgYQABgFGB5IhR5QqxVYlhpwAngBkAEAmAH3AaABywOqAQMyLTK4AQPIAQD4AQGYAgSgAtsDwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAgcQABiABBgNwgIGEAAYDRgewgIIEAAYBRgNGB7CAggQABgIGA0YHpgDAIgGAZAGCZIHBTIuMC4yoAfBDg&sclient=gws-wiz-serp"
  },


  // { title: "Stage Lighting", image: Stage, link: "https://www.productionhub.com/profiles/details/43737/stage-lighting-career-guide" },
  // { title: "3D Modeler", image: Model3D, link: "https://www.3dmodelingcareers.com/" },
  // { title: "Actor", image: Actor, link: "https://www.actorcareers.com/" },
  // { title: "Animator", image: Animator, link: "https://www.animationcareers.com/" },
  // { title: "Animator/VFX Artist", image: VFXArtist, link: "https://www.vfxcareers.com/" },
  // { title: "Art Director", image: ArtDirector, link: "https://www.artdirectors.com/" },
  // { title: "Art Educator", image: ArtEducator, link: "https://www.arteducators.com/" },
  // { title: "Art Installer", image: ArtInstaller, link: "https://www.artinstallers.com/" },
  // { title: "Art Therapist", image: ArtTherapist, link: "https://www.arttherapists.com/" },
  // { title: "Artist", image: Artist, link: "https://www.artistcareers.com/" },
  // { title: "Body Painter", image: BodyPainter, link: "https://www.bodypaintercareers.com/" },
  // { title: "Calligrapher", image: Calligrapher, link: "https://www.calligraphycareers.com/" },
  // { title: "Cartoonist", image: Cartoonist, link: "https://www.cartoonistcareers.com/" },
  // { title: "Cosplayer", image: Cosplayer, link: "https://www.cosplayercareers.com/" },
  // { title: "Costume Designer", image: CostumeDesigner, link: "https://www.costumedesignercareers.com/" },
  // { title: "Creative Director", image: CreativeDirector, link: "https://www.creativedirectorcareers.com/" },
  // { title: "Dancer", image: Dancer, link: "https://www.dancercareers.com/" },
  // { title: "Event Designer", image: EventDesigner, link: "https://www.eventdesignercareers.com/" },
  // { title: "Exhibit Designer", image: ExhibitDesigner, link: "https://www.exhibitdesignercareers.com/" },
  // { title: "Fashion Designer", image: FashionDesigner, link: "https://www.fashiondesignercareers.com/" },
  // { title: "Film Director", image: FilmDirector, link: "https://www.filmdirectorcareers.com/" },
  // { title: "Makeup Artist", image: MakeupArtist, link: "https://www.makeupartistcareers.com/" },
  // { title: "Museum Curator", image: MuseumCurator, link: "https://www.museumcuratorcareers.com/" },
  // { title: "Painter", image: Painter, link: "https://www.paintercareers.com/" },
  // { title: "Photographer", image: Photographer, link: "https://www.photographercareers.com/" },
  // { title: "Print Designer", image: PrintDesigner, link: "https://www.printdesignercareers.com/" },
  // { title: "Product Designer", image: ProductDesigner, link: "https://www.productdesignercareers.com/" },
  // { title: "Rotoscoping Artist", image: RotoscopingArtist, link: "https://www.rotoscopingartistcareers.com/" },
  // { title: "Screenwriter", image: Screenwriter, link: "https://www.screenwritercareers.com/" },
  // { title: "Set Designer", image: SetDesigner, link: "https://www.setdesignercareers.com/" },
  // { title: "Stage Manager", image: StageManager, link: "https://www.stagemanagercareers.com/" },
  // { title: "Tattoo Artist", image: TattooArtist, link: "https://www.tattooartistcareers.com/" },
  // { title: "Video Game Designer", image: VideoGameDesigner, link: "https://www.videogamedesignercareers.com/" },
  // { title: "Visual Merchandiser", image: VisualMerchandiser, link: "https://www.visualmerchandisercareers.com/" },
  // { title: "Web Designer", image: WebDesigner, link: "https://www.webdesignercareers.com/" },
  // { title: "Web Developer", image: WebDeveloper, link: "https://www.webdevelopercareers.com/" },
  // { 
  //   title: "& many more", 
  //   image: manymore, 
  //   link: "https://www.google.com/search?q=Art+and+design+careers&sca_esv=6aebd63ec5ad7295&sxsrf=AHTn8zpg45FYyy-rWcVFyUXFTMUzY-LO0A%3A1738737548382&ei=jAejZ6_3FsPi2roP4_296Q4&ved=0ahUKEwiv7baP9quLAxVDsVYBHeN-L-0Q4dUDCBA&uact=5&oq=Art+and+design+careers&gs_lp=Egxnd3Mtd2l6LXNlcnAiFkFydCBhbmQgZGVzaWduIGNhcmVlcnMyChAAGIAEGEMYigUyChAAGIAEGEMYigUyBBAAGB4yBBAAGB4yBhAAGAUYHjIGEAAYBRgeMgYQABgFGB4yBhAAGAUYHjIGEAAYBRgeMgYQABgFGB5IhR5QqxVYlhpwAngBkAEAmAH3AaABywOqAQMyLTK4AQPIAQD4AQGYAgSgAtsDwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAgcQABiABBgNwgIGEAAYDRgewgIIEAAYBRgNGB7CAggQABgIGA0YHpgDAIgGAZAGCZIHBTIuMC4yoAfBDg&sclient=gws-wiz-serp"
  // },
];

const Arts = () => {
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

export default Arts;