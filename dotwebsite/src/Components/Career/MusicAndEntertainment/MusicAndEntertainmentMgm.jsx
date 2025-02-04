import React from 'react';
import "./MusicAndEntertainmentMgm.css";


// Import images
import SoundTechnician from "../../../assets/SoundTechnician.jpg";
import StaffPublicist from "../../../assets/StaffPublicist.jpg";
import StageManager from "../../../assets/StageManager.jpg";
import StudioManager from "../../../assets/StudioManager.jpg";
// import StudioSinger from "../../../assets/StudioSinger.jpg";
// import TalentBuyer from "../../../assets/TalentBuyer.jpg";
// import TalentPromoter from "../../../assets/TalentPromoter.jpg";
// import TechnicalSoundDesigner from "../../../assets/TechnicalSoundDesigner.jpg";
// import TourCoordinator from "../../../assets/TourCoordinator.jpg";
// import TourDirector from "../../../assets/TourDirector.jpg";
// import TourManager from "../../../assets/TourManager.jpg";
// import TourPublicist from "../../../assets/TourPublicist.jpg";
// import Transcriber from "../../../assets/Transcriber.jpg";
// import TributeBand from "../../../assets/TributeBand.jpg";
// import TVMusicWriter from "../../../assets/TVMusicWriter.jpg";
// import VideoGameComposer from "../../../assets/VideoGameComposer.jpg";
// import Vocalist from "../../../assets/Vocalist.jpg";
// import WebAdmin from "../../../assets/WebAdmin.jpg";
// import WebDeveloper from "../../../assets/WebDeveloper.jpg";
// import Webmaster from "../../../assets/Webmaster.jpg";
// import WebsiteMarketer from "../../../assets/WebsiteMarketer.jpg";
// import WebsiteMarketingManager from "../../../assets/WebsiteMarketingManager.jpg";
// import FlightAttendant from "../../../assets/FlightAttendant.jpg";
// import ARAdminRepresentative from "../../../assets/ARAdminRepresentative.jpg";
// import ARCoordinator from "../../../assets/ARCoordinator.jpg";
// import ARRepresentative from "../../../assets/ARRepresentative.jpg";
// import ARStaffer from "../../../assets/ARStaffer.jpg";
// import Accompanist from "../../../assets/Accompanist.jpg";
// import AccountRepresentative from "../../../assets/AccountRepresentative.jpg";
// import Agent from "../../../assets/Agent.jpg";
// import AlbumCoverDesigner from "../../../assets/AlbumCoverDesigner.jpg";
// import Arranger from "../../../assets/Arranger.jpg";
// import ArtistDevelopmentRep from "../../../assets/ArtistDevelopmentRep.jpg";
// import ArtistRelationsRep from "../../../assets/ArtistRelationsRep.jpg";
// import ArtistRepresentative from "../../../assets/ArtistRepresentative.jpg";
// import AudioArtist from "../../../assets/AudioArtist.jpg";
// import AudioDesigner from "../../../assets/AudioDesigner.jpg";
// import AudioEngineer from "../../../assets/AudioEngineer.jpg";
// import AudioMasteringEngineer from "../../../assets/AudioMasteringEngineer.jpg";
// import AudioTechnician from "../../../assets/AudioTechnician.jpg";
// import BackgroundSinger from "../../../assets/BackgroundSinger.jpg";
// import BackgroundVocalist from "../../../assets/BackgroundVocalist.jpg";
// import BacklineTech from "../../../assets/BacklineTech.jpg";
// import BandManager from "../../../assets/BandManager.jpg";
// import BarBand from "../../../assets/BarBand.jpg";
// import BookingAgent from "../../../assets/BookingAgent.jpg";
// import BookingManager from "../../../assets/BookingManager.jpg";
// import BookingRepresentative from "../../../assets/BookingRepresentative.jpg";
// import ChorusMember from "../../../assets/ChorusMember.jpg";
// import CollaborativePianist from "../../../assets/CollaborativePianist.jpg";
// import CommercialMusicWriter from "../../../assets/CommercialMusicWriter.jpg";
// import Composer from "../../../assets/Composer.jpg";
// import ConcertPhotographer from "../../../assets/ConcertPhotographer.jpg";
// import ConcertProductionManager from "../../../assets/ConcertProductionManager.jpg";
// import ConcertPromoter from "../../../assets/ConcertPromoter.jpg";
// import ConcertTourManager from "../../../assets/ConcertTourManager.jpg";
// import CoverArtist from "../../../assets/CoverArtist.jpg";
// import CreativeSoundDesigner from "../../../assets/CreativeSoundDesigner.jpg";
// import DirectorOfPublicity from "../../../assets/DirectorOfPublicity.jpg";
// import DirectorOfRadioPromotions from "../../../assets/DirectorOfRadioPromotions.jpg";
// import ElectricalLightingTech from "../../../assets/ElectricalLightingTech.jpg";
// import EventTechnician from "../../../assets/EventTechnician.jpg";
// import FestivalDirector from "../../../assets/FestivalDirector.jpg";
// import FestivalProducer from "../../../assets/FestivalProducer.jpg";
// import FieldMerchandiser from "../../../assets/FieldMerchandiser.jpg";
// import FilmMusicComposer from "../../../assets/FilmMusicComposer.jpg";
// import FlackAgent from "../../../assets/FlackAgent.jpg";
// import FloorShowGroup from "../../../assets/FloorShowGroup.jpg";
// import FOHEngineer from "../../../assets/FOHEngineer.jpg";
// import FrontEndDeveloper from "../../../assets/FrontEndDeveloper.jpg";
// import GeneralManager from "../../../assets/GeneralManager.jpg";
// import GMLabelManager from "../../../assets/GMLabelManager.jpg";
// import GraphicArtist from "../../../assets/GraphicArtist.jpg";
// import GuitarTech from "../../../assets/GuitarTech.jpg";
// import GuitarTechnician from "../../../assets/GuitarTechnician.jpg";
// import HousePhotographer from "../../../assets/HousePhotographer.jpg";
// import Illustrator from "../../../assets/Illustrator.jpg";
// import InstrumentTech from "../../../assets/InstrumentTech.jpg";
// import InternetAdvertisingRep from "../../../assets/InternetAdvertisingRep.jpg";
// import InternetMarketingDirector from "../../../assets/InternetMarketingDirector.jpg";
// import JazzMusician from "../../../assets/JazzMusician.jpg";
// import JingleWriter from "../../../assets/JingleWriter.jpg";
// import KeyboardTech from "../../../assets/KeyboardTech.jpg";
// import LicensingConsultant from "../../../assets/LicensingConsultant.jpg";
// import LicensingRepresentative from "../../../assets/LicensingRepresentative.jpg";
// import LightingEngineer from "../../../assets/LightingEngineer.jpg";
// import LightingTech from "../../../assets/LightingTech.jpg";
// import LightingTechnician from "../../../assets/LightingTechnician.jpg";
// import LiveSoundEngineer from "../../../assets/LiveSoundEngineer.jpg";
// import LoungeBand from "../../../assets/LoungeBand.jpg";
// import Lyricist from "../../../assets/Lyricist.jpg";
// import MarketAdapter from "../../../assets/MarketAdapter.jpg";
// import MarketingPromotionsCoordinator from "../../../assets/MarketingPromotionsCoordinator.jpg";
// import MarketingCoordinator from "../../../assets/MarketingCoordinator.jpg";
// import MarketingRep from "../../../assets/MarketingRep.jpg";
// import MerchandisingRepresentative from "../../../assets/MerchandisingRepresentative.jpg";
// import MixingAssistant from "../../../assets/MixingAssistant.jpg";
// import MixingEngineer from "../../../assets/MixingEngineer.jpg";
// import MonitorEngineer from "../../../assets/MonitorEngineer.jpg";
// import MusicLicensingCoordinator from "../../../assets/MusicLicensingCoordinator.jpg";
// import MusicMarketingRepresentative from "../../../assets/MusicMarketingRepresentative.jpg";
// import MusicMixer from "../../../assets/MusicMixer.jpg";
// import MusicPhotographer from "../../../assets/MusicPhotographer.jpg";
// import MusicProducer from "../../../assets/MusicProducer.jpg";
// import MusicPublisher from "../../../assets/MusicPublisher.jpg";
// import MusicTech from "../../../assets/MusicTech.jpg";
// import MusicWebDesigner from "../../../assets/MusicWebDesigner.jpg";
// import NightclubManager from "../../../assets/NightclubManager.jpg";
// import Orchestrator from "../../../assets/Orchestrator.jpg";
// import PersonalManager from "../../../assets/PersonalManager.jpg";
// import PRDirector from "../../../assets/PRDirector.jpg";
// import PressAgent from "../../../assets/PressAgent.jpg";
// import ProductionManager from "../../../assets/ProductionManager.jpg";
// import ProductionMusicWriter from "../../../assets/ProductionMusicWriter.jpg";
// import ProductionShow from "../../../assets/ProductionShow.jpg";
// import ProductionTechnician from "../../../assets/ProductionTechnician.jpg";
// import ProfessionalManager from "../../../assets/ProfessionalManager.jpg";
// import PromotionStaffer from "../../../assets/PromotionStaffer.jpg";
// import PublicityDirector from "../../../assets/PublicityDirector.jpg";
// import RadioPromoter from "../../../assets/RadioPromoter.jpg";
// import RadioPromotionManager from "../../../assets/RadioPromotionManager.jpg";
// import RecordCompanySalesperson from "../../../assets/RecordCompanySalesperson.jpg";
// import RecordDesigner from "../../../assets/RecordDesigner.jpg";
// import RecordAdvertisingExec from "../../../assets/RecordAdvertisingExec.jpg";
// import RecordProducer from "../../../assets/RecordProducer.jpg";
// import RecordPromoter from "../../../assets/RecordPromoter.jpg";
// import RecordingAssistant from "../../../assets/RecordingAssistant.jpg";
// import RecordingGroup from "../../../assets/RecordingGroup.jpg";
// import RecordingStudioManager from "../../../assets/RecordingStudioManager.jpg";
// import ResidentSoundTechnician from "../../../assets/ResidentSoundTechnician.jpg";
// import RoadCrew from "../../../assets/RoadCrew.jpg";
// import RoadManager from "../../../assets/RoadManager.jpg";
// import Roadie from "../../../assets/Roadie.jpg";
// import RockStar from "../../../assets/RockStar.jpg";
// import SalesMarketingManager from "../../../assets/SalesMarketingManager.jpg";
// import SalesRepresentative from "../../../assets/SalesRepresentative.jpg";
// import SessionMusician from "../../../assets/SessionMusician.jpg";
// import SessionVocalist from "../../../assets/SessionVocalist.jpg";
// import ShowBand from "../../../assets/ShowBand.jpg";
// import ShowGroup from "../../../assets/ShowGroup.jpg";
// import Singer from "../../../assets/Singer.jpg";
// import SocialMediaMarketingSpecialist from "../../../assets/SocialMediaMarketingSpecialist.jpg";
// import SongPlugger from "../../../assets/SongPlugger.jpg";
// import Songwriter from "../../../assets/Songwriter.jpg";
// import SoundArtist from "../../../assets/SoundArtist.jpg";
// import SoundEngineer from "../../../assets/SoundEngineer.jpg";
// import SoundPerson from "../../../assets/SoundPerson.jpg";
// Import all other images similarly...

