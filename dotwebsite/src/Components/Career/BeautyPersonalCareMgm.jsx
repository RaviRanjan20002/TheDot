import React from 'react';
// import "./BeautyPersonalCareMgm.css";

// Import images for the top 8 careers
import Aromatherapist from "../../assets/Aromatherapist.jpg";
import Barber from "../../assets/Barber.jpg";
import BeautyBlogger from "../../assets/BeautyBlogger.jpg";
import HairStylist from "../../assets/HairStylist.jpg";
import Dermatologist from "../../assets/Dermatologist.jpg";
import SpaTherapist from "../../assets/SpaTherapist.jpg";
import MakeupArtist from "../../assets/MakeupArtist.jpg";
import PlasticSurgeon from "../../assets/PlasticSurgeon.jpg";
import manymore from "../../assets/manymore.jpg";

const roles = [
  { title: "Aromatherapist", image: Aromatherapist, link: "https://en.wikipedia.org/wiki/Aromatherapy" },
  { title: "Barber", image: Barber, link: "https://en.wikipedia.org/wiki/Barber" },
  { title: "Beauty Blogger/Influencer", image: BeautyBlogger, link: "https://en.wikipedia.org/wiki/Beauty_blogger" },
  { title: "Dermatologist", image: Dermatologist, link: "https://en.wikipedia.org/wiki/Dermatology" },
  { title: "Hair Stylist", image: HairStylist, link: "https://en.wikipedia.org/wiki/Hairdresser" },
  { title: "Makeup Artist", image: MakeupArtist, link: "https://en.wikipedia.org/wiki/Make-up_artist" },
  { title: "Spa Therapist", image: SpaTherapist, link: "https://en.wikipedia.org/wiki/Spa" },
  { title: "Plastic Surgeon", image: PlasticSurgeon, link: "https://en.wikipedia.org/wiki/Plastic_surgery" },
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
      <p className="description">
        Discover exciting career paths in the beauty and personal care industry! Whether you're working with skin, hair, makeup, or wellness, these roles offer a chance to make a difference in people’s lives.
      </p>

      <h3 className="subtitle">Click below to explore any of the following career(s)</h3>

      <div className="grid">
        {roles.map((role, index) => (
          <div key={index} className="card">
            <img src={role.image} alt={role.title} />
            <h2>{role.title}</h2>
            <a
              href={role.link}
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
