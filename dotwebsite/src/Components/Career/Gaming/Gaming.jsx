// Import images
import DevOpsEngineer from "../../../assets/DevOpsEngineer.jpg";
import GameAnimator from "../../../assets/GameAnimator.jpg";
import GameAudioProgrammer from "../../../assets/GameAudioProgrammer.jpg";
import GameCinematicsDirector from "../../../assets/GameCinematicsDirector.jpg";
import GameCreativeDirector from "../../../assets/GameCreativeDirector.jpg";
import GameDesigner from "../../../assets/GameDesigner.jpg";
import GameDeveloper from "../../../assets/GameDeveloper.jpg";
import GameJournalist from "../../../assets/GameJournalist.jpg";

// import GameLevelDesigner from "../../../assets/GameLevelDesigner.jpg";
// import GameLicenseSupportEngineer from "../../../assets/GameLicenseSupportEngineer.jpg";
// import GameModeler from "../../../assets/GameModeler.jpg";
// import GameSoftwareEngineer from "../../../assets/GameSoftwareEngineer.jpg";
// import GameTester from "../../../assets/GameTester.jpg";
// import GameVisualArtist from "../../../assets/GameVisualArtist.jpg";
// import GameWriter from "../../../assets/GameWriter.jpg";
// import InterpreterTranslator from "../../../assets/InterpreterTranslator.jpg";
// import NarrativeDesigner from "../../../assets/NarrativeDesigner.jpg";
// import SoundDesigner from "../../../assets/SoundDesigner.jpg";
import manymore from "../../../assets/manymore.jpg";

const careers = [
  { title: "DevOps Engineer", image: DevOpsEngineer, link: "https://www.example.com/devops-engineer" },
  { title: "Game Animator/VFX/3D/UI/UX", image: GameAnimator, link: "https://www.example.com/game-animator" },
  { title: "Game Audio Programmer", image: GameAudioProgrammer, link: "https://www.example.com/game-audio-programmer" },
  { title: "Game Cinematics Director", image: GameCinematicsDirector, link: "https://www.example.com/game-cinematics-director" },
  { title: "Game Creative Director", image: GameCreativeDirector, link: "https://www.example.com/game-creative-director" },
  { title: "Game Designer", image: GameDesigner, link: "https://www.example.com/game-designer" },
  { title: "Game Developer/Programmer", image: GameDeveloper, link: "https://www.example.com/game-developer" },
  { title: "Game Journalist/Critic", image: GameJournalist, link: "https://www.example.com/game-journalist" },

  // { title: "Game Level Designer", image: GameLevelDesigner, link: "https://www.example.com/game-level-designer" },
  // { title: "Game License Support Engineer", image: GameLicenseSupportEngineer, link: "https://www.example.com/game-license-support" },
  // { title: "Game Modeler", image: GameModeler, link: "https://www.example.com/game-modeler" },
  // { title: "Game Software Engineer", image: GameSoftwareEngineer, link: "https://www.example.com/game-software-engineer" },
  // { title: "Game Tester", image: GameTester, link: "https://www.example.com/game-tester" },
  // { title: "Game Visual Artist", image: GameVisualArtist, link: "https://www.example.com/game-visual-artist" },
  // { title: "Game Writer/Concept Artist", image: GameWriter, link: "https://www.example.com/game-writer" },
  // { title: "Interpreter/Translator", image: InterpreterTranslator, link: "https://www.example.com/interpreter-translator" },
  // { title: "Narrative Designer", image: NarrativeDesigner, link: "https://www.example.com/narrative-designer" },
  // { title: "Sound Designer/Audio Engineer", image: SoundDesigner, link: "https://www.example.com/sound-designer" },
  { 
    title: "& many more", 
    image: manymore, 
    link: "https://www.google.com/search?q=gaming+industry+careers" 
  },
];

const Gaming = () => {
  return (
    <div className="container">
      <h1>Gaming Industry Careers</h1>
      <p className="description">
        The gaming industry is a rapidly growing field that offers a variety of career opportunities, from design and development to audio engineering and narrative creation. Whether you're interested in the creative, technical, or analytical aspects of game production, there's a role for you in this dynamic and exciting industry.
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

export default Gaming;
