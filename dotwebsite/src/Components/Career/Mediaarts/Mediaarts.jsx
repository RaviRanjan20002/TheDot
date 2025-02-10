// Import images
import Actor from "../../../assets/Actor.avif";
import Anchoring from "../../../assets/Anchoring.avif";
import Blogging from "../../../assets/Blogging.avif";
import CameraOperator from "../../../assets/CameraOperator.avif";
import Cinematographer from "../../../assets/Cinematographer.avif";
import CreativeWriting from "../../../assets/CreativeWriting.avif";
import DanceChoreographer from "../../../assets/DanceChoreographer.avif";
import Dancer from "../../../assets/Dancer.avif";

// import DiscJockeying from "../../../assets/DiscJockeying.avif";
// import DubbingVoiceOverArtist from "../../../assets/DubbingVoiceOverArtist.avif";
// import Editor from "../../../assets/Editor.avif";
// import FilmEditor from "../../../assets/FilmEditor.avif";
// import Journalist from "../../../assets/Journalist.avif";
// import MultimediaSpecialist from "../../../assets/MultimediaSpecialist.avif";
// import Musician from "../../../assets/Musician.avif";
// import PhotographerJournalist from "../../../assets/PhotographerJournalist.avif";
// import Producer from "../../../assets/Producer.avif";
// import RadioJockey from "../../../assets/RadioJockey.avif";
// import SoundEngineer from "../../../assets/SoundEngineer.avif";
// import SportsCommentator from "../../../assets/SportsCommentator.avif";
// import StandUpComedy from "../../../assets/StandUpComedy.avif";
// import TVFilmProducer from "../../../assets/TVFilmProducer.avif";
// import TVFilmDirector from "../../../assets/TVFilmDirector.avif";
// import TVStageProducer from "../../../assets/TVStageProducer.avif";
// import VideoJockey from "../../../assets/VideoJockey.avif";
// import Writer from "../../../assets/Writer.avif";
// import Youtubing from "../../../assets/Youtubing.avif";
import manymore from "../../../assets/manymore.jpg";

const careers = [
  { title: "Actor", image: Actor, link: "https://www.example.com/actor" },
  { title: "Anchoring", image: Anchoring, link: "https://www.example.com/anchoring" },
  { title: "Blogging", image: Blogging, link: "https://www.example.com/blogging" },
  { title: "Camera Operator", image: CameraOperator, link: "https://www.example.com/camera-operator" },
  { title: "Cinematographer", image: Cinematographer, link: "https://www.example.com/cinematographer" },
  { title: "Creative Writing", image: CreativeWriting, link: "https://www.example.com/creative-writing" },
  { title: "Dance Choreographer", image: DanceChoreographer, link: "https://www.example.com/dance-choreographer" },
  { title: "Dancer", image: Dancer, link: "https://www.example.com/dancer" },
  
  // { title: "Disc Jockeying(DJ)", image: DiscJockeying, link: "https://www.example.com/dj" },
  // { title: "Dubbing/Voice over Artist", image: DubbingVoiceOverArtist, link: "https://www.example.com/dubbing-artist" },
  // { title: "Editor", image: Editor, link: "https://www.example.com/editor" },
  // { title: "Film Editor", image: FilmEditor, link: "https://www.example.com/film-editor" },
  // { title: "Journalist/Mass communication", image: Journalist, link: "https://www.example.com/journalist" },
  // { title: "Multimedia Specialist", image: MultimediaSpecialist, link: "https://www.example.com/multimedia-specialist" },
  // { title: "Musician", image: Musician, link: "https://www.example.com/musician" },
  // { title: "Photographer journalist", image: PhotographerJournalist, link: "https://www.example.com/photographer-journalist" },
  // { title: "Producer", image: Producer, link: "https://www.example.com/producer" },
  // { title: "Radio Jockey (RJ)", image: RadioJockey, link: "https://www.example.com/rj" },
  // { title: "Sound Engineer", image: SoundEngineer, link: "https://www.example.com/sound-engineer" },
  // { title: "Sports Commentator", image: SportsCommentator, link: "https://www.example.com/sports-commentator" },
  // { title: "Stand Up Comedy", image: StandUpComedy, link: "https://www.example.com/stand-up-comedy" },
  // { title: "TV/ Film Producer", image: TVFilmProducer, link: "https://www.example.com/tv-film-producer" },
  // { title: "TV/Film Director", image: TVFilmDirector, link: "https://www.example.com/tv-film-director" },
  // { title: "TV/Stage Producer", image: TVStageProducer, link: "https://www.example.com/tv-stage-producer" },
  // { title: "Video Jockey", image: VideoJockey, link: "https://www.example.com/video-jockey" },
  // { title: "Writer", image: Writer, link: "https://www.example.com/writer" },
  // { title: "Youtubing", image: Youtubing, link: "https://www.example.com/youtubing" },
  { 
    title: "& many more", 
    image: manymore, 
    link: "https://www.google.com/search?q=Art+and+design+careers" 
  },
];

const Mediaarts = () => {
  return (
    <div className="container">
      <h1>Media and Performing arts</h1>
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

export default Mediaarts;