const roles = [
    { title: "Sound Technician", image: SoundTechnician },
    { title: "Staff Publicist", image: StaffPublicist },
    { title: "Stage Manager", image: StageManager },
    { title: "Studio Manager", image: StudioManager },
    // { title: "Studio Singer", image: StudioSinger },
    // { title: "Talent Buyer", image: TalentBuyer },
    // { title: "Talent Promoter", image: TalentPromoter },
    // { title: "Technical Sound Designer", image: TechnicalSoundDesigner },
    // { title: "Tour Coordinator", image: TourCoordinator },
    // { title: "Tour Director", image: TourDirector },
    // { title: "Tour Manager", image: TourManager },
    // { title: "Tour Publicist", image: TourPublicist },
    // { title: "Transcriber", image: Transcriber },
    // { title: "Tribute Band", image: TributeBand },
    // { title: "TV Music Writer", image: TVMusicWriter },
    // { title: "Video Game Composer", image: VideoGameComposer },
    // { title: "Vocalist", image: Vocalist },
    // { title: "Web Admin", image: WebAdmin },
    // { title: "Web Developer", image: WebDeveloper },
    // { title: "Webmaster", image: Webmaster },
    // { title: "Website Marketer", image: WebsiteMarketer },
    // { title: "Website Marketing Manager", image: WebsiteMarketingManager },
    // { title: "Flight Attendant", image: FlightAttendant },
    // { title: "A&R Administration Representative", image: ARAdminRepresentative },
    // { title: "A&R Coordinator", image: ARCoordinator },
    // { title: "A&R Representative", image: ARRepresentative },
    // { title: "A&R Staffer", image: ARStaffer },
    // { title: "Accompanist", image: Accompanist },
    // { title: "Account Representative", image: AccountRepresentative },
    // { title: "Agent", image: Agent },
    // { title: "Album Cover Designer", image: AlbumCoverDesigner },
    // { title: "Arranger", image: Arranger },
    // { title: "Artist Development Rep", image: ArtistDevelopmentRep },
    // { title: "Artist Relations and Development Representative", image: ArtistRelationsRep },
    // { title: "Artist Representative", image: ArtistRepresentative },
    // { title: "Audio Artist", image: AudioArtist },
    // { title: "Audio Designer", image: AudioDesigner },
    // { title: "Audio Engineer", image: AudioEngineer },
    // { title: "Audio Mastering Engineer", image: AudioMasteringEngineer },
    // { title: "Audio Technician", image: AudioTechnician },
    // { title: "Background Singer", image: BackgroundSinger },
    // { title: "Background Vocalist", image: BackgroundVocalist },
    // { title: "Backline Tech", image: BacklineTech },
    // { title: "Band Manager", image: BandManager },
    // { title: "Bar Band", image: BarBand },
    // { title: "Booking Agent", image: BookingAgent },
    // { title: "Booking Manager", image: BookingManager },
    // { title: "Booking Representative", image: BookingRepresentative },
    // { title: "Chorus Member", image: ChorusMember },
    // { title: "Collaborative Pianist", image: CollaborativePianist },
    // { title: "Commercial Music Writer", image: CommercialMusicWriter },
    // { title: "Composer", image: Composer },
    // { title: "Concert Photographer", image: ConcertPhotographer },
    // { title: "Concert Production Manager", image: ConcertProductionManager },
    // { title: "Concert Promoter", image: ConcertPromoter },
    // { title: "Concert Tour Manager", image: ConcertTourManager },
    // { title: "Cover Artist", image: CoverArtist },
    // { title: "Creative Sound Designer", image: CreativeSoundDesigner },
    // { title: "Director of Publicity and Press Relations", image: DirectorOfPublicity },
    // { title: "Director of Radio Promotions", image: DirectorOfRadioPromotions },
    // { title: "Electrical Lighting Technician", image: ElectricalLightingTech },
    // { title: "Event Technician", image: EventTechnician },
    // { title: "Festival Director", image: FestivalDirector },
    // { title: "Festival Producer", image: FestivalProducer },
    // { title: "Field Merchandiser", image: FieldMerchandiser },
    // { title: "Film Music Composer", image: FilmMusicComposer },
    // { title: "Flack Agent", image: FlackAgent },
    // { title: "Floor Show Group", image: FloorShowGroup },
    // { title: "FOH Engineer", image: FOHEngineer },
    // { title: "Front End Developer", image: FrontEndDeveloper },
    // { title: "General Manager", image: GeneralManager },
    // { title: "GM, Label Manager", image: GMLabelManager },
    // { title: "Graphic Artist", image: GraphicArtist },
    // { title: "Guitar Tech", image: GuitarTech },
    // { title: "Guitar Technician", image: GuitarTechnician },
    // { title: "House Photographer", image: HousePhotographer },
    // { title: "Illustrator", image: Illustrator },
    // { title: "Instrument Tech", image: InstrumentTech },
    // { title: "Internet Advertising Representative", image: InternetAdvertisingRep },
    // { title: "Internet Marketing Director", image: InternetMarketingDirector },
    // { title: "Jazz Musician", image: JazzMusician },
    // { title: "Jingle Writer", image: JingleWriter },
    // { title: "Keyboard Tech", image: KeyboardTech },
    // { title: "Licensing Consultant", image: LicensingConsultant },
    // { title: "Licensing Representative", image: LicensingRepresentative },
    // { title: "Lighting Engineer", image: LightingEngineer },
    // { title: "Lighting Tech", image: LightingTech },
    // { title: "Lighting Technician", image: LightingTechnician },
    // { title: "Live Sound Engineer", image: LiveSoundEngineer },
    // { title: "Lounge Band", image: LoungeBand },
    // { title: "Lyricist", image: Lyricist },
    // { title: "Market Adapter", image: MarketAdapter },
    // { title: "Marketing & Promotions Coordinator", image: MarketingPromotionsCoordinator },
    // { title: "Marketing Coordinator", image: MarketingCoordinator },
    // { title: "Marketing Rep", image: MarketingRep },
    // { title: "Merchandising Representative", image: MerchandisingRepresentative },
    // { title: "Mixing Assistant", image: MixingAssistant },
    // { title: "Mixing Engineer", image: MixingEngineer },
    // { title: "Monitor Engineer", image: MonitorEngineer },
    // { title: "Music Licensing Coordinator", image: MusicLicensingCoordinator },
    // { title: "Music Marketing Representative", image: MusicMarketingRepresentative },
    // { title: "Music Mixer", image: MusicMixer },
    // { title: "Music Photographer", image: MusicPhotographer },
    // { title: "Music Producer", image: MusicProducer },
    // { title: "Music Publisher", image: MusicPublisher },
    // { title: "Music Tech", image: MusicTech },
    // { title: "Music Web Designer", image: MusicWebDesigner },
    // { title: "Nightclub Manager", image: NightclubManager },
    // { title: "Orchestrator", image: Orchestrator },
    // { title: "Personal Manager", image: PersonalManager },
    // { title: "PR Director", image: PRDirector },
    // { title: "Press Agent", image: PressAgent },
    // { title: "Production Manager", image: ProductionManager },
    // { title: "Production Music Writer", image: ProductionMusicWriter },
    // { title: "Production Show", image: ProductionShow },
    // { title: "Production Technician", image: ProductionTechnician },
    // { title: "Professional Manager", image: ProfessionalManager },
    // { title: "Promotion Staffer", image: PromotionStaffer },
    // { title: "Publicity Director", image: PublicityDirector },
    // { title: "Radio Promoter", image: RadioPromoter },
    // { title: "Radio Promotion Manager", image: RadioPromotionManager },
    // { title: "Record Company Salesperson", image: RecordCompanySalesperson },
    // { title: "Record Designer", image: RecordDesigner },
    // { title: "Record Industry Advertising Account Executive", image: RecordAdvertisingExec },
    // { title: "Record Producer", image: RecordProducer },
    // { title: "Record Promoter", image: RecordPromoter },
    // { title: "Recording Assistant", image: RecordingAssistant },
    // { title: "Recording Group", image: RecordingGroup },
    // { title: "Recording Studio Manager", image: RecordingStudioManager },
    // { title: "Resident Sound Technician", image: ResidentSoundTechnician },
    // { title: "Road Crew", image: RoadCrew },
    // { title: "Road Manager", image: RoadManager },
    // { title: "Roadie", image: Roadie },
    // { title: "Rock Star", image: RockStar },
    // { title: "Sales and Marketing Manager", image: SalesMarketingManager },
    // { title: "Sales Representative", image: SalesRepresentative },
    // { title: "Session Musician", image: SessionMusician },
    // { title: "Session Vocalist", image: SessionVocalist },
    // { title: "Show Band", image: ShowBand },
    // { title: "Show Group", image: ShowGroup },
    // { title: "Singer", image: Singer },
    // { title: "Social Media Marketing Specialist", image: SocialMediaMarketingSpecialist },
    // { title: "Song Plugger", image: SongPlugger },
    // { title: "Songwriter", image: Songwriter },
    // { title: "Sound Artist", image: SoundArtist },
    // { title: "Sound Engineer", image: SoundEngineer },
    // { title: "Sound Person", image: SoundPerson }
];

const MusicAndEntertainmentMgm = () => {
    return (
        <div className="container">
            <h1>Music & Entertainment Careers</h1>
            <p className="musicdescription">
                Explore a wide variety of exciting careers in the music and entertainment industry, from technical roles to creative positions.
            </p>

            <h3 className="musicsubtitle">Click below to explore any of the following career(s)</h3>

            <div className="grid">
                {roles.map((role, index) => (
                    <div key={index} className="card">
                        <img src={role.image} alt={role.title} />
                        <h2>{role.title}</h2>
                        <a href={`https://www.google.com/search?q=${encodeURIComponent(role.title)}+Career`} target="_blank" rel="noopener noreferrer" className="button">
                            See Details
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MusicAndEntertainmentMgm;
