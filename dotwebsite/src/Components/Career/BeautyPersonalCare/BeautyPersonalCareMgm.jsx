import React from 'react';
import "./BeautyPersonalCareMgm.css";

// Import images for the top 8 careers (displayed first)
import Aromatherapist from "../../../assets/Aromatherapist.jpg";
import Barber from "../../../assets/Barber.jpg";
import BeautyBlogger from "../../../assets/BeautyBlogger.jpg";
import HairStylist from "../../../assets/HairStylist.jpg";
import Dermatologist from "../../../assets/Dermatologist.jpg";
import SpaTherapist from "../../../assets/SpaTherapist.jpg";
import MakeupArtist from "../../../assets/MakeupArtist.jpg";
import PlasticSurgeon from "../../../assets/PlasticSurgeon.jpg";
import manymore from "../../../assets/manymore.jpg";

// Import images for the remaining careers (commented out)
/*
import Cosmetologist from "../../../assets/Cosmetologist.jpg";
import Dermatologist from "../../../assets/Dermatologist.jpg";
import Esthetician from "../../../assets/Esthetician.jpg";
import EyebrowSpecialist from "../../../assets/EyebrowSpecialist.jpg";
import FreelanceBeautyProfessional from "../../../assets/FreelanceBeautyProfessional.jpg";
import HairColorSpecialist from "../../../assets/HairColorSpecialist.jpg";
import HairStylist from "../../../assets/HairStylist.jpg";
import LaserTechnician from "../../../assets/LaserTechnician.jpg";
import LashTechnician from "../../../assets/LashTechnician.jpg";
import MakeupArtist from "../../../assets/MakeupArtist.jpg";
import MassageTherapist from "../../../assets/MassageTherapist.jpg";
import NailTechnician from "../../../assets/NailTechnician.jpg";
import PermanentMakeupArtist from "../../../assets/PermanentMakeupArtist.jpg";
import PlasticSurgeon from "../../../assets/PlasticSurgeon.jpg";
import SalonSpaManager from "../../../assets/SalonSpaManager.jpg";
import SpaTherapist from "../../../assets/SpaTherapist.jpg";
import Trichologist from "../../../assets/Trichologist.jpg";
*/

const roles = [
    { title: "Aromatherapist", image: Aromatherapist },
    { title: "Barber", image: Barber },
    { title: "Beauty Blogger/Influencer", image: BeautyBlogger },
    { title: "Dermatologist", image: Dermatologist },
    { title: "Hair Stylist", image: HairStylist },
    { title: "Makeup Artist", image: MakeupArtist },
    { title: "Spa Therapist", image: SpaTherapist },
    { title: "Plastic Surgeon", image: PlasticSurgeon },
  
    // Remaining careers (commented out)
    /*
    { title: "Barber", image: Barber },
    { title: "Beauty Brand Manager", image: BeautyBrandManager },
    { title: "Beauty Educator", image: BeautyEducator },
    { title: "Beauty Product Developer", image: BeautyProductDeveloper },
    { title: "Cosmetic Chemist", image: CosmeticChemist },
    { title: "Eyebrow Specialist", image: EyebrowSpecialist },
    { title: "Freelance Beauty Professional", image: FreelanceBeautyProfessional },
    { title: "Hair Color Specialist", image: HairColorSpecialist },
    { title: "Laser Technician", image: LaserTechnician },
    { title: "Lash Technician", image: LashTechnician },
    { title: "Massage Therapist", image: MassageTherapist },
    { title: "Nail Technician", image: NailTechnician },
    { title: "Permanent Makeup Artist", image: PermanentMakeupArtist },
    { title: "Plastic Surgeon", image: PlasticSurgeon },
    { title: "Salon/Spa Manager", image: SalonSpaManager },
    { title: "Spa Therapist", image: SpaTherapist },
    { title: "Trichologist", image: Trichologist },
    */
  
    // "many more" card
    { 
      title: "& many more", 
      image: manymore, 
      link: "https://www.google.com/search?q=Beauty+%26+Personal+Care+Careers" 
    }
];

const BeautyPersonalCareMgm = () => {
  return (
    <div className="container">
      <h1>Beauty and Personal Care Careers</h1>
      <p className="beautydescription">
        Discover exciting career paths in the beauty and personal care industry! Whether you're working with skin, hair, makeup, or wellness, these roles offer a chance to make a difference in people’s lives.
      </p>

      <h3 className="beautysubtitle">Click below to explore any of the following career(s)</h3>

      <div className="grid">
        {roles.map((role, index) => (
          <div key={index} className="card">
            <img src={role.image} alt={role.title} />
            <h2>{role.title}</h2>
            <a
              href={role.link || `https://www.google.com/search?q=${encodeURIComponent(role.title)}+Career`}
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

export default BeautyPersonalCareMgm;
